/**
 * Tries a number of times to randomly select a pixel scored highest by a given
 * function.
 *
 * @requires {function} apply A function that transforms a `vec4` of data into a
 *              valid `vec4` state.
 * @requires {function} test A function that returns a float value for a given
 *               `vec4` state; greater values win the comparison.
 */

// Over 1 favours changing to new data; under 1 favours current data.
uniform float bias;

/**
 * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased
 *     `require`s in `import`ed files, so we need to do it the looooooong way.
 */
// #pragma glslify: random = require(glsl-random)
#pragma glslify: random = require(../../../../../node_modules/glsl-random)

vec4 pick(vec4 current, vec4 next) {
  return ((test(current) > bias*test(next))? current : next);
}

void main() {
  /**
   * @todo This was needed in `./direct-main.frag` - is it needed here too?
   */
  vec2 uv = gl_FragCoord.xy/dataRes;
  // vec2 uv = (gl_FragCoord.xy/dataRes)*(geomRes/dataRes);

  vec4 state = texture2D(particles, uv);

  vec4 baseSeed = state+vec4(uv, uv)+vec4(1.2345+(time*0.001));

  for(float n = 0.0; n < samples; n += 1.0) {
    vec4 seed = baseSeed+vec4(n);
    vec2 spawnUV = mod(vec2(random(seed.xy), random(seed.zw)), 1.0);
    vec4 other = apply(spawnUV, spawnToPos(spawnUV),
        texture2D(spawnData, spawnUV));

    state = pick(state, vec4(other.xy, other.zw*speed));
  }

  gl_FragColor = state;
}
