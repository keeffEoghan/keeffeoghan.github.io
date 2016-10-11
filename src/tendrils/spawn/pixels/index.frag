/**
 * Tries a number of times to randomly select a pixel scored highest by a given
 * function.
 *
 * @todo Break this up more so we can use the same basic logic to filter images
 *       differently. Seems to be a problem using `glslify-import` here; it
 *       doesn't recognise `node_modules` imports any more, thinks they're
 *       relative; we'll see later about that.
 */

#pragma glslify: import(./frag/head)

// #pragma glslify: applier = require(./apply/color)
#pragma glslify: applier = require(./apply/brightest)
#pragma glslify: vignette = require(../../filter/pass/vignette)
#pragma glslify: apply = require(./apply/compose-filter, apply = applier, pass = vignette)
// #pragma glslify: apply = require(./apply/color)
// #pragma glslify: apply = require(./apply/brightest)

#pragma glslify: test = require(./test/particles)

const float samples = 5.0;

#pragma glslify: import(./frag/main)