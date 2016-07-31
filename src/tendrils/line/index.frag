/**
 * For a smooth line, check distance from line per-fragment.
 */

precision highp float;

uniform vec4 color;

varying float signed;

void main() {
    gl_FragColor = vec4(color.rgb, color.a-(abs(signed)*0.5));
}
