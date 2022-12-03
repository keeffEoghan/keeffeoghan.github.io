uniform float time;
// @todo Use dt against audio rates?
uniform float dt;
uniform vec2 viewSize;
uniform vec2 viewRes;

/**
 * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased
 *     `require`s in `import`ed files, so we need to do it the looooooong way.
 * @todo Noise in form as well?
 */
// #pragma glslify: noise = require(glsl-noise/simplex/3d)
// #pragma glslify: noise = require(../../node_modules/glsl-noise/simplex/3d)

#pragma glslify: uvToPos = require(../tendrils/map/uv-to-pos)

// @todo Spin in form as well?
// #pragma glslify: posToAngle = require(./pos-to-angle)
