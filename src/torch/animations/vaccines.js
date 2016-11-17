import * as colors from '../colors';

export default (player) => {
    player.tracks.main
        .smoothTo({
            to: {
                staticAlpha: 0,
                fadeAlpha: 0,
                noiseSpeed: 0.002
            },
            time: 1500,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.2,
                noiseWarp: 0.1,
                soundWarp: 0.01,
                otherEdge: 150,
                otherRadius: 1
            },
            time: 7200,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                silent: 0
            },
            time: 13000,
            ease: [0, 0.95, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.5,
                otherEdge: 250,
                staticAlpha: 0.02,
                fadeAlpha: 0.96
            },
            time: 15000,
            ease: [0, 0.95, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.7,
                otherEdge: 254,
                staticAlpha: 0.03,
                fadeAlpha: 0.99
            },
            time: 24500,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherRadius: 0.1,
                otherThick: 100,
                ringAlpha: 100
            },
            time: 31000,
            ease: [0, 0, 1]
        })
        .smoothOver(5000, {
            to: {
                ringRadius: 0.95
            },
            time: 44000,
            ease: [0, 0, 1]
        })
        .smoothOver(5000, {
            to: {
                noiseWarp: 0.55,
                noiseScale: 0.1
            },
            time: 49000,
            ease: [0, 0, 1]
        })
        .smoothOver(5000, {
            to: {
                otherRadius: 0.1,
                otherThick: 100
            },
            time: 55000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                fadeAlpha: 0,
                otherThick: 500,
                otherEdge: 154
            },
            time: 60000,
            ease: [0, 0, 1]
        })
        .smoothOver(100, {
            to: {
                otherThick: 0.00001,
                otherRadius: 0.8
            },
            time: 76000,
            ease: [0, 0, 1]
        })
        .smoothOver(3000, {
            to: {
                noiseWarp: 0.2
            },
            time: 80000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                noiseWarp: 0.1
            },
            time: 86000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                fadeAlpha: 0.99
            },
            time: 91000,
            ease: [0, 0, 1]
        })
        .smoothOver(6000, {
            to: {
                ringRadius: 0.4,
                noiseWarp: 0
            },
            time: 110000,
            ease: [0, 0, 1]
        });

    player.tracks.lightColor
        .smoothOver(3000, {
            to: colors.orange,
            time: 15000,
            ease: [0, 0.95, 1]
        })
        .smoothOver(1000, {
            to: colors.white,
            time: 109000,
            ease: [0, 0, 1]
        });

    player.tracks.fadeColor
        .smoothOver(5000, {
            to: colors.lightBlueC,
            time: 28000,
            ease: [0, 0.95, 1]
        })
        .smoothOver(2000, {
            to: colors.lightBlueB,
            time: 45000,
            ease: [0, 0.95, 1]
        })
        .smoothOver(10000, {
            to: colors.darkBlue,
            time: 60000,
            ease: [0, 0, 1]
        })
        .smoothOver(100, {
            to: colors.white,
            time: 91000,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: colors.lightBlueB,
            time: 109000,
            ease: [0, 0, 1]
        });
};