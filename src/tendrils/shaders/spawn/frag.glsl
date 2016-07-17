precision highp float;

uniform sampler2D particles;
uniform sampler2D spawnData;

uniform vec2 dataSize;
uniform vec2 spawnSize;
uniform vec2 viewSize;

#pragma glslify: pick = require(./simple/pick)
#pragma glslify: bestSample = require(./best-sample,pick=pick,samples=1)
#pragma glslify: apply = require(./simple/apply)
#pragma glslify: uvToPos = require(../map/uv-to-pos)
#pragma glslify: length2 = require(../utils/length-2)

const float eps = 0.01;

void main() {
    vec2 uv = gl_FragCoord.xy/dataSize;
    vec4 state = texture2D(particles, uv);
    vec4 best = state;
    // vec4 best = vec4(10000.0);

    vec2 bestUV = bestSample(best, state.xy, spawnData);

    gl_FragColor = ((length2(best-state) < eps)? state
        // :   apply(uvToPos(bestUV*spawnSize/viewSize), best));
        :   apply(bestUV*spawnSize/viewSize, best));
}
