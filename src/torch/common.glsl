// `import`able common snippet...
// @todo Tidy this up into something more readable

vec2 uv = gl_FragCoord.xy/viewRes;
vec2 pos = uvToPos(uv)/viewSize;

float dist = length(pos);
float angle = abs(mod(posToAngle(pos)+(spin*time), 1.0)/harmonies);

float frequencyOffset = 1.0/frequencies;

float soundKernel = sampleSound(audio, angle).x+
    (sampleSound(audio, angle-frequencyOffset).x*soundSmooth)+
    (sampleSound(audio, angle+frequencyOffset).x*soundSmooth);

float amp = max(abs(soundKernel/(1.0+(2.0*soundSmooth))), silent);


// The light ring

float warp = (mean*amp*soundWarp)+
    (noise(vec3(pos*(1.0+noiseScale*(0.3+peak)), time*noiseSpeed))
        *noiseWarp*(0.3+mean));

float ringSDF = clamp(abs(dist-radius-warp)-thick, 0.0, 1.0)/amp;


// Other circle

vec2 otherPos = vec2(noise(vec3(peakPos, peak+(time*noiseSpeed), mean)),
        noise(vec3(peakPos+0.972, peak+(time*noiseSpeed)+0.234, mean+0.3785)));

float otherRad = otherRadius*length(otherPos)*peakPos;

float otherSDF = clamp(abs(sdfCircle(pos, otherPos, otherRad))-
            abs(otherThick*mean),
        0.0, 1.0)/
    step(otherEdge, abs(peak));


// Other triangle


float sdf = min(ringSDF, otherSDF);

// Light attenuation
// @see Attenuation: http://gamedev.stackexchange.com/questions/56897/glsl-light-attenuation-color-and-intensity-formula
// float fade = 1.0/(1.0+(0.1*sdf)+(0.01*sdf*sdf));
// float fade = pow(clamp(1.0-(sdf/radius), 0.0, 1.0), 2.0);
// float fade = pow(clamp(1.0-sdf, 0.0, 1.0), 2.0);
float fade = 1.0/sdf/sdf;
// float fade = 1.0/sdf;


// Sound
float sound = fade;
