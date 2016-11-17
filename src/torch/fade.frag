precision highp float;

uniform float time;
uniform float dt;

uniform vec2 viewSize;
uniform vec2 viewRes;

uniform sampler2D next;
uniform sampler2D past;

uniform float grow;
uniform float growLimit;

// @todo Spin this as well?
// uniform float spinPast;

uniform float jitter;

uniform float fadeAlpha;

vec4 color(vec2 uv) {
    return ((texture2D(past, uv)*fadeAlpha)+texture2D(next, uv));
}

vec3 sampler(vec2 uv) {
    return color(uv).rgb;
}

// @todo Noise in form as well?
#pragma glslify: blur = require(glsl-hash-blur, sample = sampler, iterations = 3)

#pragma glslify: uvToPos = require(../tendrils/map/uv-to-pos)
#pragma glslify: bezier = require(../tendrils/utils/bezier)

const vec2 mid = vec2(0.5);
const vec3 curve = vec3(0.0, 1.0, 1.0);

void main() {
    vec2 uv = gl_FragCoord.xy/viewRes;
    vec2 pos = uvToPos(uv)/viewSize;

    float dist = length(pos);

    // Sample and grow
    
    float growRate = clamp(bezier(curve, dist/growLimit), 0.0, 1.0);
    vec2 st = uv+((mid-uv)*grow*dt*(1.0-growRate));

    vec4 fade = color(st);

    fade.rgb = blur(st, jitter*growRate, viewRes.x/viewRes.y,
        mod(time, 20.0));

    gl_FragColor = vec4(clamp(fade, 0.0, 1.0));
}
