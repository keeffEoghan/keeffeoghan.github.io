precision mediump float;

uniform sampler2D data;
uniform sampler2D flow;

uniform vec2 resolution;
uniform vec2 flowSize;

uniform float dt;
uniform float time;
uniform float start;

uniform float flowWeight;
uniform float wanderWeight;

#pragma glslify: noise = require('glsl-noise/simplex/3d')
// #pragma glslify: screenPosition = require('./screen-position')
// #pragma glslify: verlet = require('./verlet')

void main() {
    vec2 uv = gl_FragCoord.xy/resolution;
    vec4 state = texture2D(data, uv);
    vec2 pos = state.xy;
    vec2 acc = state.zw;

    float t = time*0.001;

    // Wander force
    vec2 wanderForce = vec2(noise(vec3(pos*2.125, uv.x+mod(start, 54321.0))),
            noise(vec3(pos*2.125, uv.y+mod(start, 12345.0))))*0.0005;

    /*
    // Flow force - left by preceeding particles

    vec2 screenPos = screenPosition(state.xy, resolution).xy;
    vec2 flowForce = texture2D(flow, screenPos/flowSize).xy;

    float flowAmount = dot(flowForce, flowForce);


    // Apply weighting
    float totalWeight = flowWeight+wanderWeight;
    float ww = (wanderWeight/totalWeight)/flowAmount;
    float fw = (flowWeight/totalWeight)*flowAmount;
    */

    // Accumulate weighted forces
    acc += wanderForce;
    // acc += (flowForce*fw)+(wanderForce*ww);

    // Integrate motion
    pos += acc;
    // pos = verlet(acc, pos, lastPosition, dt);

    // Damping
    acc *= 0.975;
    pos *= 0.995;

    gl_FragColor = vec4(pos, acc);
}
