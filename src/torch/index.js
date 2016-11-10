import glContext from 'gl-context';
import FBO from 'gl-fbo';
import throttle from 'lodash/throttle';
import mapRange from 'range-fit';
import vec2 from 'gl-matrix/src/gl-matrix/vec2';
import shader from 'gl-shader';
import dat from 'dat-gui';

import Timer from '../tendrils/timer';

import { coverAspect } from '../tendrils/utils/aspect';

import each from '../fp/each';

export default (canvas, settings, debug) => {
    const gl = glContext(canvas, { preserveDrawingBuffer: true }, render);

    const timer = new Timer(0);

    const viewRes = [0, 0];
    const viewSize = [0, 0];

    const buffers = [FBO(this.gl, [1, 1])];

    // The main loop
    function render() {
        const dt = timer.tick().dt;
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
