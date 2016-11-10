precision highp float;

uniform float start;
uniform float time;
uniform float dt;

uniform sampler2D previous;

uniform vec2 viewSize;
uniform vec2 viewRes;

void main() {
    gl_FragColor = mod(texture2D(previous, gl_FragCoord.xy/viewRes)+
            vec4(-0.05, 0.01, 0.3, 0.01), vec4(0.4, 1.0, 0.9, 1.0));
}
