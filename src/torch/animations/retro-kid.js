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
        grow: -0.001,
        fadeAlpha: 0.91,
        bokehRadius: 3,
        bokehAmount: 40
      },
      time: 210
    })
    .smoothTo({
      to: {
        ringRadius: 0.5,
        noiseWarp: 0.1
      },
      time: 0.056*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.0475*t, {
      to: {
        soundWarp: 0.00004,
        staticAlpha: 0.01
      },
      time: 0.094*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        ringThick: 0.01
      },
      time: 0.145*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        ringRadius: 0.6,
        ringThick: 0.001
      },
      time: 0.1888*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        otherEdge: 250,
        otherRadius: 20,
        otherThick: 0.0000001
      },
      time: 0.1592*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.052789*t, {
      to: {
        otherRadius: 15,
        otherThick: 0.0000001
      },
      time: 0.2748*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        otherRadius: 60,
        ringRadius: 1,
        soundWarp: -0.00002
      },
      time: 0.33257*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.0211*t, {
      to: {
        grow: 0.003,
        soundWarp: -0.00005
      },
      time: 0.4223*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        otherRadius: 1,
      },
      time: 0.51777*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        otherRadius: 1,
        soundWarp: -0.00008
      },
      time: 0.53623*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        otherRadius: 10,
        soundWarp: 0.00008
      },
      time: 0.6305468*t,
      ease: [0, 0, 1]
    })
    .smoothOver((0.81143*t)-(0.722088*t), {
      to: {
        fadeAlpha: 0.99
      },
      time: 0.81143*t,
      ease: [0, 0, 1]
    })
    .smoothOver((0.960922*t)-(0.90467*t), {
      to: {
        ringThick: 0.1
      },
      time: 0.960922*t,
      ease: [0, 0, 1]
    })
    .smoothOver(6000, {
      to: {
        soundWarp: -0.001,
        ringAlpha: 50,
        silent: 1,
        fadeAlpha: 1
      },
      time: t,
      ease: [0, 0, 1],
      call: [end]
    });

  player.tracks.lightColor
    .smoothTo({
      to: colors.white,
      time: 0.0052789*t,
      ease: [0, 0.95, 1]
    })
    .smoothTo({
      to: colors.lightBlueC,
      time: 0.02639*t,
      ease: [0, 0.95, 1]
    })
    .smoothOver(0.0422*t, {
      to: colors.white,
      time: t,
      ease: [0, 0.95, 1]
    });

  player.tracks.fadeColor
    .smoothTo({
      to: colors.white,
      time: 0.0052789*t,
      ease: [0, 0.95, 1]
    })
    .smoothTo({
      to: colors.lightBlueA,
      time: 0.02639*t,
      ease: [0, 0.95, 1]
    })
    .smoothOver(0.0211*t, {
      to: colors.white,
      time: t,
      ease: [0, 0.95, 1]
    });
};