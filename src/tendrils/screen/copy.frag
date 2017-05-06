precision highp float;

uniform sampler2D view;
uniform vec2 viewRes;

// #pragma glslify: fxaa = require(glsl-fxaa)

void main() {
    gl_FragColor = texture2D(view, gl_FragCoord.xy/viewRes);
    // gl_FragColor = fxaa(view, gl_FragCoord.xy, viewRes);
}
