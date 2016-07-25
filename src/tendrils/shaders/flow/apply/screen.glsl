/**
 * @requires {float} time The current time in ms
 * @requires {float} flowDecay The amount the flow decays over time
 */

vec3 apply(vec4 state) {
    return vec3(((state.zw*1000.0)+vec2(1.0))*0.5, sin(time*flowDecay));
}

#pragma glslify: export(apply)
