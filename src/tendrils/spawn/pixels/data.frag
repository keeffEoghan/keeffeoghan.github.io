#pragma glslify: import(./frag/head)

#pragma glslify: applyID = require(./apply/identity)
#pragma glslify: vignette = require(../../filter/pass/vignette)
#pragma glslify: apply = require(./apply/compose-filter, apply = applyID, pass = vignette)

#pragma glslify: pick = require(./pick/particles)

const float samples = 3.0;

#pragma glslify: import(./frag/main)