import 'pepjs';
import glContext from 'gl-context';
import getUserMedia from 'getusermedia';
import offset from 'mouse-event-offset';
import throttle from 'lodash/throttle';
import mapRange from 'range-fit';
import dat from 'dat-gui';
import mat3 from 'gl-matrix/src/gl-matrix/mat3';
import vec2 from 'gl-matrix/src/gl-matrix/vec2';

import * as spawnPixels from './spawn/pixels';
import spawnPixelsFlowFrag from './spawn/pixels/flow.frag';

import spawnReset from './spawn/ball';

import FlowLine from './flow-line/';

import { Tendrils, defaults, glSettings } from './';

const defaultSettings = Object.assign(defaults().state, {
        respawnAmount: 0.03,
        respawnTick: 0
    });

export default (canvas, settings, debug) => {
    let tendrils;
    let flowInput;

    // const gl = glContext(canvas, glSettings, () => tendrils.draw());
    const gl = glContext(canvas, glSettings, () => {
            tendrils.draw();

            gl.viewport(0, 0, ...tendrils.flow.shape);

            tendrils.flow.bind();
            // gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            Object.assign(flowInput.line.uniforms, tendrils.state);

            flowInput
                .trimOld((1/tendrils.state.flowDecay)+100, tendrils.getTime())
                .update().draw();
        });

    tendrils = new Tendrils(gl);

    flowInput = new FlowLine(gl);

    const pointerFlow = (e) => {
        flowInput.times.push(tendrils.getTime());

        const flow = offset(e, canvas, vec2.create());

        flow[0] = mapRange(flow[0], 0, tendrils.viewRes[0], -1, 1);
        flow[1] = mapRange(flow[1], 0, tendrils.viewRes[1], 1, -1);

        flowInput.line.path.push(flow);
    };

    canvas.addEventListener('pointermove', pointerFlow, false);

    const resetSpawner = spawnReset(gl);

    const state = tendrils.state;


    // Feedback loop from flow
    /**
     * @todo The aspect ratio might be wrong here - always seems to converge on
     *       horizontal/vertical lines, like it were stretched.
     */

    const flowPixelSpawner = new spawnPixels.SpawnPixels(gl, {
            shader: [spawnPixels.defaults().shader[0], spawnPixelsFlowFrag],
            buffer: tendrils.flow
        });

    // This flips the lookup, which is interesting (reflection)
    // const flowPixelScale = [1, 1];
    const flowPixelScale = [1, -1];

    function respawnFlowPixels() {
        vec2.div(flowPixelSpawner.spawnSize, flowPixelScale, tendrils.viewSize);
        flowPixelSpawner.respawn(tendrils);
    }


    // Cam

    const camPixelSpawner = new spawnPixels.SpawnPixels(gl);

    let video = null;

    function respawnCamPixels() {
        if(video) {
            camPixelSpawner.setPixels(video);
            camPixelSpawner.respawn(tendrils);
        }
    }

    function respawnVideo() {
        camPixelSpawner.buffer.shape = [video.videoWidth, video.videoHeight];
        mat3.scale(camPixelSpawner.spawnMatrix, camPixelSpawner.spawnMatrix, [-1, 1]);
        respawnCamPixels();
    }

    getUserMedia({
            video: true,
            // @todo Can we plug audio into an analyser node while muted?
            audio: false
        },
        (e, stream) => {
            if(e) {
                throw e;
            }
            else {
                video = document.createElement('video');

                video.src = self.URL.createObjectURL(stream);
                video.play();
                video.addEventListener('canplay', respawnVideo);
            }
        });


    function resize() {
        canvas.width = self.innerWidth;
        canvas.height = self.innerHeight;
    }

    self.addEventListener('resize', throttle(resize, 200), false);

    resize();
    tendrils.setup();
    tendrils.resetParticles();
    resetSpawner.respawn(tendrils);


    if(debug) {
        const gui = new dat.GUI();

        gui.close();

        const updateGUI = () => {
            for(let f in gui.__folders) {
                gui.__folders[f].__controllers.forEach((controller) =>
                        controller.updateDisplay());
            }
        }


        // Settings


        let settingsGUI = gui.addFolder('settings');


        // Generic settings; no need to do anything special here

        let settingsKeys = [];

        Object.assign(state, {
            respawnTick: 0
        });

        for(let s in state) {
            if(!(typeof state[s]).match(/(object|array)/gi)) {
                settingsGUI.add(state, s);
                settingsKeys.push(s);
            }
        }


        // Some special cases

        settingsGUI.__controllers[settingsKeys.indexOf('rootNum')]
            .onFinishChange((n) => {
                tendrils.setup(n);
                tendrils.restart();
            });

        settingsGUI.__controllers[settingsKeys.indexOf('respawnAmount')]
            .onFinishChange((n) => {
                tendrils.setupRespawn(state.rootNum, n);
                tendrils.setupSpawnCache();
            });

        let respawnCamInterval;

        const respawnCamSweep = (n = state.respawnTick) => {
            clearInterval(respawnCamInterval);

            if(n > 0) {
                respawnCamInterval = setInterval(respawnCamPixels, n);
            }
        };

        respawnCamSweep();


        settingsGUI.__controllers[settingsKeys.indexOf('respawnTick')]
            .onFinishChange(respawnCamSweep);


        // DAT.GUI's color controllers are a bit fucked.

        let colorGUI = {
                color: state.color.slice(0, 3).map((c) => c*255),
                opacity: state.color[3]
            };

        const convertColor = () => {
            state.color = [
                    ...colorGUI.color.slice(0, 3).map((c) => c/255),
                    colorGUI.opacity
                ];
        }

        settingsGUI.addColor(colorGUI, 'color').onChange(convertColor);
        settingsGUI.add(colorGUI, 'opacity').onChange(convertColor);
        convertColor();


        // Respawn

        let respawnGUI = gui.addFolder('respawn');

        for(let s in resetSpawner.uniforms) {
            if(!(typeof resetSpawner.uniforms[s]).match(/(object|array)/gi)) {
                respawnGUI.add(resetSpawner.uniforms, s);
            }
        }


        // Controls

        let controllers = {
                cyclingColor: false,

                clear: () => tendrils.clear(),
                clearView: () => tendrils.clearView(),
                clearFlow: () => tendrils.clearFlow(),
                respawn: () => resetSpawner.respawn(tendrils),
                respawnCamPixels,
                respawnFlowPixels,
                reset: () => tendrils.reset(),
                restart: () => {
                    tendrils.clear();
                    resetSpawner.respawn(tendrils)
                }
            };


        let controlsGUI = gui.addFolder('controls');

        for(let c in controllers) {
            controlsGUI.add(controllers, c);
        }


        const cycleColor = () => {
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

        const restartState = () => {
            controllers.restart();
            updateGUI();
            convertColor();
            respawnCamSweep();
        };

        let presetters = {
                'Default': () => {
                    Object.assign(state, defaultSettings);

                    controllers.cyclingColor = false;

                    controllers.restart();
                    updateGUI();
                    respawnCamSweep();
                },
                'Flow': () => {
                    Object.assign(state, defaultSettings, {
                            showFlow: true
                        });

                    Object.assign(resetSpawner.uniforms, {
                            radius: 0.25,
                            speed: 0.01
                        });

                    controllers.cyclingColor = false;

                    restartState();
                },
                'Fluid': () => {
                    Object.assign(state, defaultSettings, {
                            autoClearView: true,
                            showFlow: false,
                            respawnTick: 500
                        });

                    Object.assign(colorGUI, {
                            opacity: 0.2,
                            color: [255, 255, 255]
                        });

                    controllers.cyclingColor = false;

                    restartState();
                },
                'Flow only': () => {
                    Object.assign(state, defaultSettings, {
                            autoClearView: false,
                            flowDecay: 0.0005,
                            forceWeight: 0.015,
                            wanderWeight: 0,
                            speedAlpha: 0,
                            fadeAlpha: (1000/60)-0.000001,
                            respawnAmount: 0.03,
                            respawnTick: 0
                        });

                    Object.assign(resetSpawner.uniforms, {
                            radius: 0.25,
                            speed: 0.015
                        });

                    Object.assign(colorGUI, {
                            opacity: 0.8,
                            color: [100, 200, 255]
                        });

                    controllers.cyclingColor = false;

                    restartState();
                },
                'Noise only': () => {
                    Object.assign(state, defaultSettings, {
                            autoClearView: false,
                            showFlow: false,
                            flowWeight: 0,
                            wanderWeight: 0.002,
                            noiseSpeed: 0,
                            speedAlpha: 0
                        });

                    Object.assign(colorGUI, {
                            opacity: 0.01,
                            color: [255, 150, 0]
                        });

                    controllers.cyclingColor = false;

                    restartState();
                },
                'Sea': () => {
                    Object.assign(state, defaultSettings, {
                            flowWidth: 5,
                            forceWeight: 0.015,
                            wanderWeight: 0.0014,
                            flowDecay: 0.001,
                            fadeAlpha: (1000/60)-0.0001,
                            speedAlpha: 0
                        });

                    Object.assign(resetSpawner.uniforms, {
                            radius: 1,
                            speed: 0
                        });

                    Object.assign(colorGUI, {
                            opacity: 0.8,
                            color: [55, 155, 255]
                        });

                    controllers.cyclingColor = false;

                    restartState();
                },
                'Mad styles': () => {
                    Object.assign(state, defaultSettings);

                    controllers.cyclingColor = true;

                    restartState();
                },
                'Ghostly': () => {
                    Object.assign(state, defaultSettings, {
                            autoClearView: false,
                            flowDecay: 0
                        });

                    Object.assign(colorGUI, {
                            opacity: 0.006,
                            color: [255, 255, 255]
                        });

                    controllers.cyclingColor = false;

                    restartState();
                },
                'Turbulent': () => {
                    Object.assign(state, defaultSettings, {
                            autoClearView: false,
                            noiseSpeed: 0.00001,
                            noiseScale: 18,
                            forceWeight: 0.014,
                            wanderWeight: 0.0021,
                            fadeAlpha: (1000/60)-0.001,
                            speedAlpha: 0.000002
                        });

                    Object.assign(colorGUI, {
                            opacity: 0.9,
                            color: [255, 10, 10]
                        });

                    controllers.cyclingColor = false;

                    restartState();
                },
                'Roots': () => {
                    Object.assign(state, defaultSettings, {
                            autoClearView: false,
                            flowDecay: 0,
                            noiseSpeed: 0,
                            noiseScale: 18,
                            forceWeight: 0.015,
                            wanderWeight: 0.0023,
                            speedAlpha: 0.00005
                        });

                    Object.assign(colorGUI, {
                            opacity: 0.03,
                            color: [50, 255, 50]
                        });

                    controllers.cyclingColor = false;

                    restartState();
                },
                'Hairy': () => {
                    Object.assign(state, defaultSettings, {
                            autoClearView: false,
                            timeStep: 1000/60,
                            flowDecay: 0.001,
                            wanderWeight: 0.002,
                            fadeAlpha: (1000/60)-0.000001,
                            speedAlpha: 0,
                            respawnTick: 800
                        });

                    Object.assign(colorGUI, {
                            opacity: 0.9,
                            color: [255, 150, 255]
                        });

                    controllers.cyclingColor = false;

                    restartState();
                }
            };

        for(let p in presetters) {
            presetsGUI.add(presetters, p);
        }

        presetters['Flow']();
    }
};
