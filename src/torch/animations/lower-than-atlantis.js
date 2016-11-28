import * as colors from '../colors';

export default (player, end) => {
    player.tracks.main
        .to({
            to: {
                audioMode: 'waveform',
                audioScale: 1,
                audioOrder: 1,
                silent: 0.00001,
                soundWarp: 0.01,
                soundSmooth: 0.3,
                meanFulcrum: 0.3,
                ringAlpha: 0.1,
                noiseSpeed: 0.0001,
                noiseWarp: 0.04,
                otherAlpha: 0,
                otherEdge: 10,
                triangleAlpha: 0,
                triangleEdge: 10,
                bokehRadius: 1,
                bokehAmount: 0.1
            },
            time: 500
        })
        .smoothTo({
            to: {
                ringRadius: 0.25,
                noiseWarp: 0.3
            },
            time: 11000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringThick: 0.2,
                soundWarp: 0.003
            },
            time: 22000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                bokehRadius: 12,
                ringAlpha: 100
            },
            time: 45000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherAlpha: 0.01
            },
            time: 55000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                noiseSpeed: 0.001
            },
            time: 60000,
            ease: [0, 0, 1]
        })
        .smoothOver(2000, {
            to: {
                ringRadius: 0.5,
                soundWarp: 0.0005,
                otherEdge: 20,
                otherRadius: 10
            },
            time: 80000,
            ease: [0, 0, 1]
        })
        .smoothOver(2000, {
            to: {
                noiseWarp: 0.6,
                otherEdge: 10,
                otherThick: 0.0000002
            },
            time: 113000,
            ease: [0, 0, 1]
        })
        .smoothOver(4000, {
            to: {
                ringRadius: 0.8,
                noiseWarp: 1,
                otherThick: 0.000001,
                otherAlpha: 0.00001
            },
            time: 138000,
            ease: [0, 0, 1]
        })
        .smoothOver(6000, {
            to: {
                ringThick: 0.000001
            },
            time: 156000,
            ease: [0, 0, 1]
        })
        .smoothOver(5000, {
            to: {
                ringRadius: 1,
                noiseWarp: 10
            },
            time: 178000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                noiseScale: 1
            },
            time: 187000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                noiseScale: 10
            },
            time: 197000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                noiseScale: 0.01,
                noiseWarp: 30
            },
            time: 250000,
            ease: [0, 0.3, 1]
        })
        .smoothTo({
            to: {
                ringThick: 1
            },
            time: 256000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringThick: 60
            },
            time: 261000,
            ease: [0, 0, 1],
            call: [end]
        });

    player.tracks.lightColor
        .smoothTo({
            to: colors.white,
            time: 5000,
            ease: [0, 0.95, 1]
        });

    player.tracks.fadeColor
        .smoothTo({
            to: colors.lightBlueA,
            time: 5000,
            ease: [0, 0.95, 1]
        });
};