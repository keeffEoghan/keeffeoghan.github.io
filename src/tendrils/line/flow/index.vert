#pragma glslify: import(../frag/head)

attribute vec2 previous;

varying vec2 path;
// varying vec2 perp;
varying float sdf;

#pragma glslify: expand = require(../expand)

void main() {
    path = position-previous;
    // perp = normal*miter*length(path);
    sdf = sign(miter);

    vec2 pos = expand(position, normal, rad, miter);

    gl_Position = vec4(pos*viewSize, 0.0, 1.0);
}
