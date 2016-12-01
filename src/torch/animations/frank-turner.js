import * as colors from '../colors';

export default (player, end, audio) => {
    const t = audio.duration*1000;

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
        .smoothOver(0.004901960784313725*t, {
            to: {
                noiseWarp: 0.06,
                grow: 1
            },
            time: 0.0784313725490196*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.004901960784313725*t, {
            to: {
                ringAlpha: 0.02,
                noiseWarp: 0.1,
                ringRadius: -0.2
            },
            time: 0.1568627450980392*t,
            ease: [0, -0.3, 1.3, 1]
        })
        .smoothOver(0.004901960784313725*t, {
            to: {
                ringAlpha: 0.25,
            },
            time: 0.22549019607843138*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.004901960784313725*t, {
            to: {
                ringAlpha: 0.1,
                soundWarp: 0.012
            },
            time: 0.29901960784313725*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.00980392156862745*t, {
            to: {
                ringAlpha: 0.01,
                soundWarp: 0.01
            },
            time: 0.37745098039215685*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                triangleEdge: 200,
                triangleAlpha: -0.001,
                triangleRadius: -1,
                fadeAlpha: 0.93
            },
            time: 0.47549019607843135*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: -0.1,
                fadeAlpha: 0.99
            },
            time: 0.5049019607843137*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: -0.1,
                fadeAlpha: 0.99
            },
            time: 0.5147058823529411*t,
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
            time: 0.5343137254901961*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.5,
                ringThick: 0.03
            },
            time: 0.5784313725490197*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringThick: 0.1,
                noiseWarp: 0.2,
                noiseSpeed: 0.001,
                fadeAlpha: 0.9
            },
            time: 0.5882352941176471*t,
            ease: [0, 1, 1]
        })
        .smoothOver(0.0196078431372549*t, {
            to: {
                ringRadius: 0,
                ringThick: 0.7,
                staticAlpha: 0.3
            },
            time: 0.6715686274509803*t,
            ease: [0, 1, 1]
        })
        .smoothOver(0.0196078431372549*t, {
            to: {
                ringThick: 0.95,
                triangleEdge: 210,
                triangleFat: 0.01,
                triangleRadius: -5,
                otherThick: -0.000001
            },
            time: 0.7401960784313726*t,
            ease: [0, 1, 1]
        })
        .smoothTo({
            to: {
                ringThick: 1.8
            },
            time: 0.8823529411764706*t,
            ease: [0, 1, 1]
        })
        .smoothOver(0.06372549019607843*t, {
            to: {
                triangleRadius: -10,
                otherEdge: 0
            },
            time: 0.9852941176470589*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                otherEdge: 1
            },
            time: 0.9950980392156863*t,
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
            to: colors.darkBlue,
            time: 1000,
            ease: [0, 0.95, 1]
        })
        .smoothOver(0.049019607843137254*t, {
            to: colors.lightBlueA,
            time: 0.5343137254901961*t,
            ease: [0, 0.95, 1]
        })
        .smoothOver(0.004901960784313725*t, {
            to: colors.darkBlue,
            time: 0.5784313725490197*t,
            ease: [0, 0.95, 1]
        });
};