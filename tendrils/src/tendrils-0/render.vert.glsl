precision mediump float;

uniform sampler2D previous;
uniform sampler2D data;
uniform vec2 dataShape;
uniform vec2 resolution;

attribute vec2 uv;

varying float motion;

#pragma glslify: stateForFrame = require('./state-for-frame')
#pragma glslify: screenPosition = require('./screen-position')

void main() {
    vec4 state = stateForFrame(uv, dataShape, previous, data);

    gl_Position = screenPosition(state.xy, resolution);

    motion = length(state.zw);
}
