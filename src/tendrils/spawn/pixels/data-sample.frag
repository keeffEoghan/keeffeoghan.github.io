#pragma glslify: import(./frag/head)
#pragma glslify: import(./vignette-head)

#pragma glslify: applier = require(./apply/identity)
#pragma glslify: vignette = require(../../filter/pass/vignette, curve = curve, mid = mid, limit = limit)
#pragma glslify: apply = require(./apply/compose-filter, apply = applier, pass = vignette)

#pragma glslify: test = require(./test/particles)

const float samples = 2.0;

#pragma glslify: import(./frag/best-sample-main)
