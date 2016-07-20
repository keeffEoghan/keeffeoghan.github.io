/**
 * Directly uses a normal image - brightness being speed in a random direction.
 */

#pragma glslify: luma = require(glsl-luma)
#pragma glslify: random = require(glsl-random)

#pragma glslify: tau = require(../../../shaders/const/tau)
#pragma glslify: angleToPos = require(../../../shaders/utils/angle-to-pos)

vec4 apply(in vec2 uv, in vec2 pos, in vec4 data) {
    return vec4(pos,
        angleToPos(mod(random(uv*dot(data.rg, data.ba)), 1.0)*tau)*
            luma(data)*data.a);
}

#pragma glslify: export(apply)
