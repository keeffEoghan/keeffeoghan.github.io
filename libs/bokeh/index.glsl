/**
 * Adapted from https://www.shadertoy.com/view/4d2Xzw
 * Bokeh disc.
 * by David Hoskins.
 * License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
 *
 * @requires {const int} iterations The number of iterations to run.
 * @requires {function} sample A function taking a `vec2` uv and returning a
 *                             `vec3` (for example, sampling a texture).
 */

// The Golden Angle is (3.0-sqrt(5.0))*PI radians, which doesn't precompiled for
// some reason. The compiler is a dunce I tells-ya!!
const float goldenAngle = 2.39996323;

const mat2 rot = mat2(cos(goldenAngle), sin(goldenAngle),
        -sin(goldenAngle), cos(goldenAngle));

// Doesn't use mipmaps
vec3 bokeh(vec2 texel, vec2 uv, float radius, float amount) {vec3 acc = vec3(0.0);
    vec3 div = vec3(0.0);
    float r = 1.0;
    vec2 angle = vec2(0.0, radius);

    amount += radius*500.0;

    for(int j = 0; j < iterations; j++) {
        r += 1.0/r;
        angle = rot*angle;

        // (r-1.0) here is the equivalent to sqrt(0, 1, 2, 3...)
        vec3 col = sample(uv+(texel*(r-1.0)*angle)).xyz;

        // ...contrast it for better highlights - leave this out elsewhere.
        col = col*col*1.5;

        vec3 blur = (pow(col, vec3(9.0))*amount)+0.4;

        acc += col*blur;
        div += blur;
    }

    return acc/div;
}

#pragma glslify: export(bokeh)
