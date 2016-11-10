precision highp float;

uniform float start;
uniform float time;
uniform float dt;

uniform vec2 viewSize;
uniform vec2 viewRes;

uniform sampler2D previous;
uniform sampler2D audio;

uniform float audioScale;

void main() {
    vec2 uv = gl_FragCoord.xy/viewRes;
    vec2 pos = uv*viewSize;

    gl_FragColor = vec4(texture2D(audio, uv).r*audioScale,
        texture2D(previous, uv).rg,
        1.0);
}
