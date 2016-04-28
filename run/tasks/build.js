'use strict';

/**
 *  Builds all necessary front-end static files. This method is primarily used
 *  during deployment.
 *
 *  Example Usage:
 *  gulp build
 */

var gulp = require('gulp'),
    chalk = require('chalk'),
    args = require('yargs').argv,
    globalSettings = require('../config');

gulp.task('build', ['html', 'assets', 'custom-deps', 'styles', 'scripts']);
