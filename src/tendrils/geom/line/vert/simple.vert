#pragma glslify: import(./head)

#pragma glslify: expand = require(../expand)

void main() {
    gl_Position = vec4(expand(position, normal, rad, miter)*viewSize, 0.0, 1.0);
}
