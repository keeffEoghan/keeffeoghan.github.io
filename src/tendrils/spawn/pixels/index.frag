#pragma glslify: import(./frag/head)
#pragma glslify: import(./vignette-head)

#pragma glslify: applier = require(./apply/color, time = time)
// #pragma glslify: applier = require(./apply/brightest)
#pragma glslify: vignette = require(../../filter/pass/vignette, curve = curve, mid = mid, limit = limit)
#pragma glslify: apply = require(./apply/compose-filter, apply = applier, pass = vignette)

// #pragma glslify: apply = require(./apply/color, time = time)
// #pragma glslify: apply = require(./apply/brightest)

#pragma glslify: import(./frag/direct-main)
