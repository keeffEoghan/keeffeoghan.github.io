precision highp float;

uniform float start;
uniform float time;
uniform float dt;

uniform vec2 viewSize;
uniform vec2 viewRes;

uniform sampler2D previous;
uniform sampler2D audio;

uniform float audioScale;

uniform float harmonies;

#pragma glslify: uvToPos = require(../tendrils/map/uv-to-pos)
#pragma glslify: posToAngle = require(./pos-to-angle)

void main() {
    vec2 uv = gl_FragCoord.xy/viewRes;
    vec2 pos = uvToPos(uv)/viewSize;

    float angle = mod(posToAngle(pos)/harmonies, 1.0);

    vec4 last = texture2D(previous, uv);
    vec4 sound = texture2D(audio, vec2(angle, 0.0));

    gl_FragColor = vec4(sound.r*audioScale, last.r*0.5, last.g*0.01, 1.0);
}
