precision highp float;

#pragma glslify: import(./head)

uniform sampler2D form;

#pragma glslify: noise = require(glsl-noise/simplex/3d)

#pragma glslify: hsv2rgb = require(../../libs/glsl-hsv/hsv-rgb)

#pragma glslify: uvToPos = require(../tendrils/map/uv-to-pos)
#pragma glslify: preAlpha = require(../tendrils/utils/pre-alpha)

#pragma glslify: posToAngle = require(./pos-to-angle)
#pragma glslify: sampleSound = require(./sample-sound)

void main() {
    #pragma glslify: import(./common)

    // Accumulate color

    vec4 ring = vec4(sound*attenuate);

    // vec4 ambient = vec4(hsv2rgb(vec3(angle, 0.8, 0.7)), 1.0);
    vec4 ambient = vec4(0.5, 0.8, 1.0, 1.0);
    // vec4 diffuse = vec4(1.0);
    vec4 geom = texture2D(form, uv);

    // vec4 color = ring*ringAlpha;
    // vec4 color = geom*formAlpha*ambient;

    vec4 color = (ring*ringAlpha)+
        // (((geom*ambient)+(geom*diffuse*attenuate/dist))*formAlpha);
        // (geom*formAlpha*diffuse*attenuate/dist);
        (geom*formAlpha*ambient);

    gl_FragColor = color;
}
