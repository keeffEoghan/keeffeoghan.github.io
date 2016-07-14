/**
 * Stupid little class for conveniently wrapping up things to be passed to the
 * Tendrils `respawnShader` function.
 */

import texture from 'gl-texture2d';
import shader from 'gl-shader';
import isArray from 'lodash/isArray';

import spawnVert from '../shaders/screen/vert.glsl';
import spawnFrag from '../shaders/spawn/frag.glsl';

export const defaults = {
    spawn: [spawnVert, spawnFrag],
    buffer: [[1, 1]]
};

export class SpawnPixels {
    constructor(gl, spawn = defaults.spawn, buffer = defaults.buffer) {
        this.gl = gl;

        this.spawn = ((isArray(spawn))? shader(this.gl, ...spawn) : spawn);

        this.buffer = ((isArray(buffer))? texture(this.gl, ...buffer) : buffer);

        this.update = (uniforms) => Object.assign(uniforms, {
                spawnData: this.buffer.bind(1),
                spawnSize: this.buffer.shape,
                randomSeed: [Math.random(), Math.random()]
            });
    }

    respawn(tendrils, update = this.update) {
        return tendrils.respawnShader(this.spawn, update);
    }

    setPixels(pixels) {
        return this.buffer.setPixels(pixels);
    }
}

export default SpawnPixels;
