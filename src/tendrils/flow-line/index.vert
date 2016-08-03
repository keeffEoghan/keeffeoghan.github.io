#pragma glslify: import(../geom/line/vert/head)

uniform float time;
uniform float speed;
uniform float maxSpeed;

attribute vec2 previous;

varying vec4 values;
varying float sdf;

#pragma glslify: flow = require(../flow/apply/state, time = time)
// #pragma glslify: flow = require(../flow/apply/screen, time = time, flowDecay = 0.001)

#pragma glslify: perp = require(../utils/perp)
#pragma glslify: expand = require(../geom/line/expand)

void main() {
    sdf = sign(miter);

    // @note For some reason, using these have different effects.
    vec2 path = (position-previous)*speed;
    // vec2 path = perp(normal, true)*length(position-previous)*speed;

    values = flow(path, maxSpeed);

    vec2 vert = expand(position, normal, rad*values.a, miter);

    gl_Position = vec4(vert*viewSize, 0.0, 1.0);
}
