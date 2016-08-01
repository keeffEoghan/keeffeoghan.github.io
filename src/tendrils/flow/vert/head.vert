precision highp float;

uniform sampler2D previous;
uniform sampler2D data;

uniform vec2 dataRes;

uniform vec2 viewSize;

uniform float time;
uniform float maxSpeed;
uniform float flowDecay;

attribute vec2 uv;

varying vec4 color;
