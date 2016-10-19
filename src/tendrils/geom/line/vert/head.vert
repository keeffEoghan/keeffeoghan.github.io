/**
 * Drawing lines in a vertex shader, from https://mattdesl.svbtle.com/drawing-lines-is-hard#expanding-in-a-vertex-shader_2
 * Pushes a point along its normal by its radius.
 */

#pragma glslify: import(../../vert/head)

attribute vec2 normal;
attribute float miter;

uniform float rad;
