precision highp float;

uniform vec4 color;

varying float speedRate;

void main() {
    gl_FragColor = vec4(color.rgb, color.a*speedRate);
}
