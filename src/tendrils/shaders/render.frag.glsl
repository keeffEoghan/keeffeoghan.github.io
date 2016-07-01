precision highp float;

uniform vec4 color;

void main() {
    gl_FragColor = color.rgba;
    // gl_FragColor = vec4(color.rgb, color.a*length(gl_FragCoord-gl_PointCoord));
}
