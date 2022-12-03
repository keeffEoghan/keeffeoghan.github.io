import * as colors from '../colors';

export default (player, end, audio) => {
  const t = audio.duration*1000;

  player.tracks.main
    .to({
      to: {
        silent: 0.00001,
        soundWarp: 0.01,
        soundSmooth: 0.3,
        meanFulcrum: 0.3,
        ringAlpha: 0.1,
        noiseSpeed: 0.0001,
        noiseWarp: 0.04,
        otherAlpha: 0,
        otherEdge: 10,
        triangleAlpha: 0,
        triangleEdge: 10,
        bokehRadius: 1,
        bokehAmount: 0.1
      },
      time: 500
    })
    .smoothTo({
      to: {
        ringRadius: 0.25,
        noiseWarp: 0.3
      },
      time: 0.04198473282442748*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        ringThick: 0.2,
        soundWarp: 0.003
      },
      time: 0.08396946564885496*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        bokehRadius: 12,
        ringAlpha: 100
      },
      time: 0.1717557251908397*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        otherAlpha: 0.01
      },
      time: 0.2099236641221374*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        noiseSpeed: 0.001
      },
      time: 0.22900763358778625*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.007633587786259542*t, {
      to: {
        ringRadius: 0.5,
        soundWarp: 0.0005,
        otherEdge: 20,
        otherRadius: 10
      },
      time: 0.3053435114503817*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.007633587786259542*t, {
      to: {
        noiseWarp: 0.6,
        otherEdge: 10,
        otherThick: 0.0000002
      },
      time: 0.4312977099236641*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.015267175572519083*t, {
      to: {
        ringRadius: 0.8,
        noiseWarp: 1,
        otherThick: 0.000001,
        otherAlpha: 0.00001
      },
      time: 0.5267175572519084*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.022900763358778626*t, {
      to: {
        ringThick: 0.000001
      },
      time: 0.5954198473282443*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.019083969465648856*t, {
      to: {
        ringRadius: 1,
        noiseWarp: 10
      },
      time: 0.6793893129770993*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        noiseScale: 1
      },
      time: 0.7137404580152672*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        noiseScale: 10
      },
      time: 0.7519083969465649*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        noiseScale: 0.01,
        noiseWarp: 30
      },
      time: 0.9541984732824428*t,
      ease: [0, 0.3, 1]
    })
    .smoothTo({
      to: {
        ringThick: 1
      },
      time: 0.9770992366412213*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        ringThick: 60
      },
      time: 0.9961832061068703*t,
      ease: [0, 0, 1],
      call: [end]
    });

  player.tracks.lightColor
    .smoothTo({
      to: colors.white,
      time: 0.019083969465648856*t,
      ease: [0, 0.95, 1]
    });

  player.tracks.fadeColor
    .smoothTo({
      to: colors.lightBlueA,
      time: 0.019083969465648856*t,
      ease: [0, 0.95, 1]
    });
};