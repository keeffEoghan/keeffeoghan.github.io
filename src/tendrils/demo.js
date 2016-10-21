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
import toSource from 'to-source';
import shader from 'gl-shader';
import prefixes from 'prefixes';
import dat from 'dat-gui';

import redirect from '../utils/protocol-redirect';

import Timer from './timer';

import { Tendrils, defaults, glSettings } from './';

import * as spawnPixels from './spawn/pixels';
import pixelsFrag from './spawn/pixels/index.frag';
import bestSampleFrag from './spawn/pixels/best-sample.frag';
import flowSampleFrag from './spawn/pixels/flow-sample.frag';
import dataSampleFrag from './spawn/pixels/data-sample.frag';

import spawnReset from './spawn/ball';
import GeometrySpawner from './spawn/geometry';

import AudioTrigger from './audio';
import { peak, sum, mean, weightedMean } from './analyse';

import FlowLines from './flow-line/multi';

import Sequencer from './animate';

import { curry } from '../fp/partial';
import reduce from '../fp/reduce';
import each from '../fp/each';
import filter from '../fp/filter';

toSource.defaultFnFormatter = (depth, f) => f.name;
// toSource.defaultFnFormatter = toSource.simpleFnFormatter;

export default (canvas, settings, debug) => {
    if(redirect()) {
        return;
    }

    const queries = querystring.parse(location.search.slice(1));
    const defaultSettings = defaults();
    const defaultState = defaultSettings.state;


    // Main init

    const gl = glContext(canvas, glSettings, render);

    const timer = defaultSettings.timer;


    // Tendrils init

    const tendrils = new Tendrils(gl, { timer });

    const resetSpawner = spawnReset(gl);


    // Some convenient shorthands

    const respawn = () => resetSpawner.spawn(tendrils);
    const reset = () => tendrils.reset();
    const restart = () => {
        tendrils.clear();
        respawn();
    };
    const clear = () => tendrils.clear();
    const clearView = () => tendrils.clearView();
    const clearFlow = () => tendrils.clearFlow();

    const colorMaps = { main: tendrils.state.colorMap };

    const state = tendrils.state;


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


    // Animation init

    const sequencer = new Sequencer();

    sequencer.timer = new Timer(0);


    // const frames = sequencer.timeline.frames;
    //
    // sequencer.timer.end = frames[frames.length-1].time+2000;
    // sequencer.timer.loop = true;


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

    const flowInputs = new FlowLines(gl);

    const pointerFlow = (e) => {
        const flow = offset(e, canvas, vec2.create());

        flow[0] = mapRange(flow[0], 0, tendrils.viewRes[0], -1, 1);
        flow[1] = mapRange(flow[1], 0, tendrils.viewRes[1], 1, -1);

        flowInputs.get(e.pointerId).add(timer.time, flow);
    };

    canvas.addEventListener('pointermove', pointerFlow, false);


    // Spwan feedback loop from flow
    /**
     * @todo The aspect ratio might be wrong here - always seems to converge on
     *       horizontal/vertical lines, like it were stretched.
     */

    const flowPixelSpawner = new spawnPixels.PixelSpawner(gl, {
            shader: [spawnPixels.defaults().shader[0], flowSampleFrag],
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

    function spawnFlow() {
        vec2.div(flowPixelSpawner.spawnSize,
            flowPixelScales[flowPixelState.scale], tendrils.viewSize);

        flowPixelSpawner.spawn(tendrils);
    }


    // Spawn on fastest particles.

    const simplePixelSpawner = new spawnPixels.PixelSpawner(gl, {
            shader: [spawnPixels.defaults().shader[0], dataSampleFrag],
            buffer: null
        });

    function spawnFastest() {
        simplePixelSpawner.buffer = tendrils.particles.buffers[0];
        simplePixelSpawner.spawnSize = tendrils.particles.shape;
        simplePixelSpawner.spawn(tendrils);
    }


    // Cam and mic

    let video = null;
    let mediaStream = null;

    const camShaders = {
        direct: shader(gl, spawnPixels.defaults().shader[0], pixelsFrag),
        sample: shader(gl, spawnPixels.defaults().shader[0], bestSampleFrag)
    };

    const camSpawner = new spawnPixels.PixelSpawner(gl, { shader: null });

    colorMaps.cam = camSpawner.buffer;

    const spawnDirectCam = () => {
        if(video) {
            tendrils.state.colorMap = colorMaps.cam;
            camSpawner.shader = camShaders.direct;
            camSpawner.speed = 0.3;
            camSpawner.setPixels(video);
            camSpawner.spawn(tendrils);
        }
    };

    const spawnCam = () => {
        if(video) {
            tendrils.state.colorMap = colorMaps.main;
            camSpawner.shader = camShaders.sample;
            camSpawner.speed = 1;
            camSpawner.setPixels(video);
            camSpawner.spawn(tendrils);
        }
    };


    getUserMedia({
            video: true,
            audio: true
        },
        (e, stream) => {
            if(e) {
                throw e;
            }
            else {
                mediaStream = stream;

                video = document.createElement('video');

                video.muted = true;
                video.src = self.URL.createObjectURL(stream);
                video.play();
                video.addEventListener('canplay', () => {
                        camSpawner.buffer.shape = [
                            video.videoWidth,
                            video.videoHeight
                        ];

                        mat3.scale(camSpawner.spawnMatrix,
                            mat3.identity(camSpawner.spawnMatrix), [-1, 1]);
                    });


                // Trying out audio analyser.

                micAnalyser = analyser(stream, { audible: false });
                micAnalyser.analyser.fftSize = Math.pow(2, 7);

                micTrigger = new AudioTrigger(micAnalyser, 2);
            }
        });

    const stopUserMedia = (stream = mediaStream) =>
        (stream && each((track) => track.stop(), stream.getTracks()));


    // Respawn from geometry (platonic forms)

    const geometrySpawner = new GeometrySpawner(gl, {
            speed: 0.005,
            bias: 100/0.005
        });

    const spawnForm = () => geometrySpawner.shuffle().spawn(tendrils);


    // Go

    function resize() {
        canvas.width = self.innerWidth;
        canvas.height = self.innerHeight;
    }

    self.addEventListener('resize', throttle(resize, 200), false);

    resize();


    tendrils.setup();
    resetSpawner.spawn(tendrils);


    // Starting state

    Object.assign(state, {
            noiseSpeed: 0.00001,
            noiseScale: 100,
            forceWeight: 0.014,
            wanderWeight: 0.0021,
            speedAlpha: 0.000002,
            colorMapAlpha: 0.2,
            baseColor: [0, 0, 0, 0.9],
            flowColor: [1, 1, 1, 0.05],
            fadeColor: [1, 1, 1, 0.05]
        });

    Object.assign(flowPixelState, {
        scale: 'mirror xy'
    });

    Object.assign(resetSpawner.uniforms, {
            radius: (1/Math.max(...tendrils.viewSize))+0.1,
            speed: 0
        });

    respawn();


    // Audio `react` and `test` function pairs - for `AudioTrigger.fire`

    const audioFire = {
        form: [
            spawnForm,
            (trigger) => mean(trigger.dataOrder(-1)) > audioState.trackBeatAt
        ],
        flow: [
            spawnFlow,
            (trigger) => sum(trigger.dataOrder(1)) > audioState.trackLoudAt
        ],
        cam: [
            spawnCam,
            (trigger) =>
                weightedMean(trigger.dataOrder(-1), 0.2) > audioState.micBeatAt
        ],
        fast: [
            spawnFastest,
            (trigger) =>
                Math.abs(peak(trigger.dataOrder(1))) > audioState.micLoudAt
        ]
    };


    // Flattened full state (for tweening on one sequencer)

    const rekey = (any, prefix, out = {}) =>
        reduce((out, v, k) => {
                out[prefix+k] = v;

                return out;
            },
            any, out);

    const dekey = (any, prefix, out = {}) =>
        reduce((out, v, k) => {
                out[k.replace(prefix)] = v;

                return out;
            },
            any, out);

    const timeSettings = ['paused', 'step', 'rate', 'end', 'loop'];

    const full = {
        get state() {
            return {
                    ...rekey(state, 'state.'),
                    ...rekey(resetSpawner.uniforms, 'respawn.'),
                    ['flow.scale']: flowPixelState.scale,

                    ...reduce((filtered, v, k) => {
                            if(k in timeSettings) {
                                filtered['time.'+k] = v;
                            }

                            return filtered;
                        },
                        timer, {}),

                    ...rekey(audioState, 'audio.')
                };
        },

        set state(fullState) {
            dekey(fullState.state, 'state.', state);
            dekey(fullState.respawn, 'respawn.', resetSpawner.uniforms);
            dekey(fullState.flow, 'flow.', flowPixelState);
            dekey(fullState.time, 'timer.', timer);
            dekey(fullState.audio, 'audio.', audioState);

            return fullState;
        }
    };


    // @todo Test sequence - move to own file?
    sequencer
        .smoothTo({
            to: {
                ...state,
                colorMapAlpha: 0.4,
                baseColor: [1, 1, 1, 0.5],
                flowColor: [1, 1, 1, 0.6],
                fadeColor: [0, 0, 0, 0.1]
            },
            call: [reset],
            time: 50
        })
        .to({
            to: {
                speedLimit: 0.0001,
                wanderWeight: 0
            },
            call: [respawn],
            time: 120
        })
        .smoothTo({
            to: {
                speedLimit: 0.0003,
                wanderWeight: 0.0021,
                colorMapAlpha: 0.2,
                baseColor: [0, 0, 0, 0.9],
                flowColor: [1, 1, 1, 0.05],
                fadeColor: [1, 1, 1, 0.05]
            },
            time: 6000,
            ease: [0, 0.95, 1]
        })
        .smoothTo({
            to: {
                speedLimit: 0.01
            },
            time: 9000,
            ease: [0, 0.95, 1]
        })
        .smoothTo({
            to: {
                noiseScale: 60
            },
            time: 12000,
            ease: [0, 0.95, 1]
        })
        .smoothTo({
            to: {
                noiseScale: 10
            },
            time: 15500,
            ease: [0, 0.95, 1]
        })
        .to({ time: 20000 })
        .smoothTo({
            to: {
                noiseScale: 2.125
            },
            time: 25000,
            ease: [0, 0.95, 1]
        })
        .to({
            call: [spawnCam],
            time: 52748
        })
        //...
            .to({
                call: [spawnCam],
                time: 52895
            })
            .to({
                call: [spawnCam],
                time: 52900
            })
        .smoothTo({
            to: {
                noiseScale: 1.8,
                colorMapAlpha: 0.6
            },
            time: 52900,
            ease: [0, 0.95, 1]
        })
        .to({
            call: [spawnDirectCam],
            time: 52980
        })
        //...
            .to({
                call: [spawnDirectCam],
                time: 53313
            })
            .to({
                call: [spawnDirectCam],
                time: 53447
            })
            .to({
                call: [spawnDirectCam],
                time: 53598
            })
        // @todo Bassy audio response with cam until 1:40?
        .smoothTo({
            to: {
                wanderWeight: 0.0021,
                noiseScale: 1.5,
                noiseSpeed: 0.0002,
                colorMapAlpha: 0.6
            },
            time: 25000,
            ease: [0, 0.95, 1]
        })
        // @todo Middle bit!
        // Outro (artefact)
        .to({
            call: [respawn],
            time: 213000
        })
        .smoothTo({
            to: {
                noiseScale: 1.8,
                noiseSpeed: 0.0002,
                speedAlpha: 0.000002
            },
            time: 215000,
            ease: [0, 0.95, 1]
        })
        .to({
            call: [respawn],
            time: 216500
        })
        .smoothTo({
            to: {
                forceWeight: 0.017,
                flowWeight: 0.1,
                wanderWeight: 0.002,
                noiseScale: 2.125,
                noiseSpeed: 0.00001,
                speedAlpha: 0.0000005,
                colorMapAlpha: 0.4,
                baseColor: [1, 0.69, 0.255, 0.1],
                flowColor: [1, 0.69, 0.255, 0.3],
                fadeColor: [0, 0, 0, 0.1]
            },
            time: 217000,
            ease: [0, 0.95, 1]
        })
        .to({
            call: [respawn],
            time: 224000
        })
        .to({
            call: [respawn],
            time: 225500
        })
        .to({
            call: [spawnCam],
            time: 226000
        })
        //...
            .to({
                call: [spawnCam],
                time: 228000
            })
        .to({
            call: [spawnDirectCam],
            time: 228500
        })
        //...
            .to({
                call: [spawnDirectCam],
                time: 228700
            })
            .to({
                call: [spawnDirectCam],
                time: 228850
            })
            .to({
                call: [spawnDirectCam],
                time: 228950
            })
            .to({
                call: [spawnDirectCam],
                time: 229000
            });



    // The main loop
    function render() {
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
            soundOutput = ((trackTrigger.fire(...audioFire.form))
                || (trackTrigger.fire(...audioFire.flow)));
        }

        if(!soundOutput && audioState.mic && micTrigger) {
            soundOutput = ((micTrigger.fire(...audioFire.cam))
                || (micTrigger.fire(...audioFire.fast)));
        }
    }


    if(debug) {
        const gui = {
            main: new dat.GUI()
        };

        const preventKeyClash = (e) => e.stopPropagation();

        gui.main.domElement.addEventListener('keydown', preventKeyClash);
        gui.main.domElement.addEventListener('keyup', preventKeyClash);

        function updateGUI(node = gui.main) {
            if(node.__controllers) {
                node.__controllers.forEach((control) => control.updateDisplay());
            }

            for(let f in node.__folders) {
                updateGUI(node.__folders[f]);
            }
        }

        function toggleGUI(open, node = gui.main) {
            ((open)? node.open() : node.close());

            for(let f in node.__folders) {
                toggleGUI(open, node.__folders[f]);
            }
        }


        // Import/export

        // @todo Sequencers for full state
        const keyframe = (to = { ...state }, call = null) =>
            sequencer.smoothTo({
                to,
                call,
                time: sequencer.timer.time,
                ease: [0, 0.95, 1]
            });

        const showExport = ((queries.consoleShow)?
                (...rest) => self.promt(...rest)
            :   (...rest) => console.log(...rest));

        const exporters = {};

        const requestFullscreen = prefixes('requestFullscreen', canvas).name;
        // Needs to be called this way because calling the below is an Illegal
        // Invocation
        // const fullscreen = prefixes('requestFullscreen', canvas);

        if(requestFullscreen) {
            exporters.fullScreen = () => canvas[requestFullscreen]();
        }

        Object.assign(exporters, {
                showLink: () => showExport('Link:',
                    location.href.replace(location.search.slice(1), querystring.encode({
                            ...queries,
                            track: encodeURIComponent(audioState.trackURL),
                            mute: !audioState.audible,
                            track_off: !audioState.track,
                            mic_off: !audioState.mic
                        }))),
                showState: () => showExport('Current state:',
                    toSource(full.state)),
                showSequence: () => showExport('Animation sequence:',
                    toSource(sequencer.timeline.frames)),
                keyframe
            });

        each((f, e) => gui.main.add(exporters, e), exporters);


        // Settings


        gui.settings = gui.main.addFolder('settings');

        for(let s in state) {
            if(!(typeof state[s]).match(/^(object|array|undefined|null)$/gi)) {
                const control = gui.settings.add(state, s);

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
                baseColor: defaultState.baseColor.slice(0, 3).map((c) => c*255),
                baseAlpha: defaultState.baseColor[3],

                flowColor: defaultState.flowColor.slice(0, 3).map((c) => c*255),
                flowAlpha: defaultState.flowColor[3],

                fadeColor: defaultState.fadeColor.slice(0, 3).map((c) => c*255),
                fadeAlpha: defaultState.fadeColor[3]
            };

        const colorProxy = {...colorDefaults};

        const convertColors = () => Object.assign(state, {
            baseColor: [
                ...colorProxy.baseColor.map((c) => c/255),
                colorProxy.baseAlpha
            ],
            flowColor: [
                ...colorProxy.flowColor.map((c) => c/255),
                colorProxy.flowAlpha
            ],
            fadeColor: [
                ...colorProxy.fadeColor.map((c) => c/255),
                colorProxy.fadeAlpha
            ]
        });

        gui.settings.addColor(colorProxy, 'flowColor').onChange(convertColors);
        gui.settings.add(colorProxy, 'flowAlpha').onChange(convertColors);

        gui.settings.addColor(colorProxy, 'baseColor').onChange(convertColors);
        gui.settings.add(colorProxy, 'baseAlpha').onChange(convertColors);

        gui.settings.addColor(colorProxy, 'fadeColor').onChange(convertColors);
        gui.settings.add(colorProxy, 'fadeAlpha').onChange(convertColors);

        convertColors();


        // Respawn

        gui.spawn = gui.main.addFolder('spawn');

        for(let s in resetSpawner.uniforms) {
            if(!(typeof resetSpawner.uniforms[s])
                    .match(/^(object|array|undefined|null)$/gi)) {
                gui.spawn.add(resetSpawner.uniforms, s);
            }
        }

        const resetSpawnerDefaults = {
            radius: 0.3,
            speed: 0.005
        };


        // Respawn

        gui.reflow = gui.main.addFolder('reflow');

        gui.reflow.add(flowPixelState, 'scale', Object.keys(flowPixelScales));


        // Time

        gui.time = gui.main.addFolder('time');

        timeSettings.forEach((t) => gui.time.add(timer, t));


        // Audio

        gui.audio = gui.main.addFolder('audio');

        for(let s in audioState) {
            const control = gui.audio.add(audioState, s);

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
                clear,
                clearView,
                clearFlow,
                respawn,
                spawnCam,
                spawnDirectCam,
                spawnFlow,
                spawnFastest,
                spawnForm,
                reset,
                restart
            };


        gui.controls = gui.main.addFolder('controls');

        for(let c in controllers) {
            gui.controls.add(controllers, c);
        }


        // Presets

        gui.presets = gui.main.addFolder('presets');

        const presetters = {
            'Flow'() {
                Object.assign(state, {
                        flowWidth: 5,
                        colorMapAlpha: 0
                    });

                Object.assign(resetSpawner.uniforms, {
                        radius: 0.25,
                        speed: 0.01
                    });

                Object.assign(colorProxy, {
                        baseAlpha: 0,
                        baseColor: [0, 0, 0],
                        flowAlpha: 1,
                        flowColor: [255, 255, 255],
                        fadeAlpha: Math.max(state.flowDecay, 0.05),
                        fadeColor: [0, 0, 0]
                    });
            },
            'Wings'() {
                Object.assign(resetSpawner.uniforms, {
                        radius: 0.1,
                        speed: 0,
                        colorMapAlpha: 0
                    });

                Object.assign(colorProxy, {
                        flowAlpha: 0.01,
                        baseAlpha: 0.2
                    });

                Object.assign(colorProxy);
            },
            'Fluid'() {
                Object.assign(state, {
                        autoClearView: true
                    });

                Object.assign(colorProxy, {
                        fadeAlpha: 0
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
                        baseAlpha: 0.8,
                        baseColor: [100, 200, 255],
                        fadeAlpha: 0.1,
                        fadeColor: [0, 0, 0]
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
                        baseAlpha: 0.1,
                        baseColor: [255, 150, 0],
                        fadeAlpha: 0.05,
                        fadeColor: [0, 0, 0],
                    });
            },
            'Sea'() {
                Object.assign(state, {
                        flowWidth: 5,
                        forceWeight: 0.013,
                        wanderWeight: 0.002,
                        flowDecay: 0.05,
                        speedAlpha: 0,
                        colorMapAlpha: 0.4
                    });

                Object.assign(resetSpawner.uniforms, {
                        radius: 1.5,
                        speed: 0
                    });

                Object.assign(colorProxy, {
                        baseAlpha: 0.8,
                        baseColor: [55, 155, 255],
                        fadeAlpha: 0.3,
                        fadeColor: [0, 58, 90]
                    });
            },
            'Ghostly'() {
                Object.assign(state, {
                        flowDecay: 0,
                        colorMapAlpha: 0.005
                    });

                Object.assign(colorProxy, {
                        baseAlpha: 0.01,
                        flowAlpha: 0.05
                    });
            },
            'Petri'() {
                Object.assign(state, {
                        forceWeight: 0.0165,
                        wanderWeight: 0.001,
                        flowDecay: 0.001,
                        noiseScale: 200,
                        noiseSpeed: 0.0001
                    });

                Object.assign(colorProxy, {
                        baseAlpha: 0.3,
                        baseColor:[255, 203, 37],
                        flowAlpha: 0.05,
                        fadeAlpha: 0.01
                    });

                Object.assign(resetSpawner.uniforms, {
                        radius: 1/Math.max(...tendrils.viewSize),
                        speed: 0
                    });
            },
            'Turbulence'() {
                Object.assign(state, {
                        noiseSpeed: 0.00005,
                        noiseScale: 10,
                        forceWeight: 0.014,
                        wanderWeight: 0.003,
                        speedAlpha: 0.000002,
                        colorMapAlpha: 0.3
                    });

                Object.assign(colorProxy, {
                        baseAlpha: 0.3,
                        baseColor: [100, 0, 0],
                        flowAlpha: 0.5,
                        flowColor: [255, 10, 10],
                        fadeAlpha: 0.01,
                        fadeColor: [0, 0, 0]
                    });
            },
            'Rorschach'() {
                Object.assign(state, {
                        noiseSpeed: 0.00001,
                        noiseScale: 60,
                        forceWeight: 0.014,
                        wanderWeight: 0.0021,
                        speedAlpha: 0.000002,
                        colorMapAlpha: 0.2
                    });

                Object.assign(flowPixelState, {
                    scale: 'mirror xy'
                });

                Object.assign(colorProxy, {
                        baseAlpha: 0.9,
                        baseColor: [0, 0, 0],
                        flowAlpha: 0.05,
                        fadeAlpha: 0.01,
                        fadeColor: [255, 255, 255]
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
                        lineWidth: 3,
                        colorMapAlpha: 0.0001
                    });

                Object.assign(colorProxy, {
                        baseAlpha: 0.02,
                        baseColor: [50, 255, 50],
                        flowAlpha: 0.05
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
            convertColors();
            restart();
        };

        for(let p in presetters) {
            presetters[p] = wrapPresetter.bind(null, presetters[p]);
            gui.presets.add(presetters, p);
        }


        // Open or close

        toggleGUI(false);

        gui.main.open();
        gui.settings.open();


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
         * - Avoid using 'H' - clashes with DAT.GUI
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
                track.currentTime += by*0.001;
                sequencer.playFrom(track.currentTime*1000, 0, state);
                togglePlay(true);
            };


            const keyframeCall = (...calls) => {
                keyframe(null, calls);
                each((call) => call(), calls);
            };

            const keyframeCaller = (...calls) => () => keyframeCall(...calls);


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

                'Q': stateNum('forceWeight', 0.01),
                'A': stateNum('flowWeight', 0.02),
                'W': stateNum('wanderWeight', 0.0002),

                'S': stateNum('flowDecay', 0.005),
                'D': stateNum('flowWidth', 1),

                'E': stateNum('noiseScale', 1),
                'R': stateNum('noiseSpeed', 0.002),

                'Z': stateNum('damping', 0.001),
                'X': stateNum('speedLimit', 0.0001),

                'N': stateNum('speedAlpha', 0.002),
                'M': stateNum('lineWidth', 0.1),

                // <control> is a special case for re-assigning keys, see below
                '<control>': (key, assign) => {
                    delete editMap[key];
                    delete callMap[key];

                    callMap[key] = keyframeCaller(() =>
                            Object.assign(state, assign));
                }
            };

            const callMap = {
                'O': keyframeCaller(() => tendrils.clear()),

                '0': keyframeCaller(presetters['Flow']),
                '1': keyframeCaller(presetters['Wings']),
                '2': keyframeCaller(presetters['Fluid']),
                '3': keyframeCaller(presetters['Flow only']),
                '4': keyframeCaller(presetters['Noise only']),
                '5': keyframeCaller(presetters['Sea']),
                '6': keyframeCaller(presetters['Petri']),
                '7': keyframeCaller(presetters['Turbulence']),
                '8': keyframeCaller(presetters['Rorschach']),
                '9': keyframeCaller(presetters['Roots']),

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
                '<caps-lock>': resetEach,

                '<space>': () => togglePlay(),

                '[': () => scrub(-2000),
                ']': () => scrub(2000),
                '<enter>': keyframe,
                '<backspace>': () => {
                    sequencer.timeline.spliceAt(sequencer.timer.time);
                },

                '\\': keyframeCaller(() => tendrils.reset()),
                "'": keyframeCaller(spawnFlow),
                ';': keyframeCaller(spawnFastest),

                '<shift>': keyframeCaller(restart),
                '/': keyframeCaller(spawnCam),
                '.': keyframeCaller(spawnDirectCam),
                ',': keyframeCaller(spawnForm)
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
    }
};
