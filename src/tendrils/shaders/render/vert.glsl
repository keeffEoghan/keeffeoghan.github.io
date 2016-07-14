precision highp float;

uniform sampler2D previous;
uniform sampler2D particles;

uniform vec2 dataSize;
uniform vec2 viewSize;
uniform float speedAlpha;

attribute vec2 uv;

varying float speedRate;

#pragma glslify: inert = require(../state/inert)
#pragma glslify: stateAtFrame = require(../state/state-at-frame)
#pragma glslify: posToScreen = require(../map/pos-to-screen)

void main() {
    vec4 state = stateAtFrame(uv, dataSize, previous, particles);

    if(state.xy != inert) {
        vec2 screenPos = posToScreen(state.xy, viewSize);

        speedRate = min(dot(state.zw, state.zw)/speedAlpha, 1.0);

        gl_Position = vec4(screenPos, 1.0, 1.0);
    }
}
