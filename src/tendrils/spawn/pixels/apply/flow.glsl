/**
 * Use the pixel position, and the particle velocity.
 * Same data structure as the flow.
 *
 * @requires {float} time The current time
 * @requires {float} decay The rate of decay of the flow over time
 */

#pragma glslify: getFlow = require(../../../flow/get)

vec4 apply(vec2 uv, vec2 pos, vec4 pixel) {
    return vec4(pos, getFlow(pixel, time, decay));
}

#pragma glslify: export(apply)
