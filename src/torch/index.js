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
// import copyFrag from '../tendrils/screen/copy.frag';
import formFrag from './form.frag';
import drawFrag from './draw.frag';

import AudioTrigger from '../tendrils/audio/';
import AudioTexture from '../tendrils/audio/data-texture';

import { containAspect } from '../tendrils/utils/aspect';

import each from '../fp/each';
import { step } from '../utils';

export default (canvas, settings, debug) => {
    const queries = querystring.parse(location.search.slice(1));

    const gl = glContext(canvas, { preserveDrawingBuffer: true }, render);

    const timer = new Timer(0);

    const viewRes = [0, 0];
    const viewSize = [0, 0];

    const buffers = [FBO(gl, [1, 1]), FBO(gl, [1, 1])];

    const uniforms = {};

    const screen = new Screen(gl);

    // const screenShader = shader(gl, screenVert, screenFrag);
    // const copyShader = shader(gl, screenVert, copyFrag);
    const formShader = shader(gl, screenVert, formFrag);
    const drawShader = shader(gl, screenVert, drawFrag);


    // Track

    const audioMode = (queries.audioMode || 'waveform');
    const audioOrders = (parseInt(queries.audioOrders, 10) || 0);
    const audioScale = (parseFloat(queries.audioScale, 10) || 1);
    const harmonies = (parseFloat(queries.harmonies, 10) || 1);
    const falloff = (parseFloat(queries.falloff, 10) || 100);
    const growth = (parseFloat(queries.growth, 10) || 0.0001);

    const audio = Object.assign(new Audio(), {
            crossOrigin: 'anonymous',
            controls: true,
            autoplay: true,
            muted: 'muted' in queries,
            className: 'track',
            src: decodeURIComponent(queries.track || '%2Faudio.gitignored%2FTORCH%20SONGS%20(PRIVATE%20%26%20CONFIDENTIAL)%2FTorch%20Songs_Blaenavon_Elliott%20Smith_Everything%20Reminds%20Me%20Of%20Her.mp3')
        });

    canvas.parentElement.appendChild(audio);
    
    const audioAnalyser = analyser(audio);

    audioAnalyser.analyser.fftSize = 2**11;

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
                audioScale,
                harmonies,
                falloff,
                growth
            });


        // Buffer pass - develop the form

        buffers[0].bind();
        formShader.bind();

        Object.assign(formShader.uniforms, uniforms);
        
        screen.render();


        // Screen pass - draw the light and form

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        drawShader.bind();

        Object.assign(drawShader.uniforms, uniforms, {
                form: buffers[0].color[0].bind(0)
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
    }


    // Go

    self.addEventListener('resize', throttle(resize, 200), false);

    resize();
};
