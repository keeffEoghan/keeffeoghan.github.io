import * as colors from '../colors';

export default (player, end, audio) => {
    const t = audio.duration*1000;

    player.tracks.main
        .to({
            to: {
                audioMode: 'frequencies',
                audioScale: 1,
                audioOrder: 0,
                silent: 0.0000001,
                soundWarp: 0.000003,
                soundSmooth: 0.3,
                meanFulcrum: 0.3,
                ringAlpha: 0.5,
                ringThick: 0.001,
                noiseSpeed: 0.0001,
                noiseWarp: 0,
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
                grow: -0.003,
                fadeAlpha: 0.91,
                bokehRadius: 3,
                bokehAmount: 40
            },
            time: 210
        })
        .smoothTo({
            to: {
                ringRadius: 0.5
            },
            time: 0.024271844660194174*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.08737864077669903*t, {
            to: {
                soundWarp: 0.00004,
                staticAlpha: 0.08
            },
            time: 0.1262135922330097*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringThick: 0.01
            },
            time: 0.1941747572815534*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.6,
                ringThick: 0.001
            },
            time: 0.3106796116504854*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherEdge: 250,
                otherRadius: 0.2,
                otherThick: 0.000000001
            },
            time: 0.3592233009708738*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.0970873786407767*t, {
            to: {
                otherRadius: 15,
                otherThick: 0.0000001
            },
            time: 0.5533980582524272*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherRadius: 60,
                ringRadius: 0.92,
                soundWarp: -0.00002
            },
            time: 0.6116504854368932*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.038834951456310676*t, {
            to: {
                grow: 0.003,
                soundWarp: -0.00005
            },
            time: 0.7766990291262136*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherRadius: 1,
            },
            time: 0.8252427184466019*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherRadius: 1,
                soundWarp: -0.00008
            },
            time: 0.8640776699029126*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.05825242718446602*t, {
            to: {
                soundWarp: -0.001,
                ringAlpha: 50,
                silent: 1,
                fadeAlpha: 1
            },
            time: 0.9999*t,
            ease: [0, 0, 1],
            call: [end]
        });

    player.tracks.lightColor
        .smoothTo({
            to: colors.white,
            time: 1000,
            ease: [0, 0.95, 1]
        });

    player.tracks.fadeColor
        .smoothTo({
            to: colors.white,
            time: 1000,
            ease: [0, 0.95, 1]
        });
};