/**
 * @requires {vec4} from The range to map from
 * @requires {vec4} to The range to map to
 *
 * @todo Work out why this setup won't work in glslify (it doesn't let you
 *       import multiple versions of this function)
 */

#pragma glslify: map = require('glsl-map')

vec2 mapper(in vec2 value) {
    return map(value, from.xy, from.zw, to.xy, to.zw);
}

#pragma glslify: export(mapper)
