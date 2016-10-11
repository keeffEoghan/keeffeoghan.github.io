#pragma glslify: import(./frag/head)

#pragma glslify: applier = require(./apply/identity)
#pragma glslify: vignette = require(../../filter/pass/vignette)
#pragma glslify: apply = require(./apply/compose-filter, apply = applier, pass = vignette)

#pragma glslify: test = require(./test/particles)

const float samples = 3.0;

#pragma glslify: import(./frag/main)