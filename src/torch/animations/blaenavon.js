import * as colors from '../colors';

export default (player) => {
    player.tracks.main
        .smoothTo({
            to: {
                audioMode: 'waveform',
                audioScale: 1,
                audioOrder: 1,
                silent: 0.00001,
                soundWarp: 0.1,
                soundSmooth: 0.3,
                meanFulcrum: 0.3,
                ringAlpha: 0.005,
                noiseSpeed: 0.0001,
                noiseWarp: 0.04,
                otherAlpha: 0,
                otherEdge: 10000,
                triangleAlpha: 0,
                triangleEdge: 10000,
                bokehRadius: 7,
                bokehAmount: 40
            },
            time: 500,
            ease: [0, 0, 1]
        })
        .smoothOver(1000, {
            to: {
                soundWarp: 1.7
            },
            time: 3500,
            ease: [0, 1, 1]
        })
        .smoothTo({
            to: {
                silent: 0,
                spin: 0.001,
                ringRadius: 0.35,
                ringThick: 0.001,
                soundWarp: 8
            },
            time: 11000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                noiseSpeed: 0.0001,
                noiseWarp: 0.03
            },
            time: 20000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 1.1,
                ringThick: 0.0001,
                soundWarp: 4,
                fadeAlpha: 0.5
            },
            time: 24000,
            ease: [0, 1, 1]
        })
        .smoothTo({
            to: {
                grow: -0.0006,
                silent: 0.01,
                triangleAlpha: 0.0001,
                triangleEdge: 10,
                triangleRadius: 10
            },
            time: 30000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                grow: 0.0006,
                silent: 1,
                triangleAlpha: 0.0001,
                triangleEdge: 10,
                triangleRadius: 10,
                triangleFat: 0.1,
                fadeAlpha: 0.92
            },
            time: 30000,
            ease: [0, 0, 1]
        })
        .smoothOver(10000, {
            to: {
                otherAlpha: 0.00001,
                otherEdge: 3,
                otherRadius: 0.7,
                otherThick: 0.00000001
            },
            time: 52000,
            ease: [0, 0, 1]
        })
        .smoothOver(10000, {
            to: {
                ringRadius: 2,
                otherEdge: 2,
                otherThick: 0.000001
            },
            time: 70000,
            ease: [0, 0, 1]
        })
        .over(500, {
            to: {
                ringRadius: 0.1,
                ringThick: 0,
                ringAlpha: 0,
                soundWarp: 0
            },
            time: 83500
        })
        .smoothTo({
            to: {
                ringRadius: 0.25,
                ringAlpha: 0.00001,
                soundWarp: 0.1
            },
            time: 92000,
            ease: [0, 1, 1]
        })
        .smoothTo({
            to: {
                ringThick: 0.000001,
                ringRadius: 0.33
            },
            time: 95000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                noiseWarp: 0.1
            },
            time: 100000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                noiseWarp: 0.16,
                otherThick: 0.0001
            },
            time: 105000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                soundWarp: 0.02,
                noiseWarp: 0.4,
                noiseScale: 0.25,
                noiseSpeed: 0.001,
                otherRadius: 0.3,
                otherThick: 0.1,
                grow: -0.002
            },
            time: 120000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringAlpha: 0.0001,
                fadeAlpha: 0.99,
                otherAlpha: -0.00001,
                staticAlpha: 0.05,
                staticScale: 60,
                staticShift: 1
            },
            time: 121000,
            ease: [0, 0, 1]
        })
        .smoothOver(10000, {
            to: {
                ringRadius: 0.4,
                ringAlpha: 0.005,
                ringThick: 0.0000001,
                noiseWarp: 0.05,
                noiseSpeed: 0.0003
            },
            time: 148000,
            ease: [0, 0, 1]
        });

    player.tracks.lightColor
        .smoothTo({
            to: colors.white,
            time: 5000,
            ease: [0, 0.95, 1]
        })
        .smoothOver(4000, {
            to: colors.lightBlueA,
            time: 17000,
            ease: [0, 0, 1]
        })
        .smoothOver(10000, {
            to: colors.white,
            time: 148000,
            ease: [0, 0, 1]
        });

    player.tracks.fadeColor
        .smoothTo({
            to: colors.lightBlueA,
            time: 5000,
            ease: [0, 0.95, 1]
        })
        .smoothOver(4000, {
            to: colors.darkBlue,
            time: 17000,
            ease: [0, 0, 1]
        })
        .smoothOver(10000, {
            to: colors.white,
            time: 148000,
            ease: [0, 0, 1]
        });
};