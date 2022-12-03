import 'pepjs';
import glContext from 'gl-context';
import FBO from 'gl-fbo';
import analyser from 'web-audio-analyser';
import throttle from 'lodash/throttle';
import shader from 'gl-shader';
import querystring from 'querystring';
import offset from 'mouse-event-offset';
import makeCamera from 'lookat-camera';
import mapRange from 'range-fit';
import { mat4 } from 'gl-matrix';
import dat from 'dat-gui';

import Timer from '../tendrils/timer';

import Screen from '../tendrils/screen';

import screenVert from '../tendrils/screen/index.vert';

import lightFrag from './light.frag';
import fadeFrag from './fade.frag';
import drawFrag from './draw.frag';

import AudioTrigger from '../tendrils/audio/';
import AudioTexture from '../tendrils/audio/data-texture';
import { peakPos, meanWeight } from '../tendrils/analyse';

import Player from '../tendrils/animate';

import { containAspect } from '../tendrils/utils/aspect';

import map from '../fp/map';
import reduce from '../fp/reduce';
import each from '../fp/each';

import { step } from '../utils';

import * as colors from './colors';
import animations from './animations';


const deClass = (className, ...rest) =>
  reduce((name, remove) => name.replace(remove, ''), rest, className)
    .replace(/\s\s/gi, ' ');

