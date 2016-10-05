/* global Uint8Array, Float32Array */

import 'pepjs';
import glContext from 'gl-context';
import vkey from 'vkey';
import getUserMedia from 'getusermedia';
import analyser from 'web-audio-analyser';
import soundCloud from 'soundcloud-badge';
import offset from 'mouse-event-offset';
import throttle from 'lodash/throttle';
import mapRange from 'range-fit';
import mat3 from 'gl-matrix/src/gl-matrix/mat3';
import vec2 from 'gl-matrix/src/gl-matrix/vec2';
import querystring from 'querystring';
import dat from 'dat-gui';

import redirect from '../utils/protocol-redirect';

import Timer from './timer';

import { Tendrils, defaults, glSettings } from './';


import * as spawnPixels from './spawn/pixels';
import spawnPixelsFlowFrag from './spawn/pixels/flow.frag';
import spawnPixelsSimpleFrag from './spawn/pixels/data.frag';

import spawnReset from './spawn/ball';

import FlowLine from './flow-line/';

import makeAudioData from './audio/data';
import { makeLog, makeOrderLog } from './data-log';
import { orderLogRates, peak, sum, mean, weightedMean } from './analyse';

import Sequencer from './animate';

import { curry } from '../fp/partial';
import each from '../fp/each';
import reduce from '../fp/reduce';
import { step } from '../utils';

const queries = querystring.parse(location.search.slice(1));

const defaultSettings = defaults().state;

