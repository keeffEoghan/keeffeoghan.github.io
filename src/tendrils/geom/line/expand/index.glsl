/**
 * Drawing lines, from https://mattdesl.svbtle.com/drawing-lines-is-hard#expanding-in-a-vertex-shader_2
 * Pushes a point along its normal by its radius, in the direction of miter.
 */

vec2 expand(vec2 position, vec2 normal, float rad, float miter) {
    return position+(normal*rad*miter);
}

#pragma glslify: export(expand)
