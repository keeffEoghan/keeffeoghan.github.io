import tendrilsDemo from './tendrils/demo';

export default () => {
    const demo = tendrilsDemo(document.querySelector('canvas'), false);

    Object.assign(demo.tendrils.state, demo.defaultState, {
        flowDecay: 0.001,
        colorMapAlpha: 0.2,
        baseColor: Object.assign(demo.tracks.baseColor, [0, 0, 0, 0.85]),
        flowColor: Object.assign(demo.tracks.flowColor, [1, 1, 1, 0.05]),
        fadeColor: Object.assign(demo.tracks.fadeColor, [0, 0, 0, 0])
    });

    Object.assign(demo.tracks.spawn, {
        radius: 0.1,
        speed: 0.05
    });

    Object.assign(demo.tracks.blur, {
        radius: 4,
        limit: 0.3
    });

    demo.reset();
    setTimeout(demo.restart, 2000);

    setTimeout(() => Object.assign(demo.tracks.audio, demo.audioDefaults),
        5000);
};
