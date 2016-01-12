precision mediump float;

uniform sampler2D data;
uniform vec4 color;

varying float motion;

void main() {
    gl_FragColor = vec4(color.rgb, color.a*motion*50.0);
}
