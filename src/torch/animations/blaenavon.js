import * as colors from '../colors';

export default (player, end, audio) => {
    const t = audio.duration*1000;

    player.tracks.main
        .to({
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
            time: 500
        })
        .smoothOver(0.006734006734006734*t, {
            to: {
                soundWarp: 1.7
            },
            time: 0.02356902356902357*t,
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
            time: 0.07407407407407407*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                noiseSpeed: 0.0001,
                noiseWarp: 0.03
            },
            time: 0.13468013468013468*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 1.1,
                ringThick: 0.0001,
                soundWarp: 4,
                fadeAlpha: 0.5
            },
            time: 0.16161616161616163*t,
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
            time: 0.20202020202020202*t,
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
            time: 0.2154882154882155*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.06734006734006734*t, {
            to: {
                otherAlpha: 0.00001,
                otherEdge: 3,
                otherRadius: 0.7,
                otherThick: 0.00000001
            },
            time: 0.3501683501683502*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.06734006734006734*t, {
            to: {
                ringRadius: 2,
                otherEdge: 2,
                otherThick: 0.000001
            },
            time: 0.4713804713804714*t,
            ease: [0, 0, 1]
        })
        .over(0.003367003367003367*t, {
            to: {
                ringRadius: 0.1,
                ringThick: 0,
                ringAlpha: 0,
                soundWarp: 0
            },
            time: 0.5622895622895623*t
        })
        .smoothTo({
            to: {
                ringRadius: 0.25,
                ringAlpha: 0.0005,
                soundWarp: 0.1
            },
            time: 0.6195286195286196*t,
            ease: [0, 1, 1]
        })
        .smoothTo({
            to: {
                ringThick: 0.005,
                ringRadius: 0.33
            },
            time: 0.6397306397306397*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                noiseWarp: 0.1
            },
            time: 0.6734006734006734*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                noiseWarp: 0.16,
                otherThick: 0.0001
            },
            time: 0.7070707070707071*t,
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
            time: 0.8080808080808081*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringAlpha: 0.001,
                fadeAlpha: 0.99,
                otherAlpha: -0.00001,
                staticAlpha: 0.05,
                staticScale: 60,
                staticShift: 1
            },
            time: 0.8148148148148149*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.06734006734006734*t, {
            to: {
                ringRadius: 0.4,
                ringAlpha: 0.005,
                ringThick: 0.01,
                noiseWarp: 0.05,
                noiseSpeed: 0.0003,
                staticAlpha: 0.5
            },
            time: 0.9966329966329966*t,
            ease: [0, 0, 1],
            call: [end]
        });

    player.tracks.lightColor
        .smoothTo({
            to: colors.white,
            time: 0.03367003367003367*t,
            ease: [0, 0.95, 1]
        })
        .smoothOver(0.026936026936026935*t, {
            to: colors.lightBlueA,
            time: 0.11447811447811448*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.06734006734006734*t, {
            to: colors.white,
            time: 0.9966329966329966*t,
            ease: [0, 0, 1]
        });

    player.tracks.fadeColor
        .smoothTo({
            to: colors.lightBlueA,
            time: 0.03367003367003367*t,
            ease: [0, 0.95, 1]
        })
        .smoothOver(0.026936026936026935*t, {
            to: colors.darkBlue,
            time: 0.11447811447811448*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.06734006734006734*t, {
            to: colors.white,
            time: 0.9966329966329966*t,
            ease: [0, 0, 1]
        });
};