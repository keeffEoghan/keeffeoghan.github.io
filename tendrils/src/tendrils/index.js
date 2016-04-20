/**
 * @todo Bake the noise field into a texture on every resize, if unchanging?
 */

'use strict';

import glContext from 'gl-context';
import FBO from 'gl-fbo';
import Shader from 'gl-shader';
import triangle from 'a-big-triangle';
import throttle from 'lodash.throttle';
import dat from 'dat-gui';
const glslify = require('glslify');

import Particles from './particles';


let debug = {};

export default (canvas, numBlocks = Math.pow(2, 9)) => {
    const gl = glContext(canvas, {
                preserveDrawingBuffer: true
            },
            render);


    let flow = FBO(gl, [1, 1], { float: true });

    let buffers = [
            FBO(gl, [1, 1], { float: true }),
            FBO(gl, [1, 1], { float: true })
        ];


    const shape = [numBlocks, numBlocks];

    const particles = Particles(gl, {
            shape: shape,

            // Double the numBlocks of (vertical neighbour) vertices, to have
            // pairs alternating between previous and current state.
            // (Vertical neighbours, because WebGL iterates column-major.)
            geomShape: [shape[0], shape[1]*2],

            logic: glslify('./shaders/logic.frag.glsl'),
            vert: glslify('./shaders/render.vert.glsl'),
            frag: glslify('./shaders/render.frag.glsl')
        });

    const renderShader = particles.render;

    const flowShader = Shader(gl, glslify('./shaders/flow.vert.glsl'),
                glslify('./shaders/flow.frag.glsl'));

    const fadeShader = Shader(gl, glslify('./shaders/triangle.vert.glsl'),
                glslify('./shaders/fade.frag.glsl'));


    let tempPos = [];

    function reset(radius = numBlocks*0.005, speed = -0.005) {
        particles.populate((u, v, data) => {
            let a = Math.random()*Math.PI*2;
            let l = Math.random();

            tempPos[0] = Math.cos(a)*l;
            tempPos[1] = Math.sin(a)*l;

            // Position
            data[0] = tempPos[0]*radius;
            data[1] = tempPos[1]*radius;


            // Velocity
            data[2] = data[0]*speed;
            data[3] = data[1]*speed;
            // data[2] = (Math.random()-0.5)*speed;
            // data[3] = (Math.random()-0.5)*speed;
        });
    }

    reset(0.2, 0.01);


    const start = Date.now();
    let time = 0;

    function render() {
        const width = gl.drawingBufferWidth;
        const height = gl.drawingBufferHeight;

        let viewSize = [width, height];


        // Time

        let t0 = time;

        time = Date.now()-start;

        let dt = time-t0;


        // Physics

        if(!debug.paused) {
            // Disabling blending here is important – if it's still enabled your
            // simulation will behave differently to what you'd expect.
            gl.disable(gl.BLEND);

            particles.step((uniforms) => Object.assign(uniforms, {
                    dt,
                    time,
                    start,
                    flow: flow.color[0].bind(1),
                    viewSize
                },
                {
                    maxSpeed: 0.02,
                    damping: 0.975,
                    flowWeight: 500000,
                    wanderWeight: 0.0001,
                    noiseSpeed: 0.0001
                },
                debug));

            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        }


        // Flow FBO and view renders

        gl.viewport(0, 0, width, height);

        let draw = (uniforms) => Object.assign(uniforms, {
                previous: particles.buffers[1].color[0].bind(1),
                resolution: shape,
                viewSize
            });


        // Render to the flow FBO - after the logic render, so particles don't
        // respond to their own flow.

        flow.bind();
        particles.render = flowShader;

        gl.lineWidth(debug.flowWidth);

        particles.draw((uniforms) => Object.assign(uniforms, draw(uniforms), {
                    flowStrength: 0.5,
                    debug: false
                },
                debug),
            gl.LINES);


        // Render to the view.

        if(debug.showFlow) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);

            particles.draw((uniforms) => Object.assign(uniforms, draw(uniforms), {
                        flowStrength: 0.5,
                        debug: true
                    },
                    debug),
                gl.LINES);
        }
        else {
            if(debug.fadeOpacity < 1) {
                buffers[0].bind();
            }
            else {
                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            }

            if(debug.autoClearView) {
                gl.clear(gl.COLOR_BUFFER_BIT);
            }

            if(debug.fadeOpacity < 1) {
                // Copy and fade the last view into the current view.

                fadeShader.bind();

                Object.assign(fadeShader.uniforms, {
                        opacity: debug.fadeOpacity,
                        view: buffers[1].color[0].bind(0),
                        viewSize
                    });

                triangle(gl);
            }

            particles.render = renderShader;

            gl.lineWidth(1);

            particles.draw((uniforms) => Object.assign(uniforms, draw(uniforms), {
                        flow: flow.color[0].bind(2),
                        color: [1, 1, 1, 1]
                    },
                    debug),
                gl.LINES);
        }


        // Copy and fade the view to the screen.

        if(debug.fadeOpacity < 1) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.clear(gl.COLOR_BUFFER_BIT);

            fadeShader.bind();

            Object.assign(fadeShader.uniforms, {
                    opacity: 1,
                    view: buffers[0].color[0].bind(0),
                    viewSize
                });

            triangle(gl);


            // Swap buffers.
            stepBuffers();
        }
    }

    function stepBuffers() {
        buffers.unshift(buffers.pop());
    }

    function resize() {
        buffers[0].shape = buffers[1].shape = flow.shape = [
                canvas.width = self.innerWidth,
                canvas.height = self.innerHeight
            ];
    }

    self.addEventListener('resize',
        throttle(resize, 100, { leading: true }), false);

    resize();


    // DEBUG

    let gui = new dat.GUI();

    function updateGUI() {
        for(let f in gui.__folders) {
            gui.__folders[f].__controllers.forEach((controller) =>
                    controller.updateDisplay());
        }
    }


    // Settings

    const defaultSettings = {
            paused: false,

            autoClearView: false,
            showFlow: false,

            startRadius: 0.2,
            startSpeed: 0.01,

            maxSpeed: 0.007,
            damping: 0.7,

            flowStrength: 0.4,
            flowWidth: 3,

            flowWeight: 0.75,
            wanderWeight: 0.0001,

            noiseSpeed: 0.0002,

            fadeOpacity: 1
        };

    Object.assign(debug, defaultSettings);


    let settings = gui.addFolder('settings');

    for(let d in debug) {
        settings.add(debug, d);
    }


    // DAT.GUI's color controllers are a bit fucked.

    let colorGUI = { color: [255, 255, 255], opacity: 0.2 };

    function convertColor() {
        debug.color = [
                ...colorGUI.color.slice(0, 3).map((c) => c/255),
                colorGUI.opacity
            ];
    }

    settings.addColor(colorGUI, 'color').onChange(convertColor);
    settings.add(colorGUI, 'opacity').onChange(convertColor);
    convertColor();


    // Controls

    let controllers = {
            cyclingColor: false,

            clearView() {
                buffers.forEach((buffer) => {
                    buffer.bind();
                    gl.clear(gl.COLOR_BUFFER_BIT);
                });

                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                gl.clear(gl.COLOR_BUFFER_BIT);
            },
            clearFlow() {
                flow.bind();
                gl.clear(gl.COLOR_BUFFER_BIT);
            },
            reset,
            restart() {
                this.clearView();
                this.clearFlow();
                this.reset(debug.startRadius, debug.startSpeed);
            }
        };


    let controls = gui.addFolder('controls');

    for(let c in controllers) {
        controls.add(controllers, c);
    }


    function cycleColor() {
        if(controllers.cyclingColor) {
            Object.assign(colorGUI, {
                opacity: 0.2,
                color: [
                    Math.sin(Date.now()*0.009)*200,
                    100+Math.sin(Date.now()*0.006)*155,
                    200+Math.sin(Date.now()*0.003)*55
                ]
            });

            convertColor();
        }

        requestAnimationFrame(cycleColor);
    }

    cycleColor();


    // Presets

    let presets = gui.addFolder('presets');

    let presetters = {
            '0 - Intro': () => {
                Object.assign(debug, defaultSettings);

                controllers.restart();

                Object.assign(colorGUI, {
                        opacity: 0.2,
                        color: [255, 255, 255]
                    });

                convertColor();

                controllers.cyclingColor = false;
                updateGUI();
            },
            '1 - Flow': () => {
                Object.assign(debug, defaultSettings, {
                        showFlow: true
                    });

                controllers.cyclingColor = false;
                updateGUI();
            },
            '2 - Fluid (kinda)': () => {
                Object.assign(debug, defaultSettings, {
                        autoClearView: true,
                        showFlow: false
                    });

                controllers.restart();

                Object.assign(colorGUI, {
                        opacity: 0.8,
                        color: [255, 255, 255]
                    });

                convertColor();

                controllers.cyclingColor = false;
                updateGUI();
            },
            '3 - Flow only': () => {
                Object.assign(debug, defaultSettings, {
                        autoClearView: true,
                        showFlow: false,

                        flowWeight: 0.82,
                        wanderWeight: 0,

                        startRadius: 0.6,
                        startSpeed: -0.06
                    });

                controllers.restart();

                Object.assign(colorGUI, {
                        opacity: 0.8,
                        color: [100, 200, 255]
                    });

                convertColor();

                controllers.cyclingColor = false;
                updateGUI();
            },
            '4 - Noise only': () => {
                Object.assign(debug, defaultSettings, {
                        autoClearView: false,
                        showFlow: false,

                        flowWeight: 0,
                        wanderWeight: 0.002,

                        noiseSpeed: 0,

                        startRadius: 0.5,
                        startSpeed: 0
                    });

                controllers.restart();

                Object.assign(colorGUI, {
                        opacity: 0.1,
                        color: [255, 150, 0]
                    });

                convertColor();

                controllers.cyclingColor = false;
                updateGUI();
            },
            '5 - Styles': () => {
                Object.assign(debug, defaultSettings, {
                        startRadius: 1.77,
                        startSpeed: -0.0001,

                        fadeOpacity: 0.6
                    });

                controllers.restart();

                Object.assign(colorGUI, {
                        opacity: 0.8,
                        color: [55, 155, 255]
                    });

                convertColor();

                controllers.cyclingColor = false;
                updateGUI();
            },
            '6 - Mad styles': () => {
                Object.assign(debug, defaultSettings, {
                        startRadius: 0.1,
                        startSpeed: 0.05
                    });

                controllers.restart();

                controllers.cyclingColor = true;

                updateGUI();
            }
        };

    for(let p in presetters) {
        presets.add(presetters, p);
    }


    self.debug = debug;
    self.gui = gui;
};
