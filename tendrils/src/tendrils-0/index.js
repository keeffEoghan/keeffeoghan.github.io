'use strict';

import glContext from 'gl-context';
import FBO from 'gl-fbo';
import Shader from 'gl-shader';
import throttle from 'lodash.throttle';
const glslify = require('glslify');

import Particles from './particles';

export default (canvas) => {
    const gl = glContext(canvas, {
                alpha: true,
                premultipliedAlpha: true,
                preserveDrawingBuffer: true
            },
            render);


    let flow = FBO(gl, [1, 1], { float: true });

    const size = Math.pow(2, 8);
    const shape = [size, size];

    const particles = Particles(gl, {
            shape: shape,

            // Double the number of (vertical neighbour) vertices, to have
            // pairs alternating between previous and current state.
            // (Vertical neighbours, because WebGL iterates column-major.)
            geomShape: [shape[0], shape[1]*2],

            logic: glslify('./logic.frag.glsl'),
            vert: glslify('./render.vert.glsl'),
            frag: glslify('./render.frag.glsl')
        });

    const renderShader = particles.render;

    const flowShader = Shader(gl,
            glslify('./flow.vert.glsl'), glslify('./flow.frag.glsl'));

    particles.populate((u, v, data) => {
        // Position
        data[0] = 0;
        data[1] = 0;


        // Velocity

        let a = Math.random()*Math.PI*2;
        let l = Math.random()*0.02;

        data[2] = Math.cos(a)*l;
        data[3] = Math.sin(a)*l;
    });


    const start = Date.now();
    let time = 0;

    function render() {
        const width = gl.drawingBufferWidth;
        const height = gl.drawingBufferHeight;


        // Physics

        // Disabling blending here is important – if it's still enabled your
        // simulation will behave differently to what you'd expect.
        gl.disable(gl.BLEND);

        let t0 = time;

        time = Date.now()-start;

        particles.step((uniforms) => Object.assign(uniforms, {
            dt: time-t0,
            time,
            start,
            flow: flow.color[0].bind(1),
            flowSize: [width, height],
            flowWeight: 0.8,
            wanderWeight: 0.2
        }));

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);


        // Flow and screen renders

        gl.viewport(0, 0, width, height);
        gl.lineWidth(1);


        // Render to the flow FBO.

        let draw = (uniforms) => Object.assign(uniforms, {
                previous: particles.buffers[1].color[0].bind(1),
                dataShape: shape,
                resolution: [width, height],
                color: [0.25, 0.5, 1, 0.8]
            });

        // flow.bind();
        // particles.render = flowShader;

        // particles.draw(draw, gl.LINES);


        // Render to the screen.

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        particles.render = renderShader;
        particles.draw(draw, gl.LINES);
    }

    function resize() {
        flow.shape = [
                canvas.width = self.innerWidth,
                canvas.height = self.innerHeight
            ];
    }

    self.addEventListener('resize',
        throttle(resize, 100, { leading: true }), false);

    resize();
};
