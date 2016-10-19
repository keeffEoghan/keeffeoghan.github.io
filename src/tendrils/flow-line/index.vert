#pragma glslify: import(../geom/line/vert/head)

uniform float speed;
uniform float speedLimit;
// uniform float time;

attribute vec2 previous;
attribute float time;
attribute float dt;

varying vec4 values;
varying vec2 crest;
varying float sdf;

#pragma glslify: flow = require(../flow/apply/state, time = time)
// #pragma glslify: flow = require(../flow/apply/screen, time = time, flowDecay = 0.001)

#pragma glslify: perp = require(../utils/perp)
#pragma glslify: expand = require(../geom/line/expand)

void main() {
    sdf = sign(miter);

    float rate = speed/max(dt, 1.0);

    // @note For some reason, using these have different effects.
    vec2 vel = (position-previous)*rate;
    // vec2 vel = perp(normal, true)*length(position-previous)*rate;

    values = flow(vel, speedLimit);

    crest = normal*miter;

    vec2 vert = expand(position, normal, rad*values.a, miter);

    gl_Position = vec4(vert*viewSize, 0.0, 1.0);
}
