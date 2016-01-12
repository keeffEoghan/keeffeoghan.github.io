'use strict';

/**
 *  Style checks chosen JS source files and reports any errors.
 *
 *  NOTE: JSCS is not a linter; it enforces coding style only and
 *  doesn't check for coding errors, abnormalities or misuse.
 *
 *  Potential Options:
 *  http://jscs.info/rules.html
 *
 *  Current options based upon airbnb:
 *  https://github.com/jscs-dev/node-jscs/blob/master/presets/airbnb.json
 *
 *  Example Usage:
 *  gulp js-style
 *  gulp js-style --filePath js/src/app.js
 */

var gulp = require('gulp'),
    args = require('yargs').argv,
    common = require('./_common'),
    jscs = require('gulp-jscs');

gulp.task('js-style', function () {
    return gulp.src(common.buildSources(args.filePath))
        .pipe(jscs());
});