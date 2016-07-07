#pragma glslify: map = require('glsl-map')

#pragma glslify: posRange = require('./ranges/pos')
#pragma glslify: uvRange = require('./ranges/uv')

vec2 posToUV(in vec2 pos) {
    return map(pos, posRange.xy, posRange.zw, uvRange.xy, uvRange.zw);
    // return (pos+vec2(1.0))*0.5;
}

#pragma glslify: export(posToUV)
