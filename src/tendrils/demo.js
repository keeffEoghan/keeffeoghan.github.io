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
import AudioTexture from './audio/data-texture';
import { peak, sum, mean, weightedMean } from './analyse';

import FlowLines from './flow-line/multi';

import Player from './animate';

import Blend from './screen/blend';

import { curry } from '../fp/partial';
import reduce from '../fp/reduce';
import map from '../fp/map';
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

    const timer = {
        tendrils: defaultSettings.timer,
        player: new Timer(0)
    };


    // Tendrils init

    const tendrils = new Tendrils(gl, { timer: timer.tendrils });

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

    const state = tendrils.state;


    // Audio init

    const audioDefaults = {
        trackURL: ((queries.track)?
                decodeURIComponent(queries.track)
            :   'https://soundcloud.com/max-cooper/trust-feat-kathrin-deboer'),

        audible: (''+queries.mute !== 'true'),

        track: (''+queries.track_off !== 'true'),
        trackFlowAt: 100,
        trackFastAt: 0,
        trackFormAt: 0.07,
        trackSampleAt: 130,
        trackSpawnAt: 0,
        trackCamAt: 0,

        mic: (''+queries.mic_off !== 'true'),
        micFlowAt: 0,
        micFastAt: 0,
        micFormAt: 0,
        micSampleAt: 5,
        micSpawnAt: 0,
        micCamAt: 1
    };


    // Track and analyser init

    const track = new Audio();
    const audioState = { ...audioDefaults };

    Object.assign(track, {
            crossOrigin: 'anonymous',
            controls: true,
            autoplay: true,
            className: 'track'
        });

    // @todo Stereo: true

    const trackAnalyser = analyser(track, { audible: audioState.audible });

    trackAnalyser.analyser.fftSize = Math.pow(2, 8);

    const trackTrigger = new AudioTrigger(trackAnalyser, 3);


    // Mic refs
    let micAnalyser;
    let micTrigger;


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
        const pos = offset(e, canvas, vec2.create());

        pos[0] = mapRange(pos[0], 0, tendrils.viewRes[0], -1, 1);
        pos[1] = mapRange(pos[1], 0, tendrils.viewRes[1], 1, -1);

        flowInputs.get(e.pointerId).add(timer.tendrils.time, pos);
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

    mat3.scale(camSpawner.spawnMatrix,
        mat3.identity(camSpawner.spawnMatrix), [-1, 1]);

    const spawnCam = () => {
        if(video) {
            camSpawner.shader = camShaders.direct;
            camSpawner.speed = 0.3;
            camSpawner.setPixels(video);
            camSpawner.spawn(tendrils);
        }
    };

    const spawnSampleCam = () => {
        if(video) {
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
                video.addEventListener('canplay', () =>
                    camSpawner.buffer.shape = tendrils.colorMap.shape = [
                        video.videoWidth,
                        video.videoHeight
                    ]);


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


    // Color map blending

    const audioTexture = new AudioTexture(gl,
            trackAnalyser.analyser.frequencyBinCount);

    const blend = new Blend(gl, {
            views: [audioTexture.texture, camSpawner.buffer],
            alphas: [0.3, 0.8]
        });


    // Go

    function resize() {
        canvas.width = self.innerWidth;
        canvas.height = self.innerHeight;
    }

    self.addEventListener('resize', throttle(resize, 200), false);

    resize();

    tendrils.setup();
    resetSpawner.spawn(tendrils);


    // Audio `react` and `test` function pairs - for `AudioTrigger.fire`

    const trackFire = [
        [
            spawnFlow,
            (trigger) => ((audioState.trackFlowAt) &&
                sum(trigger.dataOrder(1)) > audioState.trackFlowAt)
        ],
        [
            spawnFastest,
            (trigger) => ((audioState.trackFastAt) &&
                sum(trigger.dataOrder(1)) > audioState.trackFastAt)
        ],
        [
            spawnForm,
            (trigger) => ((audioState.trackFormAt) &&
                mean(trigger.dataOrder(-1)) > audioState.trackFormAt)
        ],
        [
            spawnSampleCam,
            (trigger) => ((audioState.trackSampleAt) &&
                mean(trigger.dataOrder(-1)) > audioState.trackSampleAt)
        ],
        [
            respawn,
            (trigger) => ((audioState.trackSpawnAt) &&
                mean(trigger.dataOrder(-1)) > audioState.trackSpawnAt)
        ],
        [
            spawnCam,
            (trigger) => ((audioState.trackCamAt) &&
                mean(trigger.dataOrder(-1)) > audioState.trackCamAt)
        ]
    ];

    const micFire = [
        [
            spawnFlow,
            (trigger) => ((audioState.micFlowAt) &&
                Math.abs(peak(trigger.dataOrder(1))) > audioState.micFlowAt)
        ],
        [
            spawnFastest,
            (trigger) => ((audioState.micFastAt) &&
                sum(trigger.dataOrder(1)) > audioState.micFastAt)
        ],
        [
            spawnForm,
            (trigger) => ((audioState.micFormAt) &&
                mean(trigger.dataOrder(-1)) > audioState.micFormAt)
        ],
        [
            spawnSampleCam,
            (trigger) => ((audioState.micSampleAt) &&
                mean(trigger.dataOrder(-1)) > audioState.micSampleAt)
        ],
        [
            respawn,
            (trigger) => ((audioState.micSpawnAt) &&
                mean(trigger.dataOrder(-1)) > audioState.micSpawnAt)
        ],
        [
            spawnCam,
            (trigger) => ((audioState.micCamAt) &&
                weightedMean(trigger.dataOrder(-1), 0.2) > audioState.micCamAt)
        ]
    ];

    // Returns a function to be executed for each `fire` pair (as above)
    const audioResponder = (trigger) => (fire) => trigger.fire(...fire);

    const audioResponse = () => {
        let soundOutput = false;

        if(audioState.track && !track.paused) {
            soundOutput = trackFire.some(audioResponder(trackTrigger));
        }

        if(!soundOutput && audioState.mic && micTrigger) {
            soundOutput = micFire.some(audioResponder(micTrigger));
        }

        return soundOutput;
    };


    // Flattened full state (for tweening on one player)
    /**
     * @todo Get rid of this, no longer needed wth the new player - stick to the
     *       consistent notation.
     */

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
                        timer.tendrils, {}),

                    ...rekey(audioState, 'audio.')
                };
        },

        set state(fullState) {
            dekey(fullState.state, 'state.', state);
            dekey(fullState.respawn, 'respawn.', resetSpawner.uniforms);
            dekey(fullState.flow, 'flow.', flowPixelState);
            dekey(fullState.time, 'timer.', timer.tendrils);
            dekey(fullState.audio, 'audio.', audioState);

            return fullState;
        }
    };


    // Animation setup

    const tracks = {
        tendrils: tendrils.state,
        tendrils1: tendrils.state,
        baseColor: tendrils.state.baseColor,
        flowColor: tendrils.state.flowColor,
        fadeColor: tendrils.state.fadeColor,
        spawn: resetSpawner.uniforms,
        audio: audioState,
        blend: blend.alphas
    };

    const player = new Player(map(() => [], tracks, {}), tracks);

    // timer.player.end = player.end()+2000;
    // timer.player.loop = true;


    // Starting state

    Object.assign(state, {
            speedLimit: 0.0004,
            noiseSpeed: 0.00001,
            noiseScale: 100,
            forceWeight: 0.014,
            noiseWeight: 0.0021,
            speedAlpha: 0.000002,
            colorMapAlpha: 0.4,
            baseColor: [1, 1, 1, 0.9],
            flowColor: [1, 1, 1, 0.05],
            fadeColor: [0, 0, 0, 0.05]
        });

    Object.assign(flowPixelState, {
        scale: 'mirror xy'
    });

    Object.assign(resetSpawner.uniforms, {
            radius: (1/Math.max(...tendrils.viewSize))+0.1,
            speed: 0
        });

    respawn();


    // @todo Test sequence - move to own file?
    // @todo Split this into parallel tracks where needed

    player.tracks.tendrils
        // Restart, clean slate; begin with the inert, big bang - flow only
            .to({
                to: { ...state },
                call: [reset],
                time: 60
            })
            .to({
                call: [respawn],
                time: 120
            });
        // Isolated areas of activity - high scale noise, low flow


    // The main loop
    function render() {
        const dt = timer.tendrils.tick().dt;

        if(track && track.currentTime >= 0 && !track.paused) {
            timer.player.tick(track.currentTime*1000);
            player.play(timer.player.time);
        }

        // @todo Frequencies on x-axis, waveform on y
        audioTexture.frequency(trackTrigger.dataOrder(0)).apply();

        // Blend the color maps into tendrils one
        // @todo Only do this if necessary (skip if none or only one has alpha)
        blend.draw(tendrils.colorMap);

        // The main event
        tendrils.draw();


        // Draw inputs to flow

        gl.viewport(0, 0, ...tendrils.flow.shape);

        tendrils.flow.bind();

        flowInputs.trim(1/tendrils.state.flowDecay, timer.tendrils.time);

        each((flowLine) => {
                Object.assign(flowLine.line.uniforms, tendrils.state);
                flowLine.update().draw();
            },
            flowInputs.active);


        // React to sound - from highest reaction to lowest, max one per frame

        (trackTrigger && trackTrigger.sample(dt));
        (micTrigger && micTrigger.sample(dt));

        audioResponse();
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

        const keyframe = (to = { ...state }, call = null) =>
            // @todo Apply full state to each player track
            player.tracks.tendrils.smoothTo({
                to,
                call,
                time: timer.player.time,
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
                    toSource(player.frames({}))),
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

        const convertColors = () => {
            state.baseColor[3] = colorProxy.baseAlpha;
            Object.assign(state.baseColor,
                    colorProxy.baseColor.map((c) => c/255));

            state.flowColor[3] = colorProxy.flowAlpha;
            Object.assign(state.flowColor,
                colorProxy.flowColor.map((c) => c/255));

            state.fadeColor[3] = colorProxy.fadeAlpha;
            Object.assign(state.fadeColor,
                colorProxy.fadeColor.map((c) => c/255));
        };

        gui.settings.addColor(colorProxy, 'flowColor').onChange(convertColors);
        gui.settings.add(colorProxy, 'flowAlpha').onChange(convertColors);

        gui.settings.addColor(colorProxy, 'baseColor').onChange(convertColors);
        gui.settings.add(colorProxy, 'baseAlpha').onChange(convertColors);

        gui.settings.addColor(colorProxy, 'fadeColor').onChange(convertColors);
        gui.settings.add(colorProxy, 'fadeAlpha').onChange(convertColors);

        convertColors();


        // Color map blend

        gui.blend = gui.main.addFolder('blend');

        const blendKeys = ['audio', 'cam'];
        const blendProxy = reduce((proxy, k, i) => {
                proxy[k] = blend.alphas[i];

                return proxy;
            },
            blendKeys, {});

        const blendDefaults = { ...blendProxy };

        const convertBlend = () => reduce((alphas, v, k, proxy, i) => {
                alphas[i] = v;

                return alphas;
            },
            blendProxy, blend.alphas);

        for(let b = 0; b < blendKeys.length; ++b) {
            gui.blend.add(blendProxy, blendKeys[b]).onChange(convertBlend);
        }


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


        // Reflow

        gui.reflow = gui.main.addFolder('reflow');

        gui.reflow.add(flowPixelState, 'scale', Object.keys(flowPixelScales));


        // Time

        gui.time = gui.main.addFolder('time');

        timeSettings.forEach((t) => gui.time.add(timer.tendrils, t));


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
                spawnSampleCam,
                spawnCam,
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
                        fadeAlpha: Math.max(state.flowDecay, 0.05)
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
                        flowDecay: 0.001,
                        forceWeight: 0.014,
                        noiseWeight: 0,
                        speedAlpha: 0
                    });

                Object.assign(resetSpawner.uniforms, {
                        radius: 0.4,
                        speed: 0.15
                    });

                Object.assign(colorProxy, {
                        baseAlpha: 0.8,
                        baseColor: [100, 200, 255],
                        fadeAlpha: 0.1
                    });
            },
            'Noise only'() {
                Object.assign(state, {
                        flowWeight: 0,
                        noiseWeight: 0.003,
                        noiseSpeed: 0.0005,
                        noiseScale: 0.5,
                        varyNoiseScale: 20,
                        varyNoiseSpeed: 0.05,
                        speedAlpha: 0
                    });

                Object.assign(colorProxy, {
                        colorMapAlpha: 0.1,
                        baseAlpha: 0.1,
                        baseColor: [255, 150, 0],
                        fadeAlpha: 0.05
                    });

                Object.assign(blendProxy, {
                        audio: 0.9,
                        cam: 0.4
                    });
            },
            'Sea'() {
                Object.assign(state, {
                        flowWidth: 5,
                        forceWeight: 0.013,
                        noiseWeight: 0.002,
                        flowDecay: 0.01,
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
                        forceWeight: 0.015,
                        noiseWeight: 0.001,
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
                        noiseWeight: 0.003,
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
                        noiseScale: 40,
                        varyNoiseScale: 0.1,
                        noiseSpeed: 0.00001,
                        varyNoiseSpeed: 0.01,
                        forceWeight: 0.014,
                        noiseWeight: 0.0021,
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
                        fadeAlpha: 0.05,
                        fadeColor: [255, 255, 255]
                    });
            },
            'Roots'() {
                Object.assign(state, {
                        flowDecay: 0,
                        noiseSpeed: 0,
                        noiseScale: 18,
                        forceWeight: 0.015,
                        noiseWeight: 0.0023,
                        speedAlpha: 0.00005,
                        lineWidth: 3,
                        colorMapAlpha: 0.0001
                    });

                Object.assign(colorProxy, {
                        baseAlpha: 0.02,
                        baseColor: [50, 255, 50],
                        flowAlpha: 0.05
                    });
            },
            'Funhouse'() {
                Object.assign(state, {
                        forceWeight: 0.0165,
                        varyForce: 0.3,
                        flowWeight: 0.5,
                        varyFlow: 1,
                        noiseWeight: 0.0015,
                        varyNoise: 1,
                        noiseScale: 40,
                        varyNoiseScale: -4,
                        noiseSpeed: 0.0001,
                        varyNoiseSpeed: -3,
                        flowDecay: 0.001,
                        flowWidth: 8,
                        speedAlpha: 0.00002,
                        colorMapAlpha: 1
                    });

                Object.assign(colorProxy, {
                        baseAlpha: 0.2,
                        baseColor: [0, 0, 0],
                        flowAlpha: 0.05,
                        fadeAlpha: 0.05,
                        fadeColor: [0, 0, 0]
                    });

                spawnCam();
            }
        };

        const wrapPresetter = (presetter) => {
            Object.assign(state, defaultState);
            Object.assign(resetSpawner.uniforms, resetSpawnerDefaults);
            Object.assign(flowPixelState, flowPixelDefaults);
            Object.assign(colorProxy, colorDefaults);
            Object.assign(blendProxy, blendDefaults);

            presetter();

            updateGUI();
            convertColors();
            convertBlend();
            // restart();
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
                player.playFrom(track.currentTime*1000, 0, state);
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
                'W': stateNum('noiseWeight', 0.0002),

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
                '9': keyframeCaller(presetters['Funhouse']),

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
                // @todo Update this to match the new Player API
                '<backspace>': () =>
                    player.trackAt(timer.player.time)
                        .spliceAt(timer.player.time),

                '\\': keyframeCaller(() => tendrils.reset()),
                "'": keyframeCaller(spawnFlow),
                ';': keyframeCaller(spawnFastest),

                '<shift>': keyframeCaller(restart),
                '/': keyframeCaller(spawnSampleCam),
                '.': keyframeCaller(spawnCam),
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
