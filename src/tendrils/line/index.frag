/**
 * For a smooth line, check distance from line per-fragment.
 */

precision highp float;

uniform vec4 color;
uniform float rad;

varying vec2 fragPos;
varying vec2 linePos;

#pragma glslify: length2 = require(../shaders/utils/length-2)

void main() {
    gl_FragColor = vec4(color.rgb,
        color.a*clamp(1.0-(length2(fragPos-linePos)/rad), 0.0, 1.0));
}
