'use strict';

/**
 * @todo Modernizr and other custom-built dependencies.
 * @todo GLSLify setup (build and watch).
 */

// Adding promises to Node's global scope.
require('es6-promise').polyfill();

/**
 *  Acts as an override for module loading. Certain modules
 *  need to load modules other than themselves to function.
 */
const loadingOverrides = {
    'watch': ['assets', 'custom-deps', 'html', 'styles', 'scripts', 'watch'],
    'build': ['assets', 'custom-deps', 'html', 'styles', 'scripts', 'build'],
    'default': ['assets', 'custom-deps', 'html', 'styles', 'scripts', 'build', 'default']
};

/**
 *  Acts as a module loader to require the necessary tasks
 */
module.exports = function() {
    const args = require('yargs').argv;
    const desiredModule = (args._[0] || 'default');
    const modulesToLoad = (loadingOverrides[desiredModule] || [desiredModule]);

    modulesToLoad.forEach(function(module) {
        console.log(' FE Skeleton: Loading module - '+module);
        require('./tasks/'+module);
    });
};
