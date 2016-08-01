/**
 * @requires {float} time The current time in ms
 */

#pragma glslify: length2 = require(../../utils/length-2)

vec4 flow(vec2 vel, float maxSpeed) {
    // Faster particles leave a greater influence (opacity).
    // Linear interpolation - inaccurate for vectors, will it be OK without
    // sudden turns, or do we need a per-fragment lookup?
    return vec4(vel, time, length2(vel)/(maxSpeed*maxSpeed));
}

#pragma glslify: export(flow)
