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
        .to({
            to: {
            },
            time: 261000,
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