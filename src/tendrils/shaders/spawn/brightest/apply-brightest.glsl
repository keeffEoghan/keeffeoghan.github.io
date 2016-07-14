/**
 * Directly uses a normal image - brightness being speed in a random direction.
 *
 * @todo Use random instead of noise, to separate from image coordinates?
 */

#pragma glslify: luma = require(glsl-luma)
#pragma glslify: noise = require(glsl-noise/simplex/3d)

#pragma glslify: uvToPos = require(../../map/uv-to-pos)

vec4 apply(in vec4 data, in vec2 uv, in vec2 dataSize, in vec2 viewSize) {
    return vec4(uvToPos(uv*dataSize/viewSize),
        vec2(noise(vec3(uv.x, data.rg)), noise(vec3(uv.y, data.ba)))*
            luma(data));
}

#pragma glslify: export(apply)
