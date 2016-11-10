import glContext from 'gl-context';
import FBO from 'gl-fbo';
import throttle from 'lodash/throttle';
import mapRange from 'range-fit';
import vec2 from 'gl-matrix/src/gl-matrix/vec2';
import shader from 'gl-shader';
import dat from 'dat-gui';

import Timer from '../tendrils/timer';

import Screen from '../tendrils/screen';

import screenVert from '../tendrils/screen/index.vert';
// import screenFrag from '../tendrils/screen/index.frag';
import formFrag from './form.frag';
import copyFrag from '../tendrils/screen/copy.frag';

import { coverAspect } from '../tendrils/utils/aspect';

import each from '../fp/each';
import { step } from '../utils';

export default (canvas, settings, debug) => {
    const gl = glContext(canvas, { preserveDrawingBuffer: true }, render);

    const timer = new Timer(0);

    const viewRes = [0, 0];
    const viewSize = [0, 0];

    const buffers = [FBO(gl, [1, 1]), FBO(gl, [1, 1])];

    const uniforms = {};

    const screen = new Screen(gl);

    // const screenShader = shader(gl, screenVert, screenFrag);
    const formShader = shader(gl, screenVert, formFrag);
    const copyShader = shader(gl, screenVert, copyFrag);

    // The main loop
    function render() {
        gl.viewport(0, 0, viewRes[0], viewRes[1]);

        const dt = timer.tick().dt;

        // Common
        
        Object.assign(uniforms, {
                start: timer.since,
                time: timer.time,
                dt: timer.dt,
                previous: buffers[1].color[0].bind(0),
                viewSize,
                viewRes
            });


        // Buffer pass - develop the form

        buffers[0].bind();
        formShader.bind();

        Object.assign(formShader.uniforms, uniforms);
        
        screen.render();


        // Screen pass - draw the light and form

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        copyShader.bind();

        Object.assign(copyShader.uniforms, uniforms, {
                view: buffers[0].color[0].bind(0),
                viewRes: viewRes
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

        // NDC dimensions in the range [-1, 1] -> [-(max radius), (max radius)]
        coverAspect(viewSize, viewRes);

        each((buffer) => buffer.shape = viewRes, buffers);
    }


    // Go

    self.addEventListener('resize', throttle(resize, 200), false);

    resize();
};
