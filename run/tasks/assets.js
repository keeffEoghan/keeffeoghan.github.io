'use strict';

var gulp = require('gulp');
var globalSettings = require('../config');

gulp.task('assets', function() {
    return gulp.src(globalSettings.taskConfiguration.assets.sourcePaths, { base: './' })
                .pipe(gulp.dest(globalSettings.destPath));
});
