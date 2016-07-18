/**
 * Directly uses a normal image - brightness being speed in a direction defined
 * by the `rgba` channels.
 */

#pragma glslify: luma = require(glsl-luma)

const vec4 ratio = vec4(2.0, 1.0, 2.0, 0.0)/3.0;

vec4 apply(in vec2 uv, in vec2 pos, in vec4 state) {
    return vec4(pos,
        vec2(dot(state.rg, ratio.rg), dot(state.gb, ratio.gb))*
            luma(state)*state.a);
}

#pragma glslify: export(apply)
