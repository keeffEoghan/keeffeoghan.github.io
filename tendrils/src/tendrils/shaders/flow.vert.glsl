precision highp float;

uniform sampler2D previous;
uniform sampler2D data;

uniform vec2 resolution;
uniform vec2 viewSize;

uniform float flowStrength;

attribute vec2 uv;

varying vec2 flow;

#pragma glslify: stateForFrame = require('./state-for-frame')
#pragma glslify: screenPosition = require('./screen-position')

void main() {
    vec4 state = stateForFrame(uv, resolution, previous, data);

    gl_Position = vec4(screenPosition(state.xy, viewSize), 1, 1);

    // Linear interpolation - inaccurate for vectors, will it be OK without
    // sudden turns, or do we need a per-fragment lookup?
    flow = state.zw*flowStrength;
}
