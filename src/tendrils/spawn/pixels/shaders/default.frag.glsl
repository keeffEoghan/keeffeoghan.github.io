/**
 * @todo Some problem with `glslify-import` of a file with another
 *       `#pragma glslify...` in it; giving these WebGL errors:
 *       - `WebGL: INVALID_VALUE: shaderSource: string not ASCII`
 *       - `Unknown Error: ERROR: 0:? : '' : syntax error`
 */

precision highp float;

#pragma glslify: apply = require(./particles/apply)
#pragma glslify: pick = require(./particles/pick)
#pragma glslify: bestSample = require(./best-sample, pick = pick, samples = 3)

#pragma glslify: import(./main.frag)
