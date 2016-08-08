/**
 * Tries a number of times to randomly select a pixel scored highest by a given
 * function.
 *
 * @todo Some bug with `glslify-import` & sons breaks `node_mosules` aliased
 *       `require`s in `import`ed files, so we need to do it the looooooong way.
 */
// #pragma glslify: random = require(glsl-random)
#pragma glslify: random = require(../../../../../node_modules/glsl-random)

#pragma glslify: uvToPos = require(../../../map/uv-to-pos)
#pragma glslify: transform = require(../../../utils/transform)

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
