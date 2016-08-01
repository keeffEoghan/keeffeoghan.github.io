#pragma glslify: import(../frag/head)

uniform float time;
uniform float speed;
uniform float maxSpeed;

varying vec2 path;
// varying vec2 perp;
varying float sdf;

void main() {
    float dist = abs(sdf);

    // vec4 color = flow(mix(path, perp, dist)*speed, maxSpeed);
    vec4 color = flow(path*speed, maxSpeed);

    gl_FragColor = vec4(color.rgb, color.a-dist);
}
