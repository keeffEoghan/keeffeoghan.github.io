#pragma glslify: length2 = require(../../utils/length-2)

const vec2 midUV = vec2(0.5);
const float limit = 0.5*0.5;

vec4 pass(vec2 uv, vec4 pixel) {
    return vec4(pixel*max(0.0, limit-length2(uv-midUV)));
}

// const float limit = 0.5;

// vec4 pass(vec2 uv, vec4 pixel) {
//     return vec4(pixel*max(0.0, limit-length(uv-midUV)));
// }

#pragma glslify: export(pass)
