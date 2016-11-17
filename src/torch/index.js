import glContext from 'gl-context';
import FBO from 'gl-fbo';
import analyser from 'web-audio-analyser';
import throttle from 'lodash/throttle';
import shader from 'gl-shader';
import querystring from 'querystring';

import Timer from '../tendrils/timer';

import Screen from '../tendrils/screen';

import screenVert from '../tendrils/screen/index.vert';

import lightFrag from './light.frag';
import fadeFrag from './fade.frag';
import drawFrag from './draw.frag';

import AudioTrigger from '../tendrils/audio/';
import AudioTexture from '../tendrils/audio/data-texture';
import { peakPos, meanWeight } from '../tendrils/analyse';

import Player from '../tendrils/animate';

import { containAspect } from '../tendrils/utils/aspect';

import map from '../fp/map';
import reduce from '../fp/reduce';

import { step } from '../utils';

import * as colors from './colors';
import animations from './animations';


export default (canvas) => {
    const queries = querystring.parse(location.search.slice(1));

    const gl = glContext(canvas, { preserveDrawingBuffer: true }, render);

    const timers = {
        main: Object(new Timer(), { step: 1000/60 }),
        player: new Timer(0)
    };

    const viewRes = [0, 0];
    const viewSize = [0, 0];

    const buffers = {
        light: FBO(gl, [1, 1]),
        // @todo
        // flash: FBO(gl, [1, 1]),
        fade: [FBO(gl, [1, 1]), FBO(gl, [1, 1])]
    };

    const shaders = {
        light: shader(gl, screenVert, lightFrag),
        fade: shader(gl, screenVert, fadeFrag),
        draw: shader(gl, screenVert, drawFrag)
    };

    const screen = new Screen(gl);


    // Parameters...

    const queryColor = (query) => query.split(',').map((v) =>
                    parseFloat(v.replace(/[\[\]]/gi, ''), 10));

    const track = (decodeURIComponent(queries.track || '') ||
        prompt('Enter a track URL:'));

    const audioOrders = ((queries.audioOrders)?
            parseInt(queries.audioOrders, 10) : 3);

    const showAudio = ((queries.showAudio === 'true') || false);

    const state = self.state = {
        animation: queries.animation,

        audioMode: (queries.audioMode || 'frequencies'),

        audioOrder: ((queries.audioOrder)?
            parseInt(queries.audioOrder, 10) : 2),

        meanFulcrum: ((queries.meanFulcrum)?
                parseFloat(queries.meanFulcrum, 10)
            :   0.4),


        harmonies: ((queries.harmonies)?
                parseFloat(queries.harmonies, 10)
            :   1),


        silent: ((queries.silent)?
                parseFloat(queries.silent, 10)
            :   0),


        soundSmooth: ((queries.soundSmooth)?
                parseFloat(queries.soundSmooth, 10)
            :   0.3),

        soundWarp: ((queries.soundWarp)?
                parseFloat(queries.soundWarp, 10)
            :   0.007),


        noiseWarp: ((queries.noiseWarp)?
                parseFloat(queries.noiseWarp, 10)
            :   0.1),

        noiseSpeed: ((queries.noiseSpeed)?
                parseFloat(queries.noiseSpeed, 10)
            :   0.001),

        noiseScale: ((queries.noiseScale)?
                parseFloat(queries.noiseScale, 10)
            :   0.3),


        spin: ((queries.spin)?
                parseFloat(queries.spin, 10)
            :   0.0001),


        ringRadius: ((queries.ringRadius)?
                parseFloat(queries.ringRadius, 10)
            :   0.4),

        ringThick: ((queries.ringThick)?
                parseFloat(queries.ringThick, 10)
            :   0.005),

        ringAlpha: ((queries.ringAlpha)?
                parseFloat(queries.ringAlpha, 10)
            :   0.0005),


        otherRadius: ((queries.otherRadius)?
                parseFloat(queries.otherRadius, 10)
            :   0.2),

        otherThick: ((queries.otherThick)?
                parseFloat(queries.otherThick, 10)
            :   0.03),

        otherEdge: ((queries.otherEdge)?
                parseFloat(queries.otherEdge, 10)
            :   4),

        otherAlpha: ((queries.otherAlpha)?
                parseFloat(queries.otherAlpha, 10)
            :   0.001),


        triangleRadius: ((queries.triangleRadius)?
                parseFloat(queries.triangleRadius, 10)
            :   1.5),

        triangleFat: ((queries.triangleFat)?
                parseFloat(queries.triangleFat, 10)
            :   0.2),

        triangleEdge: ((queries.triangleEdge)?
                parseFloat(queries.triangleEdge, 10)
            :   2.5),

        triangleAlpha: ((queries.triangleAlpha)?
                parseFloat(queries.triangleAlpha, 10)
            :   0.001),


        staticScale: ((queries.staticScale)?
                parseFloat(queries.staticScale, 10)
            :   150),

        staticSpeed: ((queries.staticSpeed)?
                parseFloat(queries.staticSpeed, 10)
            :   1),

        staticShift: ((queries.staticShift)?
                parseFloat(queries.staticShift, 10)
            :   0.1),

        staticAlpha: ((queries.staticAlpha)?
                parseFloat(queries.staticAlpha, 10)
            :   0.001),


        grow: ((queries.grow)?
                parseFloat(queries.grow, 10)
            :   0.0005),

        growLimit: ((queries.growLimit)?
                parseFloat(queries.growLimit, 10)
            :   1.6),


        jitter: ((queries.jitter)?
                parseFloat(queries.jitter, 10)
            :   0.002),


        fadeAlpha: ((queries.fadeAlpha)?
                parseFloat(queries.fadeAlpha, 10)
            :   0.99),


        lightColor: ((queries.lightColor)?
                queryColor(queries.lightColor)
            :   colors.white),
        fadeColor: ((queries.fadeColor)?
                queryColor(queries.fadeColor)
            :   colors.lightBlueB),

        bokehRadius: ((queries.bokehRadius)?
                parseFloat(queries.bokehRadius, 10)
            :   8),

        bokehAmount: ((queries.bokehAmount)?
                parseFloat(queries.bokehAmount, 10)
            :   60)
    };


    // Track

    const audio = Object.assign(new Audio(), {
            crossOrigin: 'anonymous',
            controls: true,
            autoplay: true,
            muted: 'muted' in queries,
            className: 'track',
            src: ((track.match(/^(https)?(:\/\/)?(www\.)?dropbox\.com\/s\//gi))?
                    track.replace(/^((https)?(:\/\/)?(www\.)?)dropbox\.com\/s\/(.*)\?dl=(0)$/gi,
                        'https://dl.dropboxusercontent.com/s/$5?dl=1&raw=1')
                :   track)
        });

    if(showAudio) {
        canvas.parentElement.appendChild(audio);
    }

    const progress = document.getElementsByClassName('progress')[0];


    // Audio analysis

    const audioAnalyser = analyser(audio);

    audioAnalyser.analyser.fftSize = 2**11;

    const audioTrigger = new AudioTrigger(audioAnalyser, audioOrders);

    const audioTexture = new AudioTexture(gl,
            audioTrigger.dataOrder(state.audioOrder));


    // Animation setup

    const tracks = {
        a: state
    };

    const player = new Player(map(() => [], tracks, {}), tracks);

    const start = { ...state };

    // Set up the start/reset frame
    player.apply((track) => {
        track.to({
            to: start,
            time: 200
        });

        return { apply: start };
    });

    // Hand over the rest to the param-defined animation
    if(state.animation) {
        animations[state.animation](player);
    }


    // The main loop
    function render() {
        const dt = timers.main.tick().dt;


        // Animate

        if(audio.currentTime >= 0 && !audio.paused && state.animation) {
            timers.player.tick(audio.currentTime*1000);
            player.play(timers.player.time);
        }

        // For guaging time accurately by looking at the video recording
        progress.style.width = (audio.currentTime/audio.duration*100)+'%';


        // Sample audio

        audioTrigger.sample(dt, state.audioMode);
        // @todo Hack, remove
        audioTexture.array.data = audioTrigger.dataOrder(state.audioOrder);
        audioTexture.apply();

        let audioPeak = peakPos(audioTexture.array.data);


        // Render

        gl.viewport(0, 0, viewRes[0], viewRes[1]);
        screen.bind();


        // Light pass
        /**
         * @todo May need to do this twice, each having their own alpha inputs:
         *           - For the current light, which gets after-imaged
         *           - For a separate flash layer, which doesn't
         */

        buffers.light.bind();
        shaders.light.bind();

        Object.assign(shaders.light.uniforms, {
                time: timers.time,
                dt: timers.dt,

                viewSize,
                viewRes,

                audio: audioTexture.texture.bind(0),

                peak: audioPeak.peak,
                peakPos: audioPeak.pos/audioTexture.array.data.length,
                mean: meanWeight(audioTexture.array.data, state.meanFulcrum),

                frequencies: audioAnalyser.analyser.frequencyBinCount,
                harmonies: state.harmonies,
                silent: state.silent,
                soundSmooth: state.soundSmooth,
                soundWarp: state.soundWarp,

                noiseWarp: state.noiseWarp,
                noiseSpeed: state.noiseSpeed,
                noiseScale: state.noiseScale,

                spin: state.spin,

                ringRadius: state.ringRadius,
                ringThick: state.ringThick,
                ringAlpha: state.ringAlpha,

                otherRadius: state.otherRadius,
                otherThick: state.otherThick,
                otherEdge: state.otherEdge,
                otherAlpha: state.otherAlpha,

                triangleRadius: state.triangleRadius,
                triangleFat: state.triangleFat,
                triangleEdge: state.triangleEdge,
                triangleAlpha: state.triangleAlpha,

                staticScale: state.staticScale,
                staticSpeed: state.staticSpeed,
                staticShift: state.staticShift,
                staticAlpha: state.staticAlpha
            });

        screen.draw();


        // Fade pass

        buffers.fade[0].bind();
        // gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        shaders.fade.bind();

        Object.assign(shaders.fade.uniforms, {
                time: timers.time,
                dt: timers.dt,

                viewSize,
                viewRes,

                next: buffers.light.color[0].bind(0),
                past: buffers.fade[1].color[0].bind(1),
                // @todo Bring audio stuff here as well?

                grow: state.grow,
                growLimit: state.growLimit,

                // @todo Spin this too?
                // spinPast: state.spinPast,

                jitter: state.jitter,

                fadeAlpha: state.fadeAlpha
            });

        screen.draw();


        // Draw pass

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        shaders.draw.bind();

        Object.assign(shaders.draw.uniforms, {
                viewRes,

                light: buffers.light.color[0].bind(0),
                fade: buffers.fade[0].color[0].bind(1),

                lightColor: state.lightColor,
                fadeColor: state.fadeColor,

                bokehRadius: state.bokehRadius,
                bokehAmount: state.bokehAmount
            });

        screen.draw();


        // Step the fade
        step(buffers.fade);

        // Finish up
        screen.bind();
    }

    function resize() {
        canvas.width = self.innerWidth;
        canvas.height = self.innerHeight;

        viewRes[0] = gl.drawingBufferWidth;
        viewRes[1] = gl.drawingBufferHeight;

        containAspect(viewSize, viewRes);

        buffers.light.shape = viewRes;
        buffers.fade[0].shape = buffers.fade[1].shape = viewRes;
    }


    // Go

    self.addEventListener('resize', throttle(resize, 200), false);

    resize();
};
