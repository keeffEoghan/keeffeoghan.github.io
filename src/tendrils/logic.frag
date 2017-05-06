precision highp float;

uniform sampler2D particles;
uniform sampler2D flow;
uniform sampler2D targets;

uniform vec2 dataRes;

uniform vec2 viewSize;

uniform float time;
uniform float dt;

uniform float speedLimit;
uniform float damping;

uniform float forceWeight;
uniform float flowWeight;
uniform float noiseWeight;

uniform float flowDecay;

uniform float noiseSpeed;
uniform float noiseScale;

uniform float target;

// These are scaled by the values they correspond to
uniform float varyForce;
uniform float varyFlow;
uniform float varyNoise;
uniform float varyNoiseScale;
uniform float varyNoiseSpeed;
uniform float varyTarget;

#pragma glslify: noise = require(glsl-noise/simplex/3d)

#pragma glslify: inert = require(./const/inert)
#pragma glslify: flowAtScreenPos = require(./flow/flow-at-screen-pos, levels = 1.0, stride = 1.0)

float vary(float base, float offset, float variance) {
    return base+(offset*variance*base);
}

void main() {
    vec2 uv = gl_FragCoord.xy/dataRes;

    vec4 state = texture2D(particles, uv);
    vec2 pos = state.xy;
    vec2 vel = state.zw;

    vec2 newPos = pos;
    vec2 newVel = vel;

    if(pos != inert) {
        // The 1D index offset of this pixel
        float i = (gl_FragCoord.x+(gl_FragCoord.y*dataRes.x))/
                (dataRes.x*dataRes.y);

        // Wander force

        vec2 noisePos = pos*vary(noiseScale, i, varyNoiseScale);

        // @todo This doesn't progress linearly - the speed grows with time...
        float noiseTime = time*vary(noiseSpeed, i, varyNoiseSpeed);

        vec2 wanderForce = vec2(noise(vec3(noisePos, uv.x+noiseTime)),
                noise(vec3(noisePos, uv.y+noiseTime+1234.5678)));


        // Flow force - left by preceeding particles
        // (Ensure this is checked before the next flow step is rendered, to avoid
        // self-influence.)

        vec2 flowForce = flowAtScreenPos(pos*viewSize, flow, time, flowDecay);


        // Accumulate weighted forces and damping
        newVel = (vel*damping*dt)+
            (vary(forceWeight, i, varyForce)*
                ((flowForce*dt*vary(flowWeight, i, varyFlow))+
                (wanderForce*dt*vary(noiseWeight, i, varyNoise))));

        // Tend towards targets
        newVel += (texture2D(targets, uv).xy-pos)*vary(target, i, varyTarget);
        
        // Normalize and clamp the velocity
        /**
         * @todo This seems to cause some problems when dealing with larger max
         *       speeds - the particles no longer follow flow forces somehow...
         */
        float speed = length(newVel);

        newVel *= min(speed, speedLimit)/speed;

        // Integrate motion
        newPos = pos+newVel;
    }

    gl_FragColor = vec4(newPos, newVel);
}
