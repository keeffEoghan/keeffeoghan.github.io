precision highp float;

#pragma glslify: inert = require('./state/inert')
#pragma glslify: stateForFrame = require('./state/state-at-frame')
#pragma glslify: screenPosition = require('./screen-position')

uniform sampler2D previous;
uniform sampler2D data;

uniform vec2 resolution;
uniform vec2 viewSize;

attribute vec2 uv;

varying vec2 flow;

void main() {
    vec4 state = stateForFrame(uv, resolution, previous, data);

    if(state.xy != inert) {
        gl_Position = vec4(screenPosition(state.xy, viewSize), 1.0, 1.0);

        // Linear interpolation - inaccurate for vectors, will it be OK without
        // sudden turns, or do we need a per-fragment lookup?
        flow = state.zw;
    }
}
