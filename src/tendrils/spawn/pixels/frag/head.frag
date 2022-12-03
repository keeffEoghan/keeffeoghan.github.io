precision highp float;

uniform sampler2D particles;
uniform sampler2D spawnData;

uniform vec2 dataRes;
uniform vec2 geomRes;
uniform vec2 spawnSize;

uniform vec2 jitter;
uniform float time;
uniform float speed;

uniform mat3 spawnMatrix;

/**
 * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased
 *     `require`s in `import`ed files, so we need to do it the looooooong way.
 */
// #pragma glslify: random = require(glsl-random)
#pragma glslify: random = require(../../../../../node_modules/glsl-random)

#pragma glslify: uvToPos = require(../../../map/uv-to-pos)
#pragma glslify: transform = require(../../../utils/transform)

const vec2 flipUV = vec2(1.0, -1.0);

vec2 spawnToPos(vec2 uv) {
  // Jittering around a UV cell to get rid of boxy scaled sampling artefacts
  vec2 offset = vec2(mix(-jitter.x, jitter.x, random(uv-1.2345+(time*0.001))),
      mix(-jitter.y, jitter.y, random(uv+1.2345+(time*0.001))));

  return transform(spawnMatrix, uvToPos(uv+offset)*flipUV*spawnSize);
}
