#pragma glslify: import(./frag/head)

uniform float flowDecay;

#pragma glslify: apply = require(./apply/flow, time = time, decay = flowDecay)
#pragma glslify: test = require(./test/particles)

const float samples = 5.0;

#pragma glslify: import(./frag/best-sample-main)
