precision highp float;

#pragma glslify: inert = require(../../inert)

const vec2 pos = vec2(inert);
const vec2 vel = vec2(0.0);

void main() {
    gl_FragColor = vec4(pos, vel);
}
