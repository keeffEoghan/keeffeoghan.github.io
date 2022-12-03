/**
 * Convenience wrapper for a collection of flow lines.
 */

import FlowLine from './';
import reduce from '../../fp/reduce';

export class FlowLines {
  constructor(gl) {
    this.gl = gl;
    this.active = {};
  }

  get(id, options) {
    return (this.active[id] ||
      (this.active[id] = new FlowLine(this.gl, options)));
  }

  trim(...times) {
    return reduce((remaining, flowLine, id, active) =>
        (((flowLine.trim(...times) === 0) && delete active[id])?
          remaining : remaining+1),
      this.active, 0);
  }
}

export default FlowLines;
