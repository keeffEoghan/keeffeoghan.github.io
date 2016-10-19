#pragma glslify: import(./head)

void main() {
    gl_Position = vec4(position*viewSize, 0.0, 1.0);
}
