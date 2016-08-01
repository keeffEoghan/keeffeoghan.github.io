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

#pragma glslify: applyColor = require(./apply/color)
#pragma glslify: vignette = require(../../filter/pass/vignette)
#pragma glslify: apply = require(./apply/compose-filter, apply = applyColor, pass = vignette)

#pragma glslify: pick = require(./pick/particles)

const float samples = 3.0;

#pragma glslify: import(./frag/main)