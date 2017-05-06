import * as colors from '../colors';

export default (player, end, audio) => {
    const t = audio.duration*1000;

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
            time: 0.07692307692307693*t,
            ease: [0, 0.4, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.4,
                grow: 0.1
            },
            time: 0.1623931623931624*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.1
            },
            time: 0.23504273504273504*t,
            ease: [0, 0, 1]
        })
        .smoothTo({
            to: {
                grow: 0.3
            },
            time: 0.29914529914529914*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.07264957264957266*t, {
            to: {
                ringRadius: 0.4,
                ringThick: 0.04,
                soundWarp: 0.00004,
                grow: 0.08,
                triangleEdge: 230,
                triangleAlpha: 0.0001
            },
            time: 0.405982905982906*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.01282051282051282*t, {
            to: {
                grow: 0.04,
                growLimit: 1
            },
            time: 0.4444444444444444*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.1111111111111111*t, {
            to: {
                ringRadius: 0.6,
                ringThick: 0.01,
                soundWarp: 0.00001,
                growLimit: 0.4
            },
            time: 0.6068376068376068*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.03418803418803419*t, {
            to: {
                ringThick: 0.05,
                triangleFat: 1,
                triangleEdge: 200,
                grow: -0.003
            },
            time: 0.6794871794871795*t,
            ease: [0, 1, 1]
        })
        .smoothOver(0.02564102564102564*t, {
            to: {
                ringThick: 0.15,
                growLimit: 2
            },
            time: 0.8632478632478633*t,
            ease: [0, 1, 1]
        })
        .smoothOver(0.08547008547008547*t, {
            to: {
                grow: 0.1,
                triangleAlpha: 0
            },
            time: 0.9829059829059829*t,
            ease: [0, 1, 1]
        })
        .smoothTo({
            to: {
                ringRadius: 0.1,
                ringThick: 2.5
            },
            time: 0.9978632478632479*t,
            ease: [0, 0.2, 1],
            call: [end]
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
            time: 0.017094017094017096*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.017094017094017096*t, {
            to: colors.lightBlueB,
            time: 0.3418803418803419*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.042735042735042736*t, {
            to: colors.lightBlueA,
            time: 0.6794871794871795*t,
            ease: [0, 0, 1]
        })
        .smoothOver(0.05982905982905983*t, {
            to: colors.white,
            time: 0.9978632478632479*t,
            ease: [0, 0, 1]
        });
};