import * as colors from '../colors';

export default (player) => {
    player.tracks.main
        .smoothTo({
            to: {
                audioMode: 'waveform',
                audioScale: 1000,
                audioOrder: 0,
                silent: 0.0000001,
                soundWarp: 0.005,
                soundSmooth: 0.3,
                meanFulcrum: 0.6,
                ringRadius: 0,
                ringAlpha: 0.5,
                ringThick: 0.1,
                noiseSpeed: 0.0001,
                noiseWarp: 0,
                otherRadius: 3,
                otherThick: -0.0000001,
                otherAlpha: -0.00001,
                otherEdge: 500,
                triangleAlpha: 0,
                triangleEdge: 500,
                staticScale: 100,
                staticSpeed: 0.5,
                staticShift: 0.5,
                staticAlpha: 0.05,
                grow: 0,
                fadeAlpha: 0.9,
                bokehRadius: 7,
                bokehAmount: 40
            },
            time: 1800,
            ease: [0, 0, 1]
        })
        .smoothOver(1000, {
            to: {
                noiseWarp: 0.06,
                grow: 1
            },
            time: 16000,
            ease: [0, 0, 1]
        })
        .smoothOver(1000, {
            to: {
                ringAlpha: 0.02,
                noiseWarp: 0.1,
                ringRadius: -0.2
            },
            time: 32000,
            ease: [0, -0.3, 1.3, 1]
        })
        .smoothOver(1000, {
            to: {
                ringAlpha: 0.25,
            },
            time: 46000,
            ease: [0, 0, 1]
        })
        .smoothOver(1000, {
            to: {
                ringAlpha: 0.1,
                soundWarp: 0.012
            },
            time: 61000,
            ease: [0, 0, 1]
        })
        .smoothOver(2000, {
            to: {
                ringAlpha: 0.01,
                soundWarp: 0.01
            },
            time: 77000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                triangleEdge: 200,
                triangleAlpha: -0.001,
                triangleRadius: -1,
                fadeAlpha: 0.93
            },
            time: 97000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: -0.1,
                fadeAlpha: 0.99
            },
            time: 103000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: -0.1,
                fadeAlpha: 0.99
            },
            time: 105000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0,
                ringThick: 0.15,
                triangleEdge: 500,
                otherEdge: 0.22,
                staticScale: 40
            },
            time: 109000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.5,
                ringThick: 0.03
            },
            time: 118000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringThick: 0.1,
                noiseWarp: 0.2,
                noiseSpeed: 0.001,
                fadeAlpha: 0.9
            },
            time: 120000,
            ease: [0, 1, 1]
        })
        .smoothOver(4000, {
            to: {
                ringRadius: 0,
                ringThick: 0.7,
                staticAlpha: 0.3
            },
            time: 137000,
            ease: [0, 1, 1]
        })
        .smoothOver(4000, {
            to: {
                ringThick: 0.95,
                triangleEdge: 210,
                triangleFat: 0.01,
                triangleRadius: -5,
                otherThick: -0.000001
            },
            time: 151000,
            ease: [0, 1, 1]
        })
        .smoothTo({
            to: {
                ringThick: 1.8
            },
            time: 180000,
            ease: [0, 1, 1]
        })
        .smoothOver(13000, {
            to: {
                triangleRadius: -10,
                otherEdge: 0
            },
            time: 201000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherEdge: 1
            },
            time: 203000,
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
            to: colors.darkBlue,
            time: 1000,
            ease: [0, 0.95, 1]
        })
        .smoothOver(10000, {
            to: colors.lightBlueA,
            time: 109000,
            ease: [0, 0.95, 1]
        })
        .smoothOver(1000, {
            to: colors.darkBlue,
            time: 118000,
            ease: [0, 0.95, 1]
        });
};