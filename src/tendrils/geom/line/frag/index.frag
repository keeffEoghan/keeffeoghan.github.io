/**
 * For a smooth line, check distance from line per-fragment.
 */

#pragma glslify: import(../../frag/head)

varying float sdf;

void main() {
    gl_FragColor = vec4(color.rgb, color.a-abs(sdf));
}
