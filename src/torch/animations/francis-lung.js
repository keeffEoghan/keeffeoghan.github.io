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
                ringRadius: 0.1,
                grow: 1
            },
            time: 70000,
            ease: [0, 0, 1]
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
        });
};