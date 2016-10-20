import shader from 'gl-shader';
import FBO from 'gl-fbo';
import ndarray from 'ndarray';

import Particles from './particles';
import Timer from './timer';
import { step/*, nextPow2*/ } from '../utils';
import initSpawner from './spawn/init/cpu';
import { coverAspect } from './utils/aspect';
import Screen from './screen';


// Shaders

import logicFrag from './logic.frag';

import renderVert from './render/index.vert';
import renderFrag from './render/index.frag';

import flowVert from './flow/index.vert';
import flowFrag from './flow/index.frag';

import screenVert from './screen/index.vert';
import screenFrag from './screen/index.frag';

// @todo Try drawing a semi-transparent block over the last frame?
import copyFrag from './screen/copy.frag';


export const defaults = () => ({
    state: {
        rootNum: Math.pow(2, 9),

        autoClearView: false,

        damping: 0.043,
        speedLimit: 0.01,

        forceWeight: 0.017,
        flowWeight: 1,
        wanderWeight: 0.002,

        flowDecay: 0.003,
        flowWidth: 5,

        noiseScale: 2.125,
        noiseSpeed: 0.00025,

        lineWidth: 1,
        speedAlpha: 0.000001,
        colorMapAlpha: 0.5,

        baseColor: [1, 1, 1, 0.5],
        flowColor: [1, 1, 1, 0.04],
        fadeColor: [0, 0, 0, 0]
    },
    timer: Object.assign(new Timer(), { step: 1000/60 }),
    numBuffers: 0,
    logicShader: null,
    renderShader: [renderVert, renderFrag],
    flowShader: [flowVert, flowFrag],
    copyShader: [screenVert, copyFrag],
    colorMapData: ndarray([1, 1, 0, 0], [1, 1, 4])
});

export const glSettings = {
    preserveDrawingBuffer: true
};


export class Tendrils {
    constructor(gl, options) {
        const params = {
            ...defaults(),
            ...options
        };

        this.gl = gl;

        this.state = params.state;

        // A convenience for filling `colorMap`.
        this.colorMapData = params.colorMapData;

        if(!this.state.colorMap) {
            this.state.colorMap = FBO(this.gl, [1, 1], { float: true });
            this.fillColorMap();
        }

        this.screen = new Screen(this.gl);

        this.flow = FBO(this.gl, [1, 1], { float: true });

        // Multiple bufferring
        /**
         * @todo May need more buffers/passes later?
         */
        this.buffers = [];

        this.baseShader = shader(this.gl, screenVert, screenFrag);

        this.logicShader = null;

        this.renderShader = ((Array.isArray(params.renderShader))?
                shader(this.gl, ...params.renderShader)
            :   params.renderShader);

        this.flowShader = ((Array.isArray(params.flowShader))?
                shader(this.gl, ...params.flowShader)
            :   params.flowShader);

        this.copyShader = ((Array.isArray(params.copyShader))?
                shader(this.gl, ...params.copyShader)
            :   params.copyShader);

        this.uniforms = {
                render: {},
                update: {}
            };


        this.particles = null;

        this.viewRes = [0, 0];
        // this.pow2Res = [0, 0];

        this.viewSize = [0, 0];

        this.timer = params.timer;

        this.tempData = [];
    }

    setup(...rest) {
        this.setupBuffers();
        this.setupParticles(...rest);
        this.reset();

        return this;
    }

    reset() {
        this.spawn();

        return this;
    }

    // @todo
    dispose() {
        this.particles.dispose();

        delete this.particles;

        return this;
    }


    setupBuffers(numBuffers = 0) {
        // Add any needed new buffers
        while(this.buffers.length < numBuffers) {
            this.buffers.push(FBO(this.gl, [1, 1]));
        }

        // Remove any unneeded old buffers
        while(this.buffers.length > numBuffers) {
            this.buffers.pop().dispose();
        }

        return this;
    }

    setupParticles(rootNum = this.state.rootNum, numBuffers = 2) {
        this.state.rootNum = rootNum;

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

        this.particles.setup(numBuffers);

        return this;
    }


    // Rendering and logic

    clear() {
        this.clearView();
        this.clearFlow();

        return this;
    }

    clearView() {
        this.buffers.forEach((buffer) => {
            buffer.bind();
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        });

        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        return this;
    }

    clearFlow() {
        this.flow.bind();
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        return this;
    }

    restart() {
        this.clear();
        this.reset();

        return this;
    }

