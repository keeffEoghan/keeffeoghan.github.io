precision highp float;

uniform sampler2D previous;
uniform sampler2D particles;

uniform vec2 dataRes;

uniform vec2 viewSize;

uniform float speedAlpha;

attribute vec2 uv;

varying float speedRate;

#pragma glslify: inert = require(../../utils/inert)
#pragma glslify: length2 = require(../utils/length-2)
#pragma glslify: stateAtFrame = require(../state/state-at-frame)

void main() {
    vec4 state = stateAtFrame(uv, dataRes, previous, particles);

    if(state.xy != inert) {
        speedRate = min(length2(state.zw)/speedAlpha, 1.0);

        gl_Position = vec4(state.xy*viewSize, 1.0, 1.0);
    }
}
