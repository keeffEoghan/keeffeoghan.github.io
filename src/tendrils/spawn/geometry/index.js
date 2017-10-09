/**
 * Pretty quick thing to spawn particles from triangulated geometry (triangles,
 * for simple Platonic forms).
 *
 * @todo Clean up
 */

import geometry from 'gl-geometry';
import shader from 'gl-shader';
import { vec2 } from 'gl-matrix';

import * as spawnPixels from '../pixels';

import frag from '../pixels/bright-sample.frag';
// @todo Would like to direct with color, but doesn't seem to work with white...
// import frag from '../pixels/color-sample.frag';

import geometryVert from '../../geom/vert/index.vert';
import geometryFrag from '../../geom/frag/index.frag';


export const defaults = () => ({
    shader: [spawnPixels.defaults().shader[0], frag],
    drawShader: [geometryVert, geometryFrag],
    color: [1, 1, 1, 1],
    positions: Array(2*3*1).fill(0)
});

export class GeometrySpawner extends spawnPixels.PixelSpawner {
    constructor(gl, options) {
        const params = Object.assign(defaults(), options);

        super(gl, Object.assign(defaults(), options));

        this.geometry = geometry(gl);

        this.drawShader = ((Array.isArray(params.drawShader))?
                shader(this.gl, ...params.drawShader)
            :   params.drawShader);

        this.color = params.color;
        this.positions = params.positions;
    }

    shuffle() {
        // @todo Make all this more open/configurable - not worth the time now
        const size = 2;
        const num = 3;
        const step = size*num;
        const tau = Math.PI*2;

        let rad;
        const radius = () => 0.25+(Math.random()*1.3);

        // Triangles, one vertex always in the center
        for(let t = this.positions.length-1; t >= 0; t -= step) {
            const angle = tau*Math.random();

            const range = tau*
                    // Minimum range offset
                    (0.01+
                        // Acute or obtuse?
                        (Math.round(Math.random())*0.25)+
                        // Range of size
                        (Math.random()*0.03));

            rad = radius();
            this.positions[t-3] = Math.cos(angle-range)*rad;
            this.positions[t-2] = Math.sin(angle-range)*rad;

            rad = radius();
            this.positions[t-1] = Math.cos(angle+range)*rad;
            this.positions[t-0] = Math.sin(angle+range)*rad;

            // Skipping the center vertex, stays at [0, 0]
        }

        this.geometry.attr('position', this.positions, { size });

        return this;
    }

    spawn(tendrils, ...rest) {
        vec2.scale(this.buffer.shape, tendrils.viewRes, 0.2);
        // this.buffer.shape = tendrils.viewRes;

        this.buffer.bind();
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        this.drawShader.bind();

        this.drawShader.uniforms.color = this.color;
        this.drawShader.uniforms.viewSize = tendrils.viewSize;

        this.geometry.bind(this.drawShader);
        this.geometry.draw();
        this.geometry.unbind();

        return super.spawn(tendrils, ...rest);
    }
}

export default GeometrySpawner;
