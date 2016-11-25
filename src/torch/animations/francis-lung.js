import * as colors from '../colors';

export default (player, end) => {
    player.tracks.main
        .to({
            to: {
                audioMode: 'waveform',
                audioOrder: 3,
                audioScale: 1,
                silent: 0.00001,
                soundWarp: 0.000003,
                meanFulcrum: 0.7,
                ringAlpha: 0.01,
                noiseSpeed: 0.0001,
                noiseWarp: 0,
                otherAlpha: 0,
                otherEdge: 0.01,
                triangleAlpha: 0,
                triangleFat: 0.01,
                triangleEdge: 0.01,
                grow: -2,
                jitter: 0,
                fadeAlpha: 0,
                bokehRadius: 7,
                bokehAmount: 40
            },
            time: 500
        })
        .smoothTo({
            to: {
                soundWarp: 0.00002,
                ringRadius: 0.7,
                fadeAlpha: 0.95,
                grow: -0.1
            },
            time: 18000,
            ease: [0, 0.4, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.4,
                grow: 0.1
            },
            time: 38000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.1
            },
            time: 55000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                grow: 0.3
            },
            time: 70000,
            ease: [0, 0, 1]
        })
        .smoothOver(95000-78000, {
            to: {
                ringRadius: 0.4,
                ringThick: 0.04,
                soundWarp: 0.00004,
                grow: 0.08,
                triangleEdge: 230,
                triangleAlpha: 0.0001
            },
            time: 95000,
            ease: [0, 0, 1]
        })
        .smoothOver(3000, {
            to: {
                grow: 0.04,
                growLimit: 1
            },
            time: 104000,
            ease: [0, 0, 1]
        })
        .smoothOver(142000-116000, {
            to: {
                ringRadius: 0.6,
                ringThick: 0.01,
                soundWarp: 0.00001,
                growLimit: 0.4
            },
            time: 142000,
            ease: [0, 0, 1]
        })
        .smoothOver(159000-151000, {
            to: {
                ringThick: 0.05,
                triangleFat: 1,
                triangleEdge: 200,
                grow: -0.003
            },
            time: 159000,
            ease: [0, 1, 1]
        })
        .smoothOver(202000-196000, {
            to: {
                ringThick: 0.15,
                growLimit: 2
            },
            time: 202000,
            ease: [0, 1, 1]
        })
        .smoothOver(230000-210000, {
            to: {
                grow: 0.1,
                triangleAlpha: 0
            },
            time: 230000,
            ease: [0, 1, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.1,
                ringThick: 2.5
            },
            time: 233500,
            ease: [0, 0.2, 1]
        });

    player.tracks.lightColor
        .to({
            to: colors.white,
            time: 500
        });

    player.tracks.fadeColor
        .to({
            to: colors.none,
            time: 500
        })
        .smoothTo({
            to: colors.lightBlueC,
            time: 4000,
            ease: [0, 0, 1]
        })
        .smoothOver(4000, {
            to: colors.lightBlueB,
            time: 80000,
            ease: [0, 0, 1]
        })
        .smoothOver(10000, {
            to: colors.lightBlueA,
            time: 159000,
            ease: [0, 0, 1]
        })
        .smoothOver(14000, {
            to: colors.white,
            time: 233500,
            ease: [0, 0, 1]
        });
};