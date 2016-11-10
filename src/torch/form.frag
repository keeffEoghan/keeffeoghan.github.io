precision highp float;

uniform float start;
uniform float time;
uniform float dt;

uniform vec2 viewSize;
uniform vec2 viewRes;

uniform sampler2D past;
uniform sampler2D audio;

uniform float audioScale;

uniform float harmonies;
uniform float falloff;
uniform float growth;

#pragma glslify: uvToPos = require(../tendrils/map/uv-to-pos)
#pragma glslify: preAlpha = require(../tendrils/utils/pre-alpha)

#pragma glslify: posToAngle = require(./pos-to-angle)
#pragma glslify: sampleSound = require(./sample-sound)

const vec2 mid = vec2(0.5);

void main() {
    vec2 uv = gl_FragCoord.xy/viewRes;
    vec2 pos = uvToPos(uv)/viewSize;

    float angle = posToAngle(pos)/harmonies;

    vec4 sound = sampleSound(audio, angle)*audioScale;

    sound.a /= falloff*length(pos);

    vec4 old = texture2D(past, uv+((mid-uv)*pow(dt*0.001, growth)));

    vec4 color = preAlpha(sound)+preAlpha(old);

    // gl_FragColor = sound;
    gl_FragColor = color;
    // gl_FragColor = vec4(color.rgb, color.a*dt*0.003);
}
