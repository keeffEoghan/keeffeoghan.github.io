import * as colors from '../colors';

export default (player, end, audio) => {
  const t = audio.duration*1000;

  player.tracks.main
    .to({
      to: {
        silent: 0,
        soundWarp: 0.000007,
        soundSmooth: 0.3,
        meanFulcrum: 0.7,
        spin: -0.0001,
        ringAlpha: 0.5,
        ringThick: 0.01,
        noiseSpeed: 0.001,
        noiseWarp: 0.001,
        otherRadius: 0,
        otherThick: 0,
        otherAlpha: 0.0002,
        otherEdge: 500,
        triangleAlpha: 0,
        triangleEdge: 210,
        staticScale: 70,
        staticSpeed: 0.5,
        staticShift: 0.8,
        staticAlpha: 0.05,
        grow: 0.0001,
        fadeAlpha: 0.91,
        bokehRadius: 4,
        bokehAmount: 40
      },
      time: 210
    })
    .smoothOver(0.01567398119122257*t, {
      to: {
        ringRadius: 0.35,
        ringThick: 0.001,
        ringAlpha: 0.01,
        grow: 0.003
      },
      time: 0.02664576802507837*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        soundWarp: 0.00004,
        ringRadius: 0.1
      },
      time: 0.09404388714733543*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        soundWarp: 0.000055,
        fadeAlpha: 0.93
      },
      time: 0.12539184952978055*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        soundWarp: 0.000075,
        ringRadius: 0,
        ringThick: 0.01,
        fadeAlpha: 0.94
      },
      time: 0.1724137931034483*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        ringAlpha: 0.1
      },
      time: 0.1974921630094044*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.03134796238244514*t, {
      to: {
        grow: 0.01
      },
      time: 0.28213166144200624*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.01567398119122257*t, {
      to: {
        otherEdge: 0.01
      },
      time: 0.3573667711598746*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        otherRadius: 0.3
      },
      time: 0.39184952978056425*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        otherRadius: 0.3,
        otherThick: 0.0001,
        otherEdge: 200
      },
      time: 0.40752351097178685*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.018808777429467086*t, {
      to: {
        grow: 0.005,
        growLimit: 1.4
      },
      time: 0.45141065830721006*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.018808777429467086*t, {
      to: {
        otherThick: 0.0001,
      },
      time: 0.5172413793103449*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        otherThick: -0.001,
        grow: -0.003,
        growLimit: -0.3,
        ringRadius: 0.6
      },
      time: 0.5360501567398119*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        otherThick: -0.01,
        otherRadius: 0.1
      },
      time: 0.567398119122257*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        otherAlpha: 0.00005,
        otherThick: 0.0001,
        otherRadius: 0.7
      },
      time: 0.5736677115987461*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.018808777429467086*t, {
      to: {
        otherAlpha: 0.0005
      },
      time: 0.6363636363636364*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.009404388714733543*t, {
      to: {
        otherAlpha: 0.00001,
        grow: 0.002,
        growLimit: 0,
        ringRadius: 0.3
      },
      time: 0.658307210031348*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.07523510971786834*t, {
      to: {
        otherRadius: 1.4,
        soundWarp: 0.0001
      },
      time: 0.7962382445141066*t,
      ease: [0, -0.1, 1.3, 1]
    })
    .smoothTo({
      to: {
        ringRadius: 0.6,
        ringThick: 0.1,
        otherRadius: 0.01,
        otherThick: 0.003
      },
      time: 0.8087774294670846*t,
      ease: [0, 1, 0.3, 1]
    })
    .smoothTo({
      to: {
        ringRadius: 0.4,
        otherThick: -0.0006
      },
      time: 0.8620689655172413*t,
      ease: [0, 0, 1.6, 1]
    })
    .smoothOver(0.018808777429467086*t, {
      to: {
        ringRadius: 0.3,
        noiseWarp: 0.08,
        grow: 0.0008
      },
      time: 0.8871473354231975*t,
      ease: [0, 0, 1]
    })
    .smoothTo({
      to: {
        ringRadius: 0.6,
        soundWarp: 0.00006,
        meanFulcrum: 0.1
      },
      time: 0.9404388714733543*t,
      ease: [0, 0, 1]
    })
    .smoothOver(0.03542319749216301*t, {
      to: {
        ringRadius: 0.3,
        soundWarp: 0.00001
      },
      time: 0.9884012539184953*t,
      ease: [0, 0.8, 0, 1]
    })
    .smoothTo({
      to: {
        ringRadius: 0,
        ringThick: 2
      },
      time: 0.9968652037617555*t,
      ease: [0, 0.8, 0, 1],
      call: [end]
    });

  player.tracks.lightColor
    .smoothTo({
      to: colors.lightBlueC,
      time: 0.09090909090909091*t,
      ease: [0, 0.95, 1]
    })
    .over(0.009404388714733543*t, {
      to: colors.yellow,
      time: 0.658307210031348*t
    })
    .over(0.025078369905956112*t, {
      to: colors.white,
      time: 0.8181818181818182*t
    });

  player.tracks.fadeColor
    .smoothTo({
      to: colors.yellow,
      time: 0.09090909090909091*t,
      ease: [0, 0.95, 1]
    })
    .over(0.03761755485893417*t, {
      to: colors.orange,
      time: 0.5172413793103449*t
    })
    .over(0.03761755485893417*t, {
      to: colors.yellow,
      time: 0.8181818181818182*t
    });
};