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

import { containAspect } from '../tendrils/utils/aspect';

import map from '../fp/map';
import reduce from '../fp/reduce';

import { step } from '../utils';

export default (canvas) => {
    const queries = querystring.parse(location.search.slice(1));

    const gl = glContext(canvas, { preserveDrawingBuffer: true }, render);

    const timer = Object(new Timer(), {
            step: 1000/60
        });

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

    const params = {
        track: (decodeURIComponent(queries.track || '') ||
                prompt('Enter a track URL:')),

        audioMode: (queries.audioMode || 'frequencies'),
        audioOrders: ((queries.audioOrders)? parseInt(queries.audioOrders, 10) : 2),

        meanFulcrum: ((queries.meanFulcrum)? parseFloat(queries.meanFulcrum, 10) : 0.4),

        harmonies: ((queries.harmonies)? parseFloat(queries.harmonies, 10) : 1),

        silent: ((queries.silent)? parseFloat(queries.silent, 10) : 0),

        soundSmooth: ((queries.soundSmooth)? parseFloat(queries.soundSmooth, 10) : 0.3),
        soundWarp: ((queries.soundWarp)? parseFloat(queries.soundWarp, 10) : 0.007),

        noiseWarp: ((queries.noiseWarp)? parseFloat(queries.noiseWarp, 10) : 0.1),
        noiseSpeed: ((queries.noiseSpeed)? parseFloat(queries.noiseSpeed, 10) : 0.001),
        noiseScale: ((queries.noiseScale)? parseFloat(queries.noiseScale, 10) : 0.3),

        spin: ((queries.spin)? parseFloat(queries.spin, 10) : 0.0001),

        ringRadius: ((queries.ringRadius)? parseFloat(queries.ringRadius, 10) : 0.3),
        ringThick: ((queries.ringThick)? parseFloat(queries.ringThick, 10) : 0.005),
        ringAlpha: ((queries.ringAlpha)? parseFloat(queries.ringAlpha, 10) : 0.001),

        otherRadius: ((queries.otherRadius)? parseFloat(queries.otherRadius, 10) : 0.2),
        otherThick: ((queries.otherThick)? parseFloat(queries.otherThick, 10) : 0.03),
        otherEdge: ((queries.otherEdge)? parseFloat(queries.otherEdge, 10) : 4),
        otherAlpha: ((queries.otherAlpha)? parseFloat(queries.otherAlpha, 10) : 0.001),

        triangleRadius: ((queries.triangleRadius)? parseFloat(queries.triangleRadius, 10) : 1.5),
        triangleFat: ((queries.triangleFat)? parseFloat(queries.triangleFat, 10) : 0.2),
        triangleEdge: ((queries.triangleEdge)? parseFloat(queries.triangleEdge, 10) : 2.5),
        triangleAlpha: ((queries.triangleAlpha)? parseFloat(queries.triangleAlpha, 1) : 0.001),

        staticScale: ((queries.staticScale)? parseFloat(queries.staticScale, 10) : 150),
        staticSpeed: ((queries.staticSpeed)? parseFloat(queries.staticSpeed, 10) : 1),
        staticShift: ((queries.staticShift)? parseFloat(queries.staticShift, 10) : 0.1),
        staticAlpha: ((queries.staticAlpha)? parseFloat(queries.staticAlpha, 10) : 0.001),

        grow: ((queries.grow)? parseFloat(queries.grow, 10) : 0.0005),
        growLimit: ((queries.growLimit)? parseFloat(queries.growLimit, 10) : 1.6),

        jitter: ((queries.jitter)? parseFloat(queries.jitter, 10) : 0.002),

        fadeAlpha: ((queries.fadeAlpha)? parseFloat(queries.fadeAlpha, 10) : 0.99),

        lightColor: ((queries.lightColor)? queryColor(queries.lightColor) : [1, 1, 1, 1]),
        fadeColor: ((queries.fadeColor)? queryColor(queries.fadeColor) : [0, 161/255, 210/255, 1]),

        bokehRadius: ((queries.bokehRadius)? parseFloat(queries.bokehRadius, 10) : 8),
        bokehAmount: ((queries.bokehAmount)? parseFloat(queries.bokehAmount, 10) : 60)
    };

    Object.assign(self, params);

    self.applyParams = () => map((param, name) => self[name], params, params);

    const paramQuery = () =>
        reduce((out, param, name) => {
                out.push(name+'='+param);

                return out;
            },
            params, []);

    const showState = () => prompt('The URL to this state:',
            location.href.replace(location.search, '')+'?'+
                paramQuery().join('&'));

    console.log(paramQuery().join('\n'));


    const showStateButton = Object.assign(document.createElement('button'), {
            className: 'show-params',
            innerText: 'show state'
        });

    showStateButton.addEventListener('click', showState);

    canvas.parentElement.appendChild(showStateButton);


    // Track

    const audio = Object.assign(new Audio(), {
            crossOrigin: 'anonymous',
            controls: true,
            autoplay: true,
            muted: 'muted' in queries,
            className: 'track',
            src: ((self.track.match(/^(https)?(:\/\/)?(www\.)?dropbox\.com\/s\//gi))?
                    self.track.replace(/^((https)?(:\/\/)?(www\.)?)dropbox\.com\/s\/(.*)\?dl=(0)$/gi,
                        'https://dl.dropboxusercontent.com/s/$5?dl=1&raw=1')
                :   self.track)
        });

    canvas.parentElement.appendChild(audio);

    const audioAnalyser = analyser(audio);

    audioAnalyser.analyser.fftSize = 2**11;

    const audioTrigger = new AudioTrigger(audioAnalyser, self.audioOrders);

    const audioTexture = new AudioTexture(gl, audioTrigger.dataOrder(-1));
    // const audioTexture = new AudioTexture(gl,
    //         audioAnalyser.analyser.frequencyBinCount);


    // The main loop
    function render() {
        const dt = timer.tick().dt;


        // Sample audio

        audioTrigger.sample(dt, self.audioMode);
        // audioTexture[self.audioMode](audioTrigger.dataOrder(-1));
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
                time: timer.time,
                dt: timer.dt,

                viewSize,
                viewRes,

                audio: audioTexture.texture.bind(0),

                peak: audioPeak.peak,
                peakPos: audioPeak.pos/audioTexture.array.data.length,
                mean: meanWeight(audioTexture.array.data, self.meanFulcrum),

                frequencies: audioAnalyser.analyser.frequencyBinCount,
                harmonies: self.harmonies,
                silent: self.silent,
                soundSmooth: self.soundSmooth,
                soundWarp: self.soundWarp,

                noiseWarp: self.noiseWarp,
                noiseSpeed: self.noiseSpeed,
                noiseScale: self.noiseScale,

                spin: self.spin,

                ringRadius: self.ringRadius,
                ringThick: self.ringThick,
                ringAlpha: self.ringAlpha,

                otherRadius: self.otherRadius,
                otherThick: self.otherThick,
                otherEdge: self.otherEdge,
                otherAlpha: self.otherAlpha,

                triangleRadius: self.triangleRadius,
                triangleFat: self.triangleFat,
                triangleEdge: self.triangleEdge,
                triangleAlpha: self.triangleAlpha,

                staticScale: self.staticScale,
                staticSpeed: self.staticSpeed,
                staticShift: self.staticShift,
                staticAlpha: self.staticAlpha
            });

        screen.draw();


        // Fade pass

        buffers.fade[0].bind();
        // gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        shaders.fade.bind();

        Object.assign(shaders.fade.uniforms, {
                time: timer.time,
                dt: timer.dt,

                viewSize,
                viewRes,

                next: buffers.light.color[0].bind(0),
                past: buffers.fade[1].color[0].bind(1),
                // @todo Bring audio stuff here as well?

                grow: self.grow,
                growLimit: self.growLimit,

                // @todo Spin this too?
                // spinPast: self.spinPast,

                jitter: self.jitter,

                fadeAlpha: self.fadeAlpha
            });

        screen.draw();


        // Draw pass

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        shaders.draw.bind();

        Object.assign(shaders.draw.uniforms, {
                viewRes,

                light: buffers.light.color[0].bind(0),
                fade: buffers.fade[0].color[0].bind(1),

                lightColor: self.lightColor,
                fadeColor: self.fadeColor,

                bokehRadius: self.bokehRadius,
                bokehAmount: self.bokehAmount
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
