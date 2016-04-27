'use strict';

module.exports = {
    srcPaths: ['./src/**/*.js'],

    /**
     *  Sets paths to be as specified else falls back to defaults.
     *
     *  @param string specifiedPath - Path of JS files relative to root.
     *  @return array
     */
    buildSources: function(specifiedPath) {
        var sourceList = [];

        if (specifiedPath) {
            sourceList.push(specifiedPath);
        } else {
            sourceList = this.srcPaths;
        }

        return sourceList;
    }
};