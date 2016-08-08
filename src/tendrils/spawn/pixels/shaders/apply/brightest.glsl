/**
 * Directly uses a normal image - brightness being speed in a random direction.
 */

#pragma glslify: luma = require(glsl-luma)
#pragma glslify: random = require(glsl-random)

#pragma glslify: tau = require(../../../../shaders/const/tau)
#pragma glslify: angleToPos = require(../../../../shaders/utils/angle-to-pos)

vec4 apply(vec2 uv, vec2 pos, vec4 pixel) {
    return vec4(pos,
        angleToPos(mod(random(uv*dot(pixel.rg, pixel.ba)), 1.0)*tau)*
            luma(pixel)*pixel.a);
}

#pragma glslify: export(apply)
