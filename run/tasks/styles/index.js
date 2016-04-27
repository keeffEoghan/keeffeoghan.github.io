'use strict';

/**
 *  Compiles, minifies and prefixes SASS.
 *
 *  Until Node-Sass starts using libsass 3.2 sourcemaps are fundamentally broken:
 *  https://github.com/sass/node-sass/issues/619
 *  https://github.com/sass/libsass/issues/837
 *  https://github.com/sass/libsass/pull/792
 *  https://github.com/sass/libsass/pull/910
 *
 *  libsass 3.2 progress:
 *  https://github.com/sass/libsass/milestones/3.2
 *
 *  Example Usage:
 *  gulp styles
 */

var gulp = require('gulp'),
    common = require('./_common'),
    chalk = require('chalk'),
    globalSettings = require('../../_global'),
    _ = require('underscore'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer');

/**
 *  Overall function that will cycle through each of the styles bundles
 *  and once they're all completed, trigger the completion of the gulp task.
 *
 *  @param {object} taskDone - Gulp task callback method.
 */
gulp.task('styles', function(taskDone) {
    var promises = [];

    for (var index = 0, length = common.bundles.length; index < length; index++) {
        var thisBundle = common.bundles[index],
            scopedProcessingMethod = _processBundle.bind(thisBundle);

        thisBundle.index = index;
        thisBundle.promise = new Promise(scopedProcessingMethod);
        promises.push(thisBundle.promise);
    }

    Promise.all(promises).then(
        function() {
            taskDone();
        },
        function() {
            taskDone('Something went wrong.');
        }
    );
});

/**
 *  Processes a bundle from the array and converts the SASS into
 *  CSS and prefixes as necessary. Completion of the task is
 *  signalled via resolving or rejecting the bundles deferred.
 *
 *  @param {function} resolve - Promise resolution callback.
 *  @param {function} reject - Promise rejection callback.
 *  @return null.
 */
function _processBundle(resolve, reject) {
    var self = this;

    // Generating path to source file.
    var sourcePath = self.srcPath + self.fileName + '.scss';

    // Compile SASS into CSS then prefix and save.
    var stream = gulp.src(sourcePath)
        .pipe(plumber())
        .pipe(sass(common.sassSettings))
        .pipe(prefix(common.autoPrefixSettings))
        .pipe(gulp.dest(globalSettings.destPath + common.outputFolder));

    // Whenever the stream finishes, resolve or reject the deferred accordingly.
    stream
        .on('error', function() {
            console.log(chalk.bgRed.white(' FE Skeleton: Stylesheet Failed.'));
            reject();
        })
        .on('end', function() {
            console.log(chalk.bgGreen.white(' FE Skeleton: Stylesheet Completed - ' + sourcePath));
            resolve();
        });
}
