/**
 * @requires {float} time The current time in ms
 * @requires {float} flowDecay The amount the flow decays over time
 */

vec3 apply(vec4 state) {
    return vec3(state.zw, time);
}

#pragma glslify: export(apply)
