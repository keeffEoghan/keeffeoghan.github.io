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

float noiseTime = time*noiseSpeed;


// The light ring

float warp = (mean*amp*soundWarp)+
    (noise(vec3(pos*(1.0+noiseScale*(0.3+peak)), noiseTime))
        *noiseWarp*(0.3+mean));

float ringSDF = clamp(abs(dist-radius-warp)-thick, 0.0, 1.0)/amp;


// Other circle

vec2 otherPos = vec2(noise(vec3(peakPos, peak+noiseTime, mean)),
        noise(vec3(peakPos+0.972, peak+noiseTime+0.234, mean+0.379)));

float otherRad = otherRadius*length(otherPos)*peakPos;

float otherSDF = clamp(abs(sdfCircle(pos, otherPos, otherRad))-
            abs(otherThick*mean),
        0.0, 1.0)/
    step(otherEdge, abs(peak));


// Triangle

vec3 tri1 = vec3(noise(vec3(peak+dt+0.879, peakPos-noiseTime+0.822,
            peak-peakPos+0.545)),
        noise(vec3(peak+0.882, peakPos+noiseTime+0.354,
            peak+peakPos+0.455)),
        0.0);

vec3 tri2 = vec3(noise(vec3(peak+dt+0.227, peakPos+noiseTime+0.822,
            peak+peakPos+0.092)),
        noise(vec3(peak-dt+0.192, peakPos-noiseTime+0.277,
            peak-peakPos+0.304)),
        0.0);

float triRad = mean*triangleRadius;

float triSDF = sdfTriangle(vec3(pos, 0.0), tri0, tri1*triRad,
        mix(tri1, tri2*triRad, triangleFat*(1.0-peakPos)))/
    step(triangleEdge, abs(peak));


// Closest

float sdf = min(min(ringSDF, otherSDF), triSDF);

// Light attenuation
// @see Attenuation: http://gamedev.stackexchange.com/questions/56897/glsl-light-attenuation-color-and-intensity-formula
// float fade = 1.0/(1.0+(0.1*sdf)+(0.01*sdf*sdf));
// float fade = pow(clamp(1.0-(sdf/radius), 0.0, 1.0), 2.0);
// float fade = pow(clamp(1.0-sdf, 0.0, 1.0), 2.0);
float fade = 1.0/sdf/sdf;
// float fade = 1.0/sdf;


// Sound
float sound = fade;
