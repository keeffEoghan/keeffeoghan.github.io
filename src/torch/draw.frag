precision highp float;

#pragma glslify: import(./head)

uniform sampler2D form;

#pragma glslify: hsv2rgb = require(../../libs/glsl-hsv/hsv-rgb)

#pragma glslify: preAlpha = require(../tendrils/utils/pre-alpha)

void main() {
    #pragma glslify: import(./common)

    // Accumulate color

    vec4 ring = vec4(sound*attenuate);

    vec4 geom = texture2D(form, uv);

    // vec4 color = ring*ringAlpha;
    // vec4 color = geom*formAlpha*ambient;

    vec4 color = (ring*ringAlpha)+(geom*formAlpha*ambient);

    gl_FragColor = color;
}
