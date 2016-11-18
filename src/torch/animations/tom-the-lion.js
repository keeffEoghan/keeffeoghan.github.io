import * as colors from '../colors';

export default (player) => {
    player.tracks.main
        .smoothTo({
            to: {
                audioMode: 'frequencies',
                audioScale: 1,
                audioOrder: 0,
                silent: 0.0000001,
                soundWarp: 0.000003,
                soundSmooth: 0.3,
                meanFulcrum: 0.3,
                ringRadius: 0.5,
                ringAlpha: 0.5,
                ringThick: 0.001,
                noiseSpeed: 0.0001,
                noiseWarp: 0,
                otherRadius: 0,
                otherThick: 0,
                otherAlpha: 0.0002,
                otherEdge: 500,
                triangleAlpha: 0,
                triangleEdge: 210,
                staticScale: 150,
                staticSpeed: 0.5,
                staticShift: 0.8,
                staticAlpha: 0.05,
                grow: -0.003,
                fadeAlpha: 0.91,
                bokehRadius: 3,
                bokehAmount: 40
            },
            time: 210,
            ease: [0, 0, 1]
        })
        .smoothOver(9000, {
            to: {
                soundWarp: 0.00004,
                staticAlpha: 0.08
            },
            time: 13000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringThick: 0.01
            },
            time: 20000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.6,
                ringThick: 0.001
            },
            time: 32000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherEdge: 250,
                otherRadius: 0.2,
                otherThick: 0.000000001
            },
            time: 37000,
            ease: [0, 0, 1]
        })
        .smoothOver(10000, {
            to: {
                otherRadius: 15,
                otherThick: 0.0000001
            },
            time: 57000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherRadius: 60,
                ringRadius: 0.92,
                soundWarp: -0.00002
            },
            time: 63000,
            ease: [0, 0, 1]
        })
        .smoothOver(4000, {
            to: {
                grow: 0.003,
                soundWarp: -0.00005
            },
            time: 80000,
            ease: [0, 0, 1]
        })
        .smoothOver(4000, {
            to: {
                otherRadius: 1,
                soundWarp: -0.00008
            },
            time: 89000,
            ease: [0, 0, 1]
        })
        .smoothOver(6000, {
            to: {
                soundWarp: -0.001,
                ringAlpha: 50,
                silent: 1,
                fadeAlpha: 1
            },
            time: 103000,
            ease: [0, 0, 1]
        });

    player.tracks.lightColor
        .smoothTo({
            to: colors.white,
            time: 1000,
            ease: [0, 0.95, 1]
        });

    player.tracks.fadeColor
        .smoothTo({
            to: colors.white,
            time: 1000,
            ease: [0, 0.95, 1]
        });
};