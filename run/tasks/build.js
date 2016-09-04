'use strict';

/**
 *  Builds all necessary front-end static files. This method is primarily used
 *  during deployment.
 *
 *  Example Usage:
 *  gulp build
 */

var gulp = require('gulp');

gulp.task('build', ['html', 'assets', 'custom-deps', 'styles', 'scripts']);
