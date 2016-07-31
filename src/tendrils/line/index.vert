/**
 * Drawing lines in a vertex shader, from https://mattdesl.svbtle.com/drawing-lines-is-hard#expanding-in-a-vertex-shader_2
 * Pushes a point along its normal by its radius.
 */

precision highp float;

attribute vec2 position;
attribute vec2 normal;
attribute float miter;

uniform float rad;
uniform vec2 viewSize;

varying float signed;

#pragma glslify: expand = require(./expand)

void main() {
    vec2 pos = expand(position, normal, rad, miter);

    signed = sign(miter);

    gl_Position = vec4(pos*viewSize, 0.0, 1.0);
}
