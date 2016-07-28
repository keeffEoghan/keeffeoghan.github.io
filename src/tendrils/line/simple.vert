/**
 * Drawing lines in a vertex shader, from https://mattdesl.svbtle.com/drawing-lines-is-hard#expanding-in-a-vertex-shader_2
 * Pushes a point along its normal by its radius.
 */

precision highp float;

attribute vec2 position;
attribute vec2 normal;
attribute float miter;

uniform float rad;

#pragma glslify: expand = require(./expand)

void main() {
    gl_Position = vec4(expand(position, normal, rad, miter), 0.0, 1.0);
}
