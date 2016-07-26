/**
 * Drawing lines in a vertex shader, from https://mattdesl.svbtle.com/drawing-lines-is-hard#expanding-in-a-vertex-shader_2
 * Pushes a point along its normal by its radius.
 */

attribute vec2 position;
attribute vec2 normal;
attribute float miter;

uniform float rad;

varying vec2 fragPos;
varying vec2 linePos;

#pragma glslify: expand = require(./expand)

void main() {
    fragPos = expand(position, normal, rad, miter);
    linePos = position;

    gl_Position = vec4(fragPos, 0.0, 1.0);
}
