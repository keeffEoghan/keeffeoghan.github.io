#pragma glslify: map = require(glsl-map)

#pragma glslify: posRange = require(./ranges/pos)
#pragma glslify: uvRange = require(./ranges/uv)

vec2 posToUV(vec2 pos) {
    return map(pos, posRange.xy, posRange.zw, uvRange.xy, uvRange.zw);
}

#pragma glslify: export(posToUV)
