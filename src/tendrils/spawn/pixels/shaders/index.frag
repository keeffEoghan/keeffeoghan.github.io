/**
 * Tries a number of times to randomly select a pixel scored highest by a given
 * function.
 * @todo Break this up more so we can use the same basic logic to filter images
 *       differently
 */

precision highp float;

uniform sampler2D particles;
uniform sampler2D spawnData;

uniform vec2 dataRes;

uniform vec2 spawnSize;

uniform vec2 jitter;
uniform float time;

uniform mat3 spawnMatrix;

#pragma glslify: random = require(glsl-random)

#pragma glslify: applyColor = require(./apply/color)
#pragma glslify: vignette = require(../../../shaders/filter/pass/vignette)
#pragma glslify: apply = require(./apply/compose-filter, apply = applyColor, pass = vignette)
// #pragma glslify: apply = require(./apply/color)
#pragma glslify: pick = require(./pick/particles)

#pragma glslify: uvToPos = require(../../../shaders/map/uv-to-pos)
#pragma glslify: transform = require(../../../shaders/utils/transform)

const float samples = 3.0;
const vec2 flipUV = vec2(1.0, -1.0);

vec2 spawnToPos(vec2 uv) {
    // Jittering around a UV cell to get rid of boxy scaled sampling artefacts
    vec2 off = mix(-jitter, jitter, random(uv+time*0.001));

    return transform(spawnMatrix, uvToPos(uv+off)*flipUV*spawnSize);
}

void main() {
    vec2 uv = gl_FragCoord.xy/dataRes;
    vec4 state = texture2D(particles, uv);

    for(float n = 0.0; n < samples; n += 1.0) {
        vec4 off = state+vec4(n+1.2345+time*0.001);
        vec2 spawnUV = mod(vec2(random(off.xy+uv), random(off.zw+uv)), 1.0);

        state = pick(state,
            apply(spawnUV, spawnToPos(spawnUV), texture2D(spawnData, spawnUV)));
    }

    gl_FragColor = state;
}
