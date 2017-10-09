/**
 * Stupid little class for conveniently wrapping up things to be passed to the
 * Tendrils `spawnShader` function.
 */

import FBO from 'gl-fbo';
import shader from 'gl-shader';
import { mat3, vec2 } from 'gl-matrix';

import aspect from '../../utils/aspect';

import vert from '../../screen/index.vert';
import frag from './index.frag';

export const defaults = () => ({
    shader: [vert, frag],
    // buffer: [[1, 1]]
    buffer: [[1, 1], { float: true }],
    spawnSize: [1, 1],
    jitterRad: 2,
    speed: 1,
    bias: 1
});

export class PixelSpawner {
    constructor(gl, options) {
        this.gl = gl;

        const params = Object.assign(defaults(), options);

        this.shader = ((Array.isArray(params.shader))?
                shader(this.gl, ...params.shader)
            :   params.shader);

        this.buffer = ((Array.isArray(params.buffer))?
                FBO(this.gl, ...params.buffer)
            :   params.buffer);

        this.speed = params.speed;
        this.bias = params.bias;

        this.jitterRad = params.jitterRad;
        this.jitter = vec2.create();

        this.spawnSize = params.spawnSize;
        this.spawnMatrix = mat3.create();
    }

    update(uniforms) {
        return Object.assign(uniforms, {
                spawnData: this.buffer.color[0].bind(1),
                spawnSize: this.spawnSize,
                spawnMatrix: this.spawnMatrix,
                speed: this.speed,
                jitter: aspect(this.jitter, uniforms.viewRes, this.jitterRad),
                bias: this.bias
            });
    }

    spawn(tendrils, update = this.update.bind(this), ...rest) {
        return tendrils.spawnShader(this.shader, update, ...rest);
    }

    setPixels(pixels) {
        return this.buffer.color[0].setPixels(pixels);
    }
}

export default PixelSpawner;
