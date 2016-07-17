precision highp float;

uniform sampler2D particles;
uniform sampler2D flow;

uniform vec2 dataSize;
uniform vec2 viewSize;

uniform float time;
uniform float dt;

uniform float minSpeed;
uniform float maxSpeed;
uniform float damping;

uniform float flowDecay;

uniform float noiseSpeed;
uniform float noiseScale;

uniform float forceWeight;
uniform float flowWeight;
uniform float wanderWeight;

#pragma glslify: noise = require(glsl-noise/simplex/3d)

#pragma glslify: inert = require(./state/inert)
#pragma glslify: posToScreen = require(./map/pos-to-screen)
#pragma glslify: flowAtScreenPos = require(./flow/flow-at-screen-pos,levels=1.0,stride=1.0)


void main() {
    vec2 uv = gl_FragCoord.xy/dataSize;

    vec4 state = texture2D(particles, uv);
    vec2 pos = state.xy;
    vec2 vel = state.zw;

    vec2 newPos = pos;
    vec2 newVel = vel;

    if(pos != inert) {
        // Wander force
        vec2 wanderForce = vec2(noise(vec3(pos*noiseScale, uv.x+(time*noiseSpeed))),
                noise(vec3(pos*noiseScale, uv.y+(time*noiseSpeed)+1234.5)));


        // Flow force - left by preceeding particles
        // (Ensure this is checked before the next flow step is rendered, to avoid
        // self-influence.)

        vec2 flowForce = flowAtScreenPos(posToScreen(pos, viewSize), flow,
                time, flowDecay);


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
    }

    gl_FragColor = vec4(newPos, newVel);
}
