/* global Promise */

import tendrilsDemo from './tendrils/demo';
import animateSVG from 'animate-svg';

import { rootPath } from './utils/';

export default () => {
    const stages = [];

    // Logo build animations

    const logo = document.querySelector('.epok-logo');
    // const logoDraw = logo.querySelector('.epok-logo__draw');
    const logoBuild = logo.querySelector('.epok-logo__build');
    const logoParts = Array.from(logoBuild.children);
    const stagger = 600;
    const curve = (x) => Math.pow(x, 0.6);

    stages[0] = () =>
        Promise.all(logoParts.map((part, p) =>
            new Promise((y) =>
                setTimeout(() => {
                        part.classList.add('epok-show');
                        animateSVG(part, 0.4, part.className.match).then(y);
                    },
                    stagger*curve(p)))));

    // Tendrils setup

    const demo = tendrilsDemo(document.querySelector('canvas'), {
        animate: false,
        track: false,
        keyboard: false,
        use_media: false,
        static_image: rootPath+'build/images/epok.svg'
    });

    Object.assign(demo.tendrils.state, demo.defaultState, {
        flowDecay: 0.001,
        colorMapAlpha: 0.33,
        baseColor: Object.assign(demo.tracks.baseColor, [0, 0, 0, 0.85]),
        flowColor: Object.assign(demo.tracks.flowColor, [1, 1, 1, 0.06]),
        fadeColor: Object.assign(demo.tracks.fadeColor, [0, 0, 0, 0])
    });

    Object.assign(demo.tracks.spawn, {
        radius: 0.55,
        speed: 0
    });

    Object.assign(demo.tracks.blur, {
        radius: 4,
        limit: 0.4
    });

    demo.reset();

    stages[1] = () => {
        setTimeout(demo.restart, 100);

        setTimeout(() => {
                Object.assign(demo.tracks.audio, demo.audioDefaults);
                demo.toggleMedia(true);
                Object.assign(demo.tracks.fadeColor, [0, 0, 0, 0.0025]);
            },
            4000);
    };

    // Sequence
    const go = () => stages[0]().then(stages[1]);

    return {
        go,
        stages
    };
};
