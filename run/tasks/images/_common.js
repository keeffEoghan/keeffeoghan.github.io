'use strict';

module.exports = {
    srcPaths: ['./img/**/*'],

    svgoPlugins: [
        { removeViewBox: false },
        { removeUselessStrokeAndFill: false },
        { convertPathData: { straightCurves: false } },
        { cleanupIDs: false }
    ]
};