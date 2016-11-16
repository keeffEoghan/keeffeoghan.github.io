precision highp float;

#pragma glslify: import(./head)

uniform sampler2D form;

uniform float staticScale;
uniform float staticSpeed;
uniform float staticAlpha;

uniform vec4 ambient;
uniform vec4 emit;

#pragma glslify: hsv2rgb = require(../../libs/glsl-hsv/hsv-rgb)

#pragma glslify: preAlpha = require(../tendrils/utils/pre-alpha)

void main() {
    #pragma glslify: import(./common)

    // Accumulate color

    vec4 ring = vec4(sound*attenuate);

    vec4 geom = texture2D(form, uv);

    vec4 background = vec4(noise(vec3(uv*noiseScale*staticScale,
            mean*noiseTime*dt*staticSpeed)));

    // vec4 color = ring*emit*ringAlpha;
    // vec4 color = geom*ambient*formAlpha;

    vec4 color = (ring*emit*ringAlpha)+
            (geom*ambient*formAlpha)+
            (background*staticAlpha);

    gl_FragColor = color;
}
