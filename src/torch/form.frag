precision highp float;

#pragma glslify: import(./head)

vec3 sampler(vec2 uv) {
    return texture2D(past, uv).rgb;
}

#pragma glslify: blur = require(glsl-hash-blur, sample = sampler, iterations = 3)

#pragma glslify: map = require(glsl-map)

#pragma glslify: uvToPos = require(../tendrils/map/uv-to-pos)
#pragma glslify: bezier = require(../tendrils/utils/bezier)

#pragma glslify: posToAngle = require(./pos-to-angle)
#pragma glslify: sampleSound = require(./sample-sound)

const vec2 mid = vec2(0.5);
const vec4 curve = vec4(0.0, 0.0, 1.0, 1.0);
const float growLimit = 1.3;

void main() {
    #pragma glslify: import(./common)

    // Sample and grow the past state
    
    vec2 off = mid-uv;
    float growRate = clamp(bezier(curve, dist/growLimit), 0.0, 1.0);
    vec2 pastUV = uv+(off*grow*dt*(1.0-growRate));

    vec4 old = texture2D(past, pastUV);

    old.rgb = blur(pastUV, jitter*growRate, viewRes.x/viewRes.y,
        mod(time, 20.0));

    // old.rgb *= old.rgb*1.1;


    // Accumulate color

    // vec4 color = vec4(sound*falloff*nowAlpha)+(old*pastAlpha);
    vec4 color = vec4(clamp(sound*falloff*nowAlpha, 0.0, 1.0))+
            clamp(old*pastAlpha, 0.0, 1.0);

    gl_FragColor = color;
    // gl_FragColor = clamp(color, vec4(0.0), vec4(1.0));
}
