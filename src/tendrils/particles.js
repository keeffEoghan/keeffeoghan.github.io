/**
 * A fork of [gl-particles](https://github.com/stackgl/gl-particles/blob/master/index.js).
 * Adds support for different draw modes (as opposed to just POINTS) and a more
 * separated FBO and vertex setup (so you can have different-sized buffer and
 * particles data).
 *
 * @todo Ideally, to render more logic than 4 floats (RGBA) in a single pass,
 *       we'd like to render to multiple buffers at once - using
 *       WEBGL_draw_buffers, as shown [here](https://hacks.mozilla.org/2014/01/webgl-deferred-shading/).
 *       At the time of writing, that extension has only [57% support across all
 *       devices](//webglstats.com/).
 *       So, for now, have to consider other methods (multi-pass,
 *       encoding/packing more info into each fragment).
 */

import Geom from 'gl-geometry';
import Shader from 'gl-shader';
import FBO from 'gl-fbo';
import triangle from 'a-big-triangle';
import ndarray from 'ndarray';
import isFunction from 'lodash/isFunction';

import { step } from '../utils';

import logicVert from './shaders/triangle.vert.glsl';


export class Particles {
    constructor(gl, options = {}) {
        this.gl = gl;

        // The dimensions of the state data FBOs. Can be 1:1 with the number of
        // particle vertices, or
        this.shape = (options.shape || [64, 64]);
        this.geomShape = (options.geomShape || [...this.shape]);

        this.logic = Shader(gl, logicVert, options.logic);
        this.render = (options.render || Shader(gl, options.vert, options.frag));

        this.logicVertSource = logicVert;

        this.geom = Geom(gl);
        this.geom.attr('uv', Particles.generateLUT(this.geomShape),
            { size: 2 });

        this.buffers = [];

        this.pixels = ndarray(new Float32Array(this.shape[0]*this.shape[1]*4),
            [this.shape[0], this.shape[1], 4]);
    }

    setup(numBuffers = 1) {
        // Add any needed new buffers
        while(this.buffers.length < numBuffers) {
            this.buffers.push(FBO(this.gl, [this.shape[0], this.shape[1]],
                { float: true }));
        }

        // Remove any unneeded old buffers
        while(this.buffers.length > numBuffers) {
            this.buffers.pop().dispose();
        }
    }

    spawn(map, pixels = this.pixels, offset = [0, 0]) {
        const vec4 = new Float32Array(4);
        
        const pixelsShape = pixels.shape;
        const pixelsData = pixels.data;

        let i = 0;

        for(let x = 0; x < pixelsShape[0]; ++x) {
            for(let y = 0; y < pixelsShape[1]; ++y) {
                vec4[0] = vec4[1] = vec4[2] = vec4[3] = 0;

                map(vec4, x, y);

                pixelsData[i++] = vec4[0];
                pixelsData[i++] = vec4[1];
                pixelsData[i++] = vec4[2];
                pixelsData[i++] = vec4[3];
            }
        }

        this.buffers.forEach((buffer) =>
            buffer.color[0].setPixels(pixels, offset));
    }

    step(update) {
        step(this.buffers);

        this.buffers[0].bind();
        this.gl.viewport(0, 0, this.shape[0], this.shape[1]);

        this.logic.bind();
        this.logic.uniforms.resolution = this.shape;
        this.logic.uniforms.data = this.buffers[1].color[0].bind(0);

        Particles.applyUpdate(this.logic.uniforms, update);

        triangle(this.gl);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    }

    draw(update, mode = this.gl.POINTS) {
        this.geom.bind(this.render);
        this.render.uniforms.data = this.buffers[0].color[0].bind(0);

        
        Particles.applyUpdate(this.render.uniforms, update);

        this.geom.draw(mode);
    }

    updateLogic(logicFrag) {
        this.logic.update(logicVert, logicFrag);
    }

    updateRender(renderFrag, renderVert) {
        this.render.update(renderVert, renderFrag);
    }

    // @todo
    dispose() {}

    static generateLUT(shape) {
        let size = shape[0]*shape[1]*2;
        let data = new Float32Array(size);
        let k = 0;

        const w = Math.max(shape[0], 2);
        const h = Math.max(shape[1], 2);

        for(let i = 0; i < w; ++i) {
            for(let j = 0; j < h; ++j) {
                data[k++] = i/(w-1);
                data[k++] = j/(h-1);
            }
        }

        return data;
    }

    static applyUpdate(state, update) {
        return ((isFunction(update))?
                update(state)
            :   Object.assign(state, update));
    }
};


export default Particles;
