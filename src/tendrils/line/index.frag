/**
 * Drawing lines in a vertex shader, from https://mattdesl.svbtle.com/drawing-lines-is-hard#expanding-in-a-vertex-shader_2
 * Pushes a point along its normal by half its weight.
 */

uniform vec4 color;
uniform float weight;

varying vec2 fragPos;
varying vec2 linePos;

#pragma glslify: length2 = require(../../shaders/utils/length-2)

void main() {
    gl_FragColor = vec4(color,
        color.a*clamp(1.0-(length2(fragPos-linePos)/(weight*0.5)), 0.0, 1.0));
}
