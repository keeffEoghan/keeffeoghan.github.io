precision mediump float;

varying vec2 flow;

void main() {
    gl_FragColor = vec4(flow, 0.0, 1.0);
}