export default (canvas) => {
  const queries = querystring.parse(location.search.slice(1));

  const queryColor = (query) => map((c) => parseFloat(c, 10), query);

  const gl = glContext(canvas, { preserveDrawingBuffer: true }, render);

  const timers = {
    main: Object(new Timer(), { step: 1000/60 }),
    player: new Timer(0)
  };

  const viewRes = [0, 0];
  const viewSize = [0, 0];

  const buffers = {
    light: FBO(gl, [1, 1]),
    // @todo
    // flash: FBO(gl, [1, 1]),
    fade: [FBO(gl, [1, 1]), FBO(gl, [1, 1])]
  };

  const shaders = {
    light: shader(gl, screenVert, lightFrag),
    fade: shader(gl, screenVert, fadeFrag),
    draw: shader(gl, screenVert, drawFrag)
  };

  const screen = new Screen(gl);


  // Parameters...

  // Configuration, setup
  const config = self.config = {
    edit: (queries.edit === 'true'),

    showTrack: (queries.showTrack === 'true'),

    showEndVideos: (queries.showEndVideos === 'true' ||
      queries.showTros === 'true'), // Legacy

    intro: (decodeURIComponent(queries.intro ||
      'https://www.youtube.com/embed/7mT4vCdZY9w')),

    outro: (decodeURIComponent(queries.outro ||
      'https://www.youtube.com/embed/Xr1vohT1yG4')),

    showInfo: (queries.showInfo === 'true'),

    name: (decodeURIComponent(queries.name || '')),
    songName: (decodeURIComponent(queries.songName || '')),
    byName: (decodeURIComponent(queries.byName || '')),

    fallback: (decodeURIComponent(queries.fallback || '')),

    track: (decodeURIComponent(queries.track || '') ||
      prompt('Enter a track URL:')),

    audioOrders: ((queries.audioOrders)?
      parseInt(queries.audioOrders, 10) : 3),

    animation: (queries.animation || ''),
  };

  // Animation, running
  const state = self.state = {
    interact: (parseFloat(queries.interact, 10) || 1),

    /**
     * @note `waveform` seems to make everything about an order of magnitude
     *     more sensitive than `frequencies`.
     */
    audioMode: (queries.audioMode || 'frequencies'),

    // for `audioOrder === 0`
    audioScale: ((queries.audioScale)?
        parseFloat(queries.audioScale, 10)
      : 1),

    /**
     * @note Each higher order seems to make everything about an order of
     *     magnitude more sensitive.
     */
    audioOrder: ((queries.audioOrder)?
        parseInt(queries.audioOrder, 10)
      : -1),

    // @todo Not actually meaningful for waveforms - check for this case
    meanFulcrum: ((queries.meanFulcrum)?
        parseFloat(queries.meanFulcrum, 10)
      : 0.4),


    harmonies: ((queries.harmonies)?
        parseFloat(queries.harmonies, 10)
      : 1),


    silent: ((queries.silent)?
        parseFloat(queries.silent, 10)
      : 0.000001),


    soundSmooth: ((queries.soundSmooth)?
        parseFloat(queries.soundSmooth, 10)
      : 0.3),

    soundWarp: ((queries.soundWarp)?
        parseFloat(queries.soundWarp, 10)
      : 0.006),


    noiseWarp: ((queries.noiseWarp)?
        parseFloat(queries.noiseWarp, 10)
      // : 0.04),
      : 0),

    noiseSpeed: ((queries.noiseSpeed)?
        parseFloat(queries.noiseSpeed, 10)
      : 0.0005),

    noiseScale: ((queries.noiseScale)?
        parseFloat(queries.noiseScale, 10)
      : 0.05),


    spin: ((queries.spin)?
        parseFloat(queries.spin, 10)
      : 0.0001),


    ringRadius: ((queries.ringRadius)?
        parseFloat(queries.ringRadius, 10)
      : 0.95),

    ringThick: ((queries.ringThick)?
        parseFloat(queries.ringThick, 10)
      : 0.01),

    ringAlpha: ((queries.ringAlpha)?
        parseFloat(queries.ringAlpha, 10)
      : 10),


    otherRadius: ((queries.otherRadius)?
        parseFloat(queries.otherRadius, 10)
      : 100),

    otherThick: ((queries.otherThick)?
        parseFloat(queries.otherThick, 10)
      : 0.000001),

    otherEdge: ((queries.otherEdge)?
        parseFloat(queries.otherEdge, 10)
      : 250),

    otherAlpha: ((queries.otherAlpha)?
        parseFloat(queries.otherAlpha, 10)
      : 0.0001),


    triangleRadius: ((queries.triangleRadius)?
        parseFloat(queries.triangleRadius, 10)
      : 0.1),

    triangleFat: ((queries.triangleFat)?
        parseFloat(queries.triangleFat, 10)
      : 0.2),

    triangleEdge: ((queries.triangleEdge)?
        parseFloat(queries.triangleEdge, 10)
      : 255),

    triangleAlpha: ((queries.triangleAlpha)?
        parseFloat(queries.triangleAlpha, 10)
      : 0.000001),


    staticScale: ((queries.staticScale)?
        parseFloat(queries.staticScale, 10)
      : 150),

    staticSpeed: ((queries.staticSpeed)?
        parseFloat(queries.staticSpeed, 10)
      : 1),

    staticShift: ((queries.staticShift)?
        parseFloat(queries.staticShift, 10)
      : 0.3),

    staticAlpha: ((queries.staticAlpha)?
        parseFloat(queries.staticAlpha, 10)
      : 0.03),


    grow: ((queries.grow)?
        parseFloat(queries.grow, 10)
      : 0.0005),

    growLimit: ((queries.growLimit)?
        parseFloat(queries.growLimit, 10)
      : 1.6),


    jitter: ((queries.jitter)?
        parseFloat(queries.jitter, 10)
      : 0.002),


    fadeAlpha: ((queries.fadeAlpha)?
        parseFloat(queries.fadeAlpha, 10)
      // : 0.99),
      : 0),


    lightColor: ((queries.lightColor)?
        queryColor(queries.lightColor)
      : [...colors.white]),

    fadeColor: ((queries.fadeColor)?
        queryColor(queries.fadeColor)
      : [...colors.white]),

    bokehRadius: ((queries.bokehRadius)?
        parseFloat(queries.bokehRadius, 10)
      : 8),

    bokehAmount: ((queries.bokehAmount)?
        parseFloat(queries.bokehAmount, 10)
      : 60)
  };


  // Editor


  const gui = new dat.GUI();

  const configProxy = { ...config };
  const stateProxy = { ...state };

  gui.domElement.parentNode.style.zIndex = 10000;

  const proxyURL = {
    URL: location.href,
    'GO!': () => location.href = proxyURL.URL
  };

  gui.add(proxyURL, 'GO!');
  gui.add(proxyURL, 'URL');

  const urlCtrl = gui.__controllers[gui.__controllers.length-1];

  function applyGUI(obj, name, value) {
    obj[name] = value;

    const oldRx = new RegExp('(^|\\&|\\?)'+name+'=.*?(?=\\&|$)', 'gi');

    let url = location.href.replace(location.search,
        location.search.replace(oldRx, ''));

    proxyURL.URL = url+((url[url.length-1] === '?')? '' : '&')+
        querystring.stringify({ [name]: value });

    urlCtrl.updateDisplay();
  }


  const configGUI = gui.addFolder('Fixed settings');


  // This is an exception... need a multi-select

  const animation = configProxy.animation;

  delete configProxy.animation;

  each((value, name) =>
      configGUI[(typeof value === 'object')?
          'addColor' : 'add'](configProxy, name)
        .onFinishChange((v) => applyGUI(config, name, v)),
    configProxy);

  configProxy.animation = animation;

  configGUI.add(configProxy, 'animation', ['', ...Object.keys(animations)])
    .onFinishChange((v) => applyGUI(config, 'animation', v));


  setTimeout(() => configGUI.open(), 200);


  const stateGUI = gui.addFolder('Animatable settings');

  each((value, name) => {
      if(Array.isArray(value) && value.length === 4) {
        const colorFolder = stateGUI.addFolder(name);

        for(var i = 0; i < 4; ++i) {
          colorFolder.add(value, i).onFinishChange(() =>
            applyGUI(state, name, stateProxy[name]));
        }
      }
      else {
        stateGUI.add(stateProxy, name)
          .onFinishChange((v) => applyGUI(state, name, v));
      }
    },
    stateProxy);

  setTimeout(() => stateGUI.open(), 200);

  if(!config.edit) {
    dat.GUI.toggleHide();
  }

  setTimeout(() => gui.domElement.style.display = 'block', 0);


  const pointer = [0, 0];
  const cameraView = mat4.create();
  const cameraProjection = mat4.create();
  const camera = makeCamera();


  let bump = 0;


  const ytPlayerVars = {
    modestbranding: 1,
    showinfo: 0,
    controls: 0,
    autoplay: 1,
    playsinline: 1,
    enablejsapi: 1,
    rel: 0,
    disablekb: 1,
    width: 1280,
    height: 720,
    origin: self.location.href.match(/.*?\/\/.*?(?=\/)/gi)[0]
  };

  const ytPlayerParams = (vars) => reduce((out, v, k) =>
      out+((out)? '&' : '?')+k+'='+v, vars, '');


  // Info

  if(config.showInfo) {
    const introInfo = document.querySelector('.intro-info');

    introInfo.querySelector('.name').innerText = (config.name || '');
    introInfo.querySelector('.song-name').innerText = (config.songName || '');
    introInfo.querySelector('.by-name').innerText = (config.byName || '');

    introInfo.className = deClass(introInfo.className, 'hide');
  }


  // Fallback

  if(config.fallback) {
    const fallbackInfo = document.querySelector('.fallback-info');
    const href = config.fallback+ytPlayerParams(ytPlayerVars);

    fallbackInfo.querySelector('.name').innerText = ((config.name)?
      ' '+config.name : '');

    fallbackInfo.querySelector('.fallback').href = href;
  }


  // Track

  const audio = Object.assign(new Audio(), {
      crossOrigin: 'anonymous',
      controls: true,
      autoplay: false,
      muted: 'muted' in queries,
      className: 'track',
      src: ((config.track.match(/^(https)?(:\/\/)?(www\.)?dropbox\.com\/s\//gi))?
          config.track.replace(/^((https)?(:\/\/)?(www\.)?)dropbox\.com\/s\/(.*)\?dl=(0)$/gi,
            'https://dl.dropboxusercontent.com/s/$5?dl=1&raw=1')
        : config.track)
    });

  document.body.appendChild(audio);


  // Progress

  if(config.showTrack) {
    document.documentElement.className += ' show-track';
  }

  const progress = document.getElementsByClassName('progress')[0];


  // Intro and outro

  let videos;

  const visuals = document.querySelector('.visuals');

  function startInfo() {
    if(config.showInfo) {
      visuals.className = deClass(visuals.className, 'hide');

      const introInfo = document.querySelector('.intro-info');

      each(([el, t]) => setTimeout(() =>
          el.className = deClass(el.className, 'hide'),
        t),
        [
          [introInfo.querySelector('.torch-song'), 0],
          [introInfo.querySelector('.name'), 1000],
          [introInfo.querySelector('.song-name'), 3000],
          [introInfo.querySelector('.by-name'), 4000]
        ]);

      setTimeout(() => introInfo.className += ' hide', 15000);
    }
  }

  function startSequence() {
    if(videos) {
      videos.intro.el.className += ' hide';
    }

    if(config.fallback) {
      const fallbackInfo = document.querySelector('.fallback-info');

      fallbackInfo.className = deClass(fallbackInfo.className, 'hide');
    }

    audio.play();
    canvas.className = deClass(canvas.className, 'hide');
  }

  function endSequence() {
    if(videos) {
      videos.outro.player.playVideo();
      videos.outro.el.className = deClass(videos.outro.el.className, 'hide');
    }

    canvas.className += ' hide';
  }

  if(config.showEndVideos) {
    const ytIframeVars = {
      width: ytPlayerVars.width,
      height: ytPlayerVars.height,
      frameborder: 0,
      allowfullscreen: true,
      className: 'video fade',
      src: ytPlayerParams(ytPlayerVars)
    };

    videos = {
      intro: {
        iframeOptions: {
          ...ytIframeVars,
          src: config.intro+ytIframeVars.src,
          className: 'intro '+ytIframeVars.className
        },
        playerOptions: {
          ytPlayerVars,
          events: {
            onReady() {
              setTimeout(startSequence, 15000);
            },
            onStateChange(e) {
              if(e.data === self.YT.PlayerState.PLAYING) {
                startInfo();
              }
              else if(e.data === self.YT.PlayerState.ENDED) {
                // startSequence();
                videos.intro.el.className += ' hide';
              }
            }
          }
        }
      },
      outro: {
        iframeOptions: {
          ...ytIframeVars,
          src: config.outro+ytIframeVars.src,
          className: 'outro hide '+ytIframeVars.className
        },
        playerOptions: {
          ytPlayerVars,
          events: {
            onStateChange(e) {
              if(!videos.outro.buffering &&
                  e.data === self.YT.PlayerState.PLAYING) {
                videos.outro.buffering = true;
                videos.outro.player.pauseVideo();
              }
              if(e.data === self.YT.PlayerState.ENDED) {
                videos.outro.el.className += ' hide';
              }
            }
          }
        }
      }
    };

    each((config) => {
        config.el = Object.assign(document.createElement('iframe'),
            config.iframeOptions);

        document.body.appendChild(config.el);
      },
      videos);


    // Load the IFrame Player API code asynchronously.

    const youTubeAPITag = document.createElement('script');

    youTubeAPITag.src = 'https://www.youtube.com/player_api';

    const firstScriptTag = document.getElementsByTagName('script')[0];

    firstScriptTag.parentNode.insertBefore(youTubeAPITag, firstScriptTag);

    // self.onYouTubePlayerAPIReady = () => {
    self.onYouTubeIframeAPIReady = () => {
      each((video) => video.player = new self.YT.Player(video.el,
            video.playerOptions),
        videos);
    };
  }
  else {
    startSequence();
  }


  // Audio analysis

  const audioAnalyser = analyser(audio);

  audioAnalyser.analyser.fftSize = 2**11;

  const audioTrigger = new AudioTrigger(audioAnalyser, config.audioOrders);

  const audioTexture = new AudioTexture(gl,
      audioTrigger.dataOrder(state.audioOrder));


  // Animation setup

  const tracks = {
    main: state,
    lightColor: state.lightColor,
    fadeColor: state.fadeColor
  };

  const tracksStart = {
    main: { ...state },
    lightColor: state.lightColor.slice(0),
    fadeColor: state.fadeColor.slice(0)
  };

  const player = new Player(map(() => [], tracks, {}), tracks);

  // Set up the start/reset frame
  player.apply((track, key) => {
    const start = tracksStart[key];

    track.to({
      to: start,
      time: 200,
      call: [() => console.log('reset', key,
        JSON.stringify(start).replace(/\,/gi, ',\n'))]
    });

    return { apply: start };
  });

  // Hand over the rest to the param-defined animation
  if(config.animation) {
    audio.addEventListener('durationchange',
      () => animations[config.animation](player, endSequence, audio),
      false);
  }


  const scrub = () => {
    if(audio.currentTime >= 0 && !audio.paused && config.animation) {
      player.playFrom(audio.currentTime*1000, 0);
    }
  };


  // audio.addEventListener('seeked', scrub);
  audio.addEventListener('play', scrub);


  // Interaction
  document.body.addEventListener('pointermove', (e) => {
      if(e.isPrimary) {
        offset(e, document.body, pointer);

        const l = state.interact-1;

        pointer[0] = mapRange(pointer[0], 0, viewRes[0], -l, l);
        pointer[1] = mapRange(pointer[1], 0, viewRes[1], l, -l);
      }
    },
    false);

  document.body.addEventListener('pointerdown',
    () => bump = state.interact*0.1, false);


  // The main loop
  function render() {
    const dt = timers.main.tick().dt;


    // Animate

    if(audio.currentTime >= 0 && !audio.paused && config.animation) {
      timers.player.tick(audio.currentTime*1000);
      player.play(timers.player.time);
    }

    // For guaging time accurately by looking at the video recording
    progress.style.width = (audio.currentTime/audio.duration*100)+'%';


    // Sample audio

    audioTrigger.sample(dt, state.audioMode);
    // @todo Hack, remove - may cause breaks
    audioTexture.array.data = audioTrigger.dataOrder(state.audioOrder);
    audioTexture.apply();

    let audioPeak = peakPos(audioTexture.array.data);


    // Render

    gl.viewport(0, 0, viewRes[0], viewRes[1]);
    screen.bind();


    // Light pass
    /**
     * @todo May need to do this twice, each having their own alpha inputs:
     *       - For the current light, which gets after-imaged
     *       - For a separate flash layer, which doesn't
     */

    buffers.light.bind();
    shaders.light.bind();

    Object.assign(shaders.light.uniforms, {
        time: timers.main.time,
        dt: timers.main.dt,

        viewSize,
        viewRes,

        audio: audioTexture.texture.bind(0),

        audioScale: state.audioScale,

        peak: audioPeak.peak,
        peakPos: audioPeak.pos/audioTexture.array.data.length,
        mean: meanWeight(audioTexture.array.data, state.meanFulcrum),

        frequencies: audioAnalyser.analyser.frequencyBinCount,
        harmonies: state.harmonies,
        silent: state.silent,
        soundSmooth: state.soundSmooth,
        soundWarp: state.soundWarp,

        noiseWarp: state.noiseWarp,
        noiseSpeed: state.noiseSpeed,
        noiseScale: state.noiseScale,

        spin: state.spin,

        ringRadius: state.ringRadius,
        ringThick: state.ringThick,
        ringAlpha: state.ringAlpha,

        otherRadius: state.otherRadius,
        otherThick: state.otherThick,
        otherEdge: state.otherEdge,
        otherAlpha: state.otherAlpha,

        triangleRadius: state.triangleRadius,
        triangleFat: state.triangleFat,
        triangleEdge: state.triangleEdge,
        triangleAlpha: state.triangleAlpha,

        staticScale: state.staticScale,
        staticSpeed: state.staticSpeed,
        staticShift: state.staticShift,
        staticAlpha: state.staticAlpha,

        cameraView,
        cameraProjection,

        bump
      });

    screen.draw();


    // Fade pass

    buffers.fade[0].bind();
    // gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    shaders.fade.bind();

    Object.assign(shaders.fade.uniforms, {
        time: timers.main.time,
        dt: timers.main.dt,

        viewSize,
        viewRes,

        next: buffers.light.color[0].bind(0),
        past: buffers.fade[1].color[0].bind(1),
        // @todo Bring audio stuff here as well?

        grow: state.grow,
        growLimit: state.growLimit,

        // @todo Spin this too?
        // spinPast: state.spinPast,

        jitter: state.jitter,

        fadeAlpha: state.fadeAlpha,

        cameraView,
        cameraProjection
      });

    screen.draw();


    // Draw pass

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    shaders.draw.bind();

    Object.assign(shaders.draw.uniforms, {
        viewRes,

        light: buffers.light.color[0].bind(0),
        fade: buffers.fade[0].color[0].bind(1),

        lightColor: state.lightColor,
        fadeColor: state.fadeColor,

        bokehRadius: state.bokehRadius,
        bokehAmount: state.bokehAmount
      });

    screen.draw();


    // Step the fade
    step(buffers.fade);

    // Finish up
    screen.unbind();


    const damping = 0.99;

    camera.position[0] = pointer[0] *= damping;
    camera.position[1] = pointer[1] *= damping;

    bump *= damping;

    camera.view(cameraView);
  }

  function resize() {
    canvas.width = self.innerWidth;
    canvas.height = self.innerHeight;

    viewRes[0] = gl.drawingBufferWidth;
    viewRes[1] = gl.drawingBufferHeight;

    containAspect(viewSize, viewRes);

    buffers.light.shape = viewRes;
    buffers.fade[0].shape = buffers.fade[1].shape = viewRes;

    const aspect = viewRes[0]/viewRes[1];
    const fov = Math.PI/2.5;
    const near = 0;
    const far = 1;

    mat4.perspective(cameraProjection, fov, aspect, near, far);
  }


  // Go

  self.addEventListener('resize', throttle(resize, 200), false);

  resize();
};
