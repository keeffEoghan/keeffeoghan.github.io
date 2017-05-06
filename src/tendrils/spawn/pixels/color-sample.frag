#pragma glslify: import(./frag/head)

#pragma glslify: apply = require(./apply/color, time = time)
#pragma glslify: test = require(./test/particles)

const float samples = 3.0;

#pragma glslify: import(./frag/best-sample-main)
