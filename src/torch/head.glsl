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

uniform float triangleRadius;

uniform float jitter;
uniform float bokehRadius;
uniform float bokehAmount;

uniform float nowAlpha;
uniform float pastAlpha;
uniform float formAlpha;
uniform float ringAlpha;

uniform vec4 ambient;

/**
 * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased
 *       `require`s in `import`ed files, so we need to do it the looooooong way.
 */
// #pragma glslify: noise = require(glsl-noise/simplex/3d)
#pragma glslify: noise = require(../../node_modules/glsl-noise/simplex/3d)

#pragma glslify: uvToPos = require(../tendrils/map/uv-to-pos)

#pragma glslify: posToAngle = require(./pos-to-angle)
#pragma glslify: sampleSound = require(./sample-sound)
#pragma glslify: sdfCircle = require(./sdf/circle)
#pragma glslify: sdfTriangle = require(./sdf/triangle)
