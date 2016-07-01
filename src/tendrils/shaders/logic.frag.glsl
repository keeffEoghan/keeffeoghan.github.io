precision highp float;

#pragma glslify: noise = require('glsl-noise/simplex/3d')
#pragma glslify: screenPosition = require('./screen-position')
#pragma glslify: flowAtScreenPosition = require('./flow-at-screen-position')
#pragma glslify: pointInBox = require('./bounds/point-in-box')

uniform sampler2D data;
uniform sampler2D flow;

uniform vec2 resolution;
uniform vec2 viewSize;

uniform float time;
uniform float dt;

uniform float maxSpeed;
uniform float damping;

uniform float flowDecay;

uniform float noiseSpeed;

uniform float forceWeight;
uniform float flowWeight;
uniform float wanderWeight;

const vec2 inert = vec2(-10000.0);
const vec2 zero = vec2(0.0);

void main() {
    // Read particle data.
    vec2 uv = gl_FragCoord.xy/resolution;

    vec4 state = texture2D(data, uv);
    vec2 pos = state.xy;
    vec2 vel = state.zw;

    vec2 newPos = pos;
    vec2 newVel = vel;


    // if(pos != inert || vel != zero) {
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
        newVel = (vel*damping*dt)+
            (forceWeight*
                ((flowForce*flowWeight*dt)+
                    (wanderForce*wanderWeight*dt)));
        
        // Clamp the velocity
        float speed = length(newVel);
        
        newVel = (newVel/speed)*min(speed, maxSpeed);

        // Integrate motion
        newPos = pos+newVel;

        // @todo When you get it up and running again, remember to check this!
        /*if(!pointInBox(newPos, vec4(vec2(0.0), viewSize) ||
                (speed < 0.0001 && length(vel) < 0.0001)) {
            // Mark this particle inactive
            newPos = inert;
            newVel = zero;
        }*/
    // }

    gl_FragColor = vec4(newPos, newVel);
}
