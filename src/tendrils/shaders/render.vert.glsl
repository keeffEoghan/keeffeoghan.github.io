precision highp float;

#pragma glslify: inert = require('./state/inert')
#pragma glslify: stateForFrame = require('./state/state-at-frame')
#pragma glslify: screenPosition = require('./screen-position')

uniform sampler2D previous;
uniform sampler2D data;

uniform vec2 resolution;
uniform vec2 viewSize;
uniform float speedAlpha;

attribute vec2 uv;

varying float speedRate;

void main() {
    vec4 state = stateForFrame(uv, resolution, previous, data);

    if(state.xy != inert) {
        vec2 screenPos = screenPosition(state.xy, viewSize);

        speedRate = min(dot(state.zw, state.zw)/speedAlpha, 1.0);

        gl_Position = vec4(screenPos, 1.0, 1.0);
    }
}
