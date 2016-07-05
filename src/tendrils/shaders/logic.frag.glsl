precision highp float;

#pragma glslify: noise = require('glsl-noise/simplex/3d')

#pragma glslify: inert = require('./state/inert')
#pragma glslify: screenPosition = require('./screen-position')
#pragma glslify: flowAtScreenPosition = require('./flow-at-screen-position')
#pragma glslify: pointInBox = require('./bounds/point-in-box')

uniform sampler2D data;
uniform sampler2D flow;

uniform vec2 resolution;
uniform vec2 viewSize;

uniform float time;
uniform float dt;

uniform float minSpeed;
uniform float maxSpeed;
uniform float damping;

uniform float flowDecay;

uniform float noiseSpeed;

uniform float forceWeight;
uniform float flowWeight;
uniform float wanderWeight;

void main() {
    // Read particle data.
    vec2 uv = gl_FragCoord.xy/resolution;

    vec4 state = texture2D(data, uv);
    vec2 pos = state.xy;
    vec2 vel = state.zw;

    vec2 newPos = pos;
    vec2 newVel = vel;

    if(pos != inert) {
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
        
        // Normalize and clamp the velocity
        /**
         * @todo This seems to cause some problems when dealing with larger max
         *       speeds - the particles no longer follow flow forces somehow...
         */
        float speed = length(newVel);

        newVel *= min(speed, maxSpeed)/speed;

        // Integrate motion
        newPos = pos+newVel;


        // Reset out-of-bounds particles - marking them inert if outside
        // @todo Respawn instead/as well?

        vec2 boundSize = viewSize/viewSize.y;

        newPos = ((pointInBox(newPos, vec4(-boundSize, boundSize)) > 0.0)?
            newPos : inert);
    }

    gl_FragColor = vec4(newPos, newVel);
}
