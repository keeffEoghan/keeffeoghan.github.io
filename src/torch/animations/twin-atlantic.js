import * as colors from '../colors';

export default (player, end) => {
    player.tracks.main
        .to({
            to: {
                audioMode: 'frequencies',
                audioScale: 1,
                audioOrder: 1,
                silent: 0.00001,
                soundWarp: 0.1,
                soundSmooth: 0.3,
                meanFulcrum: 0.5,
                ringAlpha: 0.005,
                noiseSpeed: 0.0005,
                noiseWarp: 0,
                otherAlpha: 0,
                otherRadius: 1.2,
                otherThick: 0.0000001,
                otherEdge: 2.5,
                triangleAlpha: 0,
                triangleFat: 0,
                triangleRadius: 100,
                triangleEdge: 3,
                bokehRadius: 7,
                bokehAmount: 40
            },
            time: 500
        })
        .smoothTo({
            to: {
                noiseWarp: 0.06,
            },
            time: 8000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                noiseWarp: 0.15
            },
            time: 18000,
            ease: [0, 0.3, 1]
        })
        .smoothOver(5000, {
            to: {
                ringRadius: 0.6,
                triangleAlpha: 0.0001
            },
            time: 35000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0,
                ringAlpha: 0.015,
                soundWarp: 1.6,
                noiseWarp: 0,
                fadeAlpha: 0.95,
                grow: 0.003,
                spin: 0.002
            },
            time: 50000,
            ease: [0, 0.8, 1]
        })
        .smoothTo({
            to: {
                otherAlpha: 0.00001
            },
            time: 62000,
            ease: [0, 0, 1]
        })
        .smoothOver(80000-71000, {
            to: {
                otherAlpha: 0.001,
                otherThick: 0.000007
            },
            time: 80000,
            ease: [0, 0, 1]
        })
        .smoothOver(105000-89000, {
            to: {
                otherEdge: 1.5,
                triangleEdge: 1.5
            },
            time: 105000,
            ease: [0, 1, 1]
        })
        .smoothTo({
            to: {
                grow: 0.02,
                otherThick: 0.00001
            },
            time: 115000,
            ease: [0, 0.5, 0, 1]
        })
        .smoothTo({
            to: {
                grow: 0.01,
                ringThick: 0.07,
                otherThick: 1,
                otherRadius: 0.6
            },
            time: 122000,
            ease: [0, 1, 1]
        })
        .smoothTo({
            to: {
                ringAlpha: 0.05,
                grow: 0.01,
                otherThick: 0.0001,
                otherRadius: 1,
                otherAlpha: 0.00004,
                otherEdge: 3,
                spin: 0.0008
            },
            time: 139000,
            ease: [0, 1, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.3,
                noiseWarp: 0.25,
                spin: 0.0004
            },
            time: 158000,
            ease: [0, 0.3, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.8,
                ringThick: 0,
                noiseWarp: 0.05,
                triangleAlpha: 0
            },
            time: 166000,
            ease: [0, 0, 1]
        })
        .smoothOver(210000-192000, {
            to: {
                ringRadius: 1,
                grow: -0.002,
                otherThick: 0.1,
                otherAlpha: 0.01,
                otherRadius: 2,
                fadeAlpha: 0.98
            },
            time: 210000,
            ease: [0, 0, 1]
        })
        .smoothOver(246000-229000, {
            to: {
                ringRadius: 1.6,
                noiseWarp: 0.1,
                spin: -0.00004,
                otherRadius: 0.5,
                otherEdge: 1,
                triangleEdge: 1.5
            },
            time: 246000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherRadius: 1,
                otherThick: 0.00001,
                otherAlpha: 0.00001,
                triangleAlpha: 0.00001,
                grow: -0.004
            },
            time: 248000,
            ease: [0, 0, 1]
        })
        .smoothOver(295000-283000, {
            to: {
                ringRadius: 0,
                triangleAlpha: 0,
                grow: -0.001
            },
            time: 295000,
            ease: [0, 0, 1]
        })
        .smoothOver(307500-300000, {
            to: {
                ringAlpha: 20
            },
            time: 307500,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringThick: 5
            },
            time: 308500,
            ease: [0, 0, 1],
            call: [end]
        });

    player.tracks.lightColor
        .smoothTo({
            to: colors.yellow,
            time: 8000,
            ease: [0, 0.95, 1]
        })
        .over(229000-192000, {
            to: colors.white,
            time: 229000
        });

    player.tracks.fadeColor
        .smoothTo({
            to: colors.white,
            time: 8000,
            ease: [0, 0.95, 1]
        })
        .over(16000, {
            to: colors.pink,
            time: 122000
        })
        .to({
            to: colors.orange,
            time: 130000
        });
};