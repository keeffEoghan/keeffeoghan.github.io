'use strict';

var gulp = require('gulp'),
    globalSettings = require('../../_global');

gulp.task('assets', function() {
    return gulp.src(['./fonts/**/!(dir.txt)'], { base: './' })
                .pipe(gulp.dest(globalSettings.destPath));
});
