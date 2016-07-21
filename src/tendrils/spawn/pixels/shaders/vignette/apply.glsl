#pragma glslify: length2 = require(../../../../shaders/utils/length-2)

const vec2 midUV = vec2(0.5);

vec4 apply(vec2 uv, vec2 pos, vec4 data) {
    return vec4(pos, data.zw*max(0.0, 0.5-length2(uv-midUV)));
}

#pragma glslify: export(apply)
