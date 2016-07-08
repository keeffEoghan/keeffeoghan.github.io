import glContext from 'gl-context';
import getUserMedia from 'getusermedia';
import throttle from 'lodash/throttle';
import dat from 'dat-gui';

import SpawnPixels from './spawn/pixels';

import { Tendrils, defaultSettings, glSettings } from './';


export default (canvas, settings, debug) => {
    let tendrils;
    const gl = glContext(canvas, glSettings,
            (...rest) => tendrils.render(...rest));

    tendrils = new Tendrils(gl, settings);

    const state = tendrils.state;

    getUserMedia((e, stream) => {
        if(e) {
            throw e;
        }
        else {
            const video = document.createElement('video');

            video.src = window.URL.createObjectURL(stream);
            video.play();

            const spawnPixels = new SpawnPixels(gl);

            setInterval(() => {
                    spawnPixels.setPixels(video);
                    spawnPixels.respawn(tendrils);
                },
                500);
        }
    });

    function resize() {
        canvas.width = self.innerWidth;
        canvas.height = self.innerHeight;
    }

    self.addEventListener('resize', throttle(resize, 200, { leading: true }),
        false);

    resize();
    tendrils.restart();


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

        let respawnInterval;

        const respawn = () => tendrils.respawn();

        const respawnSweep = (n = state.respawnTick) => {
            clearInterval(respawnInterval);

            if(n > 0) {
                respawnInterval = setInterval(respawn, n);
            }
        };

        respawnSweep();

        settingsGUI.__controllers[settingsKeys.indexOf('respawnTick')]
            .onFinishChange(respawnSweep);


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


        // Controls

        let controllers = {
                cyclingColor: false,

                clearView: () => tendrils.clearView(),
                clearFlow: () => tendrils.clearFlow(),
                respawn,
                reset: () => tendrils.reset(),
                restart: () => tendrils.restart()
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

        let presetters = {
                'Default': () => {
                    Object.assign(state, defaultSettings);

                    controllers.cyclingColor = false;
                    updateGUI();

                    tendrils.restart();
                },
                'Flow': () => {
                    Object.assign(state, defaultSettings, {
                            showFlow: true
                        });

                    controllers.cyclingColor = false;
                    updateGUI();
                },
                'Fluid (kinda)': () => {
                    Object.assign(state, defaultSettings, {
                            autoClearView: true,
                            showFlow: false,
                            respawnTick: 500
                        });

                    tendrils.restart();
                    respawnSweep();

                    Object.assign(colorGUI, {
                            opacity: 0.2,
                            color: [255, 255, 255]
                        });

                    convertColor();

                    controllers.cyclingColor = false;
                    updateGUI();
                },
                'Flow only': () => {
                    Object.assign(state, defaultSettings, {
                            autoClearView: false,
                            flowDecay: 0.004,
                            forceWeight: 0.015,
                            wanderWeight: 0,
                            startRadius: 0.6,
                            startSpeed: -0.06,
                            speedAlpha: 0,
                            fadeAlpha: (1000/60)-0.000001,
                            respawnAmount: 0.03,
                            respawnTick: 500
                        });

                    tendrils.restart();
                    respawnSweep();

                    Object.assign(colorGUI, {
                            opacity: 0.8,
                            color: [100, 200, 255]
                        });

                    convertColor();

                    controllers.cyclingColor = false;
                    updateGUI();
                },
                'Noise only': () => {
                    Object.assign(state, defaultSettings, {
                            autoClearView: false,
                            showFlow: false,
                            flowWeight: 0,
                            wanderWeight: 0.002,
                            noiseSpeed: 0,
                            startRadius: 0.5,
                            startSpeed: 0,
                            speedAlpha: 0
                        });

                    tendrils.restart();

                    Object.assign(colorGUI, {
                            opacity: 0.1,
                            color: [255, 150, 0]
                        });

                    convertColor();

                    controllers.cyclingColor = false;
                    updateGUI();
                },
                'Sea': () => {
                    Object.assign(state, defaultSettings, {
                            startRadius: 1.77,
                            startSpeed: -0.0001,
                            flowWidth: 5,
                            forceWeight: 0.015,
                            wanderWeight: 0.0014,
                            flowDecay: 0.007,
                            fadeAlpha: (1000/60)-0.0001,
                            speedAlpha: 0
                        });

                    tendrils.restart();

                    Object.assign(colorGUI, {
                            opacity: 0.8,
                            color: [55, 155, 255]
                        });

                    convertColor();

                    controllers.cyclingColor = false;
                    updateGUI();
                },
                'Mad styles': () => {
                    Object.assign(state, defaultSettings, {
                            startRadius: 0.1,
                            startSpeed: 0.05
                        });

                    tendrils.restart();
                    controllers.cyclingColor = true;
                    updateGUI();
                },
                'Ghostly': () => {
                    Object.assign(state, defaultSettings, {
                            autoClearView: false,
                            flowDecay: 0
                        });

                    tendrils.restart();

                    Object.assign(colorGUI, {
                            opacity: 0.006,
                            color: [255, 255, 255]
                        });

                    convertColor();

                    controllers.cyclingColor = false;
                    updateGUI();
                },
                'Turbulent': () => {
                    Object.assign(state, defaultSettings, {
                            autoClearView: false,
                            startRadius: 0.1,
                            startSpeed: 0,
                            noiseSpeed: 0.00001,
                            noiseScale: 18,
                            forceWeight: 0.014,
                            wanderWeight: 0.0021,
                            fadeAlpha: (1000/60)-0.001,
                            speedAlpha: 0.000002
                        });

                    tendrils.restart();

                    Object.assign(colorGUI, {
                            opacity: 0.9,
                            color: [255, 10, 10]
                        });

                    convertColor();

                    controllers.cyclingColor = false;
                    updateGUI();
                },
                'Roots': () => {
                    Object.assign(state, defaultSettings, {
                            autoClearView: false,
                            startRadius: 0.1,
                            startSpeed: 0,
                            flowDecay: 0,
                            noiseSpeed: 0,
                            noiseScale: 18,
                            forceWeight: 0.015,
                            wanderWeight: 0.0023,
                            speedAlpha: 0.00005
                        });

                    tendrils.restart();

                    Object.assign(colorGUI, {
                            opacity: 0.03,
                            color: [50, 255, 50]
                        });

                    convertColor();

                    controllers.cyclingColor = false;
                    updateGUI();
                },
                'Hairy': () => {
                    Object.assign(state, defaultSettings, {
                            autoClearView: false,
                            timeStep: 1000/60,
                            startRadius: 0.1,
                            startSpeed: 0.01,
                            flowDecay: 0.001,
                            wanderWeight: 0.002,
                            fadeAlpha: (1000/60)-0.000001,
                            speedAlpha: 0,
                            respawnTick: 300
                        });

                    tendrils.restart();
                    respawnSweep();

                    Object.assign(colorGUI, {
                            opacity: 0.9,
                            color: [255, 150, 255]
                        });

                    convertColor();

                    controllers.cyclingColor = false;
                    updateGUI();
                }
            };

        for(let p in presetters) {
            presetsGUI.add(presetters, p);
        }
    }
};
