/**
 * Tries a number of times to randomly select a pixel scored highest by a given
 * function.
 */

precision highp float;

uniform sampler2D particles;
uniform sampler2D spawnData;

uniform vec2 dataSize;
uniform vec2 spawnSize;
uniform vec2 viewSize;

uniform mat3 spawnMatrix;

#pragma glslify: random = require(glsl-random)

#pragma glslify: apply = require(./color/apply)
#pragma glslify: pick = require(./particles/pick)

#pragma glslify: uvToPos = require(../../shaders/map/uv-to-pos)
#pragma glslify: screenToPos = require(../../shaders/map/screen-to-pos)
#pragma glslify: transform = require(../../shaders/utils/transform)

const float samples = 3.0;
const vec2 flipUV = vec2(1.0, -1.0);

vec2 spawnToPos(in vec2 uv) {
    // return transform(spawnMatrix,
    //     uvToPos(uv)*screenToPos(spawnSize/viewSize, viewSize))*flipUV;
    return transform(spawnMatrix, uvToPos(uv)*(spawnSize/viewSize.yy))*flipUV;
}

void main() {
    vec4 state = texture2D(particles, gl_FragCoord.xy/dataSize);

    for(float n = 0.0; n < samples; n += 1.0) {
        vec4 off = state+vec4(n);
        vec2 uv = mod(vec2(random(off.xy), random(off.zw)), 1.0);

        state = pick(state,
            apply(uv, spawnToPos(uv), texture2D(spawnData, uv)));
    }

    gl_FragColor = state;
}
