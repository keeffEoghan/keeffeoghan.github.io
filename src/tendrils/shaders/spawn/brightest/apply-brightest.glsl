/**
 * Directly uses a normal image - brightness being speed in a random direction.
 */

#pragma glslify: luma = require(glsl-luma)
#pragma glslify: random = require(glsl-random)

#pragma glslify: tau = require(../../const/tau)
#pragma glslify: angleToPos = require(../../utils/angle-to-pos)

vec4 apply(in vec2 uv, in vec2 pos, in vec4 state) {
    return vec4(pos,
        angleToPos(mod(random(state.xy), 1.0)*tau)*luma(state)*state.a);
}

#pragma glslify: export(apply)
