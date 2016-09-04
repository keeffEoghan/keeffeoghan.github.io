/**
 * Bind `web-audio-analyser` data to WebGL data textures, transform audio values
 * into texture range.
 *
 * @see  https://github.com/stackgl/gl-audio-analyser/blob/master/index.js
 */

/* global Float32Array */

import texture from 'gl-texture2d';
import ndarray from 'ndarray';

import { map } from '../../fp';
import { waveformMap, frequencyMap } from './utils';

export class AudioTexture {
    constructor(gl, size) {
        this.array = ndarray(new Float32Array(size), [size, 1]);
        this.texture = texture(gl, this.array, { float: true });
        this.gl = gl;
    }

    bind(unit) {
        let bound = this.texture.bind(unit);

        this.texture.setPixels(this.array);

        return bound;
    }

    /**
     * Transform `web-audio-analyser` data values into a WebGL data texture range.
     */

    waveform(data = this.array.data) {
        map(waveformMap, data, this.array.data);

        return this;
    }

    frequency(data = this.array.data) {
        map(frequencyMap, data, this.array.data);

        return this;
    }
}

export default AudioTexture;
