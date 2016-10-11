/**
 * Directly uses a normal image - picking the brightest pixel.
 */

#pragma glslify: luma = require(glsl-luma)

float test(vec4 data) {
    return luma(data);
}

#pragma glslify: export(test)
