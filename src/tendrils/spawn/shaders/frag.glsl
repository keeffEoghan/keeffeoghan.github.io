precision highp float;

/**
 * @requires {function} bestSample The function sampling the spawnData
 * @requires {function} apply The function applying the best sampled UV,
 *                      position, and data to the particles
 */

uniform sampler2D particles;
uniform sampler2D spawnData;

uniform vec2 dataSize;
uniform vec2 spawnSize;
uniform vec2 viewSize;

uniform mat3 spawnMatrix;

#pragma glslify: pick = require(./brightest/pick)
#pragma glslify: bestSample = require(./best-sample, pick = pick, samples = 3)
#pragma glslify: apply = require(./color/apply)

#pragma glslify: uvToPos = require(../../shaders/map/uv-to-pos)
#pragma glslify: screenToPos = require(../../shaders/map/screen-to-pos)

#pragma glslify: nilish = require(../../shaders/utils/nilish)

#pragma glslify: transform = require(../../shaders/utils/transform)

void main() {
    vec2 uv = gl_FragCoord.xy/dataSize;
    vec4 state = texture2D(particles, uv);

    vec4 start = state;
    vec4 best = start;
    vec2 bestUV = bestSample(spawnData, best);

    gl_FragColor = ((nilish(best-start))?
            state
        :   apply(bestUV,
                transform(spawnMatrix,
                    uvToPos(bestUV)*screenToPos(spawnSize/viewSize, viewSize)),
                best));
}
