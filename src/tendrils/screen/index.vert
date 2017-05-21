precision highp float;

attribute vec2 position;
varying vec2 uv;

void main() {
    uv = position.xy;

    gl_Position = vec4(position, 1.0, 1.0);
}
