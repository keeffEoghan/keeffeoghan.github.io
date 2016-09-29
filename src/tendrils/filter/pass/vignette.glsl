// @todo Uniform inputs for `const` values here.

#pragma glslify: bezier = require(../../utils/bezier)

const vec2 midUV = vec2(0.5);
const vec3 curve = vec3(0.0, 0.6, 1.0);
const float limit = 0.5;

vec4 pass(vec2 uv, vec4 pixel) {
    return vec4(pixel*max(0.0, bezier(curve, limit-length(uv-midUV))));
}

#pragma glslify: export(pass)
