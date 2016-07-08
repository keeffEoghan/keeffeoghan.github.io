/**
 * Directly uses a normal image - brightness being speed in a direction defined
 * by the `rgba` channels.
 */

#pragma glslify: luma = require('glsl-luma')

#pragma glslify: uvToPos = require('../../map/uv-to-pos')

const vec4 ratio = vec2(2.0, 1.0, 2.0)/3.0;

vec4 apply(in vec4 data, in vec2 uv, in vec2 dataSize, in vec2 viewSize) {
    return vec4(uvToPos(uv*dataSize/viewSize),
        vec2(dot(data.rg, ratio.rg), dot(data.gb, ratio.gb))*luma(data)*data.a);
}

#pragma glslify: export(apply)
