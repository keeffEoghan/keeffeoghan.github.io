#pragma glslify: map = require(glsl-map)

#pragma glslify: posRange = require(./ranges/pos)
#pragma glslify: uvRange = require(./ranges/uv)

vec2 posToUV(in vec2 pos) {
    return map(pos, posRange.xy, posRange.zw, uvRange.xy, uvRange.zw);
    // return (pos+vec2(1.0))*0.5;
}

#pragma glslify: export(posToUV)


// #pragma glslify: _posRange = require(./ranges/pos)
// #pragma glslify: _uvRange = require(./ranges/uv)

// const posRange = _posRange;
// const uvRange = _uvRange;

// #pragma glslify: posToUV = require(./map-ranges,from=posRange,to=uvRange)

// #pragma glslify: export(posToUV)
