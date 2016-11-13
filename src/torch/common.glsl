// `import`able common snippet...
// @todo Tidy this up into something more readable

vec2 uv = gl_FragCoord.xy/viewRes;
vec2 pos = uvToPos(uv)/viewSize;

float dist = length(pos);
float angle = abs(mod(posToAngle(pos)+(spin*time), 1.0)/harmonies);

float amp = max(abs(sampleSound(audio, angle).x), silent);


// The light ring
float sdf = clamp(abs(dist-(radius+(soundWarp*mean*amp))-thick), 0.0, 1.0);

// Light attenuation
// @see Attenuation: http://gamedev.stackexchange.com/questions/56897/glsl-light-attenuation-color-and-intensity-formula
// float fade = 1.0/(1.0+(0.1*sdf)+(0.01*sdf*sdf));
// float fade = pow(clamp(1.0-(sdf/radius), 0.0, 1.0), 2.0);
// float fade = pow(clamp(1.0-sdf, 0.0, 1.0), 2.0);
float fade = 1.0/sdf/sdf;
// float fade = 1.0/sdf;


// Sound
float sound = fade*amp;
