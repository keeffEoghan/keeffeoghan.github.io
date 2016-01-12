'use strict';

/**
 * Creates any needed custom-builds of dependencies (where this is done
 * through gulp; some may also be done through the Makefile or another method).
 * This happens as a pre-build phase.
 */

var gulp = require('gulp'),
    common = require('./_common'),
    modernizr = require('modernizr'),
    stream = require('stream'),
    gutil = require('gulp-util');

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

gulp.task('custom-deps', function(done) {
        modernizr.build(common.modernizrConfig, function(result) {
            stringStream(result, 'modernizr.js').pipe(gulp.dest(common.destPath));
            done();
        });
    });
