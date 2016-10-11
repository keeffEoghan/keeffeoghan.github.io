precision highp float;

uniform sampler2D colors;
uniform float alpha;

varying vec2 vUV;
varying float speedRate;

void main() {
    vec4 color = texture2D(colors, vUV);

    gl_FragColor = vec4(color.rgb, color.a*speedRate*alpha);
}
