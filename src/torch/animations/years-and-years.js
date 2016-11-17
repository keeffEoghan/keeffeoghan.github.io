import * as colors from '../colors';

export default (player) => {
    player.tracks.main
        .smoothTo({
            to: {
                audioMode: 'waveform',
                audioScale: 0.1,
                audioOrder: 2,
                silent: 0.001,
                soundSmooth: 0.3,
                soundWarp: 0.008,
                meanFulcrum: 0.4,
                ringAlpha: 0.1,
                otherAlpha: 0,
                triangleAlpha: 0,
                bokehRadius: 8,
                bokehAmount: 60
            },
            time: 500,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherRadius: 0.4,
                otherThick: -0.01,
                otherEdge: 7
            },
            time: 5000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                noiseWarp: 0.06,
                noiseSpeed: 0.001,
                noiseScale: 0.5,
                grow: 0.0005,
                growLimit: 1.6,
                spin: 0.0003,
                ringRadius: 0,
                ringThick: 0.5
            },
            time: 15000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                fadeAlpha: 0.99
            },
            time: 19000,
            ease: [0, 0, 1]
        })
        .smoothOver(4000, {
            to: {
                soundWarp: 0.05,
                noiseWarp: 0.2,
                otherAlpha: 0.000001
            },
            time: 43000,
            ease: [0, 0, 1]
        })
        .smoothOver(8000, {
            to: {
                noiseWarp: 0.04,
                otherAlpha: 0.0001,
                otherEdge: 5
            },
            time: 94000,
            ease: [0, 0, 1]
        })
        .smoothOver(4000, {
            to: {
                noiseWarp: 0.08,
                soundWarp: 0.025,
                otherRadius: 0,
                otherThick: 10,
                otherEdge: 4
            },
            time: 120000,
            ease: [0, 0, 1]
        })
        .smoothOver(10000, {
            to: {
                otherRadius: 2,
                otherThick: 0.00000001,
                otherEdge: 7.5
            },
            time: 180000,
            ease: [0, 0, 1]
        })
        .smoothOver(8000, {
            to: {
                staticScale: 60,
                staticShift: 0.9
            },
            time: 200000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                noiseWarp: 0.4,
                noiseSpeed: 0.0001,
                ringRadius: 0.7,
                ringThick: 0.15,
                ringAlpha: 0.00001,
                otherEdge: 6,
                otherRadius: 0.8,
                otherThick: 0.0000001,
                otherAlpha: 0.000001
            },
            time: 230000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                grow: -0.0001,
                noiseWarp: 0.8,
                noiseScale: 3,
                ringRadius: 1,
                ringThick: 0.002,
                ringAlpha: 0.00001
            },
            time: 250000,
            ease: [0, 0, 1]
        });

    player.tracks.lightColor
        .smoothTo({
            to: colors.white,
            time: 5000,
            ease: [0, 0.95, 1]
        });

    player.tracks.fadeColor
        .smoothTo({
            to: colors.orange,
            time: 5000,
            ease: [0, 0.95, 1]
        })
        .smoothOver(8000, {
            to: colors.yellow,
            time: 94000,
            ease: [0, 0, 1]
        })
        .smoothOver(30000, {
            to: colors.white,
            time: 250000,
            ease: [0, 0, 1]
        });
};