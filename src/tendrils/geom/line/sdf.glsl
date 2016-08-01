/**
 * From https://www.shadertoy.com/view/4dfXDn
 */

float line(vec2 p, vec2 start, vec2 end, float rad) {
    vec2 rel = start-p;
    vec2 dir = start-end;
    float l = length(dir);
    
    dir /= l;

    vec2 proj = clamp(dot(rel, dir), 0.0, l)*dir;

    return length(rel-proj)-rad;
}

#pragma glslify: export(line)
