'use strict';

const path = require('path');

// Anything that needs to be statically served.
const staticDestPath = './build/';


module.exports = {
    /**
     * Settings for sourcemaps across JS and CSS bundles.
     *
     * @type {Object}
     */
    sourcemapOptions: {
        /**
         * Sourcemaps are built externally but there is two choices.
         * Source files can be embedded inside the map itself, or,
         * the source files can be referenced by the map and loaded
         * whenever you try to click line numbers in your dev tools.
         *
         * If your source files are not being served via a web server
         * then stick to using `External_EmbeddedFiles`.
         *
         * Potential Values:
         * 'External_EmbeddedFiles'
         * 'External_ReferencedFiles'
         *
         * @type {String}
         */
        type: 'External_EmbeddedFiles',

        /**
         * Sets the root path of where source files are hosted. This
         * path is relative to the source map. If you have sources in
         * different subpaths, an absolute path (from the domain root)
         * pointing to the source file root is recommended.
         *
         * NOTE: Only needs to be set for 'External_ReferencedFiles'.
         *
         * @type {String}
         */
        sourceRoot: '/'
    },

    /**
     * Where built output (CSS, JS, HTML, fonts, images) should be
     * stored on the filesystem. Can either be an absolute path or
     * relative path to the location of the gulpfile.
     *
     * @type {String}
     */
    destPath: staticDestPath,

    /**
     * Configuration settings for any task which needs them.
     * Keys should match the task name for consistency.
     *
     * @type {Object}
     */
    taskConfiguration: {
        assets: {
            sourcePaths: [
                './fonts/**/!(dir.txt)',
                './images/**/!(dir.txt)',
                './videos/**/!(dir.txt)',
                './audio/**/!(dir.txt)'
            ]
        },
        html: {
            sourcePaths: ['./src/**/*.html'],
            destPath: staticDestPath
        },
        libs: {
            sourcePaths: ['./libs/**/*.js']
        },
        server: {
            webserverSettings: {
                host: '127.0.0.1',
                port: (process.env.PORT || 3000),
                https: false,
                open: true
            },
            distFolder: './'
        },
        styles: {
            /**
             * A folder path that is prefixed with the global `destPath` to give a
             * standard destination for CSS bundles. This can be overridden per
             * bundle if for example some bundles need to go somewhere else.
             *
             * @type {String}
             */
            destPath: staticDestPath+'css/',

            /**
             * A manifest of CSS bundles needing to be created and output
             *
             * Bundle Object Keys:
             * `sourcePaths` The path to the SCSS entry file (relative to `gulpfile.js`).
             * `outputFileName` The extensionless name of the output file.
             * `outputFolder` (Optional) - Overrides `destPath`. Is relative to `gulpfile.js`.
             * `outputFileName` (Optional) - Overrides the default renaming of the output file (usually removes any `.main` suffix)
             *
             * Example Bundles:
             * { sourcePaths: './src/homepage.scss', outputFileName: 'homepage' },
             * { sourcePaths: './src/about.scss', outputFileName: 'main', outputFolder: './modules/about-page/css/' }
             *
             * @type {Array}
             */
            bundles: [
                {
                    sourcePaths: ['./src/**/*.main.scss']
                }
            ],

            /**
             * Settings to be passed through to `gulp-sass` and `node-sass`.
             * NOTE: `compact` used instead of `compressed` to due sourcemap bug.
             *
             * @type {Object}
             */
            sassSettings: {
                outputStyle: 'compact'
            },

            /**
             * Settings to be passed through to `gulp-autoprefixer`.
             *
             * @type {Object}
             */
            autoPrefixSettings: {
                browsers: ['last 2 versions', 'iOS >= 7.1', 'Android >= 4'],
                cascade: false
            }
        },
        scripts: {
            /**
             * A folder path that prefixes the script bundle paths below.
             *
             * @type {String}
             */
            destPath: staticDestPath+'js/',

            sourcePaths: ['./src/**/*.main.js'],

            /**
             * Settings for webpacks uglify plugin.
             *
             * @type {Object}
             */
            uglifySettings: {
                compress: {
                    drop_console: false,
                    drop_debugger: false,
                    warnings: false
                }
            },

            /**
             * Base settings for webpack.
             *
             * NOTE: For a full list of options, please visit:
             * https://webpack.github.io/docs/configuration.html
             *
             * @type {Object}
             */
            webpackSettings: {
                watch: false,
                devtool: 'source-map',
                output: {
                    filename: '[name].js',
                },
                module: {
                    loaders: [
                        {
                            test: /\.js$/,
                            exclude: /node_modules/,
                            loader: 'babel?presets[]=es2015,presets[]=stage-2'
                        },
                        {
                            test: /[\\\/]modernizr\.js$/,
                            loader: 'imports?this=>window,html5=>window.html5!exports?window.Modernizr'
                        },
                        {
                            test: /\.(glsl|frag|vert)$/,
                            exclude: /node_modules/,
                            loader: 'raw!glslify'
                        }
                    ],
                    postLoaders: [
                        {
                            test: /\.(js|glsl|frag|vert)$/,
                            loader: 'ify'
                        }
                    ]
                },
                plugins: [],
                resolveLoader: {
                    alias: {
                        'glslify': path.join(__dirname, './loaders/glslify')
                    }
                },
                node: {
                    fs: 'empty'
                }
            }
        },
        watch: {
            sourcePaths: {
                html: ['./{libs,src}/**/*.html'],
                styles: ['./{libs,src}/**/*.scss'],
                scripts: ['./{libs,src}/**/*.{js,glsl,vert,frag}']
            }
        },
        customDeps: {
            // The folder to which these custom dependencies will be written
            // (where an existing destination is not already defined).
            destPath: './libs/build/',

            // Options or feature-detects for the custom Modernizr build.
            // See node_modules/modernizr/lib/config-all.json for all settings.
            modernizrConfig: {
                'options': ['setClasses', 'prefixed'],
                'feature-detects': ['webgl', 'webgl/extensions']
            },

            // Because `@import` of .css files hasn't yet landed in gulp-sass,
            // any lib files listed here will be into .scss-suffixed libs.
            copyToSCSS: [
                {
                    path: 'node_modules/reset.css/',
                    name: 'reset.css'
                }
            ]
        }
    }
};
