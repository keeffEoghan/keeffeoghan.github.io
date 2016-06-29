precision highp float;

uniform sampler2D view;
uniform vec2 viewSize;
uniform float opacity;

// #pragma glslify: fxaa = require('glsl-fxaa')

void main() {
    vec4 fragment = texture2D(view, gl_FragCoord.xy/viewSize);
    // vec4 fragment = fxaa(view, gl_FragCoord.xy, viewSize);

    float a = fragment.a*opacity;

    gl_FragColor = mix(vec4(0.0), fragment, a);
    // gl_FragColor = vec4(fragment.rgb, a);
}
