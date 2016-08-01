/**
 * Drawing lines, from https://mattdesl.svbtle.com/drawing-lines-is-hard#expanding-in-a-vertex-shader_2
 * Pushes a point along its normal by its radius, in the direction of miter.
 */

export const expand = (position, normal, rad, miter) =>
    position+(normal*rad*miter);

export default expand;
