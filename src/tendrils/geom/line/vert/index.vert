#pragma glslify: import(./head)

varying float sdf;

#pragma glslify: expand = require(../expand)

void main() {
    vec2 pos = expand(position, normal, rad, miter);

    sdf = sign(miter);

    gl_Position = vec4(pos*viewSize, 0.0, 1.0);
}
