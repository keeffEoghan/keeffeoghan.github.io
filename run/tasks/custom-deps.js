'use strict';

/**
 * Creates any needed custom-builds of dependencies (where this is done
 * through gulp; some may also be done through the Makefile or another method).
 * This happens as a pre-build phase.
 */

var gulp = require('gulp');
var globalConfig = require('../config');
var modernizr = require('modernizr');
var stream = require('stream');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var merge = require('merge-stream');
var chalk = require('chalk');

var config = globalConfig.taskConfiguration.customDeps;

// Create a stream of "fake" vinyl files.
function stringStream(string, filename) {
    var s = stream.Readable({ objectMode: true });

    s._read = function () {
        this.push(new gutil.File({
                cwd: '',
                base: '',
                path: filename,
                contents: new Buffer(string)
            }));

        this.push(null);
    }

    return s;
}

gulp.task('custom-deps', function() {
    var merged = merge();

    config.copyToSCSS.forEach(function(file) {
        var renaming = gulp.src(file.path+file.name, { base: './'+file.path })
                .pipe(rename(function(path) {
                    path.basename = '_'+path.basename;
                    path.extname = '.scss';
                }))
                .pipe(gulp.dest(config.destPath));

        merged.add(renaming);
    });

    var modernizrBuilt = new Promise(function(resolve) {
            modernizr.build(config.modernizrConfig, function(result) {
                var writing = stringStream(result, 'modernizr.js')
                        .pipe(gulp.dest(config.destPath));

                resolve(merged.add(writing));
            });
        });


    return modernizrBuilt.then(function() {
            console.log(chalk.bgGreen.white(' FE Skeleton: Custom dependencies built.'));
        });
});
