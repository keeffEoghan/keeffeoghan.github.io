'use strict';

/**
 *  Hosts the `dist` folder on a specific port.
 *
 *  Example Usage:
 *  gulp server
 */

var gulp = require('gulp'),
    chalk = require('chalk'),
    fs = require('fs'),
    serverSettings = require('../config').taskConfiguration.server,
    webserver = require('gulp-webserver');

gulp.task('server', function() {
    var distFolderExists = false;

    try {
        distFolderExists = fs.statSync(serverSettings.distFolder);
    }
    catch(e) {}

    if(!distFolderExists) {
        console.log(chalk.bgRed.white(' FE Skeleton: Cannot run server. Dist folder doesn\'t exist.'));

        return process.exit(1);
    }

    return gulp.src(serverSettings.distFolder)
            .pipe(webserver(serverSettings.webserverSettings));
});