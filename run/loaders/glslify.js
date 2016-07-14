/**
 * Copied wholesale from `glslify-loader` - that package had a really out of
 * date version of `glslify` which was causing problems.
 */

const glslify = require('glslify');
const path = require('path');

module.exports = function(source) {
    const basedir = path.dirname(this.resourcePath);
    const callback = this.async();

    this.cacheable(true);

    glslify.bundle(source, {
            inline: true,
            basedir
        },
        (err, src, files) => {
            if(files) {
                files.forEach((file) => this.addDependency(file));
            }

            return callback(err, src);
        });
};
