#pragma glslify: map = require(glsl-map)

#pragma glslify: uvRange = require(./ranges/uv)
#pragma glslify: posRange = require(./ranges/pos)

vec2 uvToPos(vec2 uv) {
    return map(uv, uvRange.xy, uvRange.zw, posRange.xy, posRange.zw);
}

#pragma glslify: export(uvToPos)
