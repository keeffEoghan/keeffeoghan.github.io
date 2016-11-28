import * as colors from '../colors';

export default (player, end) => {
    player.tracks.main
        .to({
            to: {
                audioMode: 'frequencies',
                audioScale: 1,
                audioOrder: 0,
                silent: 0,
                soundWarp: 0.000005,
                soundSmooth: 0.3,
                meanFulcrum: 0.35,
                spin: -0.0001,
                ringAlpha: 0.5,
                ringThick: 0.01,
                noiseSpeed: 0.0001,
                noiseWarp: 0.001,
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
                grow: 0.0025,
                fadeAlpha: 0.91,
                bokehRadius: 6,
                bokehAmount: 40
            },
            time: 210
        })
        .smoothTo(2500, {
            to: {
                ringRadius: 0.5,
            },
            time: 210
        })
        .smoothOver(8000, {
            to: {
                soundWarp: 0.00002,
                silent: 0.0000002
            },
            time: 19000,
            ease: [0, 0, 1]
        })
        .smoothOver(4000, {
            to: {
                fadeAlpha: 0.98
            },
            time: 25000,
            ease: [0, 0, 1]
        })
        .smoothOver(3000, {
            to: {
                noiseWarp: 0.2,
                noiseSpeed: 0.001
            },
            time: 40000,
            ease: [0, 0, 1]
        })
        .smoothOver(6000, {
            to: {
                otherEdge: 210
            },
            time: 60000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherThick: 0.0025
            },
            time: 67000,
            ease: [0, 0, 1]
        })
        .smoothOver(5000, {
            to: {
                otherThick: 0.0008,
                otherEdge: 254
            },
            time: 70000,
            ease: [0, 0, 1]
        })
        .smoothOver(10000, {
            to: {
                ringRadius: 0.7,
                otherThick: 0.00001,
                otherRadius: 200
            },
            time: 90000,
            ease: [0, 0, 1]
        })
        .smoothOver(5000, {
            to: {
                staticAlpha: 0
            },
            time: 99000,
            ease: [0, 0, 1]
        })
        .smoothOver(3000, {
            to: {
                grow: 0.1
            },
            time: 122000,
            ease: [0, 0, 1]
        })
        .smoothOver(3000, {
            to: {
                grow: 0.3
            },
            time: 142000,
            ease: [0, 0, 1]
        })
        .smoothOver(6000, {
            to: {
                soundWarp: 0.000001,
                noiseWarp: 0.001
            },
            time: 179000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                grow: 0.4,
                ringAlpha: 0,
                noiseWarp: 0.00001
            },
            time: 184000,
            ease: [0, 0, 1]
        })
        .smoothOver(500, {
            to: {
                ringAlpha: 5,
                noiseWarp: 0.0001,
                spin: 0.0002
            },
            time: 187500,
            ease: [0, 0, 1]
        })
        .smoothOver(6000, {
            to: {
                ringThick: 0.1,
                noiseWarp: 0.0003,
                soundWarp: 0.00003,
                otherThick: 0.003,
                otherRadius: 0.0000001
            },
            time: 201000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                noiseWarp: 0.002,
                spin: -0.0002
            },
            time: 207000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                noiseWarp: 0.1
            },
            time: 217000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                soundWarp: 0.00005,
                grow: 0.2,
                growLimit: 1.2,
                ringThick: 0.03,
                fadeAlpha: 0.93,
                jitter: 0
            },
            time: 220000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                grow: 0.5,
                growLimit: 1.8
            },
            time: 236000,
            ease: [0, 0, 1]
        })
        .smoothOver(257000-254000, {
            to: {
                grow: 1,
                growLimit: 3,
                ringThick: 2
            },
            time: 257000,
            ease: [0, 0, 1],
            call: [end]
        });

    player.tracks.lightColor
        .smoothTo({
            to: colors.pink,
            time: 19000,
            ease: [0, 0.95, 1]
        })
        .smoothOver(3000, {
            to: colors.lightBlueA,
            time: 56000,
            ease: [0, 0, 1]
        })
        .smoothOver(3000, {
            to: colors.yellow,
            time: 90000,
            ease: [0, 0, 1]
        })
        .smoothOver(5000, {
            to: colors.orange,
            time: 142000,
            ease: [0, 0, 1]
        })
        .smoothOver(8000, {
            to: colors.white,
            time: 257000,
            ease: [0, 0, 1]
        });

    player.tracks.fadeColor
        .smoothTo({
            to: colors.orange,
            time: 19000,
            ease: [0, 0.95, 1]
        })
        .smoothOver(5000, {
            to: colors.white,
            time: 142000,
            ease: [0, 0, 1]
        })
        .smoothOver(500, {
            to: colors.lightBlueC,
            time: 187500,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: colors.lightBlueB,
            time: 207000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: colors.lightBlueA,
            time: 219000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: colors.orange,
            time: 220000,
            ease: [0, 0, 1]
        })
        .smoothOver(8000, {
            to: colors.white,
            time: 257000,
            ease: [0, 0, 1]
        });
};