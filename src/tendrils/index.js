/* global Float32Array */

import shader from 'gl-shader';
import FBO from 'gl-fbo';
import triangle from 'a-big-triangle';
import ndarray from 'ndarray';

import Particles from './particles';
import { step/*, nextPow2*/ } from '../utils';


// Shaders

import logicFrag from './shaders/logic.frag.glsl';

import flowVert from './shaders/flow/vert.glsl';
import flowFrag from './shaders/flow/frag.glsl';

import renderVert from './shaders/render/vert.glsl';
import renderFrag from './shaders/render/frag.glsl';

import screenVert from './shaders/screen/vert.glsl';

import copyFadeFrag from './shaders/copy-fade.frag.glsl';

// See the definition in `./shaders/state/inert.glsl`
const inert = -10000;


export class Tendrils {
    constructor(gl, settings) {
        this.gl = gl;
        this.state = Object.assign({}, defaultSettings, settings);

        this.flow = FBO(this.gl, [1, 1], { float: true });

        // Multiple bufferring
        /**
         * @todo May need more buffers/passes later
         */
        this.buffers = [FBO(this.gl, [1, 1]), FBO(this.gl, [1, 1])];

        this.logicShader = null;
        this.renderShader = shader(this.gl, renderVert, renderFrag);
        this.flowShader = shader(this.gl, flowVert, flowFrag);
        this.fadeShader = shader(this.gl, screenVert, copyFadeFrag);
        this.spawnShader = shader(this.gl, screenVert, copyFadeFrag);

        this.particles = null;

        this.viewSize = [0, 0];
        this.pow2Size = [0, 0];

        this.start = Date.now();
        this.time = 0;

        this.tempData = [];

        this.respawnOffset = [0, 0];
        this.respawnShape = [0, 0];

        this.spawnCache = null;
        this.spawnCacheOffset = 0;

        this.setup();
        this.reset();
    }

    setup(...rest) {
        this.setupParticles(...rest);
        this.setupRespawn(...rest);
        // this.setupSpawnCache(...rest);
    }

    reset(...rest) {
        this.resetParticles(...rest);
        this.setupRespawn(...rest);
        // this.resetSpawnCache(...rest);
    }

    // @todo
    dispose() {
        this.particles.dispose();

        delete this.particles;
        delete this.spawnCache;
    }


    setupParticles(rootNum = this.state.rootNum) {
        const shape = [rootNum, rootNum];

        this.particles = new Particles(this.gl, {
                shape,

                // Double the rootNum of (vertical neighbour) vertices, to have
                // pairs alternating between previous and current state.
                // (Vertical neighbours, because WebGL iterates column-major.)
                geomShape: [shape[0], shape[1]*2],

                logicFrag: logicFrag,
                render: this.renderShader
            });

        this.logicShader = this.particles.logic;

        this.particles.setup(this.state.numBuffers || 2);
    }

    // Populate the particles with the given spawn function
    resetParticles(spawn = this.spawn.bind(this)) {
        this.particles.spawn(spawn);
    }


    // Setting particles

    /**
     * Used in a big loop, so should be optimised.
     */

    spawn(data) {
        let radius = this.state.startRadius;
        let speed = this.state.startSpeed;

        let angle = Math.random()*Math.PI*2;
        let scaled = Math.random()*radius;

        // Position
        data[0] = Math.cos(angle)*scaled;
        data[1] = Math.sin(angle)*scaled;


        // Velocity

        angle = Math.random()*Math.PI*2;
        scaled = Math.random()*speed;

        data[2] = Math.cos(angle)*scaled;
        data[3] = Math.sin(angle)*scaled;

        return data;
    }

    inert(data) {
        data[0] = data[1] = inert;
        data[2] = data[3] = 0;

        return data;
    }


    // Rendering and logic

