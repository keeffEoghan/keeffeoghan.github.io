import * as colors from '../colors';

export default (player, end, audio) => {
  const t = audio.duration*1000;

  player.tracks.main
    .to({
      to: {
        audioMode: 'waveform',
        audioScale: 0.1,
        audioOrder: 2,
        silent: 0.001,
        soundSmooth: 0.3,
        soundWarp: 0.02,
        meanFulcrum: 0.7,
        ringAlpha: 0.1,
        otherAlpha: 0.000001,
        triangleAlpha: 0,
        bokehRadius: 8,
        bokehAmount: 60
      },
      time: 500
    })
    .smoothTo({
      to: {
        otherRadius: 0.8,
        otherThick: -0.01,
        otherEdge: 5
      },
      time: 0.017064846416382253*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        noiseWarp: 0.06,
        noiseSpeed: 0.001,
        noiseScale: 0.5,
        grow: 0.0005,
        growLimit: 1.6,
        spin: 0.0003,
        ringRadius: 0,
        ringThick: 0.5
      },
      time: 0.051194539249146756*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        fadeAlpha: 0.99
      },
      time: 0.06484641638225255*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.013651877133105802*t, {
      to: {
        soundWarp: 0.07,
        noiseWarp: 0.2
      },
      time: 0.14675767918088736*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.027303754266211604*t, {
      to: {
        noiseWarp: 0.04,
        otherAlpha: 0.0001,
        otherEdge: 3.5
      },
      time: 0.32081911262798635*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.013651877133105802*t, {
      to: {
        noiseWarp: 0.08,
        soundWarp: 0.025,
        otherRadius: 0,
        otherThick: 10,
        otherEdge: 3
      },
      time: 0.40955631399317405*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.034129692832764506*t, {
      to: {
        otherRadius: 2,
        otherThick: 0.00000001,
        otherEdge: 6
      },
      time: 0.6143344709897611*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.027303754266211604*t, {
      to: {
        staticScale: 60,
        staticShift: 0.9
      },
      time: 0.6825938566552902*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        noiseWarp: 0.4,
        noiseSpeed: 0.0001,
        ringRadius: 0.7,
        ringThick: 0.15,
        ringAlpha: 0.00001,
        otherEdge: 4,
        otherRadius: 0.8,
        otherThick: 0.0000001,
        otherAlpha: 0.000001
      },
      time: 0.7849829351535836*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        grow: -0.0001,
        noiseWarp: 0.8,
        noiseScale: 3,
        ringRadius: 1,
        ringThick: 0.005,
        ringAlpha: 0.01
      },
      time: 0.8532423208191127*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.025597269624573378*t, {
      to: {
        noiseScale: 0.2,
        ringThick: 1.5,
        ringAlpha: 3
      },
      time: 0.9692832764505119*t,
      ease: [0, 0, 0, 1],
      call: [end]
    });

  player.tracks.lightColor
    .smoothTo({
      to: colors.white,
      time: 0.017064846416382253*t,
      ease: [0, 0.95, 1]
    });

  player.tracks.fadeColor
    .smoothTo({
      to: colors.orange,
      time: 0.017064846416382253*t,
      ease: [0, 0.95, 1]
    })
    .smoothOver(0.027303754266211604*t, {
      to: colors.yellow,
      time: 0.32081911262798635*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.10238907849829351*t, {
      to: colors.white,
      time: 0.8532423208191127*t,
      ease: [0, 0, 1]
    });
};