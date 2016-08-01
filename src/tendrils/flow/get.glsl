// Time/decay

vec2 get(vec3 data, float time, float decay) {
    return data.xy*max(0.0, 1.0-((time-data.z)*decay));
}

vec2 get(vec4 data, float time, float decay) {
    return get(data.xyz, time, decay);
}


// No time/decay

vec2 get(vec2 data) {
    return data.xy;
}

vec2 get(vec3 data) {
    return get(data.xy);
}

vec2 get(vec4 data) {
    return get(data.xy);
}


#pragma glslify: export(get)
