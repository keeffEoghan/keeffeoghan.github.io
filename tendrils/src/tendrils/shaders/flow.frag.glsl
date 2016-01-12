precision highp float;

varying vec2 flow;

void main() {
    gl_FragColor = vec4(flow, 1.0, 1.0);
}
