/**
 * Pretty quick thing to spawn particles from triangulated geometry (triangles,
 * for simple Platonic forms).
 *
 * @todo Clean up
 */

import geometry from 'gl-geometry';
import shader from 'gl-shader';
import vec2 from 'gl-matrix/src/gl-matrix/vec2';

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
        const positions = this.positions;
        const size = 2;
        const total = 1;
        const range = 0.8;
        const offset = total-range;

        // Skipping every third vertex, so it's always in the center
        for(let i = positions.length-1; i >= 0;
                i = ((Math.floor((i-1)/size)%3)? i-1 : i-1-size)) {
            positions[i] = ((Math.random()*range))+
                ((Math.random() < 0.5)? offset : -total);
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
