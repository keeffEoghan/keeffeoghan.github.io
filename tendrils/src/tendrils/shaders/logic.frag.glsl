precision highp float;

uniform sampler2D data;
uniform sampler2D flow;

uniform vec2 resolution;
uniform vec2 viewSize;

uniform float time;

uniform float damping;
uniform float flowWeight;
uniform float wanderWeight;
uniform float noiseSpeed;

#pragma glslify: noise = require('glsl-noise/simplex/3d')
#pragma glslify: screenPosition = require('./screen-position')
#pragma glslify: flowAtScreenPosition = require('./flow-at-screen-position')

void main() {
    // Read particle data.
    vec2 uv = gl_FragCoord.xy/resolution;
    vec4 state = texture2D(data, uv);
    vec2 pos = state.xy;
    vec2 vel = state.zw;


    // Wander force
    vec2 wanderForce = vec2(noise(vec3(pos*2.125, uv.x+(time*noiseSpeed))),
            noise(vec3(pos*2.125, uv.y+(time*noiseSpeed)+1234.5)));


    // Flow force - left by preceeding particles
    // (Ensure this is checked before the next flow step is rendered, to avoid
    // self-influence.)

    vec2 screenPos = screenPosition(pos, viewSize);
    vec2 flowForce = flowAtScreenPosition(screenPos, flow);


    // Accumulate weighted forces
    vel += (flowForce*flowWeight)+(wanderForce*wanderWeight);

    // Integrate motion
    pos += vel;

    // Damping
    vel *= damping;


    gl_FragColor = vec4(pos, vel);
}
