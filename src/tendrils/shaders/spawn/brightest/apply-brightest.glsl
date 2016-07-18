/**
 * Directly uses a normal image - brightness being speed in a random direction.
 *
 * @todo Use random instead of noise, to separate from image coordinates?
 */

#pragma glslify: luma = require(glsl-luma)
#pragma glslify: random = require(glsl-random)

#pragma glslify: pi = require(../../utils/pi)
#pragma glslify: angleToPos = require(../../utils/angle-to-pos)

vec4 apply(in vec2 uv, in vec2 pos, in vec4 state) {
    return vec4(pos, angleToPos(mod(random(state.xy), 1.0)*2.0*pi)*luma(state));
}

#pragma glslify: export(apply)
