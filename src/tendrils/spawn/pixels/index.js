/**
 * Stupid little class for conveniently wrapping up things to be passed to the
 * Tendrils `respawnShader` function.
 */

import FBO from 'gl-fbo';
import shader from 'gl-shader';
import mat3 from 'gl-matrix/src/gl-matrix/mat3';
import vec2 from 'gl-matrix/src/gl-matrix/vec2';

import aspect from '../../utils/aspect';

import vert from '../../screen/index.vert';
import frag from './index.frag';

export const defaults = () => ({
    shader: [vert, frag],
    // buffer: [[1, 1]]
    buffer: [[1, 1], { float: true }],
    spawnSize: [1, 1]
});

export class SpawnPixels {
    constructor(gl, options) {
        this.gl = gl;

        const params = {
                ...defaults(),
                ...options
            };

        this.shader = ((Array.isArray(params.shader))?
                shader(this.gl, ...params.shader)
            :   params.shader);

        this.buffer = ((Array.isArray(params.buffer))?
                FBO(this.gl, ...params.buffer)
            :   params.buffer);

        this.jitterRad = 4;

        this.jitter = vec2.create();

        this.spawnSize = params.spawnSize;
        this.spawnMatrix = mat3.create();
    }

    update(uniforms) {
        return Object.assign(uniforms, {
                spawnData: this.buffer.color[0].bind(1),
                spawnSize: this.spawnSize,
                spawnMatrix: this.spawnMatrix,
                jitter: aspect(this.jitter, uniforms.viewRes, this.jitterRad),
                bias: 1
            });
    }

    respawn(tendrils, update = this.update.bind(this)) {
        return tendrils.respawnShader(this.shader, update);
    }

    setPixels(pixels) {
        return this.buffer.color[0].setPixels(pixels);
    }
}

export default SpawnPixels;
