/**
 * Directly uses a normal image - brightness being speed in a random direction.
 *
 * @todo Use random instead of noise, to separate from image coordinates?
 */

#pragma glslify: luma = require(glsl-luma)
#pragma glslify: noise = require(glsl-noise/simplex/3d)

vec4 apply(in vec2 pos, in vec4 state) {
    return vec4(pos,
        vec2(noise(vec3(pos.x, state.rg)), noise(vec3(pos.y, state.ba)))*
            luma(state));
}

#pragma glslify: export(apply)
