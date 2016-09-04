precision highp float;

uniform sampler2D particles;
uniform sampler2D spawnData;

uniform vec2 dataRes;

uniform vec2 spawnSize;

uniform vec2 jitter;
uniform float time;

// Over 1 favours changing to new data; under 1 favours current data.
uniform float bias;

uniform mat3 spawnMatrix;
