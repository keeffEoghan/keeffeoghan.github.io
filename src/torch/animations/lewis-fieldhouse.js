import * as colors from '../colors';

export default (player) => {
    player.tracks.main
        .smoothTo({
            to: {
                audioMode: 'waveform',
                audioOrder: 0,
                audioScale: 1,
                silent: 0,
                soundWarp: 0.000007,
                soundSmooth: 0.3,
                meanFulcrum: 0.7,
                spin: -0.0001,
                ringRadius: 0.35,
                ringAlpha: 0.5,
                ringThick: 0.01,
                noiseSpeed: 0.001,
                noiseWarp: 0.001,
                otherRadius: 0,
                otherThick: 0,
                otherAlpha: 0.0002,
                otherEdge: 500,
                triangleAlpha: 0,
                triangleEdge: 210,
                staticScale: 70,
                staticSpeed: 0.5,
                staticShift: 0.8,
                staticAlpha: 0.05,
                grow: 0.0001,
                fadeAlpha: 0.91,
                bokehRadius: 4,
                bokehAmount: 40
            },
            time: 210,
            ease: [0, 0, 1]
        })
        .smoothOver(5000, {
            to: {
                ringThick: 0,
                ringAlpha: 0.01,
                grow: 0.003
            },
            time: 8500,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                soundWarp: 0.00004,
                ringRadius: 0.1
            },
            time: 30000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                soundWarp: 0.000055,
                fadeAlpha: 0.93
            },
            time: 40000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                soundWarp: 0.000075,
                ringRadius: 0,
                ringThick: 0.001,
                fadeAlpha: 0.94
            },
            time: 55000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringAlpha: 0.1
            },
            time: 63000,
            ease: [0, 0, 1]
        })
        .smoothOver(10000, {
            to: {
                grow: 0.01
            },
            time: 90000,
            ease: [0, 0, 1]
        })
        .smoothOver(5000, {
            to: {
                otherEdge: 0.01
            },
            time: 114000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherRadius: 0.3
            },
            time: 125000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherRadius: 0.3,
                otherThick: 0.0001,
                otherEdge: 200
            },
            time: 130000,
            ease: [0, 0, 1]
        })
        .smoothOver(6000, {
            to: {
                grow: 0.005,
                growLimit: 1.4
            },
            time: 144000,
            ease: [0, 0, 1]
        })
        .smoothOver(6000, {
            to: {
                otherThick: 0.0001,
            },
            time: 165000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherThick: -0.001,
                grow: -0.003,
                growLimit: -0.3,
                ringRadius: 0.6
            },
            time: 171000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherThick: -0.01,
                otherRadius: 0.1
            },
            time: 181000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherAlpha: 0.00005,
                otherThick: 0.0001,
                otherRadius: 0.7
            },
            time: 183000,
            ease: [0, 0, 1]
        })
        .smoothOver(203000-197000, {
            to: {
                otherAlpha: 0.0005
            },
            time: 203000,
            ease: [0, 0, 1]
        })
        .smoothOver(3000, {
            to: {
                otherAlpha: 0.00001,
                grow: 0.002,
                growLimit: 0,
                ringRadius: 0.3
            },
            time: 210000,
            ease: [0, 0, 1]
        })
        .smoothOver(254000-230000, {
            to: {
                otherRadius: 1.4,
                soundWarp: 0.0001
            },
            time: 254000,
            ease: [0, -0.1, 1.3, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.6,
                ringThick: 0.05,
                otherRadius: 0.01,
                otherThick: 0.003
            },
            time: 258000,
            ease: [0, 1, 0.3, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.4,
                otherThick: -0.0006
            },
            time: 275000,
            ease: [0, 0, 1.6, 1]
        })
        .smoothOver(6000, {
            to: {
                ringRadius: 0.3,
                noiseWarp: 0.08,
                grow: 0.0008
            },
            time: 283000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.6,
                soundWarp: 0.00006,
                meanFulcrum: 0.1
            },
            time: 300000,
            ease: [0, 0, 1]
        })
        .smoothOver(315300-304000, {
            to: {
                ringRadius: 0.3,
                soundWarp: 0.00001
            },
            time: 315300,
            ease: [0, 0.8, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0,
                ringThick: 2
            },
            time: 318000,
            ease: [0, 0.8, 0, 1]
        });

    player.tracks.lightColor
        .smoothTo({
            to: colors.lightBlueC,
            time: 29000,
            ease: [0, 0.95, 1]
        })
        .over(3000, {
            to: colors.yellow,
            time: 210000
        })
        .over(8000, {
            to: colors.white,
            time: 261000
        });

    player.tracks.fadeColor
        .smoothTo({
            to: colors.yellow,
            time: 29000,
            ease: [0, 0.95, 1]
        })
        .over(12000, {
            to: colors.orange,
            time: 165000
        })
        .over(12000, {
            to: colors.yellow,
            time: 261000
        });
};