precision highp float;

varying vec4 values;
varying float sdf;

void main() {
    gl_FragColor = vec4(values.rgb, values.a-abs(sdf));
}
