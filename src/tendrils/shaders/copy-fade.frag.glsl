precision highp float;

uniform sampler2D view;
uniform vec2 viewRes;
uniform float opacity;

// #pragma glslify: fxaa = require(glsl-fxaa)

void main() {
    vec4 fragment = texture2D(view, gl_FragCoord.xy/viewRes);
    // vec4 fragment = fxaa(view, gl_FragCoord.xy, viewRes);

    float a = opacity*fragment.a;
    // float a = pow(opacity, fragment.a);
    // float a = pow(fragment.a, opacity);
    // float a = opacity;

    gl_FragColor = mix(vec4(0.0), fragment, clamp(a, 0.0, 1.0));
    // gl_FragColor = vec4(fragment.rgb, clamp(a, 0.0, 1.0));
}
