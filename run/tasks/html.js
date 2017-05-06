'use strict';

/**
 * Moves HTML assets (maintaining folder structure) to
 * the global `destPath` directory.
 *
 * @todo Get some templating in here.
 *
 * Example Usage:
 * gulp html
 */

var gulp = require('gulp');
var chalk = require('chalk');
var rename = require('gulp-rename');

var globalSettings = require('../config');
var htmlSettings = globalSettings.taskConfiguration.html;

gulp.task('html', function() {
    return gulp.src(htmlSettings.sourcePaths)
        .pipe(rename(function(path) {
            path.basename = path.basename.replace(/\.main$/gi, '');
        }))
        .pipe(gulp.dest(htmlSettings.destPath))
        .on('finish', function() {
            console.log(chalk.bgGreen.white(' FE Skeleton: HTML assets moved.'));
        });
});
