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
import toSource from 'tosource';
import dat from 'dat-gui';

import redirect from '../utils/protocol-redirect';

import Timer from './timer';

import { Tendrils, defaults, glSettings } from './';

import * as spawnPixels from './spawn/pixels';
import spawnPixelsFlowFrag from './spawn/pixels/flow.frag';
import spawnPixelsSimpleFrag from './spawn/pixels/data.frag';

import spawnReset from './spawn/ball';

import AudioTrigger from './audio';
import { peak, sum, mean, weightedMean } from './analyse';

import FlowLines from './flow-line/multi';

import Sequencer from './animate';

import { curry } from '../fp/partial';
import each from '../fp/each';
import filter from '../fp/filter';

export default (canvas, settings, debug) => {
    if(redirect()) {
        return;
    }

    const queries = querystring.parse(location.search.slice(1));
    const defaultSettings = defaults();
    const defaultState = defaultSettings.state;

    const timer = defaultSettings.timer;

    let tendrils;
    let flowInputs;


    // Audio init

    const audioDefaults = {
        trackURL: ((queries.track)?
                decodeURIComponent(queries.track)
            :   'https://soundcloud.com/max-cooper/waves-1'),

        audible: (''+queries.mute !== 'true'),

        track: (''+queries.track_off !== 'true'),
        trackBeatAt: 0.1,
        trackLoudAt: 9,

        mic: (''+queries.mic_off !== 'true'),
        micBeatAt: 1,
        micLoudAt: 5
    };


    // Track and analyser init

    const track = new Audio();
    const audioState = {...audioDefaults};

    Object.assign(track, {
            crossOrigin: 'anonymous',
            controls: true,
            autoplay: true,
            className: 'track'
        });

    // @todo Stereo: true

    const trackAnalyser = analyser(track, { audible: audioState.audible });

    trackAnalyser.analyser.fftSize = Math.pow(2, 5);

    const trackTrigger = new AudioTrigger(trackAnalyser, 3);

    // Mic refs
    let micAnalyser;
    let micTrigger;


    // Audio test and react

    const audioTest = [
        (trigger) => mean(trigger.nthOrderData(-1)) > audioState.trackBeatAt,
        (trigger) => sum(trigger.nthOrderData(1)) > audioState.trackLoudAt,
        (trigger) =>
            weightedMean(trigger.nthOrderData(-1), 0.2) > audioState.micBeatAt,
        (trigger) =>
            Math.abs(peak(trigger.nthOrderData(1))) > audioState.micLoudAt
    ];

    const audioReact = [
        () => {
            respawnCam();
            console.log('track beat 0');
        },
        () => {
            respawnFlow();
            console.log('track beat 1');
        },
        () => {
            respawnCam();
            console.log('mic beat 0');
        },
        () => {
            respawnFastest();
            console.log('mic beat 1');
        }
    ];


    // Animation init

    const sequencer = new Sequencer();

    sequencer.timer = new Timer(0);


    // const frames = sequencer.timeline.frames;
    //
    // sequencer.timer.end = frames[frames.length-1].time+2000;
    // sequencer.timer.loop = true;

    const gl = glContext(canvas, glSettings, () => {
            const dt = timer.tick().dt;

            if(track && track.currentTime >= 0 && !track.paused) {
                sequencer.timer.tick(track.currentTime*1000);
                sequencer.play(sequencer.timer.time, tendrils.state);
            }

            tendrils.draw();


            // Draw inputs to flow

            gl.viewport(0, 0, ...tendrils.flow.shape);

            tendrils.flow.bind();

            flowInputs.trim(1/tendrils.state.flowDecay, timer.time);

            each((flowLine) => {
                    Object.assign(flowLine.line.uniforms, tendrils.state);
                    flowLine.update().draw();
                },
                flowInputs.active);


            // React to sound - from highest reaction to lowest

            (trackTrigger && trackTrigger.sample(dt));
            (micTrigger && micTrigger.sample(dt));

            let soundOutput = false;

            if(audioState.track && !track.paused) {
                soundOutput = ((trackTrigger.fire(audioReact[0], audioTest[0]))
                    || (trackTrigger.fire(audioReact[1], audioTest[1])));
            }

            if(!soundOutput && audioState.mic && micTrigger) {
                soundOutput = ((micTrigger.fire(audioReact[2], audioTest[2]))
                    || (micTrigger.fire(audioReact[3], audioTest[3])));
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


    // Track setup

    const setupTrack = (src, el = canvas.parentElement) => {
        if(track.src !== src) {
            track.src = src;
            track.currentTime = 0;
        }

        if(track.parentElement !== el) {
            el.appendChild(track);
        }

        return track;
    };

    const setupTrackURL = (trackURL = audioState.trackURL) => {
        const old = document.querySelector('.npm-scb-white');

        if(old) {
            old.parentElement.removeChild(old);
        }


        if(trackURL.match(/^(https?)?(\:\/\/)?(www\.)?soundcloud\.com\//gi)) {
            soundCloud({
                    client_id: '75aca2e2b815f9f5d4e92916c7b80846',
                    song: trackURL,
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
        else if(trackURL.match(/^(https)?(:\/\/)?(www\.)?dropbox\.com\/s\//gi)) {
            setupTrack(trackURL.replace(/^((https)?(:\/\/)?(www\.)?)dropbox\.com\/s\/(.*)\?dl=(0)$/gi,
                'https://dl.dropboxusercontent.com/s/$5?dl=1&raw=1'));
        }
        else {
            setupTrack(trackURL);
        }
    };

    setupTrackURL();


    // Flow inputs

    flowInputs = new FlowLines(gl);

    const pointerFlow = (e) => {
        const flow = offset(e, canvas, vec2.create());

        flow[0] = mapRange(flow[0], 0, tendrils.viewRes[0], -1, 1);
        flow[1] = mapRange(flow[1], 0, tendrils.viewRes[1], 1, -1);

        flowInputs.get(e.pointerId).add(timer.time, flow);
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
                video.addEventListener('canplay', () => {
                    camPixelSpawner.buffer.shape = [
                        video.videoWidth,
                        video.videoHeight
                    ];

                    mat3.scale(camPixelSpawner.spawnMatrix,
                        camPixelSpawner.spawnMatrix, [-1, 1]);
                });


                // Trying out audio analyser.

                micAnalyser = analyser(stream, {
                        audible: false
                    });

                micAnalyser.analyser.fftSize = Math.pow(2, 7);

                micTrigger = new AudioTrigger(micAnalyser, 2);
            }
        });


    function resize() {
        canvas.width = self.innerWidth;
        canvas.height = self.innerHeight;
    }

    self.addEventListener('resize', throttle(resize, 200), false);

    resize();


    tendrils.setup();
    resetSpawner.respawn(tendrils);


    if(debug) {
        const gui = new dat.GUI();

        gui.domElement.addEventListener('keydown', (e) => e.stopPropagation());

        function updateGUI(node = gui) {
            if(node.__controllers) {
                node.__controllers.forEach((control) => control.updateDisplay());
            }

            for(let f in node.__folders) {
                updateGUI(node.__folders[f]);
            }
        }

        function toggleGUI(open, node = gui) {
            ((open)? node.open() : node.close());

            for(let f in node.__folders) {
                toggleGUI(open, node.__folders[f]);
            }
        }


        // Import/export

        const timeSettings = ['paused', 'step', 'rate', 'end', 'loop'];

        const full = {
            get state() {
                return {
                        state,
                        respawn: resetSpawner.uniforms,
                        flow: {
                            scale: flowPixelState.scale
                        },
                        time: filter((k) => k in timer, timeSettings, {}),
                        audio: audioState
                    };
            },

            set state(fullState) {
                Object.assign(state, fullState.state);
                Object.assign(resetSpawner.uniforms, fullState.respawn);
                Object.assign(flowPixelState, fullState.flow);
                Object.assign(timer, fullState.time);
                Object.assign(audioState, fullState.audio);

                return fullState;
            }
        };

        // @todo Sequencers for full state
        const keyframe = (to = { ...state }, call = null) =>
            sequencer.smoothTo({
                to,
                call,
                time: sequencer.timer.time,
                ease: [0, 1, 1]
            });

        const exporters = {
            showLink: () => self.prompt('Link:',
                location.href.replace(location.search.slice(1), querystring.encode({
                        ...queries,
                        track: encodeURIComponent(audioState.trackURL),
                        mute: !audioState.audible,
                        track_off: !audioState.track,
                        mic_off: !audioState.mic
                    }))),
            showState: () => self.prompt('Current state:',
                toSource(full.state)),
            showSequence: () => self.prompt('Animation sequence:',
                toSource(sequencer.timeline.frames)),
            keyframe
        };

        each((f, e) => gui.add(exporters, e), exporters);


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

        const colorProxy = {...colorDefaults};

        const convertColor = () => Object.assign(state, {
            color: [...colorProxy.color.map((c) => c/255), colorProxy.alpha],
            baseColor: [...colorProxy.baseColor.map((c) => c/255), colorProxy.baseAlpha]
        });

        settingsGUI.addColor(colorProxy, 'color').onChange(convertColor);
        settingsGUI.add(colorProxy, 'alpha').onChange(convertColor);

        settingsGUI.addColor(colorProxy, 'baseColor').onChange(convertColor);
        settingsGUI.add(colorProxy, 'baseAlpha').onChange(convertColor);

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


        // Respawn

        const reflowGUI = gui.addFolder('reflow');

        reflowGUI.add(flowPixelState, 'scale', Object.keys(flowPixelScales));


        // Time

        const timeGUI = gui.addFolder('time');

        timeSettings.forEach((t) => timeGUI.add(timer, t));


        // Audio

        const audioGUI = gui.addFolder('audio');

        for(let s in audioState) {
            const control = audioGUI.add(audioState, s);

            if(s === 'trackURL') {
                control.onFinishChange(setupTrackURL);
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

                Object.assign(colorProxy, {
                        alpha: 0.01,
                        color: [255, 255, 255],
                        baseAlpha: Math.max(state.flowDecay, 0.05),
                        baseColor: [0, 0, 0]
                    });
            },
            'Wings'() {
                Object.assign(resetSpawner.uniforms, {
                        radius: 0.1,
                        speed: 0
                    });

                Object.assign(colorProxy);
            },
            'Fluid'() {
                Object.assign(state, {
                        autoClearView: true
                    });

                Object.assign(colorProxy, {
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
                        radius: 0.4,
                        speed: 0.15
                    });

                Object.assign(colorProxy, {
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

                Object.assign(colorProxy, {
                        alpha: 0.1,
                        color: [255, 150, 0],
                        baseAlpha: 0.005,
                        baseColor: [0, 0, 0]
                    });
            },
            'Sea'() {
                Object.assign(state, {
                        flowWidth: 5,
                        forceWeight: 0.013,
                        wanderWeight: 0.002,
                        flowDecay: 0.005,
                        speedAlpha: 0
                    });

                Object.assign(resetSpawner.uniforms, {
                        radius: 1.5,
                        speed: 0
                    });

                Object.assign(colorProxy, {
                        alpha: 0.1,
                        color: [55, 155, 255],
                        baseAlpha: 0.3,
                        baseColor: [0, 58, 90]
                    });
            },
            'Ghostly'() {
                Object.assign(state, {
                        flowDecay: 0
                    });

                Object.assign(colorProxy, {
                        alpha: 0.006,
                        color: [255, 255, 255]
                    });
            },
            'Turbulence'() {
                Object.assign(state, {
                        noiseSpeed: 0.00005,
                        noiseScale: 10,
                        forceWeight: 0.014,
                        wanderWeight: 0.003,
                        speedAlpha: 0.000002
                    });

                Object.assign(colorProxy, {
                        alpha: 0.8,
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

                Object.assign(colorProxy, {
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

                Object.assign(colorProxy, {
                        alpha: 0.03,
                        color: [50, 255, 50]
                    });
            }
        };

        const wrapPresetter = (presetter) => {
            Object.assign(state, defaultState);
            Object.assign(resetSpawner.uniforms, resetSpawnerDefaults);
            Object.assign(flowPixelState, flowPixelDefaults);
            Object.assign(colorProxy, colorDefaults);

            presetter();

            updateGUI();
            convertColor();
            // restart();
        };

        for(let p in presetters) {
            presetters[p] = wrapPresetter.bind(null, presetters[p]);
            presetsGUI.add(presetters, p);
        }


        // Open or close

        toggleGUI(true, gui);


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
                sequencer.timeline.seek(0);
                sequencer.timeline.seek(track.currentTime += by);
                togglePlay(true);
            };


            const keyframeCall = (...calls) => {
                keyframe(null, calls);
                each((call) => call(), calls);
            };


            // Invoke the functions for each setting being edited.
            const resetEach = (all) => {
                    each((x) => (x.reset && x.reset()), all);
                    updateGUI();
                };

            const adjustEach = curry((by, all) => {
                    each((x) => (x.adjust && x.adjust(by)), all);
                    updateGUI();
                });


            // Common case for editing a given setting.

            const copy = (into, source, key) => into[key] = source[key];
            const copier = curry(copy, copy.length+1);

            const adjust = (into, key, scale, by) => into[key] += scale*by;
            const adjuster = curry(adjust);

            const flip = (into, key) => into[key] = !into[key];
            const flipper = curry(flip, flip.length+1);


            // Shorthands

            const stateCopy = copier(state, defaultState);
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

            const stateExtend = (assign = {}) => {
                const resets = filter((v, k) => k in assign, defaultState);

                return {
                        reset: () => Object.assign(state, resets),
                        go: () => Object.assign(state, assign)
                    };
            };


            const editing = {};

            /**
             * Anything that selects and may change a part of the state.
             * @todo Inputs for the other things in full state, controls, and
             *       presets.
             */
            const editMap = {
                // Avoid using 'H'

                '`': {
                    reset: () => {
                        tendrils.setup(defaultState.rootNum);
                        restart();
                    },
                    adjust: (by) => {
                        tendrils.setup(state.rootNum*Math.pow(2, by));
                        restart();
                    }
                },

                'P': stateBool('autoClearView'),
                'O': stateBool('showFlow'),

                'Z': stateNum('damping', 0.001),
                'X': stateNum('minSpeed', 0.0001),
                'C': stateNum('maxSpeed', 0.0001),

                'Q': stateNum('forceWeight', 0.01),
                'A': stateNum('flowWeight', 0.02),
                'W': stateNum('wanderWeight', 0.0002),

                'S': stateNum('flowDecay', 0.005),
                'D': stateNum('flowWidth', 1),

                'E': stateNum('noiseScale', 1),
                'R': stateNum('noiseSpeed', 0.002),

                // 'V': stateNum('color', 0.002),
                // 'B': stateNum('baseColor', 0.002),

                'G': stateNum('speedAlpha', 0.002),
                'F': stateNum('lineWidth', 0.1),

                '0': { go: presetters['Flow'] },
                '1': { go: presetters['Wings'] },
                '2': { go: presetters['Fluid'] },
                '3': { go: presetters['Flow only'] },
                '4': { go: presetters['Noise only'] },
                '5': { go: presetters['Sea'] },
                '6': { go: presetters['Ghostly'] },
                '7': { go: presetters['Turbulence'] },
                '8': { go: presetters['Rorschach'] },
                '9': { go: presetters['Roots'] },

                // <control> is a special case for re-assigning keys, see below
                '<control>': (key, assign) =>
                    editMap[key] = { go: () => Object.assign(state, assign) }
            };

            const callMap = {
                '-': adjustEach(-0.1),
                '=': adjustEach(0.1),
                '<down>': adjustEach(-1),
                '<up>': adjustEach(1),
                '<left>': adjustEach(-5),
                '<right>': adjustEach(5),

                '<escape>': (...rest) => {
                    resetEach(editMap);
                    keyframe(...rest);
                },
                '<backspace>': resetEach,

                '<space>': () => togglePlay(),
                ',': () => scrub(-2),
                '.': () => scrub(2),

                '[': () => scrub(-2),
                ']': keyframe,
                '<enter>': (...rest) => {
                    keyframe(...rest);
                    scrub(-2);
                },

                '<shift>': () => keyframeCall(restart),
                '/': () => keyframeCall(() => tendrils.reset()),
                '\\': () => keyframeCall(respawnCam),
                "'": () => keyframeCall(respawnFlow),
                ';': () => keyframeCall(respawnFastest)
            };


            // @todo Throttle so multiple states can go into one keyframe.
            document.body.addEventListener('keydown', (e) => {
                    // Control is a special case to assign the current state to
                    // a key.
                    const remap = editing['<control>'];
                    const key = vkey[e.keyCode];
                    const mapped = editMap[key];
                    const call = callMap[key];

                    if(remap) {
                        remap(key, { ...state });
                    }
                    else if(mapped && !editing[key]) {
                        editing[key] = mapped;

                        if(mapped.go) {
                            mapped.go(editing, state);
                        }
                    }
                    else if(call) {
                        call(editing, state);
                    }

                    updateGUI();

                    if(mapped || call) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                },
                false);

            document.body.addEventListener('keyup', (e) => {
                    const key = vkey[e.keyCode];
                    const mapped = editMap[key];
                    const call = callMap[key];

                    if(mapped && editing[key]) {
                        if(key !== '<control>' && !editing['<control>']) {
                            keyframe({ ...state });
                        }

                        // @todo Needed?
                        editing[key] = null;
                        delete editing[key];
                    }

                    if(mapped || call) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                },
                false);
        })();


        presetters['Rorschach']();

        // Filler frames to reset the state on sequence start, and validate the
        // sequence.
        sequencer.smoothTo({
                to: { ...state },
                call: [restart],
                time: 1000/30
            });
    }
};
