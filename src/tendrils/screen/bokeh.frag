/**
 * A vignette bokeh blur
 * @todo Make the `const`s here into `uniform`s.
 */

precision highp float;

uniform sampler2D view;
uniform vec2 resolution;
uniform float time;

uniform float radius;
uniform float amount;

vec3 sampler(vec2 uv) {
    return texture2D(view, uv).rgb;
}

#pragma glslify: bokeh = require(../../../libs/bokeh, iterations = 20, sample = sampler)
#pragma glslify: vignette = require(../filter/vignette)

const vec4 falloff = vec4(0.0, 1.0, 1.0, 1.0);
const vec2 mid = vec2(0.5);
const float limit = 0.6;

void main() {
    vec2 uv = gl_FragCoord.xy/resolution;
    vec2 texel = 1.0/resolution;
    float power = 1.0-vignette(uv, mid, limit, falloff);

    gl_FragColor = vec4(bokeh(texel, uv, radius*power, amount*power),
            texture2D(view, uv).a);
}
