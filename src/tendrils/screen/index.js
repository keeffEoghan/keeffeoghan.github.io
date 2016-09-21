// Extending `gl-big-triangle` to offer a shorthand for `bind`, `draw`, `unbind`
// (yes, that's what `a-big-triangle` does, but this offers both convenience and
// optimisation options).

import Triangle from 'gl-big-triangle';

export class Screen extends Triangle {
    render() {
        super.bind();
        super.draw();
        super.unbind();
    }
}

export default Screen;
