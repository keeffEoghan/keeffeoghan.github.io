precision highp float;

uniform sampler2D previous;
uniform sampler2D data;

uniform vec2 resolution;
uniform vec2 viewSize;

attribute vec2 uv;

#pragma glslify: stateForFrame = require('./state-for-frame')
#pragma glslify: screenPosition = require('./screen-position')

void main() {
    vec4 state = stateForFrame(uv, resolution, previous, data);
    vec2 screenPos = screenPosition(state.xy, viewSize);

    gl_Position = vec4(screenPos, 1, 1);
}
