#pragma glslify: import(./frag/head)

#pragma glslify: apply = require(./apply/brightest, time = time)
#pragma glslify: test = require(./test/particles)

const float samples = 6.0;

#pragma glslify: import(./frag/best-sample-main)
