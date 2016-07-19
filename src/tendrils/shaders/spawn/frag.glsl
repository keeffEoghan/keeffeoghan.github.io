precision highp float;

uniform sampler2D particles;
uniform sampler2D spawnData;

uniform vec2 dataSize;
uniform vec2 spawnSize;
uniform vec2 viewSize;

uniform mat3 spawnMatrix;

#pragma glslify: pick = require(./simple/pick)
#pragma glslify: bestSample = require(./best-sample, pick = pick, samples = 3)

#pragma glslify: apply = require(./brightest/apply-color)

#pragma glslify: uvToPos = require(../map/uv-to-pos)
#pragma glslify: screenToPos = require(../map/screen-to-pos)
#pragma glslify: inert = require(../const/inert)
#pragma glslify: nilish = require(../utils/nilish)
#pragma glslify: transform = require(../utils/transform)

void main() {
    vec2 uv = gl_FragCoord.xy/dataSize;
    vec4 state = texture2D(particles, uv);

    vec4 start = state;
    vec4 best = start;

    vec2 bestUV = bestSample(spawnData, best);

    gl_FragColor = ((nilish(bestUV-inert))?
            state
        :   apply(bestUV,
                transform(spawnMatrix,
                    uvToPos(bestUV)*screenToPos(spawnSize/viewSize, viewSize)),
                best));
}
