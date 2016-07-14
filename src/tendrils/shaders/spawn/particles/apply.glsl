/**
 * Use the pixel position, and the particle velocity.
 * Same data structure as the particles.
 */

#pragma glslify: uvToPos = require(../../map/uv-to-pos)

vec4 apply(in vec4 data, in vec2 uv, in vec2 dataSize, in vec2 viewSize) {
    return vec4(uvToPos(uv*dataSize/viewSize), data.zw);
}

#pragma glslify: export(apply)
