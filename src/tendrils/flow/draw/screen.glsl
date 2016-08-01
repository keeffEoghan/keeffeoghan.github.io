/**
 * @requires {float} time The current time in ms
 * @requires {float} flowDecay The amount the flow decays over time
 */

#pragma glslify: length2 = require(../../utils/length-2)

vec4 flow(vec2 vel, float maxSpeed) {
    return vec4(((vel*1000.0)+vec2(1.0))*0.5, sin(time*flowDecay),
        length2(vel)/(maxSpeed*maxSpeed));
}

#pragma glslify: export(flow)