    clearView() {
        this.buffers.forEach((buffer) => {
            buffer.bind();
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        });

        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    clearFlow() {
        this.flow.bind();
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    restart() {
        this.clearView();
        this.clearFlow();
        this.reset();
    }

    render() {
        const directRender = this.directRender();

        this.resize(directRender);


        // Time

        const t0 = this.time;

        this.time = Date.now()-this.start;

        const dt = (this.state.timeStep || this.time-t0);


        // Physics

        if(!this.state.paused) {
            this.particles.logic = this.logicShader;

            // Disabling blending here is important
            this.gl.disable(this.gl.BLEND);

            this.particles.step({
                    ...this.state,
                    dt,
                    time: this.time,
                    start: this.start,
                    flow: this.flow.color[0].bind(1),
                    viewSize: this.viewSize
                });

            this.gl.enable(this.gl.BLEND);
            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        }


        // Flow FBO and view renders

        const drawUniforms = {
            ...this.state,
            previous: this.particles.buffers[1].color[0].bind(2),
            dataSize: this.particles.shape,
            viewSize: this.viewSize,
            time: this.time
        };

        this.particles.render = this.flowShader;

        // Render to the flow FBO - after the logic render, so particles don't
        // respond to their own flow.

        this.flow.bind();

        this.gl.lineWidth(this.state.flowWidth);
        this.particles.draw({
                ...drawUniforms,
                showFlow: false
            },
            this.gl.LINES);

        /**
         * @todo Mipmaps for global flow sampling - not working at the moment.
         * @todo Instead of auto-generating mipmaps, should we re-render at each
         *       scale, with different opacities and line widths? This would
         *       mean the influence is spread out when drawing, instead of when
         *       sampling.
         */
        // this.flow.color[0].generateMipmap();


        // Render to the view.

        if(this.state.showFlow) {
            // Render the flow directly to the screen
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.particles.draw(drawUniforms, this.gl.LINES);
        }
        else {
            // Set up the particles for rendering
            this.particles.render = this.renderShader;
            this.gl.lineWidth(1);

            if(directRender) {
                // Render the particles directly to the screen

                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);

                if(this.state.autoClearView) {
                    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
                }

                this.particles.draw(drawUniforms, this.gl.LINES);
            }
            else {
                // Multi-buffer passes

                this.buffers[0].bind();
                this.gl.clear(this.gl.COLOR_BUFFER_BIT);

                // Copy and fade the last buffer into the current buffer

                this.fadeShader.bind();

                Object.assign(this.fadeShader.uniforms, {
                        opacity: Math.min(1, this.state.fadeAlpha/dt),
                        view: this.buffers[1].color[0].bind(1),
                        viewSize: this.viewSize
                    });

                triangle(this.gl);


                // Render the particles into the current buffer
                this.particles.draw(drawUniforms, this.gl.LINES);


                // Copy and fade the current buffer to the screen

                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
                this.gl.clear(this.gl.COLOR_BUFFER_BIT);

                this.fadeShader.bind();

                Object.assign(this.fadeShader.uniforms, {
                        opacity: 1,
                        view: this.buffers[0].color[0].bind(2),
                        viewSize: this.viewSize
                    });

                triangle(this.gl);

                // Step buffers
                step(this.buffers);
            }
        }
    }

    resize(directRender = this.directRender()) {
        this.viewSize[0] = this.gl.drawingBufferWidth;
        this.viewSize[1] = this.gl.drawingBufferHeight;

        // this.pow2Size.fill(nextPow2(Math.max(...this.viewSize)));

        if(!directRender) {
            this.buffers.forEach((buffer) => buffer.shape = this.viewSize);
        }

        // this.flow.shape = this.pow2Size;
        this.flow.shape = this.viewSize;

        this.gl.viewport(0, 0, 1, 1);
    }


    // @todo More specific, or derived from properties?
    directRender(state = this.state) {
        return (state.autoClearView || state.fadeAlpha < 0);
    }


    // Respawn

    /**
     * @todo Is the old approach below approach needed? Could use a `spawn`
     *       sweep across sub-regions of the particles buffers.
     */

    respawn(spawn = this.spawn.bind(this)) {
        this.offsetRespawn(this.respawnOffset, this.respawnShape,
            this.particles.shape);

        this.particles.spawn(spawn,
            this.particles.pixels.lo(...this.respawnOffset)
                .hi(...this.respawnShape),
            this.respawnOffset);
    }


    // Respawn on the GPU using a given shader

    respawnShader(spawnShader, update) {
        this.resize(false);

        this.particles.logic = spawnShader;

        // Disabling blending here is important
        this.gl.disable(this.gl.BLEND);

        this.particles.step(Particles.applyUpdate({
                ...this.state,
                viewSize: this.viewSize
            },
            update));

        this.particles.logic = this.logicShader;

        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    }


    // Cached respawn chunk sweep

    respawnCached(spawn = this.spawn.bind(this)) {
        this.offsetRespawn(this.respawnOffset, this.spawnCache.shape,
            this.particles.shape);

        // Reset this part of the FBO
        this.particles.buffers.forEach((buffer) =>
            buffer.color[0].setPixels(this.spawnCache, this.respawnOffset));


        // Finally, change some of the spawn data values for next time too,
        // a line at a time

        // Linear data stepping, no need for 2D
        this.spawnCacheOffset += this.spawnCache.shape[0]*4;

        // Wrap
        if(this.spawnCacheOffset >= this.spawnCache.data.length) {
            this.spawnCacheOffset = 0;
        }

        // Check bounds
        this.spawnCacheOffset = Math.min(this.spawnCacheOffset,
            this.spawnCache.data.length-(this.spawnCache.shape[0]*4));

        for(let s = 0; s < this.spawnCache.shape[1]; s += 4) {
            this.spawnCache.data.set(spawn(this.tempData),
                this.spawnCacheOffset+s);
        }
    }

    setupRespawn(rootNum = this.state.rootNum,
            respawnAmount = this.state.respawnAmount) {
        const side = Math.ceil(rootNum*respawnAmount);

        this.respawnShape.fill(side);
        this.respawnOffset.fill(0);
    }

    setupSpawnCache(dataShape = this.respawnShape) {
        this.spawnCache = ndarray(new Float32Array(dataShape[0]*dataShape[1]*4),
            [dataShape[0], dataShape[1], 4]);
    }

    /**
     * Populate the respawn data with the given spawn function
     */
    resetSpawnCache(spawn = this.spawn.bind(this)) {
        for(let i = 0; i < this.spawnCache.shape[0]; ++i) {
            for(let j = 0; j < this.spawnCache.shape[1]; ++j) {
                const spawned = spawn(this.tempData);

                this.spawnCache.set(i, j, 0, spawned[0]);
                this.spawnCache.set(i, j, 1, spawned[1]);
                this.spawnCache.set(i, j, 2, spawned[2]);
                this.spawnCache.set(i, j, 3, spawned[3]);
            }
        }
    }

    offsetRespawn(offset = this.respawnOffset, stride = this.respawnShape,
            shape = this.particles.shape) {
        // Step the respawn shape horizontally and vertically within the FBO

        // X

        offset[0] += stride[0];

        // Wrap
        if(offset[0] >= shape[0]) {
            offset[0] = 0;
            // Step down Y - carriage return style
            offset[1] += stride[1];
        }

        // Clamp
        offset[0] = Math.min(offset[0], shape[0]-stride[0]);


        // Y

        // Wrap
        if(offset[1] >= shape[1]) {
            offset[1] = 0;
        }

        // Clamp
        offset[1] = Math.min(offset[1], shape[1]-stride[1]);

        return offset;
    }
}


export const defaultSettings = {
    rootNum: Math.pow(2, 9),

    paused: false,
    timeStep: 1000/60,

    autoClearView: false,
    showFlow: false,

    startRadius: 0.3,
    startSpeed: 0.01,

    minSpeed: 0.000001,
    maxSpeed: 0.01,
    damping: 0.045,

    flowDecay: 0.0001,
    flowWidth: 3,

    noiseSpeed: 0.00025,
    noiseScale: 2.125,

    forceWeight: 0.015,
    flowWeight: 1,
    wanderWeight: 0.001,

    color: [1, 1, 1, 0.05],
    fadeAlpha: -1,
    speedAlpha: 0.000001,

    respawnAmount: 0.02
};

export const glSettings = {
    preserveDrawingBuffer: true
};


export default Tendrils;