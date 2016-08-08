precision highp float;

varying vec4 color;

void main() {
    // @todo SDF from line, to weaken force further away
    gl_FragColor = color.rgba;
}
