'use strict';

/**
 *  Loseless optimization of PNG, JPG & SVG assets.
 *
 *  Example Usage:
 *  gulp images
 */

var gulp = require('gulp'),
    common = require('./_common'),
    globalSettings = require('../../_global'),
    imagemin = require('gulp-imagemin');

gulp.task('images', function() {
    return gulp.src(common.srcPaths, { base: './' })
        .pipe(imagemin({
            svgoPlugins: common.svgoPlugins
        }))
        .pipe(gulp.dest(globalSettings.destPath));
});