    draw() {
        this.resize();


        // Physics

        if(!this.timer.paused) {
            this.particles.logic = this.logicShader;

            // Disabling blending here is important
            this.gl.disable(this.gl.BLEND);

            Object.assign(this.uniforms.update, this.state, {
                    dt: this.timer.dt,
                    time: this.timer.time,
                    start: this.timer.since,
                    flow: this.flow.color[0].bind(1),
                    viewSize: this.viewSize,
                    viewRes: this.viewRes
                });

            this.particles.step(this.uniforms.update);

            this.gl.enable(this.gl.BLEND);
            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        }


        // Flow FBO and view renders

        Object.assign(this.uniforms.render, this.state, {
                time: this.timer.time,
                previous: this.particles.buffers[1].color[0].bind(2),
                viewSize: this.viewSize,
                viewRes: this.viewRes,
                colorMap: this.state.colorMap.color[0].bind(3),
                colorMapRes: this.state.colorMap.shape
            });

        this.particles.render = this.flowShader;

        // Render to the flow FBO - after the logic render, so particles don't
        // respond to their own flow.

        this.flow.bind();

        this.gl.lineWidth(Math.max(0, this.state.flowWidth));
        this.particles.draw(this.uniforms.render, this.gl.LINES);

        /**
         * @todo Mipmaps for global flow sampling - not working at the moment.
         * @todo Instead of auto-generating mipmaps, should we re-render at each
         *       scale, with different opacities and line widths? This would
         *       mean the influence is spread out when drawing, instead of when
         *       sampling.
         */
        // this.flow.color[0].generateMipmap();


        // Render to the view.

        // Overlay fade.
        if(this.state.fadeColor[3] > 0) {
            this.baseShader.bind();
            this.baseShader.uniforms.color = this.state.fadeColor;
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.screen.render();
        }

        // Set up the particles for rendering
        this.particles.render = this.renderShader;
        this.gl.lineWidth(Math.max(0, this.state.lineWidth));

        if(this.buffers.length === 0) {
            // Render the particles directly to the screen

            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);

            if(this.state.autoClearView) {
                this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            }

            this.particles.draw(this.uniforms.render, this.gl.LINES);
        }
        else {
            // Multi-buffer fade etc passes

            this.buffers[0].bind();
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);

            // Copy the last buffer into the current buffer

            this.copyShader.bind();

            Object.assign(this.copyShader.uniforms, {
                    view: this.buffers[1].color[0].bind(1),
                    viewRes: this.viewRes
                });

            this.screen.render();


            // Render the particles into the current buffer
            this.particles.draw(this.uniforms.render, this.gl.LINES);


            // Copy the current buffer to the screen

            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.copyShader.bind();
            this.copyShader.uniforms.view = this.buffers[0].color[0].bind(2);
            this.screen.render();

            // Step buffers
            step(this.buffers);
        }

        return this;
    }

    resize() {
        this.viewRes[0] = this.gl.drawingBufferWidth;
        this.viewRes[1] = this.gl.drawingBufferHeight;

        // NDC dimensions in the range [-1, 1] -> [-(max radius), (max radius)]
        coverAspect(this.viewSize, this.viewRes);

        // this.pow2Res.fill(nextPow2(Math.max(...this.viewRes)));

        this.buffers.forEach((buffer) => buffer.shape = this.viewRes);

        // this.flow.shape = this.pow2Res;
        this.flow.shape = this.viewRes;

        /**
         * @todo Why do these 2 lines seem to be equivalent? Something to do
         *       with how `gl-big-triangle` scales its geometry over the screen?
         */
        // this.gl.viewport(0, 0, 1, 1);
        this.gl.viewport(0, 0, this.viewRes[0], this.viewRes[1]);

        return this;
    }


    // Respawn

    // Populate the particles with the given spawn function
    spawn(spawner = initSpawner) {
        this.particles.spawn(spawner);

        return this;
    }

    // Respawn on the GPU using a given shader
    spawnShader(shader, update) {
        this.resize();
        this.timer.tick();

        this.particles.logic = shader;

        // Disabling blending here is important
        this.gl.disable(this.gl.BLEND);

        this.particles.step(Particles.applyUpdate({
                ...this.state,
                time: this.timer.time,
                viewSize: this.viewSize,
                viewRes: this.viewRes
            },
            update));

        this.particles.logic = this.logicShader;

        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

        return this;
    }


    fillColorMap(data = this.colorMapData, ...rest) {
        this.state.colorMap.color[0].setPixels(this.colorMapData, ...rest);
    }
}


export default Tendrils;