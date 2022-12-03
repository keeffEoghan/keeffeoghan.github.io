#pragma glslify: posToAngle = require(./pos-to-angle)

vec4 sound(sampler2D audio, float at) {
  return texture2D(audio, vec2(mod(at, 1.0), 0.0));
}

vec4 sound(sampler2D audio, vec2 pos, float harmonies) {
  return sound(audio, posToAngle(pos)/harmonies);
}

#pragma glslify: export(sound)
