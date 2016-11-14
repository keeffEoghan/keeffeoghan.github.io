uniform float start;
uniform float time;
uniform float dt;

uniform vec2 viewSize;
uniform vec2 viewRes;

uniform sampler2D past;
uniform sampler2D audio;

uniform float peak;
uniform float peakPos;
uniform float mean;

uniform float frequencies;
uniform float harmonies;
uniform float silent;
uniform float soundSmooth;
uniform float soundWarp;

uniform float noiseWarp;
uniform float noiseSpeed;
uniform float noiseScale;

uniform float falloff;
uniform float attenuate;

uniform float growLimit;
uniform float grow;
uniform float spin;

uniform float radius;
uniform float thick;

uniform float otherRadius;
uniform float otherThick;
uniform float otherEdge;

uniform float jitter;
uniform float bokehRadius;
uniform float bokehAmount;

uniform float nowAlpha;
uniform float pastAlpha;
uniform float formAlpha;
uniform float ringAlpha;

uniform vec4 ambient;
