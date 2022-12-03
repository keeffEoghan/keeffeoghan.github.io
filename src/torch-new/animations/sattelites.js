import * as colors from '../colors';

export default (player, end, audio) => {
  const t = audio.duration*1000;

  player.tracks.main
    .to({
      to: {
        silent: 0.00001,
        soundWarp: 0.1,
        soundSmooth: 0.3,
        meanFulcrum: 0.3,
        ringAlpha: 0.005,
        noiseSpeed: 0.0001,
        noiseWarp: 0.04,
        otherAlpha: 0,
        otherEdge: 10000,
        triangleAlpha: 0,
        triangleEdge: 10000,
        bokehRadius: 4,
        bokehAmount: 0.01
      },
      time: 500
    })
    .smoothOver(0.003365976*t, {
      to: {
        soundWarp: 0.1
      },
      time: 0.01178*t,
      ease: [0, 1, 1]
    })
    .smoothTo({
      to: {
        silent: 0,
        spin: 0.001,
        ringRadius: 0.35,
        ringThick: 0.001,
        soundWarp: 0.5
      },
      time: 0.0370*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        noiseSpeed: 0.0001,
        noiseWarp: 0.03
      },
      time: 0.080866*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        ringRadius: 1.1,
        ringThick: 0.0001,
        soundWarp: 1,
        fadeAlpha: 0.5
      },
      time: 0.1098*t,
      ease: [0, 1, 1]
    })
    .smoothTo({
      to: {
        grow: -0.0006,
        silent: 0.01,
        triangleAlpha: 0.0001,
        triangleEdge: 10,
        triangleRadius: 10
      },
      time: 0.127956*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        grow: 0.0006,
        silent: 1,
        triangleAlpha: 0.0001,
        triangleEdge: 10,
        triangleRadius: 10,
        triangleFat: 0.1,
        fadeAlpha: 0.9
      },
      time: 0.1494855*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.03365976*t, {
      to: {
        otherAlpha: 0.00001,
        otherEdge: 3,
        otherRadius: 0.7,
        otherThick: 0.00001
      },
      time: 0.24475*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.03366*t, {
      to: {
        ringRadius: 2,
        otherEdge: 4,
        otherThick: 0.000001
      },
      time: 0.2704*t,
      ease: [0, 0, 1]
    })
    .over(0.00673*t, {
      to: {
        ringRadius: 0.1,
        ringThick: 0,
        ringAlpha: 0,
        soundWarp: 0
      },
      time: 0.31116*t
    })
    .smoothTo({
      to: {
        ringRadius: 0.25,
        ringAlpha: 0.0005,
        soundWarp: 0.1
      },
      time: 0.3096698*t,
      ease: [0, 1, 1]
    })
    .smoothTo({
      to: {
        ringThick: 0.005,
        ringRadius: 0.33
      },
      time: 0.31976776*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        noiseWarp: 0.1
      },
      time: 0.3365976*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        noiseWarp: 0.16,
        otherThick: 0.0001
      },
      time: 0.3534275*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        soundWarp: 0.02,
        noiseWarp: 0.4,
        noiseScale: 0.25,
        noiseSpeed: 0.001,
        otherRadius: 0.3,
        otherThick: 0.1,
        grow: -0.002
      },
      time: 0.4039*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        ringAlpha: 0.001,
        fadeAlpha: 0.99,
        otherAlpha: -0.00001,
        staticAlpha: 0.05,
        staticScale: 60,
        staticShift: 1
      },
      time: 0.407283*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.03365976*t, {
      to: {
        ringRadius: 0.4,
        ringAlpha: 0.005,
        ringThick: 0.01,
        noiseWarp: 0.05,
        noiseSpeed: 0.0003,
        staticAlpha: 0.5
      },
      time: t,
      ease: [0, 0, 1],
      call: [end]
    });

  player.tracks.lightColor
    .smoothTo({
      to: colors.white,
      time: 0.0168*t,
      ease: [0, 0.95, 1]
    });

  player.tracks.fadeColor
    .smoothTo({
      to: colors.yellow,
      time: 0.0168*t,
      ease: [0, 0.95, 1]
    })
    .over(0.03365976*t, {
      to: colors.white,
      time: t
    });
};