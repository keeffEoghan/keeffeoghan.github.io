'use strict';

module.exports = {

    /**
     *  Where built output (CSS, JS, HTML, fonts, images) should be stored
     *  on the filesystem. Can either be an absolute path or relative path
     *  to the location of the gulpfile.
     */
    destPath: './dist/',

    sourcemapOptions: {

        /**
         *  Sourcemaps are built externally but there is two choices. Source
         *  files can be embedded inside the map itself, or, the source files
         *  can be referenced by the map and loaded whenever you try to click
         *  line numbers in your dev tools.
         *
         *  Potential Values:
         *  'External_EmbeddedFiles'
         *  'External_ReferencedFiles'
         */
        type: 'External_ReferencedFiles',

        /**
         *  Sets the path where source files are hosted. This path is relative
         *  to the source map. If you have sources in different subpaths, an
         *  absolute path (from the domain root) pointing to the source file
         *  root is recommended.
         *
         *  NOTE: This only needs to be set for 'External_ReferencedFiles' maps.
         */
        sourceRoot: '/'

    }

};
