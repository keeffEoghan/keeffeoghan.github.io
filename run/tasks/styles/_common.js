'use strict';

module.exports = {
    /**
     *  An array of objects symbolising bundles requiring built.
     *
     *  Bundle Options:
     *  `srcPath` - Folder where source files can be found. Relative to `package.json` and `gulpfile.js`.
     *  `fileName` - File within `srcPath` which is the bundle starting point.
     *
     *  Example Bundles:
     *  { srcPath: './css/src/', fileName: 'homepage' },
     *  { srcPath: './css/src/', fileName: 'contact-us' }
     */
    bundles: [
        // Default full entry point - all other full modules/files are `@import`ed in this file.
        { srcPath: './src/', fileName: 'index' }
    ],

    // Where to place the built bundles. Is prefixed with `destPath` from global settings.
    outputFolder: './css/',

    // Settings to be passed through to gulp-sass and node-sass.
    sassSettings: {
        outputStyle: 'compressed',
        errLogToConsole: true
    },

    // Settings for AutoPrefixer.
    autoPrefixSettings: {
        browsers: ['last 2 versions', 'ios 6.1', 'android >= 4'],
        cascade: false
    }
};
