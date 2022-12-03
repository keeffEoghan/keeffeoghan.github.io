import * as colors from '../colors';

export default (player, end, audio) => {
  const t = audio.duration*1000;

  player.tracks.main
    .to({
      to: {
        silent: 0.00001,
        soundWarp: 0.1,
        soundSmooth: 0.3,
        meanFulcrum: 0.5,
        ringAlpha: 0.005,
        noiseSpeed: 0.0005,
        noiseWarp: 0,
        otherAlpha: 0,
        otherRadius: 1.2,
        otherThick: 0.0000001,
        otherEdge: 2.5,
        triangleAlpha: 0,
        triangleFat: 0,
        triangleRadius: 100,
        triangleEdge: 3,
        bokehRadius: 7,
        bokehAmount: 40
      },
      time: 500
    })
    .smoothTo({
      to: {
        noiseWarp: 0.06,
      },
      time: 0.025806451612903226*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        noiseWarp: 0.15
      },
      time: 0.05806451612903226*t,
      ease: [0, 0.3, 1]
    })
    .smoothOver(0.016129032258064516*t, {
      to: {
        ringRadius: 0.6,
        triangleAlpha: 0.0001
      },
      time: 0.11290322580645161*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        ringRadius: 0,
        ringAlpha: 0.015,
        soundWarp: 1.6,
        noiseWarp: 0,
        fadeAlpha: 0.95,
        grow: 0.003,
        spin: 0.002
      },
      time: 0.16129032258064516*t,
      ease: [0, 0.8, 1]
    })
    .smoothTo({
      to: {
        otherAlpha: 0.00001
      },
      time: 0.2*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.02903225806451613*t, {
      to: {
        otherAlpha: 0.001,
        otherThick: 0.000007
      },
      time: 0.25806451612903225*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.05161290322580645*t, {
      to: {
        otherEdge: 1.5,
        triangleEdge: 1.5
      },
      time: 0.3387096774193548*t,
      ease: [0, 1, 1]
    })
    .smoothTo({
      to: {
        grow: 0.02,
        otherThick: 0.00001
      },
      time: 0.3709677419354839*t,
      ease: [0, 0.5, 0, 1]
    })
    .smoothTo({
      to: {
        grow: 0.01,
        ringThick: 0.07,
        otherThick: 1,
        otherRadius: 0.6
      },
      time: 0.3935483870967742*t,
      ease: [0, 1, 1]
    })
    .smoothTo({
      to: {
        ringAlpha: 0.05,
        grow: 0.01,
        otherThick: 0.0001,
        otherRadius: 1,
        otherAlpha: 0.00004,
        otherEdge: 3,
        spin: 0.0008
      },
      time: 0.4483870967741935*t,
      ease: [0, 1, 1]
    })
    .smoothTo({
      to: {
        ringRadius: 0.3,
        noiseWarp: 0.25,
        spin: 0.0004
      },
      time: 0.5096774193548387*t,
      ease: [0, 0.3, 1]
    })
    .smoothTo({
      to: {
        ringRadius: 0.8,
        ringThick: 0,
        noiseWarp: 0.05,
        triangleAlpha: 0
      },
      time: 0.535483870967742*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.05806451612903226*t, {
      to: {
        ringRadius: 1,
        grow: -0.002,
        otherThick: 0.1,
        otherAlpha: 0.01,
        otherRadius: 2,
        fadeAlpha: 0.98
      },
      time: 0.6774193548387096*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.054838709677419356*t, {
      to: {
        ringRadius: 1.6,
        noiseWarp: 0.1,
        spin: -0.00004,
        otherRadius: 0.5,
        otherEdge: 1,
        triangleEdge: 1.5
      },
      time: 0.7935483870967742*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        otherRadius: 1,
        otherThick: 0.00001,
        otherAlpha: 0.00001,
        triangleAlpha: 0.00001,
        grow: -0.004
      },
      time: 0.8*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.03870967741935484*t, {
      to: {
        ringRadius: 0,
        triangleAlpha: 0,
        grow: -0.001
      },
      time: 0.9516129032258065*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.024193548387096774*t, {
      to: {
        ringAlpha: 20
      },
      time: 0.9919354838709677*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        ringThick: 5
      },
      time: 0.9951612903225806*t,
      ease: [0, 0, 1],
      call: [end]
    });

  player.tracks.lightColor
    .smoothTo({
      to: colors.yellow,
      time: 0.025806451612903226*t,
      ease: [0, 0.95, 1]
    })
    .over(0.7387096774193549*t-192000, {
      to: colors.white,
      time: 0.7387096774193549*t
    });

  player.tracks.fadeColor
    .smoothTo({
      to: colors.white,
      time: 0.025806451612903226*t,
      ease: [0, 0.95, 1]
    })
    .over(0.05161290322580645*t, {
      to: colors.pink,
      time: 0.3935483870967742*t
    })
    .to({
      to: colors.orange,
      time: 0.41935483870967744*t
    });
};