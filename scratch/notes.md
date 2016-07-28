# To Do

Tendrils:

- Bitmap/spatial inputs
- Lettering stencil
- Map preset inputs to keyboard inputs; for minimal, discoverable UI
- add the [WebGL Stats](//webglstats.com) snippet `<script src="//cdn.webglstats.com/stat.js" defer="defer" async="async"></script>`


# Tools

- Post processing, multiple buffering
    - `gl-post`
- AA
    - `glsl-fxaa`
    - `glsl-aastep`
- Blur
    - `glsl-hash-blur`
    - `glsl-fast-gaussian-blur`
- Audio
    - `web-audio-analyser` - use this, with reference to the below
    - `gl-audio-analyser` - example, but has unneccessary extras
- Color
    - `glsl-hsl2rgb`
- Utils
    - `canvas-fit`
    - `webglew`
    - `raf-loop`
    - `gl-state`
- Optimisation
    - [`glslify-optimize`](https://github.com/hughsk/glslify-optimize)
        - Combined with [`transform-loader`](https://github.com/webpack/transform-loader)?
        - Need to [resolve installation bug first](https://github.com/hughsk/glslify-optimize/issues/2)


# Spatial spawn

- GPU: N-tries at randomly selecting a pixel that passes filter test
    - Spawn texture
    - Filter function (GLSL)
    - Sample texture N times (or less) per frame, until a passing pixel is found
    - +/-
        - Sparse...
        + Handles "fuzzy" cases well (sample at lower res, N-tries for "best" pixel)
