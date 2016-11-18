import * as colors from '../colors';

export default (player) => {
    player.tracks.main
        .smoothTo({
            to: {
                audioMode: 'frequencies',
                audioScale: 1,
                audioOrder: 0.00001,
                silent: 0,
                soundWarp: 0.000005,
                soundSmooth: 0.3,
                meanFulcrum: 0.35,
                spin: -0.0001,
                ringRadius: 0.5,
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
            time: 210,
            ease: [0, 0, 1]
        });

    player.tracks.lightColor
        .smoothTo({
            to: colors.pink,
            time: 19000,
            ease: [0, 0.95, 1]
        });

    player.tracks.fadeColor
        .smoothTo({
            to: colors.orange,
            time: 19000,
            ease: [0, 0.95, 1]
        });
};