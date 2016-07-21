/**
 * Directly uses a normal image - picking the brightest pixel.
 */

#pragma glslify: luma = require(glsl-luma)

vec4 pick(vec4 current, vec4 next) {
    return ((luma(current) > luma(next))? current : next);
}

#pragma glslify: export(pick)
