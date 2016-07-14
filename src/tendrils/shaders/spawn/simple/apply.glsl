/**
 * The velocity is encoded directly in the `yz` channel.
 */

#pragma glslify: uvToPos = require(../../map/uv-to-pos)

vec4 apply(in vec4 data, in vec2 uv, in vec2 dataSize, in vec2 viewSize) {
    return vec4(uvToPos(uv*dataSize/viewSize), data.yz);
}

#pragma glslify: export(apply)
