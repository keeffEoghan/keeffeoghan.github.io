/**
 * Stupid little class for conveniently wrapping up things to be passed to the
 * Tendrils `spawnShader` function.
 */

import FBO from 'gl-fbo';
import shader from 'gl-shader';

import map from '../../fp/map';
import each from '../../fp/each';
import { step } from '../../utils';

import vert from '../screen/index.vert';
import frag from './index.frag';

export const defaults = () => ({
    options: {
        shader: [vert, frag],
        buffers: [[[1, 1]], [[1, 1]]]
    },
    uniforms: {
        imageSize: [1, 1],
        viewSize: [1, 1],
        offset: 1,
        lambda: 0.001,
        speed: 1,
        speedLimit: 1,
        time: 1
    }
});

export class OpticalFlow {
    constructor(gl, options, uniforms) {
        this.gl = gl;

        const base = defaults();
        const params = Object.assign(base.options, options);

        this.shader = ((Array.isArray(params.shader))?
                shader(this.gl, ...params.shader)
            :   params.shader);

        this.buffers = map((buffer) =>
                ((Array.isArray(buffer))? FBO(this.gl, ...buffer) : buffer),
            params.buffers);

        this.size = this.buffers[0].shape;

        this.uniforms = Object.assign(base.uniforms, uniforms);
    }

    update(uniforms) {
        this.shader.bind();

        this.shader.uniforms.imageSize = this.size;

        Object.assign(this.shader.uniforms, {
                view: this.buffers[0].color[0].bind(1),
                last: this.buffers[1].color[0].bind(2)
            },
            this.uniforms, uniforms);
    }

    step() {
        step(this.buffers);
    }

    setPixels(pixels) {
        return this.buffers[0].color[0].setPixels(pixels);
    }

    resize(size) {
        each((buffer) => buffer.shape = size, this.buffers);

        this.size = size;
    }
}

export default OpticalFlow;
