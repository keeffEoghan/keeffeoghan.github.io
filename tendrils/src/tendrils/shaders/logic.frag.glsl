precision highp float;

uniform sampler2D data;
uniform sampler2D flow;

uniform vec2 resolution;
uniform vec2 viewSize;

uniform float time;

uniform float maxSpeed;
uniform float damping;

uniform float flowDecay;

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
    vec3 flowData = flowAtScreenPosition(screenPos, flow);

    // The flow degrades over time
    vec2 flowForce = flowData.xy*max(0.0, 1.0-((time-flowData.z)*flowDecay));


    // Accumulate weighted forces and damping
    vel = (vel*damping)+(flowForce*flowWeight)+(wanderForce*wanderWeight);
    
    // Clamp the velocity
    float speed = length(vel);
    
    vel = (vel/speed)*min(speed, maxSpeed);

    // Integrate motion
    pos += vel;

    gl_FragColor = vec4(pos, vel);
}
