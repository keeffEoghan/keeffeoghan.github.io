/**
 * Directly uses a normal image - picking the brightest pixel.
 */

#pragma glslify: luma = require('glsl-luma')

vec4 pick(in vec4 a, in vec4 b) {
    return ((luma(a) > luma(b))? a : b);
}

#pragma glslify: export(pick)
