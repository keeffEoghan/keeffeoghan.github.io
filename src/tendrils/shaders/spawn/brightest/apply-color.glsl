/**
 * Directly uses a normal image - brightness being speed in a direction defined
 * by the `rgba` channels.
 */

#pragma glslify: luma = require(glsl-luma)

#pragma glslify: tau = require(../../const/tau)
#pragma glslify: angleToPos = require(../../utils/angle-to-pos)

vec4 apply(in vec2 uv, in vec2 pos, in vec4 state) {
    return vec4(pos,
        vec2(angleToPos((state.r+state.g+state.b)/3.0*tau))*
            luma(state)*state.a);
}

#pragma glslify: export(apply)
