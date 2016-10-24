/**
 * Bind `web-audio-analyser` data to WebGL data textures, transform audio values
 * into texture range.
 *
 * @see  https://github.com/stackgl/gl-audio-analyser/blob/master/index.js
 */

/* global Float32Array */

import makeTexture from 'gl-texture2d';
import ndarray from 'ndarray';
import isNumber from 'lodash/isNumber';

import { mapList } from '../../fp/map';
import { waveformMap, frequencyMap } from './utils';

export class AudioTexture {
    constructor(gl, array, texture) {
        this.gl = gl;

        this.array = ((isNumber(array))?
                ndarray(new Float32Array(array), [array, 1])
            :   array);

        this.texture = (texture ||
            makeTexture(gl, this.array, { float: true }));
    }

    apply() {
        this.texture.setPixels(this.array);

        return this;
    }

    /**
     * Transform `web-audio-analyser` data values into a WebGL data texture range.
     */

    waveform(data = this.array.data) {
        mapList(waveformMap, data, this.array.data);

        return this;
    }

    frequency(data = this.array.data) {
        mapList(frequencyMap, data, this.array.data);

        return this;
    }
}

export default AudioTexture;
