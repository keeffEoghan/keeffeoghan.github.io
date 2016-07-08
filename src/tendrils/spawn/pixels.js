/**
 * Stupid little class for conveniently wrapping up things to be passed to the
 * Tendrils `respawnShader` function.
 */

import FBO from 'gl-fbo';
import shader from 'gl-shader';
import isPlainObject from 'lodash/isPlainObject';

import spawnVert from '../shaders/screen/vert.glsl';
import spawnFrag from '../shaders/spawn/frag.glsl';

export const defaults = {
    spawn: {
        vert: spawnVert,
        frag: spawnFrag
    },
    buffer: {
        shape: [1, 1],
        float: true
    }
};

export class SpawnPixels {
    constructor(gl, spawn = defaults.spawn, buffer = defaults.buffer) {
        this.gl = gl;

        this.spawn = (isPlainObject(spawn)?
                shader(this.gl, spawn.vert, spawn.frag)
            :   spawn);

        this.buffer = ((isPlainObject(buffer))?
                FBO(this.gl, buffer.shape, buffer)
            :   buffer);

        this.update = (uniforms) => Object.assign(uniforms, {
                spawnData: this.buffer.color[0].bind(1),
                spawnSize: this.buffer.shape,
                randomSeed: [Math.random(), Math.random()]
            });
    }

    respawn(tendrils, update = this.update) {
        return tendrils.respawnShader(this.spawn, update);
    }

    setPixels(pixels) {
        return this.buffer.color[0].setPixels(pixels);
    }
}

export default SpawnPixels;
