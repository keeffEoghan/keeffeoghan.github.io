/**
 * Adapted from https://www.shadertoy.com/view/4d2Xzw
 * Bokeh disc.
 * by David Hoskins.
 * License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
 *
 * The common body of these 2 functions is `import`ed from snippets, so that we
 * can use or avoid mip maps using overloading instead of precompiler
 * definitions (which are messy in a module-driven setup).
 *
 * @requires {const int} iterations The number of iterations to run.
 */

// The Golden Angle is (3.0-sqrt(5.0))*PI radians, which doesn't precompiled for
// some reason. The compiler is a dunce I tells-ya!!
const float goldenAngle = 2.39996323;

const mat2 rot = mat2(cos(goldenAngle), sin(goldenAngle),
        -sin(goldenAngle), cos(goldenAngle));

// Uses mipmaps
vec3 bokeh(sampler2D texture, vec2 texel, vec2 uv, float radius, float amount,
        bool mip) {
    #pragma glslify: import(./main-0)
        vec3 col = texture2D(texture, lookup, radius).xyz;
    #pragma glslify: import(./main-1)
}

// Doesn't use mipmaps
vec3 bokeh(sampler2D texture, vec2 texel, vec2 uv, float radius, float amount) {
    #pragma glslify: import(./main-0)
        vec3 col = texture2D(texture, lookup).xyz;
    #pragma glslify: import(./main-1)
}

#pragma glslify: export(bokeh)
