precision highp float;

uniform sampler2D particles;
uniform sampler2D spawnData;

uniform vec2 dataSize;
uniform vec2 spawnSize;
uniform vec2 viewSize;

uniform vec2 randomSeed;

#pragma glslify: apply = require(./brightest/apply-brightest)
#pragma glslify: pick = require(./brightest/pick)
#pragma glslify: bestSample = require(./best-sample,pick=pick,samples=3)

void main() {
    vec2 uv = gl_FragCoord.xy/dataSize;
    vec4 state = texture2D(particles, uv);
    vec4 best = state;

    vec2 bestUV = bestSample(best, spawnData, uv*randomSeed);

    gl_FragColor = ((best == state)?
            apply(best, bestUV, spawnSize, viewSize)
        :   state);
}
