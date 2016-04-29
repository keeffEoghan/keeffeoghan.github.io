'use strict';

/**
 *  Compiles, minifies and prefixes SASS.
 *
 *  Example Usage:
 *  gulp styles
 */

var gulp = require('gulp');
var chalk = require('chalk');
var globalSettings = require('../config');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

var styleSettings = globalSettings.taskConfiguration.styles;

/**
 *  Overall function that will cycle through each of the styles bundles
 *  and once they're all completed, trigger the completion of the gulp task.
 *
 *  @param {Object} taskDone - Gulp task callback method.
 */
gulp.task('styles', function(taskDone) {
    var promises = [];

    for (var index = 0, length = styleSettings.bundles.length; index < length; index++) {
        var bundle = styleSettings.bundles[index];
        var processingMethod = processBundle.bind(bundle);

        bundle.index = index;
        bundle.promise = new Promise(processingMethod);
        promises.push(bundle.promise);
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
 *  @param {Function} resolve Promise resolution callback.
 *  @param {Function} reject Promise rejection callback.
 *  @this {Object} Bound to the bundle config object.
 */
function processBundle(resolve, reject) {
    var bundle = this;

    // Apply particular options if global settings dictate source files should be referenced inside sourcemaps.
    var sourcemapOptions = {};
    if (globalSettings.sourcemapOptions.type === 'External_ReferencedFiles') {
        sourcemapOptions.includeContent = false;
        sourcemapOptions.sourceRoot = globalSettings.sourcemapOptions.sourceRoot;
    }

    // Determine the output folder. Use a specified folder if one
    // is set, else use the generic output folder.
    var outputDirectory = (bundle.outputFolder || styleSettings.destPath);


    // Compile SASS into CSS then prefix and save.
    var stream = gulp.src(bundle.sourcePaths)
        .pipe(plumber())
        .pipe(rename(function(path) {
            path.basename = (bundle.outputFileName ||
                path.basename.replace(/\.main$/gi, ''));
        }))
        .pipe(sourcemaps.init())
        .pipe(sass(styleSettings.sassSettings).on('error', sass.logError))
        .pipe(prefix(styleSettings.autoPrefixSettings))
        .pipe(sourcemaps.write('./', sourcemapOptions))
        .pipe(gulp.dest(outputDirectory));

    // Whenever the stream finishes, resolve or reject the deferred accordingly.
    stream.on('error', function() {
            console.log(chalk.bgRed.white(' FE Skeleton: Stylesheet Failed.'));
            reject();
        })
        .on('end', function() {
            console.log(chalk.bgGreen.white(' FE Skeleton: Stylesheet Completed - '+[].concat(bundle.sourcePaths).join(', ')));
            resolve();
        });
}
