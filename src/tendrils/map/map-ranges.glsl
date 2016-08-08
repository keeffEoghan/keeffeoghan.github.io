/**
 * @requires {vec4} from The range to map from
 * @requires {vec4} to The range to map to
 *
 * @todo Work out why this setup won't work in glslify - it doesn't let you
 *       export an import directly, like this:
 *           `
 *           #pragma glslify: from = require(blah)
 *           #pragma glslify: to = require(blop)
 *           #pragma glslify: mapper = require(map-ranges, from = from, to = to)
 *
 *           #pragma glslify: export(mapper)
 *           `
 */

#pragma glslify: map = require(glsl-map)

vec2 mapper(vec2 value) {
    return map(value, from.xy, from.zw, to.xy, to.zw);
}

#pragma glslify: export(mapper)
