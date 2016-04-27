'use strict';

/**
 *  Concatenates and minifys JS source files.
 *
 *  Example Usage:
 *  gulp scripts
 */

var gulp = require('gulp'),
    args = require('yargs').argv,
    common = require('./_common'),
    chalk = require('chalk'),
    globalSettings = require('../../_global'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify');

/**
 *  Setting the production to true if launched the build task
 *  so we uglify the bundle
 */
args.production = (args._[0] === 'build' || args._[0] === 'default');

/**
 *  Overall function that will cycle through each of the browserify bundles
 *  and once they're all completed, trigger the completion of the gulp task.
 *
 *  @param {object} done - Gulp task callback method.
 */
gulp.task('scripts', function(done) {
    var promises = [];

    for(var index = 0, length = common.bundles.length; index < length; ++index) {
        var thisBundle = common.bundles[index],
            scopedProcessingMethod = _processBundle.bind(thisBundle);

        thisBundle.promise = new Promise(scopedProcessingMethod);
        promises.push(thisBundle.promise);
    }

    Promise.all(promises).then(function() {
            done();
        },
        function() {
            done('Something went wrong.');
        });
});

/**
 *  Uses Browserify API to create a node stream - this is transformed via
 *  Babelify (to transpile any ES6 syntax).
 *
 *  This is then converted into a stream that Gulp understands (via
 *  `vinyl-source-stream`).
 *
 *  This is then passed to `vinyl-buffer` where the streams contents are
 *  converted into a Buffer. The inline source map from Browserify is
 *  picked up by `gulp-sourcemaps`.
 *
 *  We then uglify the contents of the stream, via `gulp-uglify` which has
 *  `gulp-sourcemaps` support and updates the original map. The map is then
 *  saved out to the desired location and the process completes.
 *
 *  @param {function} resolve - Promise resolution callback.
 *  @param {function} reject - Promise rejection callback.
 */
function _processBundle(resolve, reject) {
    var self = this;

    // Apply particular options if global settings dictate source files should be referenced inside sourcemaps.
    var sourcemapOptions = {};
    if (globalSettings.sourcemapOptions.type === 'External_ReferencedFiles') {
        sourcemapOptions.includeContent = false;
        sourcemapOptions.sourceRoot = globalSettings.sourcemapOptions.sourceRoot;
    }

    // Creating a browserify instance / stream.
    var bundleStream = browserify({ debug: !args.production });

    // If this bundle is asking to explicitly exclude certain modules, do so.
    if (self.excludes && self.excludes.length > 0) {
        for (var j = 0, excludesLength = self.excludes.length; j < excludesLength; j++) {
            bundleStream.exclude(self.excludes[j]);
        }
    }

    // Adding source file, transforming its templates, dealing with sourcemaps, then uglifying.
    bundleStream
        .add(self.srcPath+self.fileName+'.js')
        .transform(babelify, { optional: ['es7.functionBind'] })
        .bundle()
        .on('error', function(error) {
            console.log(chalk.bgRed.white(' FE Skeleton: Browserify Failed - '+error.message));
            reject();
        })
        .pipe(source(self.fileName+common.buildFileSuffix))
        .pipe(buffer())
        .pipe(gulpif(args.production, uglify(common.uglifySettings)))
        .pipe(gulp.dest(globalSettings.destPath+common.outputFolder))
        .on('end', function() {
            console.log(chalk.bgGreen.white(' FE Skeleton: Browserify Completed - '+self.srcPath+self.fileName+'.js'));
            resolve();
        });
}
