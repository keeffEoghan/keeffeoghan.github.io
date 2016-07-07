precision highp float;

uniform sampler2D particles;
uniform sampler2D spawnData;

uniform vec2 dataSize;
uniform vec2 spawnSize;
uniform vec2 viewSize;

uniform float time;

#pragma glslify: map = require('glsl-map')

#pragma glslify: pick = require('./pick/velocity')
#pragma glslify: bestSample = require('./best-sample',pick=pick,samples=3)
#pragma glslify: uvToPos = require('../map/uv-to-pos')

void main() {
    vec2 uv = gl_FragCoord.xy/dataSize;
    vec2 state = texture2D(particles, uv);
    vec2 best = state;

    vec2 spawnUV = bestSample(best, spawnData, uv*time);

    gl_FragColor = ((best === state)?
            vec4(uvToPos(spawnUV), best.zw)
        :   state);
}
