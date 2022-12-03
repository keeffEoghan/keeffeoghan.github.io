import * as colors from '../colors';

export default (player, end, audio) => {
  const t = audio.duration*1000;

  player.tracks.main
    .to({
      to: {
        audioMode: 'frequencies',
        audioScale: 1,
        audioOrder: 0,
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
      time: 210
    })
    .smoothOver(0.0311284046692607*t, {
      to: {
        soundWarp: 0.00002,
        silent: 0.0000002
      },
      time: 0.07392996108949416*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.01556420233463035*t, {
      to: {
        fadeAlpha: 0.98
      },
      time: 0.09727626459143969*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.011673151750972763*t, {
      to: {
        noiseWarp: 0.2,
        noiseSpeed: 0.001
      },
      time: 0.1556420233463035*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.023346303501945526*t, {
      to: {
        otherEdge: 210
      },
      time: 0.23346303501945526*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        otherThick: 0.0025
      },
      time: 0.2607003891050584*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.019455252918287938*t, {
      to: {
        otherThick: 0.0008,
        otherEdge: 254
      },
      time: 0.2723735408560311*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.038910505836575876*t, {
      to: {
        ringRadius: 0.7,
        otherThick: 0.00001,
        otherRadius: 200
      },
      time: 0.35019455252918286*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.019455252918287938*t, {
      to: {
        staticAlpha: 0
      },
      time: 0.3852140077821012*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.011673151750972763*t, {
      to: {
        grow: 0.1
      },
      time: 0.47470817120622566*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.011673151750972763*t, {
      to: {
        grow: 0.3
      },
      time: 0.5525291828793775*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.023346303501945526*t, {
      to: {
        soundWarp: 0.000001,
        noiseWarp: 0.001
      },
      time: 0.6964980544747081*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        grow: 0.4,
        ringAlpha: 0,
        noiseWarp: 0.00001
      },
      time: 0.7159533073929961*t,
      ease: [0, 0, 1]
    })
    .smoothOver(500, {
      to: {
        ringAlpha: 5,
        noiseWarp: 0.0001,
        spin: 0.0002
      },
      time: 0.7295719844357976*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.023346303501945526*t, {
      to: {
        ringThick: 0.1,
        noiseWarp: 0.0003,
        soundWarp: 0.00003,
        otherThick: 0.003,
        otherRadius: 0.0000001
      },
      time: 0.7821011673151751*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        noiseWarp: 0.002,
        spin: -0.0002
      },
      time: 0.8054474708171206*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        noiseWarp: 0.1
      },
      time: 0.8443579766536965*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        soundWarp: 0.00005,
        grow: 0.2,
        growLimit: 1.2,
        ringThick: 0.03,
        fadeAlpha: 0.93,
        jitter: 0
      },
      time: 0.8560311284046692*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        grow: 0.5,
        growLimit: 1.8
      },
      time: 0.9182879377431906*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.011673151750972763*t, {
      to: {
        grow: 1,
        growLimit: 3,
        ringThick: 2
      },
      time: 0.9999*t,
      ease: [0, 0, 1],
      call: [end]
    });

  player.tracks.lightColor
    .smoothTo({
      to: colors.pink,
      time: 0.07392996108949416*t,
      ease: [0, 0.95, 1]
    })
    .smoothOver(0.011673151750972763*t, {
      to: colors.lightBlueA,
      time: 0.2178988326848249*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.011673151750972763*t, {
      to: colors.yellow,
      time: 0.35019455252918286*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.019455252918287938*t, {
      to: colors.orange,
      time: 0.5525291828793775*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.0311284046692607*t, {
      to: colors.white,
      time: 0.9999*t,
      ease: [0, 0, 1]
    });

  player.tracks.fadeColor
    .smoothTo({
      to: colors.orange,
      time: 0.07392996108949416*t,
      ease: [0, 0.95, 1]
    })
    .smoothOver(0.019455252918287938*t, {
      to: colors.white,
      time: 0.5525291828793775*t,
      ease: [0, 0, 1]
    })
    .smoothOver(500, {
      to: colors.lightBlueC,
      time: 0.7295719844357976*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: colors.lightBlueB,
      time: 0.8054474708171206*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: colors.lightBlueA,
      time: 0.8521400778210116*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: colors.orange,
      time: 0.8560311284046692*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.0311284046692607*t, {
      to: colors.white,
      time: 0.9999*t,
      ease: [0, 0, 1]
    });
};