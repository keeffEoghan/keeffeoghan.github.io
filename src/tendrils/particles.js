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

/* global Float32Array */

import geom from 'gl-geometry';
import shader from 'gl-shader';
import FBO from 'gl-fbo';
import triangle from 'a-big-triangle';
import ndarray from 'ndarray';
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';

import { step } from '../utils';

import logicVert from './screen/index.vert';


export const defaults = () => ({
    shape: [64, 64],
    geomShape: null,

    logic: null,
    logicVert,
    logicFrag: null,

    render: null,
    renderVert: null,
    renderFrag: null
});

export class Particles {
    constructor(gl, options) {
        const params = {
            ...defaults(),
            ...options
        };

        this.gl = gl;

        // The dimensions of the state data FBOs. Can be 1:1 with the number of
        // particle vertices, or
        this.shape = params.shape;
        this.geomShape = (params.geomShape || [...this.shape]);


        const logic = (params.logic || [params.logicVert, params.logicFrag]);

        this.logic = ((isArray(logic))? shader(gl, ...logic) : logic);


        const render = (params.render ||
                [params.renderVert, params.renderFrag]);

        this.render = ((isArray(render))? shader(gl, ...render) : render);


        this.geom = geom(gl);
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
        const data = new Float32Array(4);

        const pixelsShape = pixels.shape;
        const pixelsData = pixels.data;

        let i = 0;

        for(let x = 0; x < pixelsShape[0]; ++x) {
            for(let y = 0; y < pixelsShape[1]; ++y) {
                data[0] = data[1] = data[2] = data[3] = 0;

                map(data, x, y);

                pixelsData[i++] = data[0];
                pixelsData[i++] = data[1];
                pixelsData[i++] = data[2];
                pixelsData[i++] = data[3];
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

        Particles.applyUpdate(Object.assign(this.logic.uniforms, {
                dataRes: this.shape,
                particles: this.buffers[1].color[0].bind(0)
            }),
            update);

        triangle(this.gl);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    }

    draw(update, mode = this.gl.POINTS) {
        this.geom.bind(this.render);
        this.render.uniforms.particles = this.buffers[0].color[0].bind(0);

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

        const invX = 1/(w-1);
        const invY = 1/(h-1);

        for(let i = 0; i < w; ++i) {
            for(let j = 0; j < h; ++j) {
                data[k++] = i*invX;
                data[k++] = j*invY;
            }
        }

        return data;
    }

    static applyUpdate(state, update) {
        return ((isFunction(update))?
                update(state)
            :   Object.assign(state, update));
    }
}

export default Particles;
