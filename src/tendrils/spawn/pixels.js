/**
 * Stupid little class for conveniently wrapping up things to be passed to the
 * Tendrils `respawnShader` function.
 */

// import texture from 'gl-texture2d';
import FBO from 'gl-fbo';
import shader from 'gl-shader';
import mat3 from 'gl-matrix/src/gl-matrix/mat3';
import isArray from 'lodash/isArray';

import spawnVert from '../shaders/screen/vert.glsl';
import spawnFrag from './shaders/frag.glsl';

export const defaults = {
    spawn: [spawnVert, spawnFrag],
    // buffer: [[1, 1]]
    buffer: [[1, 1], { float: true }]
};

export class SpawnPixels {
    constructor(gl, spawn = defaults.spawn, buffer = defaults.buffer) {
        this.gl = gl;

        this.spawn = ((isArray(spawn))? shader(this.gl, ...spawn) : spawn);

        // this.buffer = ((isArray(buffer))? texture(this.gl, ...buffer) : buffer);
        this.buffer = ((isArray(buffer))? FBO(this.gl, ...buffer) : buffer);

        this.spawnMatrix = mat3.create();
    }

    update(uniforms) {
        return Object.assign(uniforms, {
                // spawnData: this.buffer.bind(1),
                spawnData: this.buffer.color[0].bind(1),
                spawnSize: this.buffer.shape,
                spawnMatrix: this.spawnMatrix
            });
    }

    respawn(tendrils, update = this.update.bind(this)) {
        return tendrils.respawnShader(this.spawn, update);
    }

    setPixels(pixels) {
        // return this.buffer.setPixels(pixels);
        return this.buffer.color[0].setPixels(pixels);
    }
}

export default SpawnPixels;
