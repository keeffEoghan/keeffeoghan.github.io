// `import`-able convenience for setting up a vignette - should be replaced with
// a proper `uniform`-ed version.

const vec3 curve = vec3(0.1, 1.0, 1.0);
const vec2 mid = vec2(0.5);
const float limit = 0.6;

// #pragma glslify: vignette = require(../../filter/pass/vignette, curve = curve, mid = mid, limit = limit)
