/**
 * Copied wholesale from `glslify-loader` - that package had a really out of
 * date version of `glslify` which was causing problems.
 */

const glslify = require('glslify');
const path = require('path');
const readJSON = require('read-package-json');

let queue = [];
let config = null;

function load(source, callback) {
    const basedir = path.dirname(this.resourcePath);

    glslify.bundle(source, Object.assign({
                inline: true,
                basedir
            },
            config.glslify),
        (err, src, files) => {
            if(files) {
                files.forEach((file) => this.addDependency(file));
            }

            return callback(err, src);
        });
}

readJSON('package.json', console.warn, (e, data) => {
        if(e) {
            console.error(e);
        }
        else {
            config = data;

            while(queue.length) {
                queue.pop()();
            }
        }
    });

module.exports = function(source) {
    const callback = this.async();
    const go = load.bind(this, source, callback);

    this.cacheable(true);

    if(config) {
        go();
    }
    else {
        queue.push(go);
    }
};
