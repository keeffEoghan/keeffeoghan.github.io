'use strict';

module.exports = {
        // The folder to which these custom dependencies will be written (where
        // an existing destination is not already defined).
        destPath: './vendor/',

        // Add any options or feature-detects to the custom Modernizr build here.
        // See node_modules/modernizr/lib/config-all.json for all settings.
        modernizrConfig: {
            'options': ['setClasses', 'prefixed'],
            'feature-detects': ['webgl'/*, 'css/columns'*/]
        }
    };