/**
 * Data for working with `web-audio-analyser` and other parts of this module.
 */

/* global Uint8Array */

/**
 * Make a typed array the corect size for a given audio analyser, for logging
 * state.
 *
 * @param {*} aa A web audio analyser, or its analyser node/s.
 * @param {TypedArray?} Data An optional typed array class to instantiate.
 * @return {TypedArray} The data array instance.
 */
export const makeData = (aa, Data = Uint8Array) =>
    new Data(((aa.analyser)? (aa.analyser[0] || aa.analyser) : (aa[0] || aa))
        .frequencyBinCount);


export default makeData;
