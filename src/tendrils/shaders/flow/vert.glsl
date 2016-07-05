precision highp float;

#pragma glslify: inert = require('../state/inert')
#pragma glslify: stateForFrame = require('../state/state-at-frame')
#pragma glslify: screenPosition = require('../screen-position')

uniform bool showFlow;

uniform sampler2D previous;
uniform sampler2D data;

uniform vec2 resolution;
uniform vec2 viewSize;

uniform float time;
uniform float maxSpeed;
uniform float flowDecay;

attribute vec2 uv;

varying vec4 color;

void main() {
    vec4 state = stateForFrame(uv, resolution, previous, data);

    if(state.xy != inert) {
        gl_Position = vec4(screenPosition(state.xy, viewSize), 1.0, 1.0);

        // Linear interpolation - inaccurate for vectors, will it be OK without
        // sudden turns, or do we need a per-fragment lookup?
        // @todo Remove this check for perf
        float a = length(state.zw)/maxSpeed;

        color = ((showFlow)?
                vec4(((state.zw*1000.0)+vec2(1.0))*0.5, sin(time*flowDecay), a)
            :   vec4(state.zw, time, a));
    }
}
