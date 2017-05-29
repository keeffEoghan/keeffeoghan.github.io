vec4 grayScale(vec4 color) {
	return vec4(vec3(dot(color.rgb, vec3(0.3, 0.59, 0.11))), 1.0);
}

#pragma glslify: export(grayScale)