export default (canvas, settings, debug) => {
    if(redirect()) {
        return;
    }

    const timer = new Timer();

    let tendrils;

    let flowInput;

    let trackAnalyser;
    let trackOrderLog;

    let micAnalyser;
    let micOrderLog;

    const audioDefaults = {
        trackURL: ((queries.track)?
                decodeURIComponent(queries.track)
            :   'https://soundcloud.com/max-cooper/waves-1'),

        audible: !('mute' in queries),

        track: !('track_off' in queries),
        trackBeatAt: 0.1,
        trackLoudAt: 9,

        mic: !('mic_off' in queries),
        micBeatAt: 1,
        micLoudAt: 5
    };

    let track;

    const audioState = {...audioDefaults};

    const sequencer = new Sequencer();

    sequencer.timer = new Timer(0);

    // const frames = sequencer.timeline.frames;
    //
    // sequencer.timer.end = frames[frames.length-1].time+2000;
    // sequencer.timer.loop = true;

    const gl = glContext(canvas, glSettings, () => {
            const now = Date.now();
            const dt = timer.tick(now).dt;

            if(track && track.currentTime >= 0) {
                sequencer.timer.tick(track.currentTime*1000);
                sequencer.play(sequencer.timer.time, tendrils.state);
            }

            tendrils.draw();

            gl.viewport(0, 0, ...tendrils.flow.shape);

            tendrils.flow.bind();
            Object.assign(flowInput.line.uniforms, tendrils.state);

            // @todo Kill old flow lines once empty
            flowInput
                .trimOld((1/tendrils.state.flowDecay)+100, timer.now())
                .update().draw();


            // React to sound

            let soundInput = null;

            if(audioState.track && trackAnalyser && trackOrderLog) {
                trackAnalyser.frequencies(step(trackOrderLog[0]));
                orderLogRates(trackOrderLog, dt);

                if(mean(trackOrderLog[trackOrderLog.length-1][0]) >
                        audioState.trackBeatAt) {
                    soundInput = respawnCam;
                    console.log('track beat');
                }
                else if(sum(trackOrderLog[1][0]) > audioState.trackLoudAt) {
                    soundInput = respawnFlow;
                    console.log('track volume');
                }
            }

            if(!soundInput && audioState.mic && micAnalyser && micOrderLog) {
                micAnalyser.frequencies(step(micOrderLog[0]));
                orderLogRates(micOrderLog, dt);

                const beats = micOrderLog[micOrderLog.length-1][0];

                if(weightedMean(beats, beats.length*0.2) >
                        audioState.micBeatAt) {
                    soundInput = respawnCam;
                    console.log('mic beat');
                }
                else if(peak(micOrderLog[1][0]) > audioState.micLoudAt) {
                    soundInput = respawnFlow();
                    console.log('mic volume');
                }
            }

            if(soundInput) {
                soundInput();
            }
        });

    tendrils = new Tendrils(gl, { timer });

    const resetSpawner = spawnReset(gl);

    const respawn = () => resetSpawner.respawn(tendrils);
    const restart = () => {
        tendrils.clear();
        respawn();
    };

    const state = tendrils.state;


    // Flow line

    // @todo New flow lines for new pointers
    flowInput = new FlowLine(gl);

    const pointerFlow = (e) => {
        flowInput.times.push(timer.now());

        const flow = offset(e, canvas, vec2.create());

        flow[0] = mapRange(flow[0], 0, tendrils.viewRes[0], -1, 1);
        flow[1] = mapRange(flow[1], 0, tendrils.viewRes[1], 1, -1);

        flowInput.line.path.push(flow);
    };

    canvas.addEventListener('pointermove', pointerFlow, false);


    // Feedback loop from flow
    /**
     * @todo The aspect ratio might be wrong here - always seems to converge on
     *       horizontal/vertical lines, like it were stretched.
     */

    const flowPixelSpawner = new spawnPixels.SpawnPixels(gl, {
            shader: [spawnPixels.defaults().shader[0], spawnPixelsFlowFrag],
            buffer: tendrils.flow
        });

    const flowPixelScales = {
        'normal': [1, -1],
        // This flips the lookup, which is interesting (reflection)
        'mirror x': [-1, -1],
        'mirror y': [1, 1],
        'mirror xy': [-1, 1],
    };

    const flowPixelDefaults = {
        scale: 'normal'
    };
    const flowPixelState = {...flowPixelDefaults};

    function respawnFlow() {
        vec2.div(flowPixelSpawner.spawnSize,
            flowPixelScales[flowPixelState.scale], tendrils.viewSize);

        flowPixelSpawner.respawn(tendrils);
    }


    // Spawn on fastest particles.

    const simplePixelSpawner = new spawnPixels.SpawnPixels(gl, {
            shader: [spawnPixels.defaults().shader[0], spawnPixelsSimpleFrag],
            buffer: null
        });

    function respawnFastest() {
        simplePixelSpawner.buffer = tendrils.particles.buffers[0];
        simplePixelSpawner.spawnSize = tendrils.particles.shape;
        simplePixelSpawner.respawn(tendrils);
    }


    // Cam
    /**
     * @todo Use image as color LUT values - to show the cam feed clearly at the
     *       start, then seamlessly flow into the visuals.
     */

    const camPixelSpawner = new spawnPixels.SpawnPixels(gl);

    let video = null;

    function respawnCam() {
        if(video) {
            camPixelSpawner.setPixels(video);
            camPixelSpawner.respawn(tendrils);
        }
    }

    function respawnVideo() {
        camPixelSpawner.buffer.shape = [video.videoWidth, video.videoHeight];
        mat3.scale(camPixelSpawner.spawnMatrix,
            camPixelSpawner.spawnMatrix, [-1, 1]);
    }

    getUserMedia({
            video: true,
            audio: true
        },
        (e, stream) => {
            if(e) {
                throw e;
            }
            else {
                video = document.createElement('video');

                video.muted = true;
                video.src = self.URL.createObjectURL(stream);
                video.play();
                video.addEventListener('canplay', respawnVideo);


                // Trying out audio analyser.

                micAnalyser = analyser(stream, {
                        audible: false
                    });

                micAnalyser.analyser.fftSize = Math.pow(2, 8);

                const order = 2;

                micOrderLog = makeOrderLog(order, (size) =>
                    makeLog(size, () => makeAudioData(micAnalyser,
                        ((size === order)? Uint8Array : Float32Array))));
            }
        });


    // Track setup

    const setupTrack = (src, el = document.body) => {
        track = Object.assign(new Audio(), {
                crossOrigin: 'Anonymous',
                src: src,
                controls: true
            });

        track.classList.add('track');

        // @todo Stereo: true

        trackAnalyser = analyser(track, {
                audible: audioState.audible
            });

        trackAnalyser.analyser.fftSize = Math.pow(2, 5);

        const order = 3;

        trackOrderLog = makeOrderLog(order, (size) =>
            makeLog(size, () => makeAudioData(trackAnalyser,
                ((size === order)? Uint8Array : Float32Array))));

        track.play();
        el.appendChild(track);

        return track;
    };

    if(audioState.trackURL.match(/^(https?)?(\:\/\/)?(www\.)?soundcloud\.com\//gi)) {
        soundCloud({
                client_id: '75aca2e2b815f9f5d4e92916c7b80846',
                song: audioState.trackURL,
                dark: false
            },
            (e, src, data, el) => {
                if(e) {
                    throw e;
                }
                else {
                    setupTrack(src, el.querySelector('.npm-scb-info'));
                    el.querySelector('.npm-scb-wrap').classList.add('open');
                }
            });
    }
    else {
        setupTrack(audioState.trackURL, canvas.parentElement);
    }


    function resize() {
        canvas.width = self.innerWidth;
        canvas.height = self.innerHeight;
    }

    self.addEventListener('resize', throttle(resize, 200), false);

    resize();


    tendrils.setup();
    resetSpawner.respawn(tendrils);


    // Test sequence.
    // sequencer.smoothTo({
    //         to: {
    //             ...defaultSettings,
    //             showFlow: false,
    //             noiseSpeed: 0.00001,
    //             noiseScale: 60,
    //             forceWeight: 0.014,
    //             wanderWeight: 0.0021,
    //             speedAlpha: 0.000002,
    //             color: [0, 0, 0, 0.1],
    //             baseColor: [1, 1, 1, 0.01],
    //         },
    //         time: 3000,
    //         ease: [0, 0.9, 1]
    //     })
    //     .smoothTo({
    //         to: {
    //             noiseSpeed: 0.00001,
    //             noiseScale: 18,
    //             forceWeight: 0.014,
    //             wanderWeight: 0.0021,
    //             speedAlpha: 0.000002
    //         },
    //         time: 5000,
    //         ease: [0, 0.3, 1]
    //     })
    //     .smoothTo({
    //         to: {
    //             flowDecay: 0,
    //             noiseSpeed: 0,
    //             noiseScale: 18,
    //             forceWeight: 0.015,
    //             wanderWeight: 0.0023,
    //             speedAlpha: 0.00005,
    //             lineWidth: 3
    //         },
    //         time: 9000,
    //         ease: [0, 1.1, 1]
    //     })
    //     .smoothTo({
    //         to: {
    //             flowWeight: 0,
    //             wanderWeight: 0.002,
    //             noiseSpeed: 0,
    //             noiseScale: 20,
    //             speedAlpha: 0
    //         },
    //         time: 11000,
    //         ease: [0, 0.9, 1]
    //     })
    //     .smoothTo({
    //         to: {
    //             noiseSpeed: 0.00001,
    //             noiseScale: 60,
    //             forceWeight: 0.014,
    //             wanderWeight: 0.0021,
    //             speedAlpha: 0.000002
    //         },
    //         time: 15000
    //     })
    //     .smoothTo({
    //         to: {
    //             flowDecay: defaultSettings.flowDecay,
    //             flowWeight: 1,
    //             wanderWeight: 0.002,
    //             noiseSpeed: 0,
    //             noiseScale: 2.125,
    //             speedAlpha: 0,
    //             lineWidth: 1
    //         },
    //         time: 14000,
    //         ease: [0, 0.9, 1]
    //     })
    //     .smoothTo({
    //         to: {
    //             wanderWeight: 0.002,
    //             noiseSpeed: 0,
    //             noiseScale: 2.125,
    //             speedAlpha: 0
    //         },
    //         time: 17000,
    //         ease: [0, 0.9, 1]
    //     })
    //     .smoothTo({
    //         to: {
    //             ...defaultSettings,
    //             showFlow: true,
    //             flowWidth: 5,
    //             done: restart
    //         },
    //         time: 19000,
    //         ease: [0, 0.9, 1]
    //     });


    if(debug) {
        const gui = new dat.GUI();

        gui.domElement.addEventListener('keydown', (e) => e.stopPropagation());

        gui.close();

        function updateGUI(node = gui) {
            if(node.__controllers) {
                node.__controllers.forEach((control) => control.updateDisplay());
            }

            for(let f in node.__folders) {
                updateGUI(node.__folders[f]);
            }
        }


        // Settings


        const settingsGUI = gui.addFolder('settings');

        for(let s in state) {
            if(!(typeof state[s]).match(/(object|array)/gi)) {
                const control = settingsGUI.add(state, s);

                // Some special cases

                if(s === 'rootNum') {
                    control.onFinishChange((n) => {
                        tendrils.setup(n);
                        restart();
                    });
                }
            }
        }


        // DAT.GUI's color controllers are a bit fucked.

        const colorDefaults = {
                color: state.color.slice(0, 3).map((c) => c*255),
                alpha: state.color[3],

                baseColor: state.baseColor.slice(0, 3).map((c) => c*255),
                baseAlpha: state.baseColor[3]
            };

        const colorGUI = {...colorDefaults};

        const convertColor = () => Object.assign(state, {
            color: [...colorGUI.color.map((c) => c/255), colorGUI.alpha],
            baseColor: [...colorGUI.baseColor.map((c) => c/255), colorGUI.baseAlpha]
        });

        settingsGUI.addColor(colorGUI, 'color').onChange(convertColor);
        settingsGUI.add(colorGUI, 'alpha').onChange(convertColor);

        settingsGUI.addColor(colorGUI, 'baseColor').onChange(convertColor);
        settingsGUI.add(colorGUI, 'baseAlpha').onChange(convertColor);

        convertColor();


        // Respawn

        const respawnGUI = gui.addFolder('respawn');

        for(let s in resetSpawner.uniforms) {
            if(!(typeof resetSpawner.uniforms[s]).match(/(object|array)/gi)) {
                respawnGUI.add(resetSpawner.uniforms, s);
            }
        }

        const resetSpawnerDefaults = {
            radius: 0.3,
            speed: 0.005
        };

        respawnGUI.add(flowPixelState, 'scale', Object.keys(flowPixelScales));


        // Time

        const timeGUI = gui.addFolder('time');
        const timeSettings = ['paused', 'step', 'rate', 'end', 'loop'];

        timeSettings.forEach((t) => timeGUI.add(timer, t));


        // Audio

        const audioGUI = gui.addFolder('audio');

        for(let s in audioState) {
            const control = audioGUI.add(audioState, s);

            if(s === 'trackURL') {
                control.onFinishChange((v) =>
                    location.search = querystring.encode({
                            ...queries,
                            track: encodeURIComponent(v)
                        }));
            }

            if(s === 'audible') {
                control.onChange((v) => {
                    const out = (trackAnalyser.merger || trackAnalyser.analyser);

                    if(v) {
                        out.connect(trackAnalyser.ctx.destination);
                    }
                    else {
                        out.disconnect();
                    }
                });
            }
        }


        // Controls

        const controllers = {
                clear: () => tendrils.clear(),
                clearView: () => tendrils.clearView(),
                clearFlow: () => tendrils.clearFlow(),
                respawn,
                respawnCam,
                respawnFlow,
                respawnFastest,
                reset: () => tendrils.reset(),
                restart
            };


        const controlsGUI = gui.addFolder('controls');

        for(let c in controllers) {
            controlsGUI.add(controllers, c);
        }


        // Presets

        const presetsGUI = gui.addFolder('presets');

        const presetters = {
            'Flow'() {
                Object.assign(state, {
                        showFlow: true,
                        flowWidth: 5
                    });

                Object.assign(resetSpawner.uniforms, {
                        radius: 0.25,
                        speed: 0.01
                    });

                Object.assign(colorGUI, {
                        alpha: 0.01,
                        color: [255, 255, 255]
                    });
            },
            'Wings'() {
                Object.assign(resetSpawner.uniforms, {
                        radius: 0.1,
                        speed: 0
                    });

                Object.assign(colorGUI);
            },
            'Fluid'() {
                Object.assign(state, {
                        autoClearView: true
                    });

                Object.assign(colorGUI, {
                        alpha: 0.2,
                        color: [255, 255, 255]
                    });
            },
            'Flow only'() {
                Object.assign(state, {
                        flowDecay: 0.0005,
                        forceWeight: 0.015,
                        wanderWeight: 0,
                        speedAlpha: 0
                    });

                Object.assign(resetSpawner.uniforms, {
                        radius: 0.25,
                        speed: 0.015
                    });

                Object.assign(colorGUI, {
                        alpha: 0.8,
                        color: [100, 200, 255],
                        baseAlpha: 0.1,
                        baseColor: [0, 0, 0]
                    });
            },
            'Noise only'() {
                Object.assign(state, {
                        flowWeight: 0,
                        wanderWeight: 0.002,
                        noiseSpeed: 0,
                        speedAlpha: 0
                    });

                Object.assign(colorGUI, {
                        alpha: 0.01,
                        color: [255, 150, 0]
                    });
            },
            'Sea'() {
                Object.assign(state, {
                        flowWidth: 5,
                        forceWeight: 0.015,
                        wanderWeight: 0.0014,
                        flowDecay: 0.001,
                        fadeAlpha: 10,
                        speedAlpha: 0
                    });

                Object.assign(resetSpawner.uniforms, {
                        radius: 1,
                        speed: 0
                    });

                Object.assign(colorGUI, {
                        alpha: 0.8,
                        color: [55, 155, 255]
                    });
            },
            'Ghostly'() {
                Object.assign(state, {
                        flowDecay: 0
                    });

                Object.assign(colorGUI, {
                        alpha: 0.006,
                        color: [255, 255, 255]
                    });
            },
            'Turbulence'() {
                Object.assign(state, {
                        noiseSpeed: 0.00001,
                        noiseScale: 18,
                        forceWeight: 0.014,
                        wanderWeight: 0.0021,
                        speedAlpha: 0.000002
                    });

                Object.assign(colorGUI, {
                        alpha: 0.9,
                        color: [255, 10, 10],
                        baseAlpha: 0.01,
                        baseColor: [0, 0, 0]
                    });
            },
            'Rorschach'() {
                Object.assign(state, {
                        noiseSpeed: 0.00001,
                        noiseScale: 60,
                        forceWeight: 0.014,
                        wanderWeight: 0.0021,
                        speedAlpha: 0.000002
                    });

                Object.assign(flowPixelState, {
                    scale: 'mirror xy'
                });

                Object.assign(colorGUI, {
                        alpha: 1,
                        color: [0, 0, 0],
                        baseAlpha: 0.01,
                        baseColor: [255, 255, 255]
                    });
            },
            'Roots'() {
                Object.assign(state, {
                        flowDecay: 0,
                        noiseSpeed: 0,
                        noiseScale: 18,
                        forceWeight: 0.015,
                        wanderWeight: 0.0023,
                        speedAlpha: 0.00005,
                        lineWidth: 3
                    });

                Object.assign(colorGUI, {
                        alpha: 0.03,
                        color: [50, 255, 50]
                    });
            }
        };

        const wrapPresetter = (presetter) => {
            Object.assign(state, defaultSettings);
            Object.assign(resetSpawner.uniforms, resetSpawnerDefaults);
            Object.assign(flowPixelState, flowPixelDefaults);
            Object.assign(colorGUI, colorDefaults);

            presetter();

            updateGUI();
            convertColor();
            restart();
        };

        for(let p in presetters) {
            presetters[p] = wrapPresetter.bind(null, presetters[p]);
            presetsGUI.add(presetters, p);
        }

        presetters['Rorschach']();


        // Export

        const fullState = () => ({
                state,
                respawn: {
                    ...resetSpawner.uniforms,
                    scale: flowPixelState.scale
                },
                time: reduce((acc, k) => {
                        acc[k] = timer[k];

                        return acc;
                    },
                    timeSettings, {}),
                audio: audioState
            });

        const keyframe = (to = { ...state }) => sequencer.smoothTo({
            to,
            time: sequencer.timer.time,
            ease: [0, 1, 1]
        });

        const exporters = {
            keyframe,
            showState: () =>
                self.prompt('Current state:', JSON.stringify(fullState())),
            showFrames: () =>
                self.prompt('Animation sequence:',
                    JSON.stringify(sequencer.timeline.frames))
        };

        each((f, e) => gui.add(exporters, e), exporters);


        // Keyboard mash!
        /**
         * Assign modifiers to keys:
         * - Hold down a letter key to select a setting:
         *     - Up/down key to raise/lower it a little.
         *     - Left/right key to raise/lower it a lot.
         *     - Backspace to reset it to its default.
         *     - Release it to record a frame.
         * - Spacebar for cam.
         * - Shift/ctrl/cmd for spawning.
         * - Numbers for presets.
         * - Symbols for smashing shapes/colours into the flow.
         *
         * Tween these with a default ease and duration (keyframe pair).
         * Edit the timeline for each setting, saving the settings on each
         * change into a keyframe (pair with default duration).
         *
         * @todo Playing with some functional stuff here, looks pretty mad.
         * @todo Smash in some shapes, flow inputs, colour inputs (discrete forms).
         * @todo Increment/decrement state values by various amounts.
         * @todo Use the above to play the visuals and set keyframes in real time?
         */
        (() => {
            // Quick track control

            const togglePlay = (play = track.paused) =>
                ((play)? track.play() : track.pause());

            const scrub = (by) => {
                track.currentTime += by;
                togglePlay(true);
            };


            // Minimal keyframes.

            const changed = (past, next) => reduce((diff, v, k) => {
                    let out;

                    if(v !== past[k]) {
                        out = (diff || {});
                        out[k] = v;
                    }

                    return (out || diff);
                },
                next, null);

            const keyframeEdits = (edits, past, state) => {
                const diff = changed(past, state);
                let f = null;

                if(diff) {
                    f = keyframe(diff);
                    Object.assign(past, diff);
                }

                return f;
            };


            // Invoke the functions for each setting being edited.
            const resetEach = curry(each)((x) => (x.reset && x.reset()));
            const adjustEach = curry((by, all) =>
                    each((x) => (x.adjust && x.adjust(by)), all));


            // Common case for editing a given setting.

            const copy = (into, source, key) => into[key] = source[key];
            const copier = curry(copy, copy.length+1);

            const adjust = (into, key, scale, by) => into[key] += scale*by;
            const adjuster = curry(adjust);

            const flip = (into, key) => into[key] = !into[key];
            const flipper = curry(flip, flip.length+1);


            // Shorthands

            const stateCopy = copier(state, defaultSettings);
            const stateEdit = adjuster(state);
            const stateFlip = flipper(state);

            const stateBool = (key) => ({
                reset: stateCopy(key),
                go: stateFlip(key)
            });

            const stateNum = (key, scale) => ({
                reset: stateCopy(key),
                adjust: stateEdit(key, scale)
            });


            const editing = {};
            const past = { ...state };

            /**
             * @todo Inputs for the other things in `fullState`, controls, and
             *       presets.
             */
            const editMap = {
                '<tab>': {
                    reset: () => {
                        tendrils.setup(defaultSettings.rootNum);
                        restart();
                    },
                    adjust: (by) => {
                        tendrils.setup(state.rootNum*Math.pow(2, by));
                        restart();
                    }
                },

                'P': stateBool('autoClearView'),
                'O': stateBool('showFlow'),

                'Z': stateNum('damping', 0.002),
                'X': stateNum('minSpeed', 0.0001),
                'C': stateNum('maxSpeed', 0.0001),

                'Q': stateNum('forceWeight', 0.002),
                'A': stateNum('flowWeight', 0.002),
                'W': stateNum('wanderWeight', 0.002),

                'S': stateNum('flowDecay', 0.002),
                'D': stateNum('flowWidth', 0.002),

                'E': stateNum('noiseScale', 0.002),
                'R': stateNum('noiseSpeed', 0.002),

                // 'V': stateNum('color', 0.002),
                // 'B': stateNum('baseColor', 0.002),

                'H': stateNum('fadeAlpha', 0.002),
                'G': stateNum('speedAlpha', 0.002),
                'F': stateNum('lineWidth', 0.002)
            };

            const callMap = {
                // Adjust selected
                '<up>': adjustEach(1),
                '<down>': adjustEach(-1),
                '<right>': adjustEach(5),
                '<left>': adjustEach(-5),

                // Reset selected back to defaults
                '<backspace>': resetEach,
                '<escape>': () => resetEach(editMap),

                '<space>': () => togglePlay(),
                ',': () => scrub(-2),
                '.': () => scrub(2),

                ']': keyframeEdits,
                '<enter>': (editing, past, state) => {
                    keyframeEdits(editing, past, state);
                    scrub(-2);
                }
            };


            // @todo Throttle so multiple states can go into one keyframe.
            document.body.addEventListener('keydown', (e) => {
                    const key = vkey[e.keyCode];
                    const mapped = editMap[key];

                    if(mapped && !editing[key]) {
                        editing[key] = mapped;

                        if(mapped.go) {
                            mapped.go(editing, past, state);
                        }
                    }

                    const call = callMap[key];

                    if(call) {
                        call(editing, past, state);
                    }

                    // if(key.match(/^<enter>$/)) {
                    //     exporters.showFrames();
                    // }
                    // else if(key.match(/^<escape>$/)) {
                    //     tendrils.reset();
                    // }
                    // else if(key.match(/^<space>$/)) {
                    //     respawnCam();
                    // }
                    // else if(key.match(/^<backspace>$/)) {
                    //     sequencer.timer.reset();
                    // }
                    // else if(key.match(/^[A-Z]$/)) {
                    //     respawnFlow();
                    // }
                    // else if(key.match(/^[0-9]$/)) {
                    //     respawnFastest();
                    // }
                    // else {
                    //     restart();
                    // }
                },
                false);

            document.body.addEventListener('keyup', (e) => {
                    const key = vkey[e.keyCode];
                    const mapped = editMap[key];

                    if(mapped && editing[key]) {
                        keyframeEdits(editing, past, state);
                        editing[key] = null;
                        delete editing[key];
                    }
                },
                false);
        })();
    }
};
