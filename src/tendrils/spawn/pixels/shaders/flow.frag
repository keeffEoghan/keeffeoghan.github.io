#pragma glslify: import(./frag/head)

uniform float flowDecay;

#pragma glslify: apply = require(./apply/flow, time = time, decay = flowDecay)
#pragma glslify: pick = require(./pick/particles)

#pragma glslify: import(./frag/main)