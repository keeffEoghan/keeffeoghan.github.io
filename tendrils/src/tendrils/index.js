/**
 * @todo Bake the noise field into a texture on every resize, if unchanging?
 */

'use strict';

import glContext from 'gl-context';
import FBO from 'gl-fbo';
import Shader from 'gl-shader';
import triangle from 'a-big-triangle';
import ndarray from 'ndarray';
import throttle from 'lodash.throttle';
import dat from 'dat-gui';
const glslify = require('glslify');

import Particles from './particles';


const defaultSettings = {
        rootNum: Math.pow(2, 10),

        paused: false,

        autoClearView: true,
        showFlow: false,

        startRadius: 0.4,
        startSpeed: 0.05,

        maxSpeed: 0.007,
        damping: 0.72,

        flowDecay: 0.001,
        flowStrength: 0.4,
        flowWidth: 3,

        noiseSpeed: 0.0005,

        flowWeight: 0.7,
        wanderWeight: 0.0002,

        fadeOpacity: 1,
        color: [1, 1, 1, 0.4],

        respawnRate: 0.001
    };

let settings = Object.assign({}, defaultSettings);


function tendrils(canvas) {
    const gl = glContext(canvas, {
                preserveDrawingBuffer: true
            },
            render);


    let flow = FBO(gl, [1, 1], { float: true });

    let buffers = [
            FBO(gl, [1, 1], { float: true }),
            FBO(gl, [1, 1], { float: true })
        ];


    const renderShader = Shader(gl, glslify('./shaders/render.vert.glsl'),
                glslify('./shaders/render.frag.glsl'));

    const flowShader = Shader(gl, glslify('./shaders/flow.vert.glsl'),
                glslify('./shaders/flow.frag.glsl'));

    const fadeShader = Shader(gl, glslify('./shaders/triangle.vert.glsl'),
                glslify('./shaders/fade.frag.glsl'));


    let shape;
    let particles;
    let spawnData;

    function setup(rootNum) {
        shape = [rootNum, rootNum];

        particles = Particles(gl, {
                shape: shape,

                // Double the rootNum of (vertical neighbour) vertices, to have
                // pairs alternating between previous and current state.
                // (Vertical neighbours, because WebGL iterates column-major.)
                geomShape: [shape[0], shape[1]*2],

                logic: glslify('./shaders/logic.frag.glsl'),
                render: renderShader
            });


        const side = Math.ceil(rootNum*settings.respawnRate);

        spawnData = ndarray(new Float32Array(rootNum*4), [side, side, 4]);
    }

    setup(settings.rootNum);


    const tempData = [];

    function spawn(data, u, v) {
        const radius = settings.startRadius;
        const speed = settings.startSpeed;

        const angle = Math.random()*Math.PI*2;
        const scaled = Math.random()*radius;

        // Position
        data[0] = Math.cos(angle)*scaled;
        data[1] = Math.sin(angle)*scaled;


        // Velocity
        // data[2] = data[0]*speed;
        // data[3] = data[1]*speed;
        data[2] = (Math.random()-0.5)*speed;
        data[3] = (Math.random()-0.5)*speed;

        return data;
    }

    function reset() {
        particles.populate(spawn);

        for(let i = 0; i < spawnData.shape[0]; ++i) {
            for(let j = 0; j < spawnData.shape[1]; ++j) {
                let spawned = spawn(tempData);

                spawnData.set(i, j, 0, spawned[0]);
                spawnData.set(i, j, 1, spawned[1]);
                spawnData.set(i, j, 2, spawned[2]);
                spawnData.set(i, j, 3, spawned[3]);
            }
        }
    }


    /**
     * Set particles at a moving offset to their spawn positions.
     * For now, this is just the center.
     */

    let respawnOffset = [0, 0];
    let spawnDataOffset = 0;

    function respawn() {
        // Step the respawn shape horizontally and vertically within the FBO
        
        const maxOffset = [
                shape[0]-spawnData.shape[0],
                shape[1]-spawnData.shape[1]
            ];

        respawnOffset[0] += spawnData.shape[0];

        if(respawnOffset[0] >= shape[0]) {
            respawnOffset[0] = 0;
            respawnOffset[1] += spawnData.shape[1];

            if(respawnOffset[1] >= shape[1]) {
                respawnOffset[1] = 0;
            }

            respawnOffset[1] = Math.min(respawnOffset[1], maxOffset[1]);
        }

        respawnOffset[0] = Math.min(respawnOffset[0], maxOffset[0]);


        // Reset this part of the FBO

        particles.buffers.forEach((buffer) =>
            buffer.color[0].setPixels(spawnData, respawnOffset));


        // Finally, change some of the spawn data values for next time too
        
        spawnDataOffset += spawnData.shape[0]*4;

        if(spawnDataOffset >= spawnData.data.length) {
            spawnDataOffset = 0;
        }

        spawnDataOffset = Math.min(spawnDataOffset,
            spawnData.data.length-(spawnData.shape[1]*4));

        for(let s = 0; s < spawnData.shape[1]; s += 4) {
            spawnData.data.set(spawn(tempData), spawnDataOffset+s);
        }
    }


    function clearView() {
        buffers.forEach((buffer) => {
            buffer.bind();
            gl.clear(gl.COLOR_BUFFER_BIT);
        });

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    function clearFlow() {
        flow.bind();
        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    function restart() {
        clearView();
        clearFlow();
        reset(settings.startRadius, settings.startSpeed);
    }


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

        if(!settings.paused) {
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
                settings));

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

        gl.lineWidth(settings.flowWidth);

        particles.draw((uniforms) => Object.assign(uniforms, draw(uniforms), {
                    time,
                    debug: false
                },
                settings),
            gl.LINES);


        // Render to the view.

        if(settings.showFlow) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);

            particles.draw((uniforms) => Object.assign(uniforms, draw(uniforms), {
                        time,
                        debug: true
                    },
                    settings),
                gl.LINES);
        }
        else {
            if(settings.fadeOpacity < 1) {
                buffers[0].bind();
            }
            else {
                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            }

            if(settings.autoClearView) {
                gl.clear(gl.COLOR_BUFFER_BIT);
            }

            if(settings.fadeOpacity < 1) {
                // Copy and fade the last view into the current view.

                fadeShader.bind();

                Object.assign(fadeShader.uniforms, {
                        opacity: settings.fadeOpacity,
                        view: buffers[1].color[0].bind(0),
                        viewSize
                    });

                triangle(gl);
            }

            particles.render = renderShader;

            gl.lineWidth(1);

            particles.draw((uniforms) => Object.assign(uniforms,
                    draw(uniforms), {
                        flow: flow.color[0].bind(2)
                    },
                    settings),
                gl.LINES);
        }


        // Copy and fade the view to the screen.

        if(settings.fadeOpacity < 1) {
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




    // DEBUG {
        let gui = new dat.GUI();

        function updateGUI() {
            for(let f in gui.__folders) {
                gui.__folders[f].__controllers.forEach((controller) =>
                        controller.updateDisplay());
            }
        }


        // Settings


        let settingsGUI = gui.addFolder('settings');


        // Generic settings; no need to do anything special here

        for(let s in settings) {
            if(!(typeof settings[s]).match(/(object|array)/gi)) {
                settingsGUI.add(settings, s);
            }
        }


        // Changing rootNum triggers a reset
        settingsGUI.__controllers[Object.keys(settings).indexOf('rootNum')]
            .onFinishChange((n) => {
                setup(n);
                restart();
            });


        // DAT.GUI's color controllers are a bit fucked.

        let colorGUI = {
                color: settings.color.slice(0, 3).map((c) => c*255),
                opacity: settings.color[3]
            };

        function convertColor() {
            settings.color = [
                    ...colorGUI.color.slice(0, 3).map((c) => c/255),
                    colorGUI.opacity
                ];
        }

        settingsGUI.addColor(colorGUI, 'color').onChange(convertColor);
        settingsGUI.add(colorGUI, 'opacity').onChange(convertColor);
        convertColor();


        // Controls

        let controllers = {
                cyclingColor: false,

                clearView,
                clearFlow,
                reset,
                restart
            };


        let controlsGUI = gui.addFolder('controls');

        for(let c in controllers) {
            controlsGUI.add(controllers, c);
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

        let presetsGUI = gui.addFolder('presets');

        let presetters = {
                '0 - Intro': () => {
                    Object.assign(settings, defaultSettings);

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
                    Object.assign(settings, defaultSettings, {
                            showFlow: true
                        });

                    controllers.cyclingColor = false;
                    updateGUI();
                },
                '2 - Fluid (kinda)': () => {
                    Object.assign(settings, defaultSettings, {
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
                    Object.assign(settings, defaultSettings, {
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
                    Object.assign(settings, defaultSettings, {
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
                    Object.assign(settings, defaultSettings, {
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
                    Object.assign(settings, defaultSettings, {
                            startRadius: 0.1,
                            startSpeed: 0.05
                        });

                    controllers.restart();

                    controllers.cyclingColor = true;

                    updateGUI();
                }
            };

        for(let p in presetters) {
            presetsGUI.add(presetters, p);
        }


        self.settings = settings;
        self.gui = gui;
    // }
    


    self.addEventListener('resize',
        throttle(resize, 100, { leading: true }), false);

    resize();

    setInterval(respawn, 100);

    restart();
}

export default tendrils;
