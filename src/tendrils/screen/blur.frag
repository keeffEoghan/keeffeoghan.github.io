/**
 * A vignette hash blur
 * @todo Make the `const`s here into `uniform`s.
 */

precision highp float;

uniform sampler2D view;
uniform vec2 resolution;
uniform float time;
uniform float radius;
uniform float limit;

vec3 sampler(vec2 uv) {
    return texture2D(view, uv).rgb;
}

#pragma glslify: blur = require(glsl-hash-blur, sample = sampler, iterations = 20)
#pragma glslify: vignette = require(../filter/vignette)

const vec3 falloff = vec3(0.0, 1.0, 1.0);
const vec2 mid = vec2(0.5);

void main() {
    vec2 uv = gl_FragCoord.xy/resolution;
    float texel = 1.0/min(resolution.x, resolution.y);
    float amount = (1.0-vignette(uv, mid, limit, falloff))*texel;
    float aspect = resolution.x/resolution.y;
    float jitter = mod(time, 20.0);

    gl_FragColor = vec4(blur(uv, radius*amount, aspect, jitter),
            texture2D(view, uv).a);
}
