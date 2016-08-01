#pragma glslify: import(./head)

varying float sdf;

void main() {
    gl_FragColor = vec4(color.rgb, color.a-abs(sdf));
}
