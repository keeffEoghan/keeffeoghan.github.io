import glContext from 'gl-context';
import FBO from 'gl-fbo';
import analyser from 'web-audio-analyser';
import throttle from 'lodash/throttle';
import mapRange from 'range-fit';
import vec2 from 'gl-matrix/src/gl-matrix/vec2';
import shader from 'gl-shader';
import querystring from 'querystring';

import Timer from '../tendrils/timer';

import Screen from '../tendrils/screen';

import screenVert from '../tendrils/screen/index.vert';
// import screenFrag from '../tendrils/screen/index.frag';
import formFrag from './form.frag';
import drawFrag from './draw.frag';
import bokehFrag from '../tendrils/screen/bokeh.frag';

import AudioTrigger from '../tendrils/audio/';
import AudioTexture from '../tendrils/audio/data-texture';
import { peak, meanWeight } from '../tendrils/analyse';

import { containAspect } from '../tendrils/utils/aspect';

import each from '../fp/each';
import { step } from '../utils';

export default (canvas, settings, debug) => {
    const queries = querystring.parse(location.search.slice(1));

    const gl = glContext(canvas, { preserveDrawingBuffer: true }, render);

    const timer = Object(new Timer(), {
            step: 1000/60
        });

    const viewRes = [0, 0];
    const viewSize = [0, 0];

    const buffers = [FBO(gl, [1, 1]), FBO(gl, [1, 1])];
    const post = FBO(gl, [1, 1]);

    const uniforms = {};

    const screen = new Screen(gl);

    // const screenShader = shader(gl, screenVert, screenFrag);
    const formShader = shader(gl, screenVert, formFrag);
    const drawShader = shader(gl, screenVert, drawFrag);
    const bokehShader = shader(gl, screenVert, bokehFrag);


    // Parameters...
        const track = (decodeURIComponent(queries.track || '') ||
                prompt('Enter a track URL:'));

        const audioMode = (queries.audioMode || 'frequencies');
        const audioOrders = ((queries.audioOrders)? parseInt(queries.audioOrders, 10) : 2);
        const harmonies = ((queries.harmonies)? parseFloat(queries.harmonies, 10) : 1);
        const falloff = ((queries.falloff)? parseFloat(queries.falloff, 10) : 0.0001);
        const attenuate = ((queries.attenuate)? parseFloat(queries.attenuate, 10) : 0.1);
        const silent = ((queries.silent)? parseFloat(queries.silent, 10) : 0);
        const soundSmooth = ((queries.soundSmooth)? parseFloat(queries.soundSmooth, 10) : 0.3);
        const soundWarp = ((queries.soundWarp)? parseFloat(queries.soundWarp, 10) : 0.005);
        const meanFulcrum = ((queries.meanFulcrum)? parseFloat(queries.meanFulcrum, 10) : 0.3);
        const grow = ((queries.grow)? parseFloat(queries.grow, 10) : 0.0005);
        const spin = ((queries.spin)? parseFloat(queries.spin, 10) : 0);
        const radius = ((queries.radius)? parseFloat(queries.radius, 10) : 0.4);
        const thick = ((queries.thick)? parseFloat(queries.thick, 10) : 0);
        const jitter = ((queries.jitter)? parseFloat(queries.jitter, 10) : 0.0008);
        const nowAlpha = ((queries.nowAlpha)? parseFloat(queries.nowAlpha, 10) : 1);
        const pastAlpha = ((queries.pastAlpha)? parseFloat(queries.pastAlpha, 10) : 0.99);
        const formAlpha = ((queries.formAlpha)? parseFloat(queries.formAlpha, 10) : 0.6);
        const ringAlpha = ((queries.ringAlpha)? parseFloat(queries.ringAlpha, 10) : 0.001);
        const bokehRadius = ((queries.bokehRadius)? parseFloat(queries.bokehRadius, 10) : 1.6);
        const bokehAmount = ((queries.bokehAmount)? parseFloat(queries.bokehAmount, 10) : 60);


        console.log('track='+track);
        console.log('audioMode='+audioMode);
        console.log('audioOrders='+audioOrders);
        console.log('harmonies='+harmonies);
        console.log('falloff='+falloff);
        console.log('attenuate='+attenuate);
        console.log('silent='+silent);
        console.log('soundSmooth='+soundSmooth);
        console.log('soundWarp='+soundWarp);
        console.log('meanFulcrum='+meanFulcrum);
        console.log('grow='+grow);
        console.log('spin='+spin);
        console.log('radius='+radius);
        console.log('thick='+thick);
        console.log('jitter='+jitter);
        console.log('nowAlpha='+nowAlpha);
        console.log('pastAlpha='+pastAlpha);
        console.log('formAlpha='+formAlpha);
        console.log('ringAlpha='+ringAlpha);
        console.log('bokehRadius='+bokehRadius);
        console.log('bokehAmount='+bokehAmount);


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

    canvas.parentElement.appendChild(audio);
    
    const audioAnalyser = analyser(audio);

    audioAnalyser.analyser.fftSize = 2**11;
    uniforms.frequencies = audioAnalyser.analyser.frequencyBinCount;

    const audioTrigger = new AudioTrigger(audioAnalyser, audioOrders);

    const audioTexture = new AudioTexture(gl, audioTrigger.dataOrder(-1));
    // const audioTexture = new AudioTexture(gl,
    //         audioAnalyser.analyser.frequencyBinCount);


    // The main loop
    function render() {
        const dt = timer.tick().dt;


        // Sample audio

        audioTrigger.sample(dt, audioMode);
        // audioTexture[audioMode](audioTrigger.dataOrder(-1));
        audioTexture.apply();


        // Render - common

        gl.viewport(0, 0, viewRes[0], viewRes[1]);
        
        Object.assign(uniforms, {
                start: timer.since,
                time: timer.time,
                dt: timer.dt,
                viewSize,
                viewRes,
                past: buffers[1].color[0].bind(0),
                audio: audioTexture.texture.bind(1),
                peak: peak(audioTexture.array.data),
                mean: meanWeight(audioTexture.array.data, meanFulcrum),
                harmonies,
                falloff,
                attenuate,
                silent,
                soundSmooth,
                soundWarp,
                grow,
                spin,
                radius,
                thick,
                jitter,
                bokehRadius,
                bokehAmount,
                nowAlpha,
                pastAlpha,
                formAlpha,
                ringAlpha
            });


        // Buffer pass - develop the form

        buffers[0].bind();
        formShader.bind();

        Object.assign(formShader.uniforms, uniforms);
        
        screen.render();


        // Screen pass - draw the light and form

        post.bind();
        // gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        drawShader.bind();

        Object.assign(drawShader.uniforms, uniforms, {
                form: buffers[0].color[0].bind(0)
            });

        screen.render();


        // Post pass

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        bokehShader.bind();

        Object.assign(bokehShader.uniforms, uniforms, {
                view: post.color[0].bind(0),
                resolution: viewRes,
                time: timer.time,
                radius: bokehRadius,
                amount: bokehAmount
            });

        screen.render();


        // Step frame
        step(buffers);
    }

    function resize() {
        canvas.width = self.innerWidth;
        canvas.height = self.innerHeight;

        viewRes[0] = gl.drawingBufferWidth;
        viewRes[1] = gl.drawingBufferHeight;

        containAspect(viewSize, viewRes);

        each((buffer) => buffer.shape = viewRes, buffers);
        post.shape = viewRes;
    }


    // Go

    self.addEventListener('resize', throttle(resize, 200), false);

    resize();
};
