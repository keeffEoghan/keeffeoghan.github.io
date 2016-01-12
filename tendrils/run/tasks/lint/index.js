'use strict';

/**
 *  Lints chosen source files and reports any errors.
 *
 *  Example Usage:
 *  gulp lint
 *  gulp lint --filePath js/src/app.js
 */

var gulp = require('gulp'),
    args = require('yargs').argv,
    common = require('./_common'),
    jshint = require('gulp-jshint');

gulp.task('lint', function() {
    return gulp.src(common.buildSources(args.filePath))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});