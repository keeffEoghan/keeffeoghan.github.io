/**
 * @requires {float} time The current time in ms
 */

#pragma glslify: length2 = require(../../utils/length-2)

vec4 flow(vec2 vel) {
    // Faster particles leave a greater influence (opacity).
    // Linear interpolation - inaccurate for vectors, will it be OK without
    // sudden turns, or do we need a per-fragment lookup?
    return vec4(vel, time, length2(vel));
}

vec4 flow(vec2 vel, float maxSpeed) {
    vec4 values = flow(vel);

    return vec4(values.xyz, min(values.a/(maxSpeed*maxSpeed), 1.0));
}

#pragma glslify: export(flow)
