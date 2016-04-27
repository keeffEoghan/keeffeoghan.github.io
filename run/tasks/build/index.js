'use strict';

/**
 *  Builds all necessary front-end static files and moves imagery
 *  and fonts into the distribution folder also. This method is
 *  primarily used during deployment or initial setup.
 *
 *  Example Usage:
 *  gulp build
 */

var gulp = require('gulp'),
    chalk = require('chalk'),
    globalSettings = require('../../_global'),
    scriptSettings = require('../scripts/_common'),
    styleSettings = require('../styles/_common');

gulp.task('build', ['styles', 'scripts', 'images', 'assets'], function() {
    if (scriptSettings.bundles.length === 0) {
        console.log(chalk.bgYellow.gray(' FE Skeleton: Warning - There are no script bundles defined.'));
    }

    if (styleSettings.bundles.length === 0) {
        console.log(chalk.bgYellow.gray(' FE Skeleton: Warning - There are no style bundles defined.'));
    }

    return gulp.src(['./html/**/*.html'])
                .pipe(gulp.dest(globalSettings.destPath));
});
