precision highp float;

#pragma glslify: import(./head)

uniform sampler2D past;

uniform float growLimit;
uniform float grow;

// @todo Is there a use for `falloff` in this new setup?
uniform float falloff;
// @todo Spin this as well?
uniform float spinPast;

uniform float jitter;

uniform float pastAlpha;

vec3 sampler(vec2 uv) {
    return texture2D(past, uv).rgb;
}

// @todo Noise in form as well?
#pragma glslify: blur = require(glsl-hash-blur, sample = sampler, iterations = 3)

#pragma glslify: bezier = require(../tendrils/utils/bezier)

const vec2 mid = vec2(0.5);
const vec3 curve = vec3(0.0, 1.0, 1.0);

void main() {
    vec2 uv = gl_FragCoord.xy/viewRes;
    vec2 pos = uvToPos(uv)/viewSize;

    float dist = length(pos);

    // Sample and grow the past state
    
    vec2 off = mid-uv;
    float growRate = clamp(bezier(curve, dist/growLimit), 0.0, 1.0);
    vec2 pastUV = uv+(off*grow*dt*(1.0-growRate));

    vec4 old = texture2D(past, pastUV);

    old.rgb = blur(pastUV, jitter*growRate, viewRes.x/viewRes.y,
        mod(time, 20.0));


    // Accumulate colors

    vec4 color = vec4(clamp(old*pastAlpha, 0.0, 1.0));

    gl_FragColor = color;
}
