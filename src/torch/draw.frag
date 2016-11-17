precision highp float;

uniform vec2 viewRes;

uniform sampler2D light;
uniform sampler2D fade;

uniform vec4 lightColor;
uniform vec4 fadeColor;

uniform float bokehRadius;
uniform float bokehAmount;


vec4 color(vec2 uv) {
    return (texture2D(light, uv)*lightColor)+
        (texture2D(fade, uv)*fadeColor);
}

#pragma glslify: bokeh = require(../../libs/bokeh, iterations = 20, sample = color)

#pragma glslify: vignette = require(../tendrils/filter/vignette)

const vec4 falloff = vec4(0.0, 1.0, 1.0, 1.0);
const vec2 mid = vec2(0.5);
const float limit = 0.6;

void main() {
    vec2 uv = gl_FragCoord.xy/viewRes;
    vec2 texel = 1.0/viewRes;
    float power = 1.0-vignette(uv, mid, limit, falloff);

    gl_FragColor = vec4(bokeh(texel, uv, bokehRadius*power, bokehAmount*power),
            color(uv).a);
    // gl_FragColor = color(uv);
}
