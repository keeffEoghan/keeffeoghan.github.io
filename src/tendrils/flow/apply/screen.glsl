/**
 * @requires {float} time The current time in ms
 * @requires {float} flowDecay The amount the flow decays over time
 */

#pragma glslify: length2 = require(../../utils/length-2)

vec4 flow(vec2 vel) {
    return vec4(((vel*100.0)+vec2(1.0))*0.5, sin(time*flowDecay), length2(vel));
}

vec4 flow(vec2 vel, float speedLimit) {
    vec4 values = flow(vel);

    return vec4(values.xyz, min(values.a/(speedLimit*speedLimit), 1.0));
}

#pragma glslify: export(flow)
