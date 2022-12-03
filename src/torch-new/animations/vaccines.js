import * as colors from '../colors';

export default (player, end, audio) => {
  const t = audio.duration*1000;

  player.tracks.main
    .to({
      to: {
        staticAlpha: 0,
        fadeAlpha: 0,
        noiseSpeed: 0.002
      },
      time: 1000
    })
    .smoothTo({
      to: {
        ringRadius: 0.2,
        noiseWarp: 0.1,
        soundWarp: 0.01,
        otherEdge: 150,
        otherRadius: 1
      },
      time: 0.06050420168067227*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        silent: 0
      },
      time: 0.1092436974789916*t,
      ease: [0, 0.95, 1]
    })
    .smoothTo({
      to: {
        ringRadius: 0.5,
        otherEdge: 250,
        staticAlpha: 0.02,
        fadeAlpha: 0.96,
        grow: 0.005
      },
      time: 0.12605042016806722*t,
      ease: [0, 0.95, 1]
    })
    .smoothTo({
      to: {
        ringRadius: 0.7,
        otherEdge: 254,
        staticAlpha: 0.03,
        fadeAlpha: 0.99
      },
      time: 0.20588235294117646*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        otherRadius: 0.1,
        otherThick: 100,
        ringAlpha: 100
      },
      time: 0.2605042016806723*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.04201680672268908*t, {
      to: {
        ringRadius: 0.95
      },
      time: 0.3697478991596639*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.04201680672268908*t, {
      to: {
        noiseWarp: 0.55,
        noiseScale: 0.1
      },
      time: 0.4117647058823529*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.04201680672268908*t, {
      to: {
        otherRadius: 0.1,
        otherThick: 100
      },
      time: 0.46218487394957986*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        fadeAlpha: 0,
        otherThick: 500,
        otherEdge: 154
      },
      time: 0.5042016806722689*t,
      ease: [0, 0, 1]
    })
    .smoothOver(100, {
      to: {
        otherThick: 0.00001,
        otherRadius: 0.8
      },
      time: 0.6386554621848739*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.025210084033613446*t, {
      to: {
        noiseWarp: 0.2
      },
      time: 0.6722689075630253*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.025210084033613446*t, {
      to: {
        noiseWarp: 0.35
      },
      time: 0.7226890756302521*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        fadeAlpha: 0.99
      },
      time: 0.7647058823529411*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.04201680672268908*t, {
      to: {
        ringRadius: 0,
        ringAlpha: 0,
        staticAlpha: 3
      },
      time: 0.9957983193277311*t,
      ease: [0, 0, 1],
      call: [end]
    });

  player.tracks.lightColor
    .smoothOver(0.025210084033613446*t, {
      to: colors.orange,
      time: 0.12605042016806722*t,
      ease: [0, 0.95, 1]
    })
    .smoothOver(0.008403361344537815*t, {
      to: colors.white,
      time: 0.9159663865546218*t,
      ease: [0, 0, 1]
    });

  player.tracks.fadeColor
    .smoothOver(0.04201680672268908*t, {
      to: colors.lightBlueC,
      time: 0.23529411764705882*t,
      ease: [0, 0.95, 1]
    })
    .smoothOver(0.01680672268907563*t, {
      to: colors.lightBlueB,
      time: 0.37815126050420167*t,
      ease: [0, 0.95, 1]
    })
    .smoothOver(0.08403361344537816*t, {
      to: colors.darkBlue,
      time: 0.5042016806722689*t,
      ease: [0, 0, 1]
    })
    .smoothOver(100, {
      to: colors.white,
      time: 0.7647058823529411*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: colors.lightBlueB,
      time: 0.9159663865546218*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.08403361344537816*t, {
      to: colors.white,
      time: 0.9831932773109243*t,
      ease: [0, 0, 1]
    });
};