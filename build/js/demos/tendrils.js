/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _demo = __webpack_require__(2);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var readyStates = ['loading', 'interactive', 'complete'];
	
	// Load in stages.
	/**
	 * Entry point.
	 * @main Index
	 */
	
	var readyCallbacks = {
	    loading: function loading() {
	        document.addEventListener('readystatechange', updateState);
	    },
	    interactive: function interactive() {
	        (0, _demo2.default)(document.querySelector('canvas'), null, true);
	
	        document.removeEventListener('readystatechange', updateState);
	    }
	};
	var last = 0;
	
	function updateState() {
	    for (var s = readyStates.indexOf(document.readyState); last <= s; ++last) {
	        var callback = readyCallbacks[readyStates[last]];
	
	        if (callback) {
	            callback();
	        }
	    }
	}
	
	updateState();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* global Map */
	
	__webpack_require__(3);
	
	var _glContext = __webpack_require__(4);
	
	var _glContext2 = _interopRequireDefault(_glContext);
	
	var _vkey = __webpack_require__(6);
	
	var _vkey2 = _interopRequireDefault(_vkey);
	
	var _getusermedia = __webpack_require__(7);
	
	var _getusermedia2 = _interopRequireDefault(_getusermedia);
	
	var _webAudioAnalyser = __webpack_require__(18);
	
	var _webAudioAnalyser2 = _interopRequireDefault(_webAudioAnalyser);
	
	var _soundcloudBadge = __webpack_require__(19);
	
	var _soundcloudBadge2 = _interopRequireDefault(_soundcloudBadge);
	
	var _mouseEventOffset = __webpack_require__(31);
	
	var _mouseEventOffset2 = _interopRequireDefault(_mouseEventOffset);
	
	var _throttle = __webpack_require__(32);
	
	var _throttle2 = _interopRequireDefault(_throttle);
	
	var _rangeFit = __webpack_require__(45);
	
	var _rangeFit2 = _interopRequireDefault(_rangeFit);
	
	var _mat = __webpack_require__(51);
	
	var _mat2 = _interopRequireDefault(_mat);
	
	var _vec = __webpack_require__(53);
	
	var _vec2 = _interopRequireDefault(_vec);
	
	var _querystring = __webpack_require__(21);
	
	var _querystring2 = _interopRequireDefault(_querystring);
	
	var _toSource = __webpack_require__(54);
	
	var _toSource2 = _interopRequireDefault(_toSource);
	
	var _glShader = __webpack_require__(56);
	
	var _glShader2 = _interopRequireDefault(_glShader);
	
	var _prefixes = __webpack_require__(82);
	
	var _prefixes2 = _interopRequireDefault(_prefixes);
	
	var _datGui = __webpack_require__(83);
	
	var _datGui2 = _interopRequireDefault(_datGui);
	
	var _protocolRedirect = __webpack_require__(86);
	
	var _protocolRedirect2 = _interopRequireDefault(_protocolRedirect);
	
	var _timer = __webpack_require__(87);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _2 = __webpack_require__(88);
	
	var _pixels = __webpack_require__(135);
	
	var spawnPixels = _interopRequireWildcard(_pixels);
	
	var _index = __webpack_require__(136);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _bestSample = __webpack_require__(137);
	
	var _bestSample2 = _interopRequireDefault(_bestSample);
	
	var _flowSample = __webpack_require__(138);
	
	var _flowSample2 = _interopRequireDefault(_flowSample);
	
	var _dataSample = __webpack_require__(139);
	
	var _dataSample2 = _interopRequireDefault(_dataSample);
	
	var _ball = __webpack_require__(140);
	
	var _ball2 = _interopRequireDefault(_ball);
	
	var _geometry = __webpack_require__(144);
	
	var _geometry2 = _interopRequireDefault(_geometry);
	
	var _audio = __webpack_require__(148);
	
	var _audio2 = _interopRequireDefault(_audio);
	
	var _dataTexture = __webpack_require__(163);
	
	var _dataTexture2 = _interopRequireDefault(_dataTexture);
	
	var _analyse = __webpack_require__(159);
	
	var _multi = __webpack_require__(166);
	
	var _multi2 = _interopRequireDefault(_multi);
	
	var _animate = __webpack_require__(180);
	
	var _animate2 = _interopRequireDefault(_animate);
	
	var _screen = __webpack_require__(122);
	
	var _screen2 = _interopRequireDefault(_screen);
	
	var _blend = __webpack_require__(189);
	
	var _blend2 = _interopRequireDefault(_blend);
	
	var _index3 = __webpack_require__(124);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _blur = __webpack_require__(191);
	
	var _blur2 = _interopRequireDefault(_blur);
	
	var _partial = __webpack_require__(192);
	
	var _reduce = __webpack_require__(162);
	
	var _reduce2 = _interopRequireDefault(_reduce);
	
	var _map = __webpack_require__(161);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _each = __webpack_require__(149);
	
	var _each2 = _interopRequireDefault(_each);
	
	var _filter = __webpack_require__(185);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	_toSource2.default.defaultFnFormatter = function (depth, f) {
	    return f.name;
	};
	// toSource.defaultFnFormatter = toSource.simpleFnFormatter;
	
	exports.default = function (canvas, settings, debug) {
	    if ((0, _protocolRedirect2.default)()) {
	        return;
	    }
	
	    var queries = _querystring2.default.parse(location.search.slice(1));
	    var defaultSettings = (0, _2.defaults)();
	    var defaultState = defaultSettings.state;
	
	    // Main init
	
	    var gl = (0, _glContext2.default)(canvas, _2.glSettings, render);
	
	    // Print out some GL parameters we depend on, for remote debugging
	    console.log('Maximum texture units', '| vertex:', gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS), '| fragment:', gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), '| combined:', gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
	
	    var timer = {
	        tendrils: defaultSettings.timer,
	        player: new _timer2.default(0)
	    };
	
	    // Tendrils init
	
	    var tendrils = new _2.Tendrils(gl, {
	        timer: timer.tendrils,
	        numBuffers: 1
	    });
	
	    var resetSpawner = (0, _ball2.default)(gl);
	
	    // Some convenient shorthands
	
	    var respawn = function respawn() {
	        return resetSpawner.spawn(tendrils);
	    };
	    var reset = function reset() {
	        return tendrils.reset();
	    };
	    var restart = function restart() {
	        tendrils.clear();
	        respawn();
	    };
	    var clear = function clear() {
	        return tendrils.clear();
	    };
	    var clearView = function clearView() {
	        return tendrils.clearView();
	    };
	    var clearFlow = function clearFlow() {
	        return tendrils.clearFlow();
	    };
	
	    var state = tendrils.state;
	
	    // Audio init
	
	    var audioDefaults = {
	        trackURL: queries.track ? decodeURIComponent(queries.track) : 'https://soundcloud.com/max-cooper/trust-feat-kathrin-deboer',
	
	        audible: '' + queries.mute !== 'true',
	
	        track: parseFloat(queries.track_in || 1, 10),
	        trackFlowAt: 1.3,
	        trackFastAt: 0.075,
	        trackFormAt: 0.04,
	        trackSampleAt: 0.08,
	        trackCamAt: 0.0075,
	        trackSpawnAt: 0.1,
	
	        mic: parseFloat(queries.mic_in || 1.2, 10),
	        micFlowAt: 0.5,
	        micFastAt: 0.6,
	        micFormAt: 0.4,
	        micSampleAt: 0.4,
	        micCamAt: 0.042,
	        micSpawnAt: 0.09
	    };
	
	    // Track and analyser init
	
	    var track = new Audio();
	    var audioState = _extends({}, audioDefaults);
	
	    Object.assign(track, {
	        crossOrigin: 'anonymous',
	        controls: true,
	        autoplay: true,
	        className: 'track'
	    });
	
	    // @todo Stereo: true
	    // @todo Delay node to compensate for wait in analysing values?
	
	    var trackAnalyser = (0, _webAudioAnalyser2.default)(track, { audible: audioState.audible });
	
	    trackAnalyser.analyser.fftSize = Math.pow(2, 8);
	
	    var trackTrigger = new _audio2.default(trackAnalyser, 4);
	
	    // Mic refs
	    var micAnalyser = void 0;
	    var micTrigger = void 0;
	
	    // Track setup
	
	    var setupTrack = function setupTrack(src) {
	        var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : canvas.parentElement;
	
	        if (track.src !== src) {
	            track.src = src;
	            track.currentTime = 0;
	        }
	
	        if (track.parentElement !== el) {
	            el.appendChild(track);
	        }
	
	        return track;
	    };
	
	    var setupTrackURL = function setupTrackURL() {
	        var trackURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : audioState.trackURL;
	
	        var old = document.querySelector('.npm-scb-white');
	
	        if (old) {
	            old.parentElement.removeChild(old);
	        }
	
	        if (trackURL.match(/^(https?)?(\:\/\/)?(www\.)?soundcloud\.com\//gi)) {
	            (0, _soundcloudBadge2.default)({
	                client_id: '75aca2e2b815f9f5d4e92916c7b80846',
	                song: trackURL,
	                dark: false
	            }, function (e, src, data, el) {
	                if (e) {
	                    throw e;
	                } else {
	                    setupTrack(src, el.querySelector('.npm-scb-info'));
	                    el.querySelector('.npm-scb-wrap').classList.add('open');
	                }
	            });
	        } else if (trackURL.match(/^(https)?(:\/\/)?(www\.)?dropbox\.com\/s\//gi)) {
	            setupTrack(trackURL.replace(/^((https)?(:\/\/)?(www\.)?)dropbox\.com\/s\/(.*)\?dl=(0)$/gi, 'https://dl.dropboxusercontent.com/s/$5?dl=1&raw=1'));
	        } else {
	            setupTrack(trackURL);
	        }
	    };
	
	    setupTrackURL();
	
	    // Flow inputs
	
	    var flowInputs = new _multi2.default(gl);
	
	    var pointerFlow = function pointerFlow(e) {
	        var pos = (0, _mouseEventOffset2.default)(e, canvas, _vec2.default.create());
	
	        pos[0] = (0, _rangeFit2.default)(pos[0], 0, tendrils.viewRes[0], -1, 1);
	        pos[1] = (0, _rangeFit2.default)(pos[1], 0, tendrils.viewRes[1], 1, -1);
	
	        flowInputs.get(e.pointerId).add(timer.tendrils.time, pos);
	    };
	
	    canvas.addEventListener('pointermove', pointerFlow, false);
	
	    // Spwan feedback loop from flow
	    /**
	     * @todo The aspect ratio might be wrong here - always seems to converge on
	     *       horizontal/vertical lines, like it were stretched.
	     */
	
	    var flowPixelSpawner = new spawnPixels.PixelSpawner(gl, {
	        shader: [spawnPixels.defaults().shader[0], _flowSample2.default],
	        buffer: tendrils.flow
	    });
	
	    var flowPixelScales = {
	        'normal': [1, -1],
	        // This flips the lookup, which is interesting (reflection)
	        'mirror x': [-1, -1],
	        'mirror y': [1, 1],
	        'mirror xy': [-1, 1]
	    };
	
	    var flowPixelDefaults = {
	        scale: 'mirror xy'
	    };
	    var flowPixelState = _extends({}, flowPixelDefaults);
	
	    function spawnFlow() {
	        _vec2.default.div(flowPixelSpawner.spawnSize, flowPixelScales[flowPixelState.scale], tendrils.viewSize);
	
	        flowPixelSpawner.spawn(tendrils);
	    }
	
	    // Spawn on fastest particles.
	
	    var simplePixelSpawner = new spawnPixels.PixelSpawner(gl, {
	        shader: [spawnPixels.defaults().shader[0], _dataSample2.default],
	        buffer: null
	    });
	
	    function spawnFastest() {
	        simplePixelSpawner.buffer = tendrils.particles.buffers[0];
	        simplePixelSpawner.spawnSize = tendrils.particles.shape;
	        simplePixelSpawner.spawn(tendrils);
	    }
	
	    // Respawn from geometry (platonic forms)
	
	    var geometrySpawner = new _geometry2.default(gl, {
	        speed: 0.005,
	        bias: 100 / 0.005
	    });
	
	    var spawnForm = function spawnForm() {
	        return geometrySpawner.shuffle().spawn(tendrils);
	    };
	
	    // Cam and mic
	
	    var camShaders = {
	        direct: (0, _glShader2.default)(gl, spawnPixels.defaults().shader[0], _index2.default),
	        sample: (0, _glShader2.default)(gl, spawnPixels.defaults().shader[0], _bestSample2.default)
	    };
	
	    var camSpawner = new spawnPixels.PixelSpawner(gl, { shader: null });
	
	    var video = null;
	    var mediaStream = null;
	
	    var videoFrame = new Image();
	
	    videoFrame.src = '/build/images/max-kath.jpg';
	
	    videoFrame.addEventListener('load', function () {
	        if (!video) {
	            camSpawner.buffer.shape = tendrils.colorMap.shape = [videoFrame.width, videoFrame.height];
	        }
	    });
	
	    var spawnCam = function spawnCam() {
	        camSpawner.shader = camShaders.direct;
	        camSpawner.speed = 0.3;
	        camSpawner.setPixels(video || videoFrame);
	        camSpawner.spawn(tendrils);
	    };
	
	    var spawnSampleCam = function spawnSampleCam() {
	        camSpawner.shader = camShaders.sample;
	        camSpawner.speed = 1;
	        camSpawner.setPixels(video || videoFrame);
	        camSpawner.spawn(tendrils);
	    };
	
	    (0, _getusermedia2.default)({
	        video: true,
	        audio: true
	    }, function (e, stream) {
	        if (e) {
	            throw e;
	        } else {
	            (function () {
	                mediaStream = stream;
	
	                var v = Object.assign(document.createElement('video'), {
	                    src: self.URL.createObjectURL(stream),
	                    controls: true,
	                    muted: true,
	                    className: 'cam-stream'
	                });
	
	                v.addEventListener('canplay', function () {
	                    video = v;
	
	                    camSpawner.buffer.shape = tendrils.colorMap.shape = [video.videoWidth, video.videoHeight];
	
	                    _mat2.default.scale(camSpawner.spawnMatrix, _mat2.default.identity(camSpawner.spawnMatrix), [-1, 1]);
	
	                    camSpawner.setPixels(video);
	                });
	
	                v.play();
	                // canvas.parentElement.appendChild(video);
	
	
	                // @todo Gain node to control unpredictable audio environment?
	
	                micAnalyser = (0, _webAudioAnalyser2.default)(stream, { audible: false });
	                micAnalyser.analyser.fftSize = Math.pow(2, 7);
	
	                micTrigger = new _audio2.default(micAnalyser, 3);
	            })();
	        }
	    });
	
	    var stopUserMedia = function stopUserMedia() {
	        var stream = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mediaStream;
	        return stream && (0, _each2.default)(function (track) {
	            return track.stop();
	        }, stream.getTracks());
	    };
	
	    // Color map blending
	
	    var audioTexture = new _dataTexture2.default(gl, trackAnalyser.analyser.frequencyBinCount);
	
	    var blend = new _blend2.default(gl, {
	        views: [audioTexture.texture, camSpawner.buffer],
	        alphas: [0.3, 0.8]
	    });
	
	    // Audio `react` and `test` function pairs - for `AudioTrigger.fire`
	    /**
	     * @todo Move this cache stuff to `analyse` or a dedicated module, to handle
	     *       more subtle cases (like one analysis of data being used by others)?
	     *       Might need a cache per analysis function (WeakMap keyed on the
	     *       array of data), or explicit string keys.
	     */
	
	    var audioCache = new Map();
	
	    var audioFirer = function audioFirer(threshold, key, test) {
	        return function (trigger) {
	            var t = threshold();
	
	            if (t) {
	                var cached = audioCache.get(key);
	
	                if (cached) {
	                    return cached;
	                } else {
	                    var value = test(trigger, t);
	
	                    audioCache.set(key, value);
	
	                    return value;
	                }
	            } else {
	                return t;
	            }
	        };
	    };
	
	    var trackFires = [[spawnFlow, audioFirer(function () {
	        return audioState.track * audioState.trackFlowAt;
	    }, 'meanWeight(track, 1, 0.25)',
	    // Low end - velocity
	    function (trigger, t) {
	        return (0, _analyse.meanWeight)(trigger.dataOrder(1), 0.25) > t;
	    })], [spawnFastest, audioFirer(function () {
	        return audioState.track * audioState.trackFastAt;
	    }, 'meanWeight(track, 2, 0.8)',
	    // High end - acceleration
	    function (trigger, t) {
	        return (0, _analyse.meanWeight)(trigger.dataOrder(2), 0.8) > t;
	    })], [spawnForm, audioFirer(function () {
	        return audioState.track * audioState.trackFormAt;
	    }, 'abs(peak(track, 3))',
	    // Sudden click/hit - force/attack
	    function (trigger, t) {
	        return Math.abs((0, _analyse.peak)(trigger.dataOrder(3))) > t;
	    })], [spawnSampleCam, audioFirer(function () {
	        return audioState.track * audioState.trackSampleAt;
	    }, 'meanWeight(track, 2, 0.25)',
	    // Low end - acceleration
	    function (trigger, t) {
	        return (0, _analyse.meanWeight)(trigger.dataOrder(2), 0.25) > t;
	    })], [spawnCam, audioFirer(function () {
	        return audioState.track * audioState.trackCamAt;
	    }, 'meanWeight(track, 3, 0.5)',
	    // Mid - force/attack
	    function (trigger, t) {
	        return (0, _analyse.meanWeight)(trigger.dataOrder(3), 0.5) > t;
	    })], [restart, audioFirer(function () {
	        return audioState.track * audioState.trackSpawnAt;
	    }, 'meanWeight(track, 3, 0.25)',
	    // Low end - acceleration
	    function (trigger, t) {
	        return (0, _analyse.meanWeight)(trigger.dataOrder(2), 0.25) > t;
	    })]];
	
	    var micFires = [[spawnFlow, audioFirer(function () {
	        return audioState.mic * audioState.micFlowAt;
	    }, 'meanWeight(mic, 1, 0.3)',
	    // Low end - velocity
	    function (trigger, t) {
	        return (0, _analyse.meanWeight)(trigger.dataOrder(1), 0.3) > t;
	    })], [spawnFastest, audioFirer(function () {
	        return audioState.mic * audioState.micFastAt;
	    }, 'meanWeight(mic, 1, 0.7)',
	    // High end - velocity
	    function (trigger, t) {
	        return (0, _analyse.meanWeight)(trigger.dataOrder(1), 0.7) > t;
	    })], [spawnForm, audioFirer(function () {
	        return audioState.mic * audioState.micFormAt;
	    }, 'abs(peak(mic, 2))',
	    // Sudden click/hit - acceleration
	    function (trigger, t) {
	        return Math.abs((0, _analyse.peak)(trigger.dataOrder(2))) > t;
	    })], [spawnSampleCam, audioFirer(function () {
	        return audioState.mic * audioState.micSampleAt;
	    }, 'meanWeight(mic, 1, 0.4)',
	    // Mid - velocity
	    function (trigger, t) {
	        return (0, _analyse.meanWeight)(trigger.dataOrder(1), 0.4) > t;
	    })], [spawnCam, audioFirer(function () {
	        return audioState.mic * audioState.micCamAt;
	    }, 'meanWeight(mic, 2, 0.6)',
	    // Mid - acceleration
	    function (trigger, t) {
	        return (0, _analyse.meanWeight)(trigger.dataOrder(2), 0.6) > t;
	    })], [restart, audioFirer(function () {
	        return audioState.mic * audioState.micSpawnAt;
	    }, 'meanWeight(mic, 2, 0.3)',
	    // Low end - acceleration
	    function (trigger, t) {
	        return (0, _analyse.meanWeight)(trigger.dataOrder(2), 0.3) > t;
	    })]];
	
	    // Returns a function to be executed for each `fire` pair (as above)
	    var audioResponder = function audioResponder(trigger) {
	        return function (fire) {
	            return trigger.fire.apply(trigger, _toConsumableArray(fire));
	        };
	    };
	
	    var trackResponder = void 0;
	    var micResponder = void 0;
	
	    var audioResponse = function audioResponse() {
	        // Sequential, and only one at a time, to calm the audio response
	        var soundOutput = false;
	
	        if (audioState.track > 0 && !track.paused) {
	            soundOutput = trackFires.some(trackResponder || (trackResponder = audioResponder(trackTrigger)));
	        }
	
	        if (!soundOutput && audioState.mic > 0 && micTrigger) {
	            soundOutput = micFires.some(micResponder || (micResponder = audioResponder(micTrigger)));
	        }
	
	        audioCache.clear();
	
	        return soundOutput;
	    };
	
	    // Animation setup
	
	    var tracks = {
	        tendrils: tendrils.state,
	        tendrils2: tendrils.state,
	        baseColor: tendrils.state.baseColor,
	        flowColor: tendrils.state.flowColor,
	        fadeColor: tendrils.state.fadeColor,
	        spawn: resetSpawner.uniforms,
	        audio: audioState,
	        blend: blend.alphas
	    };
	
	    var player = new _animate2.default((0, _map2.default)(function () {
	        return [];
	    }, tracks, {}), tracks);
	
	    // timer.player.end = player.end()+2000;
	    // timer.player.loop = true;
	
	
	    // @todo Test sequence - move to own file?
	
	    var tracksStart = {
	        tendrils: {
	            rootNum: 512,
	            autoClearView: false,
	
	            damping: 0.043,
	            speedLimit: 0.01,
	
	            forceWeight: 0.015,
	            varyForce: -0.15,
	
	            flowWeight: 1,
	            varyFlow: 0.25,
	
	            flowDecay: 0.0025,
	            flowWidth: 5,
	
	            lineWidth: 1,
	            speedAlpha: 0.0005,
	            colorMapAlpha: 0.9
	        },
	        tendrils2: {
	            noiseWeight: 0.0001,
	            varyNoise: 0.3,
	
	            noiseScale: 1.5,
	            varyNoiseScale: 1,
	
	            noiseSpeed: 0.0006,
	            varyNoiseSpeed: 0.1
	        },
	        baseColor: [1, 1, 1, 0.9],
	        flowColor: [1, 1, 1, 0.1],
	        fadeColor: [0, 0, 0, 0.1],
	        spawn: {
	            radius: 0.9,
	            speed: 0.05
	        },
	        audio: {
	            trackFlowAt: 0,
	            trackFastAt: 0,
	            trackFormAt: 0,
	            trackSampleAt: 0,
	            trackCamAt: 0,
	            trackSpawnAt: 0,
	            micFlowAt: audioDefaults.micFlowAt,
	            micFastAt: audioDefaults.micFastAt,
	            micFormAt: 0,
	            micSampleAt: 0,
	            micCamAt: 0,
	            micSpawnAt: 0
	        },
	        blend: [1, 0]
	    };
	
	    // Restart, clean slate; begin with the inert, big bang - flow only
	
	    var trackStartTime = 200;
	
	    player.tracks.tendrils.to({
	        call: [reset],
	        time: 60
	    }).to({
	        call: [restart, function () {
	            return canvas.classList.remove('light');
	        }],
	        time: trackStartTime
	    });
	
	    player.apply(function (track, key) {
	        var apply = tracksStart[key];
	
	        track.to({
	            to: apply,
	            time: trackStartTime
	        });
	
	        return { apply: apply };
	    });
	
	    // Blur vignette
	    var screen = new _screen2.default(gl);
	    var blurShader = (0, _glShader2.default)(gl, _index4.default, _blur2.default);
	
	    // The main loop
	    function render() {
	        var dt = timer.tendrils.tick().dt;
	
	        if (track && track.currentTime >= 0 && !track.paused) {
	            timer.player.tick(track.currentTime * 1000);
	            player.play(timer.player.time);
	        }
	
	        /**
	         * @todo Spectogram with frequencies on x-axis, waveform on y; or
	         *       something better than this 1D list.
	         */
	        audioTexture.frequencies(trackTrigger.dataOrder(0)).apply();
	
	        // Blend the color maps into tendrils one
	        // @todo Only do this if necessary (skip if none or only one has alpha)
	        blend.draw(tendrils.colorMap);
	
	        // The main event
	        tendrils.step().draw();
	
	        if (tendrils.buffers.length) {
	            // Blur to the screen
	
	            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	            gl.clear(gl.COLOR_BUFFER_BIT);
	
	            blurShader.bind();
	
	            Object.assign(blurShader.uniforms, {
	                view: tendrils.buffers[0].color[0].bind(0),
	                resolution: tendrils.viewRes,
	                time: tendrils.timer.time
	            });
	
	            screen.render();
	
	            tendrils.stepBuffers();
	        }
	
	        // Draw inputs to flow
	
	        gl.viewport.apply(gl, [0, 0].concat(_toConsumableArray(tendrils.flow.shape)));
	
	        tendrils.flow.bind();
	
	        flowInputs.trim(1 / tendrils.state.flowDecay, timer.tendrils.time);
	
	        (0, _each2.default)(function (flowLine) {
	            Object.assign(flowLine.line.uniforms, tendrils.state);
	            flowLine.update().draw();
	        }, flowInputs.active);
	
	        // React to sound - from highest reaction to lowest, max one per frame
	
	        trackTrigger && trackTrigger.sample(dt);
	        micTrigger && micTrigger.sample(dt);
	
	        audioResponse();
	    }
	
	    function resize() {
	        canvas.width = self.innerWidth;
	        canvas.height = self.innerHeight;
	
	        tendrils.resize();
	    }
	
	    // Go
	
	    self.addEventListener('resize', (0, _throttle2.default)(resize, 200), false);
	
	    resize();
	
	    tendrils.setup();
	    setupSequence();
	    respawn();
	
	    function setupSequence() {
	        // Start off inert - broad wave, to isolated areas of activity
	
	        player.tracks.tendrils.smoothTo({
	            to: {
	                forceWeight: 0.01,
	                flowWeight: 0.02,
	                flowDecay: 0.003
	            },
	            time: 13000,
	            ease: [0, 0.95, 1]
	        });
	
	        player.tracks.tendrils2.smoothTo({
	            to: {
	                noiseWeight: 0.002
	            },
	            time: 13000,
	            ease: [0, 0.95, 1]
	        }).smoothTo({
	            to: {
	                noiseScale: 100,
	                varyNoiseScale: 0.05,
	                noiseSpeed: 0
	            },
	            time: 16000,
	            ease: [0, 0.95, 1]
	        });
	
	        player.tracks.audio.over(100, {
	            to: {
	                micFlowAt: 0,
	                micFastAt: 0
	            },
	            time: 13000
	        });
	
	        player.tracks.baseColor.to({
	            to: [1, 1, 1, 0.8],
	            time: 5000,
	            ease: [0, 0, 1]
	        });
	
	        // To primordial
	
	        // Start scaling, and suggest some life
	
	        player.tracks.tendrils.smoothOver(22900 - 19000, {
	            to: {
	                forceWeight: 0.014,
	                varyForce: 0.3,
	                flowWeight: 0.1,
	                varyFlow: 0.4
	            },
	            time: 22900,
	            ease: [0, 0.95, 1]
	        });
	
	        player.tracks.tendrils2.smoothOver(22900 - 13000, {
	            to: {
	                noiseScale: 50,
	                varyNoiseScale: 0.1
	            },
	            time: 22900,
	            ease: [0, -0.1, 0.7, 1]
	        });
	
	        // Start the audio response, bit more life
	
	        player.tracks.audio.over(100, {
	            to: {
	                trackFlowAt: audioDefaults.trackFlowAt,
	                trackFastAt: audioDefaults.trackFastAt,
	                micFlowAt: audioDefaults.micFlowAt,
	                micFastAt: audioDefaults.micFastAt
	            },
	            call: [spawnFastest, spawnFlow],
	            time: 23000
	        });
	
	        // Flip colors
	
	        player.tracks.tendrils.over(300, {
	            to: {
	                colorMapAlpha: 0.1
	            },
	            time: 25000
	        });
	
	        player.tracks.baseColor.over(300, {
	            to: [0, 0, 0, 0.85],
	            time: 25000
	        });
	
	        player.tracks.flowColor.over(300, {
	            to: [1, 1, 1, 0.08],
	            time: 25000
	        });
	
	        player.tracks.fadeColor.over(500, {
	            to: [1, 1, 1, 0.1],
	            time: 25000
	        });
	
	        // Give it some more flow
	
	        player.tracks.tendrils.smoothOver(35000 - 26000, {
	            to: {
	                flowWeight: 1,
	                varyFlow: 0.3
	            },
	            call: [spawnFlow],
	            time: 35000,
	            ease: [0, -0.1, 0.95, 1]
	        });
	
	        // Get the percussion in
	
	        player.tracks.audio.over(300, {
	            to: {
	                trackFormAt: audioDefaults.trackFormAt,
	                micFormAt: audioDefaults.micFormAt
	            },
	            call: [spawnForm],
	            time: 35000
	        });
	
	        // Scale up again for the next drop, and free things up
	
	        player.tracks.tendrils2.smoothOver(60000 - 51000, {
	            to: {
	                noiseScale: 15,
	                varyNoiseScale: 2,
	                noiseSpeed: 0.00025
	            },
	            time: 60000,
	            ease: [0, -0.1, 0.95, 1]
	        });
	
	        // Break to ovum, seed
	
	        player.tracks.tendrils.smoothOver(70000 - 63000, {
	            to: {
	                forceWeight: 0.015,
	                varyForce: 0.3,
	                speedAlpha: 0,
	                colorMapAlpha: 0
	            },
	            time: 70000,
	            ease: [0, -0.1, 0.95, 1]
	        }).smoothTo({
	            to: {
	                forceWeight: 0.015,
	                varyForce: 0.1,
	                varyFlow: 0.2,
	                speedAlpha: 0.0005,
	                colorMapAlpha: 0.12
	            },
	            time: 94000,
	            ease: [0, 0.95, 1]
	        });
	
	        player.tracks.tendrils2.smoothOver(70000 - 63000, {
	            to: {
	                noiseScale: 2.5
	            },
	            time: 70000,
	            ease: [0, -0.1, 0.95, 1]
	        }).smoothTo({
	            to: {
	                noiseScale: 0.7
	            },
	            time: 94000,
	            ease: [0, -0.1, 0.95, 1]
	        });
	
	        // Set up the circle seed spawn
	
	        player.tracks.spawn.over(50, {
	            to: {
	                radius: 0.05,
	                speed: 0.2
	            },
	            time: 70000
	        }).smoothTo({
	            to: {
	                radius: 0.9,
	                speed: 0
	            },
	            time: 94000,
	            ease: [0, 0.1, 0.95, 1]
	        });
	
	        player.tracks.flowColor.over(94000 - 70000, {
	            to: [1, 1, 1, 0.05],
	            ease: [0, 0, 1],
	            time: 94000
	        });
	
	        player.tracks.fadeColor.over(50, {
	            to: [1, 1, 1, 0],
	            call: [function () {
	                return canvas.classList.add('light');
	            }, restart],
	            time: 70050
	        }).over(50, {
	            to: [1, 1, 1, 0.3],
	            call: [function () {
	                return canvas.classList.remove('light');
	            }, restart],
	            time: 94000
	        });
	
	        // More percussion - bass transition
	
	        player.tracks.audio.over(50, {
	            to: {
	                trackFlowAt: 0,
	                micFlowAt: 0,
	                trackFastAt: 0,
	                micFastAt: 0,
	                trackSpawnAt: audioDefaults.trackSpawnAt,
	                micSpawnAt: audioDefaults.micSpawnAt
	            },
	            time: 70100
	        }).over(50, {
	            to: {
	                trackFlowAt: audioDefaults.trackFlowAt,
	                micFlowAt: audioDefaults.micFlowAt,
	                trackFastAt: audioDefaults.trackFastAt,
	                micFastAt: audioDefaults.micFastAt,
	                trackSpawnAt: 0,
	                micSpawnAt: 0
	            },
	            time: 94000
	        });
	
	        // To face
	
	        player.tracks.tendrils.to({
	            to: {
	                flowWeight: 1.2,
	                varyFlow: -0.5,
	                colorMapAlpha: 0.05
	            },
	            time: 94100
	        }).smoothTo({
	            to: {
	                flowWeight: 1,
	                varyFlow: -0.1
	            },
	            time: 107000,
	            ease: [0, 0.95, 1]
	        });
	
	        player.tracks.tendrils2.to({
	            to: {
	                noiseWeight: 0.0015,
	                noiseScale: 2,
	                varyNoiseScale: 0.5
	            },
	            time: 94100
	        }).smoothTo({
	            to: {
	                noiseWeight: 0.003,
	                noiseScale: 2.1,
	                varyNoiseScale: 3
	            },
	            time: 107000,
	            ease: [0, 0.95, 1]
	        });
	
	        player.tracks.flowColor.to({
	            to: [1, 1, 1, 0.05],
	            time: 94100
	        });
	
	        player.tracks.fadeColor.to({
	            to: [1, 1, 1, 0.1],
	            time: 107000
	        });
	
	        // To community
	
	        // 1:47-2:06 - vocal
	        // 2:08.5-2:17 - high vocal
	        // 2:17-2:22 - "trust"
	
	        player.tracks.tendrils.to({
	            to: {
	                colorMapAlpha: 0.08
	            },
	            time: 107000
	        }).over(134000 - 124000, {
	            to: {
	                colorMapAlpha: 0.9
	            },
	            time: 134000,
	            ease: [0, 0, 1]
	        }).smoothTo({
	            to: {
	                colorMapAlpha: 0.3
	            },
	            time: 138000,
	            ease: [0, 0.2, 1]
	        });
	
	        player.tracks.tendrils2.smoothOver(129000 - 124000, {
	            to: {
	                varyNoise: 0.8,
	                noiseScale: -1.5,
	                varyNoiseScale: 20,
	                noiseSpeed: 0.0003,
	                varyNoiseSpeed: 0
	            },
	            time: 129000,
	            ease: [0, 0, 1]
	        }).smoothTo({
	            to: {
	                noiseScale: 5,
	                varyNoiseScale: -4
	            },
	            time: 134000,
	            ease: [0, -0.1, 1.1, 1]
	        }).smoothTo({
	            to: {
	                varyNoise: 0.1,
	                noiseScale: 1.8,
	                varyNoiseScale: 2
	            },
	            time: 142000,
	            ease: [0, -0.05, 1.05, 1]
	        });
	
	        player.tracks.audio.over(50, {
	            to: {
	                trackSampleAt: audioDefaults.trackSampleAt,
	                micSampleAt: audioDefaults.micSampleAt
	            },
	            time: 107000
	        }).over(50, {
	            to: {
	                trackFlowAt: 0,
	                trackFastAt: 0,
	                trackFormAt: 0,
	                trackSampleAt: 0,
	                trackSpawnAt: 0,
	                micFlowAt: 0,
	                micFastAt: 0,
	                micFormAt: 0,
	                micSampleAt: 0,
	                micSpawnAt: 0,
	                trackCamAt: audioDefaults.trackCamAt * 1.2,
	                micCamAt: audioDefaults.micCamAt * 1.2
	            },
	            call: [spawnCam],
	            time: 124000
	        }).to({
	            to: {
	                trackCamAt: audioDefaults.trackCamAt * 0.8,
	                micCamAt: audioDefaults.micCamAt * 0.9
	            },
	            call: [spawnCam],
	            time: 134000,
	            ease: [0, 0, 1]
	        }).flipTo({
	            to: {
	                trackCamAt: audioDefaults.trackCamAt,
	                micCamAt: audioDefaults.micCamAt
	            },
	            call: [spawnCam],
	            time: 137000,
	            ease: [0, 0.9, 1]
	        }).over(50, {
	            to: {
	                trackCamAt: 0,
	                micCamAt: 0,
	                trackFlowAt: audioDefaults.trackFlowAt,
	                micFlowAt: audioDefaults.micFlowAt,
	                trackFastAt: audioDefaults.trackFastAt,
	                micFastAt: audioDefaults.micFastAt,
	                trackSampleAt: audioDefaults.trackSampleAt,
	                micSampleAt: audioDefaults.micSampleAt
	            },
	            time: 146000
	        });
	
	        player.tracks.blend.over(134000 - 129000, {
	            to: [0, 1],
	            time: 134000,
	            ease: [0, 0.9, 1]
	        }).smoothTo({
	            to: [0.2, 0.9],
	            time: 142000,
	            ease: [0, 0, 1]
	        }).smoothTo({
	            to: [0.75, 0.5],
	            time: 146000,
	            ease: [0, 0, 1]
	        });
	
	        player.tracks.flowColor.over(134000 - 129000, {
	            to: [0, 0, 0, 0],
	            time: 134000
	        }).over(146000 - 142000, {
	            to: [1, 1, 1, 0.05],
	            time: 146000
	        });
	
	        // 2:32-2:40-2:50 - quiet to vocal build
	
	        player.tracks.tendrils.smoothTo({
	            to: {
	                colorMapAlpha: 0.8
	            },
	            time: 174000,
	            ease: [0, 0, 1]
	        });
	
	        player.tracks.blend.over(174000 - 160000, {
	            to: [1, 0.3],
	            time: 174000
	        });
	
	        player.tracks.baseColor.over(174000 - 160000, {
	            to: [0, 0, 0, 0.2],
	            time: 174000,
	            ease: [0, 0.1, 1]
	        });
	
	        player.tracks.flowColor.over(174000 - 160000, {
	            to: [1, 1, 1, 0.15],
	            time: 174000,
	            ease: [0, 0.7, 1]
	        });
	
	        player.tracks.audio.over(50, {
	            to: {
	                trackSampleAt: 0,
	                micSampleAt: 0
	            },
	            time: 160000
	        }).over(50, {
	            to: {
	                trackFormAt: audioDefaults.trackFormAt,
	                micFormAt: audioDefaults.micFormAt
	            },
	            time: 174000
	        });
	
	        // To cohesive forms
	        // 2:54-2:56-3:07-3:19 - big vocal build, drop, fade vocal
	
	        player.tracks.tendrils.smoothTo({
	            to: {
	                flowWeight: -0.4
	            },
	            time: 187000,
	            ease: [0, 0.1, 1]
	        }).smoothTo({
	            to: {
	                flowWeight: 1,
	                colorMapAlpha: 0.3
	            },
	            time: 187400,
	            ease: [0, 0.95, 1]
	        });
	
	        player.tracks.tendrils2.smoothTo({
	            to: {
	                noiseScale: 2.1,
	                varyNoiseScale: 3
	            },
	            time: 174000,
	            ease: [0, 0.1, 1]
	        }).smoothTo({
	            to: {
	                noiseWeight: 0.008,
	                noiseScale: 0.5,
	                varyNoiseScale: 80,
	                noiseSpeed: 0.0006
	            },
	            time: 183000,
	            ease: [0, 0.1, 1.1, 1]
	        }).smoothTo({
	            to: {
	                noiseScale: 1.5,
	                varyNoiseScale: 100
	            },
	            time: 187000,
	            ease: [0, 1, 1]
	        }).to({
	            to: {
	                noiseWeight: 0.004,
	                noiseSpeed: 0.0001,
	                noiseScale: 0.5,
	                varyNoiseScale: 4
	            },
	            time: 187500
	        });
	
	        player.tracks.audio.over(185000 - 176000, {
	            to: {
	                trackFlowAt: audioDefaults.trackFlowAt * 0.2,
	                trackFastAt: audioDefaults.trackFastAt * 0.1
	            },
	            time: 185000,
	            ease: [0, 0.1, 1]
	        }).smoothTo({
	            to: {
	                trackFlowAt: audioDefaults.trackFlowAt,
	                trackFastAt: audioDefaults.trackFastAt
	            },
	            time: 187000,
	            ease: [0, 0.9, 1]
	        }).over(50, {
	            to: {
	                trackSpawnAt: audioDefaults.trackSpawnAt * 0.2,
	                micSpawnAt: audioDefaults.micSpawnAt * 0.2
	            },
	            call: [respawn],
	            time: 187200
	        }).over(50, {
	            to: {
	                trackSpawnAt: 0,
	                micSpawnAt: 0
	            },
	            time: 188000
	        });
	
	        player.tracks.spawn.over(50, {
	            to: {
	                radius: 0.05
	            },
	            time: 187000
	        }).to({
	            to: {
	                radius: 0.9
	            },
	            time: 190000
	        });
	
	        player.tracks.blend.to({
	            to: [1, 0.1],
	            time: 180000
	        }).to({
	            to: [1, 0],
	            time: 187000
	        }).to({
	            to: [1, 0.2],
	            time: 187400
	        });
	
	        player.tracks.baseColor.to({
	            to: [1, 0.9, 0.4, 0.7],
	            time: 182000,
	            ease: [0, 1, 1]
	        }).over(200, {
	            to: [1, 1, 1, 0.4],
	            time: 187400
	        });
	
	        player.tracks.flowColor.to({
	            to: [1, 0.9, 0.4, 0.25],
	            time: 186000
	        });
	
	        player.tracks.fadeColor.over(187000 - 173000, {
	            to: [0, 0, 0, 0.1],
	            time: 187000
	        }).to({
	            to: [0.12, 0.18, 0.24, 0.1],
	            time: 187400
	        });
	
	        // 3:20-3:42.5-4:15 - "reveal"-"before"-repeating
	
	        player.tracks.tendrils.smoothTo({
	            to: {
	                forceWeight: 0.014,
	                varyForce: 0.2,
	                flowWeight: 0.8,
	                colorMapAlpha: 0.4
	            },
	            time: 255000,
	            ease: [0, 0.1, 0.4, 1]
	        });
	
	        player.tracks.tendrils2.smoothTo({
	            to: {
	                noiseScale: 0.4,
	                varyNoiseScale: 12,
	                noiseSpeed: 0.0001
	            },
	            time: 254000,
	            ease: [0, 0, 1]
	        });
	
	        player.tracks.audio.over(50, {
	            to: {
	                trackSampleAt: audioDefaults.trackSampleAt,
	                micCamAt: audioDefaults.micCamAt
	            },
	            time: 196000
	        });
	
	        player.tracks.flowColor.to({
	            to: [1, 1, 1, 0.15],
	            time: 196000,
	            ease: [0, 0.1, 1]
	        });
	
	        player.tracks.blend.over(211000 - 196000, {
	            to: [0.7, 0.9],
	            time: 211000
	        });
	
	        // To artefact - bassy outro, artefact
	
	        player.tracks.tendrils.smoothTo({
	            to: {
	                forceWeight: 0.014,
	                flowWeight: -0.1,
	                speedAlpha: 0.002,
	                colorMapAlpha: 0.85
	            },
	            time: 257600,
	            ease: [0, 1, 1]
	        }).smoothOver(300, {
	            to: {
	                colorMapAlpha: 0.3
	            },
	            time: 281000,
	            ease: [0, 0, 1]
	        });
	
	        player.tracks.tendrils2.smoothTo({
	            to: {
	                noiseWeight: 0.003,
	                noiseScale: 1.2,
	                varyNoiseScale: -4,
	                noiseSpeed: 0.0003,
	                varyNoiseSpeed: 0.01
	            },
	            time: 257600,
	            ease: [0, 0, 0, 1]
	        }).smoothTo({
	            to: {
	                noiseScale: 1.8,
	                varyNoiseScale: 3,
	                noiseSpeed: 0.0001,
	                varyNoiseSpeed: 0
	            },
	            time: 262000,
	            ease: [0, -0.2, 1.2, 1]
	        });
	
	        player.tracks.audio.over(50, {
	            to: {
	                trackFlowAt: 0,
	                trackFastAt: audioDefaults.trackFastAt,
	                trackFormAt: 0,
	                trackSampleAt: 0,
	                trackCamAt: 0,
	                trackSpawnAt: 0,
	                micFlowAt: 0,
	                micFastAt: audioDefaults.micFastAt,
	                micFormAt: 0,
	                micSampleAt: 0,
	                micCamAt: 0,
	                micSpawnAt: 0
	            },
	            time: 257600
	        }).to({
	            to: {
	                trackFastAt: audioDefaults.trackFastAt * 4,
	                micFastAt: audioDefaults.micFastAt * 4
	            },
	            time: 264000
	        }).over(50, {
	            to: {
	                trackFastAt: 0,
	                micFlowAt: audioDefaults.micFlowAt,
	                micFastAt: audioDefaults.micFastAt,
	                micFormAt: audioDefaults.micFormAt,
	                micSampleAt: audioDefaults.micSampleAt,
	                micSpawnAt: audioDefaults.micSpawnAt
	            },
	            time: 283000
	        });
	
	        player.tracks.spawn.over(50, {
	            to: {
	                radius: 0.6,
	                speed: 0.01
	            },
	            time: 257600
	        });
	
	        player.tracks.blend.over(1000, {
	            to: [1, 0.05],
	            time: 259000
	        });
	
	        player.tracks.baseColor.over(1000, {
	            to: [1, 0.8, 0.2, 0.7],
	            time: 259000
	        }).over(300, {
	            to: [1, 1, 1, 0.75],
	            time: 281000,
	            ease: [0, 0, 1]
	        });
	
	        player.tracks.flowColor.over(1000, {
	            to: [1, 0.8, 0.2, 0.2],
	            time: 259000
	        }).over(300, {
	            to: [1, 1, 1, 0.6],
	            time: 281000,
	            ease: [0, 0, 1]
	        });
	
	        player.tracks.fadeColor.over(2000, {
	            to: [0.12, 0.08, 0.04, 0.1],
	            time: 259000,
	            ease: [0, 0, 1]
	        }).over(300, {
	            to: [0, 0, 0, 0.15],
	            time: 281000,
	            ease: [0, 1, 1]
	        });
	    }
	
	    if (debug) {
	        (function () {
	            var updateGUI = function updateGUI() {
	                var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gui.main;
	
	                if (node.__controllers) {
	                    node.__controllers.forEach(function (control) {
	                        return control.updateDisplay();
	                    });
	                }
	
	                for (var f in node.__folders) {
	                    updateGUI(node.__folders[f]);
	                }
	            };
	
	            var toggleGUI = function toggleGUI(open) {
	                var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : gui.main;
	
	                open ? node.open() : node.close();
	
	                for (var f in node.__folders) {
	                    toggleGUI(open, node.__folders[f]);
	                }
	            };
	
	            // Import/export
	
	            var gui = {
	                main: new _datGui2.default.GUI()
	            };
	
	            var preventKeyClash = function preventKeyClash(e) {
	                return e.stopPropagation();
	            };
	
	            gui.main.domElement.addEventListener('keydown', preventKeyClash);
	            gui.main.domElement.addEventListener('keyup', preventKeyClash);
	
	            var keyframe = function keyframe() {
	                var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _extends({}, state);
	                var call = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	                return (
	                    // @todo Apply full state to each player track
	                    player.tracks.tendrils.smoothTo({
	                        to: to,
	                        call: call,
	                        time: timer.player.time,
	                        ease: [0, 0.95, 1]
	                    })
	                );
	            };
	
	            var showExport = queries.consoleShow ? function () {
	                var _self;
	
	                return (_self = self).promt.apply(_self, arguments);
	            } : function () {
	                var _console;
	
	                return (_console = console).log.apply(_console, arguments);
	            };
	
	            var exporters = {};
	
	            var requestFullscreen = (0, _prefixes2.default)('requestFullscreen', canvas).name;
	            // Needs to be called this way because calling the below is an Illegal
	            // Invocation
	            // const fullscreen = prefixes('requestFullscreen', canvas);
	
	            if (requestFullscreen) {
	                exporters.fullScreen = function () {
	                    return canvas[requestFullscreen]();
	                };
	            }
	
	            Object.assign(exporters, {
	                showLink: function showLink() {
	                    return showExport('Link:', location.href.replace(location.search.slice(1), _querystring2.default.encode(_extends({}, queries, {
	                        track: encodeURIComponent(audioState.trackURL),
	                        mute: !audioState.audible,
	                        track_in: audioState.track,
	                        mic_in: audioState.mic
	                    }))));
	                },
	                showState: function showState() {
	                    return showExport('Current state:', timer.player.time, (0, _toSource2.default)(tracks));
	                },
	                showSequence: function showSequence() {
	                    return showExport('Animation sequence:', (0, _toSource2.default)(player.frames({})));
	                },
	                keyframe: keyframe
	            });
	
	            (0, _each2.default)(function (f, e) {
	                return gui.main.add(exporters, e);
	            }, exporters);
	
	            // Settings
	
	
	            gui.settings = gui.main.addFolder('settings');
	
	            for (var s in state) {
	                if (!_typeof(state[s]).match(/^(object|array|undefined|null)$/gi)) {
	                    var control = gui.settings.add(state, s);
	
	                    // Some special cases
	
	                    if (s === 'rootNum') {
	                        control.onFinishChange(function (n) {
	                            tendrils.setup(n);
	                            restart();
	                        });
	                    }
	                }
	            }
	
	            // DAT.GUI's color controllers are a bit fucked.
	
	            var colorDefaults = {
	                baseColor: state.baseColor.slice(0, 3).map(function (c) {
	                    return c * 255;
	                }),
	                baseAlpha: state.baseColor[3],
	
	                flowColor: state.flowColor.slice(0, 3).map(function (c) {
	                    return c * 255;
	                }),
	                flowAlpha: state.flowColor[3],
	
	                fadeColor: state.fadeColor.slice(0, 3).map(function (c) {
	                    return c * 255;
	                }),
	                fadeAlpha: state.fadeColor[3]
	            };
	
	            var colorProxy = _extends({}, colorDefaults);
	
	            var convertColors = function convertColors() {
	                state.baseColor[3] = colorProxy.baseAlpha;
	                Object.assign(state.baseColor, colorProxy.baseColor.map(function (c) {
	                    return c / 255;
	                }));
	
	                state.flowColor[3] = colorProxy.flowAlpha;
	                Object.assign(state.flowColor, colorProxy.flowColor.map(function (c) {
	                    return c / 255;
	                }));
	
	                state.fadeColor[3] = colorProxy.fadeAlpha;
	                Object.assign(state.fadeColor, colorProxy.fadeColor.map(function (c) {
	                    return c / 255;
	                }));
	            };
	
	            gui.settings.addColor(colorProxy, 'flowColor').onChange(convertColors);
	            gui.settings.add(colorProxy, 'flowAlpha').onChange(convertColors);
	
	            gui.settings.addColor(colorProxy, 'baseColor').onChange(convertColors);
	            gui.settings.add(colorProxy, 'baseAlpha').onChange(convertColors);
	
	            gui.settings.addColor(colorProxy, 'fadeColor').onChange(convertColors);
	            gui.settings.add(colorProxy, 'fadeAlpha').onChange(convertColors);
	
	            convertColors();
	
	            // Color map blend
	
	            gui.blend = gui.main.addFolder('blend');
	
	            var blendKeys = ['audio', 'cam'];
	            var blendProxy = (0, _reduce2.default)(function (proxy, k, i) {
	                proxy[k] = blend.alphas[i];
	
	                return proxy;
	            }, blendKeys, {});
	
	            var blendDefaults = _extends({}, blendProxy);
	
	            var convertBlend = function convertBlend() {
	                return (0, _reduce2.default)(function (alphas, v, k, proxy, i) {
	                    alphas[i] = v;
	
	                    return alphas;
	                }, blendProxy, blend.alphas);
	            };
	
	            for (var b = 0; b < blendKeys.length; ++b) {
	                gui.blend.add(blendProxy, blendKeys[b]).onChange(convertBlend);
	            }
	
	            // Respawn
	
	            gui.spawn = gui.main.addFolder('spawn');
	
	            for (var _s in resetSpawner.uniforms) {
	                if (!_typeof(resetSpawner.uniforms[_s]).match(/^(object|array|undefined|null)$/gi)) {
	                    gui.spawn.add(resetSpawner.uniforms, _s);
	                }
	            }
	
	            var resetSpawnerDefaults = {
	                radius: 0.3,
	                speed: 0.005
	            };
	
	            // Reflow
	
	            gui.reflow = gui.main.addFolder('reflow');
	
	            gui.reflow.add(flowPixelState, 'scale', Object.keys(flowPixelScales));
	
	            // Time
	
	            gui.time = gui.main.addFolder('time');
	
	            var timeSettings = ['paused', 'step', 'rate', 'end', 'loop'];
	
	            timeSettings.forEach(function (t) {
	                return gui.time.add(timer.tendrils, t);
	            });
	
	            // Audio
	
	            gui.audio = gui.main.addFolder('audio');
	
	            for (var _s2 in audioState) {
	                var _control = gui.audio.add(audioState, _s2);
	
	                if (_s2 === 'trackURL') {
	                    _control.onFinishChange(setupTrackURL);
	                }
	
	                if (_s2 === 'audible') {
	                    _control.onChange(function (v) {
	                        var out = trackAnalyser.merger || trackAnalyser.analyser;
	
	                        if (v) {
	                            out.connect(trackAnalyser.ctx.destination);
	                        } else {
	                            out.disconnect();
	                        }
	                    });
	                }
	            }
	
	            // Controls
	
	            var controllers = {
	                clear: clear,
	                clearView: clearView,
	                clearFlow: clearFlow,
	                respawn: respawn,
	                spawnSampleCam: spawnSampleCam,
	                spawnCam: spawnCam,
	                spawnFlow: spawnFlow,
	                spawnFastest: spawnFastest,
	                spawnForm: spawnForm,
	                reset: reset,
	                restart: restart
	            };
	
	            gui.controls = gui.main.addFolder('controls');
	
	            for (var c in controllers) {
	                gui.controls.add(controllers, c);
	            }
	
	            // Presets
	
	            gui.presets = gui.main.addFolder('presets');
	
	            var presetters = {
	                'Flow': function Flow() {
	                    Object.assign(state, {
	                        flowWidth: 5,
	                        colorMapAlpha: 0
	                    });
	
	                    Object.assign(resetSpawner.uniforms, {
	                        radius: 0.25,
	                        speed: 0.01
	                    });
	
	                    Object.assign(colorProxy, {
	                        baseAlpha: 0,
	                        baseColor: [0, 0, 0],
	                        flowAlpha: 1,
	                        flowColor: [255, 255, 255],
	                        fadeAlpha: Math.max(state.flowDecay, 0.05)
	                    });
	                },
	                'Wings': function Wings() {
	                    Object.assign(resetSpawner.uniforms, {
	                        radius: 0.1,
	                        speed: 0,
	                        colorMapAlpha: 0
	                    });
	
	                    Object.assign(colorProxy, {
	                        flowAlpha: 0.01,
	                        baseAlpha: 0.2
	                    });
	
	                    Object.assign(colorProxy);
	                },
	                'Fluid': function Fluid() {
	                    Object.assign(state, {
	                        autoClearView: true
	                    });
	
	                    Object.assign(colorProxy, {
	                        fadeAlpha: 0
	                    });
	                },
	                'Flow only': function FlowOnly() {
	                    Object.assign(state, {
	                        flowDecay: 0.001,
	                        forceWeight: 0.014,
	                        noiseWeight: 0,
	                        speedAlpha: 0
	                    });
	
	                    Object.assign(resetSpawner.uniforms, {
	                        radius: 0.4,
	                        speed: 0.15
	                    });
	
	                    Object.assign(colorProxy, {
	                        baseAlpha: 0.8,
	                        baseColor: [100, 200, 255],
	                        fadeAlpha: 0.1
	                    });
	                },
	                'Noise only': function NoiseOnly() {
	                    Object.assign(state, {
	                        flowWeight: 0,
	                        noiseWeight: 0.003,
	                        noiseSpeed: 0.0005,
	                        noiseScale: 1.5,
	                        varyNoiseScale: 10,
	                        varyNoiseSpeed: 0.05,
	                        speedAlpha: 0,
	                        colorMapAlpha: 0.8
	                    });
	
	                    Object.assign(colorProxy, {
	                        baseAlpha: 0.1,
	                        baseColor: [255, 150, 0],
	                        fadeAlpha: 0.05
	                    });
	
	                    Object.assign(blendProxy, {
	                        audio: 0.9,
	                        cam: 0
	                    });
	                },
	                'Sea': function Sea() {
	                    Object.assign(state, {
	                        flowWidth: 5,
	                        forceWeight: 0.013,
	                        noiseWeight: 0.002,
	                        flowDecay: 0.01,
	                        speedAlpha: 0,
	                        colorMapAlpha: 0.4
	                    });
	
	                    Object.assign(resetSpawner.uniforms, {
	                        radius: 1.5,
	                        speed: 0
	                    });
	
	                    Object.assign(colorProxy, {
	                        baseAlpha: 0.8,
	                        baseColor: [55, 155, 255],
	                        fadeAlpha: 0.3,
	                        fadeColor: [0, 58, 90]
	                    });
	                },
	                'Ghostly': function Ghostly() {
	                    Object.assign(state, {
	                        flowDecay: 0,
	                        colorMapAlpha: 0.005
	                    });
	
	                    Object.assign(colorProxy, {
	                        baseAlpha: 0.01,
	                        flowAlpha: 0.05
	                    });
	                },
	                'Petri': function Petri() {
	                    Object.assign(state, {
	                        forceWeight: 0.015,
	                        noiseWeight: 0.001,
	                        flowDecay: 0.001,
	                        noiseScale: 200,
	                        noiseSpeed: 0.0001
	                    });
	
	                    Object.assign(colorProxy, {
	                        baseAlpha: 0.3,
	                        baseColor: [255, 203, 37],
	                        flowAlpha: 0.05,
	                        fadeAlpha: 0.01
	                    });
	
	                    Object.assign(resetSpawner.uniforms, {
	                        radius: 1 / Math.max.apply(Math, _toConsumableArray(tendrils.viewSize)),
	                        speed: 0
	                    });
	                },
	                'Turbulence': function Turbulence() {
	                    Object.assign(state, {
	                        noiseSpeed: 0.00005,
	                        noiseScale: 10,
	                        forceWeight: 0.014,
	                        noiseWeight: 0.003,
	                        speedAlpha: 0.000002,
	                        colorMapAlpha: 0.3
	                    });
	
	                    Object.assign(colorProxy, {
	                        baseAlpha: 0.3,
	                        baseColor: [100, 0, 0],
	                        flowAlpha: 0.5,
	                        flowColor: [255, 10, 10],
	                        fadeAlpha: 0.01,
	                        fadeColor: [0, 0, 0]
	                    });
	                },
	                'Rorschach': function Rorschach() {
	                    Object.assign(state, {
	                        noiseScale: 40,
	                        varyNoiseScale: 0.1,
	                        noiseSpeed: 0.00001,
	                        varyNoiseSpeed: 0.01,
	                        forceWeight: 0.014,
	                        noiseWeight: 0.0021,
	                        speedAlpha: 0.000002,
	                        colorMapAlpha: 0.2
	                    });
	
	                    Object.assign(flowPixelState, {
	                        scale: 'mirror xy'
	                    });
	
	                    Object.assign(colorProxy, {
	                        baseAlpha: 0.9,
	                        baseColor: [0, 0, 0],
	                        flowAlpha: 0.1,
	                        fadeAlpha: 0.05,
	                        fadeColor: [255, 255, 255]
	                    });
	                },
	                'Roots': function Roots() {
	                    Object.assign(state, {
	                        flowDecay: 0,
	                        noiseSpeed: 0,
	                        noiseScale: 18,
	                        forceWeight: 0.015,
	                        noiseWeight: 0.0023,
	                        speedAlpha: 0.00005,
	                        lineWidth: 3,
	                        colorMapAlpha: 0.0001
	                    });
	
	                    Object.assign(colorProxy, {
	                        baseAlpha: 0.02,
	                        baseColor: [50, 255, 50],
	                        flowAlpha: 0.05
	                    });
	                },
	                'Funhouse': function Funhouse() {
	                    Object.assign(state, {
	                        forceWeight: 0.0165,
	                        varyForce: 0.3,
	                        flowWeight: 0.5,
	                        varyFlow: 1,
	                        noiseWeight: 0.0015,
	                        varyNoise: 1,
	                        noiseScale: 40,
	                        varyNoiseScale: -4,
	                        noiseSpeed: 0.0001,
	                        varyNoiseSpeed: -3,
	                        flowDecay: 0.001,
	                        flowWidth: 8,
	                        speedAlpha: 0.00002,
	                        colorMapAlpha: 1
	                    });
	
	                    Object.assign(colorProxy, {
	                        baseAlpha: 0.2,
	                        baseColor: [0, 0, 0],
	                        flowAlpha: 0.05,
	                        fadeAlpha: 0.05,
	                        fadeColor: [0, 0, 0]
	                    });
	
	                    spawnCam();
	                }
	            };
	
	            var wrapPresetter = function wrapPresetter(presetter) {
	                Object.assign(state, defaultState);
	                Object.assign(resetSpawner.uniforms, resetSpawnerDefaults);
	                Object.assign(flowPixelState, flowPixelDefaults);
	                Object.assign(colorProxy, colorDefaults);
	                Object.assign(blendProxy, blendDefaults);
	
	                presetter();
	
	                updateGUI();
	                convertColors();
	                convertBlend();
	                // restart();
	            };
	
	            for (var p in presetters) {
	                presetters[p] = wrapPresetter.bind(null, presetters[p]);
	                gui.presets.add(presetters, p);
	            }
	
	            // Open or close
	
	            toggleGUI(false);
	
	            gui.main.open();
	            gui.settings.open();
	
	            // Keyboard mash!
	            /**
	             * Assign modifiers to keys:
	             * - Hold down a letter key to select a setting:
	             *     - Up/down key to raise/lower it a little.
	             *     - Left/right key to raise/lower it a lot.
	             *     - Backspace to reset it to its default.
	             *     - Release it to record a frame.
	             * - Spacebar for cam.
	             * - Shift/ctrl/cmd for spawning.
	             * - Numbers for presets.
	             * - Symbols for smashing shapes/colours into the flow.
	             * - Avoid using 'H' - clashes with DAT.GUI
	             *
	             * Tween these with a default ease and duration (keyframe pair).
	             * Edit the timeline for each setting, saving the settings on each
	             * change into a keyframe (pair with default duration).
	             *
	             * @todo Playing with some functional stuff here, looks pretty mad.
	             * @todo Smash in some shapes, flow inputs, colour inputs (discrete forms).
	             * @todo Increment/decrement state values by various amounts.
	             * @todo Use the above to play the visuals and set keyframes in real time?
	             */
	            (function () {
	                // Quick track control
	
	                var togglePlay = function togglePlay() {
	                    var play = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : track.paused;
	                    return play ? track.play() : track.pause();
	                };
	
	                var scrub = function scrub(by) {
	                    track.currentTime += by * 0.001;
	                    player.playFrom(track.currentTime * 1000, 0);
	                    togglePlay(true);
	                };
	
	                var keyframeCall = function keyframeCall() {
	                    for (var _len = arguments.length, calls = Array(_len), _key = 0; _key < _len; _key++) {
	                        calls[_key] = arguments[_key];
	                    }
	
	                    keyframe(null, calls);
	                    (0, _each2.default)(function (call) {
	                        return call();
	                    }, calls);
	                };
	
	                var keyframeCaller = function keyframeCaller() {
	                    for (var _len2 = arguments.length, calls = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                        calls[_key2] = arguments[_key2];
	                    }
	
	                    return function () {
	                        return keyframeCall.apply(undefined, calls);
	                    };
	                };
	
	                // Invoke the functions for each setting being edited.
	                var resetEach = function resetEach(all) {
	                    (0, _each2.default)(function (x) {
	                        return x.reset && x.reset();
	                    }, all);
	                    updateGUI();
	                };
	
	                var adjustEach = (0, _partial.curry)(function (by, all) {
	                    (0, _each2.default)(function (x) {
	                        return x.adjust && x.adjust(by);
	                    }, all);
	                    updateGUI();
	                });
	
	                // Common case for editing a given setting.
	
	                var copy = function copy(into, source, key) {
	                    return into[key] = source[key];
	                };
	                var copier = (0, _partial.curry)(copy, copy.length + 1);
	
	                var adjust = function adjust(into, key, scale, by) {
	                    return into[key] += scale * by;
	                };
	                var adjuster = (0, _partial.curry)(adjust);
	
	                var flip = function flip(into, key) {
	                    return into[key] = !into[key];
	                };
	                var flipper = (0, _partial.curry)(flip, flip.length + 1);
	
	                // Shorthands
	
	                var stateCopy = copier(state, defaultState);
	                var stateEdit = adjuster(state);
	                var stateFlip = flipper(state);
	
	                var stateBool = function stateBool(key) {
	                    return {
	                        reset: stateCopy(key),
	                        go: stateFlip(key)
	                    };
	                };
	
	                var stateNum = function stateNum(key, scale) {
	                    return {
	                        reset: stateCopy(key),
	                        adjust: stateEdit(key, scale)
	                    };
	                };
	
	                var stateExtend = function stateExtend() {
	                    var assign = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	                    var resets = (0, _filter2.default)(function (v, k) {
	                        return k in assign;
	                    }, defaultState);
	
	                    return {
	                        reset: function reset() {
	                            return Object.assign(state, resets);
	                        },
	                        go: function go() {
	                            return Object.assign(state, assign);
	                        }
	                    };
	                };
	
	                var editing = {};
	
	                /**
	                 * Anything that selects and may change a part of the state.
	                 * @todo Inputs for the other things in full state, controls, and
	                 *       presets.
	                 */
	                var editMap = {
	
	                    '`': {
	                        reset: function reset() {
	                            tendrils.setup(defaultState.rootNum);
	                            restart();
	                        },
	                        adjust: function adjust(by) {
	                            tendrils.setup(state.rootNum * Math.pow(2, by));
	                            restart();
	                        }
	                    },
	
	                    'P': stateBool('autoClearView'),
	
	                    'Q': stateNum('forceWeight', 0.01),
	                    'A': stateNum('flowWeight', 0.02),
	                    'W': stateNum('noiseWeight', 0.0002),
	
	                    'S': stateNum('flowDecay', 0.005),
	                    'D': stateNum('flowWidth', 1),
	
	                    'E': stateNum('noiseScale', 1),
	                    'R': stateNum('noiseSpeed', 0.002),
	
	                    'Z': stateNum('damping', 0.001),
	                    'X': stateNum('speedLimit', 0.0001),
	
	                    'N': stateNum('speedAlpha', 0.002),
	                    'M': stateNum('lineWidth', 0.1),
	
	                    // <control> is a special case for re-assigning keys, see below
	                    '<control>': function control(key, assign) {
	                        delete editMap[key];
	                        delete callMap[key];
	
	                        callMap[key] = keyframeCaller(function () {
	                            return Object.assign(state, assign);
	                        });
	                    }
	                };
	
	                var callMap = {
	                    'O': keyframeCaller(function () {
	                        return tendrils.clear();
	                    }),
	
	                    '0': keyframeCaller(presetters['Flow']),
	                    '1': keyframeCaller(presetters['Wings']),
	                    '2': keyframeCaller(presetters['Fluid']),
	                    '3': keyframeCaller(presetters['Flow only']),
	                    '4': keyframeCaller(presetters['Noise only']),
	                    '5': keyframeCaller(presetters['Sea']),
	                    '6': keyframeCaller(presetters['Petri']),
	                    '7': keyframeCaller(presetters['Turbulence']),
	                    '8': keyframeCaller(presetters['Rorschach']),
	                    '9': keyframeCaller(presetters['Funhouse']),
	
	                    '-': adjustEach(-0.1),
	                    '=': adjustEach(0.1),
	                    '<down>': adjustEach(-1),
	                    '<up>': adjustEach(1),
	                    '<left>': adjustEach(-5),
	                    '<right>': adjustEach(5),
	
	                    '<escape>': function escape() {
	                        resetEach(editMap);
	                        keyframe.apply(undefined, arguments);
	                    },
	                    '<caps-lock>': resetEach,
	
	                    '<space>': function space() {
	                        return togglePlay();
	                    },
	
	                    '[': function _() {
	                        return scrub(-2000);
	                    },
	                    ']': function _() {
	                        return scrub(2000);
	                    },
	                    '<enter>': keyframe,
	                    // @todo Update this to match the new Player API
	                    '<backspace>': function backspace() {
	                        return player.trackAt(timer.player.time).spliceAt(timer.player.time);
	                    },
	
	                    '\\': keyframeCaller(function () {
	                        return tendrils.reset();
	                    }),
	                    "'": keyframeCaller(spawnFlow),
	                    ';': keyframeCaller(spawnFastest),
	
	                    '<shift>': keyframeCaller(restart),
	                    '/': keyframeCaller(spawnSampleCam),
	                    '.': keyframeCaller(spawnCam),
	                    ',': keyframeCaller(spawnForm)
	                };
	
	                // @todo Throttle so multiple states can go into one keyframe.
	                document.body.addEventListener('keydown', function (e) {
	                    // Control is a special case to assign the current state to
	                    // a key.
	                    var remap = editing['<control>'];
	                    var key = _vkey2.default[e.keyCode];
	                    var mapped = editMap[key];
	                    var call = callMap[key];
	
	                    if (remap) {
	                        remap(key, _extends({}, state));
	                    } else if (mapped && !editing[key]) {
	                        editing[key] = mapped;
	
	                        if (mapped.go) {
	                            mapped.go(editing, state);
	                        }
	                    } else if (call) {
	                        call(editing, state);
	                    }
	
	                    updateGUI();
	
	                    if (mapped || call) {
	                        e.preventDefault();
	                        e.stopPropagation();
	                    }
	                }, false);
	
	                document.body.addEventListener('keyup', function (e) {
	                    var key = _vkey2.default[e.keyCode];
	                    var mapped = editMap[key];
	                    var call = callMap[key];
	
	                    if (mapped && editing[key]) {
	                        if (key !== '<control>' && !editing['<control>']) {
	                            keyframe(_extends({}, state));
	                        }
	
	                        // @todo Needed?
	                        editing[key] = null;
	                        delete editing[key];
	                    }
	
	                    if (mapped || call) {
	                        e.preventDefault();
	                        e.stopPropagation();
	                    }
	                }, false);
	            })();
	        })();
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * PEP v0.4.2 | https://github.com/jquery/PEP
	 * Copyright jQuery Foundation and other contributors | http://jquery.org/license
	 */
	
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.PointerEventsPolyfill = factory());
	}(this, function () { 'use strict';
	
	  /**
	   * This is the constructor for new PointerEvents.
	   *
	   * New Pointer Events must be given a type, and an optional dictionary of
	   * initialization properties.
	   *
	   * Due to certain platform requirements, events returned from the constructor
	   * identify as MouseEvents.
	   *
	   * @constructor
	   * @param {String} inType The type of the event to create.
	   * @param {Object} [inDict] An optional dictionary of initial event properties.
	   * @return {Event} A new PointerEvent of type `inType`, initialized with properties from `inDict`.
	   */
	  var MOUSE_PROPS = [
	    'bubbles',
	    'cancelable',
	    'view',
	    'detail',
	    'screenX',
	    'screenY',
	    'clientX',
	    'clientY',
	    'ctrlKey',
	    'altKey',
	    'shiftKey',
	    'metaKey',
	    'button',
	    'relatedTarget',
	    'pageX',
	    'pageY'
	  ];
	
	  var MOUSE_DEFAULTS = [
	    false,
	    false,
	    null,
	    null,
	    0,
	    0,
	    0,
	    0,
	    false,
	    false,
	    false,
	    false,
	    0,
	    null,
	    0,
	    0
	  ];
	
	  function PointerEvent(inType, inDict) {
	    inDict = inDict || Object.create(null);
	
	    var e = document.createEvent('Event');
	    e.initEvent(inType, inDict.bubbles || false, inDict.cancelable || false);
	
	    // define inherited MouseEvent properties
	    // skip bubbles and cancelable since they're set above in initEvent()
	    for (var i = 2, p; i < MOUSE_PROPS.length; i++) {
	      p = MOUSE_PROPS[i];
	      e[p] = inDict[p] || MOUSE_DEFAULTS[i];
	    }
	    e.buttons = inDict.buttons || 0;
	
	    // Spec requires that pointers without pressure specified use 0.5 for down
	    // state and 0 for up state.
	    var pressure = 0;
	
	    if (inDict.pressure && e.buttons) {
	      pressure = inDict.pressure;
	    } else {
	      pressure = e.buttons ? 0.5 : 0;
	    }
	
	    // add x/y properties aliased to clientX/Y
	    e.x = e.clientX;
	    e.y = e.clientY;
	
	    // define the properties of the PointerEvent interface
	    e.pointerId = inDict.pointerId || 0;
	    e.width = inDict.width || 0;
	    e.height = inDict.height || 0;
	    e.pressure = pressure;
	    e.tiltX = inDict.tiltX || 0;
	    e.tiltY = inDict.tiltY || 0;
	    e.pointerType = inDict.pointerType || '';
	    e.hwTimestamp = inDict.hwTimestamp || 0;
	    e.isPrimary = inDict.isPrimary || false;
	    return e;
	  }
	
	  /**
	   * This module implements a map of pointer states
	   */
	  var USE_MAP = window.Map && window.Map.prototype.forEach;
	  var PointerMap = USE_MAP ? Map : SparseArrayMap;
	
	  function SparseArrayMap() {
	    this.array = [];
	    this.size = 0;
	  }
	
	  SparseArrayMap.prototype = {
	    set: function(k, v) {
	      if (v === undefined) {
	        return this.delete(k);
	      }
	      if (!this.has(k)) {
	        this.size++;
	      }
	      this.array[k] = v;
	    },
	    has: function(k) {
	      return this.array[k] !== undefined;
	    },
	    delete: function(k) {
	      if (this.has(k)) {
	        delete this.array[k];
	        this.size--;
	      }
	    },
	    get: function(k) {
	      return this.array[k];
	    },
	    clear: function() {
	      this.array.length = 0;
	      this.size = 0;
	    },
	
	    // return value, key, map
	    forEach: function(callback, thisArg) {
	      return this.array.forEach(function(v, k) {
	        callback.call(thisArg, v, k, this);
	      }, this);
	    }
	  };
	
	  var CLONE_PROPS = [
	
	    // MouseEvent
	    'bubbles',
	    'cancelable',
	    'view',
	    'detail',
	    'screenX',
	    'screenY',
	    'clientX',
	    'clientY',
	    'ctrlKey',
	    'altKey',
	    'shiftKey',
	    'metaKey',
	    'button',
	    'relatedTarget',
	
	    // DOM Level 3
	    'buttons',
	
	    // PointerEvent
	    'pointerId',
	    'width',
	    'height',
	    'pressure',
	    'tiltX',
	    'tiltY',
	    'pointerType',
	    'hwTimestamp',
	    'isPrimary',
	
	    // event instance
	    'type',
	    'target',
	    'currentTarget',
	    'which',
	    'pageX',
	    'pageY',
	    'timeStamp'
	  ];
	
	  var CLONE_DEFAULTS = [
	
	    // MouseEvent
	    false,
	    false,
	    null,
	    null,
	    0,
	    0,
	    0,
	    0,
	    false,
	    false,
	    false,
	    false,
	    0,
	    null,
	
	    // DOM Level 3
	    0,
	
	    // PointerEvent
	    0,
	    0,
	    0,
	    0,
	    0,
	    0,
	    '',
	    0,
	    false,
	
	    // event instance
	    '',
	    null,
	    null,
	    0,
	    0,
	    0,
	    0
	  ];
	
	  var BOUNDARY_EVENTS = {
	    'pointerover': 1,
	    'pointerout': 1,
	    'pointerenter': 1,
	    'pointerleave': 1
	  };
	
	  var HAS_SVG_INSTANCE = (typeof SVGElementInstance !== 'undefined');
	
	  /**
	   * This module is for normalizing events. Mouse and Touch events will be
	   * collected here, and fire PointerEvents that have the same semantics, no
	   * matter the source.
	   * Events fired:
	   *   - pointerdown: a pointing is added
	   *   - pointerup: a pointer is removed
	   *   - pointermove: a pointer is moved
	   *   - pointerover: a pointer crosses into an element
	   *   - pointerout: a pointer leaves an element
	   *   - pointercancel: a pointer will no longer generate events
	   */
	  var dispatcher = {
	    pointermap: new PointerMap(),
	    eventMap: Object.create(null),
	    captureInfo: Object.create(null),
	
	    // Scope objects for native events.
	    // This exists for ease of testing.
	    eventSources: Object.create(null),
	    eventSourceList: [],
	    /**
	     * Add a new event source that will generate pointer events.
	     *
	     * `inSource` must contain an array of event names named `events`, and
	     * functions with the names specified in the `events` array.
	     * @param {string} name A name for the event source
	     * @param {Object} source A new source of platform events.
	     */
	    registerSource: function(name, source) {
	      var s = source;
	      var newEvents = s.events;
	      if (newEvents) {
	        newEvents.forEach(function(e) {
	          if (s[e]) {
	            this.eventMap[e] = s[e].bind(s);
	          }
	        }, this);
	        this.eventSources[name] = s;
	        this.eventSourceList.push(s);
	      }
	    },
	    register: function(element) {
	      var l = this.eventSourceList.length;
	      for (var i = 0, es; (i < l) && (es = this.eventSourceList[i]); i++) {
	
	        // call eventsource register
	        es.register.call(es, element);
	      }
	    },
	    unregister: function(element) {
	      var l = this.eventSourceList.length;
	      for (var i = 0, es; (i < l) && (es = this.eventSourceList[i]); i++) {
	
	        // call eventsource register
	        es.unregister.call(es, element);
	      }
	    },
	    contains: /*scope.external.contains || */function(container, contained) {
	      try {
	        return container.contains(contained);
	      } catch (ex) {
	
	        // most likely: https://bugzilla.mozilla.org/show_bug.cgi?id=208427
	        return false;
	      }
	    },
	
	    // EVENTS
	    down: function(inEvent) {
	      inEvent.bubbles = true;
	      this.fireEvent('pointerdown', inEvent);
	    },
	    move: function(inEvent) {
	      inEvent.bubbles = true;
	      this.fireEvent('pointermove', inEvent);
	    },
	    up: function(inEvent) {
	      inEvent.bubbles = true;
	      this.fireEvent('pointerup', inEvent);
	    },
	    enter: function(inEvent) {
	      inEvent.bubbles = false;
	      this.fireEvent('pointerenter', inEvent);
	    },
	    leave: function(inEvent) {
	      inEvent.bubbles = false;
	      this.fireEvent('pointerleave', inEvent);
	    },
	    over: function(inEvent) {
	      inEvent.bubbles = true;
	      this.fireEvent('pointerover', inEvent);
	    },
	    out: function(inEvent) {
	      inEvent.bubbles = true;
	      this.fireEvent('pointerout', inEvent);
	    },
	    cancel: function(inEvent) {
	      inEvent.bubbles = true;
	      this.fireEvent('pointercancel', inEvent);
	    },
	    leaveOut: function(event) {
	      this.out(event);
	      this.propagate(event, this.leave, false);
	    },
	    enterOver: function(event) {
	      this.over(event);
	      this.propagate(event, this.enter, true);
	    },
	
	    // LISTENER LOGIC
	    eventHandler: function(inEvent) {
	
	      // This is used to prevent multiple dispatch of pointerevents from
	      // platform events. This can happen when two elements in different scopes
	      // are set up to create pointer events, which is relevant to Shadow DOM.
	      if (inEvent._handledByPE) {
	        return;
	      }
	      var type = inEvent.type;
	      var fn = this.eventMap && this.eventMap[type];
	      if (fn) {
	        fn(inEvent);
	      }
	      inEvent._handledByPE = true;
	    },
	
	    // set up event listeners
	    listen: function(target, events) {
	      events.forEach(function(e) {
	        this.addEvent(target, e);
	      }, this);
	    },
	
	    // remove event listeners
	    unlisten: function(target, events) {
	      events.forEach(function(e) {
	        this.removeEvent(target, e);
	      }, this);
	    },
	    addEvent: /*scope.external.addEvent || */function(target, eventName) {
	      target.addEventListener(eventName, this.boundHandler);
	    },
	    removeEvent: /*scope.external.removeEvent || */function(target, eventName) {
	      target.removeEventListener(eventName, this.boundHandler);
	    },
	
	    // EVENT CREATION AND TRACKING
	    /**
	     * Creates a new Event of type `inType`, based on the information in
	     * `inEvent`.
	     *
	     * @param {string} inType A string representing the type of event to create
	     * @param {Event} inEvent A platform event with a target
	     * @return {Event} A PointerEvent of type `inType`
	     */
	    makeEvent: function(inType, inEvent) {
	
	      // relatedTarget must be null if pointer is captured
	      if (this.captureInfo[inEvent.pointerId]) {
	        inEvent.relatedTarget = null;
	      }
	      var e = new PointerEvent(inType, inEvent);
	      if (inEvent.preventDefault) {
	        e.preventDefault = inEvent.preventDefault;
	      }
	      e._target = e._target || inEvent.target;
	      return e;
	    },
	
	    // make and dispatch an event in one call
	    fireEvent: function(inType, inEvent) {
	      var e = this.makeEvent(inType, inEvent);
	      return this.dispatchEvent(e);
	    },
	    /**
	     * Returns a snapshot of inEvent, with writable properties.
	     *
	     * @param {Event} inEvent An event that contains properties to copy.
	     * @return {Object} An object containing shallow copies of `inEvent`'s
	     *    properties.
	     */
	    cloneEvent: function(inEvent) {
	      var eventCopy = Object.create(null);
	      var p;
	      for (var i = 0; i < CLONE_PROPS.length; i++) {
	        p = CLONE_PROPS[i];
	        eventCopy[p] = inEvent[p] || CLONE_DEFAULTS[i];
	
	        // Work around SVGInstanceElement shadow tree
	        // Return the <use> element that is represented by the instance for Safari, Chrome, IE.
	        // This is the behavior implemented by Firefox.
	        if (HAS_SVG_INSTANCE && (p === 'target' || p === 'relatedTarget')) {
	          if (eventCopy[p] instanceof SVGElementInstance) {
	            eventCopy[p] = eventCopy[p].correspondingUseElement;
	          }
	        }
	      }
	
	      // keep the semantics of preventDefault
	      if (inEvent.preventDefault) {
	        eventCopy.preventDefault = function() {
	          inEvent.preventDefault();
	        };
	      }
	      return eventCopy;
	    },
	    getTarget: function(inEvent) {
	      var capture = this.captureInfo[inEvent.pointerId];
	      if (!capture) {
	        return inEvent._target;
	      }
	      if (inEvent._target === capture || !(inEvent.type in BOUNDARY_EVENTS)) {
	        return capture;
	      }
	    },
	    propagate: function(event, fn, propagateDown) {
	      var target = event.target;
	      var targets = [];
	      while (!target.contains(event.relatedTarget) && target !== document) {
	        targets.push(target);
	        target = target.parentNode;
	      }
	      if (propagateDown) {
	        targets.reverse();
	      }
	      targets.forEach(function(target) {
	        event.target = target;
	        fn.call(this, event);
	      }, this);
	    },
	    setCapture: function(inPointerId, inTarget) {
	      if (this.captureInfo[inPointerId]) {
	        this.releaseCapture(inPointerId);
	      }
	      this.captureInfo[inPointerId] = inTarget;
	      var e = new PointerEvent('gotpointercapture');
	      e.pointerId = inPointerId;
	      this.implicitRelease = this.releaseCapture.bind(this, inPointerId);
	      document.addEventListener('pointerup', this.implicitRelease);
	      document.addEventListener('pointercancel', this.implicitRelease);
	      e._target = inTarget;
	      this.asyncDispatchEvent(e);
	    },
	    releaseCapture: function(inPointerId) {
	      var t = this.captureInfo[inPointerId];
	      if (t) {
	        var e = new PointerEvent('lostpointercapture');
	        e.pointerId = inPointerId;
	        this.captureInfo[inPointerId] = undefined;
	        document.removeEventListener('pointerup', this.implicitRelease);
	        document.removeEventListener('pointercancel', this.implicitRelease);
	        e._target = t;
	        this.asyncDispatchEvent(e);
	      }
	    },
	    /**
	     * Dispatches the event to its target.
	     *
	     * @param {Event} inEvent The event to be dispatched.
	     * @return {Boolean} True if an event handler returns true, false otherwise.
	     */
	    dispatchEvent: /*scope.external.dispatchEvent || */function(inEvent) {
	      var t = this.getTarget(inEvent);
	      if (t) {
	        return t.dispatchEvent(inEvent);
	      }
	    },
	    asyncDispatchEvent: function(inEvent) {
	      requestAnimationFrame(this.dispatchEvent.bind(this, inEvent));
	    }
	  };
	  dispatcher.boundHandler = dispatcher.eventHandler.bind(dispatcher);
	
	  var targeting = {
	    shadow: function(inEl) {
	      if (inEl) {
	        return inEl.shadowRoot || inEl.webkitShadowRoot;
	      }
	    },
	    canTarget: function(shadow) {
	      return shadow && Boolean(shadow.elementFromPoint);
	    },
	    targetingShadow: function(inEl) {
	      var s = this.shadow(inEl);
	      if (this.canTarget(s)) {
	        return s;
	      }
	    },
	    olderShadow: function(shadow) {
	      var os = shadow.olderShadowRoot;
	      if (!os) {
	        var se = shadow.querySelector('shadow');
	        if (se) {
	          os = se.olderShadowRoot;
	        }
	      }
	      return os;
	    },
	    allShadows: function(element) {
	      var shadows = [];
	      var s = this.shadow(element);
	      while (s) {
	        shadows.push(s);
	        s = this.olderShadow(s);
	      }
	      return shadows;
	    },
	    searchRoot: function(inRoot, x, y) {
	      if (inRoot) {
	        var t = inRoot.elementFromPoint(x, y);
	        var st, sr;
	
	        // is element a shadow host?
	        sr = this.targetingShadow(t);
	        while (sr) {
	
	          // find the the element inside the shadow root
	          st = sr.elementFromPoint(x, y);
	          if (!st) {
	
	            // check for older shadows
	            sr = this.olderShadow(sr);
	          } else {
	
	            // shadowed element may contain a shadow root
	            var ssr = this.targetingShadow(st);
	            return this.searchRoot(ssr, x, y) || st;
	          }
	        }
	
	        // light dom element is the target
	        return t;
	      }
	    },
	    owner: function(element) {
	      var s = element;
	
	      // walk up until you hit the shadow root or document
	      while (s.parentNode) {
	        s = s.parentNode;
	      }
	
	      // the owner element is expected to be a Document or ShadowRoot
	      if (s.nodeType !== Node.DOCUMENT_NODE && s.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
	        s = document;
	      }
	      return s;
	    },
	    findTarget: function(inEvent) {
	      var x = inEvent.clientX;
	      var y = inEvent.clientY;
	
	      // if the listener is in the shadow root, it is much faster to start there
	      var s = this.owner(inEvent.target);
	
	      // if x, y is not in this root, fall back to document search
	      if (!s.elementFromPoint(x, y)) {
	        s = document;
	      }
	      return this.searchRoot(s, x, y);
	    }
	  };
	
	  var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
	  var map = Array.prototype.map.call.bind(Array.prototype.map);
	  var toArray = Array.prototype.slice.call.bind(Array.prototype.slice);
	  var filter = Array.prototype.filter.call.bind(Array.prototype.filter);
	  var MO = window.MutationObserver || window.WebKitMutationObserver;
	  var SELECTOR = '[touch-action]';
	  var OBSERVER_INIT = {
	    subtree: true,
	    childList: true,
	    attributes: true,
	    attributeOldValue: true,
	    attributeFilter: ['touch-action']
	  };
	
	  function Installer(add, remove, changed, binder) {
	    this.addCallback = add.bind(binder);
	    this.removeCallback = remove.bind(binder);
	    this.changedCallback = changed.bind(binder);
	    if (MO) {
	      this.observer = new MO(this.mutationWatcher.bind(this));
	    }
	  }
	
	  Installer.prototype = {
	    watchSubtree: function(target) {
	
	      // Only watch scopes that can target find, as these are top-level.
	      // Otherwise we can see duplicate additions and removals that add noise.
	      //
	      // TODO(dfreedman): For some instances with ShadowDOMPolyfill, we can see
	      // a removal without an insertion when a node is redistributed among
	      // shadows. Since it all ends up correct in the document, watching only
	      // the document will yield the correct mutations to watch.
	      if (this.observer && targeting.canTarget(target)) {
	        this.observer.observe(target, OBSERVER_INIT);
	      }
	    },
	    enableOnSubtree: function(target) {
	      this.watchSubtree(target);
	      if (target === document && document.readyState !== 'complete') {
	        this.installOnLoad();
	      } else {
	        this.installNewSubtree(target);
	      }
	    },
	    installNewSubtree: function(target) {
	      forEach(this.findElements(target), this.addElement, this);
	    },
	    findElements: function(target) {
	      if (target.querySelectorAll) {
	        return target.querySelectorAll(SELECTOR);
	      }
	      return [];
	    },
	    removeElement: function(el) {
	      this.removeCallback(el);
	    },
	    addElement: function(el) {
	      this.addCallback(el);
	    },
	    elementChanged: function(el, oldValue) {
	      this.changedCallback(el, oldValue);
	    },
	    concatLists: function(accum, list) {
	      return accum.concat(toArray(list));
	    },
	
	    // register all touch-action = none nodes on document load
	    installOnLoad: function() {
	      document.addEventListener('readystatechange', function() {
	        if (document.readyState === 'complete') {
	          this.installNewSubtree(document);
	        }
	      }.bind(this));
	    },
	    isElement: function(n) {
	      return n.nodeType === Node.ELEMENT_NODE;
	    },
	    flattenMutationTree: function(inNodes) {
	
	      // find children with touch-action
	      var tree = map(inNodes, this.findElements, this);
	
	      // make sure the added nodes are accounted for
	      tree.push(filter(inNodes, this.isElement));
	
	      // flatten the list
	      return tree.reduce(this.concatLists, []);
	    },
	    mutationWatcher: function(mutations) {
	      mutations.forEach(this.mutationHandler, this);
	    },
	    mutationHandler: function(m) {
	      if (m.type === 'childList') {
	        var added = this.flattenMutationTree(m.addedNodes);
	        added.forEach(this.addElement, this);
	        var removed = this.flattenMutationTree(m.removedNodes);
	        removed.forEach(this.removeElement, this);
	      } else if (m.type === 'attributes') {
	        this.elementChanged(m.target, m.oldValue);
	      }
	    }
	  };
	
	  function shadowSelector(v) {
	    return 'body /shadow-deep/ ' + selector(v);
	  }
	  function selector(v) {
	    return '[touch-action="' + v + '"]';
	  }
	  function rule(v) {
	    return '{ -ms-touch-action: ' + v + '; touch-action: ' + v + '; }';
	  }
	  var attrib2css = [
	    'none',
	    'auto',
	    'pan-x',
	    'pan-y',
	    {
	      rule: 'pan-x pan-y',
	      selectors: [
	        'pan-x pan-y',
	        'pan-y pan-x'
	      ]
	    }
	  ];
	  var styles = '';
	
	  // only install stylesheet if the browser has touch action support
	  var hasNativePE = window.PointerEvent || window.MSPointerEvent;
	
	  // only add shadow selectors if shadowdom is supported
	  var hasShadowRoot = !window.ShadowDOMPolyfill && document.head.createShadowRoot;
	
	  function applyAttributeStyles() {
	    if (hasNativePE) {
	      attrib2css.forEach(function(r) {
	        if (String(r) === r) {
	          styles += selector(r) + rule(r) + '\n';
	          if (hasShadowRoot) {
	            styles += shadowSelector(r) + rule(r) + '\n';
	          }
	        } else {
	          styles += r.selectors.map(selector) + rule(r.rule) + '\n';
	          if (hasShadowRoot) {
	            styles += r.selectors.map(shadowSelector) + rule(r.rule) + '\n';
	          }
	        }
	      });
	
	      var el = document.createElement('style');
	      el.textContent = styles;
	      document.head.appendChild(el);
	    }
	  }
	
	  var pointermap = dispatcher.pointermap;
	
	  // radius around touchend that swallows mouse events
	  var DEDUP_DIST = 25;
	
	  // left, middle, right, back, forward
	  var BUTTON_TO_BUTTONS = [1, 4, 2, 8, 16];
	
	  var HAS_BUTTONS = false;
	  try {
	    HAS_BUTTONS = new MouseEvent('test', { buttons: 1 }).buttons === 1;
	  } catch (e) {}
	
	  // handler block for native mouse events
	  var mouseEvents = {
	    POINTER_ID: 1,
	    POINTER_TYPE: 'mouse',
	    events: [
	      'mousedown',
	      'mousemove',
	      'mouseup',
	      'mouseover',
	      'mouseout'
	    ],
	    register: function(target) {
	      dispatcher.listen(target, this.events);
	    },
	    unregister: function(target) {
	      dispatcher.unlisten(target, this.events);
	    },
	    lastTouches: [],
	
	    // collide with the global mouse listener
	    isEventSimulatedFromTouch: function(inEvent) {
	      var lts = this.lastTouches;
	      var x = inEvent.clientX;
	      var y = inEvent.clientY;
	      for (var i = 0, l = lts.length, t; i < l && (t = lts[i]); i++) {
	
	        // simulated mouse events will be swallowed near a primary touchend
	        var dx = Math.abs(x - t.x);
	        var dy = Math.abs(y - t.y);
	        if (dx <= DEDUP_DIST && dy <= DEDUP_DIST) {
	          return true;
	        }
	      }
	    },
	    prepareEvent: function(inEvent) {
	      var e = dispatcher.cloneEvent(inEvent);
	
	      // forward mouse preventDefault
	      var pd = e.preventDefault;
	      e.preventDefault = function() {
	        inEvent.preventDefault();
	        pd();
	      };
	      e.pointerId = this.POINTER_ID;
	      e.isPrimary = true;
	      e.pointerType = this.POINTER_TYPE;
	      return e;
	    },
	    prepareButtonsForMove: function(e, inEvent) {
	      var p = pointermap.get(this.POINTER_ID);
	
	      // Update buttons state after possible out-of-document mouseup.
	      if (inEvent.which === 0 || !p) {
	        e.buttons = 0;
	      } else {
	        e.buttons = p.buttons;
	      }
	      inEvent.buttons = e.buttons;
	    },
	    mousedown: function(inEvent) {
	      if (!this.isEventSimulatedFromTouch(inEvent)) {
	        var p = pointermap.get(this.POINTER_ID);
	        var e = this.prepareEvent(inEvent);
	        if (!HAS_BUTTONS) {
	          e.buttons = BUTTON_TO_BUTTONS[e.button];
	          if (p) { e.buttons |= p.buttons; }
	          inEvent.buttons = e.buttons;
	        }
	        pointermap.set(this.POINTER_ID, inEvent);
	        if (!p || p.buttons === 0) {
	          dispatcher.down(e);
	        } else {
	          dispatcher.move(e);
	        }
	      }
	    },
	    mousemove: function(inEvent) {
	      if (!this.isEventSimulatedFromTouch(inEvent)) {
	        var e = this.prepareEvent(inEvent);
	        if (!HAS_BUTTONS) { this.prepareButtonsForMove(e, inEvent); }
	        e.button = -1;
	        pointermap.set(this.POINTER_ID, inEvent);
	        dispatcher.move(e);
	      }
	    },
	    mouseup: function(inEvent) {
	      if (!this.isEventSimulatedFromTouch(inEvent)) {
	        var p = pointermap.get(this.POINTER_ID);
	        var e = this.prepareEvent(inEvent);
	        if (!HAS_BUTTONS) {
	          var up = BUTTON_TO_BUTTONS[e.button];
	
	          // Produces wrong state of buttons in Browsers without `buttons` support
	          // when a mouse button that was pressed outside the document is released
	          // inside and other buttons are still pressed down.
	          e.buttons = p ? p.buttons & ~up : 0;
	          inEvent.buttons = e.buttons;
	        }
	        pointermap.set(this.POINTER_ID, inEvent);
	
	        // Support: Firefox <=44 only
	        // FF Ubuntu includes the lifted button in the `buttons` property on
	        // mouseup.
	        // https://bugzilla.mozilla.org/show_bug.cgi?id=1223366
	        e.buttons &= ~BUTTON_TO_BUTTONS[e.button];
	        if (e.buttons === 0) {
	          dispatcher.up(e);
	        } else {
	          dispatcher.move(e);
	        }
	      }
	    },
	    mouseover: function(inEvent) {
	      if (!this.isEventSimulatedFromTouch(inEvent)) {
	        var e = this.prepareEvent(inEvent);
	        if (!HAS_BUTTONS) { this.prepareButtonsForMove(e, inEvent); }
	        e.button = -1;
	        pointermap.set(this.POINTER_ID, inEvent);
	        dispatcher.enterOver(e);
	      }
	    },
	    mouseout: function(inEvent) {
	      if (!this.isEventSimulatedFromTouch(inEvent)) {
	        var e = this.prepareEvent(inEvent);
	        if (!HAS_BUTTONS) { this.prepareButtonsForMove(e, inEvent); }
	        e.button = -1;
	        dispatcher.leaveOut(e);
	      }
	    },
	    cancel: function(inEvent) {
	      var e = this.prepareEvent(inEvent);
	      dispatcher.cancel(e);
	      this.deactivateMouse();
	    },
	    deactivateMouse: function() {
	      pointermap.delete(this.POINTER_ID);
	    }
	  };
	
	  var captureInfo = dispatcher.captureInfo;
	  var findTarget = targeting.findTarget.bind(targeting);
	  var allShadows = targeting.allShadows.bind(targeting);
	  var pointermap$1 = dispatcher.pointermap;
	
	  // This should be long enough to ignore compat mouse events made by touch
	  var DEDUP_TIMEOUT = 2500;
	  var CLICK_COUNT_TIMEOUT = 200;
	  var ATTRIB = 'touch-action';
	  var INSTALLER;
	
	  // handler block for native touch events
	  var touchEvents = {
	    events: [
	      'touchstart',
	      'touchmove',
	      'touchend',
	      'touchcancel'
	    ],
	    register: function(target) {
	      INSTALLER.enableOnSubtree(target);
	    },
	    unregister: function() {
	
	      // TODO(dfreedman): is it worth it to disconnect the MO?
	    },
	    elementAdded: function(el) {
	      var a = el.getAttribute(ATTRIB);
	      var st = this.touchActionToScrollType(a);
	      if (st) {
	        el._scrollType = st;
	        dispatcher.listen(el, this.events);
	
	        // set touch-action on shadows as well
	        allShadows(el).forEach(function(s) {
	          s._scrollType = st;
	          dispatcher.listen(s, this.events);
	        }, this);
	      }
	    },
	    elementRemoved: function(el) {
	      el._scrollType = undefined;
	      dispatcher.unlisten(el, this.events);
	
	      // remove touch-action from shadow
	      allShadows(el).forEach(function(s) {
	        s._scrollType = undefined;
	        dispatcher.unlisten(s, this.events);
	      }, this);
	    },
	    elementChanged: function(el, oldValue) {
	      var a = el.getAttribute(ATTRIB);
	      var st = this.touchActionToScrollType(a);
	      var oldSt = this.touchActionToScrollType(oldValue);
	
	      // simply update scrollType if listeners are already established
	      if (st && oldSt) {
	        el._scrollType = st;
	        allShadows(el).forEach(function(s) {
	          s._scrollType = st;
	        }, this);
	      } else if (oldSt) {
	        this.elementRemoved(el);
	      } else if (st) {
	        this.elementAdded(el);
	      }
	    },
	    scrollTypes: {
	      EMITTER: 'none',
	      XSCROLLER: 'pan-x',
	      YSCROLLER: 'pan-y',
	      SCROLLER: /^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/
	    },
	    touchActionToScrollType: function(touchAction) {
	      var t = touchAction;
	      var st = this.scrollTypes;
	      if (t === 'none') {
	        return 'none';
	      } else if (t === st.XSCROLLER) {
	        return 'X';
	      } else if (t === st.YSCROLLER) {
	        return 'Y';
	      } else if (st.SCROLLER.exec(t)) {
	        return 'XY';
	      }
	    },
	    POINTER_TYPE: 'touch',
	    firstTouch: null,
	    isPrimaryTouch: function(inTouch) {
	      return this.firstTouch === inTouch.identifier;
	    },
	    setPrimaryTouch: function(inTouch) {
	
	      // set primary touch if there no pointers, or the only pointer is the mouse
	      if (pointermap$1.size === 0 || (pointermap$1.size === 1 && pointermap$1.has(1))) {
	        this.firstTouch = inTouch.identifier;
	        this.firstXY = { X: inTouch.clientX, Y: inTouch.clientY };
	        this.scrolling = false;
	        this.cancelResetClickCount();
	      }
	    },
	    removePrimaryPointer: function(inPointer) {
	      if (inPointer.isPrimary) {
	        this.firstTouch = null;
	        this.firstXY = null;
	        this.resetClickCount();
	      }
	    },
	    clickCount: 0,
	    resetId: null,
	    resetClickCount: function() {
	      var fn = function() {
	        this.clickCount = 0;
	        this.resetId = null;
	      }.bind(this);
	      this.resetId = setTimeout(fn, CLICK_COUNT_TIMEOUT);
	    },
	    cancelResetClickCount: function() {
	      if (this.resetId) {
	        clearTimeout(this.resetId);
	      }
	    },
	    typeToButtons: function(type) {
	      var ret = 0;
	      if (type === 'touchstart' || type === 'touchmove') {
	        ret = 1;
	      }
	      return ret;
	    },
	    touchToPointer: function(inTouch) {
	      var cte = this.currentTouchEvent;
	      var e = dispatcher.cloneEvent(inTouch);
	
	      // We reserve pointerId 1 for Mouse.
	      // Touch identifiers can start at 0.
	      // Add 2 to the touch identifier for compatibility.
	      var id = e.pointerId = inTouch.identifier + 2;
	      e.target = captureInfo[id] || findTarget(e);
	      e.bubbles = true;
	      e.cancelable = true;
	      e.detail = this.clickCount;
	      e.button = 0;
	      e.buttons = this.typeToButtons(cte.type);
	      e.width = inTouch.radiusX || inTouch.webkitRadiusX || 0;
	      e.height = inTouch.radiusY || inTouch.webkitRadiusY || 0;
	      e.pressure = inTouch.force || inTouch.webkitForce || 0.5;
	      e.isPrimary = this.isPrimaryTouch(inTouch);
	      e.pointerType = this.POINTER_TYPE;
	
	      // forward modifier keys
	      e.altKey = cte.altKey;
	      e.ctrlKey = cte.ctrlKey;
	      e.metaKey = cte.metaKey;
	      e.shiftKey = cte.shiftKey;
	
	      // forward touch preventDefaults
	      var self = this;
	      e.preventDefault = function() {
	        self.scrolling = false;
	        self.firstXY = null;
	        cte.preventDefault();
	      };
	      return e;
	    },
	    processTouches: function(inEvent, inFunction) {
	      var tl = inEvent.changedTouches;
	      this.currentTouchEvent = inEvent;
	      for (var i = 0, t; i < tl.length; i++) {
	        t = tl[i];
	        inFunction.call(this, this.touchToPointer(t));
	      }
	    },
	
	    // For single axis scrollers, determines whether the element should emit
	    // pointer events or behave as a scroller
	    shouldScroll: function(inEvent) {
	      if (this.firstXY) {
	        var ret;
	        var scrollAxis = inEvent.currentTarget._scrollType;
	        if (scrollAxis === 'none') {
	
	          // this element is a touch-action: none, should never scroll
	          ret = false;
	        } else if (scrollAxis === 'XY') {
	
	          // this element should always scroll
	          ret = true;
	        } else {
	          var t = inEvent.changedTouches[0];
	
	          // check the intended scroll axis, and other axis
	          var a = scrollAxis;
	          var oa = scrollAxis === 'Y' ? 'X' : 'Y';
	          var da = Math.abs(t['client' + a] - this.firstXY[a]);
	          var doa = Math.abs(t['client' + oa] - this.firstXY[oa]);
	
	          // if delta in the scroll axis > delta other axis, scroll instead of
	          // making events
	          ret = da >= doa;
	        }
	        this.firstXY = null;
	        return ret;
	      }
	    },
	    findTouch: function(inTL, inId) {
	      for (var i = 0, l = inTL.length, t; i < l && (t = inTL[i]); i++) {
	        if (t.identifier === inId) {
	          return true;
	        }
	      }
	    },
	
	    // In some instances, a touchstart can happen without a touchend. This
	    // leaves the pointermap in a broken state.
	    // Therefore, on every touchstart, we remove the touches that did not fire a
	    // touchend event.
	    // To keep state globally consistent, we fire a
	    // pointercancel for this "abandoned" touch
	    vacuumTouches: function(inEvent) {
	      var tl = inEvent.touches;
	
	      // pointermap.size should be < tl.length here, as the touchstart has not
	      // been processed yet.
	      if (pointermap$1.size >= tl.length) {
	        var d = [];
	        pointermap$1.forEach(function(value, key) {
	
	          // Never remove pointerId == 1, which is mouse.
	          // Touch identifiers are 2 smaller than their pointerId, which is the
	          // index in pointermap.
	          if (key !== 1 && !this.findTouch(tl, key - 2)) {
	            var p = value.out;
	            d.push(p);
	          }
	        }, this);
	        d.forEach(this.cancelOut, this);
	      }
	    },
	    touchstart: function(inEvent) {
	      this.vacuumTouches(inEvent);
	      this.setPrimaryTouch(inEvent.changedTouches[0]);
	      this.dedupSynthMouse(inEvent);
	      if (!this.scrolling) {
	        this.clickCount++;
	        this.processTouches(inEvent, this.overDown);
	      }
	    },
	    overDown: function(inPointer) {
	      pointermap$1.set(inPointer.pointerId, {
	        target: inPointer.target,
	        out: inPointer,
	        outTarget: inPointer.target
	      });
	      dispatcher.enterOver(inPointer);
	      dispatcher.down(inPointer);
	    },
	    touchmove: function(inEvent) {
	      if (!this.scrolling) {
	        if (this.shouldScroll(inEvent)) {
	          this.scrolling = true;
	          this.touchcancel(inEvent);
	        } else {
	          inEvent.preventDefault();
	          this.processTouches(inEvent, this.moveOverOut);
	        }
	      }
	    },
	    moveOverOut: function(inPointer) {
	      var event = inPointer;
	      var pointer = pointermap$1.get(event.pointerId);
	
	      // a finger drifted off the screen, ignore it
	      if (!pointer) {
	        return;
	      }
	      var outEvent = pointer.out;
	      var outTarget = pointer.outTarget;
	      dispatcher.move(event);
	      if (outEvent && outTarget !== event.target) {
	        outEvent.relatedTarget = event.target;
	        event.relatedTarget = outTarget;
	
	        // recover from retargeting by shadow
	        outEvent.target = outTarget;
	        if (event.target) {
	          dispatcher.leaveOut(outEvent);
	          dispatcher.enterOver(event);
	        } else {
	
	          // clean up case when finger leaves the screen
	          event.target = outTarget;
	          event.relatedTarget = null;
	          this.cancelOut(event);
	        }
	      }
	      pointer.out = event;
	      pointer.outTarget = event.target;
	    },
	    touchend: function(inEvent) {
	      this.dedupSynthMouse(inEvent);
	      this.processTouches(inEvent, this.upOut);
	    },
	    upOut: function(inPointer) {
	      if (!this.scrolling) {
	        dispatcher.up(inPointer);
	        dispatcher.leaveOut(inPointer);
	      }
	      this.cleanUpPointer(inPointer);
	    },
	    touchcancel: function(inEvent) {
	      this.processTouches(inEvent, this.cancelOut);
	    },
	    cancelOut: function(inPointer) {
	      dispatcher.cancel(inPointer);
	      dispatcher.leaveOut(inPointer);
	      this.cleanUpPointer(inPointer);
	    },
	    cleanUpPointer: function(inPointer) {
	      pointermap$1.delete(inPointer.pointerId);
	      this.removePrimaryPointer(inPointer);
	    },
	
	    // prevent synth mouse events from creating pointer events
	    dedupSynthMouse: function(inEvent) {
	      var lts = mouseEvents.lastTouches;
	      var t = inEvent.changedTouches[0];
	
	      // only the primary finger will synth mouse events
	      if (this.isPrimaryTouch(t)) {
	
	        // remember x/y of last touch
	        var lt = { x: t.clientX, y: t.clientY };
	        lts.push(lt);
	        var fn = (function(lts, lt) {
	          var i = lts.indexOf(lt);
	          if (i > -1) {
	            lts.splice(i, 1);
	          }
	        }).bind(null, lts, lt);
	        setTimeout(fn, DEDUP_TIMEOUT);
	      }
	    }
	  };
	
	  INSTALLER = new Installer(touchEvents.elementAdded, touchEvents.elementRemoved,
	    touchEvents.elementChanged, touchEvents);
	
	  var pointermap$2 = dispatcher.pointermap;
	  var HAS_BITMAP_TYPE = window.MSPointerEvent &&
	    typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE === 'number';
	  var msEvents = {
	    events: [
	      'MSPointerDown',
	      'MSPointerMove',
	      'MSPointerUp',
	      'MSPointerOut',
	      'MSPointerOver',
	      'MSPointerCancel',
	      'MSGotPointerCapture',
	      'MSLostPointerCapture'
	    ],
	    register: function(target) {
	      dispatcher.listen(target, this.events);
	    },
	    unregister: function(target) {
	      dispatcher.unlisten(target, this.events);
	    },
	    POINTER_TYPES: [
	      '',
	      'unavailable',
	      'touch',
	      'pen',
	      'mouse'
	    ],
	    prepareEvent: function(inEvent) {
	      var e = inEvent;
	      if (HAS_BITMAP_TYPE) {
	        e = dispatcher.cloneEvent(inEvent);
	        e.pointerType = this.POINTER_TYPES[inEvent.pointerType];
	      }
	      return e;
	    },
	    cleanup: function(id) {
	      pointermap$2.delete(id);
	    },
	    MSPointerDown: function(inEvent) {
	      pointermap$2.set(inEvent.pointerId, inEvent);
	      var e = this.prepareEvent(inEvent);
	      dispatcher.down(e);
	    },
	    MSPointerMove: function(inEvent) {
	      var e = this.prepareEvent(inEvent);
	      dispatcher.move(e);
	    },
	    MSPointerUp: function(inEvent) {
	      var e = this.prepareEvent(inEvent);
	      dispatcher.up(e);
	      this.cleanup(inEvent.pointerId);
	    },
	    MSPointerOut: function(inEvent) {
	      var e = this.prepareEvent(inEvent);
	      dispatcher.leaveOut(e);
	    },
	    MSPointerOver: function(inEvent) {
	      var e = this.prepareEvent(inEvent);
	      dispatcher.enterOver(e);
	    },
	    MSPointerCancel: function(inEvent) {
	      var e = this.prepareEvent(inEvent);
	      dispatcher.cancel(e);
	      this.cleanup(inEvent.pointerId);
	    },
	    MSLostPointerCapture: function(inEvent) {
	      var e = dispatcher.makeEvent('lostpointercapture', inEvent);
	      dispatcher.dispatchEvent(e);
	    },
	    MSGotPointerCapture: function(inEvent) {
	      var e = dispatcher.makeEvent('gotpointercapture', inEvent);
	      dispatcher.dispatchEvent(e);
	    }
	  };
	
	  function applyPolyfill() {
	
	    // only activate if this platform does not have pointer events
	    if (!window.PointerEvent) {
	      window.PointerEvent = PointerEvent;
	
	      if (window.navigator.msPointerEnabled) {
	        var tp = window.navigator.msMaxTouchPoints;
	        Object.defineProperty(window.navigator, 'maxTouchPoints', {
	          value: tp,
	          enumerable: true
	        });
	        dispatcher.registerSource('ms', msEvents);
	      } else {
	        dispatcher.registerSource('mouse', mouseEvents);
	        if (window.ontouchstart !== undefined) {
	          dispatcher.registerSource('touch', touchEvents);
	        }
	      }
	
	      dispatcher.register(document);
	    }
	  }
	
	  var n = window.navigator;
	  var s;
	  var r;
	  function assertActive(id) {
	    if (!dispatcher.pointermap.has(id)) {
	      var error = new Error('InvalidPointerId');
	      error.name = 'InvalidPointerId';
	      throw error;
	    }
	  }
	  function assertConnected(elem) {
	    if (!elem.ownerDocument.contains(elem)) {
	      var error = new Error('InvalidStateError');
	      error.name = 'InvalidStateError';
	      throw error;
	    }
	  }
	  function inActiveButtonState(id) {
	    var p = dispatcher.pointermap.get(id);
	    return p.buttons !== 0;
	  }
	  if (n.msPointerEnabled) {
	    s = function(pointerId) {
	      assertActive(pointerId);
	      assertConnected(this);
	      if (inActiveButtonState(pointerId)) {
	        this.msSetPointerCapture(pointerId);
	      }
	    };
	    r = function(pointerId) {
	      assertActive(pointerId);
	      this.msReleasePointerCapture(pointerId);
	    };
	  } else {
	    s = function setPointerCapture(pointerId) {
	      assertActive(pointerId);
	      assertConnected(this);
	      if (inActiveButtonState(pointerId)) {
	        dispatcher.setCapture(pointerId, this);
	      }
	    };
	    r = function releasePointerCapture(pointerId) {
	      assertActive(pointerId);
	      dispatcher.releaseCapture(pointerId, this);
	    };
	  }
	
	  function applyPolyfill$1() {
	    if (window.Element && !Element.prototype.setPointerCapture) {
	      Object.defineProperties(Element.prototype, {
	        'setPointerCapture': {
	          value: s
	        },
	        'releasePointerCapture': {
	          value: r
	        }
	      });
	    }
	  }
	
	  applyAttributeStyles();
	  applyPolyfill();
	  applyPolyfill$1();
	
	  var pointerevents = {
	    dispatcher: dispatcher,
	    Installer: Installer,
	    PointerEvent: PointerEvent,
	    PointerMap: PointerMap,
	    targetFinding: targeting
	  };
	
	  return pointerevents;
	
	}));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var raf = __webpack_require__(5)
	
	module.exports = createContext
	
	function createContext(canvas, opts, render) {
	  if (typeof opts === 'function') {
	    render = opts
	    opts = {}
	  } else {
	    opts = opts || {}
	  }
	
	  var gl = (
	    canvas.getContext('webgl', opts) ||
	    canvas.getContext('webgl-experimental', opts) ||
	    canvas.getContext('experimental-webgl', opts)
	  )
	
	  if (!gl) {
	    throw new Error('Unable to initialize WebGL')
	  }
	
	  if (render) raf(tick)
	
	  return gl
	
	  function tick() {
	    render(gl)
	    raf(tick)
	  }
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Expose `requestAnimationFrame()`.
	 */
	
	exports = module.exports = window.requestAnimationFrame
	  || window.webkitRequestAnimationFrame
	  || window.mozRequestAnimationFrame
	  || window.oRequestAnimationFrame
	  || window.msRequestAnimationFrame
	  || fallback;
	
	/**
	 * Fallback implementation.
	 */
	
	var prev = new Date().getTime();
	function fallback(fn) {
	  var curr = new Date().getTime();
	  var ms = Math.max(0, 16 - (curr - prev));
	  var req = setTimeout(fn, ms);
	  prev = curr;
	  return req;
	}
	
	/**
	 * Cancel.
	 */
	
	var cancel = window.cancelAnimationFrame
	  || window.webkitCancelAnimationFrame
	  || window.mozCancelAnimationFrame
	  || window.oCancelAnimationFrame
	  || window.msCancelAnimationFrame
	  || window.clearTimeout;
	
	exports.cancel = function(id){
	  cancel.call(window, id);
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	var ua = typeof window !== 'undefined' ? window.navigator.userAgent : ''
	  , isOSX = /OS X/.test(ua)
	  , isOpera = /Opera/.test(ua)
	  , maybeFirefox = !/like Gecko/.test(ua) && !isOpera
	
	var i, output = module.exports = {
	  0:  isOSX ? '<menu>' : '<UNK>'
	, 1:  '<mouse 1>'
	, 2:  '<mouse 2>'
	, 3:  '<break>'
	, 4:  '<mouse 3>'
	, 5:  '<mouse 4>'
	, 6:  '<mouse 5>'
	, 8:  '<backspace>'
	, 9:  '<tab>'
	, 12: '<clear>'
	, 13: '<enter>'
	, 16: '<shift>'
	, 17: '<control>'
	, 18: '<alt>'
	, 19: '<pause>'
	, 20: '<caps-lock>'
	, 21: '<ime-hangul>'
	, 23: '<ime-junja>'
	, 24: '<ime-final>'
	, 25: '<ime-kanji>'
	, 27: '<escape>'
	, 28: '<ime-convert>'
	, 29: '<ime-nonconvert>'
	, 30: '<ime-accept>'
	, 31: '<ime-mode-change>'
	, 27: '<escape>'
	, 32: '<space>'
	, 33: '<page-up>'
	, 34: '<page-down>'
	, 35: '<end>'
	, 36: '<home>'
	, 37: '<left>'
	, 38: '<up>'
	, 39: '<right>'
	, 40: '<down>'
	, 41: '<select>'
	, 42: '<print>'
	, 43: '<execute>'
	, 44: '<snapshot>'
	, 45: '<insert>'
	, 46: '<delete>'
	, 47: '<help>'
	, 91: '<meta>'  // meta-left -- no one handles left and right properly, so we coerce into one.
	, 92: '<meta>'  // meta-right
	, 93: isOSX ? '<meta>' : '<menu>'      // chrome,opera,safari all report this for meta-right (osx mbp).
	, 95: '<sleep>'
	, 106: '<num-*>'
	, 107: '<num-+>'
	, 108: '<num-enter>'
	, 109: '<num-->'
	, 110: '<num-.>'
	, 111: '<num-/>'
	, 144: '<num-lock>'
	, 145: '<scroll-lock>'
	, 160: '<shift-left>'
	, 161: '<shift-right>'
	, 162: '<control-left>'
	, 163: '<control-right>'
	, 164: '<alt-left>'
	, 165: '<alt-right>'
	, 166: '<browser-back>'
	, 167: '<browser-forward>'
	, 168: '<browser-refresh>'
	, 169: '<browser-stop>'
	, 170: '<browser-search>'
	, 171: '<browser-favorites>'
	, 172: '<browser-home>'
	
	  // ff/osx reports '<volume-mute>' for '-'
	, 173: isOSX && maybeFirefox ? '-' : '<volume-mute>'
	, 174: '<volume-down>'
	, 175: '<volume-up>'
	, 176: '<next-track>'
	, 177: '<prev-track>'
	, 178: '<stop>'
	, 179: '<play-pause>'
	, 180: '<launch-mail>'
	, 181: '<launch-media-select>'
	, 182: '<launch-app 1>'
	, 183: '<launch-app 2>'
	, 186: ';'
	, 187: '='
	, 188: ','
	, 189: '-'
	, 190: '.'
	, 191: '/'
	, 192: '`'
	, 219: '['
	, 220: '\\'
	, 221: ']'
	, 222: "'"
	, 223: '<meta>'
	, 224: '<meta>'       // firefox reports meta here.
	, 226: '<alt-gr>'
	, 229: '<ime-process>'
	, 231: isOpera ? '`' : '<unicode>'
	, 246: '<attention>'
	, 247: '<crsel>'
	, 248: '<exsel>'
	, 249: '<erase-eof>'
	, 250: '<play>'
	, 251: '<zoom>'
	, 252: '<no-name>'
	, 253: '<pa-1>'
	, 254: '<clear>'
	}
	
	for(i = 58; i < 65; ++i) {
	  output[i] = String.fromCharCode(i)
	}
	
	// 0-9
	for(i = 48; i < 58; ++i) {
	  output[i] = (i - 48)+''
	}
	
	// A-Z
	for(i = 65; i < 91; ++i) {
	  output[i] = String.fromCharCode(i)
	}
	
	// num0-9
	for(i = 96; i < 106; ++i) {
	  output[i] = '<num-'+(i - 96)+'>'
	}
	
	// F1-F24
	for(i = 112; i < 136; ++i) {
	  output[i] = 'F'+(i-111)
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// getUserMedia helper by @HenrikJoreteg used for navigator.getUserMedia shim
	var adapter = __webpack_require__(8);
	
	module.exports = function (constraints, cb) {
	    var error;
	    var haveOpts = arguments.length === 2;
	    var defaultOpts = {video: true, audio: true};
	
	    var denied = 'PermissionDeniedError';
	    var altDenied = 'PERMISSION_DENIED';
	    var notSatisfied = 'ConstraintNotSatisfiedError';
	
	    // make constraints optional
	    if (!haveOpts) {
	        cb = constraints;
	        constraints = defaultOpts;
	    }
	
	    // treat lack of browser support like an error
	    if (typeof navigator === 'undefined' || !navigator.getUserMedia) {
	        // throw proper error per spec
	        error = new Error('MediaStreamError');
	        error.name = 'NotSupportedError';
	
	        // keep all callbacks async
	        return setTimeout(function () {
	            cb(error);
	        }, 0);
	    }
	
	    // normalize error handling when no media types are requested
	    if (!constraints.audio && !constraints.video) {
	        error = new Error('MediaStreamError');
	        error.name = 'NoMediaRequestedError';
	
	        // keep all callbacks async
	        return setTimeout(function () {
	            cb(error);
	        }, 0);
	    }
	
	    // testing support -- note: using the about:config pref is better
	    // for Firefox 39+, this might get removed in the future
	    if (localStorage && localStorage.useFirefoxFakeDevice === 'true') {
	        constraints.fake = true;
	    }
	
	    navigator.mediaDevices.getUserMedia(constraints)
	    .then(function (stream) {
	        cb(null, stream);
	    }).catch(function (err) {
	        var error;
	        // coerce into an error object since FF gives us a string
	        // there are only two valid names according to the spec
	        // we coerce all non-denied to "constraint not satisfied".
	        if (typeof err === 'string') {
	            error = new Error('MediaStreamError');
	            if (err === denied || err === altDenied) {
	                error.name = denied;
	            } else {
	                error.name = notSatisfied;
	            }
	        } else {
	            // if we get an error object make sure '.name' property is set
	            // according to spec: http://dev.w3.org/2011/webrtc/editor/getusermedia.html#navigatorusermediaerror-and-navigatorusermediaerrorcallback
	            error = err;
	            if (!error.name) {
	                // this is likely chrome which
	                // sets a property called "ERROR_DENIED" on the error object
	                // if so we make sure to set a name
	                if (error[denied]) {
	                    err.name = denied;
	                } else {
	                    err.name = notSatisfied;
	                }
	            }
	        }
	
	        cb(error);
	    });
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
	 *
	 *  Use of this source code is governed by a BSD-style license
	 *  that can be found in the LICENSE file in the root of the source
	 *  tree.
	 */
	 /* eslint-env node */
	
	'use strict';
	
	// Shimming starts here.
	(function() {
	  // Utils.
	  var logging = __webpack_require__(9).log;
	  var browserDetails = __webpack_require__(9).browserDetails;
	  // Export to the adapter global object visible in the browser.
	  module.exports.browserDetails = browserDetails;
	  module.exports.extractVersion = __webpack_require__(9).extractVersion;
	  module.exports.disableLog = __webpack_require__(9).disableLog;
	
	  // Uncomment the line below if you want logging to occur, including logging
	  // for the switch statement below. Can also be turned on in the browser via
	  // adapter.disableLog(false), but then logging from the switch statement below
	  // will not appear.
	  // require('./utils').disableLog(false);
	
	  // Browser shims.
	  var chromeShim = __webpack_require__(10) || null;
	  var edgeShim = __webpack_require__(12) || null;
	  var firefoxShim = __webpack_require__(15) || null;
	  var safariShim = __webpack_require__(17) || null;
	
	  // Shim browser if found.
	  switch (browserDetails.browser) {
	    case 'opera': // fallthrough as it uses chrome shims
	    case 'chrome':
	      if (!chromeShim || !chromeShim.shimPeerConnection) {
	        logging('Chrome shim is not included in this adapter release.');
	        return;
	      }
	      logging('adapter.js shimming chrome.');
	      // Export to the adapter global object visible in the browser.
	      module.exports.browserShim = chromeShim;
	
	      chromeShim.shimGetUserMedia();
	      chromeShim.shimMediaStream();
	      chromeShim.shimSourceObject();
	      chromeShim.shimPeerConnection();
	      chromeShim.shimOnTrack();
	      break;
	    case 'firefox':
	      if (!firefoxShim || !firefoxShim.shimPeerConnection) {
	        logging('Firefox shim is not included in this adapter release.');
	        return;
	      }
	      logging('adapter.js shimming firefox.');
	      // Export to the adapter global object visible in the browser.
	      module.exports.browserShim = firefoxShim;
	
	      firefoxShim.shimGetUserMedia();
	      firefoxShim.shimSourceObject();
	      firefoxShim.shimPeerConnection();
	      firefoxShim.shimOnTrack();
	      break;
	    case 'edge':
	      if (!edgeShim || !edgeShim.shimPeerConnection) {
	        logging('MS edge shim is not included in this adapter release.');
	        return;
	      }
	      logging('adapter.js shimming edge.');
	      // Export to the adapter global object visible in the browser.
	      module.exports.browserShim = edgeShim;
	
	      edgeShim.shimGetUserMedia();
	      edgeShim.shimPeerConnection();
	      break;
	    case 'safari':
	      if (!safariShim) {
	        logging('Safari shim is not included in this adapter release.');
	        return;
	      }
	      logging('adapter.js shimming safari.');
	      // Export to the adapter global object visible in the browser.
	      module.exports.browserShim = safariShim;
	
	      safariShim.shimGetUserMedia();
	      break;
	    default:
	      logging('Unsupported browser!');
	  }
	})();


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
	 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
	 *
	 *  Use of this source code is governed by a BSD-style license
	 *  that can be found in the LICENSE file in the root of the source
	 *  tree.
	 */
	 /* eslint-env node */
	'use strict';
	
	var logDisabled_ = true;
	
	// Utility methods.
	var utils = {
	  disableLog: function(bool) {
	    if (typeof bool !== 'boolean') {
	      return new Error('Argument type: ' + typeof bool +
	          '. Please use a boolean.');
	    }
	    logDisabled_ = bool;
	    return (bool) ? 'adapter.js logging disabled' :
	        'adapter.js logging enabled';
	  },
	
	  log: function() {
	    if (typeof window === 'object') {
	      if (logDisabled_) {
	        return;
	      }
	      if (typeof console !== 'undefined' && typeof console.log === 'function') {
	        console.log.apply(console, arguments);
	      }
	    }
	  },
	
	  /**
	   * Extract browser version out of the provided user agent string.
	   *
	   * @param {!string} uastring userAgent string.
	   * @param {!string} expr Regular expression used as match criteria.
	   * @param {!number} pos position in the version string to be returned.
	   * @return {!number} browser version.
	   */
	  extractVersion: function(uastring, expr, pos) {
	    var match = uastring.match(expr);
	    return match && match.length >= pos && parseInt(match[pos], 10);
	  },
	
	  /**
	   * Browser detector.
	   *
	   * @return {object} result containing browser, version and minVersion
	   *     properties.
	   */
	  detectBrowser: function() {
	    // Returned result object.
	    var result = {};
	    result.browser = null;
	    result.version = null;
	    result.minVersion = null;
	
	    // Fail early if it's not a browser
	    if (typeof window === 'undefined' || !window.navigator) {
	      result.browser = 'Not a browser.';
	      return result;
	    }
	
	    // Firefox.
	    if (navigator.mozGetUserMedia) {
	      result.browser = 'firefox';
	      result.version = this.extractVersion(navigator.userAgent,
	          /Firefox\/([0-9]+)\./, 1);
	      result.minVersion = 31;
	
	    // all webkit-based browsers
	    } else if (navigator.webkitGetUserMedia) {
	      // Chrome, Chromium, Webview, Opera, all use the chrome shim for now
	      if (window.webkitRTCPeerConnection) {
	        result.browser = 'chrome';
	        result.version = this.extractVersion(navigator.userAgent,
	          /Chrom(e|ium)\/([0-9]+)\./, 2);
	        result.minVersion = 38;
	
	      // Safari or unknown webkit-based
	      // for the time being Safari has support for MediaStreams but not webRTC
	      } else {
	        // Safari UA substrings of interest for reference:
	        // - webkit version:           AppleWebKit/602.1.25 (also used in Op,Cr)
	        // - safari UI version:        Version/9.0.3 (unique to Safari)
	        // - safari UI webkit version: Safari/601.4.4 (also used in Op,Cr)
	        //
	        // if the webkit version and safari UI webkit versions are equals,
	        // ... this is a stable version.
	        //
	        // only the internal webkit version is important today to know if
	        // media streams are supported
	        //
	        if (navigator.userAgent.match(/Version\/(\d+).(\d+)/)) {
	          result.browser = 'safari';
	          result.version = this.extractVersion(navigator.userAgent,
	            /AppleWebKit\/([0-9]+)\./, 1);
	          result.minVersion = 602;
	
	        // unknown webkit-based browser
	        } else {
	          result.browser = 'Unsupported webkit-based browser ' +
	              'with GUM support but no WebRTC support.';
	          return result;
	        }
	      }
	
	    // Edge.
	    } else if (navigator.mediaDevices &&
	        navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
	      result.browser = 'edge';
	      result.version = this.extractVersion(navigator.userAgent,
	          /Edge\/(\d+).(\d+)$/, 2);
	      result.minVersion = 10547;
	
	    // Default fallthrough: not supported.
	    } else {
	      result.browser = 'Not a supported browser.';
	      return result;
	    }
	
	    // Warn if version is less than minVersion.
	    if (result.version < result.minVersion) {
	      utils.log('Browser: ' + result.browser + ' Version: ' + result.version +
	          ' < minimum supported version: ' + result.minVersion +
	          '\n some things might not work!');
	    }
	
	    return result;
	  }
	};
	
	// Export.
	module.exports = {
	  log: utils.log,
	  disableLog: utils.disableLog,
	  browserDetails: utils.detectBrowser(),
	  extractVersion: utils.extractVersion
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	
	/*
	 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
	 *
	 *  Use of this source code is governed by a BSD-style license
	 *  that can be found in the LICENSE file in the root of the source
	 *  tree.
	 */
	 /* eslint-env node */
	'use strict';
	var logging = __webpack_require__(9).log;
	var browserDetails = __webpack_require__(9).browserDetails;
	
	var chromeShim = {
	  shimMediaStream: function() {
	    window.MediaStream = window.MediaStream || window.webkitMediaStream;
	  },
	
	  shimOnTrack: function() {
	    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
	        window.RTCPeerConnection.prototype)) {
	      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
	        get: function() {
	          return this._ontrack;
	        },
	        set: function(f) {
	          var self = this;
	          if (this._ontrack) {
	            this.removeEventListener('track', this._ontrack);
	            this.removeEventListener('addstream', this._ontrackpoly);
	          }
	          this.addEventListener('track', this._ontrack = f);
	          this.addEventListener('addstream', this._ontrackpoly = function(e) {
	            // onaddstream does not fire when a track is added to an existing
	            // stream. But stream.onaddtrack is implemented so we use that.
	            e.stream.addEventListener('addtrack', function(te) {
	              var event = new Event('track');
	              event.track = te.track;
	              event.receiver = {track: te.track};
	              event.streams = [e.stream];
	              self.dispatchEvent(event);
	            });
	            e.stream.getTracks().forEach(function(track) {
	              var event = new Event('track');
	              event.track = track;
	              event.receiver = {track: track};
	              event.streams = [e.stream];
	              this.dispatchEvent(event);
	            }.bind(this));
	          }.bind(this));
	        }
	      });
	    }
	  },
	
	  shimSourceObject: function() {
	    if (typeof window === 'object') {
	      if (window.HTMLMediaElement &&
	        !('srcObject' in window.HTMLMediaElement.prototype)) {
	        // Shim the srcObject property, once, when HTMLMediaElement is found.
	        Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
	          get: function() {
	            return this._srcObject;
	          },
	          set: function(stream) {
	            var self = this;
	            // Use _srcObject as a private property for this shim
	            this._srcObject = stream;
	            if (this.src) {
	              URL.revokeObjectURL(this.src);
	            }
	
	            if (!stream) {
	              this.src = '';
	              return;
	            }
	            this.src = URL.createObjectURL(stream);
	            // We need to recreate the blob url when a track is added or
	            // removed. Doing it manually since we want to avoid a recursion.
	            stream.addEventListener('addtrack', function() {
	              if (self.src) {
	                URL.revokeObjectURL(self.src);
	              }
	              self.src = URL.createObjectURL(stream);
	            });
	            stream.addEventListener('removetrack', function() {
	              if (self.src) {
	                URL.revokeObjectURL(self.src);
	              }
	              self.src = URL.createObjectURL(stream);
	            });
	          }
	        });
	      }
	    }
	  },
	
	  shimPeerConnection: function() {
	    // The RTCPeerConnection object.
	    window.RTCPeerConnection = function(pcConfig, pcConstraints) {
	      // Translate iceTransportPolicy to iceTransports,
	      // see https://code.google.com/p/webrtc/issues/detail?id=4869
	      logging('PeerConnection');
	      if (pcConfig && pcConfig.iceTransportPolicy) {
	        pcConfig.iceTransports = pcConfig.iceTransportPolicy;
	      }
	
	      var pc = new webkitRTCPeerConnection(pcConfig, pcConstraints);
	      var origGetStats = pc.getStats.bind(pc);
	      pc.getStats = function(selector, successCallback, errorCallback) {
	        var self = this;
	        var args = arguments;
	
	        // If selector is a function then we are in the old style stats so just
	        // pass back the original getStats format to avoid breaking old users.
	        if (arguments.length > 0 && typeof selector === 'function') {
	          return origGetStats(selector, successCallback);
	        }
	
	        var fixChromeStats_ = function(response) {
	          var standardReport = {};
	          var reports = response.result();
	          reports.forEach(function(report) {
	            var standardStats = {
	              id: report.id,
	              timestamp: report.timestamp,
	              type: report.type
	            };
	            report.names().forEach(function(name) {
	              standardStats[name] = report.stat(name);
	            });
	            standardReport[standardStats.id] = standardStats;
	          });
	
	          return standardReport;
	        };
	
	        // shim getStats with maplike support
	        var makeMapStats = function(stats, legacyStats) {
	          var map = new Map(Object.keys(stats).map(function(key) {
	            return[key, stats[key]];
	          }));
	          legacyStats = legacyStats || stats;
	          Object.keys(legacyStats).forEach(function(key) {
	            map[key] = legacyStats[key];
	          });
	          return map;
	        };
	
	        if (arguments.length >= 2) {
	          var successCallbackWrapper_ = function(response) {
	            args[1](makeMapStats(fixChromeStats_(response)));
	          };
	
	          return origGetStats.apply(this, [successCallbackWrapper_,
	              arguments[0]]);
	        }
	
	        // promise-support
	        return new Promise(function(resolve, reject) {
	          if (args.length === 1 && typeof selector === 'object') {
	            origGetStats.apply(self, [
	              function(response) {
	                resolve(makeMapStats(fixChromeStats_(response)));
	              }, reject]);
	          } else {
	            // Preserve legacy chrome stats only on legacy access of stats obj
	            origGetStats.apply(self, [
	              function(response) {
	                resolve(makeMapStats(fixChromeStats_(response),
	                    response.result()));
	              }, reject]);
	          }
	        }).then(successCallback, errorCallback);
	      };
	
	      return pc;
	    };
	    window.RTCPeerConnection.prototype = webkitRTCPeerConnection.prototype;
	
	    // wrap static methods. Currently just generateCertificate.
	    if (webkitRTCPeerConnection.generateCertificate) {
	      Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
	        get: function() {
	          return webkitRTCPeerConnection.generateCertificate;
	        }
	      });
	    }
	
	    ['createOffer', 'createAnswer'].forEach(function(method) {
	      var nativeMethod = webkitRTCPeerConnection.prototype[method];
	      webkitRTCPeerConnection.prototype[method] = function() {
	        var self = this;
	        if (arguments.length < 1 || (arguments.length === 1 &&
	            typeof arguments[0] === 'object')) {
	          var opts = arguments.length === 1 ? arguments[0] : undefined;
	          return new Promise(function(resolve, reject) {
	            nativeMethod.apply(self, [resolve, reject, opts]);
	          });
	        }
	        return nativeMethod.apply(this, arguments);
	      };
	    });
	
	    // add promise support -- natively available in Chrome 51
	    if (browserDetails.version < 51) {
	      ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
	          .forEach(function(method) {
	            var nativeMethod = webkitRTCPeerConnection.prototype[method];
	            webkitRTCPeerConnection.prototype[method] = function() {
	              var args = arguments;
	              var self = this;
	              var promise = new Promise(function(resolve, reject) {
	                nativeMethod.apply(self, [args[0], resolve, reject]);
	              });
	              if (args.length < 2) {
	                return promise;
	              }
	              return promise.then(function() {
	                args[1].apply(null, []);
	              },
	              function(err) {
	                if (args.length >= 3) {
	                  args[2].apply(null, [err]);
	                }
	              });
	            };
	          });
	    }
	
	    // support for addIceCandidate(null)
	    var nativeAddIceCandidate =
	        RTCPeerConnection.prototype.addIceCandidate;
	    RTCPeerConnection.prototype.addIceCandidate = function() {
	      return arguments[0] === null ? Promise.resolve()
	          : nativeAddIceCandidate.apply(this, arguments);
	    };
	
	    // shim implicit creation of RTCSessionDescription/RTCIceCandidate
	    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
	        .forEach(function(method) {
	          var nativeMethod = webkitRTCPeerConnection.prototype[method];
	          webkitRTCPeerConnection.prototype[method] = function() {
	            arguments[0] = new ((method === 'addIceCandidate') ?
	                RTCIceCandidate : RTCSessionDescription)(arguments[0]);
	            return nativeMethod.apply(this, arguments);
	          };
	        });
	  },
	
	  // Attach a media stream to an element.
	  attachMediaStream: function(element, stream) {
	    logging('DEPRECATED, attachMediaStream will soon be removed.');
	    if (browserDetails.version >= 43) {
	      element.srcObject = stream;
	    } else if (typeof element.src !== 'undefined') {
	      element.src = URL.createObjectURL(stream);
	    } else {
	      logging('Error attaching stream to element.');
	    }
	  },
	
	  reattachMediaStream: function(to, from) {
	    logging('DEPRECATED, reattachMediaStream will soon be removed.');
	    if (browserDetails.version >= 43) {
	      to.srcObject = from.srcObject;
	    } else {
	      to.src = from.src;
	    }
	  }
	};
	
	
	// Expose public methods.
	module.exports = {
	  shimMediaStream: chromeShim.shimMediaStream,
	  shimOnTrack: chromeShim.shimOnTrack,
	  shimSourceObject: chromeShim.shimSourceObject,
	  shimPeerConnection: chromeShim.shimPeerConnection,
	  shimGetUserMedia: __webpack_require__(11),
	  attachMediaStream: chromeShim.attachMediaStream,
	  reattachMediaStream: chromeShim.reattachMediaStream
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
	 *
	 *  Use of this source code is governed by a BSD-style license
	 *  that can be found in the LICENSE file in the root of the source
	 *  tree.
	 */
	 /* eslint-env node */
	'use strict';
	var logging = __webpack_require__(9).log;
	
	// Expose public methods.
	module.exports = function() {
	  var constraintsToChrome_ = function(c) {
	    if (typeof c !== 'object' || c.mandatory || c.optional) {
	      return c;
	    }
	    var cc = {};
	    Object.keys(c).forEach(function(key) {
	      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
	        return;
	      }
	      var r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
	      if (r.exact !== undefined && typeof r.exact === 'number') {
	        r.min = r.max = r.exact;
	      }
	      var oldname_ = function(prefix, name) {
	        if (prefix) {
	          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
	        }
	        return (name === 'deviceId') ? 'sourceId' : name;
	      };
	      if (r.ideal !== undefined) {
	        cc.optional = cc.optional || [];
	        var oc = {};
	        if (typeof r.ideal === 'number') {
	          oc[oldname_('min', key)] = r.ideal;
	          cc.optional.push(oc);
	          oc = {};
	          oc[oldname_('max', key)] = r.ideal;
	          cc.optional.push(oc);
	        } else {
	          oc[oldname_('', key)] = r.ideal;
	          cc.optional.push(oc);
	        }
	      }
	      if (r.exact !== undefined && typeof r.exact !== 'number') {
	        cc.mandatory = cc.mandatory || {};
	        cc.mandatory[oldname_('', key)] = r.exact;
	      } else {
	        ['min', 'max'].forEach(function(mix) {
	          if (r[mix] !== undefined) {
	            cc.mandatory = cc.mandatory || {};
	            cc.mandatory[oldname_(mix, key)] = r[mix];
	          }
	        });
	      }
	    });
	    if (c.advanced) {
	      cc.optional = (cc.optional || []).concat(c.advanced);
	    }
	    return cc;
	  };
	
	  var shimConstraints_ = function(constraints, func) {
	    constraints = JSON.parse(JSON.stringify(constraints));
	    if (constraints && constraints.audio) {
	      constraints.audio = constraintsToChrome_(constraints.audio);
	    }
	    if (constraints && typeof constraints.video === 'object') {
	      // Shim facingMode for mobile, where it defaults to "user".
	      var face = constraints.video.facingMode;
	      face = face && ((typeof face === 'object') ? face : {ideal: face});
	
	      if ((face && (face.exact === 'user' || face.exact === 'environment' ||
	                    face.ideal === 'user' || face.ideal === 'environment')) &&
	          !(navigator.mediaDevices.getSupportedConstraints &&
	            navigator.mediaDevices.getSupportedConstraints().facingMode)) {
	        delete constraints.video.facingMode;
	        if (face.exact === 'environment' || face.ideal === 'environment') {
	          // Look for "back" in label, or use last cam (typically back cam).
	          return navigator.mediaDevices.enumerateDevices()
	          .then(function(devices) {
	            devices = devices.filter(function(d) {
	              return d.kind === 'videoinput';
	            });
	            var back = devices.find(function(d) {
	              return d.label.toLowerCase().indexOf('back') !== -1;
	            }) || (devices.length && devices[devices.length - 1]);
	            if (back) {
	              constraints.video.deviceId = face.exact ? {exact: back.deviceId} :
	                                                        {ideal: back.deviceId};
	            }
	            constraints.video = constraintsToChrome_(constraints.video);
	            logging('chrome: ' + JSON.stringify(constraints));
	            return func(constraints);
	          });
	        }
	      }
	      constraints.video = constraintsToChrome_(constraints.video);
	    }
	    logging('chrome: ' + JSON.stringify(constraints));
	    return func(constraints);
	  };
	
	  var shimError_ = function(e) {
	    return {
	      name: {
	        PermissionDeniedError: 'NotAllowedError',
	        ConstraintNotSatisfiedError: 'OverconstrainedError'
	      }[e.name] || e.name,
	      message: e.message,
	      constraint: e.constraintName,
	      toString: function() {
	        return this.name + (this.message && ': ') + this.message;
	      }
	    };
	  };
	
	  var getUserMedia_ = function(constraints, onSuccess, onError) {
	    shimConstraints_(constraints, function(c) {
	      navigator.webkitGetUserMedia(c, onSuccess, function(e) {
	        onError(shimError_(e));
	      });
	    });
	  };
	
	  navigator.getUserMedia = getUserMedia_;
	
	  // Returns the result of getUserMedia as a Promise.
	  var getUserMediaPromise_ = function(constraints) {
	    return new Promise(function(resolve, reject) {
	      navigator.getUserMedia(constraints, resolve, reject);
	    });
	  };
	
	  if (!navigator.mediaDevices) {
	    navigator.mediaDevices = {
	      getUserMedia: getUserMediaPromise_,
	      enumerateDevices: function() {
	        return new Promise(function(resolve) {
	          var kinds = {audio: 'audioinput', video: 'videoinput'};
	          return MediaStreamTrack.getSources(function(devices) {
	            resolve(devices.map(function(device) {
	              return {label: device.label,
	                      kind: kinds[device.kind],
	                      deviceId: device.id,
	                      groupId: ''};
	            }));
	          });
	        });
	      }
	    };
	  }
	
	  // A shim for getUserMedia method on the mediaDevices object.
	  // TODO(KaptenJansson) remove once implemented in Chrome stable.
	  if (!navigator.mediaDevices.getUserMedia) {
	    navigator.mediaDevices.getUserMedia = function(constraints) {
	      return getUserMediaPromise_(constraints);
	    };
	  } else {
	    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
	    // function which returns a Promise, it does not accept spec-style
	    // constraints.
	    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
	        bind(navigator.mediaDevices);
	    navigator.mediaDevices.getUserMedia = function(cs) {
	      return shimConstraints_(cs, function(c) {
	        return origGetUserMedia(c).catch(function(e) {
	          return Promise.reject(shimError_(e));
	        });
	      });
	    };
	  }
	
	  // Dummy devicechange event methods.
	  // TODO(KaptenJansson) remove once implemented in Chrome stable.
	  if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
	    navigator.mediaDevices.addEventListener = function() {
	      logging('Dummy mediaDevices.addEventListener called.');
	    };
	  }
	  if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
	    navigator.mediaDevices.removeEventListener = function() {
	      logging('Dummy mediaDevices.removeEventListener called.');
	    };
	  }
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
	 *
	 *  Use of this source code is governed by a BSD-style license
	 *  that can be found in the LICENSE file in the root of the source
	 *  tree.
	 */
	 /* eslint-env node */
	'use strict';
	
	var SDPUtils = __webpack_require__(13);
	var logging = __webpack_require__(9).log;
	
	var edgeShim = {
	  shimPeerConnection: function() {
	    if (window.RTCIceGatherer) {
	      // ORTC defines an RTCIceCandidate object but no constructor.
	      // Not implemented in Edge.
	      if (!window.RTCIceCandidate) {
	        window.RTCIceCandidate = function(args) {
	          return args;
	        };
	      }
	      // ORTC does not have a session description object but
	      // other browsers (i.e. Chrome) that will support both PC and ORTC
	      // in the future might have this defined already.
	      if (!window.RTCSessionDescription) {
	        window.RTCSessionDescription = function(args) {
	          return args;
	        };
	      }
	    }
	
	    window.RTCPeerConnection = function(config) {
	      var self = this;
	
	      var _eventTarget = document.createDocumentFragment();
	      ['addEventListener', 'removeEventListener', 'dispatchEvent']
	          .forEach(function(method) {
	            self[method] = _eventTarget[method].bind(_eventTarget);
	          });
	
	      this.onicecandidate = null;
	      this.onaddstream = null;
	      this.ontrack = null;
	      this.onremovestream = null;
	      this.onsignalingstatechange = null;
	      this.oniceconnectionstatechange = null;
	      this.onnegotiationneeded = null;
	      this.ondatachannel = null;
	
	      this.localStreams = [];
	      this.remoteStreams = [];
	      this.getLocalStreams = function() {
	        return self.localStreams;
	      };
	      this.getRemoteStreams = function() {
	        return self.remoteStreams;
	      };
	
	      this.localDescription = new RTCSessionDescription({
	        type: '',
	        sdp: ''
	      });
	      this.remoteDescription = new RTCSessionDescription({
	        type: '',
	        sdp: ''
	      });
	      this.signalingState = 'stable';
	      this.iceConnectionState = 'new';
	      this.iceGatheringState = 'new';
	
	      this.iceOptions = {
	        gatherPolicy: 'all',
	        iceServers: []
	      };
	      if (config && config.iceTransportPolicy) {
	        switch (config.iceTransportPolicy) {
	          case 'all':
	          case 'relay':
	            this.iceOptions.gatherPolicy = config.iceTransportPolicy;
	            break;
	          case 'none':
	            // FIXME: remove once implementation and spec have added this.
	            throw new TypeError('iceTransportPolicy "none" not supported');
	          default:
	            // don't set iceTransportPolicy.
	            break;
	        }
	      }
	      this.usingBundle = config && config.bundlePolicy === 'max-bundle';
	
	      if (config && config.iceServers) {
	        // Edge does not like
	        // 1) stun:
	        // 2) turn: that does not have all of turn:host:port?transport=udp
	        var iceServers = JSON.parse(JSON.stringify(config.iceServers));
	        this.iceOptions.iceServers = iceServers.filter(function(server) {
	          if (server && server.urls) {
	            var urls = server.urls;
	            if (typeof urls === 'string') {
	              urls = [urls];
	            }
	            urls = urls.filter(function(url) {
	              return url.indexOf('turn:') === 0 &&
	                  url.indexOf('transport=udp') !== -1;
	            })[0];
	            return !!urls;
	          }
	          return false;
	        });
	      }
	
	      // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
	      // everything that is needed to describe a SDP m-line.
	      this.transceivers = [];
	
	      // since the iceGatherer is currently created in createOffer but we
	      // must not emit candidates until after setLocalDescription we buffer
	      // them in this array.
	      this._localIceCandidatesBuffer = [];
	    };
	
	    window.RTCPeerConnection.prototype._emitBufferedCandidates = function() {
	      var self = this;
	      var sections = SDPUtils.splitSections(self.localDescription.sdp);
	      // FIXME: need to apply ice candidates in a way which is async but
	      // in-order
	      this._localIceCandidatesBuffer.forEach(function(event) {
	        var end = !event.candidate || Object.keys(event.candidate).length === 0;
	        if (end) {
	          for (var j = 1; j < sections.length; j++) {
	            if (sections[j].indexOf('\r\na=end-of-candidates\r\n') === -1) {
	              sections[j] += 'a=end-of-candidates\r\n';
	            }
	          }
	        } else if (event.candidate.candidate.indexOf('typ endOfCandidates')
	            === -1) {
	          sections[event.candidate.sdpMLineIndex + 1] +=
	              'a=' + event.candidate.candidate + '\r\n';
	        }
	        self.localDescription.sdp = sections.join('');
	        self.dispatchEvent(event);
	        if (self.onicecandidate !== null) {
	          self.onicecandidate(event);
	        }
	        if (!event.candidate && self.iceGatheringState !== 'complete') {
	          var complete = self.transceivers.every(function(transceiver) {
	            return transceiver.iceGatherer &&
	                transceiver.iceGatherer.state === 'completed';
	          });
	          if (complete) {
	            self.iceGatheringState = 'complete';
	          }
	        }
	      });
	      this._localIceCandidatesBuffer = [];
	    };
	
	    window.RTCPeerConnection.prototype.addStream = function(stream) {
	      // Clone is necessary for local demos mostly, attaching directly
	      // to two different senders does not work (build 10547).
	      this.localStreams.push(stream.clone());
	      this._maybeFireNegotiationNeeded();
	    };
	
	    window.RTCPeerConnection.prototype.removeStream = function(stream) {
	      var idx = this.localStreams.indexOf(stream);
	      if (idx > -1) {
	        this.localStreams.splice(idx, 1);
	        this._maybeFireNegotiationNeeded();
	      }
	    };
	
	    window.RTCPeerConnection.prototype.getSenders = function() {
	      return this.transceivers.filter(function(transceiver) {
	        return !!transceiver.rtpSender;
	      })
	      .map(function(transceiver) {
	        return transceiver.rtpSender;
	      });
	    };
	
	    window.RTCPeerConnection.prototype.getReceivers = function() {
	      return this.transceivers.filter(function(transceiver) {
	        return !!transceiver.rtpReceiver;
	      })
	      .map(function(transceiver) {
	        return transceiver.rtpReceiver;
	      });
	    };
	
	    // Determines the intersection of local and remote capabilities.
	    window.RTCPeerConnection.prototype._getCommonCapabilities =
	        function(localCapabilities, remoteCapabilities) {
	          var commonCapabilities = {
	            codecs: [],
	            headerExtensions: [],
	            fecMechanisms: []
	          };
	          localCapabilities.codecs.forEach(function(lCodec) {
	            for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
	              var rCodec = remoteCapabilities.codecs[i];
	              if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
	                  lCodec.clockRate === rCodec.clockRate &&
	                  lCodec.numChannels === rCodec.numChannels) {
	                // push rCodec so we reply with offerer payload type
	                commonCapabilities.codecs.push(rCodec);
	
	                // FIXME: also need to determine intersection between
	                // .rtcpFeedback and .parameters
	                break;
	              }
	            }
	          });
	
	          localCapabilities.headerExtensions
	              .forEach(function(lHeaderExtension) {
	                for (var i = 0; i < remoteCapabilities.headerExtensions.length;
	                     i++) {
	                  var rHeaderExtension = remoteCapabilities.headerExtensions[i];
	                  if (lHeaderExtension.uri === rHeaderExtension.uri) {
	                    commonCapabilities.headerExtensions.push(rHeaderExtension);
	                    break;
	                  }
	                }
	              });
	
	          // FIXME: fecMechanisms
	          return commonCapabilities;
	        };
	
	    // Create ICE gatherer, ICE transport and DTLS transport.
	    window.RTCPeerConnection.prototype._createIceAndDtlsTransports =
	        function(mid, sdpMLineIndex) {
	          var self = this;
	          var iceGatherer = new RTCIceGatherer(self.iceOptions);
	          var iceTransport = new RTCIceTransport(iceGatherer);
	          iceGatherer.onlocalcandidate = function(evt) {
	            var event = new Event('icecandidate');
	            event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};
	
	            var cand = evt.candidate;
	            var end = !cand || Object.keys(cand).length === 0;
	            // Edge emits an empty object for RTCIceCandidateComplete‥
	            if (end) {
	              // polyfill since RTCIceGatherer.state is not implemented in
	              // Edge 10547 yet.
	              if (iceGatherer.state === undefined) {
	                iceGatherer.state = 'completed';
	              }
	
	              // Emit a candidate with type endOfCandidates to make the samples
	              // work. Edge requires addIceCandidate with this empty candidate
	              // to start checking. The real solution is to signal
	              // end-of-candidates to the other side when getting the null
	              // candidate but some apps (like the samples) don't do that.
	              event.candidate.candidate =
	                  'candidate:1 1 udp 1 0.0.0.0 9 typ endOfCandidates';
	            } else {
	              // RTCIceCandidate doesn't have a component, needs to be added
	              cand.component = iceTransport.component === 'RTCP' ? 2 : 1;
	              event.candidate.candidate = SDPUtils.writeCandidate(cand);
	            }
	
	            // update local description.
	            var sections = SDPUtils.splitSections(self.localDescription.sdp);
	            if (event.candidate.candidate.indexOf('typ endOfCandidates')
	                === -1) {
	              sections[event.candidate.sdpMLineIndex + 1] +=
	                  'a=' + event.candidate.candidate + '\r\n';
	            } else {
	              sections[event.candidate.sdpMLineIndex + 1] +=
	                  'a=end-of-candidates\r\n';
	            }
	            self.localDescription.sdp = sections.join('');
	
	            var complete = self.transceivers.every(function(transceiver) {
	              return transceiver.iceGatherer &&
	                  transceiver.iceGatherer.state === 'completed';
	            });
	
	            // Emit candidate if localDescription is set.
	            // Also emits null candidate when all gatherers are complete.
	            switch (self.iceGatheringState) {
	              case 'new':
	                self._localIceCandidatesBuffer.push(event);
	                if (end && complete) {
	                  self._localIceCandidatesBuffer.push(
	                      new Event('icecandidate'));
	                }
	                break;
	              case 'gathering':
	                self._emitBufferedCandidates();
	                self.dispatchEvent(event);
	                if (self.onicecandidate !== null) {
	                  self.onicecandidate(event);
	                }
	                if (complete) {
	                  self.dispatchEvent(new Event('icecandidate'));
	                  if (self.onicecandidate !== null) {
	                    self.onicecandidate(new Event('icecandidate'));
	                  }
	                  self.iceGatheringState = 'complete';
	                }
	                break;
	              case 'complete':
	                // should not happen... currently!
	                break;
	              default: // no-op.
	                break;
	            }
	          };
	          iceTransport.onicestatechange = function() {
	            self._updateConnectionState();
	          };
	
	          var dtlsTransport = new RTCDtlsTransport(iceTransport);
	          dtlsTransport.ondtlsstatechange = function() {
	            self._updateConnectionState();
	          };
	          dtlsTransport.onerror = function() {
	            // onerror does not set state to failed by itself.
	            dtlsTransport.state = 'failed';
	            self._updateConnectionState();
	          };
	
	          return {
	            iceGatherer: iceGatherer,
	            iceTransport: iceTransport,
	            dtlsTransport: dtlsTransport
	          };
	        };
	
	    // Start the RTP Sender and Receiver for a transceiver.
	    window.RTCPeerConnection.prototype._transceive = function(transceiver,
	        send, recv) {
	      var params = this._getCommonCapabilities(transceiver.localCapabilities,
	          transceiver.remoteCapabilities);
	      if (send && transceiver.rtpSender) {
	        params.encodings = transceiver.sendEncodingParameters;
	        params.rtcp = {
	          cname: SDPUtils.localCName
	        };
	        if (transceiver.recvEncodingParameters.length) {
	          params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
	        }
	        transceiver.rtpSender.send(params);
	      }
	      if (recv && transceiver.rtpReceiver) {
	        params.encodings = transceiver.recvEncodingParameters;
	        params.rtcp = {
	          cname: transceiver.cname
	        };
	        if (transceiver.sendEncodingParameters.length) {
	          params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
	        }
	        transceiver.rtpReceiver.receive(params);
	      }
	    };
	
	    window.RTCPeerConnection.prototype.setLocalDescription =
	        function(description) {
	          var self = this;
	          var sections;
	          var sessionpart;
	          if (description.type === 'offer') {
	            // FIXME: What was the purpose of this empty if statement?
	            // if (!this._pendingOffer) {
	            // } else {
	            if (this._pendingOffer) {
	              // VERY limited support for SDP munging. Limited to:
	              // * changing the order of codecs
	              sections = SDPUtils.splitSections(description.sdp);
	              sessionpart = sections.shift();
	              sections.forEach(function(mediaSection, sdpMLineIndex) {
	                var caps = SDPUtils.parseRtpParameters(mediaSection);
	                self._pendingOffer[sdpMLineIndex].localCapabilities = caps;
	              });
	              this.transceivers = this._pendingOffer;
	              delete this._pendingOffer;
	            }
	          } else if (description.type === 'answer') {
	            sections = SDPUtils.splitSections(self.remoteDescription.sdp);
	            sessionpart = sections.shift();
	            var isIceLite = SDPUtils.matchPrefix(sessionpart,
	                'a=ice-lite').length > 0;
	            sections.forEach(function(mediaSection, sdpMLineIndex) {
	              var transceiver = self.transceivers[sdpMLineIndex];
	              var iceGatherer = transceiver.iceGatherer;
	              var iceTransport = transceiver.iceTransport;
	              var dtlsTransport = transceiver.dtlsTransport;
	              var localCapabilities = transceiver.localCapabilities;
	              var remoteCapabilities = transceiver.remoteCapabilities;
	              var rejected = mediaSection.split('\n', 1)[0]
	                  .split(' ', 2)[1] === '0';
	
	              if (!rejected) {
	                var remoteIceParameters = SDPUtils.getIceParameters(
	                    mediaSection, sessionpart);
	                if (isIceLite) {
	                  var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
	                  .map(function(cand) {
	                    return SDPUtils.parseCandidate(cand);
	                  })
	                  .filter(function(cand) {
	                    return cand.component === '1';
	                  });
	                  // ice-lite only includes host candidates in the SDP so we can
	                  // use setRemoteCandidates (which implies an
	                  // RTCIceCandidateComplete)
	                  if (cands.length) {
	                    iceTransport.setRemoteCandidates(cands);
	                  }
	                }
	                var remoteDtlsParameters = SDPUtils.getDtlsParameters(
	                    mediaSection, sessionpart);
	                if (isIceLite) {
	                  remoteDtlsParameters.role = 'server';
	                }
	
	                if (!self.usingBundle || sdpMLineIndex === 0) {
	                  iceTransport.start(iceGatherer, remoteIceParameters,
	                      isIceLite ? 'controlling' : 'controlled');
	                  dtlsTransport.start(remoteDtlsParameters);
	                }
	
	                // Calculate intersection of capabilities.
	                var params = self._getCommonCapabilities(localCapabilities,
	                    remoteCapabilities);
	
	                // Start the RTCRtpSender. The RTCRtpReceiver for this
	                // transceiver has already been started in setRemoteDescription.
	                self._transceive(transceiver,
	                    params.codecs.length > 0,
	                    false);
	              }
	            });
	          }
	
	          this.localDescription = {
	            type: description.type,
	            sdp: description.sdp
	          };
	          switch (description.type) {
	            case 'offer':
	              this._updateSignalingState('have-local-offer');
	              break;
	            case 'answer':
	              this._updateSignalingState('stable');
	              break;
	            default:
	              throw new TypeError('unsupported type "' + description.type +
	                  '"');
	          }
	
	          // If a success callback was provided, emit ICE candidates after it
	          // has been executed. Otherwise, emit callback after the Promise is
	          // resolved.
	          var hasCallback = arguments.length > 1 &&
	            typeof arguments[1] === 'function';
	          if (hasCallback) {
	            var cb = arguments[1];
	            window.setTimeout(function() {
	              cb();
	              if (self.iceGatheringState === 'new') {
	                self.iceGatheringState = 'gathering';
	              }
	              self._emitBufferedCandidates();
	            }, 0);
	          }
	          var p = Promise.resolve();
	          p.then(function() {
	            if (!hasCallback) {
	              if (self.iceGatheringState === 'new') {
	                self.iceGatheringState = 'gathering';
	              }
	              // Usually candidates will be emitted earlier.
	              window.setTimeout(self._emitBufferedCandidates.bind(self), 500);
	            }
	          });
	          return p;
	        };
	
	    window.RTCPeerConnection.prototype.setRemoteDescription =
	        function(description) {
	          var self = this;
	          var stream = new MediaStream();
	          var receiverList = [];
	          var sections = SDPUtils.splitSections(description.sdp);
	          var sessionpart = sections.shift();
	          var isIceLite = SDPUtils.matchPrefix(sessionpart,
	              'a=ice-lite').length > 0;
	          this.usingBundle = SDPUtils.matchPrefix(sessionpart,
	              'a=group:BUNDLE ').length > 0;
	          sections.forEach(function(mediaSection, sdpMLineIndex) {
	            var lines = SDPUtils.splitLines(mediaSection);
	            var mline = lines[0].substr(2).split(' ');
	            var kind = mline[0];
	            var rejected = mline[1] === '0';
	            var direction = SDPUtils.getDirection(mediaSection, sessionpart);
	
	            var transceiver;
	            var iceGatherer;
	            var iceTransport;
	            var dtlsTransport;
	            var rtpSender;
	            var rtpReceiver;
	            var sendEncodingParameters;
	            var recvEncodingParameters;
	            var localCapabilities;
	
	            var track;
	            // FIXME: ensure the mediaSection has rtcp-mux set.
	            var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
	            var remoteIceParameters;
	            var remoteDtlsParameters;
	            if (!rejected) {
	              remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
	                  sessionpart);
	              remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
	                  sessionpart);
	              remoteDtlsParameters.role = 'client';
	            }
	            recvEncodingParameters =
	                SDPUtils.parseRtpEncodingParameters(mediaSection);
	
	            var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:');
	            if (mid.length) {
	              mid = mid[0].substr(6);
	            } else {
	              mid = SDPUtils.generateIdentifier();
	            }
	
	            var cname;
	            // Gets the first SSRC. Note that with RTX there might be multiple
	            // SSRCs.
	            var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
	                .map(function(line) {
	                  return SDPUtils.parseSsrcMedia(line);
	                })
	                .filter(function(obj) {
	                  return obj.attribute === 'cname';
	                })[0];
	            if (remoteSsrc) {
	              cname = remoteSsrc.value;
	            }
	
	            var isComplete = SDPUtils.matchPrefix(mediaSection,
	                'a=end-of-candidates').length > 0;
	            var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
	                .map(function(cand) {
	                  return SDPUtils.parseCandidate(cand);
	                })
	                .filter(function(cand) {
	                  return cand.component === '1';
	                });
	            if (description.type === 'offer' && !rejected) {
	              var transports = self.usingBundle && sdpMLineIndex > 0 ? {
	                iceGatherer: self.transceivers[0].iceGatherer,
	                iceTransport: self.transceivers[0].iceTransport,
	                dtlsTransport: self.transceivers[0].dtlsTransport
	              } : self._createIceAndDtlsTransports(mid, sdpMLineIndex);
	
	              if (isComplete) {
	                transports.iceTransport.setRemoteCandidates(cands);
	              }
	
	              localCapabilities = RTCRtpReceiver.getCapabilities(kind);
	              sendEncodingParameters = [{
	                ssrc: (2 * sdpMLineIndex + 2) * 1001
	              }];
	
	              rtpReceiver = new RTCRtpReceiver(transports.dtlsTransport, kind);
	
	              track = rtpReceiver.track;
	              receiverList.push([track, rtpReceiver]);
	              // FIXME: not correct when there are multiple streams but that is
	              // not currently supported in this shim.
	              stream.addTrack(track);
	
	              // FIXME: look at direction.
	              if (self.localStreams.length > 0 &&
	                  self.localStreams[0].getTracks().length >= sdpMLineIndex) {
	                // FIXME: actually more complicated, needs to match types etc
	                var localtrack = self.localStreams[0]
	                    .getTracks()[sdpMLineIndex];
	                rtpSender = new RTCRtpSender(localtrack,
	                    transports.dtlsTransport);
	              }
	
	              self.transceivers[sdpMLineIndex] = {
	                iceGatherer: transports.iceGatherer,
	                iceTransport: transports.iceTransport,
	                dtlsTransport: transports.dtlsTransport,
	                localCapabilities: localCapabilities,
	                remoteCapabilities: remoteCapabilities,
	                rtpSender: rtpSender,
	                rtpReceiver: rtpReceiver,
	                kind: kind,
	                mid: mid,
	                cname: cname,
	                sendEncodingParameters: sendEncodingParameters,
	                recvEncodingParameters: recvEncodingParameters
	              };
	              // Start the RTCRtpReceiver now. The RTPSender is started in
	              // setLocalDescription.
	              self._transceive(self.transceivers[sdpMLineIndex],
	                  false,
	                  direction === 'sendrecv' || direction === 'sendonly');
	            } else if (description.type === 'answer' && !rejected) {
	              transceiver = self.transceivers[sdpMLineIndex];
	              iceGatherer = transceiver.iceGatherer;
	              iceTransport = transceiver.iceTransport;
	              dtlsTransport = transceiver.dtlsTransport;
	              rtpSender = transceiver.rtpSender;
	              rtpReceiver = transceiver.rtpReceiver;
	              sendEncodingParameters = transceiver.sendEncodingParameters;
	              localCapabilities = transceiver.localCapabilities;
	
	              self.transceivers[sdpMLineIndex].recvEncodingParameters =
	                  recvEncodingParameters;
	              self.transceivers[sdpMLineIndex].remoteCapabilities =
	                  remoteCapabilities;
	              self.transceivers[sdpMLineIndex].cname = cname;
	
	              if ((isIceLite || isComplete) && cands.length) {
	                iceTransport.setRemoteCandidates(cands);
	              }
	              if (!self.usingBundle || sdpMLineIndex === 0) {
	                iceTransport.start(iceGatherer, remoteIceParameters,
	                    'controlling');
	                dtlsTransport.start(remoteDtlsParameters);
	              }
	
	              self._transceive(transceiver,
	                  direction === 'sendrecv' || direction === 'recvonly',
	                  direction === 'sendrecv' || direction === 'sendonly');
	
	              if (rtpReceiver &&
	                  (direction === 'sendrecv' || direction === 'sendonly')) {
	                track = rtpReceiver.track;
	                receiverList.push([track, rtpReceiver]);
	                stream.addTrack(track);
	              } else {
	                // FIXME: actually the receiver should be created later.
	                delete transceiver.rtpReceiver;
	              }
	            }
	          });
	
	          this.remoteDescription = {
	            type: description.type,
	            sdp: description.sdp
	          };
	          switch (description.type) {
	            case 'offer':
	              this._updateSignalingState('have-remote-offer');
	              break;
	            case 'answer':
	              this._updateSignalingState('stable');
	              break;
	            default:
	              throw new TypeError('unsupported type "' + description.type +
	                  '"');
	          }
	          if (stream.getTracks().length) {
	            self.remoteStreams.push(stream);
	            window.setTimeout(function() {
	              var event = new Event('addstream');
	              event.stream = stream;
	              self.dispatchEvent(event);
	              if (self.onaddstream !== null) {
	                window.setTimeout(function() {
	                  self.onaddstream(event);
	                }, 0);
	              }
	
	              receiverList.forEach(function(item) {
	                var track = item[0];
	                var receiver = item[1];
	                var trackEvent = new Event('track');
	                trackEvent.track = track;
	                trackEvent.receiver = receiver;
	                trackEvent.streams = [stream];
	                self.dispatchEvent(event);
	                if (self.ontrack !== null) {
	                  window.setTimeout(function() {
	                    self.ontrack(trackEvent);
	                  }, 0);
	                }
	              });
	            }, 0);
	          }
	          if (arguments.length > 1 && typeof arguments[1] === 'function') {
	            window.setTimeout(arguments[1], 0);
	          }
	          return Promise.resolve();
	        };
	
	    window.RTCPeerConnection.prototype.close = function() {
	      this.transceivers.forEach(function(transceiver) {
	        /* not yet
	        if (transceiver.iceGatherer) {
	          transceiver.iceGatherer.close();
	        }
	        */
	        if (transceiver.iceTransport) {
	          transceiver.iceTransport.stop();
	        }
	        if (transceiver.dtlsTransport) {
	          transceiver.dtlsTransport.stop();
	        }
	        if (transceiver.rtpSender) {
	          transceiver.rtpSender.stop();
	        }
	        if (transceiver.rtpReceiver) {
	          transceiver.rtpReceiver.stop();
	        }
	      });
	      // FIXME: clean up tracks, local streams, remote streams, etc
	      this._updateSignalingState('closed');
	    };
	
	    // Update the signaling state.
	    window.RTCPeerConnection.prototype._updateSignalingState =
	        function(newState) {
	          this.signalingState = newState;
	          var event = new Event('signalingstatechange');
	          this.dispatchEvent(event);
	          if (this.onsignalingstatechange !== null) {
	            this.onsignalingstatechange(event);
	          }
	        };
	
	    // Determine whether to fire the negotiationneeded event.
	    window.RTCPeerConnection.prototype._maybeFireNegotiationNeeded =
	        function() {
	          // Fire away (for now).
	          var event = new Event('negotiationneeded');
	          this.dispatchEvent(event);
	          if (this.onnegotiationneeded !== null) {
	            this.onnegotiationneeded(event);
	          }
	        };
	
	    // Update the connection state.
	    window.RTCPeerConnection.prototype._updateConnectionState = function() {
	      var self = this;
	      var newState;
	      var states = {
	        'new': 0,
	        closed: 0,
	        connecting: 0,
	        checking: 0,
	        connected: 0,
	        completed: 0,
	        failed: 0
	      };
	      this.transceivers.forEach(function(transceiver) {
	        states[transceiver.iceTransport.state]++;
	        states[transceiver.dtlsTransport.state]++;
	      });
	      // ICETransport.completed and connected are the same for this purpose.
	      states.connected += states.completed;
	
	      newState = 'new';
	      if (states.failed > 0) {
	        newState = 'failed';
	      } else if (states.connecting > 0 || states.checking > 0) {
	        newState = 'connecting';
	      } else if (states.disconnected > 0) {
	        newState = 'disconnected';
	      } else if (states.new > 0) {
	        newState = 'new';
	      } else if (states.connected > 0 || states.completed > 0) {
	        newState = 'connected';
	      }
	
	      if (newState !== self.iceConnectionState) {
	        self.iceConnectionState = newState;
	        var event = new Event('iceconnectionstatechange');
	        this.dispatchEvent(event);
	        if (this.oniceconnectionstatechange !== null) {
	          this.oniceconnectionstatechange(event);
	        }
	      }
	    };
	
	    window.RTCPeerConnection.prototype.createOffer = function() {
	      var self = this;
	      if (this._pendingOffer) {
	        throw new Error('createOffer called while there is a pending offer.');
	      }
	      var offerOptions;
	      if (arguments.length === 1 && typeof arguments[0] !== 'function') {
	        offerOptions = arguments[0];
	      } else if (arguments.length === 3) {
	        offerOptions = arguments[2];
	      }
	
	      var tracks = [];
	      var numAudioTracks = 0;
	      var numVideoTracks = 0;
	      // Default to sendrecv.
	      if (this.localStreams.length) {
	        numAudioTracks = this.localStreams[0].getAudioTracks().length;
	        numVideoTracks = this.localStreams[0].getVideoTracks().length;
	      }
	      // Determine number of audio and video tracks we need to send/recv.
	      if (offerOptions) {
	        // Reject Chrome legacy constraints.
	        if (offerOptions.mandatory || offerOptions.optional) {
	          throw new TypeError(
	              'Legacy mandatory/optional constraints not supported.');
	        }
	        if (offerOptions.offerToReceiveAudio !== undefined) {
	          numAudioTracks = offerOptions.offerToReceiveAudio;
	        }
	        if (offerOptions.offerToReceiveVideo !== undefined) {
	          numVideoTracks = offerOptions.offerToReceiveVideo;
	        }
	      }
	      if (this.localStreams.length) {
	        // Push local streams.
	        this.localStreams[0].getTracks().forEach(function(track) {
	          tracks.push({
	            kind: track.kind,
	            track: track,
	            wantReceive: track.kind === 'audio' ?
	                numAudioTracks > 0 : numVideoTracks > 0
	          });
	          if (track.kind === 'audio') {
	            numAudioTracks--;
	          } else if (track.kind === 'video') {
	            numVideoTracks--;
	          }
	        });
	      }
	      // Create M-lines for recvonly streams.
	      while (numAudioTracks > 0 || numVideoTracks > 0) {
	        if (numAudioTracks > 0) {
	          tracks.push({
	            kind: 'audio',
	            wantReceive: true
	          });
	          numAudioTracks--;
	        }
	        if (numVideoTracks > 0) {
	          tracks.push({
	            kind: 'video',
	            wantReceive: true
	          });
	          numVideoTracks--;
	        }
	      }
	
	      var sdp = SDPUtils.writeSessionBoilerplate();
	      var transceivers = [];
	      tracks.forEach(function(mline, sdpMLineIndex) {
	        // For each track, create an ice gatherer, ice transport,
	        // dtls transport, potentially rtpsender and rtpreceiver.
	        var track = mline.track;
	        var kind = mline.kind;
	        var mid = SDPUtils.generateIdentifier();
	
	        var transports = self.usingBundle && sdpMLineIndex > 0 ? {
	          iceGatherer: transceivers[0].iceGatherer,
	          iceTransport: transceivers[0].iceTransport,
	          dtlsTransport: transceivers[0].dtlsTransport
	        } : self._createIceAndDtlsTransports(mid, sdpMLineIndex);
	
	        var localCapabilities = RTCRtpSender.getCapabilities(kind);
	        var rtpSender;
	        var rtpReceiver;
	
	        // generate an ssrc now, to be used later in rtpSender.send
	        var sendEncodingParameters = [{
	          ssrc: (2 * sdpMLineIndex + 1) * 1001
	        }];
	        if (track) {
	          rtpSender = new RTCRtpSender(track, transports.dtlsTransport);
	        }
	
	        if (mline.wantReceive) {
	          rtpReceiver = new RTCRtpReceiver(transports.dtlsTransport, kind);
	        }
	
	        transceivers[sdpMLineIndex] = {
	          iceGatherer: transports.iceGatherer,
	          iceTransport: transports.iceTransport,
	          dtlsTransport: transports.dtlsTransport,
	          localCapabilities: localCapabilities,
	          remoteCapabilities: null,
	          rtpSender: rtpSender,
	          rtpReceiver: rtpReceiver,
	          kind: kind,
	          mid: mid,
	          sendEncodingParameters: sendEncodingParameters,
	          recvEncodingParameters: null
	        };
	      });
	      if (this.usingBundle) {
	        sdp += 'a=group:BUNDLE ' + transceivers.map(function(t) {
	          return t.mid;
	        }).join(' ') + '\r\n';
	      }
	      tracks.forEach(function(mline, sdpMLineIndex) {
	        var transceiver = transceivers[sdpMLineIndex];
	        sdp += SDPUtils.writeMediaSection(transceiver,
	            transceiver.localCapabilities, 'offer', self.localStreams[0]);
	      });
	
	      this._pendingOffer = transceivers;
	      var desc = new RTCSessionDescription({
	        type: 'offer',
	        sdp: sdp
	      });
	      if (arguments.length && typeof arguments[0] === 'function') {
	        window.setTimeout(arguments[0], 0, desc);
	      }
	      return Promise.resolve(desc);
	    };
	
	    window.RTCPeerConnection.prototype.createAnswer = function() {
	      var self = this;
	
	      var sdp = SDPUtils.writeSessionBoilerplate();
	      if (this.usingBundle) {
	        sdp += 'a=group:BUNDLE ' + this.transceivers.map(function(t) {
	          return t.mid;
	        }).join(' ') + '\r\n';
	      }
	      this.transceivers.forEach(function(transceiver) {
	        // Calculate intersection of capabilities.
	        var commonCapabilities = self._getCommonCapabilities(
	            transceiver.localCapabilities,
	            transceiver.remoteCapabilities);
	
	        sdp += SDPUtils.writeMediaSection(transceiver, commonCapabilities,
	            'answer', self.localStreams[0]);
	      });
	
	      var desc = new RTCSessionDescription({
	        type: 'answer',
	        sdp: sdp
	      });
	      if (arguments.length && typeof arguments[0] === 'function') {
	        window.setTimeout(arguments[0], 0, desc);
	      }
	      return Promise.resolve(desc);
	    };
	
	    window.RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
	      if (candidate === null) {
	        this.transceivers.forEach(function(transceiver) {
	          transceiver.iceTransport.addRemoteCandidate({});
	        });
	      } else {
	        var mLineIndex = candidate.sdpMLineIndex;
	        if (candidate.sdpMid) {
	          for (var i = 0; i < this.transceivers.length; i++) {
	            if (this.transceivers[i].mid === candidate.sdpMid) {
	              mLineIndex = i;
	              break;
	            }
	          }
	        }
	        var transceiver = this.transceivers[mLineIndex];
	        if (transceiver) {
	          var cand = Object.keys(candidate.candidate).length > 0 ?
	              SDPUtils.parseCandidate(candidate.candidate) : {};
	          // Ignore Chrome's invalid candidates since Edge does not like them.
	          if (cand.protocol === 'tcp' && cand.port === 0) {
	            return;
	          }
	          // Ignore RTCP candidates, we assume RTCP-MUX.
	          if (cand.component !== '1') {
	            return;
	          }
	          // A dirty hack to make samples work.
	          if (cand.type === 'endOfCandidates') {
	            cand = {};
	          }
	          transceiver.iceTransport.addRemoteCandidate(cand);
	
	          // update the remoteDescription.
	          var sections = SDPUtils.splitSections(this.remoteDescription.sdp);
	          sections[mLineIndex + 1] += (cand.type ? candidate.candidate.trim()
	              : 'a=end-of-candidates') + '\r\n';
	          this.remoteDescription.sdp = sections.join('');
	        }
	      }
	      if (arguments.length > 1 && typeof arguments[1] === 'function') {
	        window.setTimeout(arguments[1], 0);
	      }
	      return Promise.resolve();
	    };
	
	    window.RTCPeerConnection.prototype.getStats = function() {
	      var promises = [];
	      this.transceivers.forEach(function(transceiver) {
	        ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
	            'dtlsTransport'].forEach(function(method) {
	              if (transceiver[method]) {
	                promises.push(transceiver[method].getStats());
	              }
	            });
	      });
	      var cb = arguments.length > 1 && typeof arguments[1] === 'function' &&
	          arguments[1];
	      return new Promise(function(resolve) {
	        // shim getStats with maplike support
	        var results = new Map();
	        Promise.all(promises).then(function(res) {
	          res.forEach(function(result) {
	            Object.keys(result).forEach(function(id) {
	              results.set(id, result[id]);
	              results[id] = result[id];
	            });
	          });
	          if (cb) {
	            window.setTimeout(cb, 0, results);
	          }
	          resolve(results);
	        });
	      });
	    };
	  },
	
	  // Attach a media stream to an element.
	  attachMediaStream: function(element, stream) {
	    logging('DEPRECATED, attachMediaStream will soon be removed.');
	    element.srcObject = stream;
	  },
	
	  reattachMediaStream: function(to, from) {
	    logging('DEPRECATED, reattachMediaStream will soon be removed.');
	    to.srcObject = from.srcObject;
	  }
	};
	
	// Expose public methods.
	module.exports = {
	  shimPeerConnection: edgeShim.shimPeerConnection,
	  shimGetUserMedia: __webpack_require__(14),
	  attachMediaStream: edgeShim.attachMediaStream,
	  reattachMediaStream: edgeShim.reattachMediaStream
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	 /* eslint-env node */
	'use strict';
	
	// SDP helpers.
	var SDPUtils = {};
	
	// Generate an alphanumeric identifier for cname or mids.
	// TODO: use UUIDs instead? https://gist.github.com/jed/982883
	SDPUtils.generateIdentifier = function() {
	  return Math.random().toString(36).substr(2, 10);
	};
	
	// The RTCP CNAME used by all peerconnections from the same JS.
	SDPUtils.localCName = SDPUtils.generateIdentifier();
	
	// Splits SDP into lines, dealing with both CRLF and LF.
	SDPUtils.splitLines = function(blob) {
	  return blob.trim().split('\n').map(function(line) {
	    return line.trim();
	  });
	};
	// Splits SDP into sessionpart and mediasections. Ensures CRLF.
	SDPUtils.splitSections = function(blob) {
	  var parts = blob.split('\nm=');
	  return parts.map(function(part, index) {
	    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
	  });
	};
	
	// Returns lines that start with a certain prefix.
	SDPUtils.matchPrefix = function(blob, prefix) {
	  return SDPUtils.splitLines(blob).filter(function(line) {
	    return line.indexOf(prefix) === 0;
	  });
	};
	
	// Parses an ICE candidate line. Sample input:
	// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
	// rport 55996"
	SDPUtils.parseCandidate = function(line) {
	  var parts;
	  // Parse both variants.
	  if (line.indexOf('a=candidate:') === 0) {
	    parts = line.substring(12).split(' ');
	  } else {
	    parts = line.substring(10).split(' ');
	  }
	
	  var candidate = {
	    foundation: parts[0],
	    component: parts[1],
	    protocol: parts[2].toLowerCase(),
	    priority: parseInt(parts[3], 10),
	    ip: parts[4],
	    port: parseInt(parts[5], 10),
	    // skip parts[6] == 'typ'
	    type: parts[7]
	  };
	
	  for (var i = 8; i < parts.length; i += 2) {
	    switch (parts[i]) {
	      case 'raddr':
	        candidate.relatedAddress = parts[i + 1];
	        break;
	      case 'rport':
	        candidate.relatedPort = parseInt(parts[i + 1], 10);
	        break;
	      case 'tcptype':
	        candidate.tcpType = parts[i + 1];
	        break;
	      default: // Unknown extensions are silently ignored.
	        break;
	    }
	  }
	  return candidate;
	};
	
	// Translates a candidate object into SDP candidate attribute.
	SDPUtils.writeCandidate = function(candidate) {
	  var sdp = [];
	  sdp.push(candidate.foundation);
	  sdp.push(candidate.component);
	  sdp.push(candidate.protocol.toUpperCase());
	  sdp.push(candidate.priority);
	  sdp.push(candidate.ip);
	  sdp.push(candidate.port);
	
	  var type = candidate.type;
	  sdp.push('typ');
	  sdp.push(type);
	  if (type !== 'host' && candidate.relatedAddress &&
	      candidate.relatedPort) {
	    sdp.push('raddr');
	    sdp.push(candidate.relatedAddress); // was: relAddr
	    sdp.push('rport');
	    sdp.push(candidate.relatedPort); // was: relPort
	  }
	  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
	    sdp.push('tcptype');
	    sdp.push(candidate.tcpType);
	  }
	  return 'candidate:' + sdp.join(' ');
	};
	
	// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
	// a=rtpmap:111 opus/48000/2
	SDPUtils.parseRtpMap = function(line) {
	  var parts = line.substr(9).split(' ');
	  var parsed = {
	    payloadType: parseInt(parts.shift(), 10) // was: id
	  };
	
	  parts = parts[0].split('/');
	
	  parsed.name = parts[0];
	  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
	  // was: channels
	  parsed.numChannels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
	  return parsed;
	};
	
	// Generate an a=rtpmap line from RTCRtpCodecCapability or
	// RTCRtpCodecParameters.
	SDPUtils.writeRtpMap = function(codec) {
	  var pt = codec.payloadType;
	  if (codec.preferredPayloadType !== undefined) {
	    pt = codec.preferredPayloadType;
	  }
	  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
	      (codec.numChannels !== 1 ? '/' + codec.numChannels : '') + '\r\n';
	};
	
	// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
	// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
	SDPUtils.parseExtmap = function(line) {
	  var parts = line.substr(9).split(' ');
	  return {
	    id: parseInt(parts[0], 10),
	    uri: parts[1]
	  };
	};
	
	// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
	// RTCRtpHeaderExtension.
	SDPUtils.writeExtmap = function(headerExtension) {
	  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
	       ' ' + headerExtension.uri + '\r\n';
	};
	
	// Parses an ftmp line, returns dictionary. Sample input:
	// a=fmtp:96 vbr=on;cng=on
	// Also deals with vbr=on; cng=on
	SDPUtils.parseFmtp = function(line) {
	  var parsed = {};
	  var kv;
	  var parts = line.substr(line.indexOf(' ') + 1).split(';');
	  for (var j = 0; j < parts.length; j++) {
	    kv = parts[j].trim().split('=');
	    parsed[kv[0].trim()] = kv[1];
	  }
	  return parsed;
	};
	
	// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
	SDPUtils.writeFmtp = function(codec) {
	  var line = '';
	  var pt = codec.payloadType;
	  if (codec.preferredPayloadType !== undefined) {
	    pt = codec.preferredPayloadType;
	  }
	  if (codec.parameters && Object.keys(codec.parameters).length) {
	    var params = [];
	    Object.keys(codec.parameters).forEach(function(param) {
	      params.push(param + '=' + codec.parameters[param]);
	    });
	    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
	  }
	  return line;
	};
	
	// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
	// a=rtcp-fb:98 nack rpsi
	SDPUtils.parseRtcpFb = function(line) {
	  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
	  return {
	    type: parts.shift(),
	    parameter: parts.join(' ')
	  };
	};
	// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
	SDPUtils.writeRtcpFb = function(codec) {
	  var lines = '';
	  var pt = codec.payloadType;
	  if (codec.preferredPayloadType !== undefined) {
	    pt = codec.preferredPayloadType;
	  }
	  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
	    // FIXME: special handling for trr-int?
	    codec.rtcpFeedback.forEach(function(fb) {
	      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
	      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
	          '\r\n';
	    });
	  }
	  return lines;
	};
	
	// Parses an RFC 5576 ssrc media attribute. Sample input:
	// a=ssrc:3735928559 cname:something
	SDPUtils.parseSsrcMedia = function(line) {
	  var sp = line.indexOf(' ');
	  var parts = {
	    ssrc: parseInt(line.substr(7, sp - 7), 10)
	  };
	  var colon = line.indexOf(':', sp);
	  if (colon > -1) {
	    parts.attribute = line.substr(sp + 1, colon - sp - 1);
	    parts.value = line.substr(colon + 1);
	  } else {
	    parts.attribute = line.substr(sp + 1);
	  }
	  return parts;
	};
	
	// Extracts DTLS parameters from SDP media section or sessionpart.
	// FIXME: for consistency with other functions this should only
	//   get the fingerprint line as input. See also getIceParameters.
	SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
	  var lines = SDPUtils.splitLines(mediaSection);
	  // Search in session part, too.
	  lines = lines.concat(SDPUtils.splitLines(sessionpart));
	  var fpLine = lines.filter(function(line) {
	    return line.indexOf('a=fingerprint:') === 0;
	  })[0].substr(14);
	  // Note: a=setup line is ignored since we use the 'auto' role.
	  var dtlsParameters = {
	    role: 'auto',
	    fingerprints: [{
	      algorithm: fpLine.split(' ')[0],
	      value: fpLine.split(' ')[1]
	    }]
	  };
	  return dtlsParameters;
	};
	
	// Serializes DTLS parameters to SDP.
	SDPUtils.writeDtlsParameters = function(params, setupType) {
	  var sdp = 'a=setup:' + setupType + '\r\n';
	  params.fingerprints.forEach(function(fp) {
	    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
	  });
	  return sdp;
	};
	// Parses ICE information from SDP media section or sessionpart.
	// FIXME: for consistency with other functions this should only
	//   get the ice-ufrag and ice-pwd lines as input.
	SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
	  var lines = SDPUtils.splitLines(mediaSection);
	  // Search in session part, too.
	  lines = lines.concat(SDPUtils.splitLines(sessionpart));
	  var iceParameters = {
	    usernameFragment: lines.filter(function(line) {
	      return line.indexOf('a=ice-ufrag:') === 0;
	    })[0].substr(12),
	    password: lines.filter(function(line) {
	      return line.indexOf('a=ice-pwd:') === 0;
	    })[0].substr(10)
	  };
	  return iceParameters;
	};
	
	// Serializes ICE parameters to SDP.
	SDPUtils.writeIceParameters = function(params) {
	  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
	      'a=ice-pwd:' + params.password + '\r\n';
	};
	
	// Parses the SDP media section and returns RTCRtpParameters.
	SDPUtils.parseRtpParameters = function(mediaSection) {
	  var description = {
	    codecs: [],
	    headerExtensions: [],
	    fecMechanisms: [],
	    rtcp: []
	  };
	  var lines = SDPUtils.splitLines(mediaSection);
	  var mline = lines[0].split(' ');
	  for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
	    var pt = mline[i];
	    var rtpmapline = SDPUtils.matchPrefix(
	        mediaSection, 'a=rtpmap:' + pt + ' ')[0];
	    if (rtpmapline) {
	      var codec = SDPUtils.parseRtpMap(rtpmapline);
	      var fmtps = SDPUtils.matchPrefix(
	          mediaSection, 'a=fmtp:' + pt + ' ');
	      // Only the first a=fmtp:<pt> is considered.
	      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
	      codec.rtcpFeedback = SDPUtils.matchPrefix(
	          mediaSection, 'a=rtcp-fb:' + pt + ' ')
	        .map(SDPUtils.parseRtcpFb);
	      description.codecs.push(codec);
	      // parse FEC mechanisms from rtpmap lines.
	      switch (codec.name.toUpperCase()) {
	        case 'RED':
	        case 'ULPFEC':
	          description.fecMechanisms.push(codec.name.toUpperCase());
	          break;
	        default: // only RED and ULPFEC are recognized as FEC mechanisms.
	          break;
	      }
	    }
	  }
	  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
	    description.headerExtensions.push(SDPUtils.parseExtmap(line));
	  });
	  // FIXME: parse rtcp.
	  return description;
	};
	
	// Generates parts of the SDP media section describing the capabilities /
	// parameters.
	SDPUtils.writeRtpDescription = function(kind, caps) {
	  var sdp = '';
	
	  // Build the mline.
	  sdp += 'm=' + kind + ' ';
	  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
	  sdp += ' UDP/TLS/RTP/SAVPF ';
	  sdp += caps.codecs.map(function(codec) {
	    if (codec.preferredPayloadType !== undefined) {
	      return codec.preferredPayloadType;
	    }
	    return codec.payloadType;
	  }).join(' ') + '\r\n';
	
	  sdp += 'c=IN IP4 0.0.0.0\r\n';
	  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';
	
	  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
	  caps.codecs.forEach(function(codec) {
	    sdp += SDPUtils.writeRtpMap(codec);
	    sdp += SDPUtils.writeFmtp(codec);
	    sdp += SDPUtils.writeRtcpFb(codec);
	  });
	  sdp += 'a=rtcp-mux\r\n';
	
	  caps.headerExtensions.forEach(function(extension) {
	    sdp += SDPUtils.writeExtmap(extension);
	  });
	  // FIXME: write fecMechanisms.
	  return sdp;
	};
	
	// Parses the SDP media section and returns an array of
	// RTCRtpEncodingParameters.
	SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
	  var encodingParameters = [];
	  var description = SDPUtils.parseRtpParameters(mediaSection);
	  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
	  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;
	
	  // filter a=ssrc:... cname:, ignore PlanB-msid
	  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
	  .map(function(line) {
	    return SDPUtils.parseSsrcMedia(line);
	  })
	  .filter(function(parts) {
	    return parts.attribute === 'cname';
	  });
	  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
	  var secondarySsrc;
	
	  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
	  .map(function(line) {
	    var parts = line.split(' ');
	    parts.shift();
	    return parts.map(function(part) {
	      return parseInt(part, 10);
	    });
	  });
	  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
	    secondarySsrc = flows[0][1];
	  }
	
	  description.codecs.forEach(function(codec) {
	    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
	      var encParam = {
	        ssrc: primarySsrc,
	        codecPayloadType: parseInt(codec.parameters.apt, 10),
	        rtx: {
	          payloadType: codec.payloadType,
	          ssrc: secondarySsrc
	        }
	      };
	      encodingParameters.push(encParam);
	      if (hasRed) {
	        encParam = JSON.parse(JSON.stringify(encParam));
	        encParam.fec = {
	          ssrc: secondarySsrc,
	          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
	        };
	        encodingParameters.push(encParam);
	      }
	    }
	  });
	  if (encodingParameters.length === 0 && primarySsrc) {
	    encodingParameters.push({
	      ssrc: primarySsrc
	    });
	  }
	
	  // we support both b=AS and b=TIAS but interpret AS as TIAS.
	  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
	  if (bandwidth.length) {
	    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
	      bandwidth = parseInt(bandwidth[0].substr(7), 10);
	    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
	      bandwidth = parseInt(bandwidth[0].substr(5), 10);
	    }
	    encodingParameters.forEach(function(params) {
	      params.maxBitrate = bandwidth;
	    });
	  }
	  return encodingParameters;
	};
	
	SDPUtils.writeSessionBoilerplate = function() {
	  // FIXME: sess-id should be an NTP timestamp.
	  return 'v=0\r\n' +
	      'o=thisisadapterortc 8169639915646943137 2 IN IP4 127.0.0.1\r\n' +
	      's=-\r\n' +
	      't=0 0\r\n';
	};
	
	SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
	  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);
	
	  // Map ICE parameters (ufrag, pwd) to SDP.
	  sdp += SDPUtils.writeIceParameters(
	      transceiver.iceGatherer.getLocalParameters());
	
	  // Map DTLS parameters to SDP.
	  sdp += SDPUtils.writeDtlsParameters(
	      transceiver.dtlsTransport.getLocalParameters(),
	      type === 'offer' ? 'actpass' : 'active');
	
	  sdp += 'a=mid:' + transceiver.mid + '\r\n';
	
	  if (transceiver.rtpSender && transceiver.rtpReceiver) {
	    sdp += 'a=sendrecv\r\n';
	  } else if (transceiver.rtpSender) {
	    sdp += 'a=sendonly\r\n';
	  } else if (transceiver.rtpReceiver) {
	    sdp += 'a=recvonly\r\n';
	  } else {
	    sdp += 'a=inactive\r\n';
	  }
	
	  // FIXME: for RTX there might be multiple SSRCs. Not implemented in Edge yet.
	  if (transceiver.rtpSender) {
	    var msid = 'msid:' + stream.id + ' ' +
	        transceiver.rtpSender.track.id + '\r\n';
	    sdp += 'a=' + msid;
	    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
	        ' ' + msid;
	  }
	  // FIXME: this should be written by writeRtpDescription.
	  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
	      ' cname:' + SDPUtils.localCName + '\r\n';
	  return sdp;
	};
	
	// Gets the direction from the mediaSection or the sessionpart.
	SDPUtils.getDirection = function(mediaSection, sessionpart) {
	  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
	  var lines = SDPUtils.splitLines(mediaSection);
	  for (var i = 0; i < lines.length; i++) {
	    switch (lines[i]) {
	      case 'a=sendrecv':
	      case 'a=sendonly':
	      case 'a=recvonly':
	      case 'a=inactive':
	        return lines[i].substr(2);
	      default:
	        // FIXME: What should happen here?
	    }
	  }
	  if (sessionpart) {
	    return SDPUtils.getDirection(sessionpart);
	  }
	  return 'sendrecv';
	};
	
	// Expose public methods.
	module.exports = SDPUtils;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/*
	 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
	 *
	 *  Use of this source code is governed by a BSD-style license
	 *  that can be found in the LICENSE file in the root of the source
	 *  tree.
	 */
	 /* eslint-env node */
	'use strict';
	
	// Expose public methods.
	module.exports = function() {
	  var shimError_ = function(e) {
	    return {
	      name: {PermissionDeniedError: 'NotAllowedError'}[e.name] || e.name,
	      message: e.message,
	      constraint: e.constraint,
	      toString: function() {
	        return this.name;
	      }
	    };
	  };
	
	  // getUserMedia error shim.
	  var origGetUserMedia = navigator.mediaDevices.getUserMedia.
	      bind(navigator.mediaDevices);
	  navigator.mediaDevices.getUserMedia = function(c) {
	    return origGetUserMedia(c).catch(function(e) {
	      return Promise.reject(shimError_(e));
	    });
	  };
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
	 *
	 *  Use of this source code is governed by a BSD-style license
	 *  that can be found in the LICENSE file in the root of the source
	 *  tree.
	 */
	 /* eslint-env node */
	'use strict';
	
	var logging = __webpack_require__(9).log;
	var browserDetails = __webpack_require__(9).browserDetails;
	
	var firefoxShim = {
	  shimOnTrack: function() {
	    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
	        window.RTCPeerConnection.prototype)) {
	      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
	        get: function() {
	          return this._ontrack;
	        },
	        set: function(f) {
	          if (this._ontrack) {
	            this.removeEventListener('track', this._ontrack);
	            this.removeEventListener('addstream', this._ontrackpoly);
	          }
	          this.addEventListener('track', this._ontrack = f);
	          this.addEventListener('addstream', this._ontrackpoly = function(e) {
	            e.stream.getTracks().forEach(function(track) {
	              var event = new Event('track');
	              event.track = track;
	              event.receiver = {track: track};
	              event.streams = [e.stream];
	              this.dispatchEvent(event);
	            }.bind(this));
	          }.bind(this));
	        }
	      });
	    }
	  },
	
	  shimSourceObject: function() {
	    // Firefox has supported mozSrcObject since FF22, unprefixed in 42.
	    if (typeof window === 'object') {
	      if (window.HTMLMediaElement &&
	        !('srcObject' in window.HTMLMediaElement.prototype)) {
	        // Shim the srcObject property, once, when HTMLMediaElement is found.
	        Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
	          get: function() {
	            return this.mozSrcObject;
	          },
	          set: function(stream) {
	            this.mozSrcObject = stream;
	          }
	        });
	      }
	    }
	  },
	
	  shimPeerConnection: function() {
	    if (typeof window !== 'object' || !(window.RTCPeerConnection ||
	        window.mozRTCPeerConnection)) {
	      return; // probably media.peerconnection.enabled=false in about:config
	    }
	    // The RTCPeerConnection object.
	    if (!window.RTCPeerConnection) {
	      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
	        if (browserDetails.version < 38) {
	          // .urls is not supported in FF < 38.
	          // create RTCIceServers with a single url.
	          if (pcConfig && pcConfig.iceServers) {
	            var newIceServers = [];
	            for (var i = 0; i < pcConfig.iceServers.length; i++) {
	              var server = pcConfig.iceServers[i];
	              if (server.hasOwnProperty('urls')) {
	                for (var j = 0; j < server.urls.length; j++) {
	                  var newServer = {
	                    url: server.urls[j]
	                  };
	                  if (server.urls[j].indexOf('turn') === 0) {
	                    newServer.username = server.username;
	                    newServer.credential = server.credential;
	                  }
	                  newIceServers.push(newServer);
	                }
	              } else {
	                newIceServers.push(pcConfig.iceServers[i]);
	              }
	            }
	            pcConfig.iceServers = newIceServers;
	          }
	        }
	        return new mozRTCPeerConnection(pcConfig, pcConstraints);
	      };
	      window.RTCPeerConnection.prototype = mozRTCPeerConnection.prototype;
	
	      // wrap static methods. Currently just generateCertificate.
	      if (mozRTCPeerConnection.generateCertificate) {
	        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
	          get: function() {
	            return mozRTCPeerConnection.generateCertificate;
	          }
	        });
	      }
	
	      window.RTCSessionDescription = mozRTCSessionDescription;
	      window.RTCIceCandidate = mozRTCIceCandidate;
	    }
	
	    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
	    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
	        .forEach(function(method) {
	          var nativeMethod = RTCPeerConnection.prototype[method];
	          RTCPeerConnection.prototype[method] = function() {
	            arguments[0] = new ((method === 'addIceCandidate') ?
	                RTCIceCandidate : RTCSessionDescription)(arguments[0]);
	            return nativeMethod.apply(this, arguments);
	          };
	        });
	
	    // support for addIceCandidate(null)
	    var nativeAddIceCandidate =
	        RTCPeerConnection.prototype.addIceCandidate;
	    RTCPeerConnection.prototype.addIceCandidate = function() {
	      return arguments[0] === null ? Promise.resolve()
	          : nativeAddIceCandidate.apply(this, arguments);
	    };
	
	    // shim getStats with maplike support
	    var makeMapStats = function(stats) {
	      var map = new Map();
	      Object.keys(stats).forEach(function(key) {
	        map.set(key, stats[key]);
	        map[key] = stats[key];
	      });
	      return map;
	    };
	
	    var nativeGetStats = RTCPeerConnection.prototype.getStats;
	    RTCPeerConnection.prototype.getStats = function(selector, onSucc, onErr) {
	      return nativeGetStats.apply(this, [selector || null])
	        .then(function(stats) {
	          return makeMapStats(stats);
	        })
	        .then(onSucc, onErr);
	    };
	  },
	
	  // Attach a media stream to an element.
	  attachMediaStream: function(element, stream) {
	    logging('DEPRECATED, attachMediaStream will soon be removed.');
	    element.srcObject = stream;
	  },
	
	  reattachMediaStream: function(to, from) {
	    logging('DEPRECATED, reattachMediaStream will soon be removed.');
	    to.srcObject = from.srcObject;
	  }
	};
	
	// Expose public methods.
	module.exports = {
	  shimOnTrack: firefoxShim.shimOnTrack,
	  shimSourceObject: firefoxShim.shimSourceObject,
	  shimPeerConnection: firefoxShim.shimPeerConnection,
	  shimGetUserMedia: __webpack_require__(16),
	  attachMediaStream: firefoxShim.attachMediaStream,
	  reattachMediaStream: firefoxShim.reattachMediaStream
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
	 *
	 *  Use of this source code is governed by a BSD-style license
	 *  that can be found in the LICENSE file in the root of the source
	 *  tree.
	 */
	 /* eslint-env node */
	'use strict';
	
	var logging = __webpack_require__(9).log;
	var browserDetails = __webpack_require__(9).browserDetails;
	
	// Expose public methods.
	module.exports = function() {
	  var shimError_ = function(e) {
	    return {
	      name: {
	        SecurityError: 'NotAllowedError',
	        PermissionDeniedError: 'NotAllowedError'
	      }[e.name] || e.name,
	      message: {
	        'The operation is insecure.': 'The request is not allowed by the ' +
	        'user agent or the platform in the current context.'
	      }[e.message] || e.message,
	      constraint: e.constraint,
	      toString: function() {
	        return this.name + (this.message && ': ') + this.message;
	      }
	    };
	  };
	
	  // getUserMedia constraints shim.
	  var getUserMedia_ = function(constraints, onSuccess, onError) {
	    var constraintsToFF37_ = function(c) {
	      if (typeof c !== 'object' || c.require) {
	        return c;
	      }
	      var require = [];
	      Object.keys(c).forEach(function(key) {
	        if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
	          return;
	        }
	        var r = c[key] = (typeof c[key] === 'object') ?
	            c[key] : {ideal: c[key]};
	        if (r.min !== undefined ||
	            r.max !== undefined || r.exact !== undefined) {
	          require.push(key);
	        }
	        if (r.exact !== undefined) {
	          if (typeof r.exact === 'number') {
	            r. min = r.max = r.exact;
	          } else {
	            c[key] = r.exact;
	          }
	          delete r.exact;
	        }
	        if (r.ideal !== undefined) {
	          c.advanced = c.advanced || [];
	          var oc = {};
	          if (typeof r.ideal === 'number') {
	            oc[key] = {min: r.ideal, max: r.ideal};
	          } else {
	            oc[key] = r.ideal;
	          }
	          c.advanced.push(oc);
	          delete r.ideal;
	          if (!Object.keys(r).length) {
	            delete c[key];
	          }
	        }
	      });
	      if (require.length) {
	        c.require = require;
	      }
	      return c;
	    };
	    constraints = JSON.parse(JSON.stringify(constraints));
	    if (browserDetails.version < 38) {
	      logging('spec: ' + JSON.stringify(constraints));
	      if (constraints.audio) {
	        constraints.audio = constraintsToFF37_(constraints.audio);
	      }
	      if (constraints.video) {
	        constraints.video = constraintsToFF37_(constraints.video);
	      }
	      logging('ff37: ' + JSON.stringify(constraints));
	    }
	    return navigator.mozGetUserMedia(constraints, onSuccess, function(e) {
	      onError(shimError_(e));
	    });
	  };
	
	  // Returns the result of getUserMedia as a Promise.
	  var getUserMediaPromise_ = function(constraints) {
	    return new Promise(function(resolve, reject) {
	      getUserMedia_(constraints, resolve, reject);
	    });
	  };
	
	  // Shim for mediaDevices on older versions.
	  if (!navigator.mediaDevices) {
	    navigator.mediaDevices = {getUserMedia: getUserMediaPromise_,
	      addEventListener: function() { },
	      removeEventListener: function() { }
	    };
	  }
	  navigator.mediaDevices.enumerateDevices =
	      navigator.mediaDevices.enumerateDevices || function() {
	        return new Promise(function(resolve) {
	          var infos = [
	            {kind: 'audioinput', deviceId: 'default', label: '', groupId: ''},
	            {kind: 'videoinput', deviceId: 'default', label: '', groupId: ''}
	          ];
	          resolve(infos);
	        });
	      };
	
	  if (browserDetails.version < 41) {
	    // Work around http://bugzil.la/1169665
	    var orgEnumerateDevices =
	        navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
	    navigator.mediaDevices.enumerateDevices = function() {
	      return orgEnumerateDevices().then(undefined, function(e) {
	        if (e.name === 'NotFoundError') {
	          return [];
	        }
	        throw e;
	      });
	    };
	  }
	  if (browserDetails.version < 49) {
	    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
	        bind(navigator.mediaDevices);
	    navigator.mediaDevices.getUserMedia = function(c) {
	      return origGetUserMedia(c).catch(function(e) {
	        return Promise.reject(shimError_(e));
	      });
	    };
	  }
	  navigator.getUserMedia = function(constraints, onSuccess, onError) {
	    if (browserDetails.version < 44) {
	      return getUserMedia_(constraints, onSuccess, onError);
	    }
	    // Replace Firefox 44+'s deprecation warning with unprefixed version.
	    console.warn('navigator.getUserMedia has been replaced by ' +
	                 'navigator.mediaDevices.getUserMedia');
	    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
	  };
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	/*
	 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
	 *
	 *  Use of this source code is governed by a BSD-style license
	 *  that can be found in the LICENSE file in the root of the source
	 *  tree.
	 */
	'use strict';
	var safariShim = {
	  // TODO: DrAlex, should be here, double check against LayoutTests
	  // shimOnTrack: function() { },
	
	  // TODO: DrAlex
	  // attachMediaStream: function(element, stream) { },
	  // reattachMediaStream: function(to, from) { },
	
	  // TODO: once the back-end for the mac port is done, add.
	  // TODO: check for webkitGTK+
	  // shimPeerConnection: function() { },
	
	  shimGetUserMedia: function() {
	    navigator.getUserMedia = navigator.webkitGetUserMedia;
	  }
	};
	
	// Expose public methods.
	module.exports = {
	  shimGetUserMedia: safariShim.shimGetUserMedia
	  // TODO
	  // shimOnTrack: safariShim.shimOnTrack,
	  // shimPeerConnection: safariShim.shimPeerConnection,
	  // attachMediaStream: safariShim.attachMediaStream,
	  // reattachMediaStream: safariShim.reattachMediaStream
	};


/***/ },
/* 18 */
/***/ function(module, exports) {

	var AudioContext = window.AudioContext || window.webkitAudioContext
	
	module.exports = WebAudioAnalyser
	
	function WebAudioAnalyser(audio, ctx, opts) {
	  if (!(this instanceof WebAudioAnalyser)) return new WebAudioAnalyser(audio, ctx, opts)
	  if (!(ctx instanceof AudioContext)) (opts = ctx), (ctx = null)
	
	  opts = opts || {}
	  this.ctx = ctx = ctx || new AudioContext
	
	  if (!(audio instanceof AudioNode)) {
	    audio = (audio instanceof Audio || audio instanceof HTMLAudioElement)
	      ? ctx.createMediaElementSource(audio)
	      : ctx.createMediaStreamSource(audio)
	  }
	
	  this.analyser = ctx.createAnalyser()
	  this.stereo   = !!opts.stereo
	  this.audible  = opts.audible !== false
	  this.wavedata = null
	  this.freqdata = null
	  this.splitter = null
	  this.merger   = null
	  this.source   = audio
	
	  if (!this.stereo) {
	    this.output = this.source
	    this.source.connect(this.analyser)
	    if (this.audible)
	      this.analyser.connect(ctx.destination)
	  } else {
	    this.analyser = [this.analyser]
	    this.analyser.push(ctx.createAnalyser())
	
	    this.splitter = ctx.createChannelSplitter(2)
	    this.merger   = ctx.createChannelMerger(2)
	    this.output   = this.merger
	
	    this.source.connect(this.splitter)
	
	    for (var i = 0; i < 2; i++) {
	      this.splitter.connect(this.analyser[i], i, 0)
	      this.analyser[i].connect(this.merger, 0, i)
	    }
	
	    if (this.audible)
	      this.merger.connect(ctx.destination)
	  }
	}
	
	WebAudioAnalyser.prototype.waveform = function(output, channel) {
	  if (!output) output = this.wavedata || (
	    this.wavedata = new Uint8Array((this.analyser[0] || this.analyser).frequencyBinCount)
	  )
	
	  var analyser = this.stereo
	    ? this.analyser[channel || 0]
	    : this.analyser
	
	  analyser.getByteTimeDomainData(output)
	
	  return output
	}
	
	WebAudioAnalyser.prototype.frequencies = function(output, channel) {
	  if (!output) output = this.freqdata || (
	    this.freqdata = new Uint8Array((this.analyser[0] || this.analyser).frequencyBinCount)
	  )
	
	  var analyser = this.stereo
	    ? this.analyser[channel || 0]
	    : this.analyser
	
	  analyser.getByteFrequencyData(output)
	
	  return output
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var resolve = __webpack_require__(20)
	var fonts = __webpack_require__(27)
	var minstache = __webpack_require__(28)
	var insert = __webpack_require__(29)
	var fs = __webpack_require__(30)
	
	var icons = {
	    black: 'https://developers.soundcloud.com/assets/logo_black.png'
	  , white: 'https://developers.soundcloud.com/assets/logo_white.png'
	}
	
	module.exports = badge
	function noop(err){ if (err) throw err }
	
	var inserted = false
	var gwfadded = false
	var template = null
	
	function badge(options, callback) {
	  if (!inserted) insert(".npm-scb-wrap {\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n\n.npm-scb-wrap a {\n  text-decoration: none;\n  color: #000;\n}\n.npm-scb-white\n.npm-scb-wrap a {\n  color: #fff;\n}\n\n.npm-scb-inner {\n  position: absolute;\n  top: -120px; left: 0;\n  padding: 8px;\n  width: 100%;\n  height: 150px;\n  z-index: 2;\n  -webkit-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n     -moz-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n      -ms-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n       -o-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n          transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n}\n.npm-scb-wrap:hover\n.npm-scb-inner {\n  top: 0;\n}\n\n.npm-scb-artwork {\n  position: absolute;\n  top: 16px; left: 16px;\n  width: 104px; height: 104px;\n  box-shadow: 0 0 8px -3px #000;\n  outline: 1px solid rgba(0,0,0,0.1);\n  z-index: 2;\n}\n.npm-scb-white\n.npm-scb-artwork {\n  outline: 1px solid rgba(255,255,255,0.1);\n  box-shadow: 0 0 10px -2px rgba(255,255,255,0.9);\n}\n\n.npm-scb-info {\n  position: absolute;\n  top: 16px;\n  left: 120px;\n  width: 300px;\n  z-index: 1;\n}\n\n.npm-scb-info > a {\n  display: block;\n}\n\n.npm-scb-now-playing {\n  font-size: 12px;\n  line-height: 12px;\n  position: absolute;\n  width: 500px;\n  z-index: 1;\n  padding: 15px 0;\n  top: 0; left: 138px;\n  opacity: 1;\n  -webkit-transition: opacity 0.25s;\n     -moz-transition: opacity 0.25s;\n      -ms-transition: opacity 0.25s;\n       -o-transition: opacity 0.25s;\n          transition: opacity 0.25s;\n}\n\n.npm-scb-wrap:hover\n.npm-scb-now-playing {\n  opacity: 0;\n}\n\n.npm-scb-white\n.npm-scb-now-playing {\n  color: #fff;\n}\n.npm-scb-now-playing > a {\n  font-weight: bold;\n}\n\n.npm-scb-info > a > p {\n  margin: 0;\n  padding-bottom: 0.25em;\n  line-height: 1.35em;\n  margin-left: 1em;\n  font-size: 1em;\n}\n\n.npm-scb-title {\n  font-weight: bold;\n}\n\n.npm-scb-icon {\n  position: absolute;\n  top: 120px;\n  padding-top: 0.75em;\n  left: 16px;\n}\n"), inserted = true
	  if (!template) template = minstache.compile("<div class=\"npm-scb-wrap\">\n  <div class=\"npm-scb-inner\">\n    <a target=\"_blank\" href=\"{{!urls.song}}\">\n      <img class=\"npm-scb-icon\" src=\"{{!icon}}\">\n      <img class=\"npm-scb-artwork\" src=\"{{!artwork}}\">\n    </a>\n    <div class=\"npm-scb-info\">\n      <a target=\"_blank\" href=\"{{!urls.song}}\">\n        <p class=\"npm-scb-title\">{{!title}}</p>\n      </a>\n      <a target=\"_blank\" href=\"{{!urls.artist}}\">\n        <p class=\"npm-scb-artist\">{{!artist}}</p>\n      </a>\n    </div>\n  </div>\n  <div class=\"npm-scb-now-playing\">\n    Now Playing:\n    <a href=\"{{!urls.song}}\">{{!title}}</a>\n    by\n    <a href=\"{{!urls.artist}}\">{{!artist}}</a>\n  </div>\n</div>")
	
	  if (!gwfadded && options.getFonts) {
	    fonts.add({ 'Open Sans': [300, 600] })
	    gwfadded = true
	  }
	
	  options = options || {}
	  callback = callback || noop
	
	  var div   = options.el || document.createElement('div')
	  var icon  = !('dark' in options) || options.dark ? 'black' : 'white'
	  var id    = options.client_id
	  var song  = options.song
	
	  resolve(id, song, function(err, json) {
	    if (err) return callback(err)
	    if (json.kind !== 'track') throw new Error(
	      'soundcloud-badge only supports individual tracks at the moment'
	    )
	
	    div.classList[
	      icon === 'black' ? 'remove' : 'add'
	    ]('npm-scb-white')
	
	    div.innerHTML = template({
	        artwork: json.artwork_url || json.user.avatar_url
	      , artist: json.user.username
	      , title: json.title
	      , icon: icons[icon]
	      , urls: {
	          song: json.permalink_url
	        , artist: json.user.permalink_url
	      }
	    })
	
	    document.body.appendChild(div)
	
	    callback(null, json.stream_url + '?client_id=' + id, json, div)
	  })
	
	  return div
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var qs  = __webpack_require__(21)
	var xhr = __webpack_require__(24)
	
	module.exports = resolve
	
	function resolve(id, goal, callback) {
	  var uri = 'https://api.soundcloud.com/resolve.json?' + qs.stringify({
	      url: goal
	    , client_id: id
	  })
	
	  xhr({
	      uri: uri
	    , method: 'GET'
	  }, function(err, res, body) {
	    if (err) return callback(err)
	    try {
	      body = JSON.parse(body)
	    } catch(e) {
	      return callback(e)
	    }
	    if (body.errors) return callback(new Error(
	      body.errors[0].error_message
	    ))
	
	    var stream_url = body.kind === 'track'
	      && body.stream_url + '?client_id=' + id
	
	    return callback(null, body, stream_url)
	  })
	}


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(22);
	exports.encode = exports.stringify = __webpack_require__(23);


/***/ },
/* 22 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	
	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;
	
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	
	  return obj;
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;
	
	    case 'boolean':
	      return v ? 'true' : 'false';
	
	    case 'number':
	      return isFinite(v) ? v : '';
	
	    default:
	      return '';
	  }
	};
	
	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	
	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var window = __webpack_require__(25)
	var once = __webpack_require__(26)
	
	var messages = {
	    "0": "Internal XMLHttpRequest Error",
	    "4": "4xx Client Error",
	    "5": "5xx Server Error"
	}
	
	var XHR = window.XMLHttpRequest || noop
	var XDR = "withCredentials" in (new XHR()) ?
	        window.XMLHttpRequest : window.XDomainRequest
	
	module.exports = createXHR
	
	function createXHR(options, callback) {
	    if (typeof options === "string") {
	        options = { uri: options }
	    }
	
	    options = options || {}
	    callback = once(callback)
	
	    var xhr
	
	    if (options.cors) {
	        xhr = new XDR()
	    } else {
	        xhr = new XHR()
	    }
	
	    var uri = xhr.url = options.uri
	    var method = xhr.method = options.method || "GET"
	    var body = options.body || options.data
	    var headers = xhr.headers = options.headers || {}
	    var isJson = false
	
	    if ("json" in options) {
	        isJson = true
	        headers["Content-Type"] = "application/json"
	        body = JSON.stringify(options.json)
	    }
	
	    xhr.onreadystatechange = readystatechange
	    xhr.onload = load
	    xhr.onerror = error
	    // IE9 must have onprogress be set to a unique function.
	    xhr.onprogress = function () {
	        // IE must die
	    }
	    // hate IE
	    xhr.ontimeout = noop
	    xhr.open(method, uri)
	    if (options.cors) {
	        xhr.withCredentials = true
	    }
	    xhr.timeout = "timeout" in options ? options.timeout : 5000
	
	    if ( xhr.setRequestHeader) {
	        Object.keys(headers).forEach(function (key) {
	            xhr.setRequestHeader(key, headers[key])
	        })
	    }
	
	    xhr.send(body)
	
	    return xhr
	
	    function readystatechange() {
	        if (xhr.readyState === 4) {
	            load()
	        }
	    }
	
	    function load() {
	        var error = null
	        var status = xhr.statusCode = xhr.status
	        var body = xhr.body = xhr.response ||
	            xhr.responseText || xhr.responseXML
	
	        if (status === 0 || (status >= 400 && status < 600)) {
	            var message = xhr.responseText ||
	                messages[String(xhr.status).charAt(0)]
	            error = new Error(message)
	
	            error.statusCode = xhr.status
	        }
	
	        if (isJson) {
	            try {
	                body = xhr.body = JSON.parse(body)
	            } catch (e) {}
	        }
	
	        callback(error, xhr, body)
	    }
	
	    function error(evt) {
	        callback(evt, xhr)
	    }
	}
	
	
	function noop() {}


/***/ },
/* 25 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {if (typeof window !== "undefined") {
	    module.exports = window
	} else if (typeof global !== "undefined") {
	    module.exports = global
	} else {
	    module.exports = {}
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = once
	
	once.proto = once(function () {
	  Object.defineProperty(Function.prototype, 'once', {
	    value: function () {
	      return once(this)
	    },
	    configurable: true
	  })
	})
	
	function once (fn) {
	  var called = false
	  return function () {
	    if (called) return
	    called = true
	    return fn.apply(this, arguments)
	  }
	}


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = asString
	module.exports.add = append
	
	function asString(fonts) {
	  var href = getHref(fonts)
	  return '<link href="' + href + '" rel="stylesheet" type="text/css">'
	}
	
	function asElement(fonts) {
	  var href = getHref(fonts)
	  var link = document.createElement('link')
	  link.setAttribute('href', href)
	  link.setAttribute('rel', 'stylesheet')
	  link.setAttribute('type', 'text/css')
	  return link
	}
	
	function getHref(fonts) {
	  var family = Object.keys(fonts).map(function(name) {
	    var details = fonts[name]
	    name = name.replace(/\s+/, '+')
	    return typeof details === 'boolean'
	      ? name
	      : name + ':' + makeArray(details).join(',')
	  }).join('|')
	
	  return 'http://fonts.googleapis.com/css?family=' + family
	}
	
	function append(fonts) {
	  var link = asElement(fonts)
	  document.head.appendChild(link)
	  return link
	}
	
	function makeArray(arr) {
	  return Array.isArray(arr) ? arr : [arr]
	}


/***/ },
/* 28 */
/***/ function(module, exports) {

	
	/**
	 * Expose `render()`.`
	 */
	
	exports = module.exports = render;
	
	/**
	 * Expose `compile()`.
	 */
	
	exports.compile = compile;
	
	/**
	 * Render the given mustache `str` with `obj`.
	 *
	 * @param {String} str
	 * @param {Object} obj
	 * @return {String}
	 * @api public
	 */
	
	function render(str, obj) {
	  obj = obj || {};
	  var fn = compile(str);
	  return fn(obj);
	}
	
	/**
	 * Compile the given `str` to a `Function`.
	 *
	 * @param {String} str
	 * @return {Function}
	 * @api public
	 */
	
	function compile(str) {
	  var js = [];
	  var toks = parse(str);
	  var tok;
	
	  for (var i = 0; i < toks.length; ++i) {
	    tok = toks[i];
	    if (i % 2 == 0) {
	      js.push('"' + tok.replace(/"/g, '\\"') + '"');
	    } else {
	      switch (tok[0]) {
	        case '/':
	          tok = tok.slice(1);
	          js.push(') + ');
	          break;
	        case '^':
	          tok = tok.slice(1);
	          assertProperty(tok);
	          js.push(' + section(obj, "' + tok + '", true, ');
	          break;
	        case '#':
	          tok = tok.slice(1);
	          assertProperty(tok);
	          js.push(' + section(obj, "' + tok + '", false, ');
	          break;
	        case '!':
	          tok = tok.slice(1);
	          assertProperty(tok);
	          js.push(' + obj.' + tok + ' + ');
	          break;
	        default:
	          assertProperty(tok);
	          js.push(' + escape(obj.' + tok + ') + ');
	      }
	    }
	  }
	
	  js = '\n'
	    + indent(escape.toString()) + ';\n\n'
	    + indent(section.toString()) + ';\n\n'
	    + '  return ' + js.join('').replace(/\n/g, '\\n');
	
	  return new Function('obj', js);
	}
	
	/**
	 * Assert that `prop` is a valid property.
	 *
	 * @param {String} prop
	 * @api private
	 */
	
	function assertProperty(prop) {
	  if (!prop.match(/^[\w.]+$/)) throw new Error('invalid property "' + prop + '"');
	}
	
	/**
	 * Parse `str`.
	 *
	 * @param {String} str
	 * @return {Array}
	 * @api private
	 */
	
	function parse(str) {
	  return str.split(/\{\{|\}\}/);
	}
	
	/**
	 * Indent `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */
	
	function indent(str) {
	  return str.replace(/^/gm, '  ');
	}
	
	/**
	 * Section handler.
	 *
	 * @param {Object} context obj
	 * @param {String} prop
	 * @param {String} str
	 * @param {Boolean} negate
	 * @api private
	 */
	
	function section(obj, prop, negate, str) {
	  var val = obj[prop];
	  if ('function' == typeof val) return val.call(obj, str);
	  if (negate) val = !val;
	  if (val) return str;
	  return '';
	}
	
	/**
	 * Escape the given `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */
	
	function escape(html) {
	  return String(html)
	    .replace(/&/g, '&amp;')
	    .replace(/"/g, '&quot;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;');
	}


/***/ },
/* 29 */
/***/ function(module, exports) {

	var inserted = [];
	
	module.exports = function (css) {
	    if (inserted.indexOf(css) >= 0) return;
	    inserted.push(css);
	    
	    var elem = document.createElement('style');
	    var text = document.createTextNode(css);
	    elem.appendChild(text);
	    
	    if (document.head.childNodes.length) {
	        document.head.insertBefore(elem, document.head.childNodes[0]);
	    }
	    else {
	        document.head.appendChild(elem);
	    }
	};


/***/ },
/* 30 */
/***/ function(module, exports) {



/***/ },
/* 31 */
/***/ function(module, exports) {

	var rootPosition = { left: 0, top: 0 }
	
	module.exports = mouseEventOffset
	function mouseEventOffset (ev, target, out) {
	  target = target || ev.currentTarget || ev.srcElement
	  if (!Array.isArray(out)) {
	    out = [ 0, 0 ]
	  }
	  var cx = ev.clientX || 0
	  var cy = ev.clientY || 0
	  var rect = getBoundingClientOffset(target)
	  out[0] = cx - rect.left
	  out[1] = cy - rect.top
	  return out
	}
	
	function getBoundingClientOffset (element) {
	  if (element === window ||
	      element === document ||
	      element === document.body) {
	    return rootPosition
	  } else {
	    return element.getBoundingClientRect()
	  }
	}


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var debounce = __webpack_require__(33),
	    isObject = __webpack_require__(34);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}
	
	module.exports = throttle;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(34),
	    now = __webpack_require__(35),
	    toNumber = __webpack_require__(38);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	module.exports = debounce;


/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(36);
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	module.exports = now;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(37);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 37 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(34),
	    isSymbol = __webpack_require__(39);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(40),
	    isObjectLike = __webpack_require__(44);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(41),
	    getRawTag = __webpack_require__(42),
	    objectToString = __webpack_require__(43);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(36);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(41);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ },
/* 43 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(46);
	
	function ts (v, t, n) {
		assert(typeof(v) === t, "range-fit expects typeof("+n+") to be "+t);
	}
	
	function tsn (v, n) {
		ts(v, "number", n);
	}
	
	module.exports = function (value, lowerInitial, upperInitial, lowerNew, upperNew) {
		/* Thanks SO! http://stackoverflow.com/questions/929103/convert-a-number-range-to-another-range-maintaining-ratio
	
			OldRange = (OldMax - OldMin)
			if (OldRange == 0)
			  NewValue = NewMin
			else
			{
			  NewRange = (NewMax - NewMin)  
			  NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin
			}
	
		*/
	
		// check types
		tsn(value, "value");
		tsn(lowerInitial, "lowerInitial");
		tsn(upperInitial, "upperInitial");
		tsn(lowerNew, "lowerNew");
		tsn(upperNew, "upperNew");
	
		// create old range, and check if it's nonexistent
		var OldRange = upperInitial - lowerInitial;
		if (OldRange === 0) {
			return lowerNew;
		}
	
		// if we're still here, check lowerInitial<=value<=upperInitial
		assert(lowerInitial<=value, "range-fit expects lowerInitial<=value");
		assert(upperInitial>=value, "range-fit expects upperInitial>=value");
	
		// if we're still here, do new range mapping
		var NewRange = upperNew - lowerNew;
		return (((value - lowerInitial) * NewRange) / OldRange) + lowerNew;
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
	// original notice:
	
	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	function compare(a, b) {
	  if (a === b) {
	    return 0;
	  }
	
	  var x = a.length;
	  var y = b.length;
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }
	
	  if (x < y) {
	    return -1;
	  }
	  if (y < x) {
	    return 1;
	  }
	  return 0;
	}
	function isBuffer(b) {
	  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
	    return global.Buffer.isBuffer(b);
	  }
	  return !!(b != null && b._isBuffer);
	}
	
	// based on node assert, original notice:
	
	// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
	//
	// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
	//
	// Originally from narwhal.js (http://narwhaljs.org)
	// Copyright (c) 2009 Thomas Robinson <280north.com>
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the 'Software'), to
	// deal in the Software without restriction, including without limitation the
	// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	// sell copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var util = __webpack_require__(47);
	var hasOwn = Object.prototype.hasOwnProperty;
	var pSlice = Array.prototype.slice;
	var functionsHaveNames = (function () {
	  return function foo() {}.name === 'foo';
	}());
	function pToString (obj) {
	  return Object.prototype.toString.call(obj);
	}
	function isView(arrbuf) {
	  if (isBuffer(arrbuf)) {
	    return false;
	  }
	  if (typeof global.ArrayBuffer !== 'function') {
	    return false;
	  }
	  if (typeof ArrayBuffer.isView === 'function') {
	    return ArrayBuffer.isView(arrbuf);
	  }
	  if (!arrbuf) {
	    return false;
	  }
	  if (arrbuf instanceof DataView) {
	    return true;
	  }
	  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
	    return true;
	  }
	  return false;
	}
	// 1. The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.
	
	var assert = module.exports = ok;
	
	// 2. The AssertionError is defined in assert.
	// new assert.AssertionError({ message: message,
	//                             actual: actual,
	//                             expected: expected })
	
	var regex = /\s*function\s+([^\(\s]*)\s*/;
	// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
	function getName(func) {
	  if (!util.isFunction(func)) {
	    return;
	  }
	  if (functionsHaveNames) {
	    return func.name;
	  }
	  var str = func.toString();
	  var match = str.match(regex);
	  return match && match[1];
	}
	assert.AssertionError = function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  if (options.message) {
	    this.message = options.message;
	    this.generatedMessage = false;
	  } else {
	    this.message = getMessage(this);
	    this.generatedMessage = true;
	  }
	  var stackStartFunction = options.stackStartFunction || fail;
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  } else {
	    // non v8 browsers so we can have a stacktrace
	    var err = new Error();
	    if (err.stack) {
	      var out = err.stack;
	
	      // try to strip useless frames
	      var fn_name = getName(stackStartFunction);
	      var idx = out.indexOf('\n' + fn_name);
	      if (idx >= 0) {
	        // once we have located the function frame
	        // we need to strip out everything before it (and its line)
	        var next_line = out.indexOf('\n', idx + 1);
	        out = out.substring(next_line + 1);
	      }
	
	      this.stack = out;
	    }
	  }
	};
	
	// assert.AssertionError instanceof Error
	util.inherits(assert.AssertionError, Error);
	
	function truncate(s, n) {
	  if (typeof s === 'string') {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}
	function inspect(something) {
	  if (functionsHaveNames || !util.isFunction(something)) {
	    return util.inspect(something);
	  }
	  var rawname = getName(something);
	  var name = rawname ? ': ' + rawname : '';
	  return '[Function' +  name + ']';
	}
	function getMessage(self) {
	  return truncate(inspect(self.actual), 128) + ' ' +
	         self.operator + ' ' +
	         truncate(inspect(self.expected), 128);
	}
	
	// At present only the three keys mentioned above are used and
	// understood by the spec. Implementations or sub modules can pass
	// other keys to the AssertionError's constructor - they will be
	// ignored.
	
	// 3. All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided.  All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.
	
	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new assert.AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}
	
	// EXTENSION! allows for well behaved errors defined elsewhere.
	assert.fail = fail;
	
	// 4. Pure assertion tests whether a value is truthy, as determined
	// by !!guard.
	// assert.ok(guard, message_opt);
	// This statement is equivalent to assert.equal(true, !!guard,
	// message_opt);. To test strictly for the value true, use
	// assert.strictEqual(true, guard, message_opt);.
	
	function ok(value, message) {
	  if (!value) fail(value, true, message, '==', assert.ok);
	}
	assert.ok = ok;
	
	// 5. The equality assertion tests shallow, coercive equality with
	// ==.
	// assert.equal(actual, expected, message_opt);
	
	assert.equal = function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
	};
	
	// 6. The non-equality assertion tests for whether two objects are not equal
	// with != assert.notEqual(actual, expected, message_opt);
	
	assert.notEqual = function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', assert.notEqual);
	  }
	};
	
	// 7. The equivalence assertion tests a deep equality relation.
	// assert.deepEqual(actual, expected, message_opt);
	
	assert.deepEqual = function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
	  }
	};
	
	assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
	  }
	};
	
	function _deepEqual(actual, expected, strict, memos) {
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	  } else if (isBuffer(actual) && isBuffer(expected)) {
	    return compare(actual, expected) === 0;
	
	  // 7.2. If the expected value is a Date object, the actual value is
	  // equivalent if it is also a Date object that refers to the same time.
	  } else if (util.isDate(actual) && util.isDate(expected)) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3 If the expected value is a RegExp object, the actual value is
	  // equivalent if it is also a RegExp object with the same source and
	  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
	  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
	    return actual.source === expected.source &&
	           actual.global === expected.global &&
	           actual.multiline === expected.multiline &&
	           actual.lastIndex === expected.lastIndex &&
	           actual.ignoreCase === expected.ignoreCase;
	
	  // 7.4. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if ((actual === null || typeof actual !== 'object') &&
	             (expected === null || typeof expected !== 'object')) {
	    return strict ? actual === expected : actual == expected;
	
	  // If both values are instances of typed arrays, wrap their underlying
	  // ArrayBuffers in a Buffer each to increase performance
	  // This optimization requires the arrays to have the same type as checked by
	  // Object.prototype.toString (aka pToString). Never perform binary
	  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
	  // bit patterns are not identical.
	  } else if (isView(actual) && isView(expected) &&
	             pToString(actual) === pToString(expected) &&
	             !(actual instanceof Float32Array ||
	               actual instanceof Float64Array)) {
	    return compare(new Uint8Array(actual.buffer),
	                   new Uint8Array(expected.buffer)) === 0;
	
	  // 7.5 For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else if (isBuffer(actual) !== isBuffer(expected)) {
	    return false;
	  } else {
	    memos = memos || {actual: [], expected: []};
	
	    var actualIndex = memos.actual.indexOf(actual);
	    if (actualIndex !== -1) {
	      if (actualIndex === memos.expected.indexOf(expected)) {
	        return true;
	      }
	    }
	
	    memos.actual.push(actual);
	    memos.expected.push(expected);
	
	    return objEquiv(actual, expected, strict, memos);
	  }
	}
	
	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}
	
	function objEquiv(a, b, strict, actualVisitedObjects) {
	  if (a === null || a === undefined || b === null || b === undefined)
	    return false;
	  // if one is a primitive, the other must be same
	  if (util.isPrimitive(a) || util.isPrimitive(b))
	    return a === b;
	  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
	    return false;
	  var aIsArgs = isArguments(a);
	  var bIsArgs = isArguments(b);
	  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
	    return false;
	  if (aIsArgs) {
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b, strict);
	  }
	  var ka = objectKeys(a);
	  var kb = objectKeys(b);
	  var key, i;
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length !== kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] !== kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
	      return false;
	  }
	  return true;
	}
	
	// 8. The non-equivalence assertion tests for any deep inequality.
	// assert.notDeepEqual(actual, expected, message_opt);
	
	assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
	  }
	};
	
	assert.notDeepStrictEqual = notDeepStrictEqual;
	function notDeepStrictEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
	  }
	}
	
	
	// 9. The strict equality assertion tests strict equality, as determined by ===.
	// assert.strictEqual(actual, expected, message_opt);
	
	assert.strictEqual = function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', assert.strictEqual);
	  }
	};
	
	// 10. The strict non-equality assertion tests for strict inequality, as
	// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);
	
	assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', assert.notStrictEqual);
	  }
	};
	
	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }
	
	  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
	    return expected.test(actual);
	  }
	
	  try {
	    if (actual instanceof expected) {
	      return true;
	    }
	  } catch (e) {
	    // Ignore.  The instanceof check doesn't work for arrow functions.
	  }
	
	  if (Error.isPrototypeOf(expected)) {
	    return false;
	  }
	
	  return expected.call({}, actual) === true;
	}
	
	function _tryBlock(block) {
	  var error;
	  try {
	    block();
	  } catch (e) {
	    error = e;
	  }
	  return error;
	}
	
	function _throws(shouldThrow, block, expected, message) {
	  var actual;
	
	  if (typeof block !== 'function') {
	    throw new TypeError('"block" argument must be a function');
	  }
	
	  if (typeof expected === 'string') {
	    message = expected;
	    expected = null;
	  }
	
	  actual = _tryBlock(block);
	
	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
	            (message ? ' ' + message : '.');
	
	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }
	
	  var userProvidedMessage = typeof message === 'string';
	  var isUnwantedException = !shouldThrow && util.isError(actual);
	  var isUnexpectedException = !shouldThrow && actual && !expected;
	
	  if ((isUnwantedException &&
	      userProvidedMessage &&
	      expectedException(actual, expected)) ||
	      isUnexpectedException) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }
	
	  if ((shouldThrow && actual && expected &&
	      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
	    throw actual;
	  }
	}
	
	// 11. Expected to throw an error:
	// assert.throws(block, Error_opt, message_opt);
	
	assert.throws = function(block, /*optional*/error, /*optional*/message) {
	  _throws(true, block, error, message);
	};
	
	// EXTENSION! This is annoying to write outside this module.
	assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
	  _throws(false, block, error, message);
	};
	
	assert.ifError = function(err) { if (err) throw err; };
	
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    if (hasOwn.call(obj, key)) keys.push(key);
	  }
	  return keys;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = __webpack_require__(49);
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(50);
	
	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(48)))

/***/ },
/* 48 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 50 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(52);
	
	/**
	 * @class 3x3 Matrix
	 * @name mat3
	 */
	var mat3 = {};
	
	/**
	 * Creates a new identity mat3
	 *
	 * @returns {mat3} a new 3x3 matrix
	 */
	mat3.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(9);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	};
	
	/**
	 * Copies the upper-left 3x3 values into the given mat3.
	 *
	 * @param {mat3} out the receiving 3x3 matrix
	 * @param {mat4} a   the source 4x4 matrix
	 * @returns {mat3} out
	 */
	mat3.fromMat4 = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[4];
	    out[4] = a[5];
	    out[5] = a[6];
	    out[6] = a[8];
	    out[7] = a[9];
	    out[8] = a[10];
	    return out;
	};
	
	/**
	 * Creates a new mat3 initialized with values from an existing matrix
	 *
	 * @param {mat3} a matrix to clone
	 * @returns {mat3} a new 3x3 matrix
	 */
	mat3.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(9);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};
	
	/**
	 * Copy the values from one mat3 to another
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};
	
	/**
	 * Create a new mat3 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m10 Component in column 1, row 0 position (index 3)
	 * @param {Number} m11 Component in column 1, row 1 position (index 4)
	 * @param {Number} m12 Component in column 1, row 2 position (index 5)
	 * @param {Number} m20 Component in column 2, row 0 position (index 6)
	 * @param {Number} m21 Component in column 2, row 1 position (index 7)
	 * @param {Number} m22 Component in column 2, row 2 position (index 8)
	 * @returns {mat3} A new mat3
	 */
	mat3.fromValues = function(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	    var out = new glMatrix.ARRAY_TYPE(9);
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m02;
	    out[3] = m10;
	    out[4] = m11;
	    out[5] = m12;
	    out[6] = m20;
	    out[7] = m21;
	    out[8] = m22;
	    return out;
	};
	
	/**
	 * Set the components of a mat3 to the given values
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m10 Component in column 1, row 0 position (index 3)
	 * @param {Number} m11 Component in column 1, row 1 position (index 4)
	 * @param {Number} m12 Component in column 1, row 2 position (index 5)
	 * @param {Number} m20 Component in column 2, row 0 position (index 6)
	 * @param {Number} m21 Component in column 2, row 1 position (index 7)
	 * @param {Number} m22 Component in column 2, row 2 position (index 8)
	 * @returns {mat3} out
	 */
	mat3.set = function(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m02;
	    out[3] = m10;
	    out[4] = m11;
	    out[5] = m12;
	    out[6] = m20;
	    out[7] = m21;
	    out[8] = m22;
	    return out;
	};
	
	/**
	 * Set a mat3 to the identity matrix
	 *
	 * @param {mat3} out the receiving matrix
	 * @returns {mat3} out
	 */
	mat3.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	};
	
	/**
	 * Transpose the values of a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.transpose = function(out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a01 = a[1], a02 = a[2], a12 = a[5];
	        out[1] = a[3];
	        out[2] = a[6];
	        out[3] = a01;
	        out[5] = a[7];
	        out[6] = a02;
	        out[7] = a12;
	    } else {
	        out[0] = a[0];
	        out[1] = a[3];
	        out[2] = a[6];
	        out[3] = a[1];
	        out[4] = a[4];
	        out[5] = a[7];
	        out[6] = a[2];
	        out[7] = a[5];
	        out[8] = a[8];
	    }
	    
	    return out;
	};
	
	/**
	 * Inverts a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.invert = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	
	        b01 = a22 * a11 - a12 * a21,
	        b11 = -a22 * a10 + a12 * a20,
	        b21 = a21 * a10 - a11 * a20,
	
	        // Calculate the determinant
	        det = a00 * b01 + a01 * b11 + a02 * b21;
	
	    if (!det) { 
	        return null; 
	    }
	    det = 1.0 / det;
	
	    out[0] = b01 * det;
	    out[1] = (-a22 * a01 + a02 * a21) * det;
	    out[2] = (a12 * a01 - a02 * a11) * det;
	    out[3] = b11 * det;
	    out[4] = (a22 * a00 - a02 * a20) * det;
	    out[5] = (-a12 * a00 + a02 * a10) * det;
	    out[6] = b21 * det;
	    out[7] = (-a21 * a00 + a01 * a20) * det;
	    out[8] = (a11 * a00 - a01 * a10) * det;
	    return out;
	};
	
	/**
	 * Calculates the adjugate of a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.adjoint = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8];
	
	    out[0] = (a11 * a22 - a12 * a21);
	    out[1] = (a02 * a21 - a01 * a22);
	    out[2] = (a01 * a12 - a02 * a11);
	    out[3] = (a12 * a20 - a10 * a22);
	    out[4] = (a00 * a22 - a02 * a20);
	    out[5] = (a02 * a10 - a00 * a12);
	    out[6] = (a10 * a21 - a11 * a20);
	    out[7] = (a01 * a20 - a00 * a21);
	    out[8] = (a00 * a11 - a01 * a10);
	    return out;
	};
	
	/**
	 * Calculates the determinant of a mat3
	 *
	 * @param {mat3} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat3.determinant = function (a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8];
	
	    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
	};
	
	/**
	 * Multiplies two mat3's
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	mat3.multiply = function (out, a, b) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	
	        b00 = b[0], b01 = b[1], b02 = b[2],
	        b10 = b[3], b11 = b[4], b12 = b[5],
	        b20 = b[6], b21 = b[7], b22 = b[8];
	
	    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
	    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
	    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
	
	    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
	    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
	    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
	
	    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
	    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
	    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
	    return out;
	};
	
	/**
	 * Alias for {@link mat3.multiply}
	 * @function
	 */
	mat3.mul = mat3.multiply;
	
	/**
	 * Translate a mat3 by the given vector
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to translate
	 * @param {vec2} v vector to translate by
	 * @returns {mat3} out
	 */
	mat3.translate = function(out, a, v) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	        x = v[0], y = v[1];
	
	    out[0] = a00;
	    out[1] = a01;
	    out[2] = a02;
	
	    out[3] = a10;
	    out[4] = a11;
	    out[5] = a12;
	
	    out[6] = x * a00 + y * a10 + a20;
	    out[7] = x * a01 + y * a11 + a21;
	    out[8] = x * a02 + y * a12 + a22;
	    return out;
	};
	
	/**
	 * Rotates a mat3 by the given angle
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat3} out
	 */
	mat3.rotate = function (out, a, rad) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	
	        s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    out[0] = c * a00 + s * a10;
	    out[1] = c * a01 + s * a11;
	    out[2] = c * a02 + s * a12;
	
	    out[3] = c * a10 - s * a00;
	    out[4] = c * a11 - s * a01;
	    out[5] = c * a12 - s * a02;
	
	    out[6] = a20;
	    out[7] = a21;
	    out[8] = a22;
	    return out;
	};
	
	/**
	 * Scales the mat3 by the dimensions in the given vec2
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to rotate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat3} out
	 **/
	mat3.scale = function(out, a, v) {
	    var x = v[0], y = v[1];
	
	    out[0] = x * a[0];
	    out[1] = x * a[1];
	    out[2] = x * a[2];
	
	    out[3] = y * a[3];
	    out[4] = y * a[4];
	    out[5] = y * a[5];
	
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};
	
	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.translate(dest, dest, vec);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {vec2} v Translation vector
	 * @returns {mat3} out
	 */
	mat3.fromTranslation = function(out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = v[0];
	    out[7] = v[1];
	    out[8] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.rotate(dest, dest, rad);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat3} out
	 */
	mat3.fromRotation = function(out, rad) {
	    var s = Math.sin(rad), c = Math.cos(rad);
	
	    out[0] = c;
	    out[1] = s;
	    out[2] = 0;
	
	    out[3] = -s;
	    out[4] = c;
	    out[5] = 0;
	
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.scale(dest, dest, vec);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat3} out
	 */
	mat3.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	
	    out[3] = 0;
	    out[4] = v[1];
	    out[5] = 0;
	
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	}
	
	/**
	 * Copies the values from a mat2d into a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat2d} a the matrix to copy
	 * @returns {mat3} out
	 **/
	mat3.fromMat2d = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = 0;
	
	    out[3] = a[2];
	    out[4] = a[3];
	    out[5] = 0;
	
	    out[6] = a[4];
	    out[7] = a[5];
	    out[8] = 1;
	    return out;
	};
	
	/**
	* Calculates a 3x3 matrix from the given quaternion
	*
	* @param {mat3} out mat3 receiving operation result
	* @param {quat} q Quaternion to create matrix from
	*
	* @returns {mat3} out
	*/
	mat3.fromQuat = function (out, q) {
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        yx = y * x2,
	        yy = y * y2,
	        zx = z * x2,
	        zy = z * y2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;
	
	    out[0] = 1 - yy - zz;
	    out[3] = yx - wz;
	    out[6] = zx + wy;
	
	    out[1] = yx + wz;
	    out[4] = 1 - xx - zz;
	    out[7] = zy - wx;
	
	    out[2] = zx - wy;
	    out[5] = zy + wx;
	    out[8] = 1 - xx - yy;
	
	    return out;
	};
	
	/**
	* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
	*
	* @param {mat3} out mat3 receiving operation result
	* @param {mat4} a Mat4 to derive the normal matrix from
	*
	* @returns {mat3} out
	*/
	mat3.normalFromMat4 = function (out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
	
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32,
	
	        // Calculate the determinant
	        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	
	    if (!det) { 
	        return null; 
	    }
	    det = 1.0 / det;
	
	    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	
	    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	
	    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	
	    return out;
	};
	
	/**
	 * Returns a string representation of a mat3
	 *
	 * @param {mat3} mat matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat3.str = function (a) {
	    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
	                    a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + 
	                    a[6] + ', ' + a[7] + ', ' + a[8] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat3
	 *
	 * @param {mat3} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat3.frob = function (a) {
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
	};
	
	/**
	 * Adds two mat3's
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	mat3.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    out[4] = a[4] + b[4];
	    out[5] = a[5] + b[5];
	    out[6] = a[6] + b[6];
	    out[7] = a[7] + b[7];
	    out[8] = a[8] + b[8];
	    return out;
	};
	
	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	mat3.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    out[4] = a[4] - b[4];
	    out[5] = a[5] - b[5];
	    out[6] = a[6] - b[6];
	    out[7] = a[7] - b[7];
	    out[8] = a[8] - b[8];
	    return out;
	};
	
	/**
	 * Alias for {@link mat3.subtract}
	 * @function
	 */
	mat3.sub = mat3.subtract;
	
	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat3} out
	 */
	mat3.multiplyScalar = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    out[4] = a[4] * b;
	    out[5] = a[5] * b;
	    out[6] = a[6] * b;
	    out[7] = a[7] * b;
	    out[8] = a[8] * b;
	    return out;
	};
	
	/**
	 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat3} out the receiving vector
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat3} out
	 */
	mat3.multiplyScalarAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    out[4] = a[4] + (b[4] * scale);
	    out[5] = a[5] + (b[5] * scale);
	    out[6] = a[6] + (b[6] * scale);
	    out[7] = a[7] + (b[7] * scale);
	    out[8] = a[8] + (b[8] * scale);
	    return out;
	};
	
	/*
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat3} a The first matrix.
	 * @param {mat3} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat3.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && 
	           a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
	           a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
	};
	
	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat3} a The first matrix.
	 * @param {mat3} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat3.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = a[6], b7 = b[7], b8 = b[8];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
	            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
	            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
	            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
	            Math.abs(a6 - b6) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
	            Math.abs(a7 - b7) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
	            Math.abs(a8 - b8) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a8), Math.abs(b8)));
	};
	
	
	module.exports = mat3;


/***/ },
/* 52 */
/***/ function(module, exports) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	/**
	 * @class Common utilities
	 * @name glMatrix
	 */
	var glMatrix = {};
	
	// Configuration Constants
	glMatrix.EPSILON = 0.000001;
	glMatrix.ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
	glMatrix.RANDOM = Math.random;
	glMatrix.ENABLE_SIMD = false;
	
	// Capability detection
	glMatrix.SIMD_AVAILABLE = (glMatrix.ARRAY_TYPE === Float32Array) && ('SIMD' in this);
	glMatrix.USE_SIMD = glMatrix.ENABLE_SIMD && glMatrix.SIMD_AVAILABLE;
	
	/**
	 * Sets the type of array used when creating new vectors and matrices
	 *
	 * @param {Type} type Array type, such as Float32Array or Array
	 */
	glMatrix.setMatrixArrayType = function(type) {
	    glMatrix.ARRAY_TYPE = type;
	}
	
	var degree = Math.PI / 180;
	
	/**
	* Convert Degree To Radian
	*
	* @param {Number} Angle in Degrees
	*/
	glMatrix.toRadian = function(a){
	     return a * degree;
	}
	
	/**
	 * Tests whether or not the arguments have approximately the same value, within an absolute
	 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less 
	 * than or equal to 1.0, and a relative tolerance is used for larger values)
	 * 
	 * @param {Number} a The first number to test.
	 * @param {Number} b The second number to test.
	 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
	 */
	glMatrix.equals = function(a, b) {
		return Math.abs(a - b) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a), Math.abs(b));
	}
	
	module.exports = glMatrix;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(52);
	
	/**
	 * @class 2 Dimensional Vector
	 * @name vec2
	 */
	var vec2 = {};
	
	/**
	 * Creates a new, empty vec2
	 *
	 * @returns {vec2} a new 2D vector
	 */
	vec2.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = 0;
	    out[1] = 0;
	    return out;
	};
	
	/**
	 * Creates a new vec2 initialized with values from an existing vector
	 *
	 * @param {vec2} a vector to clone
	 * @returns {vec2} a new 2D vector
	 */
	vec2.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = a[0];
	    out[1] = a[1];
	    return out;
	};
	
	/**
	 * Creates a new vec2 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} a new 2D vector
	 */
	vec2.fromValues = function(x, y) {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = x;
	    out[1] = y;
	    return out;
	};
	
	/**
	 * Copy the values from one vec2 to another
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the source vector
	 * @returns {vec2} out
	 */
	vec2.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    return out;
	};
	
	/**
	 * Set the components of a vec2 to the given values
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} out
	 */
	vec2.set = function(out, x, y) {
	    out[0] = x;
	    out[1] = y;
	    return out;
	};
	
	/**
	 * Adds two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    return out;
	};
	
	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    return out;
	};
	
	/**
	 * Alias for {@link vec2.subtract}
	 * @function
	 */
	vec2.sub = vec2.subtract;
	
	/**
	 * Multiplies two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.multiply = function(out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    return out;
	};
	
	/**
	 * Alias for {@link vec2.multiply}
	 * @function
	 */
	vec2.mul = vec2.multiply;
	
	/**
	 * Divides two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.divide = function(out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    return out;
	};
	
	/**
	 * Alias for {@link vec2.divide}
	 * @function
	 */
	vec2.div = vec2.divide;
	
	/**
	 * Math.ceil the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to ceil
	 * @returns {vec2} out
	 */
	vec2.ceil = function (out, a) {
	    out[0] = Math.ceil(a[0]);
	    out[1] = Math.ceil(a[1]);
	    return out;
	};
	
	/**
	 * Math.floor the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to floor
	 * @returns {vec2} out
	 */
	vec2.floor = function (out, a) {
	    out[0] = Math.floor(a[0]);
	    out[1] = Math.floor(a[1]);
	    return out;
	};
	
	/**
	 * Returns the minimum of two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.min = function(out, a, b) {
	    out[0] = Math.min(a[0], b[0]);
	    out[1] = Math.min(a[1], b[1]);
	    return out;
	};
	
	/**
	 * Returns the maximum of two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.max = function(out, a, b) {
	    out[0] = Math.max(a[0], b[0]);
	    out[1] = Math.max(a[1], b[1]);
	    return out;
	};
	
	/**
	 * Math.round the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to round
	 * @returns {vec2} out
	 */
	vec2.round = function (out, a) {
	    out[0] = Math.round(a[0]);
	    out[1] = Math.round(a[1]);
	    return out;
	};
	
	/**
	 * Scales a vec2 by a scalar number
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec2} out
	 */
	vec2.scale = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    return out;
	};
	
	/**
	 * Adds two vec2's after scaling the second operand by a scalar value
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec2} out
	 */
	vec2.scaleAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    return out;
	};
	
	/**
	 * Calculates the euclidian distance between two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} distance between a and b
	 */
	vec2.distance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1];
	    return Math.sqrt(x*x + y*y);
	};
	
	/**
	 * Alias for {@link vec2.distance}
	 * @function
	 */
	vec2.dist = vec2.distance;
	
	/**
	 * Calculates the squared euclidian distance between two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	vec2.squaredDistance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1];
	    return x*x + y*y;
	};
	
	/**
	 * Alias for {@link vec2.squaredDistance}
	 * @function
	 */
	vec2.sqrDist = vec2.squaredDistance;
	
	/**
	 * Calculates the length of a vec2
	 *
	 * @param {vec2} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	vec2.length = function (a) {
	    var x = a[0],
	        y = a[1];
	    return Math.sqrt(x*x + y*y);
	};
	
	/**
	 * Alias for {@link vec2.length}
	 * @function
	 */
	vec2.len = vec2.length;
	
	/**
	 * Calculates the squared length of a vec2
	 *
	 * @param {vec2} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	vec2.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1];
	    return x*x + y*y;
	};
	
	/**
	 * Alias for {@link vec2.squaredLength}
	 * @function
	 */
	vec2.sqrLen = vec2.squaredLength;
	
	/**
	 * Negates the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to negate
	 * @returns {vec2} out
	 */
	vec2.negate = function(out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    return out;
	};
	
	/**
	 * Returns the inverse of the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to invert
	 * @returns {vec2} out
	 */
	vec2.inverse = function(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  return out;
	};
	
	/**
	 * Normalize a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to normalize
	 * @returns {vec2} out
	 */
	vec2.normalize = function(out, a) {
	    var x = a[0],
	        y = a[1];
	    var len = x*x + y*y;
	    if (len > 0) {
	        //TODO: evaluate use of glm_invsqrt here?
	        len = 1 / Math.sqrt(len);
	        out[0] = a[0] * len;
	        out[1] = a[1] * len;
	    }
	    return out;
	};
	
	/**
	 * Calculates the dot product of two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	vec2.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	};
	
	/**
	 * Computes the cross product of two vec2's
	 * Note that the cross product must by definition produce a 3D vector
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec3} out
	 */
	vec2.cross = function(out, a, b) {
	    var z = a[0] * b[1] - a[1] * b[0];
	    out[0] = out[1] = 0;
	    out[2] = z;
	    return out;
	};
	
	/**
	 * Performs a linear interpolation between two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec2} out
	 */
	vec2.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    return out;
	};
	
	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec2} out
	 */
	vec2.random = function (out, scale) {
	    scale = scale || 1.0;
	    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
	    out[0] = Math.cos(r) * scale;
	    out[1] = Math.sin(r) * scale;
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat2} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat2 = function(out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[2] * y;
	    out[1] = m[1] * x + m[3] * y;
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat2d
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat2d} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat2d = function(out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[2] * y + m[4];
	    out[1] = m[1] * x + m[3] * y + m[5];
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat3
	 * 3rd vector component is implicitly '1'
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat3} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat3 = function(out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[3] * y + m[6];
	    out[1] = m[1] * x + m[4] * y + m[7];
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat4
	 * 3rd vector component is implicitly '0'
	 * 4th vector component is implicitly '1'
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat4 = function(out, a, m) {
	    var x = a[0], 
	        y = a[1];
	    out[0] = m[0] * x + m[4] * y + m[12];
	    out[1] = m[1] * x + m[5] * y + m[13];
	    return out;
	};
	
	/**
	 * Perform some operation over an array of vec2s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	vec2.forEach = (function() {
	    var vec = vec2.create();
	
	    return function(a, stride, offset, count, fn, arg) {
	        var i, l;
	        if(!stride) {
	            stride = 2;
	        }
	
	        if(!offset) {
	            offset = 0;
	        }
	        
	        if(count) {
	            l = Math.min((count * stride) + offset, a.length);
	        } else {
	            l = a.length;
	        }
	
	        for(i = offset; i < l; i += stride) {
	            vec[0] = a[i]; vec[1] = a[i+1];
	            fn(vec, vec, arg);
	            a[i] = vec[0]; a[i+1] = vec[1];
	        }
	        
	        return a;
	    };
	})();
	
	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec2} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	vec2.str = function (a) {
	    return 'vec2(' + a[0] + ', ' + a[1] + ')';
	};
	
	/**
	 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
	 *
	 * @param {vec2} a The first vector.
	 * @param {vec2} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec2.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1];
	};
	
	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 *
	 * @param {vec2} a The first vector.
	 * @param {vec2} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec2.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1];
	    var b0 = b[0], b1 = b[1];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
	};
	
	module.exports = vec2;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	
	/* jshint node: true */
	
	'use strict';
	
	var fnToStr = __webpack_require__(55);
	
	function tabs(ln, tabChar) {
		var str = '';
		for(var i = 0; i < ln; i++) str += tabChar;
		return str;
	}
	
	function defaultFnFormatter() {
		return 'function() {}';
	}
	
	function simpleFnFormatter(depth, fn) {
		return fnToStr(fn);
	}
	
	function mkFnFormatter(tabChar) {
		if(tabChar === undefined) tabChar = '\t';
		return function(tabDepth, fn) {
			var
				sourced = fnToStr(fn),
				src = sourced.split('\n');
	
			// Start by finding the height that the function is currently indented at.
			// I will need this to adjust the indentation.
			var 
				lastLine = src[src.length - 1],
				currentH = lastLine.match('^(' + tabChar + ')*')[0].length;
	
			// No need to reindent if its already at the proper height.
			if(currentH === tabDepth) {
				return sourced;
			}
	
			// Relying on standard writing style, I shouldn't need to indent the first
			// line.
			var 
				tail = src.slice(1),
				corrected;
	
			// I need to add indentation.
			if(currentH < tabDepth) {
				var addTabs = tabDepth - currentH;
				corrected = tail.map(function(line) {
					return tabs(addTabs, tabChar);
				});
			} else {
				// remove indentation.
				var removeChars = currentH - tabDepth;
				corrected = tail.map(function(line) {
					return line.substring(removeChars);
				});
			}
			return src[0] + '\n' +
				corrected.join('\n');//[src[0]].concat(spaced).join('\n');
		};
	}
	
	function objectToSource(data, tabDepth, quoteDepth, brackets, tabChar, quoteChar, functionFormatter) {
		var str = '{\n';
		var objListing = Object.keys(data).map(function(key) {
			var 
				sourced = toSource(data[key], tabDepth + 1, quoteDepth - 1, true, 
					tabChar, quoteChar, functionFormatter),
				literalKey = quoteDepth > 0 ? '\'' + key + '\'' : key,
				base = tabs(tabDepth + 1, tabChar) + literalKey + ': ';
			return base + sourced;
		});
	
		var inner = objListing.join(',\n');
		if(brackets) {
			return '{\n' + 
				inner + '\n' + 
				tabs(tabDepth, tabChar) + '}';
		} else {
			return inner;
		}
	
	}
	
	function arrayToSource(data, tabDepth, quoteDepth, brackets, tabChar, quoteChar, functionFormatter) {
		var inner = data.map(function(part) {
			var src = toSource(part, tabDepth + 1, quoteDepth - 1, true, tabChar,								 
				quoteChar, functionFormatter);
			return tabs(tabDepth + 1, tabChar) + src;
		}).join(',\n');
		
		if(brackets) {
			return '[\n' +
				inner + '\n' +
				tabs(tabDepth, tabChar) + ']';
		} else {
			return inner;
		}
	
	}
	
	/**
	 * Turns code back into source! Doesn't support functions or comments though.
	 *
	 * @param {string} data; This is the javascript value to convert back into source text.
	 * @param {number} tabDepth; Is the indentation level that the value is starting at.
	 * @param {number} quoteDepth; Specifies how far deep into the object you want the key to be single
	 * quoted.
	 * @param {boolean} brackets; If false, the object output won't have the openeing and closing
	 * brackets. This is useful is you want to insert the output into an existing object.
	 * @param {string} tabChar; specifies what to use for the height character. By default this will
	 * use a single tab character. You can specify two, three, four spaces instead if you want (or 
	 * whatever you want).
	 * @param {function} functionFormatter; If you want to parse functions, you will need to specify
	 * this argument. The function will feed the tab height and the function object to the
	 * formatter, from there you will need to source it and change the format to preference. If this
	 * argument is not specified the default will be an empty function.
	 */
	function toSource(data, tabDepth, quoteDepth, brackets, tabChar, quoteChar, functionFormatter) {
		switch(typeof data) {
			case 'function': return functionFormatter(tabDepth, data);
			case 'number':
			case 'undefined':
			case 'boolean': return '' + data;
			case 'string': return quoteChar + data + quoteChar;
			case 'object':
				var inner;
				if(Array.isArray(data)) {
					return arrayToSource.apply(null, arguments);
				} else if(data === null) {
					// null is an object lol.
					return 'null';
				} else if(data instanceof Date) {
					return 'new Date(' + data.getTime() + ')';
				}	else if(data instanceof RegExp) {
					return data.toString();
				} else {
					return objectToSource.apply(null, arguments);
				}
				break;
	
		}
	}
	
	// Wrap the toSource function to add in defaults.
	module.exports = function (data, options) {
		options = options || {};
		var defaulted = [
			['tabDepth', 0],
			['quoteDepth', 0],
			['enclose', true],
			['tabChar', '\t'],
			['quoteChar', '\''],
			['functionFormatter', module.exports.defaultFnFormatter]
		].map(function(tuple) {
			return options[tuple[0]] === undefined ? tuple[1] : options[tuple[0]];
		});
		return toSource.apply(null, [data].concat(defaulted));
	
	};
	
	module.exports.defaultFnFormatter = defaultFnFormatter;
	module.exports.mkFnFormatter = mkFnFormatter;
	module.exports.simpleFnFormatter = simpleFnFormatter;


/***/ },
/* 55 */
/***/ function(module, exports) {

	/* jshint node: true */
	
	var nativeFnNames = [
		// String
		'String.fromCharCode',
		'String.fromCodePoint',
		'String.prototype.anchor',
		'String.prototype.charAt',
		'String.prototype.charCodeAt',
		'String.prototype.codePointAt',
		'String.prototype.concat',
		'String.prototype.endsWith',
		'String.prototype.includes',
		'String.prototype.indexOf',
		'String.prototype.lastIndexOf',
		'String.prototype.link',
		'String.prototype.localeCompare',
		'String.prototype.match',
		'String.prototype.normalize',
		'String.prototype.repeat',
		'String.prototype.replace',
		'String.prototype.search',
		'String.prototype.slice',
		'String.prototype.split',
		'String.prototype.startsWith',
		'String.prototype.substr',
		'String.prototype.substring',
		'String.prototype.toLocaleLowerCase',
		'String.prototype.toLocaleUpperCase',
		'String.prototype.toLowerCase',
		'String.prototype.toString',
		'String.prototype.toUpperCase',
		'String.prototype.trim',
		'String.prototype.trimLeft',
		'String.prototype.trimRight',
		'String.prototype.valueOf',
		'String.raw',
	
		// Regexp
		'RegExp.prototype.exec',
		'RegExp.prototype.test',
		'RegExp.prototype.toSource',
		'RegExp.prototype.toString',
	
		// Date
		'Date.now',
		'Date.UTC',
		'Date.parse',
		'Date.prototype.getDate',
		'Date.prototype.getDay',
		'Date.prototype.getFullYear',
		'Date.prototype.getHours',
		'Date.prototype.getMilliseconds',
		'Date.prototype.getMinutes',
		'Date.prototype.getMonth',
		'Date.prototype.getSeconds',
		'Date.prototype.getTime',
		'Date.prototype.getTimezoneOffset',
		'Date.prototype.getUTCDate',
		'Date.prototype.getUTCDay',
		'Date.prototype.getUTCFullYear',
		'Date.prototype.getUTCHours',
		'Date.prototype.getUTCMilliseconds',
		'Date.prototype.getUTCMinutes',
		'Date.prototype.getUTCMonth',
		'Date.prototype.getUTCSeconds',
		'Date.prototype.getYear',
		'Date.prototype.setDate',
		'Date.prototype.setFullYear',
		'Date.prototype.setHours',
		'Date.prototype.setMilliseconds',
		'Date.prototype.setMinutes',
		'Date.prototype.setMonth',
		'Date.prototype.setSeconds',
		'Date.prototype.setTime',
		'Date.prototype.setUTCDate',
		'Date.prototype.setUTCFullYear',
		'Date.prototype.setUTCHours',
		'Date.prototype.setUTCMilliseconds',
		'Date.prototype.setUTCMinutes',
		'Date.prototype.setUTCMonth',
		'Date.prototype.setUTCSeconds',
		'Date.prototype.setYear',
		'Date.prototype.toDateString',
		'Date.prototype.toGMTString',
		'Date.prototype.toISOString',
		'Date.prototype.toJSON',
		'Date.prototype.toLocaleDateString',
		'Date.prototype.toLocaleFormat',
		'Date.prototype.toLocaleString',
		'Date.prototype.toLocaleTimeString',
		'Date.prototype.toSource',
		'Date.prototype.toString',
		'Date.prototype.toTimeString',
		'Date.prototype.toUTCString',
		'Date.prototype.valueOf',
		// Object
		'Object.assign',
		'Object.create',
		'Object.defineProperties',
		'Object.defineProperty',
		'Object.freeze',
		'Object.getOwnPropertyDescriptor',
		'Object.getOwnPropertyNames',
		'Object.getOwnPropertySymbols',
		'Object.getPrototypeOf',
		'Object.is',
		'Object.isExtensible',
		'Object.isFrozen',
		'Object.isSealed',
		'Object.keys',
		'Object.preventExtensions',
		'Object.prototype.hasOwnProperty',
		'Object.prototype.isPrototypeOf',
		'Object.prototype.propertyIsEnumerable',
		'Object.prototype.toLocaleString',
		'Object.prototype.toSource',
		'Object.prototype.toString',
		'Object.prototype.unwatch',
		'Object.prototype.valueOf',
		'Object.prototype.watch',
		'Object.seal',
		'Object.setPrototypeOf',
	
		// Array
		'Array.from',
		'Array.isArray',
		'Array.of',
		'Array.prototype.concat',
		'Array.prototype.copyWithin',
		'Array.prototype.entries',
		'Array.prototype.every',
		'Array.prototype.fill',
		'Array.prototype.filter',
		'Array.prototype.find',
		'Array.prototype.findIndex',
		'Array.prototype.forEach',
		'Array.prototype.includes',
		'Array.prototype.indexOf',
		'Array.prototype.join',
		'Array.prototype.keys',
		'Array.prototype.lastIndexOf',
		'Array.prototype.map',
		'Array.prototype.pop',
		'Array.prototype.push',
		'Array.prototype.reduce',
		'Array.prototype.reduceRight',
		'Array.prototype.reverse',
		'Array.prototype.shift',
		'Array.prototype.slice',
		'Array.prototype.some',
		'Array.prototype.sort',
		'Array.prototype.splice',
		'Array.prototype.toLocaleString',
		'Array.prototype.toSource',
		'Array.prototype.toString',
		'Array.prototype.unshift',
		'Array.prototype.values',
	
		// Function
		'Function.prototype.apply',
		'Function.prototype.bind',
		'Function.prototype.call',
		'Function.prototype.isGenerator',
		'Function.prototype.toSource',
		'Function.prototype.toString',
	
		// JSON
		'JSON.parse',
		'JSON.stringify',
	
		// Number
		'Number.isNaN',
		'Number.isFinite',
		'Number.isInteger',
		'Number.isSafeInteger',
		'Number.parseFloat',
		'Number.parseInt',
	
		// Math
		'Math.abs',
		'Math.acos',
		'Math.acosh',
		'Math.asin',
		'Math.asinh',
		'Math.atan',
		'Math.atan2',
		'Math.atanh',
		'Math.cbrt',
		'Math.ceil',
		'Math.clz32',
		'Math.cos',
		'Math.cosh',
		'Math.exp',
		'Math.expm1',
		'Math.floor',
		'Math.fround',
		'Math.hypot',
		'Math.imul',
		'Math.log',
		'Math.log10',
		'Math.log1p',
		'Math.log2',
		'Math.max',
		'Math.min',
		'Math.pow',
		'Math.random',
		'Math.round',
		'Math.sign',
		'Math.sin',
		'Math.sinh',
		'Math.sqrt',
		'Math.tan',
		'Math.tanh',
		'Math.trunc',
	
		// Misc
		'isNaN',
		'isFinite',
		'eval',
		'parseFloat',
		'parseInt',
		'uneval'
	
	];
	
	var nativeFns = null;
	var globalScope = (function() { return this; })();
	
	/**
	 * Returns undefined if the value isn't present in the global scope.
	 */
	function findGlobalVal(name) {
		var parts = name.split('.');
		//console.log('parts', parts);
		return parts.reduce(function(target, part) {
			//console.log('target', target, 'part', part);
			if(target === undefined) return target;
			return target[part];
		}, globalScope);
	}
	
	function createNativeFnList() {
		return nativeFnNames.map(function(name) {
			return {
				name: name,
				value: findGlobalVal(name)
			};
		});
	}
	
	function findNativeFnName(fn) {
		for(var i = 0; i < nativeFns.length; i++) {
			var item = nativeFns[i];
			if(item.value === fn) return item.name;
		}
	}
	
	function fnToStr(fn) {
		var str = fn.toString();
		if(isNativeFn(fn)) {
			if(nativeFns === null) {
				// lazily initialize...
				nativeFns = createNativeFnList();
			}
			var converted = findNativeFnName(fn);
			// In some cases, the native function won't be a standard built-in.
			// For these situations, I think I'd rather have the user know what is
			// going on than silently fail.
			if(!converted) {
				throw new Error('Serialization for native function not supported.');
			}
			return converted;
		}
		return str;
	}
	function isNativeFn(fn) {
		return (/function [A-z_]+\(\) { \[native code\] }/).test(fn);
	}
	module.exports = fnToStr;
	module.exports.isNativeFn = isNativeFn;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	var createUniformWrapper   = __webpack_require__(57)
	var createAttributeWrapper = __webpack_require__(60)
	var makeReflect            = __webpack_require__(58)
	var shaderCache            = __webpack_require__(61)
	var runtime                = __webpack_require__(81)
	var GLError                = __webpack_require__(59)
	
	//Shader object
	function Shader(gl) {
	  this.gl         = gl
	  this.gl.lastAttribCount = 0  // fixme where else should we store info, safe but not nice on the gl object
	
	  //Default initialize these to null
	  this._vref      =
	  this._fref      =
	  this._relink    =
	  this.vertShader =
	  this.fragShader =
	  this.program    =
	  this.attributes =
	  this.uniforms   =
	  this.types      = null
	}
	
	var proto = Shader.prototype
	
	proto.bind = function() {
	  if(!this.program) {
	    this._relink()
	  }
	
	  // ensuring that we have the right number of enabled vertex attributes
	  var i
	  var newAttribCount = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES) // more robust approach
	  //var newAttribCount = Object.keys(this.attributes).length // avoids the probably immaterial introspection slowdown
	  var oldAttribCount = this.gl.lastAttribCount
	  if(newAttribCount > oldAttribCount) {
	    for(i = oldAttribCount; i < newAttribCount; i++) {
	      this.gl.enableVertexAttribArray(i)
	    }
	  } else if(oldAttribCount > newAttribCount) {
	    for(i = newAttribCount; i < oldAttribCount; i++) {
	      this.gl.disableVertexAttribArray(i)
	    }
	  }
	
	  this.gl.lastAttribCount = newAttribCount
	
	  this.gl.useProgram(this.program)
	}
	
	proto.dispose = function() {
	
	  // disabling vertex attributes so new shader starts with zero
	  // and it's also useful if all shaders are disposed but the
	  // gl context is reused for subsequent replotting
	  var oldAttribCount = this.gl.lastAttribCount
	  for (var i = 0; i < oldAttribCount; i++) {
	    this.gl.disableVertexAttribArray(i)
	  }
	  this.gl.lastAttribCount = 0
	
	  if(this._fref) {
	    this._fref.dispose()
	  }
	  if(this._vref) {
	    this._vref.dispose()
	  }
	  this.attributes =
	  this.types      =
	  this.vertShader =
	  this.fragShader =
	  this.program    =
	  this._relink    =
	  this._fref      =
	  this._vref      = null
	}
	
	function compareAttributes(a, b) {
	  if(a.name < b.name) {
	    return -1
	  }
	  return 1
	}
	
	//Update export hook for glslify-live
	proto.update = function(
	    vertSource
	  , fragSource
	  , uniforms
	  , attributes) {
	
	  //If only one object passed, assume glslify style output
	  if(!fragSource || arguments.length === 1) {
	    var obj = vertSource
	    vertSource = obj.vertex
	    fragSource = obj.fragment
	    uniforms   = obj.uniforms
	    attributes = obj.attributes
	  }
	
	  var wrapper = this
	  var gl      = wrapper.gl
	
	  //Compile vertex and fragment shaders
	  var pvref = wrapper._vref
	  wrapper._vref = shaderCache.shader(gl, gl.VERTEX_SHADER, vertSource)
	  if(pvref) {
	    pvref.dispose()
	  }
	  wrapper.vertShader = wrapper._vref.shader
	  var pfref = this._fref
	  wrapper._fref = shaderCache.shader(gl, gl.FRAGMENT_SHADER, fragSource)
	  if(pfref) {
	    pfref.dispose()
	  }
	  wrapper.fragShader = wrapper._fref.shader
	
	  //If uniforms/attributes is not specified, use RT reflection
	  if(!uniforms || !attributes) {
	
	    //Create initial test program
	    var testProgram = gl.createProgram()
	    gl.attachShader(testProgram, wrapper.fragShader)
	    gl.attachShader(testProgram, wrapper.vertShader)
	    gl.linkProgram(testProgram)
	    if(!gl.getProgramParameter(testProgram, gl.LINK_STATUS)) {
	      var errLog = gl.getProgramInfoLog(testProgram)
	      throw new GLError(errLog, 'Error linking program:' + errLog)
	    }
	
	    //Load data from runtime
	    uniforms   = uniforms   || runtime.uniforms(gl, testProgram)
	    attributes = attributes || runtime.attributes(gl, testProgram)
	
	    //Release test program
	    gl.deleteProgram(testProgram)
	  }
	
	  //Sort attributes lexicographically
	  // overrides undefined WebGL behavior for attribute locations
	  attributes = attributes.slice()
	  attributes.sort(compareAttributes)
	
	  //Convert attribute types, read out locations
	  var attributeUnpacked  = []
	  var attributeNames     = []
	  var attributeLocations = []
	  var i
	  for(i=0; i<attributes.length; ++i) {
	    var attr = attributes[i]
	    if(attr.type.indexOf('mat') >= 0) {
	      var size = attr.type.charAt(attr.type.length-1)|0
	      var locVector = new Array(size)
	      for(var j=0; j<size; ++j) {
	        locVector[j] = attributeLocations.length
	        attributeNames.push(attr.name + '[' + j + ']')
	        if(typeof attr.location === 'number') {
	          attributeLocations.push(attr.location + j)
	        } else if(Array.isArray(attr.location) &&
	                  attr.location.length === size &&
	                  typeof attr.location[j] === 'number') {
	          attributeLocations.push(attr.location[j]|0)
	        } else {
	          attributeLocations.push(-1)
	        }
	      }
	      attributeUnpacked.push({
	        name: attr.name,
	        type: attr.type,
	        locations: locVector
	      })
	    } else {
	      attributeUnpacked.push({
	        name: attr.name,
	        type: attr.type,
	        locations: [ attributeLocations.length ]
	      })
	      attributeNames.push(attr.name)
	      if(typeof attr.location === 'number') {
	        attributeLocations.push(attr.location|0)
	      } else {
	        attributeLocations.push(-1)
	      }
	    }
	  }
	
	  //For all unspecified attributes, assign them lexicographically min attribute
	  var curLocation = 0
	  for(i=0; i<attributeLocations.length; ++i) {
	    if(attributeLocations[i] < 0) {
	      while(attributeLocations.indexOf(curLocation) >= 0) {
	        curLocation += 1
	      }
	      attributeLocations[i] = curLocation
	    }
	  }
	
	  //Rebuild program and recompute all uniform locations
	  var uniformLocations = new Array(uniforms.length)
	  function relink() {
	    wrapper.program = shaderCache.program(
	        gl
	      , wrapper._vref
	      , wrapper._fref
	      , attributeNames
	      , attributeLocations)
	
	    for(var i=0; i<uniforms.length; ++i) {
	      uniformLocations[i] = gl.getUniformLocation(
	          wrapper.program
	        , uniforms[i].name)
	    }
	  }
	
	  //Perform initial linking, reuse program used for reflection
	  relink()
	
	  //Save relinking procedure, defer until runtime
	  wrapper._relink = relink
	
	  //Generate type info
	  wrapper.types = {
	    uniforms:   makeReflect(uniforms),
	    attributes: makeReflect(attributes)
	  }
	
	  //Generate attribute wrappers
	  wrapper.attributes = createAttributeWrapper(
	      gl
	    , wrapper
	    , attributeUnpacked
	    , attributeLocations)
	
	  //Generate uniform wrappers
	  Object.defineProperty(wrapper, 'uniforms', createUniformWrapper(
	      gl
	    , wrapper
	    , uniforms
	    , uniformLocations))
	}
	
	//Compiles and links a shader program with the given attribute and vertex list
	function createShader(
	    gl
	  , vertSource
	  , fragSource
	  , uniforms
	  , attributes) {
	
	  var shader = new Shader(gl)
	
	  shader.update(
	      vertSource
	    , fragSource
	    , uniforms
	    , attributes)
	
	  return shader
	}
	
	module.exports = createShader


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	var coallesceUniforms = __webpack_require__(58)
	var GLError = __webpack_require__(59)
	
	module.exports = createUniformWrapper
	
	//Binds a function and returns a value
	function identity(x) {
	  var c = new Function('y', 'return function(){return y}')
	  return c(x)
	}
	
	function makeVector(length, fill) {
	  var result = new Array(length)
	  for(var i=0; i<length; ++i) {
	    result[i] = fill
	  }
	  return result
	}
	
	//Create shims for uniforms
	function createUniformWrapper(gl, wrapper, uniforms, locations) {
	
	  function makeGetter(index) {
	    var proc = new Function(
	        'gl'
	      , 'wrapper'
	      , 'locations'
	      , 'return function(){return gl.getUniform(wrapper.program,locations[' + index + '])}')
	    return proc(gl, wrapper, locations)
	  }
	
	  function makePropSetter(path, index, type) {
	    switch(type) {
	      case 'bool':
	      case 'int':
	      case 'sampler2D':
	      case 'samplerCube':
	        return 'gl.uniform1i(locations[' + index + '],obj' + path + ')'
	      case 'float':
	        return 'gl.uniform1f(locations[' + index + '],obj' + path + ')'
	      default:
	        var vidx = type.indexOf('vec')
	        if(0 <= vidx && vidx <= 1 && type.length === 4 + vidx) {
	          var d = type.charCodeAt(type.length-1) - 48
	          if(d < 2 || d > 4) {
	            throw new GLError('', 'Invalid data type')
	          }
	          switch(type.charAt(0)) {
	            case 'b':
	            case 'i':
	              return 'gl.uniform' + d + 'iv(locations[' + index + '],obj' + path + ')'
	            case 'v':
	              return 'gl.uniform' + d + 'fv(locations[' + index + '],obj' + path + ')'
	            default:
	              throw new GLError('', 'Unrecognized data type for vector ' + name + ': ' + type)
	          }
	        } else if(type.indexOf('mat') === 0 && type.length === 4) {
	          var d = type.charCodeAt(type.length-1) - 48
	          if(d < 2 || d > 4) {
	            throw new GLError('', 'Invalid uniform dimension type for matrix ' + name + ': ' + type)
	          }
	          return 'gl.uniformMatrix' + d + 'fv(locations[' + index + '],false,obj' + path + ')'
	        } else {
	          throw new GLError('', 'Unknown uniform data type for ' + name + ': ' + type)
	        }
	      break
	    }
	  }
	
	  function enumerateIndices(prefix, type) {
	    if(typeof type !== 'object') {
	      return [ [prefix, type] ]
	    }
	    var indices = []
	    for(var id in type) {
	      var prop = type[id]
	      var tprefix = prefix
	      if(parseInt(id) + '' === id) {
	        tprefix += '[' + id + ']'
	      } else {
	        tprefix += '.' + id
	      }
	      if(typeof prop === 'object') {
	        indices.push.apply(indices, enumerateIndices(tprefix, prop))
	      } else {
	        indices.push([tprefix, prop])
	      }
	    }
	    return indices
	  }
	
	  function makeSetter(type) {
	    var code = [ 'return function updateProperty(obj){' ]
	    var indices = enumerateIndices('', type)
	    for(var i=0; i<indices.length; ++i) {
	      var item = indices[i]
	      var path = item[0]
	      var idx  = item[1]
	      if(locations[idx]) {
	        code.push(makePropSetter(path, idx, uniforms[idx].type))
	      }
	    }
	    code.push('return obj}')
	    var proc = new Function('gl', 'locations', code.join('\n'))
	    return proc(gl, locations)
	  }
	
	  function defaultValue(type) {
	    switch(type) {
	      case 'bool':
	        return false
	      case 'int':
	      case 'sampler2D':
	      case 'samplerCube':
	        return 0
	      case 'float':
	        return 0.0
	      default:
	        var vidx = type.indexOf('vec')
	        if(0 <= vidx && vidx <= 1 && type.length === 4 + vidx) {
	          var d = type.charCodeAt(type.length-1) - 48
	          if(d < 2 || d > 4) {
	            throw new GLError('', 'Invalid data type')
	          }
	          if(type.charAt(0) === 'b') {
	            return makeVector(d, false)
	          }
	          return makeVector(d, 0)
	        } else if(type.indexOf('mat') === 0 && type.length === 4) {
	          var d = type.charCodeAt(type.length-1) - 48
	          if(d < 2 || d > 4) {
	            throw new GLError('', 'Invalid uniform dimension type for matrix ' + name + ': ' + type)
	          }
	          return makeVector(d*d, 0)
	        } else {
	          throw new GLError('', 'Unknown uniform data type for ' + name + ': ' + type)
	        }
	      break
	    }
	  }
	
	  function storeProperty(obj, prop, type) {
	    if(typeof type === 'object') {
	      var child = processObject(type)
	      Object.defineProperty(obj, prop, {
	        get: identity(child),
	        set: makeSetter(type),
	        enumerable: true,
	        configurable: false
	      })
	    } else {
	      if(locations[type]) {
	        Object.defineProperty(obj, prop, {
	          get: makeGetter(type),
	          set: makeSetter(type),
	          enumerable: true,
	          configurable: false
	        })
	      } else {
	        obj[prop] = defaultValue(uniforms[type].type)
	      }
	    }
	  }
	
	  function processObject(obj) {
	    var result
	    if(Array.isArray(obj)) {
	      result = new Array(obj.length)
	      for(var i=0; i<obj.length; ++i) {
	        storeProperty(result, i, obj[i])
	      }
	    } else {
	      result = {}
	      for(var id in obj) {
	        storeProperty(result, id, obj[id])
	      }
	    }
	    return result
	  }
	
	  //Return data
	  var coallesced = coallesceUniforms(uniforms, true)
	  return {
	    get: identity(processObject(coallesced)),
	    set: makeSetter(coallesced),
	    enumerable: true,
	    configurable: true
	  }
	}


/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict'
	
	module.exports = makeReflectTypes
	
	//Construct type info for reflection.
	//
	// This iterates over the flattened list of uniform type values and smashes them into a JSON object.
	//
	// The leaves of the resulting object are either indices or type strings representing primitive glslify types
	function makeReflectTypes(uniforms, useIndex) {
	  var obj = {}
	  for(var i=0; i<uniforms.length; ++i) {
	    var n = uniforms[i].name
	    var parts = n.split(".")
	    var o = obj
	    for(var j=0; j<parts.length; ++j) {
	      var x = parts[j].split("[")
	      if(x.length > 1) {
	        if(!(x[0] in o)) {
	          o[x[0]] = []
	        }
	        o = o[x[0]]
	        for(var k=1; k<x.length; ++k) {
	          var y = parseInt(x[k])
	          if(k<x.length-1 || j<parts.length-1) {
	            if(!(y in o)) {
	              if(k < x.length-1) {
	                o[y] = []
	              } else {
	                o[y] = {}
	              }
	            }
	            o = o[y]
	          } else {
	            if(useIndex) {
	              o[y] = i
	            } else {
	              o[y] = uniforms[i].type
	            }
	          }
	        }
	      } else if(j < parts.length-1) {
	        if(!(x[0] in o)) {
	          o[x[0]] = {}
	        }
	        o = o[x[0]]
	      } else {
	        if(useIndex) {
	          o[x[0]] = i
	        } else {
	          o[x[0]] = uniforms[i].type
	        }
	      }
	    }
	  }
	  return obj
	}

/***/ },
/* 59 */
/***/ function(module, exports) {

	function GLError (rawError, shortMessage, longMessage) {
	    this.shortMessage = shortMessage || ''
	    this.longMessage = longMessage || ''
	    this.rawError = rawError || ''
	    this.message =
	      'gl-shader: ' + (shortMessage || rawError || '') +
	      (longMessage ? '\n'+longMessage : '')
	    this.stack = (new Error()).stack
	}
	GLError.prototype = new Error
	GLError.prototype.name = 'GLError'
	GLError.prototype.constructor = GLError
	module.exports = GLError


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	module.exports = createAttributeWrapper
	
	var GLError = __webpack_require__(59)
	
	function ShaderAttribute(
	    gl
	  , wrapper
	  , index
	  , locations
	  , dimension
	  , constFunc) {
	  this._gl        = gl
	  this._wrapper   = wrapper
	  this._index     = index
	  this._locations = locations
	  this._dimension = dimension
	  this._constFunc = constFunc
	}
	
	var proto = ShaderAttribute.prototype
	
	proto.pointer = function setAttribPointer(
	    type
	  , normalized
	  , stride
	  , offset) {
	
	  var self      = this
	  var gl        = self._gl
	  var location  = self._locations[self._index]
	
	  gl.vertexAttribPointer(
	      location
	    , self._dimension
	    , type || gl.FLOAT
	    , !!normalized
	    , stride || 0
	    , offset || 0)
	  gl.enableVertexAttribArray(location)
	}
	
	proto.set = function(x0, x1, x2, x3) {
	  return this._constFunc(this._locations[this._index], x0, x1, x2, x3)
	}
	
	Object.defineProperty(proto, 'location', {
	  get: function() {
	    return this._locations[this._index]
	  }
	  , set: function(v) {
	    if(v !== this._locations[this._index]) {
	      this._locations[this._index] = v|0
	      this._wrapper.program = null
	    }
	    return v|0
	  }
	})
	
	//Adds a vector attribute to obj
	function addVectorAttribute(
	    gl
	  , wrapper
	  , index
	  , locations
	  , dimension
	  , obj
	  , name) {
	
	  //Construct constant function
	  var constFuncArgs = [ 'gl', 'v' ]
	  var varNames = []
	  for(var i=0; i<dimension; ++i) {
	    constFuncArgs.push('x'+i)
	    varNames.push('x'+i)
	  }
	  constFuncArgs.push(
	    'if(x0.length===void 0){return gl.vertexAttrib' +
	    dimension + 'f(v,' +
	    varNames.join() +
	    ')}else{return gl.vertexAttrib' +
	    dimension +
	    'fv(v,x0)}')
	  var constFunc = Function.apply(null, constFuncArgs)
	
	  //Create attribute wrapper
	  var attr = new ShaderAttribute(
	      gl
	    , wrapper
	    , index
	    , locations
	    , dimension
	    , constFunc)
	
	  //Create accessor
	  Object.defineProperty(obj, name, {
	    set: function(x) {
	      gl.disableVertexAttribArray(locations[index])
	      constFunc(gl, locations[index], x)
	      return x
	    }
	    , get: function() {
	      return attr
	    }
	    , enumerable: true
	  })
	}
	
	function addMatrixAttribute(
	    gl
	  , wrapper
	  , index
	  , locations
	  , dimension
	  , obj
	  , name) {
	
	  var parts = new Array(dimension)
	  var attrs = new Array(dimension)
	  for(var i=0; i<dimension; ++i) {
	    addVectorAttribute(
	        gl
	      , wrapper
	      , index[i]
	      , locations
	      , dimension
	      , parts
	      , i)
	    attrs[i] = parts[i]
	  }
	
	  Object.defineProperty(parts, 'location', {
	    set: function(v) {
	      if(Array.isArray(v)) {
	        for(var i=0; i<dimension; ++i) {
	          attrs[i].location = v[i]
	        }
	      } else {
	        for(var i=0; i<dimension; ++i) {
	          attrs[i].location = v + i
	        }
	      }
	      return v
	    }
	    , get: function() {
	      var result = new Array(dimension)
	      for(var i=0; i<dimension; ++i) {
	        result[i] = locations[index[i]]
	      }
	      return result
	    }
	    , enumerable: true
	  })
	
	  parts.pointer = function(type, normalized, stride, offset) {
	    type       = type || gl.FLOAT
	    normalized = !!normalized
	    stride     = stride || (dimension * dimension)
	    offset     = offset || 0
	    for(var i=0; i<dimension; ++i) {
	      var location = locations[index[i]]
	      gl.vertexAttribPointer(
	            location
	          , dimension
	          , type
	          , normalized
	          , stride
	          , offset + i * dimension)
	      gl.enableVertexAttribArray(location)
	    }
	  }
	
	  var scratch = new Array(dimension)
	  var vertexAttrib = gl['vertexAttrib' + dimension + 'fv']
	
	  Object.defineProperty(obj, name, {
	    set: function(x) {
	      for(var i=0; i<dimension; ++i) {
	        var loc = locations[index[i]]
	        gl.disableVertexAttribArray(loc)
	        if(Array.isArray(x[0])) {
	          vertexAttrib.call(gl, loc, x[i])
	        } else {
	          for(var j=0; j<dimension; ++j) {
	            scratch[j] = x[dimension*i + j]
	          }
	          vertexAttrib.call(gl, loc, scratch)
	        }
	      }
	      return x
	    }
	    , get: function() {
	      return parts
	    }
	    , enumerable: true
	  })
	}
	
	//Create shims for attributes
	function createAttributeWrapper(
	    gl
	  , wrapper
	  , attributes
	  , locations) {
	
	  var obj = {}
	  for(var i=0, n=attributes.length; i<n; ++i) {
	
	    var a = attributes[i]
	    var name = a.name
	    var type = a.type
	    var locs = a.locations
	
	    switch(type) {
	      case 'bool':
	      case 'int':
	      case 'float':
	        addVectorAttribute(
	            gl
	          , wrapper
	          , locs[0]
	          , locations
	          , 1
	          , obj
	          , name)
	      break
	
	      default:
	        if(type.indexOf('vec') >= 0) {
	          var d = type.charCodeAt(type.length-1) - 48
	          if(d < 2 || d > 4) {
	            throw new GLError('', 'Invalid data type for attribute ' + name + ': ' + type)
	          }
	          addVectorAttribute(
	              gl
	            , wrapper
	            , locs[0]
	            , locations
	            , d
	            , obj
	            , name)
	        } else if(type.indexOf('mat') >= 0) {
	          var d = type.charCodeAt(type.length-1) - 48
	          if(d < 2 || d > 4) {
	            throw new GLError('', 'Invalid data type for attribute ' + name + ': ' + type)
	          }
	          addMatrixAttribute(
	              gl
	            , wrapper
	            , locs
	            , locations
	            , d
	            , obj
	            , name)
	        } else {
	          throw new GLError('', 'Unknown data type for attribute ' + name + ': ' + type)
	        }
	      break
	    }
	  }
	  return obj
	}


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	exports.shader   = getShaderReference
	exports.program  = createProgram
	
	var GLError = __webpack_require__(59)
	var formatCompilerError = __webpack_require__(62);
	
	var weakMap = typeof WeakMap === 'undefined' ? __webpack_require__(78) : WeakMap
	var CACHE = new weakMap()
	
	var SHADER_COUNTER = 0
	
	function ShaderReference(id, src, type, shader, programs, count, cache) {
	  this.id       = id
	  this.src      = src
	  this.type     = type
	  this.shader   = shader
	  this.count    = count
	  this.programs = []
	  this.cache    = cache
	}
	
	ShaderReference.prototype.dispose = function() {
	  if(--this.count === 0) {
	    var cache    = this.cache
	    var gl       = cache.gl
	
	    //Remove program references
	    var programs = this.programs
	    for(var i=0, n=programs.length; i<n; ++i) {
	      var p = cache.programs[programs[i]]
	      if(p) {
	        delete cache.programs[i]
	        gl.deleteProgram(p)
	      }
	    }
	
	    //Remove shader reference
	    gl.deleteShader(this.shader)
	    delete cache.shaders[(this.type === gl.FRAGMENT_SHADER)|0][this.src]
	  }
	}
	
	function ContextCache(gl) {
	  this.gl       = gl
	  this.shaders  = [{}, {}]
	  this.programs = {}
	}
	
	var proto = ContextCache.prototype
	
	function compileShader(gl, type, src) {
	  var shader = gl.createShader(type)
	  gl.shaderSource(shader, src)
	  gl.compileShader(shader)
	  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	    var errLog = gl.getShaderInfoLog(shader)
	    try {
	        var fmt = formatCompilerError(errLog, src, type);
	    } catch (e){
	        console.warn('Failed to format compiler error: ' + e);
	        throw new GLError(errLog, 'Error compiling shader:\n' + errLog)
	    }
	    throw new GLError(errLog, fmt.short, fmt.long)
	  }
	  return shader
	}
	
	proto.getShaderReference = function(type, src) {
	  var gl      = this.gl
	  var shaders = this.shaders[(type === gl.FRAGMENT_SHADER)|0]
	  var shader  = shaders[src]
	  if(!shader || !gl.isShader(shader.shader)) {
	    var shaderObj = compileShader(gl, type, src)
	    shader = shaders[src] = new ShaderReference(
	      SHADER_COUNTER++,
	      src,
	      type,
	      shaderObj,
	      [],
	      1,
	      this)
	  } else {
	    shader.count += 1
	  }
	  return shader
	}
	
	function linkProgram(gl, vshader, fshader, attribs, locations) {
	  var program = gl.createProgram()
	  gl.attachShader(program, vshader)
	  gl.attachShader(program, fshader)
	  for(var i=0; i<attribs.length; ++i) {
	    gl.bindAttribLocation(program, locations[i], attribs[i])
	  }
	  gl.linkProgram(program)
	  if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
	    var errLog = gl.getProgramInfoLog(program)
	    throw new GLError(errLog, 'Error linking program: ' + errLog)
	  }
	  return program
	}
	
	proto.getProgram = function(vref, fref, attribs, locations) {
	  var token = [vref.id, fref.id, attribs.join(':'), locations.join(':')].join('@')
	  var prog  = this.programs[token]
	  if(!prog || !this.gl.isProgram(prog)) {
	    this.programs[token] = prog = linkProgram(
	      this.gl,
	      vref.shader,
	      fref.shader,
	      attribs,
	      locations)
	    vref.programs.push(token)
	    fref.programs.push(token)
	  }
	  return prog
	}
	
	function getCache(gl) {
	  var ctxCache = CACHE.get(gl)
	  if(!ctxCache) {
	    ctxCache = new ContextCache(gl)
	    CACHE.set(gl, ctxCache)
	  }
	  return ctxCache
	}
	
	function getShaderReference(gl, type, src) {
	  return getCache(gl).getShaderReference(type, src)
	}
	
	function createProgram(gl, vref, fref, attribs, locations) {
	  return getCache(gl).getProgram(vref, fref, attribs, locations)
	}


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	
	var sprintf = __webpack_require__(63).sprintf;
	var glConstants = __webpack_require__(64);
	var shaderName = __webpack_require__(66);
	var addLineNumbers = __webpack_require__(75);
	
	module.exports = formatCompilerError;
	
	function formatCompilerError(errLog, src, type) {
	    "use strict";
	
	    var name = shaderName(src) || 'of unknown name (see npm glsl-shader-name)';
	
	    var typeName = 'unknown type';
	    if (type !== undefined) {
	        typeName = type === glConstants.FRAGMENT_SHADER ? 'fragment' : 'vertex'
	    }
	
	    var longForm = sprintf('Error compiling %s shader %s:\n', typeName, name);
	    var shortForm = sprintf("%s%s", longForm, errLog);
	
	    var errorStrings = errLog.split('\n');
	    var errors = {};
	
	    for (var i = 0; i < errorStrings.length; i++) {
	        var errorString = errorStrings[i];
	        if (errorString === '') continue;
	        var lineNo = parseInt(errorString.split(':')[2]);
	        if (isNaN(lineNo)) {
	            throw new Error(sprintf('Could not parse error: %s', errorString));
	        }
	        errors[lineNo] = errorString;
	    }
	
	    var lines = addLineNumbers(src).split('\n');
	
	    for (var i = 0; i < lines.length; i++) {
	        if (!errors[i+3] && !errors[i+2] && !errors[i+1]) continue;
	        var line = lines[i];
	        longForm += line + '\n';
	        if (errors[i+1]) {
	            var e = errors[i+1];
	            e = e.substr(e.split(':', 3).join(':').length + 1).trim();
	            longForm += sprintf('^^^ %s\n\n', e);
	        }
	    }
	
	    return {
	        long: longForm.trim(),
	        short: shortForm.trim()
	    };
	}
	


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	(function(window) {
	    var re = {
	        not_string: /[^s]/,
	        number: /[diefg]/,
	        json: /[j]/,
	        not_json: /[^j]/,
	        text: /^[^\x25]+/,
	        modulo: /^\x25{2}/,
	        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,
	        key: /^([a-z_][a-z_\d]*)/i,
	        key_access: /^\.([a-z_][a-z_\d]*)/i,
	        index_access: /^\[(\d+)\]/,
	        sign: /^[\+\-]/
	    }
	
	    function sprintf() {
	        var key = arguments[0], cache = sprintf.cache
	        if (!(cache[key] && cache.hasOwnProperty(key))) {
	            cache[key] = sprintf.parse(key)
	        }
	        return sprintf.format.call(null, cache[key], arguments)
	    }
	
	    sprintf.format = function(parse_tree, argv) {
	        var cursor = 1, tree_length = parse_tree.length, node_type = "", arg, output = [], i, k, match, pad, pad_character, pad_length, is_positive = true, sign = ""
	        for (i = 0; i < tree_length; i++) {
	            node_type = get_type(parse_tree[i])
	            if (node_type === "string") {
	                output[output.length] = parse_tree[i]
	            }
	            else if (node_type === "array") {
	                match = parse_tree[i] // convenience purposes only
	                if (match[2]) { // keyword argument
	                    arg = argv[cursor]
	                    for (k = 0; k < match[2].length; k++) {
	                        if (!arg.hasOwnProperty(match[2][k])) {
	                            throw new Error(sprintf("[sprintf] property '%s' does not exist", match[2][k]))
	                        }
	                        arg = arg[match[2][k]]
	                    }
	                }
	                else if (match[1]) { // positional argument (explicit)
	                    arg = argv[match[1]]
	                }
	                else { // positional argument (implicit)
	                    arg = argv[cursor++]
	                }
	
	                if (get_type(arg) == "function") {
	                    arg = arg()
	                }
	
	                if (re.not_string.test(match[8]) && re.not_json.test(match[8]) && (get_type(arg) != "number" && isNaN(arg))) {
	                    throw new TypeError(sprintf("[sprintf] expecting number but found %s", get_type(arg)))
	                }
	
	                if (re.number.test(match[8])) {
	                    is_positive = arg >= 0
	                }
	
	                switch (match[8]) {
	                    case "b":
	                        arg = arg.toString(2)
	                    break
	                    case "c":
	                        arg = String.fromCharCode(arg)
	                    break
	                    case "d":
	                    case "i":
	                        arg = parseInt(arg, 10)
	                    break
	                    case "j":
	                        arg = JSON.stringify(arg, null, match[6] ? parseInt(match[6]) : 0)
	                    break
	                    case "e":
	                        arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential()
	                    break
	                    case "f":
	                        arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg)
	                    break
	                    case "g":
	                        arg = match[7] ? parseFloat(arg).toPrecision(match[7]) : parseFloat(arg)
	                    break
	                    case "o":
	                        arg = arg.toString(8)
	                    break
	                    case "s":
	                        arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg)
	                    break
	                    case "u":
	                        arg = arg >>> 0
	                    break
	                    case "x":
	                        arg = arg.toString(16)
	                    break
	                    case "X":
	                        arg = arg.toString(16).toUpperCase()
	                    break
	                }
	                if (re.json.test(match[8])) {
	                    output[output.length] = arg
	                }
	                else {
	                    if (re.number.test(match[8]) && (!is_positive || match[3])) {
	                        sign = is_positive ? "+" : "-"
	                        arg = arg.toString().replace(re.sign, "")
	                    }
	                    else {
	                        sign = ""
	                    }
	                    pad_character = match[4] ? match[4] === "0" ? "0" : match[4].charAt(1) : " "
	                    pad_length = match[6] - (sign + arg).length
	                    pad = match[6] ? (pad_length > 0 ? str_repeat(pad_character, pad_length) : "") : ""
	                    output[output.length] = match[5] ? sign + arg + pad : (pad_character === "0" ? sign + pad + arg : pad + sign + arg)
	                }
	            }
	        }
	        return output.join("")
	    }
	
	    sprintf.cache = {}
	
	    sprintf.parse = function(fmt) {
	        var _fmt = fmt, match = [], parse_tree = [], arg_names = 0
	        while (_fmt) {
	            if ((match = re.text.exec(_fmt)) !== null) {
	                parse_tree[parse_tree.length] = match[0]
	            }
	            else if ((match = re.modulo.exec(_fmt)) !== null) {
	                parse_tree[parse_tree.length] = "%"
	            }
	            else if ((match = re.placeholder.exec(_fmt)) !== null) {
	                if (match[2]) {
	                    arg_names |= 1
	                    var field_list = [], replacement_field = match[2], field_match = []
	                    if ((field_match = re.key.exec(replacement_field)) !== null) {
	                        field_list[field_list.length] = field_match[1]
	                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== "") {
	                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
	                                field_list[field_list.length] = field_match[1]
	                            }
	                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
	                                field_list[field_list.length] = field_match[1]
	                            }
	                            else {
	                                throw new SyntaxError("[sprintf] failed to parse named argument key")
	                            }
	                        }
	                    }
	                    else {
	                        throw new SyntaxError("[sprintf] failed to parse named argument key")
	                    }
	                    match[2] = field_list
	                }
	                else {
	                    arg_names |= 2
	                }
	                if (arg_names === 3) {
	                    throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported")
	                }
	                parse_tree[parse_tree.length] = match
	            }
	            else {
	                throw new SyntaxError("[sprintf] unexpected placeholder")
	            }
	            _fmt = _fmt.substring(match[0].length)
	        }
	        return parse_tree
	    }
	
	    var vsprintf = function(fmt, argv, _argv) {
	        _argv = (argv || []).slice(0)
	        _argv.splice(0, 0, fmt)
	        return sprintf.apply(null, _argv)
	    }
	
	    /**
	     * helpers
	     */
	    function get_type(variable) {
	        return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase()
	    }
	
	    function str_repeat(input, multiplier) {
	        return Array(multiplier + 1).join(input)
	    }
	
	    /**
	     * export to either browser or node.js
	     */
	    if (true) {
	        exports.sprintf = sprintf
	        exports.vsprintf = vsprintf
	    }
	    else {
	        window.sprintf = sprintf
	        window.vsprintf = vsprintf
	
	        if (typeof define === "function" && define.amd) {
	            define(function() {
	                return {
	                    sprintf: sprintf,
	                    vsprintf: vsprintf
	                }
	            })
	        }
	    }
	})(typeof window === "undefined" ? this : window);


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var gl10 = __webpack_require__(65)
	
	module.exports = function lookupConstant (number) {
	  return gl10[number]
	}


/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = {
	  0: 'NONE',
	  1: 'ONE',
	  2: 'LINE_LOOP',
	  3: 'LINE_STRIP',
	  4: 'TRIANGLES',
	  5: 'TRIANGLE_STRIP',
	  6: 'TRIANGLE_FAN',
	  256: 'DEPTH_BUFFER_BIT',
	  512: 'NEVER',
	  513: 'LESS',
	  514: 'EQUAL',
	  515: 'LEQUAL',
	  516: 'GREATER',
	  517: 'NOTEQUAL',
	  518: 'GEQUAL',
	  519: 'ALWAYS',
	  768: 'SRC_COLOR',
	  769: 'ONE_MINUS_SRC_COLOR',
	  770: 'SRC_ALPHA',
	  771: 'ONE_MINUS_SRC_ALPHA',
	  772: 'DST_ALPHA',
	  773: 'ONE_MINUS_DST_ALPHA',
	  774: 'DST_COLOR',
	  775: 'ONE_MINUS_DST_COLOR',
	  776: 'SRC_ALPHA_SATURATE',
	  1024: 'STENCIL_BUFFER_BIT',
	  1028: 'FRONT',
	  1029: 'BACK',
	  1032: 'FRONT_AND_BACK',
	  1280: 'INVALID_ENUM',
	  1281: 'INVALID_VALUE',
	  1282: 'INVALID_OPERATION',
	  1285: 'OUT_OF_MEMORY',
	  1286: 'INVALID_FRAMEBUFFER_OPERATION',
	  2304: 'CW',
	  2305: 'CCW',
	  2849: 'LINE_WIDTH',
	  2884: 'CULL_FACE',
	  2885: 'CULL_FACE_MODE',
	  2886: 'FRONT_FACE',
	  2928: 'DEPTH_RANGE',
	  2929: 'DEPTH_TEST',
	  2930: 'DEPTH_WRITEMASK',
	  2931: 'DEPTH_CLEAR_VALUE',
	  2932: 'DEPTH_FUNC',
	  2960: 'STENCIL_TEST',
	  2961: 'STENCIL_CLEAR_VALUE',
	  2962: 'STENCIL_FUNC',
	  2963: 'STENCIL_VALUE_MASK',
	  2964: 'STENCIL_FAIL',
	  2965: 'STENCIL_PASS_DEPTH_FAIL',
	  2966: 'STENCIL_PASS_DEPTH_PASS',
	  2967: 'STENCIL_REF',
	  2968: 'STENCIL_WRITEMASK',
	  2978: 'VIEWPORT',
	  3024: 'DITHER',
	  3042: 'BLEND',
	  3088: 'SCISSOR_BOX',
	  3089: 'SCISSOR_TEST',
	  3106: 'COLOR_CLEAR_VALUE',
	  3107: 'COLOR_WRITEMASK',
	  3317: 'UNPACK_ALIGNMENT',
	  3333: 'PACK_ALIGNMENT',
	  3379: 'MAX_TEXTURE_SIZE',
	  3386: 'MAX_VIEWPORT_DIMS',
	  3408: 'SUBPIXEL_BITS',
	  3410: 'RED_BITS',
	  3411: 'GREEN_BITS',
	  3412: 'BLUE_BITS',
	  3413: 'ALPHA_BITS',
	  3414: 'DEPTH_BITS',
	  3415: 'STENCIL_BITS',
	  3553: 'TEXTURE_2D',
	  4352: 'DONT_CARE',
	  4353: 'FASTEST',
	  4354: 'NICEST',
	  5120: 'BYTE',
	  5121: 'UNSIGNED_BYTE',
	  5122: 'SHORT',
	  5123: 'UNSIGNED_SHORT',
	  5124: 'INT',
	  5125: 'UNSIGNED_INT',
	  5126: 'FLOAT',
	  5386: 'INVERT',
	  5890: 'TEXTURE',
	  6401: 'STENCIL_INDEX',
	  6402: 'DEPTH_COMPONENT',
	  6406: 'ALPHA',
	  6407: 'RGB',
	  6408: 'RGBA',
	  6409: 'LUMINANCE',
	  6410: 'LUMINANCE_ALPHA',
	  7680: 'KEEP',
	  7681: 'REPLACE',
	  7682: 'INCR',
	  7683: 'DECR',
	  7936: 'VENDOR',
	  7937: 'RENDERER',
	  7938: 'VERSION',
	  9728: 'NEAREST',
	  9729: 'LINEAR',
	  9984: 'NEAREST_MIPMAP_NEAREST',
	  9985: 'LINEAR_MIPMAP_NEAREST',
	  9986: 'NEAREST_MIPMAP_LINEAR',
	  9987: 'LINEAR_MIPMAP_LINEAR',
	  10240: 'TEXTURE_MAG_FILTER',
	  10241: 'TEXTURE_MIN_FILTER',
	  10242: 'TEXTURE_WRAP_S',
	  10243: 'TEXTURE_WRAP_T',
	  10497: 'REPEAT',
	  10752: 'POLYGON_OFFSET_UNITS',
	  16384: 'COLOR_BUFFER_BIT',
	  32769: 'CONSTANT_COLOR',
	  32770: 'ONE_MINUS_CONSTANT_COLOR',
	  32771: 'CONSTANT_ALPHA',
	  32772: 'ONE_MINUS_CONSTANT_ALPHA',
	  32773: 'BLEND_COLOR',
	  32774: 'FUNC_ADD',
	  32777: 'BLEND_EQUATION_RGB',
	  32778: 'FUNC_SUBTRACT',
	  32779: 'FUNC_REVERSE_SUBTRACT',
	  32819: 'UNSIGNED_SHORT_4_4_4_4',
	  32820: 'UNSIGNED_SHORT_5_5_5_1',
	  32823: 'POLYGON_OFFSET_FILL',
	  32824: 'POLYGON_OFFSET_FACTOR',
	  32854: 'RGBA4',
	  32855: 'RGB5_A1',
	  32873: 'TEXTURE_BINDING_2D',
	  32926: 'SAMPLE_ALPHA_TO_COVERAGE',
	  32928: 'SAMPLE_COVERAGE',
	  32936: 'SAMPLE_BUFFERS',
	  32937: 'SAMPLES',
	  32938: 'SAMPLE_COVERAGE_VALUE',
	  32939: 'SAMPLE_COVERAGE_INVERT',
	  32968: 'BLEND_DST_RGB',
	  32969: 'BLEND_SRC_RGB',
	  32970: 'BLEND_DST_ALPHA',
	  32971: 'BLEND_SRC_ALPHA',
	  33071: 'CLAMP_TO_EDGE',
	  33170: 'GENERATE_MIPMAP_HINT',
	  33189: 'DEPTH_COMPONENT16',
	  33306: 'DEPTH_STENCIL_ATTACHMENT',
	  33635: 'UNSIGNED_SHORT_5_6_5',
	  33648: 'MIRRORED_REPEAT',
	  33901: 'ALIASED_POINT_SIZE_RANGE',
	  33902: 'ALIASED_LINE_WIDTH_RANGE',
	  33984: 'TEXTURE0',
	  33985: 'TEXTURE1',
	  33986: 'TEXTURE2',
	  33987: 'TEXTURE3',
	  33988: 'TEXTURE4',
	  33989: 'TEXTURE5',
	  33990: 'TEXTURE6',
	  33991: 'TEXTURE7',
	  33992: 'TEXTURE8',
	  33993: 'TEXTURE9',
	  33994: 'TEXTURE10',
	  33995: 'TEXTURE11',
	  33996: 'TEXTURE12',
	  33997: 'TEXTURE13',
	  33998: 'TEXTURE14',
	  33999: 'TEXTURE15',
	  34000: 'TEXTURE16',
	  34001: 'TEXTURE17',
	  34002: 'TEXTURE18',
	  34003: 'TEXTURE19',
	  34004: 'TEXTURE20',
	  34005: 'TEXTURE21',
	  34006: 'TEXTURE22',
	  34007: 'TEXTURE23',
	  34008: 'TEXTURE24',
	  34009: 'TEXTURE25',
	  34010: 'TEXTURE26',
	  34011: 'TEXTURE27',
	  34012: 'TEXTURE28',
	  34013: 'TEXTURE29',
	  34014: 'TEXTURE30',
	  34015: 'TEXTURE31',
	  34016: 'ACTIVE_TEXTURE',
	  34024: 'MAX_RENDERBUFFER_SIZE',
	  34041: 'DEPTH_STENCIL',
	  34055: 'INCR_WRAP',
	  34056: 'DECR_WRAP',
	  34067: 'TEXTURE_CUBE_MAP',
	  34068: 'TEXTURE_BINDING_CUBE_MAP',
	  34069: 'TEXTURE_CUBE_MAP_POSITIVE_X',
	  34070: 'TEXTURE_CUBE_MAP_NEGATIVE_X',
	  34071: 'TEXTURE_CUBE_MAP_POSITIVE_Y',
	  34072: 'TEXTURE_CUBE_MAP_NEGATIVE_Y',
	  34073: 'TEXTURE_CUBE_MAP_POSITIVE_Z',
	  34074: 'TEXTURE_CUBE_MAP_NEGATIVE_Z',
	  34076: 'MAX_CUBE_MAP_TEXTURE_SIZE',
	  34338: 'VERTEX_ATTRIB_ARRAY_ENABLED',
	  34339: 'VERTEX_ATTRIB_ARRAY_SIZE',
	  34340: 'VERTEX_ATTRIB_ARRAY_STRIDE',
	  34341: 'VERTEX_ATTRIB_ARRAY_TYPE',
	  34342: 'CURRENT_VERTEX_ATTRIB',
	  34373: 'VERTEX_ATTRIB_ARRAY_POINTER',
	  34466: 'NUM_COMPRESSED_TEXTURE_FORMATS',
	  34467: 'COMPRESSED_TEXTURE_FORMATS',
	  34660: 'BUFFER_SIZE',
	  34661: 'BUFFER_USAGE',
	  34816: 'STENCIL_BACK_FUNC',
	  34817: 'STENCIL_BACK_FAIL',
	  34818: 'STENCIL_BACK_PASS_DEPTH_FAIL',
	  34819: 'STENCIL_BACK_PASS_DEPTH_PASS',
	  34877: 'BLEND_EQUATION_ALPHA',
	  34921: 'MAX_VERTEX_ATTRIBS',
	  34922: 'VERTEX_ATTRIB_ARRAY_NORMALIZED',
	  34930: 'MAX_TEXTURE_IMAGE_UNITS',
	  34962: 'ARRAY_BUFFER',
	  34963: 'ELEMENT_ARRAY_BUFFER',
	  34964: 'ARRAY_BUFFER_BINDING',
	  34965: 'ELEMENT_ARRAY_BUFFER_BINDING',
	  34975: 'VERTEX_ATTRIB_ARRAY_BUFFER_BINDING',
	  35040: 'STREAM_DRAW',
	  35044: 'STATIC_DRAW',
	  35048: 'DYNAMIC_DRAW',
	  35632: 'FRAGMENT_SHADER',
	  35633: 'VERTEX_SHADER',
	  35660: 'MAX_VERTEX_TEXTURE_IMAGE_UNITS',
	  35661: 'MAX_COMBINED_TEXTURE_IMAGE_UNITS',
	  35663: 'SHADER_TYPE',
	  35664: 'FLOAT_VEC2',
	  35665: 'FLOAT_VEC3',
	  35666: 'FLOAT_VEC4',
	  35667: 'INT_VEC2',
	  35668: 'INT_VEC3',
	  35669: 'INT_VEC4',
	  35670: 'BOOL',
	  35671: 'BOOL_VEC2',
	  35672: 'BOOL_VEC3',
	  35673: 'BOOL_VEC4',
	  35674: 'FLOAT_MAT2',
	  35675: 'FLOAT_MAT3',
	  35676: 'FLOAT_MAT4',
	  35678: 'SAMPLER_2D',
	  35680: 'SAMPLER_CUBE',
	  35712: 'DELETE_STATUS',
	  35713: 'COMPILE_STATUS',
	  35714: 'LINK_STATUS',
	  35715: 'VALIDATE_STATUS',
	  35716: 'INFO_LOG_LENGTH',
	  35717: 'ATTACHED_SHADERS',
	  35718: 'ACTIVE_UNIFORMS',
	  35719: 'ACTIVE_UNIFORM_MAX_LENGTH',
	  35720: 'SHADER_SOURCE_LENGTH',
	  35721: 'ACTIVE_ATTRIBUTES',
	  35722: 'ACTIVE_ATTRIBUTE_MAX_LENGTH',
	  35724: 'SHADING_LANGUAGE_VERSION',
	  35725: 'CURRENT_PROGRAM',
	  36003: 'STENCIL_BACK_REF',
	  36004: 'STENCIL_BACK_VALUE_MASK',
	  36005: 'STENCIL_BACK_WRITEMASK',
	  36006: 'FRAMEBUFFER_BINDING',
	  36007: 'RENDERBUFFER_BINDING',
	  36048: 'FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE',
	  36049: 'FRAMEBUFFER_ATTACHMENT_OBJECT_NAME',
	  36050: 'FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL',
	  36051: 'FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE',
	  36053: 'FRAMEBUFFER_COMPLETE',
	  36054: 'FRAMEBUFFER_INCOMPLETE_ATTACHMENT',
	  36055: 'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT',
	  36057: 'FRAMEBUFFER_INCOMPLETE_DIMENSIONS',
	  36061: 'FRAMEBUFFER_UNSUPPORTED',
	  36064: 'COLOR_ATTACHMENT0',
	  36096: 'DEPTH_ATTACHMENT',
	  36128: 'STENCIL_ATTACHMENT',
	  36160: 'FRAMEBUFFER',
	  36161: 'RENDERBUFFER',
	  36162: 'RENDERBUFFER_WIDTH',
	  36163: 'RENDERBUFFER_HEIGHT',
	  36164: 'RENDERBUFFER_INTERNAL_FORMAT',
	  36168: 'STENCIL_INDEX8',
	  36176: 'RENDERBUFFER_RED_SIZE',
	  36177: 'RENDERBUFFER_GREEN_SIZE',
	  36178: 'RENDERBUFFER_BLUE_SIZE',
	  36179: 'RENDERBUFFER_ALPHA_SIZE',
	  36180: 'RENDERBUFFER_DEPTH_SIZE',
	  36181: 'RENDERBUFFER_STENCIL_SIZE',
	  36194: 'RGB565',
	  36336: 'LOW_FLOAT',
	  36337: 'MEDIUM_FLOAT',
	  36338: 'HIGH_FLOAT',
	  36339: 'LOW_INT',
	  36340: 'MEDIUM_INT',
	  36341: 'HIGH_INT',
	  36346: 'SHADER_COMPILER',
	  36347: 'MAX_VERTEX_UNIFORM_VECTORS',
	  36348: 'MAX_VARYING_VECTORS',
	  36349: 'MAX_FRAGMENT_UNIFORM_VECTORS',
	  37440: 'UNPACK_FLIP_Y_WEBGL',
	  37441: 'UNPACK_PREMULTIPLY_ALPHA_WEBGL',
	  37442: 'CONTEXT_LOST_WEBGL',
	  37443: 'UNPACK_COLORSPACE_CONVERSION_WEBGL',
	  37444: 'BROWSER_DEFAULT_WEBGL'
	}


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var tokenize = __webpack_require__(67)
	var atob     = __webpack_require__(74)
	
	module.exports = getName
	
	function getName(src) {
	  var tokens = Array.isArray(src)
	    ? src
	    : tokenize(src)
	
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]
	    if (token.type !== 'preprocessor') continue
	    var match = token.data.match(/\#define\s+SHADER_NAME(_B64)?\s+(.+)$/)
	    if (!match) continue
	    if (!match[2]) continue
	
	    var b64  = match[1]
	    var name = match[2]
	
	    return (b64 ? atob(name) : name).trim()
	  }
	}


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var tokenize = __webpack_require__(68)
	
	module.exports = tokenizeString
	
	function tokenizeString(str, opt) {
	  var generator = tokenize(opt)
	  var tokens = []
	
	  tokens = tokens.concat(generator(str))
	  tokens = tokens.concat(generator(null))
	
	  return tokens
	}


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = tokenize
	
	var literals100 = __webpack_require__(69)
	  , operators = __webpack_require__(70)
	  , builtins100 = __webpack_require__(71)
	  , literals300es = __webpack_require__(72)
	  , builtins300es = __webpack_require__(73)
	
	var NORMAL = 999          // <-- never emitted
	  , TOKEN = 9999          // <-- never emitted
	  , BLOCK_COMMENT = 0
	  , LINE_COMMENT = 1
	  , PREPROCESSOR = 2
	  , OPERATOR = 3
	  , INTEGER = 4
	  , FLOAT = 5
	  , IDENT = 6
	  , BUILTIN = 7
	  , KEYWORD = 8
	  , WHITESPACE = 9
	  , EOF = 10
	  , HEX = 11
	
	var map = [
	    'block-comment'
	  , 'line-comment'
	  , 'preprocessor'
	  , 'operator'
	  , 'integer'
	  , 'float'
	  , 'ident'
	  , 'builtin'
	  , 'keyword'
	  , 'whitespace'
	  , 'eof'
	  , 'integer'
	]
	
	function tokenize(opt) {
	  var i = 0
	    , total = 0
	    , mode = NORMAL
	    , c
	    , last
	    , content = []
	    , tokens = []
	    , token_idx = 0
	    , token_offs = 0
	    , line = 1
	    , col = 0
	    , start = 0
	    , isnum = false
	    , isoperator = false
	    , input = ''
	    , len
	
	  opt = opt || {}
	  var allBuiltins = builtins100
	  var allLiterals = literals100
	  if (opt.version === '300 es') {
	    allBuiltins = builtins300es
	    allLiterals = literals300es
	  }
	
	  return function(data) {
	    tokens = []
	    if (data !== null) return write(data.replace ? data.replace(/\r\n/g, '\n') : data)
	    return end()
	  }
	
	  function token(data) {
	    if (data.length) {
	      tokens.push({
	        type: map[mode]
	      , data: data
	      , position: start
	      , line: line
	      , column: col
	      })
	    }
	  }
	
	  function write(chunk) {
	    i = 0
	    input += chunk
	    len = input.length
	
	    var last
	
	    while(c = input[i], i < len) {
	      last = i
	
	      switch(mode) {
	        case BLOCK_COMMENT: i = block_comment(); break
	        case LINE_COMMENT: i = line_comment(); break
	        case PREPROCESSOR: i = preprocessor(); break
	        case OPERATOR: i = operator(); break
	        case INTEGER: i = integer(); break
	        case HEX: i = hex(); break
	        case FLOAT: i = decimal(); break
	        case TOKEN: i = readtoken(); break
	        case WHITESPACE: i = whitespace(); break
	        case NORMAL: i = normal(); break
	      }
	
	      if(last !== i) {
	        switch(input[last]) {
	          case '\n': col = 0; ++line; break
	          default: ++col; break
	        }
	      }
	    }
	
	    total += i
	    input = input.slice(i)
	    return tokens
	  }
	
	  function end(chunk) {
	    if(content.length) {
	      token(content.join(''))
	    }
	
	    mode = EOF
	    token('(eof)')
	    return tokens
	  }
	
	  function normal() {
	    content = content.length ? [] : content
	
	    if(last === '/' && c === '*') {
	      start = total + i - 1
	      mode = BLOCK_COMMENT
	      last = c
	      return i + 1
	    }
	
	    if(last === '/' && c === '/') {
	      start = total + i - 1
	      mode = LINE_COMMENT
	      last = c
	      return i + 1
	    }
	
	    if(c === '#') {
	      mode = PREPROCESSOR
	      start = total + i
	      return i
	    }
	
	    if(/\s/.test(c)) {
	      mode = WHITESPACE
	      start = total + i
	      return i
	    }
	
	    isnum = /\d/.test(c)
	    isoperator = /[^\w_]/.test(c)
	
	    start = total + i
	    mode = isnum ? INTEGER : isoperator ? OPERATOR : TOKEN
	    return i
	  }
	
	  function whitespace() {
	    if(/[^\s]/g.test(c)) {
	      token(content.join(''))
	      mode = NORMAL
	      return i
	    }
	    content.push(c)
	    last = c
	    return i + 1
	  }
	
	  function preprocessor() {
	    if((c === '\r' || c === '\n') && last !== '\\') {
	      token(content.join(''))
	      mode = NORMAL
	      return i
	    }
	    content.push(c)
	    last = c
	    return i + 1
	  }
	
	  function line_comment() {
	    return preprocessor()
	  }
	
	  function block_comment() {
	    if(c === '/' && last === '*') {
	      content.push(c)
	      token(content.join(''))
	      mode = NORMAL
	      return i + 1
	    }
	
	    content.push(c)
	    last = c
	    return i + 1
	  }
	
	  function operator() {
	    if(last === '.' && /\d/.test(c)) {
	      mode = FLOAT
	      return i
	    }
	
	    if(last === '/' && c === '*') {
	      mode = BLOCK_COMMENT
	      return i
	    }
	
	    if(last === '/' && c === '/') {
	      mode = LINE_COMMENT
	      return i
	    }
	
	    if(c === '.' && content.length) {
	      while(determine_operator(content));
	
	      mode = FLOAT
	      return i
	    }
	
	    if(c === ';' || c === ')' || c === '(') {
	      if(content.length) while(determine_operator(content));
	      token(c)
	      mode = NORMAL
	      return i + 1
	    }
	
	    var is_composite_operator = content.length === 2 && c !== '='
	    if(/[\w_\d\s]/.test(c) || is_composite_operator) {
	      while(determine_operator(content));
	      mode = NORMAL
	      return i
	    }
	
	    content.push(c)
	    last = c
	    return i + 1
	  }
	
	  function determine_operator(buf) {
	    var j = 0
	      , idx
	      , res
	
	    do {
	      idx = operators.indexOf(buf.slice(0, buf.length + j).join(''))
	      res = operators[idx]
	
	      if(idx === -1) {
	        if(j-- + buf.length > 0) continue
	        res = buf.slice(0, 1).join('')
	      }
	
	      token(res)
	
	      start += res.length
	      content = content.slice(res.length)
	      return content.length
	    } while(1)
	  }
	
	  function hex() {
	    if(/[^a-fA-F0-9]/.test(c)) {
	      token(content.join(''))
	      mode = NORMAL
	      return i
	    }
	
	    content.push(c)
	    last = c
	    return i + 1
	  }
	
	  function integer() {
	    if(c === '.') {
	      content.push(c)
	      mode = FLOAT
	      last = c
	      return i + 1
	    }
	
	    if(/[eE]/.test(c)) {
	      content.push(c)
	      mode = FLOAT
	      last = c
	      return i + 1
	    }
	
	    if(c === 'x' && content.length === 1 && content[0] === '0') {
	      mode = HEX
	      content.push(c)
	      last = c
	      return i + 1
	    }
	
	    if(/[^\d]/.test(c)) {
	      token(content.join(''))
	      mode = NORMAL
	      return i
	    }
	
	    content.push(c)
	    last = c
	    return i + 1
	  }
	
	  function decimal() {
	    if(c === 'f') {
	      content.push(c)
	      last = c
	      i += 1
	    }
	
	    if(/[eE]/.test(c)) {
	      content.push(c)
	      last = c
	      return i + 1
	    }
	
	    if (c === '-' && /[eE]/.test(last)) {
	      content.push(c)
	      last = c
	      return i + 1
	    }
	
	    if(/[^\d]/.test(c)) {
	      token(content.join(''))
	      mode = NORMAL
	      return i
	    }
	
	    content.push(c)
	    last = c
	    return i + 1
	  }
	
	  function readtoken() {
	    if(/[^\d\w_]/.test(c)) {
	      var contentstr = content.join('')
	      if(allLiterals.indexOf(contentstr) > -1) {
	        mode = KEYWORD
	      } else if(allBuiltins.indexOf(contentstr) > -1) {
	        mode = BUILTIN
	      } else {
	        mode = IDENT
	      }
	      token(content.join(''))
	      mode = NORMAL
	      return i
	    }
	    content.push(c)
	    last = c
	    return i + 1
	  }
	}


/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = [
	  // current
	    'precision'
	  , 'highp'
	  , 'mediump'
	  , 'lowp'
	  , 'attribute'
	  , 'const'
	  , 'uniform'
	  , 'varying'
	  , 'break'
	  , 'continue'
	  , 'do'
	  , 'for'
	  , 'while'
	  , 'if'
	  , 'else'
	  , 'in'
	  , 'out'
	  , 'inout'
	  , 'float'
	  , 'int'
	  , 'void'
	  , 'bool'
	  , 'true'
	  , 'false'
	  , 'discard'
	  , 'return'
	  , 'mat2'
	  , 'mat3'
	  , 'mat4'
	  , 'vec2'
	  , 'vec3'
	  , 'vec4'
	  , 'ivec2'
	  , 'ivec3'
	  , 'ivec4'
	  , 'bvec2'
	  , 'bvec3'
	  , 'bvec4'
	  , 'sampler1D'
	  , 'sampler2D'
	  , 'sampler3D'
	  , 'samplerCube'
	  , 'sampler1DShadow'
	  , 'sampler2DShadow'
	  , 'struct'
	
	  // future
	  , 'asm'
	  , 'class'
	  , 'union'
	  , 'enum'
	  , 'typedef'
	  , 'template'
	  , 'this'
	  , 'packed'
	  , 'goto'
	  , 'switch'
	  , 'default'
	  , 'inline'
	  , 'noinline'
	  , 'volatile'
	  , 'public'
	  , 'static'
	  , 'extern'
	  , 'external'
	  , 'interface'
	  , 'long'
	  , 'short'
	  , 'double'
	  , 'half'
	  , 'fixed'
	  , 'unsigned'
	  , 'input'
	  , 'output'
	  , 'hvec2'
	  , 'hvec3'
	  , 'hvec4'
	  , 'dvec2'
	  , 'dvec3'
	  , 'dvec4'
	  , 'fvec2'
	  , 'fvec3'
	  , 'fvec4'
	  , 'sampler2DRect'
	  , 'sampler3DRect'
	  , 'sampler2DRectShadow'
	  , 'sizeof'
	  , 'cast'
	  , 'namespace'
	  , 'using'
	]


/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = [
	    '<<='
	  , '>>='
	  , '++'
	  , '--'
	  , '<<'
	  , '>>'
	  , '<='
	  , '>='
	  , '=='
	  , '!='
	  , '&&'
	  , '||'
	  , '+='
	  , '-='
	  , '*='
	  , '/='
	  , '%='
	  , '&='
	  , '^^'
	  , '^='
	  , '|='
	  , '('
	  , ')'
	  , '['
	  , ']'
	  , '.'
	  , '!'
	  , '~'
	  , '*'
	  , '/'
	  , '%'
	  , '+'
	  , '-'
	  , '<'
	  , '>'
	  , '&'
	  , '^'
	  , '|'
	  , '?'
	  , ':'
	  , '='
	  , ','
	  , ';'
	  , '{'
	  , '}'
	]


/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = [
	  // Keep this list sorted
	  'abs'
	  , 'acos'
	  , 'all'
	  , 'any'
	  , 'asin'
	  , 'atan'
	  , 'ceil'
	  , 'clamp'
	  , 'cos'
	  , 'cross'
	  , 'dFdx'
	  , 'dFdy'
	  , 'degrees'
	  , 'distance'
	  , 'dot'
	  , 'equal'
	  , 'exp'
	  , 'exp2'
	  , 'faceforward'
	  , 'floor'
	  , 'fract'
	  , 'gl_BackColor'
	  , 'gl_BackLightModelProduct'
	  , 'gl_BackLightProduct'
	  , 'gl_BackMaterial'
	  , 'gl_BackSecondaryColor'
	  , 'gl_ClipPlane'
	  , 'gl_ClipVertex'
	  , 'gl_Color'
	  , 'gl_DepthRange'
	  , 'gl_DepthRangeParameters'
	  , 'gl_EyePlaneQ'
	  , 'gl_EyePlaneR'
	  , 'gl_EyePlaneS'
	  , 'gl_EyePlaneT'
	  , 'gl_Fog'
	  , 'gl_FogCoord'
	  , 'gl_FogFragCoord'
	  , 'gl_FogParameters'
	  , 'gl_FragColor'
	  , 'gl_FragCoord'
	  , 'gl_FragData'
	  , 'gl_FragDepth'
	  , 'gl_FragDepthEXT'
	  , 'gl_FrontColor'
	  , 'gl_FrontFacing'
	  , 'gl_FrontLightModelProduct'
	  , 'gl_FrontLightProduct'
	  , 'gl_FrontMaterial'
	  , 'gl_FrontSecondaryColor'
	  , 'gl_LightModel'
	  , 'gl_LightModelParameters'
	  , 'gl_LightModelProducts'
	  , 'gl_LightProducts'
	  , 'gl_LightSource'
	  , 'gl_LightSourceParameters'
	  , 'gl_MaterialParameters'
	  , 'gl_MaxClipPlanes'
	  , 'gl_MaxCombinedTextureImageUnits'
	  , 'gl_MaxDrawBuffers'
	  , 'gl_MaxFragmentUniformComponents'
	  , 'gl_MaxLights'
	  , 'gl_MaxTextureCoords'
	  , 'gl_MaxTextureImageUnits'
	  , 'gl_MaxTextureUnits'
	  , 'gl_MaxVaryingFloats'
	  , 'gl_MaxVertexAttribs'
	  , 'gl_MaxVertexTextureImageUnits'
	  , 'gl_MaxVertexUniformComponents'
	  , 'gl_ModelViewMatrix'
	  , 'gl_ModelViewMatrixInverse'
	  , 'gl_ModelViewMatrixInverseTranspose'
	  , 'gl_ModelViewMatrixTranspose'
	  , 'gl_ModelViewProjectionMatrix'
	  , 'gl_ModelViewProjectionMatrixInverse'
	  , 'gl_ModelViewProjectionMatrixInverseTranspose'
	  , 'gl_ModelViewProjectionMatrixTranspose'
	  , 'gl_MultiTexCoord0'
	  , 'gl_MultiTexCoord1'
	  , 'gl_MultiTexCoord2'
	  , 'gl_MultiTexCoord3'
	  , 'gl_MultiTexCoord4'
	  , 'gl_MultiTexCoord5'
	  , 'gl_MultiTexCoord6'
	  , 'gl_MultiTexCoord7'
	  , 'gl_Normal'
	  , 'gl_NormalMatrix'
	  , 'gl_NormalScale'
	  , 'gl_ObjectPlaneQ'
	  , 'gl_ObjectPlaneR'
	  , 'gl_ObjectPlaneS'
	  , 'gl_ObjectPlaneT'
	  , 'gl_Point'
	  , 'gl_PointCoord'
	  , 'gl_PointParameters'
	  , 'gl_PointSize'
	  , 'gl_Position'
	  , 'gl_ProjectionMatrix'
	  , 'gl_ProjectionMatrixInverse'
	  , 'gl_ProjectionMatrixInverseTranspose'
	  , 'gl_ProjectionMatrixTranspose'
	  , 'gl_SecondaryColor'
	  , 'gl_TexCoord'
	  , 'gl_TextureEnvColor'
	  , 'gl_TextureMatrix'
	  , 'gl_TextureMatrixInverse'
	  , 'gl_TextureMatrixInverseTranspose'
	  , 'gl_TextureMatrixTranspose'
	  , 'gl_Vertex'
	  , 'greaterThan'
	  , 'greaterThanEqual'
	  , 'inversesqrt'
	  , 'length'
	  , 'lessThan'
	  , 'lessThanEqual'
	  , 'log'
	  , 'log2'
	  , 'matrixCompMult'
	  , 'max'
	  , 'min'
	  , 'mix'
	  , 'mod'
	  , 'normalize'
	  , 'not'
	  , 'notEqual'
	  , 'pow'
	  , 'radians'
	  , 'reflect'
	  , 'refract'
	  , 'sign'
	  , 'sin'
	  , 'smoothstep'
	  , 'sqrt'
	  , 'step'
	  , 'tan'
	  , 'texture2D'
	  , 'texture2DLod'
	  , 'texture2DProj'
	  , 'texture2DProjLod'
	  , 'textureCube'
	  , 'textureCubeLod'
	  , 'texture2DLodEXT'
	  , 'texture2DProjLodEXT'
	  , 'textureCubeLodEXT'
	  , 'texture2DGradEXT'
	  , 'texture2DProjGradEXT'
	  , 'textureCubeGradEXT'
	]


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var v100 = __webpack_require__(69)
	
	module.exports = v100.slice().concat([
	   'layout'
	  , 'centroid'
	  , 'smooth'
	  , 'case'
	  , 'mat2x2'
	  , 'mat2x3'
	  , 'mat2x4'
	  , 'mat3x2'
	  , 'mat3x3'
	  , 'mat3x4'
	  , 'mat4x2'
	  , 'mat4x3'
	  , 'mat4x4'
	  , 'uint'
	  , 'uvec2'
	  , 'uvec3'
	  , 'uvec4'
	  , 'samplerCubeShadow'
	  , 'sampler2DArray'
	  , 'sampler2DArrayShadow'
	  , 'isampler2D'
	  , 'isampler3D'
	  , 'isamplerCube'
	  , 'isampler2DArray'
	  , 'usampler2D'
	  , 'usampler3D'
	  , 'usamplerCube'
	  , 'usampler2DArray'
	  , 'coherent'
	  , 'restrict'
	  , 'readonly'
	  , 'writeonly'
	  , 'resource'
	  , 'atomic_uint'
	  , 'noperspective'
	  , 'patch'
	  , 'sample'
	  , 'subroutine'
	  , 'common'
	  , 'partition'
	  , 'active'
	  , 'filter'
	  , 'image1D'
	  , 'image2D'
	  , 'image3D'
	  , 'imageCube'
	  , 'iimage1D'
	  , 'iimage2D'
	  , 'iimage3D'
	  , 'iimageCube'
	  , 'uimage1D'
	  , 'uimage2D'
	  , 'uimage3D'
	  , 'uimageCube'
	  , 'image1DArray'
	  , 'image2DArray'
	  , 'iimage1DArray'
	  , 'iimage2DArray'
	  , 'uimage1DArray'
	  , 'uimage2DArray'
	  , 'image1DShadow'
	  , 'image2DShadow'
	  , 'image1DArrayShadow'
	  , 'image2DArrayShadow'
	  , 'imageBuffer'
	  , 'iimageBuffer'
	  , 'uimageBuffer'
	  , 'sampler1DArray'
	  , 'sampler1DArrayShadow'
	  , 'isampler1D'
	  , 'isampler1DArray'
	  , 'usampler1D'
	  , 'usampler1DArray'
	  , 'isampler2DRect'
	  , 'usampler2DRect'
	  , 'samplerBuffer'
	  , 'isamplerBuffer'
	  , 'usamplerBuffer'
	  , 'sampler2DMS'
	  , 'isampler2DMS'
	  , 'usampler2DMS'
	  , 'sampler2DMSArray'
	  , 'isampler2DMSArray'
	  , 'usampler2DMSArray'
	])


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 300es builtins/reserved words that were previously valid in v100
	var v100 = __webpack_require__(71)
	
	// The texture2D|Cube functions have been removed
	// And the gl_ features are updated
	v100 = v100.slice().filter(function (b) {
	  return !/^(gl\_|texture)/.test(b)
	})
	
	module.exports = v100.concat([
	  // the updated gl_ constants
	    'gl_VertexID'
	  , 'gl_InstanceID'
	  , 'gl_Position'
	  , 'gl_PointSize'
	  , 'gl_FragCoord'
	  , 'gl_FrontFacing'
	  , 'gl_FragDepth'
	  , 'gl_PointCoord'
	  , 'gl_MaxVertexAttribs'
	  , 'gl_MaxVertexUniformVectors'
	  , 'gl_MaxVertexOutputVectors'
	  , 'gl_MaxFragmentInputVectors'
	  , 'gl_MaxVertexTextureImageUnits'
	  , 'gl_MaxCombinedTextureImageUnits'
	  , 'gl_MaxTextureImageUnits'
	  , 'gl_MaxFragmentUniformVectors'
	  , 'gl_MaxDrawBuffers'
	  , 'gl_MinProgramTexelOffset'
	  , 'gl_MaxProgramTexelOffset'
	  , 'gl_DepthRangeParameters'
	  , 'gl_DepthRange'
	
	  // other builtins
	  , 'trunc'
	  , 'round'
	  , 'roundEven'
	  , 'isnan'
	  , 'isinf'
	  , 'floatBitsToInt'
	  , 'floatBitsToUint'
	  , 'intBitsToFloat'
	  , 'uintBitsToFloat'
	  , 'packSnorm2x16'
	  , 'unpackSnorm2x16'
	  , 'packUnorm2x16'
	  , 'unpackUnorm2x16'
	  , 'packHalf2x16'
	  , 'unpackHalf2x16'
	  , 'outerProduct'
	  , 'transpose'
	  , 'determinant'
	  , 'inverse'
	  , 'texture'
	  , 'textureSize'
	  , 'textureProj'
	  , 'textureLod'
	  , 'textureOffset'
	  , 'texelFetch'
	  , 'texelFetchOffset'
	  , 'textureProjOffset'
	  , 'textureLodOffset'
	  , 'textureProjLod'
	  , 'textureProjLodOffset'
	  , 'textureGrad'
	  , 'textureGradOffset'
	  , 'textureProjGrad'
	  , 'textureProjGradOffset'
	])


/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = function _atob(str) {
	  return atob(str)
	}


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var padLeft = __webpack_require__(76)
	
	module.exports = addLineNumbers
	function addLineNumbers (string, start, delim) {
	  start = typeof start === 'number' ? start : 1
	  delim = delim || ': '
	
	  var lines = string.split(/\r?\n/)
	  var totalDigits = String(lines.length + start - 1).length
	  return lines.map(function (line, i) {
	    var c = i + start
	    var digits = String(c).length
	    var prefix = padLeft(c, totalDigits - digits)
	    return prefix + delim + line
	  }).join('\n')
	}


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * pad-left <https://github.com/jonschlinkert/pad-left>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT license.
	 */
	
	'use strict';
	
	var repeat = __webpack_require__(77);
	
	module.exports = function padLeft(str, num, ch) {
	  ch = typeof ch !== 'undefined' ? (ch + '') : ' ';
	  return repeat(ch, num) + str;
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	/*!
	 * repeat-string <https://github.com/jonschlinkert/repeat-string>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	/**
	 * Results cache
	 */
	
	var res = '';
	var cache;
	
	/**
	 * Expose `repeat`
	 */
	
	module.exports = repeat;
	
	/**
	 * Repeat the given `string` the specified `number`
	 * of times.
	 *
	 * **Example:**
	 *
	 * ```js
	 * var repeat = require('repeat-string');
	 * repeat('A', 5);
	 * //=> AAAAA
	 * ```
	 *
	 * @param {String} `string` The string to repeat
	 * @param {Number} `number` The number of times to repeat the string
	 * @return {String} Repeated string
	 * @api public
	 */
	
	function repeat(str, num) {
	  if (typeof str !== 'string') {
	    throw new TypeError('expected a string');
	  }
	
	  // cover common, quick use cases
	  if (num === 1) return str;
	  if (num === 2) return str + str;
	
	  var max = str.length * num;
	  if (cache !== str || typeof cache === 'undefined') {
	    cache = str;
	    res = '';
	  } else if (res.length >= max) {
	    return res.substr(0, max);
	  }
	
	  while (max > res.length && num > 1) {
	    if (num & 1) {
	      res += str;
	    }
	
	    num >>= 1;
	    str += str;
	  }
	
	  res += str;
	  res = res.substr(0, max);
	  return res;
	}


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// Original - @Gozola. 
	// https://gist.github.com/Gozala/1269991
	// This is a reimplemented version (with a few bug fixes).
	
	var createStore = __webpack_require__(79);
	
	module.exports = weakMap;
	
	function weakMap() {
	    var privates = createStore();
	
	    return {
	        'get': function (key, fallback) {
	            var store = privates(key)
	            return store.hasOwnProperty('value') ?
	                store.value : fallback
	        },
	        'set': function (key, value) {
	            privates(key).value = value;
	        },
	        'has': function(key) {
	            return 'value' in privates(key);
	        },
	        'delete': function (key) {
	            return delete privates(key).value;
	        }
	    }
	}


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var hiddenStore = __webpack_require__(80);
	
	module.exports = createStore;
	
	function createStore() {
	    var key = {};
	
	    return function (obj) {
	        if ((typeof obj !== 'object' || obj === null) &&
	            typeof obj !== 'function'
	        ) {
	            throw new Error('Weakmap-shim: Key must be object')
	        }
	
	        var store = obj.valueOf(key);
	        return store && store.identity === key ?
	            store : hiddenStore(obj, key);
	    };
	}


/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = hiddenStore;
	
	function hiddenStore(obj, key) {
	    var store = { identity: key };
	    var valueOf = obj.valueOf;
	
	    Object.defineProperty(obj, "valueOf", {
	        value: function (value) {
	            return value !== key ?
	                valueOf.apply(this, arguments) : store;
	        },
	        writable: true
	    });
	
	    return store;
	}


/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict'
	
	exports.uniforms    = runtimeUniforms
	exports.attributes  = runtimeAttributes
	
	var GL_TO_GLSL_TYPES = {
	  'FLOAT':       'float',
	  'FLOAT_VEC2':  'vec2',
	  'FLOAT_VEC3':  'vec3',
	  'FLOAT_VEC4':  'vec4',
	  'INT':         'int',
	  'INT_VEC2':    'ivec2',
	  'INT_VEC3':    'ivec3',
	  'INT_VEC4':    'ivec4',
	  'BOOL':        'bool',
	  'BOOL_VEC2':   'bvec2',
	  'BOOL_VEC3':   'bvec3',
	  'BOOL_VEC4':   'bvec4',
	  'FLOAT_MAT2':  'mat2',
	  'FLOAT_MAT3':  'mat3',
	  'FLOAT_MAT4':  'mat4',
	  'SAMPLER_2D':  'sampler2D',
	  'SAMPLER_CUBE':'samplerCube'
	}
	
	var GL_TABLE = null
	
	function getType(gl, type) {
	  if(!GL_TABLE) {
	    var typeNames = Object.keys(GL_TO_GLSL_TYPES)
	    GL_TABLE = {}
	    for(var i=0; i<typeNames.length; ++i) {
	      var tn = typeNames[i]
	      GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn]
	    }
	  }
	  return GL_TABLE[type]
	}
	
	function runtimeUniforms(gl, program) {
	  var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)
	  var result = []
	  for(var i=0; i<numUniforms; ++i) {
	    var info = gl.getActiveUniform(program, i)
	    if(info) {
	      var type = getType(gl, info.type)
	      if(info.size > 1) {
	        for(var j=0; j<info.size; ++j) {
	          result.push({
	            name: info.name.replace('[0]', '[' + j + ']'),
	            type: type
	          })
	        }
	      } else {
	        result.push({
	          name: info.name,
	          type: type
	        })
	      }
	    }
	  }
	  return result
	}
	
	function runtimeAttributes(gl, program) {
	  var numAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES)
	  var result = []
	  for(var i=0; i<numAttributes; ++i) {
	    var info = gl.getActiveAttrib(program, i)
	    if(info) {
	      result.push({
	        name: info.name,
	        type: getType(gl, info.type)
	      })
	    }
	  }
	  return result
	}


/***/ },
/* 82 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * Super simple utility to generate vendor prefixes for DOM/JavaScript
	 * functions.
	 *
	 * @param {String} what Standard name of the property we're looking for.
	 * @param {Object} where Object we need to search in.
	 * @returns {Mixed} The found property/function or undefined.
	 * @api public
	 */
	function prefixes(what, where) {
	  where = where || global;
	
	  if (what in where) return where[what];
	  else for (var i = 0, key; i < prefixes.vendor.length; i++) {
	    key = prefixes.vendor[i] + what.charAt(0).toUpperCase() + what.slice(1);
	
	    if (key in where) {
	      return where[key];
	    }
	  }
	}
	
	/**
	 * The various of vendor prefixes we need to check for the existence of
	 * a standard. The string sorted based on browser popularity so more popular
	 * browsers are matched faster then other. We include lower case versions of the
	 * browsers first as they are more common in API's. There are some edge cases
	 * here as events usually uppercased.
	 *
	 * Most browser's prefix as `mozRequestAnimationFrame` but Microsoft
	 * actually decided to use 2 flavors `MSPointerEvent`.
	 *
	 * @type {Array}
	 * @public
	 */
	prefixes.vendor = 'webkit,moz,ms,o,khtml,WebKit,Moz,MS,O,Khtml'.split(',');
	
	//
	// Expose the prefixer.
	//
	module.exports = prefixes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(84)
	module.exports.color = __webpack_require__(85)

/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	/** @namespace */
	var dat = module.exports = dat || {};
	
	/** @namespace */
	dat.gui = dat.gui || {};
	
	/** @namespace */
	dat.utils = dat.utils || {};
	
	/** @namespace */
	dat.controllers = dat.controllers || {};
	
	/** @namespace */
	dat.dom = dat.dom || {};
	
	/** @namespace */
	dat.color = dat.color || {};
	
	dat.utils.css = (function () {
	  return {
	    load: function (url, doc) {
	      doc = doc || document;
	      var link = doc.createElement('link');
	      link.type = 'text/css';
	      link.rel = 'stylesheet';
	      link.href = url;
	      doc.getElementsByTagName('head')[0].appendChild(link);
	    },
	    inject: function(css, doc) {
	      doc = doc || document;
	      var injected = document.createElement('style');
	      injected.type = 'text/css';
	      injected.innerHTML = css;
	      doc.getElementsByTagName('head')[0].appendChild(injected);
	    }
	  }
	})();
	
	
	dat.utils.common = (function () {
	  
	  var ARR_EACH = Array.prototype.forEach;
	  var ARR_SLICE = Array.prototype.slice;
	
	  /**
	   * Band-aid methods for things that should be a lot easier in JavaScript.
	   * Implementation and structure inspired by underscore.js
	   * http://documentcloud.github.com/underscore/
	   */
	
	  return { 
	    
	    BREAK: {},
	  
	    extend: function(target) {
	      
	      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
	        
	        for (var key in obj)
	          if (!this.isUndefined(obj[key])) 
	            target[key] = obj[key];
	        
	      }, this);
	      
	      return target;
	      
	    },
	    
	    defaults: function(target) {
	      
	      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
	        
	        for (var key in obj)
	          if (this.isUndefined(target[key])) 
	            target[key] = obj[key];
	        
	      }, this);
	      
	      return target;
	    
	    },
	    
	    compose: function() {
	      var toCall = ARR_SLICE.call(arguments);
	            return function() {
	              var args = ARR_SLICE.call(arguments);
	              for (var i = toCall.length -1; i >= 0; i--) {
	                args = [toCall[i].apply(this, args)];
	              }
	              return args[0];
	            }
	    },
	    
	    each: function(obj, itr, scope) {
	
	      
	      if (ARR_EACH && obj.forEach === ARR_EACH) { 
	        
	        obj.forEach(itr, scope);
	        
	      } else if (obj.length === obj.length + 0) { // Is number but not NaN
	        
	        for (var key = 0, l = obj.length; key < l; key++)
	          if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) 
	            return;
	            
	      } else {
	
	        for (var key in obj) 
	          if (itr.call(scope, obj[key], key) === this.BREAK)
	            return;
	            
	      }
	            
	    },
	    
	    defer: function(fnc) {
	      setTimeout(fnc, 0);
	    },
	    
	    toArray: function(obj) {
	      if (obj.toArray) return obj.toArray();
	      return ARR_SLICE.call(obj);
	    },
	
	    isUndefined: function(obj) {
	      return obj === undefined;
	    },
	    
	    isNull: function(obj) {
	      return obj === null;
	    },
	    
	    isNaN: function(obj) {
	      return obj !== obj;
	    },
	    
	    isArray: Array.isArray || function(obj) {
	      return obj.constructor === Array;
	    },
	    
	    isObject: function(obj) {
	      return obj === Object(obj);
	    },
	    
	    isNumber: function(obj) {
	      return obj === obj+0;
	    },
	    
	    isString: function(obj) {
	      return obj === obj+'';
	    },
	    
	    isBoolean: function(obj) {
	      return obj === false || obj === true;
	    },
	    
	    isFunction: function(obj) {
	      return Object.prototype.toString.call(obj) === '[object Function]';
	    }
	  
	  };
	    
	})();
	
	
	dat.controllers.Controller = (function (common) {
	
	  /**
	   * @class An "abstract" class that represents a given property of an object.
	   *
	   * @param {Object} object The object to be manipulated
	   * @param {string} property The name of the property to be manipulated
	   *
	   * @member dat.controllers
	   */
	  var Controller = function(object, property) {
	
	    this.initialValue = object[property];
	
	    /**
	     * Those who extend this class will put their DOM elements in here.
	     * @type {DOMElement}
	     */
	    this.domElement = document.createElement('div');
	
	    /**
	     * The object to manipulate
	     * @type {Object}
	     */
	    this.object = object;
	
	    /**
	     * The name of the property to manipulate
	     * @type {String}
	     */
	    this.property = property;
	
	    /**
	     * The function to be called on change.
	     * @type {Function}
	     * @ignore
	     */
	    this.__onChange = undefined;
	
	    /**
	     * The function to be called on finishing change.
	     * @type {Function}
	     * @ignore
	     */
	    this.__onFinishChange = undefined;
	
	  };
	
	  common.extend(
	
	      Controller.prototype,
	
	      /** @lends dat.controllers.Controller.prototype */
	      {
	
	        /**
	         * Specify that a function fire every time someone changes the value with
	         * this Controller.
	         *
	         * @param {Function} fnc This function will be called whenever the value
	         * is modified via this Controller.
	         * @returns {dat.controllers.Controller} this
	         */
	        onChange: function(fnc) {
	          this.__onChange = fnc;
	          return this;
	        },
	
	        /**
	         * Specify that a function fire every time someone "finishes" changing
	         * the value wih this Controller. Useful for values that change
	         * incrementally like numbers or strings.
	         *
	         * @param {Function} fnc This function will be called whenever
	         * someone "finishes" changing the value via this Controller.
	         * @returns {dat.controllers.Controller} this
	         */
	        onFinishChange: function(fnc) {
	          this.__onFinishChange = fnc;
	          return this;
	        },
	
	        /**
	         * Change the value of <code>object[property]</code>
	         *
	         * @param {Object} newValue The new value of <code>object[property]</code>
	         */
	        setValue: function(newValue) {
	          this.object[this.property] = newValue;
	          if (this.__onChange) {
	            this.__onChange.call(this, newValue);
	          }
	          this.updateDisplay();
	          return this;
	        },
	
	        /**
	         * Gets the value of <code>object[property]</code>
	         *
	         * @returns {Object} The current value of <code>object[property]</code>
	         */
	        getValue: function() {
	          return this.object[this.property];
	        },
	
	        /**
	         * Refreshes the visual display of a Controller in order to keep sync
	         * with the object's current value.
	         * @returns {dat.controllers.Controller} this
	         */
	        updateDisplay: function() {
	          return this;
	        },
	
	        /**
	         * @returns {Boolean} true if the value has deviated from initialValue
	         */
	        isModified: function() {
	          return this.initialValue !== this.getValue()
	        }
	
	      }
	
	  );
	
	  return Controller;
	
	
	})(dat.utils.common);
	
	
	dat.dom.dom = (function (common) {
	
	  var EVENT_MAP = {
	    'HTMLEvents': ['change'],
	    'MouseEvents': ['click','mousemove','mousedown','mouseup', 'mouseover'],
	    'KeyboardEvents': ['keydown']
	  };
	
	  var EVENT_MAP_INV = {};
	  common.each(EVENT_MAP, function(v, k) {
	    common.each(v, function(e) {
	      EVENT_MAP_INV[e] = k;
	    });
	  });
	
	  var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;
	
	  function cssValueToPixels(val) {
	
	    if (val === '0' || common.isUndefined(val)) return 0;
	
	    var match = val.match(CSS_VALUE_PIXELS);
	
	    if (!common.isNull(match)) {
	      return parseFloat(match[1]);
	    }
	
	    // TODO ...ems? %?
	
	    return 0;
	
	  }
	
	  /**
	   * @namespace
	   * @member dat.dom
	   */
	  var dom = {
	
	    /**
	     * 
	     * @param elem
	     * @param selectable
	     */
	    makeSelectable: function(elem, selectable) {
	
	      if (elem === undefined || elem.style === undefined) return;
	
	      elem.onselectstart = selectable ? function() {
	        return false;
	      } : function() {
	      };
	
	      elem.style.MozUserSelect = selectable ? 'auto' : 'none';
	      elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
	      elem.unselectable = selectable ? 'on' : 'off';
	
	    },
	
	    /**
	     *
	     * @param elem
	     * @param horizontal
	     * @param vertical
	     */
	    makeFullscreen: function(elem, horizontal, vertical) {
	
	      if (common.isUndefined(horizontal)) horizontal = true;
	      if (common.isUndefined(vertical)) vertical = true;
	
	      elem.style.position = 'absolute';
	
	      if (horizontal) {
	        elem.style.left = 0;
	        elem.style.right = 0;
	      }
	      if (vertical) {
	        elem.style.top = 0;
	        elem.style.bottom = 0;
	      }
	
	    },
	
	    /**
	     *
	     * @param elem
	     * @param eventType
	     * @param params
	     */
	    fakeEvent: function(elem, eventType, params, aux) {
	      params = params || {};
	      var className = EVENT_MAP_INV[eventType];
	      if (!className) {
	        throw new Error('Event type ' + eventType + ' not supported.');
	      }
	      var evt = document.createEvent(className);
	      switch (className) {
	        case 'MouseEvents':
	          var clientX = params.x || params.clientX || 0;
	          var clientY = params.y || params.clientY || 0;
	          evt.initMouseEvent(eventType, params.bubbles || false,
	              params.cancelable || true, window, params.clickCount || 1,
	              0, //screen X
	              0, //screen Y
	              clientX, //client X
	              clientY, //client Y
	              false, false, false, false, 0, null);
	          break;
	        case 'KeyboardEvents':
	          var init = evt.initKeyboardEvent || evt.initKeyEvent; // webkit || moz
	          common.defaults(params, {
	            cancelable: true,
	            ctrlKey: false,
	            altKey: false,
	            shiftKey: false,
	            metaKey: false,
	            keyCode: undefined,
	            charCode: undefined
	          });
	          init(eventType, params.bubbles || false,
	              params.cancelable, window,
	              params.ctrlKey, params.altKey,
	              params.shiftKey, params.metaKey,
	              params.keyCode, params.charCode);
	          break;
	        default:
	          evt.initEvent(eventType, params.bubbles || false,
	              params.cancelable || true);
	          break;
	      }
	      common.defaults(evt, aux);
	      elem.dispatchEvent(evt);
	    },
	
	    /**
	     *
	     * @param elem
	     * @param event
	     * @param func
	     * @param bool
	     */
	    bind: function(elem, event, func, bool) {
	      bool = bool || false;
	      if (elem.addEventListener)
	        elem.addEventListener(event, func, bool);
	      else if (elem.attachEvent)
	        elem.attachEvent('on' + event, func);
	      return dom;
	    },
	
	    /**
	     *
	     * @param elem
	     * @param event
	     * @param func
	     * @param bool
	     */
	    unbind: function(elem, event, func, bool) {
	      bool = bool || false;
	      if (elem.removeEventListener)
	        elem.removeEventListener(event, func, bool);
	      else if (elem.detachEvent)
	        elem.detachEvent('on' + event, func);
	      return dom;
	    },
	
	    /**
	     *
	     * @param elem
	     * @param className
	     */
	    addClass: function(elem, className) {
	      if (elem.className === undefined) {
	        elem.className = className;
	      } else if (elem.className !== className) {
	        var classes = elem.className.split(/ +/);
	        if (classes.indexOf(className) == -1) {
	          classes.push(className);
	          elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
	        }
	      }
	      return dom;
	    },
	
	    /**
	     *
	     * @param elem
	     * @param className
	     */
	    removeClass: function(elem, className) {
	      if (className) {
	        if (elem.className === undefined) {
	          // elem.className = className;
	        } else if (elem.className === className) {
	          elem.removeAttribute('class');
	        } else {
	          var classes = elem.className.split(/ +/);
	          var index = classes.indexOf(className);
	          if (index != -1) {
	            classes.splice(index, 1);
	            elem.className = classes.join(' ');
	          }
	        }
	      } else {
	        elem.className = undefined;
	      }
	      return dom;
	    },
	
	    hasClass: function(elem, className) {
	      return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
	    },
	
	    /**
	     *
	     * @param elem
	     */
	    getWidth: function(elem) {
	
	      var style = getComputedStyle(elem);
	
	      return cssValueToPixels(style['border-left-width']) +
	          cssValueToPixels(style['border-right-width']) +
	          cssValueToPixels(style['padding-left']) +
	          cssValueToPixels(style['padding-right']) +
	          cssValueToPixels(style['width']);
	    },
	
	    /**
	     *
	     * @param elem
	     */
	    getHeight: function(elem) {
	
	      var style = getComputedStyle(elem);
	
	      return cssValueToPixels(style['border-top-width']) +
	          cssValueToPixels(style['border-bottom-width']) +
	          cssValueToPixels(style['padding-top']) +
	          cssValueToPixels(style['padding-bottom']) +
	          cssValueToPixels(style['height']);
	    },
	
	    /**
	     *
	     * @param elem
	     */
	    getOffset: function(elem) {
	      var offset = {left: 0, top:0};
	      if (elem.offsetParent) {
	        do {
	          offset.left += elem.offsetLeft;
	          offset.top += elem.offsetTop;
	        } while (elem = elem.offsetParent);
	      }
	      return offset;
	    },
	
	    // http://stackoverflow.com/posts/2684561/revisions
	    /**
	     * 
	     * @param elem
	     */
	    isActive: function(elem) {
	      return elem === document.activeElement && ( elem.type || elem.href );
	    }
	
	  };
	
	  return dom;
	
	})(dat.utils.common);
	
	
	dat.controllers.OptionController = (function (Controller, dom, common) {
	
	  /**
	   * @class Provides a select input to alter the property of an object, using a
	   * list of accepted values.
	   *
	   * @extends dat.controllers.Controller
	   *
	   * @param {Object} object The object to be manipulated
	   * @param {string} property The name of the property to be manipulated
	   * @param {Object|string[]} options A map of labels to acceptable values, or
	   * a list of acceptable string values.
	   *
	   * @member dat.controllers
	   */
	  var OptionController = function(object, property, options) {
	
	    OptionController.superclass.call(this, object, property);
	
	    var _this = this;
	
	    /**
	     * The drop down menu
	     * @ignore
	     */
	    this.__select = document.createElement('select');
	
	    if (common.isArray(options)) {
	      var map = {};
	      common.each(options, function(element) {
	        map[element] = element;
	      });
	      options = map;
	    }
	
	    common.each(options, function(value, key) {
	
	      var opt = document.createElement('option');
	      opt.innerHTML = key;
	      opt.setAttribute('value', value);
	      _this.__select.appendChild(opt);
	
	    });
	
	    // Acknowledge original value
	    this.updateDisplay();
	
	    dom.bind(this.__select, 'change', function() {
	      var desiredValue = this.options[this.selectedIndex].value;
	      _this.setValue(desiredValue);
	    });
	
	    this.domElement.appendChild(this.__select);
	
	  };
	
	  OptionController.superclass = Controller;
	
	  common.extend(
	
	      OptionController.prototype,
	      Controller.prototype,
	
	      {
	
	        setValue: function(v) {
	          var toReturn = OptionController.superclass.prototype.setValue.call(this, v);
	          if (this.__onFinishChange) {
	            this.__onFinishChange.call(this, this.getValue());
	          }
	          return toReturn;
	        },
	
	        updateDisplay: function() {
	          this.__select.value = this.getValue();
	          return OptionController.superclass.prototype.updateDisplay.call(this);
	        }
	
	      }
	
	  );
	
	  return OptionController;
	
	})(dat.controllers.Controller,
	dat.dom.dom,
	dat.utils.common);
	
	
	dat.controllers.NumberController = (function (Controller, common) {
	
	  /**
	   * @class Represents a given property of an object that is a number.
	   *
	   * @extends dat.controllers.Controller
	   *
	   * @param {Object} object The object to be manipulated
	   * @param {string} property The name of the property to be manipulated
	   * @param {Object} [params] Optional parameters
	   * @param {Number} [params.min] Minimum allowed value
	   * @param {Number} [params.max] Maximum allowed value
	   * @param {Number} [params.step] Increment by which to change value
	   *
	   * @member dat.controllers
	   */
	  var NumberController = function(object, property, params) {
	
	    NumberController.superclass.call(this, object, property);
	
	    params = params || {};
	
	    this.__min = params.min;
	    this.__max = params.max;
	    this.__step = params.step;
	
	    if (common.isUndefined(this.__step)) {
	
	      if (this.initialValue == 0) {
	        this.__impliedStep = 1; // What are we, psychics?
	      } else {
	        // Hey Doug, check this out.
	        this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue)/Math.LN10))/10;
	      }
	
	    } else {
	
	      this.__impliedStep = this.__step;
	
	    }
	
	    this.__precision = numDecimals(this.__impliedStep);
	
	
	  };
	
	  NumberController.superclass = Controller;
	
	  common.extend(
	
	      NumberController.prototype,
	      Controller.prototype,
	
	      /** @lends dat.controllers.NumberController.prototype */
	      {
	
	        setValue: function(v) {
	
	          if (this.__min !== undefined && v < this.__min) {
	            v = this.__min;
	          } else if (this.__max !== undefined && v > this.__max) {
	            v = this.__max;
	          }
	
	          if (this.__step !== undefined && v % this.__step != 0) {
	            v = Math.round(v / this.__step) * this.__step;
	          }
	
	          return NumberController.superclass.prototype.setValue.call(this, v);
	
	        },
	
	        /**
	         * Specify a minimum value for <code>object[property]</code>.
	         *
	         * @param {Number} minValue The minimum value for
	         * <code>object[property]</code>
	         * @returns {dat.controllers.NumberController} this
	         */
	        min: function(v) {
	          this.__min = v;
	          return this;
	        },
	
	        /**
	         * Specify a maximum value for <code>object[property]</code>.
	         *
	         * @param {Number} maxValue The maximum value for
	         * <code>object[property]</code>
	         * @returns {dat.controllers.NumberController} this
	         */
	        max: function(v) {
	          this.__max = v;
	          return this;
	        },
	
	        /**
	         * Specify a step value that dat.controllers.NumberController
	         * increments by.
	         *
	         * @param {Number} stepValue The step value for
	         * dat.controllers.NumberController
	         * @default if minimum and maximum specified increment is 1% of the
	         * difference otherwise stepValue is 1
	         * @returns {dat.controllers.NumberController} this
	         */
	        step: function(v) {
	          this.__step = v;
	          return this;
	        }
	
	      }
	
	  );
	
	  function numDecimals(x) {
	    x = x.toString();
	    if (x.indexOf('.') > -1) {
	      return x.length - x.indexOf('.') - 1;
	    } else {
	      return 0;
	    }
	  }
	
	  return NumberController;
	
	})(dat.controllers.Controller,
	dat.utils.common);
	
	
	dat.controllers.NumberControllerBox = (function (NumberController, dom, common) {
	
	  /**
	   * @class Represents a given property of an object that is a number and
	   * provides an input element with which to manipulate it.
	   *
	   * @extends dat.controllers.Controller
	   * @extends dat.controllers.NumberController
	   *
	   * @param {Object} object The object to be manipulated
	   * @param {string} property The name of the property to be manipulated
	   * @param {Object} [params] Optional parameters
	   * @param {Number} [params.min] Minimum allowed value
	   * @param {Number} [params.max] Maximum allowed value
	   * @param {Number} [params.step] Increment by which to change value
	   *
	   * @member dat.controllers
	   */
	  var NumberControllerBox = function(object, property, params) {
	
	    this.__truncationSuspended = false;
	
	    NumberControllerBox.superclass.call(this, object, property, params);
	
	    var _this = this;
	
	    /**
	     * {Number} Previous mouse y position
	     * @ignore
	     */
	    var prev_y;
	
	    this.__input = document.createElement('input');
	    this.__input.setAttribute('type', 'text');
	
	    // Makes it so manually specified values are not truncated.
	
	    dom.bind(this.__input, 'change', onChange);
	    dom.bind(this.__input, 'blur', onBlur);
	    dom.bind(this.__input, 'mousedown', onMouseDown);
	    dom.bind(this.__input, 'keydown', function(e) {
	
	      // When pressing entire, you can be as precise as you want.
	      if (e.keyCode === 13) {
	        _this.__truncationSuspended = true;
	        this.blur();
	        _this.__truncationSuspended = false;
	      }
	
	    });
	
	    function onChange() {
	      var attempted = parseFloat(_this.__input.value);
	      if (!common.isNaN(attempted)) _this.setValue(attempted);
	    }
	
	    function onBlur() {
	      onChange();
	      if (_this.__onFinishChange) {
	        _this.__onFinishChange.call(_this, _this.getValue());
	      }
	    }
	
	    function onMouseDown(e) {
	      dom.bind(window, 'mousemove', onMouseDrag);
	      dom.bind(window, 'mouseup', onMouseUp);
	      prev_y = e.clientY;
	    }
	
	    function onMouseDrag(e) {
	
	      var diff = prev_y - e.clientY;
	      _this.setValue(_this.getValue() + diff * _this.__impliedStep);
	
	      prev_y = e.clientY;
	
	    }
	
	    function onMouseUp() {
	      dom.unbind(window, 'mousemove', onMouseDrag);
	      dom.unbind(window, 'mouseup', onMouseUp);
	    }
	
	    this.updateDisplay();
	
	    this.domElement.appendChild(this.__input);
	
	  };
	
	  NumberControllerBox.superclass = NumberController;
	
	  common.extend(
	
	      NumberControllerBox.prototype,
	      NumberController.prototype,
	
	      {
	
	        updateDisplay: function() {
	
	          this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
	          return NumberControllerBox.superclass.prototype.updateDisplay.call(this);
	        }
	
	      }
	
	  );
	
	  function roundToDecimal(value, decimals) {
	    var tenTo = Math.pow(10, decimals);
	    return Math.round(value * tenTo) / tenTo;
	  }
	
	  return NumberControllerBox;
	
	})(dat.controllers.NumberController,
	dat.dom.dom,
	dat.utils.common);
	
	
	dat.controllers.NumberControllerSlider = (function (NumberController, dom, css, common, styleSheet) {
	
	  /**
	   * @class Represents a given property of an object that is a number, contains
	   * a minimum and maximum, and provides a slider element with which to
	   * manipulate it. It should be noted that the slider element is made up of
	   * <code>&lt;div&gt;</code> tags, <strong>not</strong> the html5
	   * <code>&lt;slider&gt;</code> element.
	   *
	   * @extends dat.controllers.Controller
	   * @extends dat.controllers.NumberController
	   * 
	   * @param {Object} object The object to be manipulated
	   * @param {string} property The name of the property to be manipulated
	   * @param {Number} minValue Minimum allowed value
	   * @param {Number} maxValue Maximum allowed value
	   * @param {Number} stepValue Increment by which to change value
	   *
	   * @member dat.controllers
	   */
	  var NumberControllerSlider = function(object, property, min, max, step) {
	
	    NumberControllerSlider.superclass.call(this, object, property, { min: min, max: max, step: step });
	
	    var _this = this;
	
	    this.__background = document.createElement('div');
	    this.__foreground = document.createElement('div');
	    
	
	
	    dom.bind(this.__background, 'mousedown', onMouseDown);
	    
	    dom.addClass(this.__background, 'slider');
	    dom.addClass(this.__foreground, 'slider-fg');
	
	    function onMouseDown(e) {
	
	      dom.bind(window, 'mousemove', onMouseDrag);
	      dom.bind(window, 'mouseup', onMouseUp);
	
	      onMouseDrag(e);
	    }
	
	    function onMouseDrag(e) {
	
	      e.preventDefault();
	
	      var offset = dom.getOffset(_this.__background);
	      var width = dom.getWidth(_this.__background);
	      
	      _this.setValue(
	        map(e.clientX, offset.left, offset.left + width, _this.__min, _this.__max)
	      );
	
	      return false;
	
	    }
	
	    function onMouseUp() {
	      dom.unbind(window, 'mousemove', onMouseDrag);
	      dom.unbind(window, 'mouseup', onMouseUp);
	      if (_this.__onFinishChange) {
	        _this.__onFinishChange.call(_this, _this.getValue());
	      }
	    }
	
	    this.updateDisplay();
	
	    this.__background.appendChild(this.__foreground);
	    this.domElement.appendChild(this.__background);
	
	  };
	
	  NumberControllerSlider.superclass = NumberController;
	
	  /**
	   * Injects default stylesheet for slider elements.
	   */
	  NumberControllerSlider.useDefaultStyles = function() {
	    css.inject(styleSheet);
	  };
	
	  common.extend(
	
	      NumberControllerSlider.prototype,
	      NumberController.prototype,
	
	      {
	
	        updateDisplay: function() {
	          var pct = (this.getValue() - this.__min)/(this.__max - this.__min);
	          this.__foreground.style.width = pct*100+'%';
	          return NumberControllerSlider.superclass.prototype.updateDisplay.call(this);
	        }
	
	      }
	
	
	
	  );
	
	  function map(v, i1, i2, o1, o2) {
	    return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
	  }
	
	  return NumberControllerSlider;
	  
	})(dat.controllers.NumberController,
	dat.dom.dom,
	dat.utils.css,
	dat.utils.common,
	".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");
	
	
	dat.controllers.FunctionController = (function (Controller, dom, common) {
	
	  /**
	   * @class Provides a GUI interface to fire a specified method, a property of an object.
	   *
	   * @extends dat.controllers.Controller
	   *
	   * @param {Object} object The object to be manipulated
	   * @param {string} property The name of the property to be manipulated
	   *
	   * @member dat.controllers
	   */
	  var FunctionController = function(object, property, text) {
	
	    FunctionController.superclass.call(this, object, property);
	
	    var _this = this;
	
	    this.__button = document.createElement('div');
	    this.__button.innerHTML = text === undefined ? 'Fire' : text;
	    dom.bind(this.__button, 'click', function(e) {
	      e.preventDefault();
	      _this.fire();
	      return false;
	    });
	
	    dom.addClass(this.__button, 'button');
	
	    this.domElement.appendChild(this.__button);
	
	
	  };
	
	  FunctionController.superclass = Controller;
	
	  common.extend(
	
	      FunctionController.prototype,
	      Controller.prototype,
	      {
	        
	        fire: function() {
	          if (this.__onChange) {
	            this.__onChange.call(this);
	          }
	          if (this.__onFinishChange) {
	            this.__onFinishChange.call(this, this.getValue());
	          }
	          this.getValue().call(this.object);
	        }
	      }
	
	  );
	
	  return FunctionController;
	
	})(dat.controllers.Controller,
	dat.dom.dom,
	dat.utils.common);
	
	
	dat.controllers.BooleanController = (function (Controller, dom, common) {
	
	  /**
	   * @class Provides a checkbox input to alter the boolean property of an object.
	   * @extends dat.controllers.Controller
	   *
	   * @param {Object} object The object to be manipulated
	   * @param {string} property The name of the property to be manipulated
	   *
	   * @member dat.controllers
	   */
	  var BooleanController = function(object, property) {
	
	    BooleanController.superclass.call(this, object, property);
	
	    var _this = this;
	    this.__prev = this.getValue();
	
	    this.__checkbox = document.createElement('input');
	    this.__checkbox.setAttribute('type', 'checkbox');
	
	
	    dom.bind(this.__checkbox, 'change', onChange, false);
	
	    this.domElement.appendChild(this.__checkbox);
	
	    // Match original value
	    this.updateDisplay();
	
	    function onChange() {
	      _this.setValue(!_this.__prev);
	    }
	
	  };
	
	  BooleanController.superclass = Controller;
	
	  common.extend(
	
	      BooleanController.prototype,
	      Controller.prototype,
	
	      {
	
	        setValue: function(v) {
	          var toReturn = BooleanController.superclass.prototype.setValue.call(this, v);
	          if (this.__onFinishChange) {
	            this.__onFinishChange.call(this, this.getValue());
	          }
	          this.__prev = this.getValue();
	          return toReturn;
	        },
	
	        updateDisplay: function() {
	          
	          if (this.getValue() === true) {
	            this.__checkbox.setAttribute('checked', 'checked');
	            this.__checkbox.checked = true;    
	          } else {
	              this.__checkbox.checked = false;
	          }
	
	          return BooleanController.superclass.prototype.updateDisplay.call(this);
	
	        }
	
	
	      }
	
	  );
	
	  return BooleanController;
	
	})(dat.controllers.Controller,
	dat.dom.dom,
	dat.utils.common);
	
	
	dat.color.toString = (function (common) {
	
	  return function(color) {
	
	    if (color.a == 1 || common.isUndefined(color.a)) {
	
	      var s = color.hex.toString(16);
	      while (s.length < 6) {
	        s = '0' + s;
	      }
	
	      return '#' + s;
	
	    } else {
	
	      return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';
	
	    }
	
	  }
	
	})(dat.utils.common);
	
	
	dat.color.interpret = (function (toString, common) {
	
	  var result, toReturn;
	
	  var interpret = function() {
	
	    toReturn = false;
	
	    var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];
	
	    common.each(INTERPRETATIONS, function(family) {
	
	      if (family.litmus(original)) {
	
	        common.each(family.conversions, function(conversion, conversionName) {
	
	          result = conversion.read(original);
	
	          if (toReturn === false && result !== false) {
	            toReturn = result;
	            result.conversionName = conversionName;
	            result.conversion = conversion;
	            return common.BREAK;
	
	          }
	
	        });
	
	        return common.BREAK;
	
	      }
	
	    });
	
	    return toReturn;
	
	  };
	
	  var INTERPRETATIONS = [
	
	    // Strings
	    {
	
	      litmus: common.isString,
	
	      conversions: {
	
	        THREE_CHAR_HEX: {
	
	          read: function(original) {
	
	            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
	            if (test === null) return false;
	
	            return {
	              space: 'HEX',
	              hex: parseInt(
	                  '0x' +
	                      test[1].toString() + test[1].toString() +
	                      test[2].toString() + test[2].toString() +
	                      test[3].toString() + test[3].toString())
	            };
	
	          },
	
	          write: toString
	
	        },
	
	        SIX_CHAR_HEX: {
	
	          read: function(original) {
	
	            var test = original.match(/^#([A-F0-9]{6})$/i);
	            if (test === null) return false;
	
	            return {
	              space: 'HEX',
	              hex: parseInt('0x' + test[1].toString())
	            };
	
	          },
	
	          write: toString
	
	        },
	
	        CSS_RGB: {
	
	          read: function(original) {
	
	            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
	            if (test === null) return false;
	
	            return {
	              space: 'RGB',
	              r: parseFloat(test[1]),
	              g: parseFloat(test[2]),
	              b: parseFloat(test[3])
	            };
	
	          },
	
	          write: toString
	
	        },
	
	        CSS_RGBA: {
	
	          read: function(original) {
	
	            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
	            if (test === null) return false;
	
	            return {
	              space: 'RGB',
	              r: parseFloat(test[1]),
	              g: parseFloat(test[2]),
	              b: parseFloat(test[3]),
	              a: parseFloat(test[4])
	            };
	
	          },
	
	          write: toString
	
	        }
	
	      }
	
	    },
	
	    // Numbers
	    {
	
	      litmus: common.isNumber,
	
	      conversions: {
	
	        HEX: {
	          read: function(original) {
	            return {
	              space: 'HEX',
	              hex: original,
	              conversionName: 'HEX'
	            }
	          },
	
	          write: function(color) {
	            return color.hex;
	          }
	        }
	
	      }
	
	    },
	
	    // Arrays
	    {
	
	      litmus: common.isArray,
	
	      conversions: {
	
	        RGB_ARRAY: {
	          read: function(original) {
	            if (original.length != 3) return false;
	            return {
	              space: 'RGB',
	              r: original[0],
	              g: original[1],
	              b: original[2]
	            };
	          },
	
	          write: function(color) {
	            return [color.r, color.g, color.b];
	          }
	
	        },
	
	        RGBA_ARRAY: {
	          read: function(original) {
	            if (original.length != 4) return false;
	            return {
	              space: 'RGB',
	              r: original[0],
	              g: original[1],
	              b: original[2],
	              a: original[3]
	            };
	          },
	
	          write: function(color) {
	            return [color.r, color.g, color.b, color.a];
	          }
	
	        }
	
	      }
	
	    },
	
	    // Objects
	    {
	
	      litmus: common.isObject,
	
	      conversions: {
	
	        RGBA_OBJ: {
	          read: function(original) {
	            if (common.isNumber(original.r) &&
	                common.isNumber(original.g) &&
	                common.isNumber(original.b) &&
	                common.isNumber(original.a)) {
	              return {
	                space: 'RGB',
	                r: original.r,
	                g: original.g,
	                b: original.b,
	                a: original.a
	              }
	            }
	            return false;
	          },
	
	          write: function(color) {
	            return {
	              r: color.r,
	              g: color.g,
	              b: color.b,
	              a: color.a
	            }
	          }
	        },
	
	        RGB_OBJ: {
	          read: function(original) {
	            if (common.isNumber(original.r) &&
	                common.isNumber(original.g) &&
	                common.isNumber(original.b)) {
	              return {
	                space: 'RGB',
	                r: original.r,
	                g: original.g,
	                b: original.b
	              }
	            }
	            return false;
	          },
	
	          write: function(color) {
	            return {
	              r: color.r,
	              g: color.g,
	              b: color.b
	            }
	          }
	        },
	
	        HSVA_OBJ: {
	          read: function(original) {
	            if (common.isNumber(original.h) &&
	                common.isNumber(original.s) &&
	                common.isNumber(original.v) &&
	                common.isNumber(original.a)) {
	              return {
	                space: 'HSV',
	                h: original.h,
	                s: original.s,
	                v: original.v,
	                a: original.a
	              }
	            }
	            return false;
	          },
	
	          write: function(color) {
	            return {
	              h: color.h,
	              s: color.s,
	              v: color.v,
	              a: color.a
	            }
	          }
	        },
	
	        HSV_OBJ: {
	          read: function(original) {
	            if (common.isNumber(original.h) &&
	                common.isNumber(original.s) &&
	                common.isNumber(original.v)) {
	              return {
	                space: 'HSV',
	                h: original.h,
	                s: original.s,
	                v: original.v
	              }
	            }
	            return false;
	          },
	
	          write: function(color) {
	            return {
	              h: color.h,
	              s: color.s,
	              v: color.v
	            }
	          }
	
	        }
	
	      }
	
	    }
	
	
	  ];
	
	  return interpret;
	
	
	})(dat.color.toString,
	dat.utils.common);
	
	
	dat.GUI = dat.gui.GUI = (function (css, saveDialogueContents, styleSheet, controllerFactory, Controller, BooleanController, FunctionController, NumberControllerBox, NumberControllerSlider, OptionController, ColorController, requestAnimationFrame, CenteredDiv, dom, common) {
	
	  css.inject(styleSheet);
	
	  /** Outer-most className for GUI's */
	  var CSS_NAMESPACE = 'dg';
	
	  var HIDE_KEY_CODE = 72;
	
	  /** The only value shared between the JS and SCSS. Use caution. */
	  var CLOSE_BUTTON_HEIGHT = 20;
	
	  var DEFAULT_DEFAULT_PRESET_NAME = 'Default';
	
	  var SUPPORTS_LOCAL_STORAGE = (function() {
	    try {
	      return 'localStorage' in window && window['localStorage'] !== null;
	    } catch (e) {
	      return false;
	    }
	  })();
	
	  var SAVE_DIALOGUE;
	
	  /** Have we yet to create an autoPlace GUI? */
	  var auto_place_virgin = true;
	
	  /** Fixed position div that auto place GUI's go inside */
	  var auto_place_container;
	
	  /** Are we hiding the GUI's ? */
	  var hide = false;
	
	  /** GUI's which should be hidden */
	  var hideable_guis = [];
	
	  /**
	   * A lightweight controller library for JavaScript. It allows you to easily
	   * manipulate variables and fire functions on the fly.
	   * @class
	   *
	   * @member dat.gui
	   *
	   * @param {Object} [params]
	   * @param {String} [params.name] The name of this GUI.
	   * @param {Object} [params.load] JSON object representing the saved state of
	   * this GUI.
	   * @param {Boolean} [params.auto=true]
	   * @param {dat.gui.GUI} [params.parent] The GUI I'm nested in.
	   * @param {Boolean} [params.closed] If true, starts closed
	   */
	  var GUI = function(params) {
	
	    var _this = this;
	
	    /**
	     * Outermost DOM Element
	     * @type DOMElement
	     */
	    this.domElement = document.createElement('div');
	    this.__ul = document.createElement('ul');
	    this.domElement.appendChild(this.__ul);
	
	    dom.addClass(this.domElement, CSS_NAMESPACE);
	
	    /**
	     * Nested GUI's by name
	     * @ignore
	     */
	    this.__folders = {};
	
	    this.__controllers = [];
	
	    /**
	     * List of objects I'm remembering for save, only used in top level GUI
	     * @ignore
	     */
	    this.__rememberedObjects = [];
	
	    /**
	     * Maps the index of remembered objects to a map of controllers, only used
	     * in top level GUI.
	     *
	     * @private
	     * @ignore
	     *
	     * @example
	     * [
	     *  {
	     *    propertyName: Controller,
	     *    anotherPropertyName: Controller
	     *  },
	     *  {
	     *    propertyName: Controller
	     *  }
	     * ]
	     */
	    this.__rememberedObjectIndecesToControllers = [];
	
	    this.__listening = [];
	
	    params = params || {};
	
	    // Default parameters
	    params = common.defaults(params, {
	      autoPlace: true,
	      width: GUI.DEFAULT_WIDTH
	    });
	
	    params = common.defaults(params, {
	      resizable: params.autoPlace,
	      hideable: params.autoPlace
	    });
	
	
	    if (!common.isUndefined(params.load)) {
	
	      // Explicit preset
	      if (params.preset) params.load.preset = params.preset;
	
	    } else {
	
	      params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };
	
	    }
	
	    if (common.isUndefined(params.parent) && params.hideable) {
	      hideable_guis.push(this);
	    }
	
	    // Only root level GUI's are resizable.
	    params.resizable = common.isUndefined(params.parent) && params.resizable;
	
	
	    if (params.autoPlace && common.isUndefined(params.scrollable)) {
	      params.scrollable = true;
	    }
	//    params.scrollable = common.isUndefined(params.parent) && params.scrollable === true;
	
	    // Not part of params because I don't want people passing this in via
	    // constructor. Should be a 'remembered' value.
	    var use_local_storage =
	        SUPPORTS_LOCAL_STORAGE &&
	            localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';
	
	    Object.defineProperties(this,
	
	        /** @lends dat.gui.GUI.prototype */
	        {
	
	          /**
	           * The parent <code>GUI</code>
	           * @type dat.gui.GUI
	           */
	          parent: {
	            get: function() {
	              return params.parent;
	            }
	          },
	
	          scrollable: {
	            get: function() {
	              return params.scrollable;
	            }
	          },
	
	          /**
	           * Handles <code>GUI</code>'s element placement for you
	           * @type Boolean
	           */
	          autoPlace: {
	            get: function() {
	              return params.autoPlace;
	            }
	          },
	
	          /**
	           * The identifier for a set of saved values
	           * @type String
	           */
	          preset: {
	
	            get: function() {
	              if (_this.parent) {
	                return _this.getRoot().preset;
	              } else {
	                return params.load.preset;
	              }
	            },
	
	            set: function(v) {
	              if (_this.parent) {
	                _this.getRoot().preset = v;
	              } else {
	                params.load.preset = v;
	              }
	              setPresetSelectIndex(this);
	              _this.revert();
	            }
	
	          },
	
	          /**
	           * The width of <code>GUI</code> element
	           * @type Number
	           */
	          width: {
	            get: function() {
	              return params.width;
	            },
	            set: function(v) {
	              params.width = v;
	              setWidth(_this, v);
	            }
	          },
	
	          /**
	           * The name of <code>GUI</code>. Used for folders. i.e
	           * a folder's name
	           * @type String
	           */
	          name: {
	            get: function() {
	              return params.name;
	            },
	            set: function(v) {
	              // TODO Check for collisions among sibling folders
	              params.name = v;
	              if (title_row_name) {
	                title_row_name.innerHTML = params.name;
	              }
	            }
	          },
	
	          /**
	           * Whether the <code>GUI</code> is collapsed or not
	           * @type Boolean
	           */
	          closed: {
	            get: function() {
	              return params.closed;
	            },
	            set: function(v) {
	              params.closed = v;
	              if (params.closed) {
	                dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
	              } else {
	                dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
	              }
	              // For browsers that aren't going to respect the CSS transition,
	              // Lets just check our height against the window height right off
	              // the bat.
	              this.onResize();
	
	              if (_this.__closeButton) {
	                _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
	              }
	            }
	          },
	
	          /**
	           * Contains all presets
	           * @type Object
	           */
	          load: {
	            get: function() {
	              return params.load;
	            }
	          },
	
	          /**
	           * Determines whether or not to use <a href="https://developer.mozilla.org/en/DOM/Storage#localStorage">localStorage</a> as the means for
	           * <code>remember</code>ing
	           * @type Boolean
	           */
	          useLocalStorage: {
	
	            get: function() {
	              return use_local_storage;
	            },
	            set: function(bool) {
	              if (SUPPORTS_LOCAL_STORAGE) {
	                use_local_storage = bool;
	                if (bool) {
	                  dom.bind(window, 'unload', saveToLocalStorage);
	                } else {
	                  dom.unbind(window, 'unload', saveToLocalStorage);
	                }
	                localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
	              }
	            }
	
	          }
	
	        });
	
	    // Are we a root level GUI?
	    if (common.isUndefined(params.parent)) {
	
	      params.closed = false;
	
	      dom.addClass(this.domElement, GUI.CLASS_MAIN);
	      dom.makeSelectable(this.domElement, false);
	
	      // Are we supposed to be loading locally?
	      if (SUPPORTS_LOCAL_STORAGE) {
	
	        if (use_local_storage) {
	
	          _this.useLocalStorage = true;
	
	          var saved_gui = localStorage.getItem(getLocalStorageHash(this, 'gui'));
	
	          if (saved_gui) {
	            params.load = JSON.parse(saved_gui);
	          }
	
	        }
	
	      }
	
	      this.__closeButton = document.createElement('div');
	      this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
	      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
	      this.domElement.appendChild(this.__closeButton);
	
	      dom.bind(this.__closeButton, 'click', function() {
	
	        _this.closed = !_this.closed;
	
	
	      });
	
	
	      // Oh, you're a nested GUI!
	    } else {
	
	      if (params.closed === undefined) {
	        params.closed = true;
	      }
	
	      var title_row_name = document.createTextNode(params.name);
	      dom.addClass(title_row_name, 'controller-name');
	
	      var title_row = addRow(_this, title_row_name);
	
	      var on_click_title = function(e) {
	        e.preventDefault();
	        _this.closed = !_this.closed;
	        return false;
	      };
	
	      dom.addClass(this.__ul, GUI.CLASS_CLOSED);
	
	      dom.addClass(title_row, 'title');
	      dom.bind(title_row, 'click', on_click_title);
	
	      if (!params.closed) {
	        this.closed = false;
	      }
	
	    }
	
	    if (params.autoPlace) {
	
	      if (common.isUndefined(params.parent)) {
	
	        if (auto_place_virgin) {
	          auto_place_container = document.createElement('div');
	          dom.addClass(auto_place_container, CSS_NAMESPACE);
	          dom.addClass(auto_place_container, GUI.CLASS_AUTO_PLACE_CONTAINER);
	          document.body.appendChild(auto_place_container);
	          auto_place_virgin = false;
	        }
	
	        // Put it in the dom for you.
	        auto_place_container.appendChild(this.domElement);
	
	        // Apply the auto styles
	        dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
	
	      }
	
	
	      // Make it not elastic.
	      if (!this.parent) setWidth(_this, params.width);
	
	    }
	
	    dom.bind(window, 'resize', function() { _this.onResize() });
	    dom.bind(this.__ul, 'webkitTransitionEnd', function() { _this.onResize(); });
	    dom.bind(this.__ul, 'transitionend', function() { _this.onResize() });
	    dom.bind(this.__ul, 'oTransitionEnd', function() { _this.onResize() });
	    this.onResize();
	
	
	    if (params.resizable) {
	      addResizeHandle(this);
	    }
	
	    function saveToLocalStorage() {
	      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
	    }
	
	    var root = _this.getRoot();
	    function resetWidth() {
	        var root = _this.getRoot();
	        root.width += 1;
	        common.defer(function() {
	          root.width -= 1;
	        });
	      }
	
	      if (!params.parent) {
	        resetWidth();
	      }
	
	  };
	
	  GUI.toggleHide = function() {
	
	    hide = !hide;
	    common.each(hideable_guis, function(gui) {
	      gui.domElement.style.zIndex = hide ? -999 : 999;
	      gui.domElement.style.opacity = hide ? 0 : 1;
	    });
	  };
	
	  GUI.CLASS_AUTO_PLACE = 'a';
	  GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
	  GUI.CLASS_MAIN = 'main';
	  GUI.CLASS_CONTROLLER_ROW = 'cr';
	  GUI.CLASS_TOO_TALL = 'taller-than-window';
	  GUI.CLASS_CLOSED = 'closed';
	  GUI.CLASS_CLOSE_BUTTON = 'close-button';
	  GUI.CLASS_DRAG = 'drag';
	
	  GUI.DEFAULT_WIDTH = 245;
	  GUI.TEXT_CLOSED = 'Close Controls';
	  GUI.TEXT_OPEN = 'Open Controls';
	
	  dom.bind(window, 'keydown', function(e) {
	
	    if (document.activeElement.type !== 'text' &&
	        (e.which === HIDE_KEY_CODE || e.keyCode == HIDE_KEY_CODE)) {
	      GUI.toggleHide();
	    }
	
	  }, false);
	
	  common.extend(
	
	      GUI.prototype,
	
	      /** @lends dat.gui.GUI */
	      {
	
	        /**
	         * @param object
	         * @param property
	         * @returns {dat.controllers.Controller} The new controller that was added.
	         * @instance
	         */
	        add: function(object, property) {
	
	          return add(
	              this,
	              object,
	              property,
	              {
	                factoryArgs: Array.prototype.slice.call(arguments, 2)
	              }
	          );
	
	        },
	
	        /**
	         * @param object
	         * @param property
	         * @returns {dat.controllers.ColorController} The new controller that was added.
	         * @instance
	         */
	        addColor: function(object, property) {
	
	          return add(
	              this,
	              object,
	              property,
	              {
	                color: true
	              }
	          );
	
	        },
	
	        /**
	         * @param controller
	         * @instance
	         */
	        remove: function(controller) {
	
	          // TODO listening?
	          this.__ul.removeChild(controller.__li);
	          this.__controllers.slice(this.__controllers.indexOf(controller), 1);
	          var _this = this;
	          common.defer(function() {
	            _this.onResize();
	          });
	
	        },
	
	        destroy: function() {
	
	          if (this.autoPlace) {
	            auto_place_container.removeChild(this.domElement);
	          }
	
	        },
	
	        /**
	         * @param name
	         * @returns {dat.gui.GUI} The new folder.
	         * @throws {Error} if this GUI already has a folder by the specified
	         * name
	         * @instance
	         */
	        addFolder: function(name) {
	
	          // We have to prevent collisions on names in order to have a key
	          // by which to remember saved values
	          if (this.__folders[name] !== undefined) {
	            throw new Error('You already have a folder in this GUI by the' +
	                ' name "' + name + '"');
	          }
	
	          var new_gui_params = { name: name, parent: this };
	
	          // We need to pass down the autoPlace trait so that we can
	          // attach event listeners to open/close folder actions to
	          // ensure that a scrollbar appears if the window is too short.
	          new_gui_params.autoPlace = this.autoPlace;
	
	          // Do we have saved appearance data for this folder?
	
	          if (this.load && // Anything loaded?
	              this.load.folders && // Was my parent a dead-end?
	              this.load.folders[name]) { // Did daddy remember me?
	
	            // Start me closed if I was closed
	            new_gui_params.closed = this.load.folders[name].closed;
	
	            // Pass down the loaded data
	            new_gui_params.load = this.load.folders[name];
	
	          }
	
	          var gui = new GUI(new_gui_params);
	          this.__folders[name] = gui;
	
	          var li = addRow(this, gui.domElement);
	          dom.addClass(li, 'folder');
	          return gui;
	
	        },
	
	        open: function() {
	          this.closed = false;
	        },
	
	        close: function() {
	          this.closed = true;
	        },
	
	        onResize: function() {
	
	          var root = this.getRoot();
	
	          if (root.scrollable) {
	
	            var top = dom.getOffset(root.__ul).top;
	            var h = 0;
	
	            common.each(root.__ul.childNodes, function(node) {
	              if (! (root.autoPlace && node === root.__save_row))
	                h += dom.getHeight(node);
	            });
	
	            if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
	              dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
	              root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
	            } else {
	              dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
	              root.__ul.style.height = 'auto';
	            }
	
	          }
	
	          if (root.__resize_handle) {
	            common.defer(function() {
	              root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
	            });
	          }
	
	          if (root.__closeButton) {
	            root.__closeButton.style.width = root.width + 'px';
	          }
	
	        },
	
	        /**
	         * Mark objects for saving. The order of these objects cannot change as
	         * the GUI grows. When remembering new objects, append them to the end
	         * of the list.
	         *
	         * @param {Object...} objects
	         * @throws {Error} if not called on a top level GUI.
	         * @instance
	         */
	        remember: function() {
	
	          if (common.isUndefined(SAVE_DIALOGUE)) {
	            SAVE_DIALOGUE = new CenteredDiv();
	            SAVE_DIALOGUE.domElement.innerHTML = saveDialogueContents;
	          }
	
	          if (this.parent) {
	            throw new Error("You can only call remember on a top level GUI.");
	          }
	
	          var _this = this;
	
	          common.each(Array.prototype.slice.call(arguments), function(object) {
	            if (_this.__rememberedObjects.length == 0) {
	              addSaveMenu(_this);
	            }
	            if (_this.__rememberedObjects.indexOf(object) == -1) {
	              _this.__rememberedObjects.push(object);
	            }
	          });
	
	          if (this.autoPlace) {
	            // Set save row width
	            setWidth(this, this.width);
	          }
	
	        },
	
	        /**
	         * @returns {dat.gui.GUI} the topmost parent GUI of a nested GUI.
	         * @instance
	         */
	        getRoot: function() {
	          var gui = this;
	          while (gui.parent) {
	            gui = gui.parent;
	          }
	          return gui;
	        },
	
	        /**
	         * @returns {Object} a JSON object representing the current state of
	         * this GUI as well as its remembered properties.
	         * @instance
	         */
	        getSaveObject: function() {
	
	          var toReturn = this.load;
	
	          toReturn.closed = this.closed;
	
	          // Am I remembering any values?
	          if (this.__rememberedObjects.length > 0) {
	
	            toReturn.preset = this.preset;
	
	            if (!toReturn.remembered) {
	              toReturn.remembered = {};
	            }
	
	            toReturn.remembered[this.preset] = getCurrentPreset(this);
	
	          }
	
	          toReturn.folders = {};
	          common.each(this.__folders, function(element, key) {
	            toReturn.folders[key] = element.getSaveObject();
	          });
	
	          return toReturn;
	
	        },
	
	        save: function() {
	
	          if (!this.load.remembered) {
	            this.load.remembered = {};
	          }
	
	          this.load.remembered[this.preset] = getCurrentPreset(this);
	          markPresetModified(this, false);
	
	        },
	
	        saveAs: function(presetName) {
	
	          if (!this.load.remembered) {
	
	            // Retain default values upon first save
	            this.load.remembered = {};
	            this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
	
	          }
	
	          this.load.remembered[presetName] = getCurrentPreset(this);
	          this.preset = presetName;
	          addPresetOption(this, presetName, true);
	
	        },
	
	        revert: function(gui) {
	
	          common.each(this.__controllers, function(controller) {
	            // Make revert work on Default.
	            if (!this.getRoot().load.remembered) {
	              controller.setValue(controller.initialValue);
	            } else {
	              recallSavedValue(gui || this.getRoot(), controller);
	            }
	          }, this);
	
	          common.each(this.__folders, function(folder) {
	            folder.revert(folder);
	          });
	
	          if (!gui) {
	            markPresetModified(this.getRoot(), false);
	          }
	
	
	        },
	
	        listen: function(controller) {
	
	          var init = this.__listening.length == 0;
	          this.__listening.push(controller);
	          if (init) updateDisplays(this.__listening);
	
	        }
	
	      }
	
	  );
	
	  function add(gui, object, property, params) {
	
	    if (object[property] === undefined) {
	      throw new Error("Object " + object + " has no property \"" + property + "\"");
	    }
	
	    var controller;
	
	    if (params.color) {
	
	      controller = new ColorController(object, property);
	
	    } else {
	
	      var factoryArgs = [object,property].concat(params.factoryArgs);
	      controller = controllerFactory.apply(gui, factoryArgs);
	
	    }
	
	    if (params.before instanceof Controller) {
	      params.before = params.before.__li;
	    }
	
	    recallSavedValue(gui, controller);
	
	    dom.addClass(controller.domElement, 'c');
	
	    var name = document.createElement('span');
	    dom.addClass(name, 'property-name');
	    name.innerHTML = controller.property;
	
	    var container = document.createElement('div');
	    container.appendChild(name);
	    container.appendChild(controller.domElement);
	
	    var li = addRow(gui, container, params.before);
	
	    dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
	    dom.addClass(li, typeof controller.getValue());
	
	    augmentController(gui, li, controller);
	
	    gui.__controllers.push(controller);
	
	    return controller;
	
	  }
	
	  /**
	   * Add a row to the end of the GUI or before another row.
	   *
	   * @param gui
	   * @param [dom] If specified, inserts the dom content in the new row
	   * @param [liBefore] If specified, places the new row before another row
	   */
	  function addRow(gui, dom, liBefore) {
	    var li = document.createElement('li');
	    if (dom) li.appendChild(dom);
	    if (liBefore) {
	      gui.__ul.insertBefore(li, params.before);
	    } else {
	      gui.__ul.appendChild(li);
	    }
	    gui.onResize();
	    return li;
	  }
	
	  function augmentController(gui, li, controller) {
	
	    controller.__li = li;
	    controller.__gui = gui;
	
	    common.extend(controller, {
	
	      options: function(options) {
	
	        if (arguments.length > 1) {
	          controller.remove();
	
	          return add(
	              gui,
	              controller.object,
	              controller.property,
	              {
	                before: controller.__li.nextElementSibling,
	                factoryArgs: [common.toArray(arguments)]
	              }
	          );
	
	        }
	
	        if (common.isArray(options) || common.isObject(options)) {
	          controller.remove();
	
	          return add(
	              gui,
	              controller.object,
	              controller.property,
	              {
	                before: controller.__li.nextElementSibling,
	                factoryArgs: [options]
	              }
	          );
	
	        }
	
	      },
	
	      name: function(v) {
	        controller.__li.firstElementChild.firstElementChild.innerHTML = v;
	        return controller;
	      },
	
	      listen: function() {
	        controller.__gui.listen(controller);
	        return controller;
	      },
	
	      remove: function() {
	        controller.__gui.remove(controller);
	        return controller;
	      }
	
	    });
	
	    // All sliders should be accompanied by a box.
	    if (controller instanceof NumberControllerSlider) {
	
	      var box = new NumberControllerBox(controller.object, controller.property,
	          { min: controller.__min, max: controller.__max, step: controller.__step });
	
	      common.each(['updateDisplay', 'onChange', 'onFinishChange'], function(method) {
	        var pc = controller[method];
	        var pb = box[method];
	        controller[method] = box[method] = function() {
	          var args = Array.prototype.slice.call(arguments);
	          pc.apply(controller, args);
	          return pb.apply(box, args);
	        }
	      });
	
	      dom.addClass(li, 'has-slider');
	      controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
	
	    }
	    else if (controller instanceof NumberControllerBox) {
	
	      var r = function(returned) {
	
	        // Have we defined both boundaries?
	        if (common.isNumber(controller.__min) && common.isNumber(controller.__max)) {
	
	          // Well, then lets just replace this with a slider.
	          controller.remove();
	          return add(
	              gui,
	              controller.object,
	              controller.property,
	              {
	                before: controller.__li.nextElementSibling,
	                factoryArgs: [controller.__min, controller.__max, controller.__step]
	              });
	
	        }
	
	        return returned;
	
	      };
	
	      controller.min = common.compose(r, controller.min);
	      controller.max = common.compose(r, controller.max);
	
	    }
	    else if (controller instanceof BooleanController) {
	
	      dom.bind(li, 'click', function() {
	        dom.fakeEvent(controller.__checkbox, 'click');
	      });
	
	      dom.bind(controller.__checkbox, 'click', function(e) {
	        e.stopPropagation(); // Prevents double-toggle
	      })
	
	    }
	    else if (controller instanceof FunctionController) {
	
	      dom.bind(li, 'click', function() {
	        dom.fakeEvent(controller.__button, 'click');
	      });
	
	      dom.bind(li, 'mouseover', function() {
	        dom.addClass(controller.__button, 'hover');
	      });
	
	      dom.bind(li, 'mouseout', function() {
	        dom.removeClass(controller.__button, 'hover');
	      });
	
	    }
	    else if (controller instanceof ColorController) {
	
	      dom.addClass(li, 'color');
	      controller.updateDisplay = common.compose(function(r) {
	        li.style.borderLeftColor = controller.__color.toString();
	        return r;
	      }, controller.updateDisplay);
	
	      controller.updateDisplay();
	
	    }
	
	    controller.setValue = common.compose(function(r) {
	      if (gui.getRoot().__preset_select && controller.isModified()) {
	        markPresetModified(gui.getRoot(), true);
	      }
	      return r;
	    }, controller.setValue);
	
	  }
	
	  function recallSavedValue(gui, controller) {
	
	    // Find the topmost GUI, that's where remembered objects live.
	    var root = gui.getRoot();
	
	    // Does the object we're controlling match anything we've been told to
	    // remember?
	    var matched_index = root.__rememberedObjects.indexOf(controller.object);
	
	    // Why yes, it does!
	    if (matched_index != -1) {
	
	      // Let me fetch a map of controllers for thcommon.isObject.
	      var controller_map =
	          root.__rememberedObjectIndecesToControllers[matched_index];
	
	      // Ohp, I believe this is the first controller we've created for this
	      // object. Lets make the map fresh.
	      if (controller_map === undefined) {
	        controller_map = {};
	        root.__rememberedObjectIndecesToControllers[matched_index] =
	            controller_map;
	      }
	
	      // Keep track of this controller
	      controller_map[controller.property] = controller;
	
	      // Okay, now have we saved any values for this controller?
	      if (root.load && root.load.remembered) {
	
	        var preset_map = root.load.remembered;
	
	        // Which preset are we trying to load?
	        var preset;
	
	        if (preset_map[gui.preset]) {
	
	          preset = preset_map[gui.preset];
	
	        } else if (preset_map[DEFAULT_DEFAULT_PRESET_NAME]) {
	
	          // Uhh, you can have the default instead?
	          preset = preset_map[DEFAULT_DEFAULT_PRESET_NAME];
	
	        } else {
	
	          // Nada.
	
	          return;
	
	        }
	
	
	        // Did the loaded object remember thcommon.isObject?
	        if (preset[matched_index] &&
	
	          // Did we remember this particular property?
	            preset[matched_index][controller.property] !== undefined) {
	
	          // We did remember something for this guy ...
	          var value = preset[matched_index][controller.property];
	
	          // And that's what it is.
	          controller.initialValue = value;
	          controller.setValue(value);
	
	        }
	
	      }
	
	    }
	
	  }
	
	  function getLocalStorageHash(gui, key) {
	    // TODO how does this deal with multiple GUI's?
	    return document.location.href + '.' + key;
	
	  }
	
	  function addSaveMenu(gui) {
	
	    var div = gui.__save_row = document.createElement('li');
	
	    dom.addClass(gui.domElement, 'has-save');
	
	    gui.__ul.insertBefore(div, gui.__ul.firstChild);
	
	    dom.addClass(div, 'save-row');
	
	    var gears = document.createElement('span');
	    gears.innerHTML = '&nbsp;';
	    dom.addClass(gears, 'button gears');
	
	    // TODO replace with FunctionController
	    var button = document.createElement('span');
	    button.innerHTML = 'Save';
	    dom.addClass(button, 'button');
	    dom.addClass(button, 'save');
	
	    var button2 = document.createElement('span');
	    button2.innerHTML = 'New';
	    dom.addClass(button2, 'button');
	    dom.addClass(button2, 'save-as');
	
	    var button3 = document.createElement('span');
	    button3.innerHTML = 'Revert';
	    dom.addClass(button3, 'button');
	    dom.addClass(button3, 'revert');
	
	    var select = gui.__preset_select = document.createElement('select');
	
	    if (gui.load && gui.load.remembered) {
	
	      common.each(gui.load.remembered, function(value, key) {
	        addPresetOption(gui, key, key == gui.preset);
	      });
	
	    } else {
	      addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
	    }
	
	    dom.bind(select, 'change', function() {
	
	
	      for (var index = 0; index < gui.__preset_select.length; index++) {
	        gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
	      }
	
	      gui.preset = this.value;
	
	    });
	
	    div.appendChild(select);
	    div.appendChild(gears);
	    div.appendChild(button);
	    div.appendChild(button2);
	    div.appendChild(button3);
	
	    if (SUPPORTS_LOCAL_STORAGE) {
	
	      var saveLocally = document.getElementById('dg-save-locally');
	      var explain = document.getElementById('dg-local-explain');
	
	      saveLocally.style.display = 'block';
	
	      var localStorageCheckBox = document.getElementById('dg-local-storage');
	
	      if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
	        localStorageCheckBox.setAttribute('checked', 'checked');
	      }
	
	      function showHideExplain() {
	        explain.style.display = gui.useLocalStorage ? 'block' : 'none';
	      }
	
	      showHideExplain();
	
	      // TODO: Use a boolean controller, fool!
	      dom.bind(localStorageCheckBox, 'change', function() {
	        gui.useLocalStorage = !gui.useLocalStorage;
	        showHideExplain();
	      });
	
	    }
	
	    var newConstructorTextArea = document.getElementById('dg-new-constructor');
	
	    dom.bind(newConstructorTextArea, 'keydown', function(e) {
	      if (e.metaKey && (e.which === 67 || e.keyCode == 67)) {
	        SAVE_DIALOGUE.hide();
	      }
	    });
	
	    dom.bind(gears, 'click', function() {
	      newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
	      SAVE_DIALOGUE.show();
	      newConstructorTextArea.focus();
	      newConstructorTextArea.select();
	    });
	
	    dom.bind(button, 'click', function() {
	      gui.save();
	    });
	
	    dom.bind(button2, 'click', function() {
	      var presetName = prompt('Enter a new preset name.');
	      if (presetName) gui.saveAs(presetName);
	    });
	
	    dom.bind(button3, 'click', function() {
	      gui.revert();
	    });
	
	//    div.appendChild(button2);
	
	  }
	
	  function addResizeHandle(gui) {
	
	    gui.__resize_handle = document.createElement('div');
	
	    common.extend(gui.__resize_handle.style, {
	
	      width: '6px',
	      marginLeft: '-3px',
	      height: '200px',
	      cursor: 'ew-resize',
	      position: 'absolute'
	//      border: '1px solid blue'
	
	    });
	
	    var pmouseX;
	
	    dom.bind(gui.__resize_handle, 'mousedown', dragStart);
	    dom.bind(gui.__closeButton, 'mousedown', dragStart);
	
	    gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
	
	    function dragStart(e) {
	
	      e.preventDefault();
	
	      pmouseX = e.clientX;
	
	      dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
	      dom.bind(window, 'mousemove', drag);
	      dom.bind(window, 'mouseup', dragStop);
	
	      return false;
	
	    }
	
	    function drag(e) {
	
	      e.preventDefault();
	
	      gui.width += pmouseX - e.clientX;
	      gui.onResize();
	      pmouseX = e.clientX;
	
	      return false;
	
	    }
	
	    function dragStop() {
	
	      dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
	      dom.unbind(window, 'mousemove', drag);
	      dom.unbind(window, 'mouseup', dragStop);
	
	    }
	
	  }
	
	  function setWidth(gui, w) {
	    gui.domElement.style.width = w + 'px';
	    // Auto placed save-rows are position fixed, so we have to
	    // set the width manually if we want it to bleed to the edge
	    if (gui.__save_row && gui.autoPlace) {
	      gui.__save_row.style.width = w + 'px';
	    }if (gui.__closeButton) {
	      gui.__closeButton.style.width = w + 'px';
	    }
	  }
	
	  function getCurrentPreset(gui, useInitialValues) {
	
	    var toReturn = {};
	
	    // For each object I'm remembering
	    common.each(gui.__rememberedObjects, function(val, index) {
	
	      var saved_values = {};
	
	      // The controllers I've made for thcommon.isObject by property
	      var controller_map =
	          gui.__rememberedObjectIndecesToControllers[index];
	
	      // Remember each value for each property
	      common.each(controller_map, function(controller, property) {
	        saved_values[property] = useInitialValues ? controller.initialValue : controller.getValue();
	      });
	
	      // Save the values for thcommon.isObject
	      toReturn[index] = saved_values;
	
	    });
	
	    return toReturn;
	
	  }
	
	  function addPresetOption(gui, name, setSelected) {
	    var opt = document.createElement('option');
	    opt.innerHTML = name;
	    opt.value = name;
	    gui.__preset_select.appendChild(opt);
	    if (setSelected) {
	      gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
	    }
	  }
	
	  function setPresetSelectIndex(gui) {
	    for (var index = 0; index < gui.__preset_select.length; index++) {
	      if (gui.__preset_select[index].value == gui.preset) {
	        gui.__preset_select.selectedIndex = index;
	      }
	    }
	  }
	
	  function markPresetModified(gui, modified) {
	    var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
	//    console.log('mark', modified, opt);
	    if (modified) {
	      opt.innerHTML = opt.value + "*";
	    } else {
	      opt.innerHTML = opt.value;
	    }
	  }
	
	  function updateDisplays(controllerArray) {
	
	
	    if (controllerArray.length != 0) {
	
	      requestAnimationFrame(function() {
	        updateDisplays(controllerArray);
	      });
	
	    }
	
	    common.each(controllerArray, function(c) {
	      c.updateDisplay();
	    });
	
	  }
	
	  return GUI;
	
	})(dat.utils.css,
	"<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>",
	".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n",
	dat.controllers.factory = (function (OptionController, NumberControllerBox, NumberControllerSlider, StringController, FunctionController, BooleanController, common) {
	
	      return function(object, property) {
	
	        var initialValue = object[property];
	
	        // Providing options?
	        if (common.isArray(arguments[2]) || common.isObject(arguments[2])) {
	          return new OptionController(object, property, arguments[2]);
	        }
	
	        // Providing a map?
	
	        if (common.isNumber(initialValue)) {
	
	          if (common.isNumber(arguments[2]) && common.isNumber(arguments[3])) {
	
	            // Has min and max.
	            return new NumberControllerSlider(object, property, arguments[2], arguments[3]);
	
	          } else {
	
	            return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });
	
	          }
	
	        }
	
	        if (common.isString(initialValue)) {
	          return new StringController(object, property);
	        }
	
	        if (common.isFunction(initialValue)) {
	          return new FunctionController(object, property, '');
	        }
	
	        if (common.isBoolean(initialValue)) {
	          return new BooleanController(object, property);
	        }
	
	      }
	
	    })(dat.controllers.OptionController,
	dat.controllers.NumberControllerBox,
	dat.controllers.NumberControllerSlider,
	dat.controllers.StringController = (function (Controller, dom, common) {
	
	  /**
	   * @class Provides a text input to alter the string property of an object.
	   *
	   * @extends dat.controllers.Controller
	   *
	   * @param {Object} object The object to be manipulated
	   * @param {string} property The name of the property to be manipulated
	   *
	   * @member dat.controllers
	   */
	  var StringController = function(object, property) {
	
	    StringController.superclass.call(this, object, property);
	
	    var _this = this;
	
	    this.__input = document.createElement('input');
	    this.__input.setAttribute('type', 'text');
	
	    dom.bind(this.__input, 'keyup', onChange);
	    dom.bind(this.__input, 'change', onChange);
	    dom.bind(this.__input, 'blur', onBlur);
	    dom.bind(this.__input, 'keydown', function(e) {
	      if (e.keyCode === 13) {
	        this.blur();
	      }
	    });
	    
	
	    function onChange() {
	      _this.setValue(_this.__input.value);
	    }
	
	    function onBlur() {
	      if (_this.__onFinishChange) {
	        _this.__onFinishChange.call(_this, _this.getValue());
	      }
	    }
	
	    this.updateDisplay();
	
	    this.domElement.appendChild(this.__input);
	
	  };
	
	  StringController.superclass = Controller;
	
	  common.extend(
	
	      StringController.prototype,
	      Controller.prototype,
	
	      {
	
	        updateDisplay: function() {
	          // Stops the caret from moving on account of:
	          // keyup -> setValue -> updateDisplay
	          if (!dom.isActive(this.__input)) {
	            this.__input.value = this.getValue();
	          }
	          return StringController.superclass.prototype.updateDisplay.call(this);
	        }
	
	      }
	
	  );
	
	  return StringController;
	
	})(dat.controllers.Controller,
	dat.dom.dom,
	dat.utils.common),
	dat.controllers.FunctionController,
	dat.controllers.BooleanController,
	dat.utils.common),
	dat.controllers.Controller,
	dat.controllers.BooleanController,
	dat.controllers.FunctionController,
	dat.controllers.NumberControllerBox,
	dat.controllers.NumberControllerSlider,
	dat.controllers.OptionController,
	dat.controllers.ColorController = (function (Controller, dom, Color, interpret, common) {
	
	  var ColorController = function(object, property) {
	
	    ColorController.superclass.call(this, object, property);
	
	    this.__color = new Color(this.getValue());
	    this.__temp = new Color(0);
	
	    var _this = this;
	
	    this.domElement = document.createElement('div');
	
	    dom.makeSelectable(this.domElement, false);
	
	    this.__selector = document.createElement('div');
	    this.__selector.className = 'selector';
	
	    this.__saturation_field = document.createElement('div');
	    this.__saturation_field.className = 'saturation-field';
	
	    this.__field_knob = document.createElement('div');
	    this.__field_knob.className = 'field-knob';
	    this.__field_knob_border = '2px solid ';
	
	    this.__hue_knob = document.createElement('div');
	    this.__hue_knob.className = 'hue-knob';
	
	    this.__hue_field = document.createElement('div');
	    this.__hue_field.className = 'hue-field';
	
	    this.__input = document.createElement('input');
	    this.__input.type = 'text';
	    this.__input_textShadow = '0 1px 1px ';
	
	    dom.bind(this.__input, 'keydown', function(e) {
	      if (e.keyCode === 13) { // on enter
	        onBlur.call(this);
	      }
	    });
	
	    dom.bind(this.__input, 'blur', onBlur);
	
	    dom.bind(this.__selector, 'mousedown', function(e) {
	
	      dom
	        .addClass(this, 'drag')
	        .bind(window, 'mouseup', function(e) {
	          dom.removeClass(_this.__selector, 'drag');
	        });
	
	    });
	
	    var value_field = document.createElement('div');
	
	    common.extend(this.__selector.style, {
	      width: '122px',
	      height: '102px',
	      padding: '3px',
	      backgroundColor: '#222',
	      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
	    });
	
	    common.extend(this.__field_knob.style, {
	      position: 'absolute',
	      width: '12px',
	      height: '12px',
	      border: this.__field_knob_border + (this.__color.v < .5 ? '#fff' : '#000'),
	      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
	      borderRadius: '12px',
	      zIndex: 1
	    });
	    
	    common.extend(this.__hue_knob.style, {
	      position: 'absolute',
	      width: '15px',
	      height: '2px',
	      borderRight: '4px solid #fff',
	      zIndex: 1
	    });
	
	    common.extend(this.__saturation_field.style, {
	      width: '100px',
	      height: '100px',
	      border: '1px solid #555',
	      marginRight: '3px',
	      display: 'inline-block',
	      cursor: 'pointer'
	    });
	
	    common.extend(value_field.style, {
	      width: '100%',
	      height: '100%',
	      background: 'none'
	    });
	    
	    linearGradient(value_field, 'top', 'rgba(0,0,0,0)', '#000');
	
	    common.extend(this.__hue_field.style, {
	      width: '15px',
	      height: '100px',
	      display: 'inline-block',
	      border: '1px solid #555',
	      cursor: 'ns-resize'
	    });
	
	    hueGradient(this.__hue_field);
	
	    common.extend(this.__input.style, {
	      outline: 'none',
	//      width: '120px',
	      textAlign: 'center',
	//      padding: '4px',
	//      marginBottom: '6px',
	      color: '#fff',
	      border: 0,
	      fontWeight: 'bold',
	      textShadow: this.__input_textShadow + 'rgba(0,0,0,0.7)'
	    });
	
	    dom.bind(this.__saturation_field, 'mousedown', fieldDown);
	    dom.bind(this.__field_knob, 'mousedown', fieldDown);
	
	    dom.bind(this.__hue_field, 'mousedown', function(e) {
	      setH(e);
	      dom.bind(window, 'mousemove', setH);
	      dom.bind(window, 'mouseup', unbindH);
	    });
	
	    function fieldDown(e) {
	      setSV(e);
	      // document.body.style.cursor = 'none';
	      dom.bind(window, 'mousemove', setSV);
	      dom.bind(window, 'mouseup', unbindSV);
	    }
	
	    function unbindSV() {
	      dom.unbind(window, 'mousemove', setSV);
	      dom.unbind(window, 'mouseup', unbindSV);
	      // document.body.style.cursor = 'default';
	    }
	
	    function onBlur() {
	      var i = interpret(this.value);
	      if (i !== false) {
	        _this.__color.__state = i;
	        _this.setValue(_this.__color.toOriginal());
	      } else {
	        this.value = _this.__color.toString();
	      }
	    }
	
	    function unbindH() {
	      dom.unbind(window, 'mousemove', setH);
	      dom.unbind(window, 'mouseup', unbindH);
	    }
	
	    this.__saturation_field.appendChild(value_field);
	    this.__selector.appendChild(this.__field_knob);
	    this.__selector.appendChild(this.__saturation_field);
	    this.__selector.appendChild(this.__hue_field);
	    this.__hue_field.appendChild(this.__hue_knob);
	
	    this.domElement.appendChild(this.__input);
	    this.domElement.appendChild(this.__selector);
	
	    this.updateDisplay();
	
	    function setSV(e) {
	
	      e.preventDefault();
	
	      var w = dom.getWidth(_this.__saturation_field);
	      var o = dom.getOffset(_this.__saturation_field);
	      var s = (e.clientX - o.left + document.body.scrollLeft) / w;
	      var v = 1 - (e.clientY - o.top + document.body.scrollTop) / w;
	
	      if (v > 1) v = 1;
	      else if (v < 0) v = 0;
	
	      if (s > 1) s = 1;
	      else if (s < 0) s = 0;
	
	      _this.__color.v = v;
	      _this.__color.s = s;
	
	      _this.setValue(_this.__color.toOriginal());
	
	
	      return false;
	
	    }
	
	    function setH(e) {
	
	      e.preventDefault();
	
	      var s = dom.getHeight(_this.__hue_field);
	      var o = dom.getOffset(_this.__hue_field);
	      var h = 1 - (e.clientY - o.top + document.body.scrollTop) / s;
	
	      if (h > 1) h = 1;
	      else if (h < 0) h = 0;
	
	      _this.__color.h = h * 360;
	
	      _this.setValue(_this.__color.toOriginal());
	
	      return false;
	
	    }
	
	  };
	
	  ColorController.superclass = Controller;
	
	  common.extend(
	
	      ColorController.prototype,
	      Controller.prototype,
	
	      {
	
	        updateDisplay: function() {
	
	          var i = interpret(this.getValue());
	
	          if (i !== false) {
	
	            var mismatch = false;
	
	            // Check for mismatch on the interpreted value.
	
	            common.each(Color.COMPONENTS, function(component) {
	              if (!common.isUndefined(i[component]) &&
	                  !common.isUndefined(this.__color.__state[component]) &&
	                  i[component] !== this.__color.__state[component]) {
	                mismatch = true;
	                return {}; // break
	              }
	            }, this);
	
	            // If nothing diverges, we keep our previous values
	            // for statefulness, otherwise we recalculate fresh
	            if (mismatch) {
	              common.extend(this.__color.__state, i);
	            }
	
	          }
	
	          common.extend(this.__temp.__state, this.__color.__state);
	
	          this.__temp.a = 1;
	
	          var flip = (this.__color.v < .5 || this.__color.s > .5) ? 255 : 0;
	          var _flip = 255 - flip;
	
	          common.extend(this.__field_knob.style, {
	            marginLeft: 100 * this.__color.s - 7 + 'px',
	            marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
	            backgroundColor: this.__temp.toString(),
	            border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip +')'
	          });
	
	          this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px'
	
	          this.__temp.s = 1;
	          this.__temp.v = 1;
	
	          linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toString());
	
	          common.extend(this.__input.style, {
	            backgroundColor: this.__input.value = this.__color.toString(),
	            color: 'rgb(' + flip + ',' + flip + ',' + flip +')',
	            textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip +',.7)'
	          });
	
	        }
	
	      }
	
	  );
	  
	  var vendors = ['-moz-','-o-','-webkit-','-ms-',''];
	  
	  function linearGradient(elem, x, a, b) {
	    elem.style.background = '';
	    common.each(vendors, function(vendor) {
	      elem.style.cssText += 'background: ' + vendor + 'linear-gradient('+x+', '+a+' 0%, ' + b + ' 100%); ';
	    });
	  }
	  
	  function hueGradient(elem) {
	    elem.style.background = '';
	    elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);'
	    elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
	    elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
	    elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
	    elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
	  }
	
	
	  return ColorController;
	
	})(dat.controllers.Controller,
	dat.dom.dom,
	dat.color.Color = (function (interpret, math, toString, common) {
	
	  var Color = function() {
	
	    this.__state = interpret.apply(this, arguments);
	
	    if (this.__state === false) {
	      throw 'Failed to interpret color arguments';
	    }
	
	    this.__state.a = this.__state.a || 1;
	
	
	  };
	
	  Color.COMPONENTS = ['r','g','b','h','s','v','hex','a'];
	
	  common.extend(Color.prototype, {
	
	    toString: function() {
	      return toString(this);
	    },
	
	    toOriginal: function() {
	      return this.__state.conversion.write(this);
	    }
	
	  });
	
	  defineRGBComponent(Color.prototype, 'r', 2);
	  defineRGBComponent(Color.prototype, 'g', 1);
	  defineRGBComponent(Color.prototype, 'b', 0);
	
	  defineHSVComponent(Color.prototype, 'h');
	  defineHSVComponent(Color.prototype, 's');
	  defineHSVComponent(Color.prototype, 'v');
	
	  Object.defineProperty(Color.prototype, 'a', {
	
	    get: function() {
	      return this.__state.a;
	    },
	
	    set: function(v) {
	      this.__state.a = v;
	    }
	
	  });
	
	  Object.defineProperty(Color.prototype, 'hex', {
	
	    get: function() {
	
	      if (!this.__state.space !== 'HEX') {
	        this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
	      }
	
	      return this.__state.hex;
	
	    },
	
	    set: function(v) {
	
	      this.__state.space = 'HEX';
	      this.__state.hex = v;
	
	    }
	
	  });
	
	  function defineRGBComponent(target, component, componentHexIndex) {
	
	    Object.defineProperty(target, component, {
	
	      get: function() {
	
	        if (this.__state.space === 'RGB') {
	          return this.__state[component];
	        }
	
	        recalculateRGB(this, component, componentHexIndex);
	
	        return this.__state[component];
	
	      },
	
	      set: function(v) {
	
	        if (this.__state.space !== 'RGB') {
	          recalculateRGB(this, component, componentHexIndex);
	          this.__state.space = 'RGB';
	        }
	
	        this.__state[component] = v;
	
	      }
	
	    });
	
	  }
	
	  function defineHSVComponent(target, component) {
	
	    Object.defineProperty(target, component, {
	
	      get: function() {
	
	        if (this.__state.space === 'HSV')
	          return this.__state[component];
	
	        recalculateHSV(this);
	
	        return this.__state[component];
	
	      },
	
	      set: function(v) {
	
	        if (this.__state.space !== 'HSV') {
	          recalculateHSV(this);
	          this.__state.space = 'HSV';
	        }
	
	        this.__state[component] = v;
	
	      }
	
	    });
	
	  }
	
	  function recalculateRGB(color, component, componentHexIndex) {
	
	    if (color.__state.space === 'HEX') {
	
	      color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);
	
	    } else if (color.__state.space === 'HSV') {
	
	      common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
	
	    } else {
	
	      throw 'Corrupted color state';
	
	    }
	
	  }
	
	  function recalculateHSV(color) {
	
	    var result = math.rgb_to_hsv(color.r, color.g, color.b);
	
	    common.extend(color.__state,
	        {
	          s: result.s,
	          v: result.v
	        }
	    );
	
	    if (!common.isNaN(result.h)) {
	      color.__state.h = result.h;
	    } else if (common.isUndefined(color.__state.h)) {
	      color.__state.h = 0;
	    }
	
	  }
	
	  return Color;
	
	})(dat.color.interpret,
	dat.color.math = (function () {
	
	  var tmpComponent;
	
	  return {
	
	    hsv_to_rgb: function(h, s, v) {
	
	      var hi = Math.floor(h / 60) % 6;
	
	      var f = h / 60 - Math.floor(h / 60);
	      var p = v * (1.0 - s);
	      var q = v * (1.0 - (f * s));
	      var t = v * (1.0 - ((1.0 - f) * s));
	      var c = [
	        [v, t, p],
	        [q, v, p],
	        [p, v, t],
	        [p, q, v],
	        [t, p, v],
	        [v, p, q]
	      ][hi];
	
	      return {
	        r: c[0] * 255,
	        g: c[1] * 255,
	        b: c[2] * 255
	      };
	
	    },
	
	    rgb_to_hsv: function(r, g, b) {
	
	      var min = Math.min(r, g, b),
	          max = Math.max(r, g, b),
	          delta = max - min,
	          h, s;
	
	      if (max != 0) {
	        s = delta / max;
	      } else {
	        return {
	          h: NaN,
	          s: 0,
	          v: 0
	        };
	      }
	
	      if (r == max) {
	        h = (g - b) / delta;
	      } else if (g == max) {
	        h = 2 + (b - r) / delta;
	      } else {
	        h = 4 + (r - g) / delta;
	      }
	      h /= 6;
	      if (h < 0) {
	        h += 1;
	      }
	
	      return {
	        h: h * 360,
	        s: s,
	        v: max / 255
	      };
	    },
	
	    rgb_to_hex: function(r, g, b) {
	      var hex = this.hex_with_component(0, 2, r);
	      hex = this.hex_with_component(hex, 1, g);
	      hex = this.hex_with_component(hex, 0, b);
	      return hex;
	    },
	
	    component_from_hex: function(hex, componentIndex) {
	      return (hex >> (componentIndex * 8)) & 0xFF;
	    },
	
	    hex_with_component: function(hex, componentIndex, value) {
	      return value << (tmpComponent = componentIndex * 8) | (hex & ~ (0xFF << tmpComponent));
	    }
	
	  }
	
	})(),
	dat.color.toString,
	dat.utils.common),
	dat.color.interpret,
	dat.utils.common),
	dat.utils.requestAnimationFrame = (function () {
	
	  /**
	   * requirejs version of Paul Irish's RequestAnimationFrame
	   * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	   */
	
	  return window.webkitRequestAnimationFrame ||
	      window.mozRequestAnimationFrame ||
	      window.oRequestAnimationFrame ||
	      window.msRequestAnimationFrame ||
	      function(callback, element) {
	
	        window.setTimeout(callback, 1000 / 60);
	
	      };
	})(),
	dat.dom.CenteredDiv = (function (dom, common) {
	
	
	  var CenteredDiv = function() {
	
	    this.backgroundElement = document.createElement('div');
	    common.extend(this.backgroundElement.style, {
	      backgroundColor: 'rgba(0,0,0,0.8)',
	      top: 0,
	      left: 0,
	      display: 'none',
	      zIndex: '1000',
	      opacity: 0,
	      WebkitTransition: 'opacity 0.2s linear'
	    });
	
	    dom.makeFullscreen(this.backgroundElement);
	    this.backgroundElement.style.position = 'fixed';
	
	    this.domElement = document.createElement('div');
	    common.extend(this.domElement.style, {
	      position: 'fixed',
	      display: 'none',
	      zIndex: '1001',
	      opacity: 0,
	      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear'
	    });
	
	
	    document.body.appendChild(this.backgroundElement);
	    document.body.appendChild(this.domElement);
	
	    var _this = this;
	    dom.bind(this.backgroundElement, 'click', function() {
	      _this.hide();
	    });
	
	
	  };
	
	  CenteredDiv.prototype.show = function() {
	
	    var _this = this;
	    
	
	
	    this.backgroundElement.style.display = 'block';
	
	    this.domElement.style.display = 'block';
	    this.domElement.style.opacity = 0;
	//    this.domElement.style.top = '52%';
	    this.domElement.style.webkitTransform = 'scale(1.1)';
	
	    this.layout();
	
	    common.defer(function() {
	      _this.backgroundElement.style.opacity = 1;
	      _this.domElement.style.opacity = 1;
	      _this.domElement.style.webkitTransform = 'scale(1)';
	    });
	
	  };
	
	  CenteredDiv.prototype.hide = function() {
	
	    var _this = this;
	
	    var hide = function() {
	
	      _this.domElement.style.display = 'none';
	      _this.backgroundElement.style.display = 'none';
	
	      dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
	      dom.unbind(_this.domElement, 'transitionend', hide);
	      dom.unbind(_this.domElement, 'oTransitionEnd', hide);
	
	    };
	
	    dom.bind(this.domElement, 'webkitTransitionEnd', hide);
	    dom.bind(this.domElement, 'transitionend', hide);
	    dom.bind(this.domElement, 'oTransitionEnd', hide);
	
	    this.backgroundElement.style.opacity = 0;
	//    this.domElement.style.top = '48%';
	    this.domElement.style.opacity = 0;
	    this.domElement.style.webkitTransform = 'scale(1.1)';
	
	  };
	
	  CenteredDiv.prototype.layout = function() {
	    this.domElement.style.left = window.innerWidth/2 - dom.getWidth(this.domElement) / 2 + 'px';
	    this.domElement.style.top = window.innerHeight/2 - dom.getHeight(this.domElement) / 2 + 'px';
	  };
	  
	  function lockScroll(e) {
	    console.log(e);
	  }
	
	  return CenteredDiv;
	
	})(dat.dom.dom,
	dat.utils.common),
	dat.dom.dom,
	dat.utils.common);

/***/ },
/* 85 */
/***/ function(module, exports) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */
	
	/** @namespace */
	var dat = module.exports = dat || {};
	
	/** @namespace */
	dat.color = dat.color || {};
	
	/** @namespace */
	dat.utils = dat.utils || {};
	
	dat.utils.common = (function () {
	  
	  var ARR_EACH = Array.prototype.forEach;
	  var ARR_SLICE = Array.prototype.slice;
	
	  /**
	   * Band-aid methods for things that should be a lot easier in JavaScript.
	   * Implementation and structure inspired by underscore.js
	   * http://documentcloud.github.com/underscore/
	   */
	
	  return { 
	    
	    BREAK: {},
	  
	    extend: function(target) {
	      
	      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
	        
	        for (var key in obj)
	          if (!this.isUndefined(obj[key])) 
	            target[key] = obj[key];
	        
	      }, this);
	      
	      return target;
	      
	    },
	    
	    defaults: function(target) {
	      
	      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
	        
	        for (var key in obj)
	          if (this.isUndefined(target[key])) 
	            target[key] = obj[key];
	        
	      }, this);
	      
	      return target;
	    
	    },
	    
	    compose: function() {
	      var toCall = ARR_SLICE.call(arguments);
	            return function() {
	              var args = ARR_SLICE.call(arguments);
	              for (var i = toCall.length -1; i >= 0; i--) {
	                args = [toCall[i].apply(this, args)];
	              }
	              return args[0];
	            }
	    },
	    
	    each: function(obj, itr, scope) {
	
	      
	      if (ARR_EACH && obj.forEach === ARR_EACH) { 
	        
	        obj.forEach(itr, scope);
	        
	      } else if (obj.length === obj.length + 0) { // Is number but not NaN
	        
	        for (var key = 0, l = obj.length; key < l; key++)
	          if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) 
	            return;
	            
	      } else {
	
	        for (var key in obj) 
	          if (itr.call(scope, obj[key], key) === this.BREAK)
	            return;
	            
	      }
	            
	    },
	    
	    defer: function(fnc) {
	      setTimeout(fnc, 0);
	    },
	    
	    toArray: function(obj) {
	      if (obj.toArray) return obj.toArray();
	      return ARR_SLICE.call(obj);
	    },
	
	    isUndefined: function(obj) {
	      return obj === undefined;
	    },
	    
	    isNull: function(obj) {
	      return obj === null;
	    },
	    
	    isNaN: function(obj) {
	      return obj !== obj;
	    },
	    
	    isArray: Array.isArray || function(obj) {
	      return obj.constructor === Array;
	    },
	    
	    isObject: function(obj) {
	      return obj === Object(obj);
	    },
	    
	    isNumber: function(obj) {
	      return obj === obj+0;
	    },
	    
	    isString: function(obj) {
	      return obj === obj+'';
	    },
	    
	    isBoolean: function(obj) {
	      return obj === false || obj === true;
	    },
	    
	    isFunction: function(obj) {
	      return Object.prototype.toString.call(obj) === '[object Function]';
	    }
	  
	  };
	    
	})();
	
	
	dat.color.toString = (function (common) {
	
	  return function(color) {
	
	    if (color.a == 1 || common.isUndefined(color.a)) {
	
	      var s = color.hex.toString(16);
	      while (s.length < 6) {
	        s = '0' + s;
	      }
	
	      return '#' + s;
	
	    } else {
	
	      return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';
	
	    }
	
	  }
	
	})(dat.utils.common);
	
	
	dat.Color = dat.color.Color = (function (interpret, math, toString, common) {
	
	  var Color = function() {
	
	    this.__state = interpret.apply(this, arguments);
	
	    if (this.__state === false) {
	      throw 'Failed to interpret color arguments';
	    }
	
	    this.__state.a = this.__state.a || 1;
	
	
	  };
	
	  Color.COMPONENTS = ['r','g','b','h','s','v','hex','a'];
	
	  common.extend(Color.prototype, {
	
	    toString: function() {
	      return toString(this);
	    },
	
	    toOriginal: function() {
	      return this.__state.conversion.write(this);
	    }
	
	  });
	
	  defineRGBComponent(Color.prototype, 'r', 2);
	  defineRGBComponent(Color.prototype, 'g', 1);
	  defineRGBComponent(Color.prototype, 'b', 0);
	
	  defineHSVComponent(Color.prototype, 'h');
	  defineHSVComponent(Color.prototype, 's');
	  defineHSVComponent(Color.prototype, 'v');
	
	  Object.defineProperty(Color.prototype, 'a', {
	
	    get: function() {
	      return this.__state.a;
	    },
	
	    set: function(v) {
	      this.__state.a = v;
	    }
	
	  });
	
	  Object.defineProperty(Color.prototype, 'hex', {
	
	    get: function() {
	
	      if (!this.__state.space !== 'HEX') {
	        this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
	      }
	
	      return this.__state.hex;
	
	    },
	
	    set: function(v) {
	
	      this.__state.space = 'HEX';
	      this.__state.hex = v;
	
	    }
	
	  });
	
	  function defineRGBComponent(target, component, componentHexIndex) {
	
	    Object.defineProperty(target, component, {
	
	      get: function() {
	
	        if (this.__state.space === 'RGB') {
	          return this.__state[component];
	        }
	
	        recalculateRGB(this, component, componentHexIndex);
	
	        return this.__state[component];
	
	      },
	
	      set: function(v) {
	
	        if (this.__state.space !== 'RGB') {
	          recalculateRGB(this, component, componentHexIndex);
	          this.__state.space = 'RGB';
	        }
	
	        this.__state[component] = v;
	
	      }
	
	    });
	
	  }
	
	  function defineHSVComponent(target, component) {
	
	    Object.defineProperty(target, component, {
	
	      get: function() {
	
	        if (this.__state.space === 'HSV')
	          return this.__state[component];
	
	        recalculateHSV(this);
	
	        return this.__state[component];
	
	      },
	
	      set: function(v) {
	
	        if (this.__state.space !== 'HSV') {
	          recalculateHSV(this);
	          this.__state.space = 'HSV';
	        }
	
	        this.__state[component] = v;
	
	      }
	
	    });
	
	  }
	
	  function recalculateRGB(color, component, componentHexIndex) {
	
	    if (color.__state.space === 'HEX') {
	
	      color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);
	
	    } else if (color.__state.space === 'HSV') {
	
	      common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
	
	    } else {
	
	      throw 'Corrupted color state';
	
	    }
	
	  }
	
	  function recalculateHSV(color) {
	
	    var result = math.rgb_to_hsv(color.r, color.g, color.b);
	
	    common.extend(color.__state,
	        {
	          s: result.s,
	          v: result.v
	        }
	    );
	
	    if (!common.isNaN(result.h)) {
	      color.__state.h = result.h;
	    } else if (common.isUndefined(color.__state.h)) {
	      color.__state.h = 0;
	    }
	
	  }
	
	  return Color;
	
	})(dat.color.interpret = (function (toString, common) {
	
	  var result, toReturn;
	
	  var interpret = function() {
	
	    toReturn = false;
	
	    var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];
	
	    common.each(INTERPRETATIONS, function(family) {
	
	      if (family.litmus(original)) {
	
	        common.each(family.conversions, function(conversion, conversionName) {
	
	          result = conversion.read(original);
	
	          if (toReturn === false && result !== false) {
	            toReturn = result;
	            result.conversionName = conversionName;
	            result.conversion = conversion;
	            return common.BREAK;
	
	          }
	
	        });
	
	        return common.BREAK;
	
	      }
	
	    });
	
	    return toReturn;
	
	  };
	
	  var INTERPRETATIONS = [
	
	    // Strings
	    {
	
	      litmus: common.isString,
	
	      conversions: {
	
	        THREE_CHAR_HEX: {
	
	          read: function(original) {
	
	            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
	            if (test === null) return false;
	
	            return {
	              space: 'HEX',
	              hex: parseInt(
	                  '0x' +
	                      test[1].toString() + test[1].toString() +
	                      test[2].toString() + test[2].toString() +
	                      test[3].toString() + test[3].toString())
	            };
	
	          },
	
	          write: toString
	
	        },
	
	        SIX_CHAR_HEX: {
	
	          read: function(original) {
	
	            var test = original.match(/^#([A-F0-9]{6})$/i);
	            if (test === null) return false;
	
	            return {
	              space: 'HEX',
	              hex: parseInt('0x' + test[1].toString())
	            };
	
	          },
	
	          write: toString
	
	        },
	
	        CSS_RGB: {
	
	          read: function(original) {
	
	            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
	            if (test === null) return false;
	
	            return {
	              space: 'RGB',
	              r: parseFloat(test[1]),
	              g: parseFloat(test[2]),
	              b: parseFloat(test[3])
	            };
	
	          },
	
	          write: toString
	
	        },
	
	        CSS_RGBA: {
	
	          read: function(original) {
	
	            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
	            if (test === null) return false;
	
	            return {
	              space: 'RGB',
	              r: parseFloat(test[1]),
	              g: parseFloat(test[2]),
	              b: parseFloat(test[3]),
	              a: parseFloat(test[4])
	            };
	
	          },
	
	          write: toString
	
	        }
	
	      }
	
	    },
	
	    // Numbers
	    {
	
	      litmus: common.isNumber,
	
	      conversions: {
	
	        HEX: {
	          read: function(original) {
	            return {
	              space: 'HEX',
	              hex: original,
	              conversionName: 'HEX'
	            }
	          },
	
	          write: function(color) {
	            return color.hex;
	          }
	        }
	
	      }
	
	    },
	
	    // Arrays
	    {
	
	      litmus: common.isArray,
	
	      conversions: {
	
	        RGB_ARRAY: {
	          read: function(original) {
	            if (original.length != 3) return false;
	            return {
	              space: 'RGB',
	              r: original[0],
	              g: original[1],
	              b: original[2]
	            };
	          },
	
	          write: function(color) {
	            return [color.r, color.g, color.b];
	          }
	
	        },
	
	        RGBA_ARRAY: {
	          read: function(original) {
	            if (original.length != 4) return false;
	            return {
	              space: 'RGB',
	              r: original[0],
	              g: original[1],
	              b: original[2],
	              a: original[3]
	            };
	          },
	
	          write: function(color) {
	            return [color.r, color.g, color.b, color.a];
	          }
	
	        }
	
	      }
	
	    },
	
	    // Objects
	    {
	
	      litmus: common.isObject,
	
	      conversions: {
	
	        RGBA_OBJ: {
	          read: function(original) {
	            if (common.isNumber(original.r) &&
	                common.isNumber(original.g) &&
	                common.isNumber(original.b) &&
	                common.isNumber(original.a)) {
	              return {
	                space: 'RGB',
	                r: original.r,
	                g: original.g,
	                b: original.b,
	                a: original.a
	              }
	            }
	            return false;
	          },
	
	          write: function(color) {
	            return {
	              r: color.r,
	              g: color.g,
	              b: color.b,
	              a: color.a
	            }
	          }
	        },
	
	        RGB_OBJ: {
	          read: function(original) {
	            if (common.isNumber(original.r) &&
	                common.isNumber(original.g) &&
	                common.isNumber(original.b)) {
	              return {
	                space: 'RGB',
	                r: original.r,
	                g: original.g,
	                b: original.b
	              }
	            }
	            return false;
	          },
	
	          write: function(color) {
	            return {
	              r: color.r,
	              g: color.g,
	              b: color.b
	            }
	          }
	        },
	
	        HSVA_OBJ: {
	          read: function(original) {
	            if (common.isNumber(original.h) &&
	                common.isNumber(original.s) &&
	                common.isNumber(original.v) &&
	                common.isNumber(original.a)) {
	              return {
	                space: 'HSV',
	                h: original.h,
	                s: original.s,
	                v: original.v,
	                a: original.a
	              }
	            }
	            return false;
	          },
	
	          write: function(color) {
	            return {
	              h: color.h,
	              s: color.s,
	              v: color.v,
	              a: color.a
	            }
	          }
	        },
	
	        HSV_OBJ: {
	          read: function(original) {
	            if (common.isNumber(original.h) &&
	                common.isNumber(original.s) &&
	                common.isNumber(original.v)) {
	              return {
	                space: 'HSV',
	                h: original.h,
	                s: original.s,
	                v: original.v
	              }
	            }
	            return false;
	          },
	
	          write: function(color) {
	            return {
	              h: color.h,
	              s: color.s,
	              v: color.v
	            }
	          }
	
	        }
	
	      }
	
	    }
	
	
	  ];
	
	  return interpret;
	
	
	})(dat.color.toString,
	dat.utils.common),
	dat.color.math = (function () {
	
	  var tmpComponent;
	
	  return {
	
	    hsv_to_rgb: function(h, s, v) {
	
	      var hi = Math.floor(h / 60) % 6;
	
	      var f = h / 60 - Math.floor(h / 60);
	      var p = v * (1.0 - s);
	      var q = v * (1.0 - (f * s));
	      var t = v * (1.0 - ((1.0 - f) * s));
	      var c = [
	        [v, t, p],
	        [q, v, p],
	        [p, v, t],
	        [p, q, v],
	        [t, p, v],
	        [v, p, q]
	      ][hi];
	
	      return {
	        r: c[0] * 255,
	        g: c[1] * 255,
	        b: c[2] * 255
	      };
	
	    },
	
	    rgb_to_hsv: function(r, g, b) {
	
	      var min = Math.min(r, g, b),
	          max = Math.max(r, g, b),
	          delta = max - min,
	          h, s;
	
	      if (max != 0) {
	        s = delta / max;
	      } else {
	        return {
	          h: NaN,
	          s: 0,
	          v: 0
	        };
	      }
	
	      if (r == max) {
	        h = (g - b) / delta;
	      } else if (g == max) {
	        h = 2 + (b - r) / delta;
	      } else {
	        h = 4 + (r - g) / delta;
	      }
	      h /= 6;
	      if (h < 0) {
	        h += 1;
	      }
	
	      return {
	        h: h * 360,
	        s: s,
	        v: max / 255
	      };
	    },
	
	    rgb_to_hex: function(r, g, b) {
	      var hex = this.hex_with_component(0, 2, r);
	      hex = this.hex_with_component(hex, 1, g);
	      hex = this.hex_with_component(hex, 0, b);
	      return hex;
	    },
	
	    component_from_hex: function(hex, componentIndex) {
	      return (hex >> (componentIndex * 8)) & 0xFF;
	    },
	
	    hex_with_component: function(hex, componentIndex, value) {
	      return value << (tmpComponent = componentIndex * 8) | (hex & ~ (0xFF << tmpComponent));
	    }
	
	  }
	
	})(),
	dat.color.toString,
	dat.utils.common);

/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var defaultExcept = exports.defaultExcept = ['127.0.0.1', '0.0.0.0', 'localhost'];
	
	var redirect = exports.redirect = function redirect() {
	    var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https';
	    var except = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultExcept;
	
	    var proto = protocol + ':';
	
	    if (document.location.protocol !== proto && except.indexOf(document.location.hostname) < 0) {
	        document.location.protocol = proto;
	    }
	};
	
	exports.default = redirect;

/***/ },
/* 87 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Timer = function () {
	    function Timer(now, since) {
	        _classCallCheck(this, Timer);
	
	        this.time = 0;
	        this.since = 0;
	
	        this.offset = 0;
	
	        this.rate = 1;
	        this.step = -1;
	
	        this.dt = 0;
	
	        this.paused = false;
	        this.end = -1;
	        this.loop = false;
	
	        this.reset(now, since);
	    }
	
	    _createClass(Timer, [{
	        key: "now",
	        value: function now() {
	            var _now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
	
	            return (_now - this.offset) * this.rate;
	        }
	    }, {
	        key: "tick",
	        value: function tick(now) {
	            var time = this.time;
	            var dt = 0;
	
	            if (this.step >= 0) {
	                dt = this.step * this.rate;
	                time += dt;
	            } else {
	                var past = time;
	
	                time = this.now(now);
	                dt = time - past;
	            }
	
	            if (this.paused) {
	                this.offset += dt;
	                dt = 0;
	            } else if (this.end < 0) {
	                this.time = time;
	            } else if (this.loop) {
	                this.time = time % this.end;
	            } else {
	                this.time = (this.rate > 0 ? Math.min : Math.max)(time, this.end);
	
	                if (this.time !== time) {
	                    this.paused = true;
	                }
	            }
	
	            this.dt = dt;
	
	            return this;
	        }
	    }, {
	        key: "seek",
	        value: function seek(to) {
	            this.offset = -to;
	
	            return this;
	        }
	    }, {
	        key: "scrub",
	        value: function scrub(by) {
	            this.offset -= by;
	
	            return this;
	        }
	    }, {
	        key: "reset",
	        value: function reset() {
	            var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
	            var since = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : now;
	
	            this.since = this.offset = since;
	            this.time = this.now(now);
	
	            return this;
	        }
	    }]);
	
	    return Timer;
	}();
	
	exports.Timer = Timer;
	exports.default = Timer;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Tendrils = exports.glSettings = exports.defaults = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	// Shaders
	
	var _glShader = __webpack_require__(56);
	
	var _glShader2 = _interopRequireDefault(_glShader);
	
	var _glFbo = __webpack_require__(89);
	
	var _glFbo2 = _interopRequireDefault(_glFbo);
	
	var _particles = __webpack_require__(106);
	
	var _particles2 = _interopRequireDefault(_particles);
	
	var _timer = __webpack_require__(87);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _utils = __webpack_require__(121);
	
	var _cpu = __webpack_require__(125);
	
	var _cpu2 = _interopRequireDefault(_cpu);
	
	var _aspect = __webpack_require__(127);
	
	var _screen = __webpack_require__(122);
	
	var _screen2 = _interopRequireDefault(_screen);
	
	var _logic = __webpack_require__(128);
	
	var _logic2 = _interopRequireDefault(_logic);
	
	var _index = __webpack_require__(129);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(130);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _index5 = __webpack_require__(131);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _index7 = __webpack_require__(132);
	
	var _index8 = _interopRequireDefault(_index7);
	
	var _index9 = __webpack_require__(124);
	
	var _index10 = _interopRequireDefault(_index9);
	
	var _index11 = __webpack_require__(133);
	
	var _index12 = _interopRequireDefault(_index11);
	
	var _copy = __webpack_require__(134);
	
	var _copy2 = _interopRequireDefault(_copy);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var defaults = exports.defaults = function defaults() {
	    return {
	        state: {
	            rootNum: Math.pow(2, 9),
	
	            autoClearView: false,
	
	            damping: 0.043,
	            speedLimit: 0.01,
	
	            forceWeight: 0.016,
	            varyForce: -0.1,
	
	            flowWeight: 1,
	            varyFlow: 0.2,
	
	            noiseWeight: 0.002,
	            varyNoise: 0.3,
	
	            flowDecay: 0.003,
	            flowWidth: 5,
	
	            noiseScale: 2.125,
	            varyNoiseScale: 0.5,
	
	            noiseSpeed: 0.00025,
	            varyNoiseSpeed: 0.1,
	
	            lineWidth: 1,
	            speedAlpha: 0.000001,
	            colorMapAlpha: 0.4,
	
	            baseColor: [1, 1, 1, 0.5],
	            flowColor: [1, 1, 1, 0.04],
	            fadeColor: [0.1333, 0.1333, 0.1333, 0]
	        },
	        timer: Object.assign(new _timer2.default(), { step: 1000 / 60 }),
	        numBuffers: 0,
	        logicShader: null,
	        renderShader: [_index2.default, _index4.default],
	        flowShader: [_index6.default, _index8.default],
	        fillShader: [_index10.default, _index12.default],
	        copyShader: [_index10.default, _copy2.default],
	        colorMap: null
	    };
	};
	
	var glSettings = exports.glSettings = {
	    preserveDrawingBuffer: true
	};
	
	var Tendrils = exports.Tendrils = function () {
	    function Tendrils(gl, options) {
	        _classCallCheck(this, Tendrils);
	
	        var params = _extends({}, defaults(), options);
	
	        this.gl = gl;
	
	        this.state = params.state;
	
	        if (!(this.colorMap = params.colorMap)) {
	            this.colorMap = (0, _glFbo2.default)(this.gl, [1, 1], { float: true });
	        }
	
	        this.screen = new _screen2.default(this.gl);
	
	        this.flow = (0, _glFbo2.default)(this.gl, [1, 1], { float: true });
	
	        // Multiple bufferring
	        this.buffers = [];
	        this.setupBuffers(params.numBuffers);
	
	        this.logicShader = null;
	
	        this.renderShader = Array.isArray(params.renderShader) ? _glShader2.default.apply(undefined, [this.gl].concat(_toConsumableArray(params.renderShader))) : params.renderShader;
	
	        this.flowShader = Array.isArray(params.flowShader) ? _glShader2.default.apply(undefined, [this.gl].concat(_toConsumableArray(params.flowShader))) : params.flowShader;
	
	        this.copyShader = Array.isArray(params.copyShader) ? _glShader2.default.apply(undefined, [this.gl].concat(_toConsumableArray(params.copyShader))) : params.copyShader;
	
	        this.fillShader = Array.isArray(params.fillShader) ? _glShader2.default.apply(undefined, [this.gl].concat(_toConsumableArray(params.fillShader))) : params.fillShader;
	
	        this.uniforms = {
	            render: {},
	            update: {}
	        };
	
	        this.particles = null;
	
	        this.viewRes = [0, 0];
	        // this.pow2Res = [0, 0];
	
	        this.viewSize = [0, 0];
	
	        this.timer = params.timer;
	
	        this.tempData = [];
	    }
	
	    _createClass(Tendrils, [{
	        key: 'setup',
	        value: function setup() {
	            this.setupParticles.apply(this, arguments);
	            this.reset();
	
	            return this;
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            this.spawn();
	
	            return this;
	        }
	
	        // @todo
	
	    }, {
	        key: 'dispose',
	        value: function dispose() {
	            this.particles.dispose();
	
	            delete this.particles;
	
	            return this;
	        }
	    }, {
	        key: 'setupBuffers',
	        value: function setupBuffers() {
	            var numBuffers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	            // Add any needed new buffers
	            while (this.buffers.length < numBuffers) {
	                this.buffers.push((0, _glFbo2.default)(this.gl, [1, 1]));
	            }
	
	            // Remove any unneeded old buffers
	            while (this.buffers.length > numBuffers) {
	                this.buffers.pop().dispose();
	            }
	
	            return this;
	        }
	    }, {
	        key: 'setupParticles',
	        value: function setupParticles() {
	            var rootNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.rootNum;
	            var numBuffers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	
	            this.state.rootNum = rootNum;
	
	            var shape = [rootNum, rootNum];
	
	            this.particles = new _particles2.default(this.gl, {
	                shape: shape,
	
	                // Double the rootNum of (vertical neighbour) vertices, to have
	                // pairs alternating between previous and current state.
	                // (Vertical neighbours, because WebGL iterates column-major.)
	                geomShape: [shape[0], shape[1] * 2],
	
	                logicFrag: _logic2.default,
	                render: this.renderShader
	            });
	
	            this.logicShader = this.particles.logic;
	
	            this.particles.setup(numBuffers);
	
	            return this;
	        }
	
	        // Rendering and logic
	
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.clearView();
	            this.clearFlow();
	
	            return this;
	        }
	    }, {
	        key: 'clearView',
	        value: function clearView() {
	            var _this = this;
	
	            this.buffers.forEach(function (buffer) {
	                buffer.bind();
	                _this.gl.clear(_this.gl.COLOR_BUFFER_BIT);
	            });
	
	            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
	            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
	
	            return this;
	        }
	    }, {
	        key: 'clearFlow',
	        value: function clearFlow() {
	            this.flow.bind();
	            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
	
	            return this;
	        }
	    }, {
	        key: 'restart',
	        value: function restart() {
	            this.clear();
	            this.reset();
	
	            return this;
	        }
	    }, {
	        key: 'step',
	        value: function step() {
	            if (!this.timer.paused) {
	                this.particles.logic = this.logicShader;
	
	                // Disabling blending here is important
	                this.gl.disable(this.gl.BLEND);
	
	                Object.assign(this.uniforms.update, this.state, {
	                    dt: this.timer.dt,
	                    time: this.timer.time,
	                    start: this.timer.since,
	                    flow: this.flow.color[0].bind(1),
	                    viewSize: this.viewSize,
	                    viewRes: this.viewRes
	                });
	
	                this.particles.step(this.uniforms.update);
	
	                this.gl.enable(this.gl.BLEND);
	                this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
	            }
	
	            return this;
	        }
	
	        /**
	         * @todo Find a way to use free texture bind units without having to
	         *       manually remember them
	         */
	
	    }, {
	        key: 'draw',
	        value: function draw() {
	            var fade = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	            this.viewport();
	
	            // Flow FBO and view renders
	
	            Object.assign(this.uniforms.render, this.state, {
	                time: this.timer.time,
	                previous: this.particles.buffers[1].color[0].bind(2),
	                viewSize: this.viewSize,
	                viewRes: this.viewRes,
	
	                colorMap: (this.colorMap.color && this.colorMap.color[0] ? this.colorMap.color[0] : this.colorMap).bind(3),
	                colorMapRes: this.colorMap.shape
	            });
	
	            this.particles.render = this.flowShader;
	
	            // Render to the flow FBO - after the logic render, so particles don't
	            // respond to their own flow.
	
	            this.flow.bind();
	
	            this.gl.lineWidth(Math.max(0, this.state.flowWidth));
	            this.particles.draw(this.uniforms.render, this.gl.LINES);
	
	            /**
	             * @todo Mipmaps for global flow sampling - not working at the moment.
	             * @todo Instead of auto-generating mipmaps, should we re-render at each
	             *       scale, with different opacities and line widths? This would
	             *       mean the influence is spread out when drawing, instead of when
	             *       sampling.
	             */
	            // this.flow.color[0].generateMipmap();
	
	
	            // Render to the view.
	
	            if (this.buffers.length === 0) {
	                // Render the particles directly to the screen
	                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
	            } else {
	                // Multi-buffer passes
	                this.buffers[0].bind();
	            }
	
	            if (this.state.autoClearView) {
	                this.gl.clear(this.gl.COLOR_BUFFER_BIT);
	            }
	
	            if (fade) {
	                this.drawFade();
	            }
	
	            // Draw the particles
	            this.particles.render = this.renderShader;
	            this.gl.lineWidth(Math.max(0, this.state.lineWidth));
	            this.particles.draw(this.uniforms.render, this.gl.LINES);
	
	            return this;
	        }
	    }, {
	        key: 'drawFade',
	        value: function drawFade() {
	            if (this.state.fadeColor[3] > 0) {
	                this.drawFill(this.state.fadeColor);
	            }
	
	            return this;
	        }
	    }, {
	        key: 'drawFill',
	        value: function drawFill() {
	            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.fadeColor;
	
	            this.fillShader.bind();
	            this.fillShader.uniforms.color = color;
	            this.screen.render();
	
	            return this;
	        }
	
	        // Draw a buffer's contents to the screen
	
	    }, {
	        key: 'drawBuffer',
	        value: function drawBuffer(index) {
	            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
	
	            if (this.state.autoClearView) {
	                this.gl.clear(this.gl.COLOR_BUFFER_BIT);
	            }
	
	            return this.copyBuffer(index).stepBuffers();
	        }
	
	        // Copy a buffer's contents into the current render target
	
	    }, {
	        key: 'copyBuffer',
	        value: function copyBuffer() {
	            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	            if (index < this.buffers.length) {
	                this.copyShader.bind();
	
	                Object.assign(this.copyShader.uniforms, {
	                    view: this.buffers[index].color[0].bind(0),
	                    viewRes: this.viewRes
	                });
	
	                this.screen.render();
	            }
	
	            return this;
	        }
	    }, {
	        key: 'stepBuffers',
	        value: function stepBuffers() {
	            if (this.buffers.length > 1) {
	                (0, _utils.step)(this.buffers);
	            }
	
	            return this;
	        }
	    }, {
	        key: 'resize',
	        value: function resize() {
	            var _this2 = this;
	
	            this.viewRes[0] = this.gl.drawingBufferWidth;
	            this.viewRes[1] = this.gl.drawingBufferHeight;
	
	            // NDC dimensions in the range [-1, 1] -> [-(max radius), (max radius)]
	            (0, _aspect.coverAspect)(this.viewSize, this.viewRes);
	
	            // this.pow2Res.fill(nextPow2(Math.max(...this.viewRes)));
	
	            this.buffers.forEach(function (buffer) {
	                return buffer.shape = _this2.viewRes;
	            });
	
	            // this.flow.shape = this.pow2Res;
	            this.flow.shape = this.viewRes;
	
	            return this;
	        }
	    }, {
	        key: 'viewport',
	        value: function viewport() {
	            /**
	             * @todo Why do these 2 lines seem to be equivalent? Something to do
	             *       with how `gl-big-triangle` scales its geometry over the screen?
	             */
	            // this.gl.viewport(0, 0, 1, 1);
	            this.gl.viewport(0, 0, this.viewRes[0], this.viewRes[1]);
	
	            return this;
	        }
	
	        // Respawn
	
	        // Populate the particles with the given spawn function
	
	    }, {
	        key: 'spawn',
	        value: function spawn() {
	            var spawner = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _cpu2.default;
	
	            this.particles.spawn(spawner);
	
	            return this;
	        }
	
	        // Respawn on the GPU using a given shader
	
	    }, {
	        key: 'spawnShader',
	        value: function spawnShader(shader, update) {
	            this.timer.tick();
	
	            this.particles.logic = shader;
	
	            // Disabling blending here is important
	            this.gl.disable(this.gl.BLEND);
	
	            this.particles.step(_particles2.default.applyUpdate(_extends({}, this.state, {
	                time: this.timer.time,
	                viewSize: this.viewSize,
	                viewRes: this.viewRes
	            }), update));
	
	            this.particles.logic = this.logicShader;
	
	            this.gl.enable(this.gl.BLEND);
	            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
	
	            return this;
	        }
	    }]);
	
	    return Tendrils;
	}();
	
	exports.default = Tendrils;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	var createTexture = __webpack_require__(90)
	
	module.exports = createFBO
	
	var colorAttachmentArrays = null
	var FRAMEBUFFER_UNSUPPORTED
	var FRAMEBUFFER_INCOMPLETE_ATTACHMENT
	var FRAMEBUFFER_INCOMPLETE_DIMENSIONS
	var FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT
	
	function saveFBOState(gl) {
	  var fbo = gl.getParameter(gl.FRAMEBUFFER_BINDING)
	  var rbo = gl.getParameter(gl.RENDERBUFFER_BINDING)
	  var tex = gl.getParameter(gl.TEXTURE_BINDING_2D)
	  return [fbo, rbo, tex]
	}
	
	function restoreFBOState(gl, data) {
	  gl.bindFramebuffer(gl.FRAMEBUFFER, data[0])
	  gl.bindRenderbuffer(gl.RENDERBUFFER, data[1])
	  gl.bindTexture(gl.TEXTURE_2D, data[2])
	}
	
	function lazyInitColorAttachments(gl, ext) {
	  var maxColorAttachments = gl.getParameter(ext.MAX_COLOR_ATTACHMENTS_WEBGL)
	  colorAttachmentArrays = new Array(maxColorAttachments + 1)
	  for(var i=0; i<=maxColorAttachments; ++i) {
	    var x = new Array(maxColorAttachments)
	    for(var j=0; j<i; ++j) {
	      x[j] = gl.COLOR_ATTACHMENT0 + j
	    }
	    for(var j=i; j<maxColorAttachments; ++j) {
	      x[j] = gl.NONE
	    }
	    colorAttachmentArrays[i] = x
	  }
	}
	
	//Throw an appropriate error
	function throwFBOError(status) {
	  switch(status){
	    case FRAMEBUFFER_UNSUPPORTED:
	      throw new Error('gl-fbo: Framebuffer unsupported')
	    case FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
	      throw new Error('gl-fbo: Framebuffer incomplete attachment')
	    case FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
	      throw new Error('gl-fbo: Framebuffer incomplete dimensions')
	    case FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
	      throw new Error('gl-fbo: Framebuffer incomplete missing attachment')
	    default:
	      throw new Error('gl-fbo: Framebuffer failed for unspecified reason')
	  }
	}
	
	//Initialize a texture object
	function initTexture(gl, width, height, type, format, attachment) {
	  if(!type) {
	    return null
	  }
	  var result = createTexture(gl, width, height, format, type)
	  result.magFilter = gl.NEAREST
	  result.minFilter = gl.NEAREST
	  result.mipSamples = 1
	  result.bind()
	  gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_2D, result.handle, 0)
	  return result
	}
	
	//Initialize a render buffer object
	function initRenderBuffer(gl, width, height, component, attachment) {
	  var result = gl.createRenderbuffer()
	  gl.bindRenderbuffer(gl.RENDERBUFFER, result)
	  gl.renderbufferStorage(gl.RENDERBUFFER, component, width, height)
	  gl.framebufferRenderbuffer(gl.FRAMEBUFFER, attachment, gl.RENDERBUFFER, result)
	  return result
	}
	
	//Rebuild the frame buffer
	function rebuildFBO(fbo) {
	
	  //Save FBO state
	  var state = saveFBOState(fbo.gl)
	
	  var gl = fbo.gl
	  var handle = fbo.handle = gl.createFramebuffer()
	  var width = fbo._shape[0]
	  var height = fbo._shape[1]
	  var numColors = fbo.color.length
	  var ext = fbo._ext
	  var useStencil = fbo._useStencil
	  var useDepth = fbo._useDepth
	  var colorType = fbo._colorType
	
	  //Bind the fbo
	  gl.bindFramebuffer(gl.FRAMEBUFFER, handle)
	
	  //Allocate color buffers
	  for(var i=0; i<numColors; ++i) {
	    fbo.color[i] = initTexture(gl, width, height, colorType, gl.RGBA, gl.COLOR_ATTACHMENT0 + i)
	  }
	  if(numColors === 0) {
	    fbo._color_rb = initRenderBuffer(gl, width, height, gl.RGBA4, gl.COLOR_ATTACHMENT0)
	    if(ext) {
	      ext.drawBuffersWEBGL(colorAttachmentArrays[0])
	    }
	  } else if(numColors > 1) {
	    ext.drawBuffersWEBGL(colorAttachmentArrays[numColors])
	  }
	
	  //Allocate depth/stencil buffers
	  var WEBGL_depth_texture = gl.getExtension('WEBGL_depth_texture')
	  if(WEBGL_depth_texture) {
	    if(useStencil) {
	      fbo.depth = initTexture(gl, width, height,
	                          WEBGL_depth_texture.UNSIGNED_INT_24_8_WEBGL,
	                          gl.DEPTH_STENCIL,
	                          gl.DEPTH_STENCIL_ATTACHMENT)
	    } else if(useDepth) {
	      fbo.depth = initTexture(gl, width, height,
	                          gl.UNSIGNED_SHORT,
	                          gl.DEPTH_COMPONENT,
	                          gl.DEPTH_ATTACHMENT)
	    }
	  } else {
	    if(useDepth && useStencil) {
	      fbo._depth_rb = initRenderBuffer(gl, width, height, gl.DEPTH_STENCIL, gl.DEPTH_STENCIL_ATTACHMENT)
	    } else if(useDepth) {
	      fbo._depth_rb = initRenderBuffer(gl, width, height, gl.DEPTH_COMPONENT16, gl.DEPTH_ATTACHMENT)
	    } else if(useStencil) {
	      fbo._depth_rb = initRenderBuffer(gl, width, height, gl.STENCIL_INDEX, gl.STENCIL_ATTACHMENT)
	    }
	  }
	
	  //Check frame buffer state
	  var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
	  if(status !== gl.FRAMEBUFFER_COMPLETE) {
	
	    //Release all partially allocated resources
	    fbo._destroyed = true
	
	    //Release all resources
	    gl.bindFramebuffer(gl.FRAMEBUFFER, null)
	    gl.deleteFramebuffer(fbo.handle)
	    fbo.handle = null
	    if(fbo.depth) {
	      fbo.depth.dispose()
	      fbo.depth = null
	    }
	    if(fbo._depth_rb) {
	      gl.deleteRenderbuffer(fbo._depth_rb)
	      fbo._depth_rb = null
	    }
	    for(var i=0; i<fbo.color.length; ++i) {
	      fbo.color[i].dispose()
	      fbo.color[i] = null
	    }
	    if(fbo._color_rb) {
	      gl.deleteRenderbuffer(fbo._color_rb)
	      fbo._color_rb = null
	    }
	
	    restoreFBOState(gl, state)
	
	    //Throw the frame buffer error
	    throwFBOError(status)
	  }
	
	  //Everything ok, let's get on with life
	  restoreFBOState(gl, state)
	}
	
	function Framebuffer(gl, width, height, colorType, numColors, useDepth, useStencil, ext) {
	
	  //Handle and set properties
	  this.gl = gl
	  this._shape = [width|0, height|0]
	  this._destroyed = false
	  this._ext = ext
	
	  //Allocate buffers
	  this.color = new Array(numColors)
	  for(var i=0; i<numColors; ++i) {
	    this.color[i] = null
	  }
	  this._color_rb = null
	  this.depth = null
	  this._depth_rb = null
	
	  //Save depth and stencil flags
	  this._colorType = colorType
	  this._useDepth = useDepth
	  this._useStencil = useStencil
	
	  //Shape vector for resizing
	  var parent = this
	  var shapeVector = [width|0, height|0]
	  Object.defineProperties(shapeVector, {
	    0: {
	      get: function() {
	        return parent._shape[0]
	      },
	      set: function(w) {
	        return parent.width = w
	      }
	    },
	    1: {
	      get: function() {
	        return parent._shape[1]
	      },
	      set: function(h) {
	        return parent.height = h
	      }
	    }
	  })
	  this._shapeVector = shapeVector
	
	  //Initialize all attachments
	  rebuildFBO(this)
	}
	
	var proto = Framebuffer.prototype
	
	function reshapeFBO(fbo, w, h) {
	  //If fbo is invalid, just skip this
	  if(fbo._destroyed) {
	    throw new Error('gl-fbo: Can\'t resize destroyed FBO')
	  }
	
	  //Don't resize if no change in shape
	  if( (fbo._shape[0] === w) &&
	      (fbo._shape[1] === h) ) {
	    return
	  }
	
	  var gl = fbo.gl
	
	  //Check parameter ranges
	  var maxFBOSize = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE)
	  if( w < 0 || w > maxFBOSize ||
	      h < 0 || h > maxFBOSize) {
	    throw new Error('gl-fbo: Can\'t resize FBO, invalid dimensions')
	  }
	
	  //Update shape
	  fbo._shape[0] = w
	  fbo._shape[1] = h
	
	  //Save framebuffer state
	  var state = saveFBOState(gl)
	
	  //Resize framebuffer attachments
	  for(var i=0; i<fbo.color.length; ++i) {
	    fbo.color[i].shape = fbo._shape
	  }
	  if(fbo._color_rb) {
	    gl.bindRenderbuffer(gl.RENDERBUFFER, fbo._color_rb)
	    gl.renderbufferStorage(gl.RENDERBUFFER, gl.RGBA4, fbo._shape[0], fbo._shape[1])
	  }
	  if(fbo.depth) {
	    fbo.depth.shape = fbo._shape
	  }
	  if(fbo._depth_rb) {
	    gl.bindRenderbuffer(gl.RENDERBUFFER, fbo._depth_rb)
	    if(fbo._useDepth && fbo._useStencil) {
	      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, fbo._shape[0], fbo._shape[1])
	    } else if(fbo._useDepth) {
	      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, fbo._shape[0], fbo._shape[1])
	    } else if(fbo._useStencil) {
	      gl.renderbufferStorage(gl.RENDERBUFFER, gl.STENCIL_INDEX, fbo._shape[0], fbo._shape[1])
	    }
	  }
	
	  //Check FBO status after resize, if something broke then die in a fire
	  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.handle)
	  var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
	  if(status !== gl.FRAMEBUFFER_COMPLETE) {
	    fbo.dispose()
	    restoreFBOState(gl, state)
	    throwFBOError(status)
	  }
	
	  //Restore framebuffer state
	  restoreFBOState(gl, state)
	}
	
	Object.defineProperties(proto, {
	  'shape': {
	    get: function() {
	      if(this._destroyed) {
	        return [0,0]
	      }
	      return this._shapeVector
	    },
	    set: function(x) {
	      if(!Array.isArray(x)) {
	        x = [x|0, x|0]
	      }
	      if(x.length !== 2) {
	        throw new Error('gl-fbo: Shape vector must be length 2')
	      }
	
	      var w = x[0]|0
	      var h = x[1]|0
	      reshapeFBO(this, w, h)
	
	      return [w, h]
	    },
	    enumerable: false
	  },
	  'width': {
	    get: function() {
	      if(this._destroyed) {
	        return 0
	      }
	      return this._shape[0]
	    },
	    set: function(w) {
	      w = w|0
	      reshapeFBO(this, w, this._shape[1])
	      return w
	    },
	    enumerable: false
	  },
	  'height': {
	    get: function() {
	      if(this._destroyed) {
	        return 0
	      }
	      return this._shape[1]
	    },
	    set: function(h) {
	      h = h|0
	      reshapeFBO(this, this._shape[0], h)
	      return h
	    },
	    enumerable: false
	  }
	})
	
	proto.bind = function() {
	  if(this._destroyed) {
	    return
	  }
	  var gl = this.gl
	  gl.bindFramebuffer(gl.FRAMEBUFFER, this.handle)
	  gl.viewport(0, 0, this._shape[0], this._shape[1])
	}
	
	proto.dispose = function() {
	  if(this._destroyed) {
	    return
	  }
	  this._destroyed = true
	  var gl = this.gl
	  gl.deleteFramebuffer(this.handle)
	  this.handle = null
	  if(this.depth) {
	    this.depth.dispose()
	    this.depth = null
	  }
	  if(this._depth_rb) {
	    gl.deleteRenderbuffer(this._depth_rb)
	    this._depth_rb = null
	  }
	  for(var i=0; i<this.color.length; ++i) {
	    this.color[i].dispose()
	    this.color[i] = null
	  }
	  if(this._color_rb) {
	    gl.deleteRenderbuffer(this._color_rb)
	    this._color_rb = null
	  }
	}
	
	function createFBO(gl, width, height, options) {
	
	  //Update frame buffer error code values
	  if(!FRAMEBUFFER_UNSUPPORTED) {
	    FRAMEBUFFER_UNSUPPORTED = gl.FRAMEBUFFER_UNSUPPORTED
	    FRAMEBUFFER_INCOMPLETE_ATTACHMENT = gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT
	    FRAMEBUFFER_INCOMPLETE_DIMENSIONS = gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS
	    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT
	  }
	
	  //Lazily initialize color attachment arrays
	  var WEBGL_draw_buffers = gl.getExtension('WEBGL_draw_buffers')
	  if(!colorAttachmentArrays && WEBGL_draw_buffers) {
	    lazyInitColorAttachments(gl, WEBGL_draw_buffers)
	  }
	
	  //Special case: Can accept an array as argument
	  if(Array.isArray(width)) {
	    options = height
	    height = width[1]|0
	    width = width[0]|0
	  }
	
	  if(typeof width !== 'number') {
	    throw new Error('gl-fbo: Missing shape parameter')
	  }
	
	  //Validate width/height properties
	  var maxFBOSize = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE)
	  if(width < 0 || width > maxFBOSize || height < 0 || height > maxFBOSize) {
	    throw new Error('gl-fbo: Parameters are too large for FBO')
	  }
	
	  //Handle each option type
	  options = options || {}
	
	  //Figure out number of color buffers to use
	  var numColors = 1
	  if('color' in options) {
	    numColors = Math.max(options.color|0, 0)
	    if(numColors < 0) {
	      throw new Error('gl-fbo: Must specify a nonnegative number of colors')
	    }
	    if(numColors > 1) {
	      //Check if multiple render targets supported
	      if(!WEBGL_draw_buffers) {
	        throw new Error('gl-fbo: Multiple draw buffer extension not supported')
	      } else if(numColors > gl.getParameter(WEBGL_draw_buffers.MAX_COLOR_ATTACHMENTS_WEBGL)) {
	        throw new Error('gl-fbo: Context does not support ' + numColors + ' draw buffers')
	      }
	    }
	  }
	
	  //Determine whether to use floating point textures
	  var colorType = gl.UNSIGNED_BYTE
	  var OES_texture_float = gl.getExtension('OES_texture_float')
	  if(options.float && numColors > 0) {
	    if(!OES_texture_float) {
	      throw new Error('gl-fbo: Context does not support floating point textures')
	    }
	    colorType = gl.FLOAT
	  } else if(options.preferFloat && numColors > 0) {
	    if(OES_texture_float) {
	      colorType = gl.FLOAT
	    }
	  }
	
	  //Check if we should use depth buffer
	  var useDepth = true
	  if('depth' in options) {
	    useDepth = !!options.depth
	  }
	
	  //Check if we should use a stencil buffer
	  var useStencil = false
	  if('stencil' in options) {
	    useStencil = !!options.stencil
	  }
	
	  return new Framebuffer(
	    gl,
	    width,
	    height,
	    colorType,
	    numColors,
	    useDepth,
	    useStencil,
	    WEBGL_draw_buffers)
	}


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	
	var ndarray = __webpack_require__(91)
	var ops     = __webpack_require__(94)
	var pool    = __webpack_require__(99)
	
	module.exports = createTexture2D
	
	var linearTypes = null
	var filterTypes = null
	var wrapTypes   = null
	
	function lazyInitLinearTypes(gl) {
	  linearTypes = [
	    gl.LINEAR,
	    gl.NEAREST_MIPMAP_LINEAR,
	    gl.LINEAR_MIPMAP_NEAREST,
	    gl.LINEAR_MIPMAP_NEAREST
	  ]
	  filterTypes = [
	    gl.NEAREST,
	    gl.LINEAR,
	    gl.NEAREST_MIPMAP_NEAREST,
	    gl.NEAREST_MIPMAP_LINEAR,
	    gl.LINEAR_MIPMAP_NEAREST,
	    gl.LINEAR_MIPMAP_LINEAR
	  ]
	  wrapTypes = [
	    gl.REPEAT,
	    gl.CLAMP_TO_EDGE,
	    gl.MIRRORED_REPEAT
	  ]
	}
	
	function acceptTextureDOM (obj) {
	  return (
	    ('undefined' != typeof HTMLCanvasElement && obj instanceof HTMLCanvasElement) ||
	    ('undefined' != typeof HTMLImageElement && obj instanceof HTMLImageElement) ||
	    ('undefined' != typeof HTMLVideoElement && obj instanceof HTMLVideoElement) ||
	    ('undefined' != typeof ImageData && obj instanceof ImageData))
	}
	
	var convertFloatToUint8 = function(out, inp) {
	  ops.muls(out, inp, 255.0)
	}
	
	function reshapeTexture(tex, w, h) {
	  var gl = tex.gl
	  var maxSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)
	  if(w < 0 || w > maxSize || h < 0 || h > maxSize) {
	    throw new Error('gl-texture2d: Invalid texture size')
	  }
	  tex._shape = [w, h]
	  tex.bind()
	  gl.texImage2D(gl.TEXTURE_2D, 0, tex.format, w, h, 0, tex.format, tex.type, null)
	  tex._mipLevels = [0]
	  return tex
	}
	
	function Texture2D(gl, handle, width, height, format, type) {
	  this.gl = gl
	  this.handle = handle
	  this.format = format
	  this.type = type
	  this._shape = [width, height]
	  this._mipLevels = [0]
	  this._magFilter = gl.NEAREST
	  this._minFilter = gl.NEAREST
	  this._wrapS = gl.CLAMP_TO_EDGE
	  this._wrapT = gl.CLAMP_TO_EDGE
	  this._anisoSamples = 1
	
	  var parent = this
	  var wrapVector = [this._wrapS, this._wrapT]
	  Object.defineProperties(wrapVector, [
	    {
	      get: function() {
	        return parent._wrapS
	      },
	      set: function(v) {
	        return parent.wrapS = v
	      }
	    },
	    {
	      get: function() {
	        return parent._wrapT
	      },
	      set: function(v) {
	        return parent.wrapT = v
	      }
	    }
	  ])
	  this._wrapVector = wrapVector
	
	  var shapeVector = [this._shape[0], this._shape[1]]
	  Object.defineProperties(shapeVector, [
	    {
	      get: function() {
	        return parent._shape[0]
	      },
	      set: function(v) {
	        return parent.width = v
	      }
	    },
	    {
	      get: function() {
	        return parent._shape[1]
	      },
	      set: function(v) {
	        return parent.height = v
	      }
	    }
	  ])
	  this._shapeVector = shapeVector
	}
	
	var proto = Texture2D.prototype
	
	Object.defineProperties(proto, {
	  minFilter: {
	    get: function() {
	      return this._minFilter
	    },
	    set: function(v) {
	      this.bind()
	      var gl = this.gl
	      if(this.type === gl.FLOAT && linearTypes.indexOf(v) >= 0) {
	        if(!gl.getExtension('OES_texture_float_linear')) {
	          v = gl.NEAREST
	        }
	      }
	      if(filterTypes.indexOf(v) < 0) {
	        throw new Error('gl-texture2d: Unknown filter mode ' + v)
	      }
	      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, v)
	      return this._minFilter = v
	    }
	  },
	  magFilter: {
	    get: function() {
	      return this._magFilter
	    },
	    set: function(v) {
	      this.bind()
	      var gl = this.gl
	      if(this.type === gl.FLOAT && linearTypes.indexOf(v) >= 0) {
	        if(!gl.getExtension('OES_texture_float_linear')) {
	          v = gl.NEAREST
	        }
	      }
	      if(filterTypes.indexOf(v) < 0) {
	        throw new Error('gl-texture2d: Unknown filter mode ' + v)
	      }
	      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, v)
	      return this._magFilter = v
	    }
	  },
	  mipSamples: {
	    get: function() {
	      return this._anisoSamples
	    },
	    set: function(i) {
	      var psamples = this._anisoSamples
	      this._anisoSamples = Math.max(i, 1)|0
	      if(psamples !== this._anisoSamples) {
	        var ext = this.gl.getExtension('EXT_texture_filter_anisotropic')
	        if(ext) {
	          this.gl.texParameterf(this.gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, this._anisoSamples)
	        }
	      }
	      return this._anisoSamples
	    }
	  },
	  wrapS: {
	    get: function() {
	      return this._wrapS
	    },
	    set: function(v) {
	      this.bind()
	      if(wrapTypes.indexOf(v) < 0) {
	        throw new Error('gl-texture2d: Unknown wrap mode ' + v)
	      }
	      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, v)
	      return this._wrapS = v
	    }
	  },
	  wrapT: {
	    get: function() {
	      return this._wrapT
	    },
	    set: function(v) {
	      this.bind()
	      if(wrapTypes.indexOf(v) < 0) {
	        throw new Error('gl-texture2d: Unknown wrap mode ' + v)
	      }
	      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, v)
	      return this._wrapT = v
	    }
	  },
	  wrap: {
	    get: function() {
	      return this._wrapVector
	    },
	    set: function(v) {
	      if(!Array.isArray(v)) {
	        v = [v,v]
	      }
	      if(v.length !== 2) {
	        throw new Error('gl-texture2d: Must specify wrap mode for rows and columns')
	      }
	      for(var i=0; i<2; ++i) {
	        if(wrapTypes.indexOf(v[i]) < 0) {
	          throw new Error('gl-texture2d: Unknown wrap mode ' + v)
	        }
	      }
	      this._wrapS = v[0]
	      this._wrapT = v[1]
	
	      var gl = this.gl
	      this.bind()
	      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this._wrapS)
	      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this._wrapT)
	
	      return v
	    }
	  },
	  shape: {
	    get: function() {
	      return this._shapeVector
	    },
	    set: function(x) {
	      if(!Array.isArray(x)) {
	        x = [x|0,x|0]
	      } else {
	        if(x.length !== 2) {
	          throw new Error('gl-texture2d: Invalid texture shape')
	        }
	      }
	      reshapeTexture(this, x[0]|0, x[1]|0)
	      return [x[0]|0, x[1]|0]
	    }
	  },
	  width: {
	    get: function() {
	      return this._shape[0]
	    },
	    set: function(w) {
	      w = w|0
	      reshapeTexture(this, w, this._shape[1])
	      return w
	    }
	  },
	  height: {
	    get: function() {
	      return this._shape[1]
	    },
	    set: function(h) {
	      h = h|0
	      reshapeTexture(this, this._shape[0], h)
	      return h
	    }
	  }
	})
	
	proto.bind = function(unit) {
	  var gl = this.gl
	  if(unit !== undefined) {
	    gl.activeTexture(gl.TEXTURE0 + (unit|0))
	  }
	  gl.bindTexture(gl.TEXTURE_2D, this.handle)
	  if(unit !== undefined) {
	    return (unit|0)
	  }
	  return gl.getParameter(gl.ACTIVE_TEXTURE) - gl.TEXTURE0
	}
	
	proto.dispose = function() {
	  this.gl.deleteTexture(this.handle)
	}
	
	proto.generateMipmap = function() {
	  this.bind()
	  this.gl.generateMipmap(this.gl.TEXTURE_2D)
	
	  //Update mip levels
	  var l = Math.min(this._shape[0], this._shape[1])
	  for(var i=0; l>0; ++i, l>>>=1) {
	    if(this._mipLevels.indexOf(i) < 0) {
	      this._mipLevels.push(i)
	    }
	  }
	}
	
	proto.setPixels = function(data, x_off, y_off, mip_level) {
	  var gl = this.gl
	  this.bind()
	  if(Array.isArray(x_off)) {
	    mip_level = y_off
	    y_off = x_off[1]|0
	    x_off = x_off[0]|0
	  } else {
	    x_off = x_off || 0
	    y_off = y_off || 0
	  }
	  mip_level = mip_level || 0
	  if(acceptTextureDOM(data)) {
	    var needsMip = this._mipLevels.indexOf(mip_level) < 0
	    if(needsMip) {
	      gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.format, this.type, data)
	      this._mipLevels.push(mip_level)
	    } else {
	      gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, this.format, this.type, data)
	    }
	  } else if(data.shape && data.stride && data.data) {
	    if(data.shape.length < 2 ||
	       x_off + data.shape[1] > this._shape[1]>>>mip_level ||
	       y_off + data.shape[0] > this._shape[0]>>>mip_level ||
	       x_off < 0 ||
	       y_off < 0) {
	      throw new Error('gl-texture2d: Texture dimensions are out of bounds')
	    }
	    texSubImageArray(gl, x_off, y_off, mip_level, this.format, this.type, this._mipLevels, data)
	  } else {
	    throw new Error('gl-texture2d: Unsupported data type')
	  }
	}
	
	
	function isPacked(shape, stride) {
	  if(shape.length === 3) {
	    return  (stride[2] === 1) &&
	            (stride[1] === shape[0]*shape[2]) &&
	            (stride[0] === shape[2])
	  }
	  return  (stride[0] === 1) &&
	          (stride[1] === shape[0])
	}
	
	function texSubImageArray(gl, x_off, y_off, mip_level, cformat, ctype, mipLevels, array) {
	  var dtype = array.dtype
	  var shape = array.shape.slice()
	  if(shape.length < 2 || shape.length > 3) {
	    throw new Error('gl-texture2d: Invalid ndarray, must be 2d or 3d')
	  }
	  var type = 0, format = 0
	  var packed = isPacked(shape, array.stride.slice())
	  if(dtype === 'float32') {
	    type = gl.FLOAT
	  } else if(dtype === 'float64') {
	    type = gl.FLOAT
	    packed = false
	    dtype = 'float32'
	  } else if(dtype === 'uint8') {
	    type = gl.UNSIGNED_BYTE
	  } else {
	    type = gl.UNSIGNED_BYTE
	    packed = false
	    dtype = 'uint8'
	  }
	  var channels = 1
	  if(shape.length === 2) {
	    format = gl.LUMINANCE
	    shape = [shape[0], shape[1], 1]
	    array = ndarray(array.data, shape, [array.stride[0], array.stride[1], 1], array.offset)
	  } else if(shape.length === 3) {
	    if(shape[2] === 1) {
	      format = gl.ALPHA
	    } else if(shape[2] === 2) {
	      format = gl.LUMINANCE_ALPHA
	    } else if(shape[2] === 3) {
	      format = gl.RGB
	    } else if(shape[2] === 4) {
	      format = gl.RGBA
	    } else {
	      throw new Error('gl-texture2d: Invalid shape for pixel coords')
	    }
	    channels = shape[2]
	  } else {
	    throw new Error('gl-texture2d: Invalid shape for texture')
	  }
	  //For 1-channel textures allow conversion between formats
	  if((format  === gl.LUMINANCE || format  === gl.ALPHA) &&
	     (cformat === gl.LUMINANCE || cformat === gl.ALPHA)) {
	    format = cformat
	  }
	  if(format !== cformat) {
	    throw new Error('gl-texture2d: Incompatible texture format for setPixels')
	  }
	  var size = array.size
	  var needsMip = mipLevels.indexOf(mip_level) < 0
	  if(needsMip) {
	    mipLevels.push(mip_level)
	  }
	  if(type === ctype && packed) {
	    //Array data types are compatible, can directly copy into texture
	    if(array.offset === 0 && array.data.length === size) {
	      if(needsMip) {
	        gl.texImage2D(gl.TEXTURE_2D, mip_level, cformat, shape[0], shape[1], 0, cformat, ctype, array.data)
	      } else {
	        gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, shape[0], shape[1], cformat, ctype, array.data)
	      }
	    } else {
	      if(needsMip) {
	        gl.texImage2D(gl.TEXTURE_2D, mip_level, cformat, shape[0], shape[1], 0, cformat, ctype, array.data.subarray(array.offset, array.offset+size))
	      } else {
	        gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, shape[0], shape[1], cformat, ctype, array.data.subarray(array.offset, array.offset+size))
	      }
	    }
	  } else {
	    //Need to do type conversion to pack data into buffer
	    var pack_buffer
	    if(ctype === gl.FLOAT) {
	      pack_buffer = pool.mallocFloat32(size)
	    } else {
	      pack_buffer = pool.mallocUint8(size)
	    }
	    var pack_view = ndarray(pack_buffer, shape, [shape[2], shape[2]*shape[0], 1])
	    if(type === gl.FLOAT && ctype === gl.UNSIGNED_BYTE) {
	      convertFloatToUint8(pack_view, array)
	    } else {
	      ops.assign(pack_view, array)
	    }
	    if(needsMip) {
	      gl.texImage2D(gl.TEXTURE_2D, mip_level, cformat, shape[0], shape[1], 0, cformat, ctype, pack_buffer.subarray(0, size))
	    } else {
	      gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, shape[0], shape[1], cformat, ctype, pack_buffer.subarray(0, size))
	    }
	    if(ctype === gl.FLOAT) {
	      pool.freeFloat32(pack_buffer)
	    } else {
	      pool.freeUint8(pack_buffer)
	    }
	  }
	}
	
	function initTexture(gl) {
	  var tex = gl.createTexture()
	  gl.bindTexture(gl.TEXTURE_2D, tex)
	  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
	  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
	  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
	  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
	  return tex
	}
	
	function createTextureShape(gl, width, height, format, type) {
	  var maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)
	  if(width < 0 || width > maxTextureSize || height < 0 || height  > maxTextureSize) {
	    throw new Error('gl-texture2d: Invalid texture shape')
	  }
	  if(type === gl.FLOAT && !gl.getExtension('OES_texture_float')) {
	    throw new Error('gl-texture2d: Floating point textures not supported on this platform')
	  }
	  var tex = initTexture(gl)
	  gl.texImage2D(gl.TEXTURE_2D, 0, format, width, height, 0, format, type, null)
	  return new Texture2D(gl, tex, width, height, format, type)
	}
	
	function createTextureDOM(gl, element, format, type) {
	  var tex = initTexture(gl)
	  gl.texImage2D(gl.TEXTURE_2D, 0, format, format, type, element)
	  return new Texture2D(gl, tex, element.width|0, element.height|0, format, type)
	}
	
	//Creates a texture from an ndarray
	function createTextureArray(gl, array) {
	  var dtype = array.dtype
	  var shape = array.shape.slice()
	  var maxSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)
	  if(shape[0] < 0 || shape[0] > maxSize || shape[1] < 0 || shape[1] > maxSize) {
	    throw new Error('gl-texture2d: Invalid texture size')
	  }
	  var packed = isPacked(shape, array.stride.slice())
	  var type = 0
	  if(dtype === 'float32') {
	    type = gl.FLOAT
	  } else if(dtype === 'float64') {
	    type = gl.FLOAT
	    packed = false
	    dtype = 'float32'
	  } else if(dtype === 'uint8') {
	    type = gl.UNSIGNED_BYTE
	  } else {
	    type = gl.UNSIGNED_BYTE
	    packed = false
	    dtype = 'uint8'
	  }
	  var format = 0
	  if(shape.length === 2) {
	    format = gl.LUMINANCE
	    shape = [shape[0], shape[1], 1]
	    array = ndarray(array.data, shape, [array.stride[0], array.stride[1], 1], array.offset)
	  } else if(shape.length === 3) {
	    if(shape[2] === 1) {
	      format = gl.ALPHA
	    } else if(shape[2] === 2) {
	      format = gl.LUMINANCE_ALPHA
	    } else if(shape[2] === 3) {
	      format = gl.RGB
	    } else if(shape[2] === 4) {
	      format = gl.RGBA
	    } else {
	      throw new Error('gl-texture2d: Invalid shape for pixel coords')
	    }
	  } else {
	    throw new Error('gl-texture2d: Invalid shape for texture')
	  }
	  if(type === gl.FLOAT && !gl.getExtension('OES_texture_float')) {
	    type = gl.UNSIGNED_BYTE
	    packed = false
	  }
	  var buffer, buf_store
	  var size = array.size
	  if(!packed) {
	    var stride = [shape[2], shape[2]*shape[0], 1]
	    buf_store = pool.malloc(size, dtype)
	    var buf_array = ndarray(buf_store, shape, stride, 0)
	    if((dtype === 'float32' || dtype === 'float64') && type === gl.UNSIGNED_BYTE) {
	      convertFloatToUint8(buf_array, array)
	    } else {
	      ops.assign(buf_array, array)
	    }
	    buffer = buf_store.subarray(0, size)
	  } else if (array.offset === 0 && array.data.length === size) {
	    buffer = array.data
	  } else {
	    buffer = array.data.subarray(array.offset, array.offset + size)
	  }
	  var tex = initTexture(gl)
	  gl.texImage2D(gl.TEXTURE_2D, 0, format, shape[0], shape[1], 0, format, type, buffer)
	  if(!packed) {
	    pool.free(buf_store)
	  }
	  return new Texture2D(gl, tex, shape[0], shape[1], format, type)
	}
	
	function createTexture2D(gl) {
	  if(arguments.length <= 1) {
	    throw new Error('gl-texture2d: Missing arguments for texture2d constructor')
	  }
	  if(!linearTypes) {
	    lazyInitLinearTypes(gl)
	  }
	  if(typeof arguments[1] === 'number') {
	    return createTextureShape(gl, arguments[1], arguments[2], arguments[3]||gl.RGBA, arguments[4]||gl.UNSIGNED_BYTE)
	  }
	  if(Array.isArray(arguments[1])) {
	    return createTextureShape(gl, arguments[1][0]|0, arguments[1][1]|0, arguments[2]||gl.RGBA, arguments[3]||gl.UNSIGNED_BYTE)
	  }
	  if(typeof arguments[1] === 'object') {
	    var obj = arguments[1]
	    if (acceptTextureDOM(obj)) {
	      return createTextureDOM(gl, obj, arguments[2]||gl.RGBA, arguments[3]||gl.UNSIGNED_BYTE)
	    } else if(obj.shape && obj.data && obj.stride) {
	      return createTextureArray(gl, obj)
	    }
	  }
	  throw new Error('gl-texture2d: Invalid arguments for texture2d constructor')
	}


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var iota = __webpack_require__(92)
	var isBuffer = __webpack_require__(93)
	
	var hasTypedArrays  = ((typeof Float64Array) !== "undefined")
	
	function compare1st(a, b) {
	  return a[0] - b[0]
	}
	
	function order() {
	  var stride = this.stride
	  var terms = new Array(stride.length)
	  var i
	  for(i=0; i<terms.length; ++i) {
	    terms[i] = [Math.abs(stride[i]), i]
	  }
	  terms.sort(compare1st)
	  var result = new Array(terms.length)
	  for(i=0; i<result.length; ++i) {
	    result[i] = terms[i][1]
	  }
	  return result
	}
	
	function compileConstructor(dtype, dimension) {
	  var className = ["View", dimension, "d", dtype].join("")
	  if(dimension < 0) {
	    className = "View_Nil" + dtype
	  }
	  var useGetters = (dtype === "generic")
	
	  if(dimension === -1) {
	    //Special case for trivial arrays
	    var code =
	      "function "+className+"(a){this.data=a;};\
	var proto="+className+".prototype;\
	proto.dtype='"+dtype+"';\
	proto.index=function(){return -1};\
	proto.size=0;\
	proto.dimension=-1;\
	proto.shape=proto.stride=proto.order=[];\
	proto.lo=proto.hi=proto.transpose=proto.step=\
	function(){return new "+className+"(this.data);};\
	proto.get=proto.set=function(){};\
	proto.pick=function(){return null};\
	return function construct_"+className+"(a){return new "+className+"(a);}"
	    var procedure = new Function(code)
	    return procedure()
	  } else if(dimension === 0) {
	    //Special case for 0d arrays
	    var code =
	      "function "+className+"(a,d) {\
	this.data = a;\
	this.offset = d\
	};\
	var proto="+className+".prototype;\
	proto.dtype='"+dtype+"';\
	proto.index=function(){return this.offset};\
	proto.dimension=0;\
	proto.size=1;\
	proto.shape=\
	proto.stride=\
	proto.order=[];\
	proto.lo=\
	proto.hi=\
	proto.transpose=\
	proto.step=function "+className+"_copy() {\
	return new "+className+"(this.data,this.offset)\
	};\
	proto.pick=function "+className+"_pick(){\
	return TrivialArray(this.data);\
	};\
	proto.valueOf=proto.get=function "+className+"_get(){\
	return "+(useGetters ? "this.data.get(this.offset)" : "this.data[this.offset]")+
	"};\
	proto.set=function "+className+"_set(v){\
	return "+(useGetters ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v")+"\
	};\
	return function construct_"+className+"(a,b,c,d){return new "+className+"(a,d)}"
	    var procedure = new Function("TrivialArray", code)
	    return procedure(CACHED_CONSTRUCTORS[dtype][0])
	  }
	
	  var code = ["'use strict'"]
	
	  //Create constructor for view
	  var indices = iota(dimension)
	  var args = indices.map(function(i) { return "i"+i })
	  var index_str = "this.offset+" + indices.map(function(i) {
	        return "this.stride[" + i + "]*i" + i
	      }).join("+")
	  var shapeArg = indices.map(function(i) {
	      return "b"+i
	    }).join(",")
	  var strideArg = indices.map(function(i) {
	      return "c"+i
	    }).join(",")
	  code.push(
	    "function "+className+"(a," + shapeArg + "," + strideArg + ",d){this.data=a",
	      "this.shape=[" + shapeArg + "]",
	      "this.stride=[" + strideArg + "]",
	      "this.offset=d|0}",
	    "var proto="+className+".prototype",
	    "proto.dtype='"+dtype+"'",
	    "proto.dimension="+dimension)
	
	  //view.size:
	  code.push("Object.defineProperty(proto,'size',{get:function "+className+"_size(){\
	return "+indices.map(function(i) { return "this.shape["+i+"]" }).join("*"),
	"}})")
	
	  //view.order:
	  if(dimension === 1) {
	    code.push("proto.order=[0]")
	  } else {
	    code.push("Object.defineProperty(proto,'order',{get:")
	    if(dimension < 4) {
	      code.push("function "+className+"_order(){")
	      if(dimension === 2) {
	        code.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})")
	      } else if(dimension === 3) {
	        code.push(
	"var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);\
	if(s0>s1){\
	if(s1>s2){\
	return [2,1,0];\
	}else if(s0>s2){\
	return [1,2,0];\
	}else{\
	return [1,0,2];\
	}\
	}else if(s0>s2){\
	return [2,0,1];\
	}else if(s2>s1){\
	return [0,1,2];\
	}else{\
	return [0,2,1];\
	}}})")
	      }
	    } else {
	      code.push("ORDER})")
	    }
	  }
	
	  //view.set(i0, ..., v):
	  code.push(
	"proto.set=function "+className+"_set("+args.join(",")+",v){")
	  if(useGetters) {
	    code.push("return this.data.set("+index_str+",v)}")
	  } else {
	    code.push("return this.data["+index_str+"]=v}")
	  }
	
	  //view.get(i0, ...):
	  code.push("proto.get=function "+className+"_get("+args.join(",")+"){")
	  if(useGetters) {
	    code.push("return this.data.get("+index_str+")}")
	  } else {
	    code.push("return this.data["+index_str+"]}")
	  }
	
	  //view.index:
	  code.push(
	    "proto.index=function "+className+"_index(", args.join(), "){return "+index_str+"}")
	
	  //view.hi():
	  code.push("proto.hi=function "+className+"_hi("+args.join(",")+"){return new "+className+"(this.data,"+
	    indices.map(function(i) {
	      return ["(typeof i",i,"!=='number'||i",i,"<0)?this.shape[", i, "]:i", i,"|0"].join("")
	    }).join(",")+","+
	    indices.map(function(i) {
	      return "this.stride["+i + "]"
	    }).join(",")+",this.offset)}")
	
	  //view.lo():
	  var a_vars = indices.map(function(i) { return "a"+i+"=this.shape["+i+"]" })
	  var c_vars = indices.map(function(i) { return "c"+i+"=this.stride["+i+"]" })
	  code.push("proto.lo=function "+className+"_lo("+args.join(",")+"){var b=this.offset,d=0,"+a_vars.join(",")+","+c_vars.join(","))
	  for(var i=0; i<dimension; ++i) {
	    code.push(
	"if(typeof i"+i+"==='number'&&i"+i+">=0){\
	d=i"+i+"|0;\
	b+=c"+i+"*d;\
	a"+i+"-=d}")
	  }
	  code.push("return new "+className+"(this.data,"+
	    indices.map(function(i) {
	      return "a"+i
	    }).join(",")+","+
	    indices.map(function(i) {
	      return "c"+i
	    }).join(",")+",b)}")
	
	  //view.step():
	  code.push("proto.step=function "+className+"_step("+args.join(",")+"){var "+
	    indices.map(function(i) {
	      return "a"+i+"=this.shape["+i+"]"
	    }).join(",")+","+
	    indices.map(function(i) {
	      return "b"+i+"=this.stride["+i+"]"
	    }).join(",")+",c=this.offset,d=0,ceil=Math.ceil")
	  for(var i=0; i<dimension; ++i) {
	    code.push(
	"if(typeof i"+i+"==='number'){\
	d=i"+i+"|0;\
	if(d<0){\
	c+=b"+i+"*(a"+i+"-1);\
	a"+i+"=ceil(-a"+i+"/d)\
	}else{\
	a"+i+"=ceil(a"+i+"/d)\
	}\
	b"+i+"*=d\
	}")
	  }
	  code.push("return new "+className+"(this.data,"+
	    indices.map(function(i) {
	      return "a" + i
	    }).join(",")+","+
	    indices.map(function(i) {
	      return "b" + i
	    }).join(",")+",c)}")
	
	  //view.transpose():
	  var tShape = new Array(dimension)
	  var tStride = new Array(dimension)
	  for(var i=0; i<dimension; ++i) {
	    tShape[i] = "a[i"+i+"]"
	    tStride[i] = "b[i"+i+"]"
	  }
	  code.push("proto.transpose=function "+className+"_transpose("+args+"){"+
	    args.map(function(n,idx) { return n + "=(" + n + "===undefined?" + idx + ":" + n + "|0)"}).join(";"),
	    "var a=this.shape,b=this.stride;return new "+className+"(this.data,"+tShape.join(",")+","+tStride.join(",")+",this.offset)}")
	
	  //view.pick():
	  code.push("proto.pick=function "+className+"_pick("+args+"){var a=[],b=[],c=this.offset")
	  for(var i=0; i<dimension; ++i) {
	    code.push("if(typeof i"+i+"==='number'&&i"+i+">=0){c=(c+this.stride["+i+"]*i"+i+")|0}else{a.push(this.shape["+i+"]);b.push(this.stride["+i+"])}")
	  }
	  code.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}")
	
	  //Add return statement
	  code.push("return function construct_"+className+"(data,shape,stride,offset){return new "+className+"(data,"+
	    indices.map(function(i) {
	      return "shape["+i+"]"
	    }).join(",")+","+
	    indices.map(function(i) {
	      return "stride["+i+"]"
	    }).join(",")+",offset)}")
	
	  //Compile procedure
	  var procedure = new Function("CTOR_LIST", "ORDER", code.join("\n"))
	  return procedure(CACHED_CONSTRUCTORS[dtype], order)
	}
	
	function arrayDType(data) {
	  if(isBuffer(data)) {
	    return "buffer"
	  }
	  if(hasTypedArrays) {
	    switch(Object.prototype.toString.call(data)) {
	      case "[object Float64Array]":
	        return "float64"
	      case "[object Float32Array]":
	        return "float32"
	      case "[object Int8Array]":
	        return "int8"
	      case "[object Int16Array]":
	        return "int16"
	      case "[object Int32Array]":
	        return "int32"
	      case "[object Uint8Array]":
	        return "uint8"
	      case "[object Uint16Array]":
	        return "uint16"
	      case "[object Uint32Array]":
	        return "uint32"
	      case "[object Uint8ClampedArray]":
	        return "uint8_clamped"
	    }
	  }
	  if(Array.isArray(data)) {
	    return "array"
	  }
	  return "generic"
	}
	
	var CACHED_CONSTRUCTORS = {
	  "float32":[],
	  "float64":[],
	  "int8":[],
	  "int16":[],
	  "int32":[],
	  "uint8":[],
	  "uint16":[],
	  "uint32":[],
	  "array":[],
	  "uint8_clamped":[],
	  "buffer":[],
	  "generic":[]
	}
	
	;(function() {
	  for(var id in CACHED_CONSTRUCTORS) {
	    CACHED_CONSTRUCTORS[id].push(compileConstructor(id, -1))
	  }
	});
	
	function wrappedNDArrayCtor(data, shape, stride, offset) {
	  if(data === undefined) {
	    var ctor = CACHED_CONSTRUCTORS.array[0]
	    return ctor([])
	  } else if(typeof data === "number") {
	    data = [data]
	  }
	  if(shape === undefined) {
	    shape = [ data.length ]
	  }
	  var d = shape.length
	  if(stride === undefined) {
	    stride = new Array(d)
	    for(var i=d-1, sz=1; i>=0; --i) {
	      stride[i] = sz
	      sz *= shape[i]
	    }
	  }
	  if(offset === undefined) {
	    offset = 0
	    for(var i=0; i<d; ++i) {
	      if(stride[i] < 0) {
	        offset -= (shape[i]-1)*stride[i]
	      }
	    }
	  }
	  var dtype = arrayDType(data)
	  var ctor_list = CACHED_CONSTRUCTORS[dtype]
	  while(ctor_list.length <= d+1) {
	    ctor_list.push(compileConstructor(dtype, ctor_list.length-1))
	  }
	  var ctor = ctor_list[d+1]
	  return ctor(data, shape, stride, offset)
	}
	
	module.exports = wrappedNDArrayCtor


/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict"
	
	function iota(n) {
	  var result = new Array(n)
	  for(var i=0; i<n; ++i) {
	    result[i] = i
	  }
	  return result
	}
	
	module.exports = iota

/***/ },
/* 93 */
/***/ function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict"
	
	var compile = __webpack_require__(95)
	
	var EmptyProc = {
	  body: "",
	  args: [],
	  thisVars: [],
	  localVars: []
	}
	
	function fixup(x) {
	  if(!x) {
	    return EmptyProc
	  }
	  for(var i=0; i<x.args.length; ++i) {
	    var a = x.args[i]
	    if(i === 0) {
	      x.args[i] = {name: a, lvalue:true, rvalue: !!x.rvalue, count:x.count||1 }
	    } else {
	      x.args[i] = {name: a, lvalue:false, rvalue:true, count: 1}
	    }
	  }
	  if(!x.thisVars) {
	    x.thisVars = []
	  }
	  if(!x.localVars) {
	    x.localVars = []
	  }
	  return x
	}
	
	function pcompile(user_args) {
	  return compile({
	    args:     user_args.args,
	    pre:      fixup(user_args.pre),
	    body:     fixup(user_args.body),
	    post:     fixup(user_args.proc),
	    funcName: user_args.funcName
	  })
	}
	
	function makeOp(user_args) {
	  var args = []
	  for(var i=0; i<user_args.args.length; ++i) {
	    args.push("a"+i)
	  }
	  var wrapper = new Function("P", [
	    "return function ", user_args.funcName, "_ndarrayops(", args.join(","), ") {P(", args.join(","), ");return a0}"
	  ].join(""))
	  return wrapper(pcompile(user_args))
	}
	
	var assign_ops = {
	  add:  "+",
	  sub:  "-",
	  mul:  "*",
	  div:  "/",
	  mod:  "%",
	  band: "&",
	  bor:  "|",
	  bxor: "^",
	  lshift: "<<",
	  rshift: ">>",
	  rrshift: ">>>"
	}
	;(function(){
	  for(var id in assign_ops) {
	    var op = assign_ops[id]
	    exports[id] = makeOp({
	      args: ["array","array","array"],
	      body: {args:["a","b","c"],
	             body: "a=b"+op+"c"},
	      funcName: id
	    })
	    exports[id+"eq"] = makeOp({
	      args: ["array","array"],
	      body: {args:["a","b"],
	             body:"a"+op+"=b"},
	      rvalue: true,
	      funcName: id+"eq"
	    })
	    exports[id+"s"] = makeOp({
	      args: ["array", "array", "scalar"],
	      body: {args:["a","b","s"],
	             body:"a=b"+op+"s"},
	      funcName: id+"s"
	    })
	    exports[id+"seq"] = makeOp({
	      args: ["array","scalar"],
	      body: {args:["a","s"],
	             body:"a"+op+"=s"},
	      rvalue: true,
	      funcName: id+"seq"
	    })
	  }
	})();
	
	var unary_ops = {
	  not: "!",
	  bnot: "~",
	  neg: "-",
	  recip: "1.0/"
	}
	;(function(){
	  for(var id in unary_ops) {
	    var op = unary_ops[id]
	    exports[id] = makeOp({
	      args: ["array", "array"],
	      body: {args:["a","b"],
	             body:"a="+op+"b"},
	      funcName: id
	    })
	    exports[id+"eq"] = makeOp({
	      args: ["array"],
	      body: {args:["a"],
	             body:"a="+op+"a"},
	      rvalue: true,
	      count: 2,
	      funcName: id+"eq"
	    })
	  }
	})();
	
	var binary_ops = {
	  and: "&&",
	  or: "||",
	  eq: "===",
	  neq: "!==",
	  lt: "<",
	  gt: ">",
	  leq: "<=",
	  geq: ">="
	}
	;(function() {
	  for(var id in binary_ops) {
	    var op = binary_ops[id]
	    exports[id] = makeOp({
	      args: ["array","array","array"],
	      body: {args:["a", "b", "c"],
	             body:"a=b"+op+"c"},
	      funcName: id
	    })
	    exports[id+"s"] = makeOp({
	      args: ["array","array","scalar"],
	      body: {args:["a", "b", "s"],
	             body:"a=b"+op+"s"},
	      funcName: id+"s"
	    })
	    exports[id+"eq"] = makeOp({
	      args: ["array", "array"],
	      body: {args:["a", "b"],
	             body:"a=a"+op+"b"},
	      rvalue:true,
	      count:2,
	      funcName: id+"eq"
	    })
	    exports[id+"seq"] = makeOp({
	      args: ["array", "scalar"],
	      body: {args:["a","s"],
	             body:"a=a"+op+"s"},
	      rvalue:true,
	      count:2,
	      funcName: id+"seq"
	    })
	  }
	})();
	
	var math_unary = [
	  "abs",
	  "acos",
	  "asin",
	  "atan",
	  "ceil",
	  "cos",
	  "exp",
	  "floor",
	  "log",
	  "round",
	  "sin",
	  "sqrt",
	  "tan"
	]
	;(function() {
	  for(var i=0; i<math_unary.length; ++i) {
	    var f = math_unary[i]
	    exports[f] = makeOp({
	                    args: ["array", "array"],
	                    pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
	                    body: {args:["a","b"], body:"a=this_f(b)", thisVars:["this_f"]},
	                    funcName: f
	                  })
	    exports[f+"eq"] = makeOp({
	                      args: ["array"],
	                      pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
	                      body: {args: ["a"], body:"a=this_f(a)", thisVars:["this_f"]},
	                      rvalue: true,
	                      count: 2,
	                      funcName: f+"eq"
	                    })
	  }
	})();
	
	var math_comm = [
	  "max",
	  "min",
	  "atan2",
	  "pow"
	]
	;(function(){
	  for(var i=0; i<math_comm.length; ++i) {
	    var f= math_comm[i]
	    exports[f] = makeOp({
	                  args:["array", "array", "array"],
	                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
	                  body: {args:["a","b","c"], body:"a=this_f(b,c)", thisVars:["this_f"]},
	                  funcName: f
	                })
	    exports[f+"s"] = makeOp({
	                  args:["array", "array", "scalar"],
	                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
	                  body: {args:["a","b","c"], body:"a=this_f(b,c)", thisVars:["this_f"]},
	                  funcName: f+"s"
	                  })
	    exports[f+"eq"] = makeOp({ args:["array", "array"],
	                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
	                  body: {args:["a","b"], body:"a=this_f(a,b)", thisVars:["this_f"]},
	                  rvalue: true,
	                  count: 2,
	                  funcName: f+"eq"
	                  })
	    exports[f+"seq"] = makeOp({ args:["array", "scalar"],
	                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
	                  body: {args:["a","b"], body:"a=this_f(a,b)", thisVars:["this_f"]},
	                  rvalue:true,
	                  count:2,
	                  funcName: f+"seq"
	                  })
	  }
	})();
	
	var math_noncomm = [
	  "atan2",
	  "pow"
	]
	;(function(){
	  for(var i=0; i<math_noncomm.length; ++i) {
	    var f= math_noncomm[i]
	    exports[f+"op"] = makeOp({
	                  args:["array", "array", "array"],
	                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
	                  body: {args:["a","b","c"], body:"a=this_f(c,b)", thisVars:["this_f"]},
	                  funcName: f+"op"
	                })
	    exports[f+"ops"] = makeOp({
	                  args:["array", "array", "scalar"],
	                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
	                  body: {args:["a","b","c"], body:"a=this_f(c,b)", thisVars:["this_f"]},
	                  funcName: f+"ops"
	                  })
	    exports[f+"opeq"] = makeOp({ args:["array", "array"],
	                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
	                  body: {args:["a","b"], body:"a=this_f(b,a)", thisVars:["this_f"]},
	                  rvalue: true,
	                  count: 2,
	                  funcName: f+"opeq"
	                  })
	    exports[f+"opseq"] = makeOp({ args:["array", "scalar"],
	                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
	                  body: {args:["a","b"], body:"a=this_f(b,a)", thisVars:["this_f"]},
	                  rvalue:true,
	                  count:2,
	                  funcName: f+"opseq"
	                  })
	  }
	})();
	
	exports.any = compile({
	  args:["array"],
	  pre: EmptyProc,
	  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "if(a){return true}", localVars: [], thisVars: []},
	  post: {args:[], localVars:[], thisVars:[], body:"return false"},
	  funcName: "any"
	})
	
	exports.all = compile({
	  args:["array"],
	  pre: EmptyProc,
	  body: {args:[{name:"x", lvalue:false, rvalue:true, count:1}], body: "if(!x){return false}", localVars: [], thisVars: []},
	  post: {args:[], localVars:[], thisVars:[], body:"return true"},
	  funcName: "all"
	})
	
	exports.sum = compile({
	  args:["array"],
	  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
	  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "this_s+=a", localVars: [], thisVars: ["this_s"]},
	  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
	  funcName: "sum"
	})
	
	exports.prod = compile({
	  args:["array"],
	  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=1"},
	  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "this_s*=a", localVars: [], thisVars: ["this_s"]},
	  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
	  funcName: "prod"
	})
	
	exports.norm2squared = compile({
	  args:["array"],
	  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
	  body: {args:[{name:"a", lvalue:false, rvalue:true, count:2}], body: "this_s+=a*a", localVars: [], thisVars: ["this_s"]},
	  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
	  funcName: "norm2squared"
	})
	  
	exports.norm2 = compile({
	  args:["array"],
	  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
	  body: {args:[{name:"a", lvalue:false, rvalue:true, count:2}], body: "this_s+=a*a", localVars: [], thisVars: ["this_s"]},
	  post: {args:[], localVars:[], thisVars:["this_s"], body:"return Math.sqrt(this_s)"},
	  funcName: "norm2"
	})
	  
	
	exports.norminf = compile({
	  args:["array"],
	  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
	  body: {args:[{name:"a", lvalue:false, rvalue:true, count:4}], body:"if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}", localVars: [], thisVars: ["this_s"]},
	  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
	  funcName: "norminf"
	})
	
	exports.norm1 = compile({
	  args:["array"],
	  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
	  body: {args:[{name:"a", lvalue:false, rvalue:true, count:3}], body: "this_s+=a<0?-a:a", localVars: [], thisVars: ["this_s"]},
	  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
	  funcName: "norm1"
	})
	
	exports.sup = compile({
	  args: [ "array" ],
	  pre:
	   { body: "this_h=-Infinity",
	     args: [],
	     thisVars: [ "this_h" ],
	     localVars: [] },
	  body:
	   { body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",
	     args: [{"name":"_inline_1_arg0_","lvalue":false,"rvalue":true,"count":2} ],
	     thisVars: [ "this_h" ],
	     localVars: [] },
	  post:
	   { body: "return this_h",
	     args: [],
	     thisVars: [ "this_h" ],
	     localVars: [] }
	 })
	
	exports.inf = compile({
	  args: [ "array" ],
	  pre:
	   { body: "this_h=Infinity",
	     args: [],
	     thisVars: [ "this_h" ],
	     localVars: [] },
	  body:
	   { body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",
	     args: [{"name":"_inline_1_arg0_","lvalue":false,"rvalue":true,"count":2} ],
	     thisVars: [ "this_h" ],
	     localVars: [] },
	  post:
	   { body: "return this_h",
	     args: [],
	     thisVars: [ "this_h" ],
	     localVars: [] }
	 })
	
	exports.argmin = compile({
	  args:["index","array","shape"],
	  pre:{
	    body:"{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",
	    args:[
	      {name:"_inline_0_arg0_",lvalue:false,rvalue:false,count:0},
	      {name:"_inline_0_arg1_",lvalue:false,rvalue:false,count:0},
	      {name:"_inline_0_arg2_",lvalue:false,rvalue:true,count:1}
	      ],
	    thisVars:["this_i","this_v"],
	    localVars:[]},
	  body:{
	    body:"{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
	    args:[
	      {name:"_inline_1_arg0_",lvalue:false,rvalue:true,count:2},
	      {name:"_inline_1_arg1_",lvalue:false,rvalue:true,count:2}],
	    thisVars:["this_i","this_v"],
	    localVars:["_inline_1_k"]},
	  post:{
	    body:"{return this_i}",
	    args:[],
	    thisVars:["this_i"],
	    localVars:[]}
	})
	
	exports.argmax = compile({
	  args:["index","array","shape"],
	  pre:{
	    body:"{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",
	    args:[
	      {name:"_inline_0_arg0_",lvalue:false,rvalue:false,count:0},
	      {name:"_inline_0_arg1_",lvalue:false,rvalue:false,count:0},
	      {name:"_inline_0_arg2_",lvalue:false,rvalue:true,count:1}
	      ],
	    thisVars:["this_i","this_v"],
	    localVars:[]},
	  body:{
	    body:"{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
	    args:[
	      {name:"_inline_1_arg0_",lvalue:false,rvalue:true,count:2},
	      {name:"_inline_1_arg1_",lvalue:false,rvalue:true,count:2}],
	    thisVars:["this_i","this_v"],
	    localVars:["_inline_1_k"]},
	  post:{
	    body:"{return this_i}",
	    args:[],
	    thisVars:["this_i"],
	    localVars:[]}
	})  
	
	exports.random = makeOp({
	  args: ["array"],
	  pre: {args:[], body:"this_f=Math.random", thisVars:["this_f"]},
	  body: {args: ["a"], body:"a=this_f()", thisVars:["this_f"]},
	  funcName: "random"
	})
	
	exports.assign = makeOp({
	  args:["array", "array"],
	  body: {args:["a", "b"], body:"a=b"},
	  funcName: "assign" })
	
	exports.assigns = makeOp({
	  args:["array", "scalar"],
	  body: {args:["a", "b"], body:"a=b"},
	  funcName: "assigns" })
	
	
	exports.equals = compile({
	  args:["array", "array"],
	  pre: EmptyProc,
	  body: {args:[{name:"x", lvalue:false, rvalue:true, count:1},
	               {name:"y", lvalue:false, rvalue:true, count:1}], 
	        body: "if(x!==y){return false}", 
	        localVars: [], 
	        thisVars: []},
	  post: {args:[], localVars:[], thisVars:[], body:"return true"},
	  funcName: "equals"
	})
	
	


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict"
	
	var createThunk = __webpack_require__(96)
	
	function Procedure() {
	  this.argTypes = []
	  this.shimArgs = []
	  this.arrayArgs = []
	  this.arrayBlockIndices = []
	  this.scalarArgs = []
	  this.offsetArgs = []
	  this.offsetArgIndex = []
	  this.indexArgs = []
	  this.shapeArgs = []
	  this.funcName = ""
	  this.pre = null
	  this.body = null
	  this.post = null
	  this.debug = false
	}
	
	function compileCwise(user_args) {
	  //Create procedure
	  var proc = new Procedure()
	  
	  //Parse blocks
	  proc.pre    = user_args.pre
	  proc.body   = user_args.body
	  proc.post   = user_args.post
	
	  //Parse arguments
	  var proc_args = user_args.args.slice(0)
	  proc.argTypes = proc_args
	  for(var i=0; i<proc_args.length; ++i) {
	    var arg_type = proc_args[i]
	    if(arg_type === "array" || (typeof arg_type === "object" && arg_type.blockIndices)) {
	      proc.argTypes[i] = "array"
	      proc.arrayArgs.push(i)
	      proc.arrayBlockIndices.push(arg_type.blockIndices ? arg_type.blockIndices : 0)
	      proc.shimArgs.push("array" + i)
	      if(i < proc.pre.args.length && proc.pre.args[i].count>0) {
	        throw new Error("cwise: pre() block may not reference array args")
	      }
	      if(i < proc.post.args.length && proc.post.args[i].count>0) {
	        throw new Error("cwise: post() block may not reference array args")
	      }
	    } else if(arg_type === "scalar") {
	      proc.scalarArgs.push(i)
	      proc.shimArgs.push("scalar" + i)
	    } else if(arg_type === "index") {
	      proc.indexArgs.push(i)
	      if(i < proc.pre.args.length && proc.pre.args[i].count > 0) {
	        throw new Error("cwise: pre() block may not reference array index")
	      }
	      if(i < proc.body.args.length && proc.body.args[i].lvalue) {
	        throw new Error("cwise: body() block may not write to array index")
	      }
	      if(i < proc.post.args.length && proc.post.args[i].count > 0) {
	        throw new Error("cwise: post() block may not reference array index")
	      }
	    } else if(arg_type === "shape") {
	      proc.shapeArgs.push(i)
	      if(i < proc.pre.args.length && proc.pre.args[i].lvalue) {
	        throw new Error("cwise: pre() block may not write to array shape")
	      }
	      if(i < proc.body.args.length && proc.body.args[i].lvalue) {
	        throw new Error("cwise: body() block may not write to array shape")
	      }
	      if(i < proc.post.args.length && proc.post.args[i].lvalue) {
	        throw new Error("cwise: post() block may not write to array shape")
	      }
	    } else if(typeof arg_type === "object" && arg_type.offset) {
	      proc.argTypes[i] = "offset"
	      proc.offsetArgs.push({ array: arg_type.array, offset:arg_type.offset })
	      proc.offsetArgIndex.push(i)
	    } else {
	      throw new Error("cwise: Unknown argument type " + proc_args[i])
	    }
	  }
	  
	  //Make sure at least one array argument was specified
	  if(proc.arrayArgs.length <= 0) {
	    throw new Error("cwise: No array arguments specified")
	  }
	  
	  //Make sure arguments are correct
	  if(proc.pre.args.length > proc_args.length) {
	    throw new Error("cwise: Too many arguments in pre() block")
	  }
	  if(proc.body.args.length > proc_args.length) {
	    throw new Error("cwise: Too many arguments in body() block")
	  }
	  if(proc.post.args.length > proc_args.length) {
	    throw new Error("cwise: Too many arguments in post() block")
	  }
	
	  //Check debug flag
	  proc.debug = !!user_args.printCode || !!user_args.debug
	  
	  //Retrieve name
	  proc.funcName = user_args.funcName || "cwise"
	  
	  //Read in block size
	  proc.blockSize = user_args.blockSize || 64
	
	  return createThunk(proc)
	}
	
	module.exports = compileCwise


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict"
	
	// The function below is called when constructing a cwise function object, and does the following:
	// A function object is constructed which accepts as argument a compilation function and returns another function.
	// It is this other function that is eventually returned by createThunk, and this function is the one that actually
	// checks whether a certain pattern of arguments has already been used before and compiles new loops as needed.
	// The compilation passed to the first function object is used for compiling new functions.
	// Once this function object is created, it is called with compile as argument, where the first argument of compile
	// is bound to "proc" (essentially containing a preprocessed version of the user arguments to cwise).
	// So createThunk roughly works like this:
	// function createThunk(proc) {
	//   var thunk = function(compileBound) {
	//     var CACHED = {}
	//     return function(arrays and scalars) {
	//       if (dtype and order of arrays in CACHED) {
	//         var func = CACHED[dtype and order of arrays]
	//       } else {
	//         var func = CACHED[dtype and order of arrays] = compileBound(dtype and order of arrays)
	//       }
	//       return func(arrays and scalars)
	//     }
	//   }
	//   return thunk(compile.bind1(proc))
	// }
	
	var compile = __webpack_require__(97)
	
	function createThunk(proc) {
	  var code = ["'use strict'", "var CACHED={}"]
	  var vars = []
	  var thunkName = proc.funcName + "_cwise_thunk"
	  
	  //Build thunk
	  code.push(["return function ", thunkName, "(", proc.shimArgs.join(","), "){"].join(""))
	  var typesig = []
	  var string_typesig = []
	  var proc_args = [["array",proc.arrayArgs[0],".shape.slice(", // Slice shape so that we only retain the shape over which we iterate (which gets passed to the cwise operator as SS).
	                    Math.max(0,proc.arrayBlockIndices[0]),proc.arrayBlockIndices[0]<0?(","+proc.arrayBlockIndices[0]+")"):")"].join("")]
	  var shapeLengthConditions = [], shapeConditions = []
	  // Process array arguments
	  for(var i=0; i<proc.arrayArgs.length; ++i) {
	    var j = proc.arrayArgs[i]
	    vars.push(["t", j, "=array", j, ".dtype,",
	               "r", j, "=array", j, ".order"].join(""))
	    typesig.push("t" + j)
	    typesig.push("r" + j)
	    string_typesig.push("t"+j)
	    string_typesig.push("r"+j+".join()")
	    proc_args.push("array" + j + ".data")
	    proc_args.push("array" + j + ".stride")
	    proc_args.push("array" + j + ".offset|0")
	    if (i>0) { // Gather conditions to check for shape equality (ignoring block indices)
	      shapeLengthConditions.push("array" + proc.arrayArgs[0] + ".shape.length===array" + j + ".shape.length+" + (Math.abs(proc.arrayBlockIndices[0])-Math.abs(proc.arrayBlockIndices[i])))
	      shapeConditions.push("array" + proc.arrayArgs[0] + ".shape[shapeIndex+" + Math.max(0,proc.arrayBlockIndices[0]) + "]===array" + j + ".shape[shapeIndex+" + Math.max(0,proc.arrayBlockIndices[i]) + "]")
	    }
	  }
	  // Check for shape equality
	  if (proc.arrayArgs.length > 1) {
	    code.push("if (!(" + shapeLengthConditions.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')")
	    code.push("for(var shapeIndex=array" + proc.arrayArgs[0] + ".shape.length-" + Math.abs(proc.arrayBlockIndices[0]) + "; shapeIndex-->0;) {")
	    code.push("if (!(" + shapeConditions.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same shape!')")
	    code.push("}")
	  }
	  // Process scalar arguments
	  for(var i=0; i<proc.scalarArgs.length; ++i) {
	    proc_args.push("scalar" + proc.scalarArgs[i])
	  }
	  // Check for cached function (and if not present, generate it)
	  vars.push(["type=[", string_typesig.join(","), "].join()"].join(""))
	  vars.push("proc=CACHED[type]")
	  code.push("var " + vars.join(","))
	  
	  code.push(["if(!proc){",
	             "CACHED[type]=proc=compile([", typesig.join(","), "])}",
	             "return proc(", proc_args.join(","), ")}"].join(""))
	
	  if(proc.debug) {
	    console.log("-----Generated thunk:\n" + code.join("\n") + "\n----------")
	  }
	  
	  //Compile thunk
	  var thunk = new Function("compile", code.join("\n"))
	  return thunk(compile.bind(undefined, proc))
	}
	
	module.exports = createThunk


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict"
	
	var uniq = __webpack_require__(98)
	
	// This function generates very simple loops analogous to how you typically traverse arrays (the outermost loop corresponds to the slowest changing index, the innermost loop to the fastest changing index)
	// TODO: If two arrays have the same strides (and offsets) there is potential for decreasing the number of "pointers" and related variables. The drawback is that the type signature would become more specific and that there would thus be less potential for caching, but it might still be worth it, especially when dealing with large numbers of arguments.
	function innerFill(order, proc, body) {
	  var dimension = order.length
	    , nargs = proc.arrayArgs.length
	    , has_index = proc.indexArgs.length>0
	    , code = []
	    , vars = []
	    , idx=0, pidx=0, i, j
	  for(i=0; i<dimension; ++i) { // Iteration variables
	    vars.push(["i",i,"=0"].join(""))
	  }
	  //Compute scan deltas
	  for(j=0; j<nargs; ++j) {
	    for(i=0; i<dimension; ++i) {
	      pidx = idx
	      idx = order[i]
	      if(i === 0) { // The innermost/fastest dimension's delta is simply its stride
	        vars.push(["d",j,"s",i,"=t",j,"p",idx].join(""))
	      } else { // For other dimensions the delta is basically the stride minus something which essentially "rewinds" the previous (more inner) dimension
	        vars.push(["d",j,"s",i,"=(t",j,"p",idx,"-s",pidx,"*t",j,"p",pidx,")"].join(""))
	      }
	    }
	  }
	  code.push("var " + vars.join(","))
	  //Scan loop
	  for(i=dimension-1; i>=0; --i) { // Start at largest stride and work your way inwards
	    idx = order[i]
	    code.push(["for(i",i,"=0;i",i,"<s",idx,";++i",i,"){"].join(""))
	  }
	  //Push body of inner loop
	  code.push(body)
	  //Advance scan pointers
	  for(i=0; i<dimension; ++i) {
	    pidx = idx
	    idx = order[i]
	    for(j=0; j<nargs; ++j) {
	      code.push(["p",j,"+=d",j,"s",i].join(""))
	    }
	    if(has_index) {
	      if(i > 0) {
	        code.push(["index[",pidx,"]-=s",pidx].join(""))
	      }
	      code.push(["++index[",idx,"]"].join(""))
	    }
	    code.push("}")
	  }
	  return code.join("\n")
	}
	
	// Generate "outer" loops that loop over blocks of data, applying "inner" loops to the blocks by manipulating the local variables in such a way that the inner loop only "sees" the current block.
	// TODO: If this is used, then the previous declaration (done by generateCwiseOp) of s* is essentially unnecessary.
	//       I believe the s* are not used elsewhere (in particular, I don't think they're used in the pre/post parts and "shape" is defined independently), so it would be possible to make defining the s* dependent on what loop method is being used.
	function outerFill(matched, order, proc, body) {
	  var dimension = order.length
	    , nargs = proc.arrayArgs.length
	    , blockSize = proc.blockSize
	    , has_index = proc.indexArgs.length > 0
	    , code = []
	  for(var i=0; i<nargs; ++i) {
	    code.push(["var offset",i,"=p",i].join(""))
	  }
	  //Generate loops for unmatched dimensions
	  // The order in which these dimensions are traversed is fairly arbitrary (from small stride to large stride, for the first argument)
	  // TODO: It would be nice if the order in which these loops are placed would also be somehow "optimal" (at the very least we should check that it really doesn't hurt us if they're not).
	  for(var i=matched; i<dimension; ++i) {
	    code.push(["for(var j"+i+"=SS[", order[i], "]|0;j", i, ">0;){"].join("")) // Iterate back to front
	    code.push(["if(j",i,"<",blockSize,"){"].join("")) // Either decrease j by blockSize (s = blockSize), or set it to zero (after setting s = j).
	    code.push(["s",order[i],"=j",i].join(""))
	    code.push(["j",i,"=0"].join(""))
	    code.push(["}else{s",order[i],"=",blockSize].join(""))
	    code.push(["j",i,"-=",blockSize,"}"].join(""))
	    if(has_index) {
	      code.push(["index[",order[i],"]=j",i].join(""))
	    }
	  }
	  for(var i=0; i<nargs; ++i) {
	    var indexStr = ["offset"+i]
	    for(var j=matched; j<dimension; ++j) {
	      indexStr.push(["j",j,"*t",i,"p",order[j]].join(""))
	    }
	    code.push(["p",i,"=(",indexStr.join("+"),")"].join(""))
	  }
	  code.push(innerFill(order, proc, body))
	  for(var i=matched; i<dimension; ++i) {
	    code.push("}")
	  }
	  return code.join("\n")
	}
	
	//Count the number of compatible inner orders
	// This is the length of the longest common prefix of the arrays in orders.
	// Each array in orders lists the dimensions of the correspond ndarray in order of increasing stride.
	// This is thus the maximum number of dimensions that can be efficiently traversed by simple nested loops for all arrays.
	function countMatches(orders) {
	  var matched = 0, dimension = orders[0].length
	  while(matched < dimension) {
	    for(var j=1; j<orders.length; ++j) {
	      if(orders[j][matched] !== orders[0][matched]) {
	        return matched
	      }
	    }
	    ++matched
	  }
	  return matched
	}
	
	//Processes a block according to the given data types
	// Replaces variable names by different ones, either "local" ones (that are then ferried in and out of the given array) or ones matching the arguments that the function performing the ultimate loop will accept.
	function processBlock(block, proc, dtypes) {
	  var code = block.body
	  var pre = []
	  var post = []
	  for(var i=0; i<block.args.length; ++i) {
	    var carg = block.args[i]
	    if(carg.count <= 0) {
	      continue
	    }
	    var re = new RegExp(carg.name, "g")
	    var ptrStr = ""
	    var arrNum = proc.arrayArgs.indexOf(i)
	    switch(proc.argTypes[i]) {
	      case "offset":
	        var offArgIndex = proc.offsetArgIndex.indexOf(i)
	        var offArg = proc.offsetArgs[offArgIndex]
	        arrNum = offArg.array
	        ptrStr = "+q" + offArgIndex // Adds offset to the "pointer" in the array
	      case "array":
	        ptrStr = "p" + arrNum + ptrStr
	        var localStr = "l" + i
	        var arrStr = "a" + arrNum
	        if (proc.arrayBlockIndices[arrNum] === 0) { // Argument to body is just a single value from this array
	          if(carg.count === 1) { // Argument/array used only once(?)
	            if(dtypes[arrNum] === "generic") {
	              if(carg.lvalue) {
	                pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // Is this necessary if the argument is ONLY used as an lvalue? (keep in mind that we can have a += something, so we would actually need to check carg.rvalue)
	                code = code.replace(re, localStr)
	                post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
	              } else {
	                code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""))
	              }
	            } else {
	              code = code.replace(re, [arrStr, "[", ptrStr, "]"].join(""))
	            }
	          } else if(dtypes[arrNum] === "generic") {
	            pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // TODO: Could we optimize by checking for carg.rvalue?
	            code = code.replace(re, localStr)
	            if(carg.lvalue) {
	              post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
	            }
	          } else {
	            pre.push(["var ", localStr, "=", arrStr, "[", ptrStr, "]"].join("")) // TODO: Could we optimize by checking for carg.rvalue?
	            code = code.replace(re, localStr)
	            if(carg.lvalue) {
	              post.push([arrStr, "[", ptrStr, "]=", localStr].join(""))
	            }
	          }
	        } else { // Argument to body is a "block"
	          var reStrArr = [carg.name], ptrStrArr = [ptrStr]
	          for(var j=0; j<Math.abs(proc.arrayBlockIndices[arrNum]); j++) {
	            reStrArr.push("\\s*\\[([^\\]]+)\\]")
	            ptrStrArr.push("$" + (j+1) + "*t" + arrNum + "b" + j) // Matched index times stride
	          }
	          re = new RegExp(reStrArr.join(""), "g")
	          ptrStr = ptrStrArr.join("+")
	          if(dtypes[arrNum] === "generic") {
	            /*if(carg.lvalue) {
	              pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // Is this necessary if the argument is ONLY used as an lvalue? (keep in mind that we can have a += something, so we would actually need to check carg.rvalue)
	              code = code.replace(re, localStr)
	              post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
	            } else {
	              code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""))
	            }*/
	            throw new Error("cwise: Generic arrays not supported in combination with blocks!")
	          } else {
	            // This does not produce any local variables, even if variables are used multiple times. It would be possible to do so, but it would complicate things quite a bit.
	            code = code.replace(re, [arrStr, "[", ptrStr, "]"].join(""))
	          }
	        }
	      break
	      case "scalar":
	        code = code.replace(re, "Y" + proc.scalarArgs.indexOf(i))
	      break
	      case "index":
	        code = code.replace(re, "index")
	      break
	      case "shape":
	        code = code.replace(re, "shape")
	      break
	    }
	  }
	  return [pre.join("\n"), code, post.join("\n")].join("\n").trim()
	}
	
	function typeSummary(dtypes) {
	  var summary = new Array(dtypes.length)
	  var allEqual = true
	  for(var i=0; i<dtypes.length; ++i) {
	    var t = dtypes[i]
	    var digits = t.match(/\d+/)
	    if(!digits) {
	      digits = ""
	    } else {
	      digits = digits[0]
	    }
	    if(t.charAt(0) === 0) {
	      summary[i] = "u" + t.charAt(1) + digits
	    } else {
	      summary[i] = t.charAt(0) + digits
	    }
	    if(i > 0) {
	      allEqual = allEqual && summary[i] === summary[i-1]
	    }
	  }
	  if(allEqual) {
	    return summary[0]
	  }
	  return summary.join("")
	}
	
	//Generates a cwise operator
	function generateCWiseOp(proc, typesig) {
	
	  //Compute dimension
	  // Arrays get put first in typesig, and there are two entries per array (dtype and order), so this gets the number of dimensions in the first array arg.
	  var dimension = (typesig[1].length - Math.abs(proc.arrayBlockIndices[0]))|0
	  var orders = new Array(proc.arrayArgs.length)
	  var dtypes = new Array(proc.arrayArgs.length)
	  for(var i=0; i<proc.arrayArgs.length; ++i) {
	    dtypes[i] = typesig[2*i]
	    orders[i] = typesig[2*i+1]
	  }
	  
	  //Determine where block and loop indices start and end
	  var blockBegin = [], blockEnd = [] // These indices are exposed as blocks
	  var loopBegin = [], loopEnd = [] // These indices are iterated over
	  var loopOrders = [] // orders restricted to the loop indices
	  for(var i=0; i<proc.arrayArgs.length; ++i) {
	    if (proc.arrayBlockIndices[i]<0) {
	      loopBegin.push(0)
	      loopEnd.push(dimension)
	      blockBegin.push(dimension)
	      blockEnd.push(dimension+proc.arrayBlockIndices[i])
	    } else {
	      loopBegin.push(proc.arrayBlockIndices[i]) // Non-negative
	      loopEnd.push(proc.arrayBlockIndices[i]+dimension)
	      blockBegin.push(0)
	      blockEnd.push(proc.arrayBlockIndices[i])
	    }
	    var newOrder = []
	    for(var j=0; j<orders[i].length; j++) {
	      if (loopBegin[i]<=orders[i][j] && orders[i][j]<loopEnd[i]) {
	        newOrder.push(orders[i][j]-loopBegin[i]) // If this is a loop index, put it in newOrder, subtracting loopBegin, to make sure that all loopOrders are using a common set of indices.
	      }
	    }
	    loopOrders.push(newOrder)
	  }
	
	  //First create arguments for procedure
	  var arglist = ["SS"] // SS is the overall shape over which we iterate
	  var code = ["'use strict'"]
	  var vars = []
	  
	  for(var j=0; j<dimension; ++j) {
	    vars.push(["s", j, "=SS[", j, "]"].join("")) // The limits for each dimension.
	  }
	  for(var i=0; i<proc.arrayArgs.length; ++i) {
	    arglist.push("a"+i) // Actual data array
	    arglist.push("t"+i) // Strides
	    arglist.push("p"+i) // Offset in the array at which the data starts (also used for iterating over the data)
	    
	    for(var j=0; j<dimension; ++j) { // Unpack the strides into vars for looping
	      vars.push(["t",i,"p",j,"=t",i,"[",loopBegin[i]+j,"]"].join(""))
	    }
	    
	    for(var j=0; j<Math.abs(proc.arrayBlockIndices[i]); ++j) { // Unpack the strides into vars for block iteration
	      vars.push(["t",i,"b",j,"=t",i,"[",blockBegin[i]+j,"]"].join(""))
	    }
	  }
	  for(var i=0; i<proc.scalarArgs.length; ++i) {
	    arglist.push("Y" + i)
	  }
	  if(proc.shapeArgs.length > 0) {
	    vars.push("shape=SS.slice(0)") // Makes the shape over which we iterate available to the user defined functions (so you can use width/height for example)
	  }
	  if(proc.indexArgs.length > 0) {
	    // Prepare an array to keep track of the (logical) indices, initialized to dimension zeroes.
	    var zeros = new Array(dimension)
	    for(var i=0; i<dimension; ++i) {
	      zeros[i] = "0"
	    }
	    vars.push(["index=[", zeros.join(","), "]"].join(""))
	  }
	  for(var i=0; i<proc.offsetArgs.length; ++i) { // Offset arguments used for stencil operations
	    var off_arg = proc.offsetArgs[i]
	    var init_string = []
	    for(var j=0; j<off_arg.offset.length; ++j) {
	      if(off_arg.offset[j] === 0) {
	        continue
	      } else if(off_arg.offset[j] === 1) {
	        init_string.push(["t", off_arg.array, "p", j].join(""))      
	      } else {
	        init_string.push([off_arg.offset[j], "*t", off_arg.array, "p", j].join(""))
	      }
	    }
	    if(init_string.length === 0) {
	      vars.push("q" + i + "=0")
	    } else {
	      vars.push(["q", i, "=", init_string.join("+")].join(""))
	    }
	  }
	
	  //Prepare this variables
	  var thisVars = uniq([].concat(proc.pre.thisVars)
	                      .concat(proc.body.thisVars)
	                      .concat(proc.post.thisVars))
	  vars = vars.concat(thisVars)
	  code.push("var " + vars.join(","))
	  for(var i=0; i<proc.arrayArgs.length; ++i) {
	    code.push("p"+i+"|=0")
	  }
	  
	  //Inline prelude
	  if(proc.pre.body.length > 3) {
	    code.push(processBlock(proc.pre, proc, dtypes))
	  }
	
	  //Process body
	  var body = processBlock(proc.body, proc, dtypes)
	  var matched = countMatches(loopOrders)
	  if(matched < dimension) {
	    code.push(outerFill(matched, loopOrders[0], proc, body)) // TODO: Rather than passing loopOrders[0], it might be interesting to look at passing an order that represents the majority of the arguments for example.
	  } else {
	    code.push(innerFill(loopOrders[0], proc, body))
	  }
	
	  //Inline epilog
	  if(proc.post.body.length > 3) {
	    code.push(processBlock(proc.post, proc, dtypes))
	  }
	  
	  if(proc.debug) {
	    console.log("-----Generated cwise routine for ", typesig, ":\n" + code.join("\n") + "\n----------")
	  }
	  
	  var loopName = [(proc.funcName||"unnamed"), "_cwise_loop_", orders[0].join("s"),"m",matched,typeSummary(dtypes)].join("")
	  var f = new Function(["function ",loopName,"(", arglist.join(","),"){", code.join("\n"),"} return ", loopName].join(""))
	  return f()
	}
	module.exports = generateCWiseOp


/***/ },
/* 98 */
/***/ function(module, exports) {

	"use strict"
	
	function unique_pred(list, compare) {
	  var ptr = 1
	    , len = list.length
	    , a=list[0], b=list[0]
	  for(var i=1; i<len; ++i) {
	    b = a
	    a = list[i]
	    if(compare(a, b)) {
	      if(i === ptr) {
	        ptr++
	        continue
	      }
	      list[ptr++] = a
	    }
	  }
	  list.length = ptr
	  return list
	}
	
	function unique_eq(list) {
	  var ptr = 1
	    , len = list.length
	    , a=list[0], b = list[0]
	  for(var i=1; i<len; ++i, b=a) {
	    b = a
	    a = list[i]
	    if(a !== b) {
	      if(i === ptr) {
	        ptr++
	        continue
	      }
	      list[ptr++] = a
	    }
	  }
	  list.length = ptr
	  return list
	}
	
	function unique(list, compare, sorted) {
	  if(list.length === 0) {
	    return list
	  }
	  if(compare) {
	    if(!sorted) {
	      list.sort(compare)
	    }
	    return unique_pred(list, compare)
	  }
	  if(!sorted) {
	    list.sort()
	  }
	  return unique_eq(list)
	}
	
	module.exports = unique


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, Buffer) {'use strict'
	
	var bits = __webpack_require__(104)
	var dup = __webpack_require__(105)
	
	//Legacy pool support
	if(!global.__TYPEDARRAY_POOL) {
	  global.__TYPEDARRAY_POOL = {
	      UINT8   : dup([32, 0])
	    , UINT16  : dup([32, 0])
	    , UINT32  : dup([32, 0])
	    , INT8    : dup([32, 0])
	    , INT16   : dup([32, 0])
	    , INT32   : dup([32, 0])
	    , FLOAT   : dup([32, 0])
	    , DOUBLE  : dup([32, 0])
	    , DATA    : dup([32, 0])
	    , UINT8C  : dup([32, 0])
	    , BUFFER  : dup([32, 0])
	  }
	}
	
	var hasUint8C = (typeof Uint8ClampedArray) !== 'undefined'
	var POOL = global.__TYPEDARRAY_POOL
	
	//Upgrade pool
	if(!POOL.UINT8C) {
	  POOL.UINT8C = dup([32, 0])
	}
	if(!POOL.BUFFER) {
	  POOL.BUFFER = dup([32, 0])
	}
	
	//New technique: Only allocate from ArrayBufferView and Buffer
	var DATA    = POOL.DATA
	  , BUFFER  = POOL.BUFFER
	
	exports.free = function free(array) {
	  if(Buffer.isBuffer(array)) {
	    BUFFER[bits.log2(array.length)].push(array)
	  } else {
	    if(Object.prototype.toString.call(array) !== '[object ArrayBuffer]') {
	      array = array.buffer
	    }
	    if(!array) {
	      return
	    }
	    var n = array.length || array.byteLength
	    var log_n = bits.log2(n)|0
	    DATA[log_n].push(array)
	  }
	}
	
	function freeArrayBuffer(buffer) {
	  if(!buffer) {
	    return
	  }
	  var n = buffer.length || buffer.byteLength
	  var log_n = bits.log2(n)
	  DATA[log_n].push(buffer)
	}
	
	function freeTypedArray(array) {
	  freeArrayBuffer(array.buffer)
	}
	
	exports.freeUint8 =
	exports.freeUint16 =
	exports.freeUint32 =
	exports.freeInt8 =
	exports.freeInt16 =
	exports.freeInt32 =
	exports.freeFloat32 = 
	exports.freeFloat =
	exports.freeFloat64 = 
	exports.freeDouble = 
	exports.freeUint8Clamped = 
	exports.freeDataView = freeTypedArray
	
	exports.freeArrayBuffer = freeArrayBuffer
	
	exports.freeBuffer = function freeBuffer(array) {
	  BUFFER[bits.log2(array.length)].push(array)
	}
	
	exports.malloc = function malloc(n, dtype) {
	  if(dtype === undefined || dtype === 'arraybuffer') {
	    return mallocArrayBuffer(n)
	  } else {
	    switch(dtype) {
	      case 'uint8':
	        return mallocUint8(n)
	      case 'uint16':
	        return mallocUint16(n)
	      case 'uint32':
	        return mallocUint32(n)
	      case 'int8':
	        return mallocInt8(n)
	      case 'int16':
	        return mallocInt16(n)
	      case 'int32':
	        return mallocInt32(n)
	      case 'float':
	      case 'float32':
	        return mallocFloat(n)
	      case 'double':
	      case 'float64':
	        return mallocDouble(n)
	      case 'uint8_clamped':
	        return mallocUint8Clamped(n)
	      case 'buffer':
	        return mallocBuffer(n)
	      case 'data':
	      case 'dataview':
	        return mallocDataView(n)
	
	      default:
	        return null
	    }
	  }
	  return null
	}
	
	function mallocArrayBuffer(n) {
	  var n = bits.nextPow2(n)
	  var log_n = bits.log2(n)
	  var d = DATA[log_n]
	  if(d.length > 0) {
	    return d.pop()
	  }
	  return new ArrayBuffer(n)
	}
	exports.mallocArrayBuffer = mallocArrayBuffer
	
	function mallocUint8(n) {
	  return new Uint8Array(mallocArrayBuffer(n), 0, n)
	}
	exports.mallocUint8 = mallocUint8
	
	function mallocUint16(n) {
	  return new Uint16Array(mallocArrayBuffer(2*n), 0, n)
	}
	exports.mallocUint16 = mallocUint16
	
	function mallocUint32(n) {
	  return new Uint32Array(mallocArrayBuffer(4*n), 0, n)
	}
	exports.mallocUint32 = mallocUint32
	
	function mallocInt8(n) {
	  return new Int8Array(mallocArrayBuffer(n), 0, n)
	}
	exports.mallocInt8 = mallocInt8
	
	function mallocInt16(n) {
	  return new Int16Array(mallocArrayBuffer(2*n), 0, n)
	}
	exports.mallocInt16 = mallocInt16
	
	function mallocInt32(n) {
	  return new Int32Array(mallocArrayBuffer(4*n), 0, n)
	}
	exports.mallocInt32 = mallocInt32
	
	function mallocFloat(n) {
	  return new Float32Array(mallocArrayBuffer(4*n), 0, n)
	}
	exports.mallocFloat32 = exports.mallocFloat = mallocFloat
	
	function mallocDouble(n) {
	  return new Float64Array(mallocArrayBuffer(8*n), 0, n)
	}
	exports.mallocFloat64 = exports.mallocDouble = mallocDouble
	
	function mallocUint8Clamped(n) {
	  if(hasUint8C) {
	    return new Uint8ClampedArray(mallocArrayBuffer(n), 0, n)
	  } else {
	    return mallocUint8(n)
	  }
	}
	exports.mallocUint8Clamped = mallocUint8Clamped
	
	function mallocDataView(n) {
	  return new DataView(mallocArrayBuffer(n), 0, n)
	}
	exports.mallocDataView = mallocDataView
	
	function mallocBuffer(n) {
	  n = bits.nextPow2(n)
	  var log_n = bits.log2(n)
	  var cache = BUFFER[log_n]
	  if(cache.length > 0) {
	    return cache.pop()
	  }
	  return new Buffer(n)
	}
	exports.mallocBuffer = mallocBuffer
	
	exports.clearCache = function clearCache() {
	  for(var i=0; i<32; ++i) {
	    POOL.UINT8[i].length = 0
	    POOL.UINT16[i].length = 0
	    POOL.UINT32[i].length = 0
	    POOL.INT8[i].length = 0
	    POOL.INT16[i].length = 0
	    POOL.INT32[i].length = 0
	    POOL.FLOAT[i].length = 0
	    POOL.DOUBLE[i].length = 0
	    POOL.UINT8C[i].length = 0
	    DATA[i].length = 0
	    BUFFER[i].length = 0
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(100).Buffer))

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(101)
	var ieee754 = __webpack_require__(102)
	var isArray = __webpack_require__(103)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()
	
	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }
	
	  return that
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}
	
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	
	  return fromObject(that, value)
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	
	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}
	
	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	
	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)
	
	  var actual = that.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }
	
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}
	
	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)
	
	    if (that.length === 0) {
	      return that
	    }
	
	    obj.copy(that, 0, 0, len)
	    return that
	  }
	
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(100).Buffer, (function() { return this; }())))

/***/ },
/* 101 */
/***/ function(module, exports) {

	'use strict'
	
	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray
	
	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}
	
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63
	
	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}
	
	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}
	
	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)
	
	  arr = new Arr(len * 3 / 4 - placeHolders)
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len
	
	  var L = 0
	
	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }
	
	  parts.push(output)
	
	  return parts.join('')
	}


/***/ },
/* 102 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 103 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 104 */
/***/ function(module, exports) {

	/**
	 * Bit twiddling hacks for JavaScript.
	 *
	 * Author: Mikola Lysenko
	 *
	 * Ported from Stanford bit twiddling hack library:
	 *    http://graphics.stanford.edu/~seander/bithacks.html
	 */
	
	"use strict"; "use restrict";
	
	//Number of bits in an integer
	var INT_BITS = 32;
	
	//Constants
	exports.INT_BITS  = INT_BITS;
	exports.INT_MAX   =  0x7fffffff;
	exports.INT_MIN   = -1<<(INT_BITS-1);
	
	//Returns -1, 0, +1 depending on sign of x
	exports.sign = function(v) {
	  return (v > 0) - (v < 0);
	}
	
	//Computes absolute value of integer
	exports.abs = function(v) {
	  var mask = v >> (INT_BITS-1);
	  return (v ^ mask) - mask;
	}
	
	//Computes minimum of integers x and y
	exports.min = function(x, y) {
	  return y ^ ((x ^ y) & -(x < y));
	}
	
	//Computes maximum of integers x and y
	exports.max = function(x, y) {
	  return x ^ ((x ^ y) & -(x < y));
	}
	
	//Checks if a number is a power of two
	exports.isPow2 = function(v) {
	  return !(v & (v-1)) && (!!v);
	}
	
	//Computes log base 2 of v
	exports.log2 = function(v) {
	  var r, shift;
	  r =     (v > 0xFFFF) << 4; v >>>= r;
	  shift = (v > 0xFF  ) << 3; v >>>= shift; r |= shift;
	  shift = (v > 0xF   ) << 2; v >>>= shift; r |= shift;
	  shift = (v > 0x3   ) << 1; v >>>= shift; r |= shift;
	  return r | (v >> 1);
	}
	
	//Computes log base 10 of v
	exports.log10 = function(v) {
	  return  (v >= 1000000000) ? 9 : (v >= 100000000) ? 8 : (v >= 10000000) ? 7 :
	          (v >= 1000000) ? 6 : (v >= 100000) ? 5 : (v >= 10000) ? 4 :
	          (v >= 1000) ? 3 : (v >= 100) ? 2 : (v >= 10) ? 1 : 0;
	}
	
	//Counts number of bits
	exports.popCount = function(v) {
	  v = v - ((v >>> 1) & 0x55555555);
	  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
	  return ((v + (v >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
	}
	
	//Counts number of trailing zeros
	function countTrailingZeros(v) {
	  var c = 32;
	  v &= -v;
	  if (v) c--;
	  if (v & 0x0000FFFF) c -= 16;
	  if (v & 0x00FF00FF) c -= 8;
	  if (v & 0x0F0F0F0F) c -= 4;
	  if (v & 0x33333333) c -= 2;
	  if (v & 0x55555555) c -= 1;
	  return c;
	}
	exports.countTrailingZeros = countTrailingZeros;
	
	//Rounds to next power of 2
	exports.nextPow2 = function(v) {
	  v += v === 0;
	  --v;
	  v |= v >>> 1;
	  v |= v >>> 2;
	  v |= v >>> 4;
	  v |= v >>> 8;
	  v |= v >>> 16;
	  return v + 1;
	}
	
	//Rounds down to previous power of 2
	exports.prevPow2 = function(v) {
	  v |= v >>> 1;
	  v |= v >>> 2;
	  v |= v >>> 4;
	  v |= v >>> 8;
	  v |= v >>> 16;
	  return v - (v>>>1);
	}
	
	//Computes parity of word
	exports.parity = function(v) {
	  v ^= v >>> 16;
	  v ^= v >>> 8;
	  v ^= v >>> 4;
	  v &= 0xf;
	  return (0x6996 >>> v) & 1;
	}
	
	var REVERSE_TABLE = new Array(256);
	
	(function(tab) {
	  for(var i=0; i<256; ++i) {
	    var v = i, r = i, s = 7;
	    for (v >>>= 1; v; v >>>= 1) {
	      r <<= 1;
	      r |= v & 1;
	      --s;
	    }
	    tab[i] = (r << s) & 0xff;
	  }
	})(REVERSE_TABLE);
	
	//Reverse bits in a 32 bit word
	exports.reverse = function(v) {
	  return  (REVERSE_TABLE[ v         & 0xff] << 24) |
	          (REVERSE_TABLE[(v >>> 8)  & 0xff] << 16) |
	          (REVERSE_TABLE[(v >>> 16) & 0xff] << 8)  |
	           REVERSE_TABLE[(v >>> 24) & 0xff];
	}
	
	//Interleave bits of 2 coordinates with 16 bits.  Useful for fast quadtree codes
	exports.interleave2 = function(x, y) {
	  x &= 0xFFFF;
	  x = (x | (x << 8)) & 0x00FF00FF;
	  x = (x | (x << 4)) & 0x0F0F0F0F;
	  x = (x | (x << 2)) & 0x33333333;
	  x = (x | (x << 1)) & 0x55555555;
	
	  y &= 0xFFFF;
	  y = (y | (y << 8)) & 0x00FF00FF;
	  y = (y | (y << 4)) & 0x0F0F0F0F;
	  y = (y | (y << 2)) & 0x33333333;
	  y = (y | (y << 1)) & 0x55555555;
	
	  return x | (y << 1);
	}
	
	//Extracts the nth interleaved component
	exports.deinterleave2 = function(v, n) {
	  v = (v >>> n) & 0x55555555;
	  v = (v | (v >>> 1))  & 0x33333333;
	  v = (v | (v >>> 2))  & 0x0F0F0F0F;
	  v = (v | (v >>> 4))  & 0x00FF00FF;
	  v = (v | (v >>> 16)) & 0x000FFFF;
	  return (v << 16) >> 16;
	}
	
	
	//Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes
	exports.interleave3 = function(x, y, z) {
	  x &= 0x3FF;
	  x  = (x | (x<<16)) & 4278190335;
	  x  = (x | (x<<8))  & 251719695;
	  x  = (x | (x<<4))  & 3272356035;
	  x  = (x | (x<<2))  & 1227133513;
	
	  y &= 0x3FF;
	  y  = (y | (y<<16)) & 4278190335;
	  y  = (y | (y<<8))  & 251719695;
	  y  = (y | (y<<4))  & 3272356035;
	  y  = (y | (y<<2))  & 1227133513;
	  x |= (y << 1);
	  
	  z &= 0x3FF;
	  z  = (z | (z<<16)) & 4278190335;
	  z  = (z | (z<<8))  & 251719695;
	  z  = (z | (z<<4))  & 3272356035;
	  z  = (z | (z<<2))  & 1227133513;
	  
	  return x | (z << 2);
	}
	
	//Extracts nth interleaved component of a 3-tuple
	exports.deinterleave3 = function(v, n) {
	  v = (v >>> n)       & 1227133513;
	  v = (v | (v>>>2))   & 3272356035;
	  v = (v | (v>>>4))   & 251719695;
	  v = (v | (v>>>8))   & 4278190335;
	  v = (v | (v>>>16))  & 0x3FF;
	  return (v<<22)>>22;
	}
	
	//Computes next combination in colexicographic order (this is mistakenly called nextPermutation on the bit twiddling hacks page)
	exports.nextCombination = function(v) {
	  var t = v | (v - 1);
	  return (t + 1) | (((~t & -~t) - 1) >>> (countTrailingZeros(v) + 1));
	}
	


/***/ },
/* 105 */
/***/ function(module, exports) {

	"use strict"
	
	function dupe_array(count, value, i) {
	  var c = count[i]|0
	  if(c <= 0) {
	    return []
	  }
	  var result = new Array(c), j
	  if(i === count.length-1) {
	    for(j=0; j<c; ++j) {
	      result[j] = value
	    }
	  } else {
	    for(j=0; j<c; ++j) {
	      result[j] = dupe_array(count, value, i+1)
	    }
	  }
	  return result
	}
	
	function dupe_number(count, value) {
	  var result, i
	  result = new Array(count)
	  for(i=0; i<count; ++i) {
	    result[i] = value
	  }
	  return result
	}
	
	function dupe(count, value) {
	  if(typeof value === "undefined") {
	    value = 0
	  }
	  switch(typeof count) {
	    case "number":
	      if(count > 0) {
	        return dupe_number(count|0, value)
	      }
	    break
	    case "object":
	      if(typeof (count.length) === "number") {
	        return dupe_array(count, value, 0)
	      }
	    break
	  }
	  return []
	}
	
	module.exports = dupe

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Particles = exports.defaults = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * A fork of [gl-particles](https://github.com/stackgl/gl-particles/blob/master/index.js).
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Adds support for different draw modes (as opposed to just POINTS) and a more
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * separated FBO and vertex setup (so you can have different-sized buffer and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * particles data).
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @todo Ideally, to render more logic than 4 floats (RGBA) in a single pass,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *       we'd like to render to multiple buffers at once - using
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *       WEBGL_draw_buffers, as shown [here](https://hacks.mozilla.org/2014/01/webgl-deferred-shading/).
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *       At the time of writing, that extension has only [57% support across all
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *       devices](//webglstats.com/).
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *       So, for now, have to consider other methods (multi-pass,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *       encoding/packing more info into each fragment).
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	/* global Float32Array */
	
	var _glGeometry = __webpack_require__(107);
	
	var _glGeometry2 = _interopRequireDefault(_glGeometry);
	
	var _glShader = __webpack_require__(56);
	
	var _glShader2 = _interopRequireDefault(_glShader);
	
	var _glFbo = __webpack_require__(89);
	
	var _glFbo2 = _interopRequireDefault(_glFbo);
	
	var _ndarray = __webpack_require__(91);
	
	var _ndarray2 = _interopRequireDefault(_ndarray);
	
	var _isFunction = __webpack_require__(120);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _utils = __webpack_require__(121);
	
	var _screen = __webpack_require__(122);
	
	var _screen2 = _interopRequireDefault(_screen);
	
	var _index = __webpack_require__(124);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var defaults = exports.defaults = function defaults() {
	    return {
	        shape: [64, 64],
	        geomShape: null,
	
	        logic: null,
	        logicVert: _index2.default,
	        logicFrag: null,
	
	        render: null,
	        renderVert: null,
	        renderFrag: null
	    };
	};
	
	var Particles = exports.Particles = function () {
	    function Particles(gl, options) {
	        _classCallCheck(this, Particles);
	
	        var params = _extends({}, defaults(), options);
	
	        this.gl = gl;
	
	        this.screen = new _screen2.default(this.gl);
	
	        // The dimensions of the state data FBOs. Can be 1:1 with the number of
	        // particle vertices, or
	        this.shape = params.shape;
	        this.geomShape = params.geomShape || [].concat(_toConsumableArray(this.shape));
	
	        var logic = params.logic || [params.logicVert, params.logicFrag];
	
	        this.logic = Array.isArray(logic) ? _glShader2.default.apply(undefined, [gl].concat(_toConsumableArray(logic))) : logic;
	
	        var render = params.render || [params.renderVert, params.renderFrag];
	
	        this.render = Array.isArray(render) ? _glShader2.default.apply(undefined, [gl].concat(_toConsumableArray(render))) : render;
	
	        this.geom = (0, _glGeometry2.default)(gl);
	        this.geom.attr('uv', Particles.generateLUT(this.geomShape), { size: 2 });
	
	        this.buffers = [];
	
	        this.pixels = (0, _ndarray2.default)(new Float32Array(this.shape[0] * this.shape[1] * 4), [this.shape[0], this.shape[1], 4]);
	    }
	
	    _createClass(Particles, [{
	        key: 'setup',
	        value: function setup() {
	            var numBuffers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	
	            // Add any needed new buffers
	            while (this.buffers.length < numBuffers) {
	                this.buffers.push((0, _glFbo2.default)(this.gl, [this.shape[0], this.shape[1]], { float: true }));
	            }
	
	            // Remove any unneeded old buffers
	            while (this.buffers.length > numBuffers) {
	                this.buffers.pop().dispose();
	            }
	        }
	    }, {
	        key: 'spawn',
	        value: function spawn(map) {
	            var pixels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.pixels;
	            var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
	
	            var data = new Float32Array(4);
	
	            var pixelsShape = pixels.shape;
	            var pixelsData = pixels.data;
	
	            var i = 0;
	
	            for (var x = 0; x < pixelsShape[0]; ++x) {
	                for (var y = 0; y < pixelsShape[1]; ++y) {
	                    data[0] = data[1] = data[2] = data[3] = 0;
	
	                    map(data, x, y);
	
	                    pixelsData[i++] = data[0];
	                    pixelsData[i++] = data[1];
	                    pixelsData[i++] = data[2];
	                    pixelsData[i++] = data[3];
	                }
	            }
	
	            this.buffers.forEach(function (buffer) {
	                return buffer.color[0].setPixels(pixels, offset);
	            });
	        }
	
	        /**
	         * @todo Find a way to use free texture bind units without having to
	         *       manually remember them
	         */
	
	    }, {
	        key: 'step',
	        value: function step(update) {
	            (0, _utils.step)(this.buffers);
	
	            this.buffers[0].bind();
	            this.gl.viewport(0, 0, this.shape[0], this.shape[1]);
	
	            this.logic.bind();
	
	            Particles.applyUpdate(Object.assign(this.logic.uniforms, {
	                dataRes: this.shape,
	                geomRes: this.geomShape,
	                particles: this.buffers[1].color[0].bind(0)
	            }), update);
	
	            this.screen.render();
	            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
	        }
	    }, {
	        key: 'draw',
	        value: function draw(update) {
	            var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.gl.POINTS;
	
	            this.geom.bind(this.render);
	
	            Particles.applyUpdate(Object.assign(this.render.uniforms, {
	                dataRes: this.shape,
	                geomRes: this.geomShape,
	                particles: this.buffers[0].color[0].bind(0)
	            }), update);
	
	            this.geom.draw(mode);
	        }
	    }, {
	        key: 'updateLogic',
	        value: function updateLogic(logicFrag) {
	            this.logic.update(_index2.default, logicFrag);
	        }
	    }, {
	        key: 'updateRender',
	        value: function updateRender(renderFrag, renderVert) {
	            this.render.update(renderVert, renderFrag);
	        }
	
	        // @todo
	
	    }, {
	        key: 'dispose',
	        value: function dispose() {}
	    }], [{
	        key: 'generateLUT',
	        value: function generateLUT(shape) {
	            var size = shape[0] * shape[1] * 2;
	            var data = new Float32Array(size);
	            var k = 0;
	
	            var w = Math.max(shape[0], 2);
	            var h = Math.max(shape[1], 2);
	
	            var invX = 1 / (w - 1);
	            var invY = 1 / (h - 1);
	
	            for (var i = 0; i < w; ++i) {
	                for (var j = 0; j < h; ++j) {
	                    data[k++] = i * invX;
	                    data[k++] = j * invY;
	                }
	            }
	
	            return data;
	        }
	    }, {
	        key: 'applyUpdate',
	        value: function applyUpdate(state, update) {
	            return (0, _isFunction2.default)(update) ? update(state) : Object.assign(state, update);
	        }
	    }]);
	
	    return Particles;
	}();
	
	exports.default = Particles;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var normalize = __webpack_require__(108)
	var glType = __webpack_require__(115)
	var createVAO = __webpack_require__(116)
	var dtype = __webpack_require__(114)
	
	module.exports = GLGeometry
	
	function GLGeometry (gl) {
	  if (!(this instanceof GLGeometry)) {
	    return new GLGeometry(gl)
	  }
	
	  this._elementsType = 5123
	  this._elementsBytes = 2
	  this._attributes = []
	  this._dirty = true
	  this._attrLength = 0
	  this._facesLength = 0
	  this._index = null
	  this._vao = null
	  this._keys = []
	  this.gl = gl
	}
	
	GLGeometry.prototype.dispose = function () {
	  for (var i = 0; i < this._attributes.length; i++) {
	    this._attributes[i].buffer.dispose()
	  }
	
	  this._attributes = []
	  this._keys = []
	  this._attrLength = 0 // Length of this attribute (the number of vertices it feeds)
	  this._facesLength = 0 // Number of vertices needed to draw all faces
	  this._dirty = true
	
	  if (this._index) {
	    this._index.dispose()
	    this._index = null
	  }
	
	  if (this._vao) {
	    this._vao.dispose()
	    this._vao = null
	  }
	}
	
	GLGeometry.prototype.faces = function faces (attr, opts) {
	  var size = opts && opts.size || 3
	  attr = attr.cells ? attr.cells : attr
	
	  this._dirty = true
	
	  if (this._index) {
	    this._index.dispose()
	  }
	
	  this._index = normalize.create(this.gl
	    , attr
	    , size
	    , this.gl.ELEMENT_ARRAY_BUFFER
	    , 'uint16'
	  )
	
	  this._facesLength = this._index.length * size
	  this._index = this._index.buffer
	
	  return this
	}
	
	GLGeometry.prototype.attr = function (name, attr, opts) {
	  // If we get a simplicial complex
	  if (attr.cells && attr.positions) {
	    return this.attr(name, attr.positions).faces(attr.cells, opts)
	  }
	
	  opts = opts || {}
	  var size = opts.size || 3
	
	  // Is this a known attribute (ie, an update)?
	  var keyIndex = this._keys.indexOf(name)
	  if (keyIndex > -1) {
	    var toUpdate = this._attributes[keyIndex].buffer
	    var offset = opts.offset || undefined
	    normalize.update(toUpdate, attr, size, 'float32', offset)
	    this._attrLength = toUpdate.length / size / 4
	    return this
	  }
	
	  this._dirty = true
	
	  var gl = this.gl
	  var first = !this._attributes.length
	
	  var attribute = normalize.create(gl, attr, size, gl.ARRAY_BUFFER, 'float32')
	  if (!attribute) {
	    throw new Error(
	      'Unexpected attribute format: needs an ndarray, array, typed array, ' +
	      'gl-buffer or simplicial complex'
	    )
	  }
	
	  var buffer = attribute.buffer
	  var length = attribute.length
	
	  this._keys.push(name)
	  this._attributes.push({
	    size: size,
	    buffer: buffer
	  })
	
	  if (first) {
	    this._attrLength = length
	  }
	
	  return this
	}
	
	GLGeometry.prototype.bind = function bind (shader) {
	  this.update()
	  this._vao.bind()
	
	  if (!this._keys) return
	  if (!shader) return
	
	  for (var i = 0; i < this._keys.length; i++) {
	    var attr = shader.attributes[this._keys[i]]
	    if (attr) attr.location = i
	  }
	
	  shader.bind()
	}
	
	GLGeometry.prototype.draw = function draw (mode, start, stop) {
	  start = typeof start === 'undefined' ? 0 : start
	  mode = typeof mode === 'undefined' ? this.gl.TRIANGLES : mode
	
	  this.update()
	
	  if (this._vao._useElements) {
	    stop = typeof stop === 'undefined' ? this._facesLength : stop
	    this.gl.drawElements(mode, stop - start, this._elementsType, start * this._elementsBytes)
	  } else {
	    stop = typeof stop === 'undefined' ? this._attrLength : stop
	    this.gl.drawArrays(mode, start, stop - start)
	  }
	}
	
	GLGeometry.prototype.unbind = function unbind () {
	  this.update()
	  this._vao.unbind()
	}
	
	GLGeometry.prototype.update = function update () {
	  if (!this._dirty) return
	  this._dirty = false
	  if (this._vao) this._vao.dispose()
	
	  this._vao = createVAO(this.gl, this._attributes, this._index)
	  this._elementsType = this._vao._elementsType
	  this._elementsBytes = dtype(
	    glType(this._elementsType) || 'array'
	  ).BYTES_PER_ELEMENT || 2
	}


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var pack = __webpack_require__(109)
	var ista = __webpack_require__(111)
	var createBuffer = __webpack_require__(112)
	var isnd = __webpack_require__(113)
	var dtype = __webpack_require__(114)
	
	module.exports.create = create
	module.exports.update = update
	
	function create (gl, attr, size, mode, type) {
	  // if we get a gl-buffer
	  if (attr.handle instanceof WebGLBuffer) {
	    return {
	      buffer: attr,
	      length: attr.length / size / 4
	    }
	  }
	
	  var arr = normalize(attr, size, type)
	  return {
	    buffer: createBuffer(gl, arr.data, mode),
	    length: arr.length
	  }
	}
	
	function update (buffer, attr, size, type, offset) {
	  // if we get a gl-buffer
	  if (attr.handle instanceof WebGLBuffer) {
	    throw new Error('Unhandled update case: WebGLBuffer')
	  }
	
	  var arr = normalize(attr, size, type)
	  buffer.update(arr.data, offset)
	}
	
	function normalize (attr, size, type) {
	  // if we get a nested 2D array
	  if (Array.isArray(attr) && Array.isArray(attr[0])) {
	    return {
	      data: pack(attr, type),
	      length: attr.length
	    }
	  }
	
	  // if we get a nested 2D array (with the second array being typed)
	  if (Array.isArray(attr) && ista(attr[0])) {
	    return {
	      data: pack(attr, type),
	      length: (attr.length * attr[0].length) / size
	    }
	  }
	
	  // if we get a 1D array
	  if (Array.isArray(attr)) {
	    return {
	      data: new (dtype(type))(attr),
	      length: attr.length / size
	    }
	  }
	
	  // if we get an ndarray
	  if (isnd(attr)) {
	    return {
	      data: attr,
	      length: ndlength(attr.shape) / size
	    }
	  }
	
	  // if we get a typed array
	  if (ista(attr)) {
	    if (type && !(attr instanceof dtype(type))) {
	      attr = convert(attr, dtype(type))
	    }
	
	    return {
	      data: attr,
	      length: attr.length / size
	    }
	  }
	}
	
	function ndlength (shape) {
	  var length = 1
	  for (var i = 0; i < shape.length; i++) length *= shape[i]
	  return length
	}
	
	function convert (a, B) {
	  var b = new B(a.length)
	  for (var i = 0; i < a.length; i++) b[i] = a[i]
	  return b
	}


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var dtype = __webpack_require__(110)
	
	module.exports = pack
	
	function pack(arr, type) {
	  type = type || 'float32'
	
	  if (!arr[0] || !arr[0].length) {
	    return arr
	  }
	
	  var Arr = typeof type === 'string'
	    ? dtype(type)
	    : type
	
	  var dim = arr[0].length
	  var out = new Arr(arr.length * dim)
	  var k = 0
	
	  for (var i = 0; i < arr.length; i++)
	  for (var j = 0; j < dim; j++) {
	    out[k++] = arr[i][j]
	  }
	
	  return out
	}


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = function(dtype) {
	  switch (dtype) {
	    case 'int8':
	      return Int8Array
	    case 'int16':
	      return Int16Array
	    case 'int32':
	      return Int32Array
	    case 'uint8':
	      return Uint8Array
	    case 'uint16':
	      return Uint16Array
	    case 'uint32':
	      return Uint32Array
	    case 'float32':
	      return Float32Array
	    case 'float64':
	      return Float64Array
	    case 'array':
	      return Array
	    case 'uint8_clamped':
	      return Uint8ClampedArray
	    case 'generic':
	    case 'data':
	    case 'dataview':
	      return ArrayBuffer
	    case 'buffer':
	      if (typeof Buffer === "undefined") return ArrayBuffer
	      return Buffer
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(100).Buffer))

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports      = isTypedArray
	isTypedArray.strict = isStrictTypedArray
	isTypedArray.loose  = isLooseTypedArray
	
	var toString = Object.prototype.toString
	var names = {
	    '[object Int8Array]': true
	  , '[object Int16Array]': true
	  , '[object Int32Array]': true
	  , '[object Uint8Array]': true
	  , '[object Uint16Array]': true
	  , '[object Uint32Array]': true
	  , '[object Float32Array]': true
	  , '[object Float64Array]': true
	}
	
	function isTypedArray(arr) {
	  return (
	       isStrictTypedArray(arr)
	    || isLooseTypedArray(arr)
	  )
	}
	
	function isStrictTypedArray(arr) {
	  return (
	       arr instanceof Int8Array
	    || arr instanceof Int16Array
	    || arr instanceof Int32Array
	    || arr instanceof Uint8Array
	    || arr instanceof Uint16Array
	    || arr instanceof Uint32Array
	    || arr instanceof Float32Array
	    || arr instanceof Float64Array
	  )
	}
	
	function isLooseTypedArray(arr) {
	  return names[toString.call(arr)]
	}


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict"
	
	var pool = __webpack_require__(99)
	var ops = __webpack_require__(94)
	var ndarray = __webpack_require__(91)
	
	var SUPPORTED_TYPES = [
	  "uint8",
	  "uint8_clamped",
	  "uint16",
	  "uint32",
	  "int8",
	  "int16",
	  "int32",
	  "float32" ]
	
	function GLBuffer(gl, type, handle, length, usage) {
	  this.gl = gl
	  this.type = type
	  this.handle = handle
	  this.length = length
	  this.usage = usage
	}
	
	var proto = GLBuffer.prototype
	
	proto.bind = function() {
	  this.gl.bindBuffer(this.type, this.handle)
	}
	
	proto.unbind = function() {
	  this.gl.bindBuffer(this.type, null)
	}
	
	proto.dispose = function() {
	  this.gl.deleteBuffer(this.handle)
	}
	
	function updateTypeArray(gl, type, len, usage, data, offset) {
	  var dataLen = data.length * data.BYTES_PER_ELEMENT
	  if(offset < 0) {
	    gl.bufferData(type, data, usage)
	    return dataLen
	  }
	  if(dataLen + offset > len) {
	    throw new Error("gl-buffer: If resizing buffer, must not specify offset")
	  }
	  gl.bufferSubData(type, offset, data)
	  return len
	}
	
	function makeScratchTypeArray(array, dtype) {
	  var res = pool.malloc(array.length, dtype)
	  var n = array.length
	  for(var i=0; i<n; ++i) {
	    res[i] = array[i]
	  }
	  return res
	}
	
	function isPacked(shape, stride) {
	  var n = 1
	  for(var i=stride.length-1; i>=0; --i) {
	    if(stride[i] !== n) {
	      return false
	    }
	    n *= shape[i]
	  }
	  return true
	}
	
	proto.update = function(array, offset) {
	  if(typeof offset !== "number") {
	    offset = -1
	  }
	  this.bind()
	  if(typeof array === "object" && typeof array.shape !== "undefined") { //ndarray
	    var dtype = array.dtype
	    if(SUPPORTED_TYPES.indexOf(dtype) < 0) {
	      dtype = "float32"
	    }
	    if(this.type === this.gl.ELEMENT_ARRAY_BUFFER) {
	      var ext = gl.getExtension('OES_element_index_uint')
	      if(ext && dtype !== "uint16") {
	        dtype = "uint32"
	      } else {
	        dtype = "uint16"
	      }
	    }
	    if(dtype === array.dtype && isPacked(array.shape, array.stride)) {
	      if(array.offset === 0 && array.data.length === array.shape[0]) {
	        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, array.data, offset)
	      } else {
	        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, array.data.subarray(array.offset, array.shape[0]), offset)
	      }
	    } else {
	      var tmp = pool.malloc(array.size, dtype)
	      var ndt = ndarray(tmp, array.shape)
	      ops.assign(ndt, array)
	      if(offset < 0) {
	        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, tmp, offset)
	      } else {
	        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, tmp.subarray(0, array.size), offset)
	      }
	      pool.free(tmp)
	    }
	  } else if(Array.isArray(array)) { //Vanilla array
	    var t
	    if(this.type === this.gl.ELEMENT_ARRAY_BUFFER) {
	      t = makeScratchTypeArray(array, "uint16")
	    } else {
	      t = makeScratchTypeArray(array, "float32")
	    }
	    if(offset < 0) {
	      this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, t, offset)
	    } else {
	      this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, t.subarray(0, array.length), offset)
	    }
	    pool.free(t)
	  } else if(typeof array === "object" && typeof array.length === "number") { //Typed array
	    this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, array, offset)
	  } else if(typeof array === "number" || array === undefined) { //Number/default
	    if(offset >= 0) {
	      throw new Error("gl-buffer: Cannot specify offset when resizing buffer")
	    }
	    array = array | 0
	    if(array <= 0) {
	      array = 1
	    }
	    this.gl.bufferData(this.type, array|0, this.usage)
	    this.length = array
	  } else { //Error, case should not happen
	    throw new Error("gl-buffer: Invalid data type")
	  }
	}
	
	function createBuffer(gl, data, type, usage) {
	  type = type || gl.ARRAY_BUFFER
	  usage = usage || gl.DYNAMIC_DRAW
	  if(type !== gl.ARRAY_BUFFER && type !== gl.ELEMENT_ARRAY_BUFFER) {
	    throw new Error("gl-buffer: Invalid type for webgl buffer, must be either gl.ARRAY_BUFFER or gl.ELEMENT_ARRAY_BUFFER")
	  }
	  if(usage !== gl.DYNAMIC_DRAW && usage !== gl.STATIC_DRAW && usage !== gl.STREAM_DRAW) {
	    throw new Error("gl-buffer: Invalid usage for buffer, must be either gl.DYNAMIC_DRAW, gl.STATIC_DRAW or gl.STREAM_DRAW")
	  }
	  var handle = gl.createBuffer()
	  var result = new GLBuffer(gl, type, handle, 0, usage)
	  result.update(data)
	  return result
	}
	
	module.exports = createBuffer


/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = function(arr) {
	  if (!arr) return false
	  if (!arr.dtype) return false
	  var re = new RegExp('function View[0-9]+d(:?' + arr.dtype + ')+')
	  return re.test(String(arr.constructor))
	}


/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = function(dtype) {
	  switch (dtype) {
	    case 'int8':
	      return Int8Array
	    case 'int16':
	      return Int16Array
	    case 'int32':
	      return Int32Array
	    case 'uint8':
	      return Uint8Array
	    case 'uint16':
	      return Uint16Array
	    case 'uint32':
	      return Uint32Array
	    case 'float32':
	      return Float32Array
	    case 'float64':
	      return Float64Array
	    case 'array':
	      return Array
	  }
	}

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = glToType
	function glToType (flag) {
	  switch (flag) {
	    case 5126: return 'float32'   // gl.FLOAT
	    case 5125: return 'uint32'    // gl.UNSIGNED_INT
	    case 5124: return 'int32'     // gl.INT
	    case 5123: return 'uint16'    // gl.UNSIGNED_SHORT
	    case 32819: return 'uint16'   // gl.UNSIGNED_SHORT_4_4_4_4
	    case 32820: return 'uint16'   // gl.UNSIGNED_SHORT_5_5_5_1
	    case 33635: return 'uint16'   // gl.UNSIGNED_SHORT_5_6_5
	    case 5122: return 'int16'     // gl.SHORT
	    case 5121: return 'uint8'     // gl.UNSIGNED_BYTE
	    case 5120: return 'int8'      // gl.BYTE
	    default: return null
	  }
	}


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict"
	
	var createVAONative = __webpack_require__(117)
	var createVAOEmulated = __webpack_require__(119)
	
	function ExtensionShim (gl) {
	  this.bindVertexArrayOES = gl.bindVertexArray.bind(gl)
	  this.createVertexArrayOES = gl.createVertexArray.bind(gl)
	  this.deleteVertexArrayOES = gl.deleteVertexArray.bind(gl)
	}
	
	function createVAO(gl, attributes, elements, elementsType) {
	  var ext = gl.createVertexArray
	    ? new ExtensionShim(gl)
	    : gl.getExtension('OES_vertex_array_object')
	  var vao
	
	  if(ext) {
	    vao = createVAONative(gl, ext)
	  } else {
	    vao = createVAOEmulated(gl)
	  }
	  vao.update(attributes, elements, elementsType)
	  return vao
	}
	
	module.exports = createVAO


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict"
	
	var bindAttribs = __webpack_require__(118)
	
	function VertexAttribute(location, dimension, a, b, c, d) {
	  this.location = location
	  this.dimension = dimension
	  this.a = a
	  this.b = b
	  this.c = c
	  this.d = d
	}
	
	VertexAttribute.prototype.bind = function(gl) {
	  switch(this.dimension) {
	    case 1:
	      gl.vertexAttrib1f(this.location, this.a)
	    break
	    case 2:
	      gl.vertexAttrib2f(this.location, this.a, this.b)
	    break
	    case 3:
	      gl.vertexAttrib3f(this.location, this.a, this.b, this.c)
	    break
	    case 4:
	      gl.vertexAttrib4f(this.location, this.a, this.b, this.c, this.d)
	    break
	  }
	}
	
	function VAONative(gl, ext, handle) {
	  this.gl = gl
	  this._ext = ext
	  this.handle = handle
	  this._attribs = []
	  this._useElements = false
	  this._elementsType = gl.UNSIGNED_SHORT
	}
	
	VAONative.prototype.bind = function() {
	  this._ext.bindVertexArrayOES(this.handle)
	  for(var i=0; i<this._attribs.length; ++i) {
	    this._attribs[i].bind(this.gl)
	  }
	}
	
	VAONative.prototype.unbind = function() {
	  this._ext.bindVertexArrayOES(null)
	}
	
	VAONative.prototype.dispose = function() {
	  this._ext.deleteVertexArrayOES(this.handle)
	}
	
	VAONative.prototype.update = function(attributes, elements, elementsType) {
	  this.bind()
	  bindAttribs(this.gl, elements, attributes)
	  this.unbind()
	  this._attribs.length = 0
	  if(attributes)
	  for(var i=0; i<attributes.length; ++i) {
	    var a = attributes[i]
	    if(typeof a === "number") {
	      this._attribs.push(new VertexAttribute(i, 1, a))
	    } else if(Array.isArray(a)) {
	      this._attribs.push(new VertexAttribute(i, a.length, a[0], a[1], a[2], a[3]))
	    }
	  }
	  this._useElements = !!elements
	  this._elementsType = elementsType || this.gl.UNSIGNED_SHORT
	}
	
	VAONative.prototype.draw = function(mode, count, offset) {
	  offset = offset || 0
	  var gl = this.gl
	  if(this._useElements) {
	    gl.drawElements(mode, count, this._elementsType, offset)
	  } else {
	    gl.drawArrays(mode, offset, count)
	  }
	}
	
	function createVAONative(gl, ext) {
	  return new VAONative(gl, ext, ext.createVertexArrayOES())
	}
	
	module.exports = createVAONative

/***/ },
/* 118 */
/***/ function(module, exports) {

	"use strict"
	
	function doBind(gl, elements, attributes) {
	  if(elements) {
	    elements.bind()
	  } else {
	    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null)
	  }
	  var nattribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS)|0
	  if(attributes) {
	    if(attributes.length > nattribs) {
	      throw new Error("gl-vao: Too many vertex attributes")
	    }
	    for(var i=0; i<attributes.length; ++i) {
	      var attrib = attributes[i]
	      if(attrib.buffer) {
	        var buffer = attrib.buffer
	        var size = attrib.size || 4
	        var type = attrib.type || gl.FLOAT
	        var normalized = !!attrib.normalized
	        var stride = attrib.stride || 0
	        var offset = attrib.offset || 0
	        buffer.bind()
	        gl.enableVertexAttribArray(i)
	        gl.vertexAttribPointer(i, size, type, normalized, stride, offset)
	      } else {
	        if(typeof attrib === "number") {
	          gl.vertexAttrib1f(i, attrib)
	        } else if(attrib.length === 1) {
	          gl.vertexAttrib1f(i, attrib[0])
	        } else if(attrib.length === 2) {
	          gl.vertexAttrib2f(i, attrib[0], attrib[1])
	        } else if(attrib.length === 3) {
	          gl.vertexAttrib3f(i, attrib[0], attrib[1], attrib[2])
	        } else if(attrib.length === 4) {
	          gl.vertexAttrib4f(i, attrib[0], attrib[1], attrib[2], attrib[3])
	        } else {
	          throw new Error("gl-vao: Invalid vertex attribute")
	        }
	        gl.disableVertexAttribArray(i)
	      }
	    }
	    for(; i<nattribs; ++i) {
	      gl.disableVertexAttribArray(i)
	    }
	  } else {
	    gl.bindBuffer(gl.ARRAY_BUFFER, null)
	    for(var i=0; i<nattribs; ++i) {
	      gl.disableVertexAttribArray(i)
	    }
	  }
	}
	
	module.exports = doBind

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict"
	
	var bindAttribs = __webpack_require__(118)
	
	function VAOEmulated(gl) {
	  this.gl = gl
	  this._elements = null
	  this._attributes = null
	  this._elementsType = gl.UNSIGNED_SHORT
	}
	
	VAOEmulated.prototype.bind = function() {
	  bindAttribs(this.gl, this._elements, this._attributes)
	}
	
	VAOEmulated.prototype.update = function(attributes, elements, elementsType) {
	  this._elements = elements
	  this._attributes = attributes
	  this._elementsType = elementsType || this.gl.UNSIGNED_SHORT
	}
	
	VAOEmulated.prototype.dispose = function() { }
	VAOEmulated.prototype.unbind = function() { }
	
	VAOEmulated.prototype.draw = function(mode, count, offset) {
	  offset = offset || 0
	  var gl = this.gl
	  if(this._elements) {
	    gl.drawElements(mode, count, this._elementsType, offset)
	  } else {
	    gl.drawArrays(mode, offset, count)
	  }
	}
	
	function createVAOEmulated(gl) {
	  return new VAOEmulated(gl)
	}
	
	module.exports = createVAOEmulated

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(40),
	    isObject = __webpack_require__(34);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 121 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.step = step;
	function step(array) {
	    var next = Array.prototype.pop.call(array);
	
	    Array.prototype.unshift.call(array, next);
	
	    return next;
	}
	
	var wrapIndex = exports.wrapIndex = function wrapIndex(index, array) {
	    return array[(array.length + index) % array.length];
	};
	
	var invLog2 = 1 / Math.log(2);
	
	var nextPow2 = exports.nextPow2 = function nextPow2(x) {
	    return Math.pow(2, Math.ceil(Math.log(x) * invLog2));
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Screen = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _glBigTriangle = __webpack_require__(123);
	
	var _glBigTriangle2 = _interopRequireDefault(_glBigTriangle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Extending `gl-big-triangle` to offer a shorthand for `bind`, `draw`, `unbind`
	// (yes, that's what `a-big-triangle` does, but this offers both convenience and
	// optimisation options).
	
	var Screen = exports.Screen = function (_Triangle) {
	    _inherits(Screen, _Triangle);
	
	    function Screen() {
	        _classCallCheck(this, Screen);
	
	        return _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).apply(this, arguments));
	    }
	
	    _createClass(Screen, [{
	        key: 'render',
	        value: function render() {
	            _get(Screen.prototype.__proto__ || Object.getPrototypeOf(Screen.prototype), 'bind', this).call(this);
	            _get(Screen.prototype.__proto__ || Object.getPrototypeOf(Screen.prototype), 'draw', this).call(this);
	            _get(Screen.prototype.__proto__ || Object.getPrototypeOf(Screen.prototype), 'unbind', this).call(this);
	        }
	    }]);
	
	    return Screen;
	}(_glBigTriangle2.default);
	
	exports.default = Screen;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var createBuffer = __webpack_require__(112)
	var createVAO = __webpack_require__(116)
	
	module.exports = GLBigTriangle
	
	function GLBigTriangle (gl) {
	  if (!(this instanceof GLBigTriangle)) {
	    return new GLBigTriangle(gl)
	  }
	
	  this.gl = gl
	  this.vao = createVAO(gl, [{
	    size: 2,
	    type: gl.FLOAT,
	    buffer: createBuffer(gl, new Float32Array([
	      -1, -1, -1,
	      +4, +4, -1
	    ]))
	  }])
	}
	
	GLBigTriangle.prototype.bind = function () {
	  this.vao.bind()
	}
	
	GLBigTriangle.prototype.draw = function () {
	  this.gl.drawArrays(this.gl.TRIANGLES, 0, 3)
	}
	
	GLBigTriangle.prototype.unbind = function () {
	  this.vao.unbind()
	}


/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nattribute vec2 position;\n\nvoid main() {\n    gl_Position = vec4(position, 1.0, 1.0);\n}\n"

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _inert = __webpack_require__(126);
	
	var _inert2 = _interopRequireDefault(_inert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (data) {
	    data[0] = data[1] = _inert2.default;
	    data[2] = data[3] = 0;
	
	    return data;
	};

/***/ },
/* 126 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// @see `./inert.glsl`
	exports.default = -1000000;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.coverAspect = exports.containAspect = exports.aspect = undefined;
	
	var _vec = __webpack_require__(53);
	
	var _vec2 = _interopRequireDefault(_vec);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var aspect = exports.aspect = function aspect(out, size, scale) {
	    return _vec2.default.scale(out, _vec2.default.inverse(out, size), scale);
	};
	
	var containAspect = exports.containAspect = function containAspect(out, size) {
	    return aspect(out, size, Math.min(size[0], size[1]));
	};
	
	var coverAspect = exports.coverAspect = function coverAspect(out, size) {
	    return aspect(out, size, Math.max(size[0], size[1]));
	};
	
	exports.default = aspect;

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D particles;\nuniform sampler2D flow;\n\nuniform vec2 dataRes;\n\nuniform vec2 viewSize;\n\nuniform float time;\nuniform float dt;\n\nuniform float speedLimit;\nuniform float damping;\n\nuniform float forceWeight;\nuniform float flowWeight;\nuniform float noiseWeight;\n\nuniform float flowDecay;\n\nuniform float noiseSpeed;\nuniform float noiseScale;\n\n// These are scaled by the values they correspond to\nuniform float varyForce;\nuniform float varyFlow;\nuniform float varyNoise;\nuniform float varyNoiseScale;\nuniform float varyNoiseSpeed;\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nconst vec2 inert = vec2(-1000000.0);\n\n/**\n * @requires {float} levels The number of samples to take at different LODs\n * @requires {float} stride The step up to take between each LOD\n */\n\nfloat map(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec4 posRange = vec4(-1.0, -1.0, 1.0, 1.0);\n\nconst vec4 uvRange = vec4(0.0, 0.0, 1.0, 1.0);\n\nvec2 posToUV(vec2 pos) {\n    return map(pos, posRange.xy, posRange.zw, uvRange.xy, uvRange.zw);\n}\n\n// Time/decay\n\nvec2 get(vec3 data, float time, float decay) {\n    return data.xy*max(0.0, 1.0-((time-data.z)*decay));\n}\n\nvec2 get(vec4 data, float time, float decay) {\n    return get(data.xyz, time, decay);\n}\n\n// No time/decay\n\nvec2 get(vec2 data) {\n    return data.xy;\n}\n\nvec2 get(vec3 data) {\n    return get(data.xy);\n}\n\nvec2 get(vec4 data) {\n    return get(data.xy);\n}\n\n/**\n * @return The flow velocity and age for a given screen position, sampling\n *         several scales.\n */\nvec2 flowAtScreenPos(vec2 pos, sampler2D flow, float time, float flowDecay) {\n    vec2 uv = posToUV(pos);\n    vec2 flowForce = vec2(0.0);\n    float flowMax = 0.0;\n\n    for(float level = 0.0; level < 1.0*1.0; level += 1.0) {\n        vec4 flowData = texture2D(flow, uv, level);\n        float factor = 1.0/(level+1.0);\n\n        flowForce += get(flowData, time, flowDecay)*factor;\n        flowMax += factor;\n    }\n\n    return flowForce/flowMax;\n}\n\nfloat vary(float base, float offset, float variance) {\n    return base+(offset*variance*base);\n}\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy/dataRes;\n\n    vec4 state = texture2D(particles, uv);\n    vec2 pos = state.xy;\n    vec2 vel = state.zw;\n\n    vec2 newPos = pos;\n    vec2 newVel = vel;\n\n    if(pos != inert) {\n        // The 1D index offset of this pixel\n        float i = (gl_FragCoord.x+(gl_FragCoord.y*dataRes.x))/\n                (dataRes.x*dataRes.y);\n\n        // Wander force\n\n        vec2 noisePos = pos*vary(noiseScale, i, varyNoiseScale);\n        float noiseTime = time*vary(noiseSpeed, i, varyNoiseSpeed);\n\n        vec2 wanderForce = vec2(snoise(vec3(noisePos, uv.x+noiseTime)),\n                snoise(vec3(noisePos, uv.y+noiseTime+1234.5678)));\n\n        // Flow force - left by preceeding particles\n        // (Ensure this is checked before the next flow step is rendered, to avoid\n        // self-influence.)\n\n        vec2 flowForce = flowAtScreenPos(pos*viewSize, flow, time, flowDecay);\n\n        // Accumulate weighted forces and damping\n        newVel = (vel*damping*dt)+\n            (vary(forceWeight, i, varyForce)*\n                ((flowForce*dt*vary(flowWeight, i, varyFlow))+\n                (wanderForce*dt*vary(noiseWeight, i, varyNoise))));\n        \n        // Normalize and clamp the velocity\n        /**\n         * @todo This seems to cause some problems when dealing with larger max\n         *       speeds - the particles no longer follow flow forces somehow...\n         */\n        float speed = length(newVel);\n\n        newVel *= min(speed, speedLimit)/speed;\n\n        // Integrate motion\n        newPos = pos+newVel;\n    }\n\n    gl_FragColor = vec4(newPos, newVel);\n}\n"

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D previous;\nuniform sampler2D particles;\n\nuniform vec2 dataRes;\nuniform vec2 geomRes;\n\nuniform vec2 viewSize;\n\nuniform sampler2D colorMap;\nuniform float colorMapAlpha;\n\nuniform vec4 flowColor;\nuniform vec4 baseColor;\n\nuniform float time;\nuniform float speedLimit;\nuniform float flowDecay;\n\nuniform float speedAlpha;\n\nattribute vec2 uv;\n\nvarying vec4 color;\n\n/**\n * Pre-generated constants, equivalent to:\n *     flowAxisR: `angleToVec(0)`\n *     flowAxisG: `angleToVec(tau/3.0)`\n *     flowAxisB: `angleToVec(tau*2.0/3.0)`\n */\nconst vec2 flowAxisR = vec2(1.0, 0.0);\nconst vec2 flowAxisG = vec2(-0.5000000000000004, -0.8660254037844385);\nconst vec2 flowAxisB = vec2(-0.4999999999999998, 0.8660254037844387);\n\nconst vec4 minColor = vec4(0.0);\nconst vec4 maxColor = vec4(1.0);\n\nconst vec4 minAlign = vec4(-1.0);\nconst vec4 maxAlign = vec4(1.0);\n\n// @todo Turn some of these `const`s into `uniform`s\nconst vec2 center = vec2(0.0);\nconst vec2 fadeRange = vec2(0.2, 1.0);\nconst vec3 falloff = vec3(fadeRange.x, fadeRange.y, fadeRange.y);\n\nfloat map(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec2 inert = vec2(-1000000.0);\n\nfloat length2(vec2 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec3 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec4 vec) {\n    return dot(vec, vec);\n}\n\n/**\n * Adapted from `bezier`.\n */\n\nfloat bezier(vec2 cp, float t) {\n    return cp.x+(cp.y-cp.x)*t;\n}\n\nfloat bezier(vec3 cp, float t) {\n    float ut = 1.0-t;\n\n    return (cp.x*ut+cp.y*t)*ut+(cp.y*ut+cp.z*t)*t;\n}\n\nfloat bezier(vec4 cp, float t) {\n    float ut = 1.0-t;\n    float a1 = cp.y*ut+cp.z*t;\n\n    return ((cp.x*ut+cp.y*t)*ut+a1*t)*ut+(a1*ut+(cp.z*ut+cp.w*t)*t)*t;\n}\n\n// @todo Remove the `1.0-` here?\nfloat amount(vec2 point, vec2 mid, float limit) {\n    return min(1.0-(length(point-mid)/limit), 1.0);\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit) {\n    return max(0.0, amount(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, float curve) {\n    return max(0.0, curve*amount(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec2 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec3 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec4 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nvec4 preAlpha(vec3 color, float alpha) {\n    return vec4(color.rgb*alpha, alpha);\n}\n\nvec4 preAlpha(vec4 color) {\n    return preAlpha(color.rgb, color.a);\n}\n\nconst float frameOffset = 0.25;\n\n/**\n * For every data point, we have two vertices - current and previous state.\n * Every other vertex looks up previous data. In this way, (vertical)\n * neighbours alternate from previous to current state.\n * (Vertical neighbours, because WebGL iterates column-major.)\n *\n * @return State data for the vertex, either current or previous.\n */\n\nvec4 stateAtFrame(vec2 uv, vec2 shape, sampler2D previous, sampler2D current) {\n    float nearIndex = uv.y*shape.y;\n    float offset = fract(nearIndex);\n    vec2 lookup = vec2(uv.x, floor(nearIndex)/shape.y);\n\n    return texture2D(((offset > frameOffset)? current : previous), lookup);\n}\n\nvoid main() {\n    vec4 state = stateAtFrame(uv, dataRes, previous, particles);\n\n    if(state.xy != inert) {\n        vec2 pos = state.xy;\n        vec2 vel = state.zw/speedLimit;\n        float speedRate = min(length2(vel)/speedAlpha, 1.0);\n\n        // Color map\n\n        vec4 mappedColor = texture2D(colorMap, uv*geomRes/dataRes);\n\n        mappedColor *= colorMapAlpha;\n\n        // Flow color\n        \n        vec3 alignRGB = vec3(dot(vel, flowAxisR),\n                dot(vel, flowAxisG), dot(vel, flowAxisB));\n\n        vec3 flowAlign = map(mix(alignRGB, alignRGB.gbr*(1.0-flowDecay),\n                    sin(time*flowDecay)),\n                minAlign.rgb, maxAlign.rgb, minColor.rgb, maxColor.rgb);\n\n        vec4 flowAlignedColor = vec4(flowColor.rgb*flowAlign, flowColor.a);\n\n        // Color summation, clamping and pre-multiplying alpha so they don't\n        // cross over\n\n        color = clamp(preAlpha(baseColor), minColor, maxColor)+\n            clamp(preAlpha(mappedColor), minColor, maxColor)+\n            clamp(preAlpha(flowAlignedColor), minColor, maxColor);\n\n        color.a *= speedRate*clamp(vignette(pos, center, 1.0, falloff),\n                        fadeRange.x, fadeRange.y);\n\n        // Position\n        gl_Position = vec4(pos*viewSize, 0.0, 1.0);\n    }\n}\n"

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nvarying vec4 color;\n\nvoid main() {\n    gl_FragColor = color;\n}\n"

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D previous;\nuniform sampler2D data;\n\nuniform vec2 dataRes;\n\nuniform vec2 viewSize;\n\nuniform float time;\nuniform float speedLimit;\nuniform float flowDecay;\n\nattribute vec2 uv;\n\nvarying vec4 color;\n\n/**\n * @requires {float} time The current time in ms\n */\n\nvec4 flow(vec2 vel) {\n    // Faster particles leave a greater influence (opacity).\n    // Linear interpolation - inaccurate for vectors, will it be OK without\n    // sudden turns, or do we need a per-fragment lookup?\n    return vec4(vel, time, length(vel));\n}\n\nvec4 flow(vec2 vel, float speedLimit) {\n    vec4 values = flow(vel);\n\n    return vec4(values.xyz, min(values.a/speedLimit, 1.0));\n}\n\n/**\n * @requires `./head.vert`\n * @requires {function} apply A function applying a `vec4` state into a `vec3`\n *                            color to be drawn.\n */\n\nconst vec2 inert = vec2(-1000000.0);\n\nconst float frameOffset = 0.25;\n\n/**\n * For every data point, we have two vertices - current and previous state.\n * Every other vertex looks up previous data. In this way, (vertical)\n * neighbours alternate from previous to current state.\n * (Vertical neighbours, because WebGL iterates column-major.)\n *\n * @return State data for the vertex, either current or previous.\n */\n\nvec4 stateAtFrame(vec2 uv, vec2 shape, sampler2D previous, sampler2D current) {\n    float nearIndex = uv.y*shape.y;\n    float offset = fract(nearIndex);\n    vec2 lookup = vec2(uv.x, floor(nearIndex)/shape.y);\n\n    return texture2D(((offset > frameOffset)? current : previous), lookup);\n}\n\nvoid main() {\n    vec4 state = stateAtFrame(uv, dataRes, previous, data);\n\n    if(state.xy != inert) {\n        gl_Position = vec4(state.xy*viewSize, 1.0, 1.0);\n        color = flow(state.zw, speedLimit);\n    }\n}\n\n"

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nvarying vec4 color;\n\nvoid main() {\n    // @todo SDF from line, to weaken force further away\n    gl_FragColor = color.rgba;\n}\n"

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform vec4 color;\n\nvoid main() {\n    gl_FragColor = color.rgba;\n}\n"

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D view;\nuniform vec2 viewRes;\n\n// #pragma glslify: fxaa = require(glsl-fxaa)\n\nvoid main() {\n    gl_FragColor = texture2D(view, gl_FragCoord.xy/viewRes);\n    // gl_FragColor = fxaa(view, gl_FragCoord.xy, viewRes);\n}\n"

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PixelSpawner = exports.defaults = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Stupid little class for conveniently wrapping up things to be passed to the
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Tendrils `spawnShader` function.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _glFbo = __webpack_require__(89);
	
	var _glFbo2 = _interopRequireDefault(_glFbo);
	
	var _glShader = __webpack_require__(56);
	
	var _glShader2 = _interopRequireDefault(_glShader);
	
	var _mat = __webpack_require__(51);
	
	var _mat2 = _interopRequireDefault(_mat);
	
	var _vec = __webpack_require__(53);
	
	var _vec2 = _interopRequireDefault(_vec);
	
	var _aspect = __webpack_require__(127);
	
	var _aspect2 = _interopRequireDefault(_aspect);
	
	var _index = __webpack_require__(124);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(136);
	
	var _index4 = _interopRequireDefault(_index3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var defaults = exports.defaults = function defaults() {
	    return {
	        shader: [_index2.default, _index4.default],
	        // buffer: [[1, 1]]
	        buffer: [[1, 1], { float: true }],
	        spawnSize: [1, 1],
	        jitterRad: 2,
	        speed: 1,
	        bias: 1
	    };
	};
	
	var PixelSpawner = exports.PixelSpawner = function () {
	    function PixelSpawner(gl, options) {
	        _classCallCheck(this, PixelSpawner);
	
	        this.gl = gl;
	
	        var params = Object.assign(defaults(), options);
	
	        this.shader = Array.isArray(params.shader) ? _glShader2.default.apply(undefined, [this.gl].concat(_toConsumableArray(params.shader))) : params.shader;
	
	        this.buffer = Array.isArray(params.buffer) ? _glFbo2.default.apply(undefined, [this.gl].concat(_toConsumableArray(params.buffer))) : params.buffer;
	
	        this.speed = params.speed;
	        this.bias = params.bias;
	
	        this.jitterRad = params.jitterRad;
	        this.jitter = _vec2.default.create();
	
	        this.spawnSize = params.spawnSize;
	        this.spawnMatrix = _mat2.default.create();
	    }
	
	    _createClass(PixelSpawner, [{
	        key: 'update',
	        value: function update(uniforms) {
	            return Object.assign(uniforms, {
	                spawnData: this.buffer.color[0].bind(1),
	                spawnSize: this.spawnSize,
	                spawnMatrix: this.spawnMatrix,
	                speed: this.speed,
	                jitter: (0, _aspect2.default)(this.jitter, uniforms.viewRes, this.jitterRad),
	                bias: this.bias
	            });
	        }
	    }, {
	        key: 'spawn',
	        value: function spawn(tendrils) {
	            var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.update.bind(this);
	
	            return tendrils.spawnShader(this.shader, update);
	        }
	    }, {
	        key: 'setPixels',
	        value: function setPixels(pixels) {
	            return this.buffer.color[0].setPixels(pixels);
	        }
	    }]);
	
	    return PixelSpawner;
	}();
	
	exports.default = PixelSpawner;

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D particles;\nuniform sampler2D spawnData;\n\nuniform vec2 dataRes;\nuniform vec2 geomRes;\nuniform vec2 spawnSize;\n\nuniform vec2 jitter;\nuniform float time;\nuniform float speed;\n\nuniform mat3 spawnMatrix;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nfloat map(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec4 uvRange = vec4(0.0, 0.0, 1.0, 1.0);\n\nconst vec4 posRange = vec4(-1.0, -1.0, 1.0, 1.0);\n\nvec2 uvToPos(vec2 uv) {\n    return map(uv, uvRange.xy, uvRange.zw, posRange.xy, posRange.zw);\n}\n\nfloat transform(mat2 m, float v) {\n    return (m*vec2(v, 1.0)).x;\n}\n\nvec2 transform(mat3 m, vec2 v) {\n    return (m*vec3(v, 1.0)).xy;\n}\n\nvec3 transform(mat4 m, vec3 v) {\n    return (m*vec4(v, 1.0)).xyz;\n}\n\nconst vec2 flipUV = vec2(1.0, -1.0);\n\nvec2 spawnToPos(vec2 uv) {\n    // Jittering around a UV cell to get rid of boxy scaled sampling artefacts\n    vec2 offset = vec2(mix(-jitter.x, jitter.x, random(uv-1.2345+(time*0.001))),\n            mix(-jitter.y, jitter.y, random(uv+1.2345+(time*0.001))));\n\n    return transform(spawnMatrix, uvToPos(uv+offset)*flipUV*spawnSize);\n}\n\n// `import`-able convenience for setting up a vignette - should be replaced with\n// a proper `uniform`-ed version.\n\nconst vec3 curve = vec3(0.1, 1.0, 1.0);\nconst vec2 mid = vec2(0.5);\nconst float limit = 0.6;\n\n// #pragma glslify: vignette = require(../../filter/pass/vignette, curve = curve, mid = mid, limit = limit)\n\n/**\n * Directly uses a normal image - brightness being speed in a direction defined\n * by the `rgba` channels.\n *\n * @requires {float} time The current time\n */\n\nconst vec4 k = vec4(0.0, -1.0/3.0, 2.0/3.0, -1.0);\nconst float e = 1.0e-10;\n\nvec3 rgb2hsv(vec3 c) {\n    vec4 p = ((c.g < c.b)? vec4(c.bg, k.wz) : vec4(c.gb, k.xy));\n    vec4 q = ((c.r < p.x)? vec4(p.xyw, c.r) : vec4(c.r, p.yzx));\n\n    float d = q.x-min(q.w, q.y);\n\n    return vec3(abs(q.z+(q.w-q.y)/(6.0*d+e)), d/(q.x+e), q.x);\n}\n\nconst float tau = 6.28318530717958647692;\n\nvec2 angleToVec(float rad) {\n    return vec2(cos(rad), sin(rad));\n}\n\nvec4 apply(vec2 uv, vec2 pos, vec4 pixel) {\n    vec3 hsv = rgb2hsv(pixel.rgb);\n\n    return vec4(pos, angleToVec((hsv.r+(time*0.00003))*tau)*hsv.g*hsv.b*pixel.a);\n}\n\n// #pragma glslify: applier = require(./apply/brightest)\n/**\n * @requires {vec2} mid The center of the vignette\n * @requires {float} limit The radius of the vignette\n * @requires {(float|vec2|vec3|vec4)} curve Bezier curve points, shaping falloff\n */\n\n/**\n * Adapted from `bezier`.\n */\n\nfloat bezier(vec2 cp, float t) {\n    return cp.x+(cp.y-cp.x)*t;\n}\n\nfloat bezier(vec3 cp, float t) {\n    float ut = 1.0-t;\n\n    return (cp.x*ut+cp.y*t)*ut+(cp.y*ut+cp.z*t)*t;\n}\n\nfloat bezier(vec4 cp, float t) {\n    float ut = 1.0-t;\n    float a1 = cp.y*ut+cp.z*t;\n\n    return ((cp.x*ut+cp.y*t)*ut+a1*t)*ut+(a1*ut+(cp.z*ut+cp.w*t)*t)*t;\n}\n\n// @todo Remove the `1.0-` here?\nfloat amount(vec2 point, vec2 mid, float limit) {\n    return min(1.0-(length(point-mid)/limit), 1.0);\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit) {\n    return max(0.0, amount(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, float curve) {\n    return max(0.0, curve*amount(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec2 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec3 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec4 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nvec4 pass(vec2 uv, vec4 pixel) {\n    return pixel*vignette(uv, mid, limit, curve);\n}\n\n/**\n * A way to easily compose filter passes on the pixel before applying it.\n *\n * @see `../../../filter/`\n * @see `./`\n * @requires {function} pass The filter pass function, given the pixel.\n * @requires {function} apply The apply function, given the result of `pass`.\n */\n\nvec4 compose(vec2 uv, vec2 pos, vec4 pixel) {\n    return apply(uv, pos, pass(uv, pixel));\n}\n\n// #pragma glslify: apply = require(./apply/color, time = time)\n// #pragma glslify: apply = require(./apply/brightest)\n\n/**\n * Directly spawns a particle according to its euivalent position/values in the\n * given texture.\n *\n * @requires {function} apply A function that transforms a `vec4` of data into a\n *                            valid `vec4` state.\n */\n\nvoid main() {\n    /**\n     * @todo I have no idea why this seems to be required here and not in the\n     *       main logic shader... seems to do with the data/geometry size ratio.\n     */\n    // vec2 uv = gl_FragCoord.xy/dataRes;\n    vec2 uv = (gl_FragCoord.xy/dataRes)*(geomRes/dataRes);\n\n    vec4 state = compose(uv, spawnToPos(uv), texture2D(spawnData, uv));\n\n    gl_FragColor = vec4(state.xy, state.zw*speed);\n}\n\n"

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = "/**\n * Tries a number of times to randomly select a pixel scored highest by a given\n * function.\n */\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D particles;\nuniform sampler2D spawnData;\n\nuniform vec2 dataRes;\nuniform vec2 geomRes;\nuniform vec2 spawnSize;\n\nuniform vec2 jitter;\nuniform float time;\nuniform float speed;\n\nuniform mat3 spawnMatrix;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nfloat map(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec4 uvRange = vec4(0.0, 0.0, 1.0, 1.0);\n\nconst vec4 posRange = vec4(-1.0, -1.0, 1.0, 1.0);\n\nvec2 uvToPos(vec2 uv) {\n    return map(uv, uvRange.xy, uvRange.zw, posRange.xy, posRange.zw);\n}\n\nfloat transform(mat2 m, float v) {\n    return (m*vec2(v, 1.0)).x;\n}\n\nvec2 transform(mat3 m, vec2 v) {\n    return (m*vec3(v, 1.0)).xy;\n}\n\nvec3 transform(mat4 m, vec3 v) {\n    return (m*vec4(v, 1.0)).xyz;\n}\n\nconst vec2 flipUV = vec2(1.0, -1.0);\n\nvec2 spawnToPos(vec2 uv) {\n    // Jittering around a UV cell to get rid of boxy scaled sampling artefacts\n    vec2 offset = vec2(mix(-jitter.x, jitter.x, random(uv-1.2345+(time*0.001))),\n            mix(-jitter.y, jitter.y, random(uv+1.2345+(time*0.001))));\n\n    return transform(spawnMatrix, uvToPos(uv+offset)*flipUV*spawnSize);\n}\n\n// `import`-able convenience for setting up a vignette - should be replaced with\n// a proper `uniform`-ed version.\n\nconst vec3 curve = vec3(0.1, 1.0, 1.0);\nconst vec2 mid = vec2(0.5);\nconst float limit = 0.6;\n\n// #pragma glslify: vignette = require(../../filter/pass/vignette, curve = curve, mid = mid, limit = limit)\n\n/**\n * Directly uses a normal image - brightness being speed in a direction defined\n * by the `rgba` channels.\n *\n * @requires {float} time The current time\n */\n\nconst vec4 k = vec4(0.0, -1.0/3.0, 2.0/3.0, -1.0);\nconst float e = 1.0e-10;\n\nvec3 rgb2hsv(vec3 c) {\n    vec4 p = ((c.g < c.b)? vec4(c.bg, k.wz) : vec4(c.gb, k.xy));\n    vec4 q = ((c.r < p.x)? vec4(p.xyw, c.r) : vec4(c.r, p.yzx));\n\n    float d = q.x-min(q.w, q.y);\n\n    return vec3(abs(q.z+(q.w-q.y)/(6.0*d+e)), d/(q.x+e), q.x);\n}\n\nconst float tau = 6.28318530717958647692;\n\nvec2 angleToVec(float rad) {\n    return vec2(cos(rad), sin(rad));\n}\n\nvec4 apply(vec2 uv, vec2 pos, vec4 pixel) {\n    vec3 hsv = rgb2hsv(pixel.rgb);\n\n    return vec4(pos, angleToVec((hsv.r+(time*0.00003))*tau)*hsv.g*hsv.b*pixel.a);\n}\n\n// #pragma glslify: applier = require(./apply/brightest)\n/**\n * @requires {vec2} mid The center of the vignette\n * @requires {float} limit The radius of the vignette\n * @requires {(float|vec2|vec3|vec4)} curve Bezier curve points, shaping falloff\n */\n\n/**\n * Adapted from `bezier`.\n */\n\nfloat bezier(vec2 cp, float t) {\n    return cp.x+(cp.y-cp.x)*t;\n}\n\nfloat bezier(vec3 cp, float t) {\n    float ut = 1.0-t;\n\n    return (cp.x*ut+cp.y*t)*ut+(cp.y*ut+cp.z*t)*t;\n}\n\nfloat bezier(vec4 cp, float t) {\n    float ut = 1.0-t;\n    float a1 = cp.y*ut+cp.z*t;\n\n    return ((cp.x*ut+cp.y*t)*ut+a1*t)*ut+(a1*ut+(cp.z*ut+cp.w*t)*t)*t;\n}\n\n// @todo Remove the `1.0-` here?\nfloat amount(vec2 point, vec2 mid, float limit) {\n    return min(1.0-(length(point-mid)/limit), 1.0);\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit) {\n    return max(0.0, amount(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, float curve) {\n    return max(0.0, curve*amount(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec2 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec3 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec4 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nvec4 pass(vec2 uv, vec4 pixel) {\n    return pixel*vignette(uv, mid, limit, curve);\n}\n\n/**\n * A way to easily compose filter passes on the pixel before applying it.\n *\n * @see `../../../filter/`\n * @see `./`\n * @requires {function} pass The filter pass function, given the pixel.\n * @requires {function} apply The apply function, given the result of `pass`.\n */\n\nvec4 compose(vec2 uv, vec2 pos, vec4 pixel) {\n    return apply(uv, pos, pass(uv, pixel));\n}\n\n// #pragma glslify: apply = require(./apply/color, time = time)\n// #pragma glslify: apply = require(./apply/brightest)\n\n/**\n * Pick the Highest velocity.\n * Uses the same data structure as the particles.\n */\n\nfloat length2(vec2 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec3 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec4 vec) {\n    return dot(vec, vec);\n}\n\nfloat test(vec4 data) {\n    return length2(data.zw);\n}\n\nconst float samples = 6.0;\n\n/**\n * Tries a number of times to randomly select a pixel scored highest by a given\n * function.\n *\n * @requires {function} apply A function that transforms a `vec4` of data into a\n *                            valid `vec4` state.\n * @requires {function} test A function that returns a float value for a given\n *                           `vec4` state; greater values win the comparison.\n */\n\n// Over 1 favours changing to new data; under 1 favours current data.\nuniform float bias;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\n\nvec4 pick(vec4 current, vec4 next) {\n    return ((test(current) > bias*test(next))? current : next);\n}\n\nvoid main() {\n    /**\n     * @todo This was needed in `./direct-main.frag` - is it needed here too?\n     */\n    vec2 uv = gl_FragCoord.xy/dataRes;\n    // vec2 uv = (gl_FragCoord.xy/dataRes)*(geomRes/dataRes);\n    \n    vec4 state = texture2D(particles, uv);\n\n    vec4 baseSeed = state+vec4(uv, uv)+vec4(1.2345+(time*0.001));\n\n    for(float n = 0.0; n < samples; n += 1.0) {\n        vec4 seed = baseSeed+vec4(n);\n        vec2 spawnUV = mod(vec2(random(seed.xy), random(seed.zw)), 1.0);\n        vec4 other = compose(spawnUV, spawnToPos(spawnUV),\n                texture2D(spawnData, spawnUV));\n\n        state = pick(state, vec4(other.xy, other.zw*speed));\n    }\n\n    gl_FragColor = state;\n}\n\n"

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D particles;\nuniform sampler2D spawnData;\n\nuniform vec2 dataRes;\nuniform vec2 geomRes;\nuniform vec2 spawnSize;\n\nuniform vec2 jitter;\nuniform float time;\nuniform float speed;\n\nuniform mat3 spawnMatrix;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nfloat map(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec4 uvRange = vec4(0.0, 0.0, 1.0, 1.0);\n\nconst vec4 posRange = vec4(-1.0, -1.0, 1.0, 1.0);\n\nvec2 uvToPos(vec2 uv) {\n    return map(uv, uvRange.xy, uvRange.zw, posRange.xy, posRange.zw);\n}\n\nfloat transform(mat2 m, float v) {\n    return (m*vec2(v, 1.0)).x;\n}\n\nvec2 transform(mat3 m, vec2 v) {\n    return (m*vec3(v, 1.0)).xy;\n}\n\nvec3 transform(mat4 m, vec3 v) {\n    return (m*vec4(v, 1.0)).xyz;\n}\n\nconst vec2 flipUV = vec2(1.0, -1.0);\n\nvec2 spawnToPos(vec2 uv) {\n    // Jittering around a UV cell to get rid of boxy scaled sampling artefacts\n    vec2 offset = vec2(mix(-jitter.x, jitter.x, random(uv-1.2345+(time*0.001))),\n            mix(-jitter.y, jitter.y, random(uv+1.2345+(time*0.001))));\n\n    return transform(spawnMatrix, uvToPos(uv+offset)*flipUV*spawnSize);\n}\n\nuniform float flowDecay;\n\n/**\n * Use the pixel position, and the particle velocity.\n * Same data structure as the flow.\n *\n * @requires {float} time The current time\n * @requires {float} decay The rate of decay of the flow over time\n */\n\n// Time/decay\n\nvec2 get(vec3 data, float time, float decay) {\n    return data.xy*max(0.0, 1.0-((time-data.z)*decay));\n}\n\nvec2 get(vec4 data, float time, float decay) {\n    return get(data.xyz, time, decay);\n}\n\n// No time/decay\n\nvec2 get(vec2 data) {\n    return data.xy;\n}\n\nvec2 get(vec3 data) {\n    return get(data.xy);\n}\n\nvec2 get(vec4 data) {\n    return get(data.xy);\n}\n\nvec4 apply(vec2 uv, vec2 pos, vec4 pixel) {\n    return vec4(pos, get(pixel, time, flowDecay));\n}\n\n/**\n * Pick the Highest velocity.\n * Uses the same data structure as the particles.\n */\n\nfloat length2(vec2 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec3 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec4 vec) {\n    return dot(vec, vec);\n}\n\nfloat test(vec4 data) {\n    return length2(data.zw);\n}\n\nconst float samples = 5.0;\n\n/**\n * Tries a number of times to randomly select a pixel scored highest by a given\n * function.\n *\n * @requires {function} apply A function that transforms a `vec4` of data into a\n *                            valid `vec4` state.\n * @requires {function} test A function that returns a float value for a given\n *                           `vec4` state; greater values win the comparison.\n */\n\n// Over 1 favours changing to new data; under 1 favours current data.\nuniform float bias;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\n\nvec4 pick(vec4 current, vec4 next) {\n    return ((test(current) > bias*test(next))? current : next);\n}\n\nvoid main() {\n    /**\n     * @todo This was needed in `./direct-main.frag` - is it needed here too?\n     */\n    vec2 uv = gl_FragCoord.xy/dataRes;\n    // vec2 uv = (gl_FragCoord.xy/dataRes)*(geomRes/dataRes);\n    \n    vec4 state = texture2D(particles, uv);\n\n    vec4 baseSeed = state+vec4(uv, uv)+vec4(1.2345+(time*0.001));\n\n    for(float n = 0.0; n < samples; n += 1.0) {\n        vec4 seed = baseSeed+vec4(n);\n        vec2 spawnUV = mod(vec2(random(seed.xy), random(seed.zw)), 1.0);\n        vec4 other = apply(spawnUV, spawnToPos(spawnUV),\n                texture2D(spawnData, spawnUV));\n\n        state = pick(state, vec4(other.xy, other.zw*speed));\n    }\n\n    gl_FragColor = state;\n}\n\n"

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D particles;\nuniform sampler2D spawnData;\n\nuniform vec2 dataRes;\nuniform vec2 geomRes;\nuniform vec2 spawnSize;\n\nuniform vec2 jitter;\nuniform float time;\nuniform float speed;\n\nuniform mat3 spawnMatrix;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nfloat map(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec4 uvRange = vec4(0.0, 0.0, 1.0, 1.0);\n\nconst vec4 posRange = vec4(-1.0, -1.0, 1.0, 1.0);\n\nvec2 uvToPos(vec2 uv) {\n    return map(uv, uvRange.xy, uvRange.zw, posRange.xy, posRange.zw);\n}\n\nfloat transform(mat2 m, float v) {\n    return (m*vec2(v, 1.0)).x;\n}\n\nvec2 transform(mat3 m, vec2 v) {\n    return (m*vec3(v, 1.0)).xy;\n}\n\nvec3 transform(mat4 m, vec3 v) {\n    return (m*vec4(v, 1.0)).xyz;\n}\n\nconst vec2 flipUV = vec2(1.0, -1.0);\n\nvec2 spawnToPos(vec2 uv) {\n    // Jittering around a UV cell to get rid of boxy scaled sampling artefacts\n    vec2 offset = vec2(mix(-jitter.x, jitter.x, random(uv-1.2345+(time*0.001))),\n            mix(-jitter.y, jitter.y, random(uv+1.2345+(time*0.001))));\n\n    return transform(spawnMatrix, uvToPos(uv+offset)*flipUV*spawnSize);\n}\n\n// `import`-able convenience for setting up a vignette - should be replaced with\n// a proper `uniform`-ed version.\n\nconst vec3 curve = vec3(0.1, 1.0, 1.0);\nconst vec2 mid = vec2(0.5);\nconst float limit = 0.6;\n\n// #pragma glslify: vignette = require(../../filter/pass/vignette, curve = curve, mid = mid, limit = limit)\n\n/**\n * Identity\n */\nvec4 apply(vec2 uv, vec2 pos, vec4 pixel) {\n    return pixel;\n}\n\n/**\n * @requires {vec2} mid The center of the vignette\n * @requires {float} limit The radius of the vignette\n * @requires {(float|vec2|vec3|vec4)} curve Bezier curve points, shaping falloff\n */\n\n/**\n * Adapted from `bezier`.\n */\n\nfloat bezier(vec2 cp, float t) {\n    return cp.x+(cp.y-cp.x)*t;\n}\n\nfloat bezier(vec3 cp, float t) {\n    float ut = 1.0-t;\n\n    return (cp.x*ut+cp.y*t)*ut+(cp.y*ut+cp.z*t)*t;\n}\n\nfloat bezier(vec4 cp, float t) {\n    float ut = 1.0-t;\n    float a1 = cp.y*ut+cp.z*t;\n\n    return ((cp.x*ut+cp.y*t)*ut+a1*t)*ut+(a1*ut+(cp.z*ut+cp.w*t)*t)*t;\n}\n\n// @todo Remove the `1.0-` here?\nfloat amount(vec2 point, vec2 mid, float limit) {\n    return min(1.0-(length(point-mid)/limit), 1.0);\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit) {\n    return max(0.0, amount(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, float curve) {\n    return max(0.0, curve*amount(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec2 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec3 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec4 curve) {\n    return max(0.0, bezier(curve, amount(point, mid, limit)));\n}\n\nvec4 pass(vec2 uv, vec4 pixel) {\n    return pixel*vignette(uv, mid, limit, curve);\n}\n\n/**\n * A way to easily compose filter passes on the pixel before applying it.\n *\n * @see `../../../filter/`\n * @see `./`\n * @requires {function} pass The filter pass function, given the pixel.\n * @requires {function} apply The apply function, given the result of `pass`.\n */\n\nvec4 compose(vec2 uv, vec2 pos, vec4 pixel) {\n    return apply(uv, pos, pass(uv, pixel));\n}\n\n/**\n * Pick the Highest velocity.\n * Uses the same data structure as the particles.\n */\n\nfloat length2(vec2 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec3 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec4 vec) {\n    return dot(vec, vec);\n}\n\nfloat test(vec4 data) {\n    return length2(data.zw);\n}\n\nconst float samples = 2.0;\n\n/**\n * Tries a number of times to randomly select a pixel scored highest by a given\n * function.\n *\n * @requires {function} apply A function that transforms a `vec4` of data into a\n *                            valid `vec4` state.\n * @requires {function} test A function that returns a float value for a given\n *                           `vec4` state; greater values win the comparison.\n */\n\n// Over 1 favours changing to new data; under 1 favours current data.\nuniform float bias;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\n\nvec4 pick(vec4 current, vec4 next) {\n    return ((test(current) > bias*test(next))? current : next);\n}\n\nvoid main() {\n    /**\n     * @todo This was needed in `./direct-main.frag` - is it needed here too?\n     */\n    vec2 uv = gl_FragCoord.xy/dataRes;\n    // vec2 uv = (gl_FragCoord.xy/dataRes)*(geomRes/dataRes);\n    \n    vec4 state = texture2D(particles, uv);\n\n    vec4 baseSeed = state+vec4(uv, uv)+vec4(1.2345+(time*0.001));\n\n    for(float n = 0.0; n < samples; n += 1.0) {\n        vec4 seed = baseSeed+vec4(n);\n        vec2 spawnUV = mod(vec2(random(seed.xy), random(seed.zw)), 1.0);\n        vec4 other = compose(spawnUV, spawnToPos(spawnUV),\n                texture2D(spawnData, spawnUV));\n\n        state = pick(state, vec4(other.xy, other.zw*speed));\n    }\n\n    gl_FragColor = state;\n}\n\n"

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.spawnBall = exports.defaults = undefined;
	
	var _init = __webpack_require__(141);
	
	var init = _interopRequireWildcard(_init);
	
	var _index = __webpack_require__(143);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var defaults = exports.defaults = function defaults() {
	    return {
	        shader: [init.defaults().shader[0], _index2.default],
	        uniforms: {
	            radius: 1,
	            speed: 0
	        }
	    };
	};
	
	var spawnBall = exports.spawnBall = function spawnBall(gl, options) {
	    return init.spawner(gl, Object.assign(defaults(), options));
	};
	
	exports.default = spawnBall;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.spawner = exports.defaults = undefined;
	
	var _glShader = __webpack_require__(56);
	
	var _glShader2 = _interopRequireDefault(_glShader);
	
	var _index = __webpack_require__(124);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(142);
	
	var _index4 = _interopRequireDefault(_index3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var defaults = exports.defaults = function defaults() {
	    return {
	        shader: [_index2.default, _index4.default],
	        uniforms: null
	    };
	};
	
	var spawner = exports.spawner = function spawner(gl, options) {
	    var params = Object.assign(defaults(), options);
	
	    return {
	        gl: gl,
	        uniforms: params.uniforms,
	
	        shader: Array.isArray(params.shader) ? _glShader2.default.apply(undefined, [gl].concat(_toConsumableArray(params.shader))) : params.shader,
	
	        spawn: function spawn(tendrils) {
	            tendrils.spawnShader(this.shader, this.uniforms);
	        }
	    };
	};
	
	exports.default = spawner;

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nconst vec2 inert = vec2(-1000000.0);\n\nconst vec2 pos = vec2(inert);\nconst vec2 vel = vec2(0.0);\n\nvoid main() {\n    gl_FragColor = vec4(pos, vel);\n}\n"

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform float radius;\nuniform float speed;\n\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nvec2 angleToVec(float rad) {\n    return vec2(cos(rad), sin(rad));\n}\n\nconst float tau = 6.28318530717958647692;\n\nvoid main() {\n    vec4 randoms = vec4(random((gl_FragCoord.xy*1.7654)+2.3675),\n        random((gl_FragCoord.xy*1.23494)+0.36434),\n        random((gl_FragCoord.xy*0.327789)+3.498787),\n        random((gl_FragCoord.xy*9.0374)+0.2773));\n\n    gl_FragColor = vec4(angleToVec(randoms.x*tau)*randoms.y*radius,\n        angleToVec(randoms.z*tau)*randoms.w*speed);\n}\n"

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.GeometrySpawner = exports.defaults = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _glGeometry = __webpack_require__(107);
	
	var _glGeometry2 = _interopRequireDefault(_glGeometry);
	
	var _glShader = __webpack_require__(56);
	
	var _glShader2 = _interopRequireDefault(_glShader);
	
	var _vec = __webpack_require__(53);
	
	var _vec2 = _interopRequireDefault(_vec);
	
	var _pixels = __webpack_require__(135);
	
	var spawnPixels = _interopRequireWildcard(_pixels);
	
	var _brightSample = __webpack_require__(145);
	
	var _brightSample2 = _interopRequireDefault(_brightSample);
	
	var _index = __webpack_require__(146);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(147);
	
	var _index4 = _interopRequireDefault(_index3);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Pretty quick thing to spawn particles from triangulated geometry (triangles,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * for simple Platonic forms).
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @todo Clean up
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	// @todo Would like to direct with color, but doesn't seem to work with white...
	// import frag from '../pixels/color-sample.frag';
	
	var defaults = exports.defaults = function defaults() {
	    return {
	        shader: [spawnPixels.defaults().shader[0], _brightSample2.default],
	        drawShader: [_index2.default, _index4.default],
	        color: [1, 1, 1, 1],
	        positions: Array(2 * 3 * 1).fill(0)
	    };
	};
	
	var GeometrySpawner = exports.GeometrySpawner = function (_spawnPixels$PixelSpa) {
	    _inherits(GeometrySpawner, _spawnPixels$PixelSpa);
	
	    function GeometrySpawner(gl, options) {
	        _classCallCheck(this, GeometrySpawner);
	
	        var params = Object.assign(defaults(), options);
	
	        var _this = _possibleConstructorReturn(this, (GeometrySpawner.__proto__ || Object.getPrototypeOf(GeometrySpawner)).call(this, gl, Object.assign(defaults(), options)));
	
	        _this.geometry = (0, _glGeometry2.default)(gl);
	
	        _this.drawShader = Array.isArray(params.drawShader) ? _glShader2.default.apply(undefined, [_this.gl].concat(_toConsumableArray(params.drawShader))) : params.drawShader;
	
	        _this.color = params.color;
	        _this.positions = params.positions;
	        return _this;
	    }
	
	    _createClass(GeometrySpawner, [{
	        key: 'shuffle',
	        value: function shuffle() {
	            var size = 2;
	            var num = 3;
	            var step = size * num;
	            var tau = Math.PI * 2;
	
	            var rad = void 0;
	            var radius = function radius() {
	                return 0.25 + Math.random() * 1.3;
	            };
	
	            // Triangles, one vertex always in the center
	            for (var t = this.positions.length - 1; t >= 0; t -= step) {
	                var angle = tau * Math.random();
	
	                var range = tau * (
	                // Minimum range offset
	                0.01 +
	                // Acute or obtuse?
	                Math.round(Math.random()) * 0.25 +
	                // Range of size
	                Math.random() * 0.03);
	
	                rad = radius();
	                this.positions[t - 3] = Math.cos(angle - range) * rad;
	                this.positions[t - 2] = Math.sin(angle - range) * rad;
	
	                rad = radius();
	                this.positions[t - 1] = Math.cos(angle + range) * rad;
	                this.positions[t - 0] = Math.sin(angle + range) * rad;
	
	                // Skipping the center vertex, stays at [0, 0]
	            }
	
	            this.geometry.attr('position', this.positions, { size: size });
	
	            return this;
	        }
	    }, {
	        key: 'spawn',
	        value: function spawn(tendrils) {
	            var _get2;
	
	            _vec2.default.scale(this.buffer.shape, tendrils.viewRes, 0.2);
	            // this.buffer.shape = tendrils.viewRes;
	
	            this.buffer.bind();
	            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
	
	            this.drawShader.bind();
	
	            this.drawShader.uniforms.color = this.color;
	            this.drawShader.uniforms.viewSize = tendrils.viewSize;
	
	            this.geometry.bind(this.drawShader);
	            this.geometry.draw();
	            this.geometry.unbind();
	
	            for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                rest[_key - 1] = arguments[_key];
	            }
	
	            return (_get2 = _get(GeometrySpawner.prototype.__proto__ || Object.getPrototypeOf(GeometrySpawner.prototype), 'spawn', this)).call.apply(_get2, [this, tendrils].concat(rest));
	        }
	    }]);
	
	    return GeometrySpawner;
	}(spawnPixels.PixelSpawner);
	
	exports.default = GeometrySpawner;

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D particles;\nuniform sampler2D spawnData;\n\nuniform vec2 dataRes;\nuniform vec2 geomRes;\nuniform vec2 spawnSize;\n\nuniform vec2 jitter;\nuniform float time;\nuniform float speed;\n\nuniform mat3 spawnMatrix;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nfloat map(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec4 uvRange = vec4(0.0, 0.0, 1.0, 1.0);\n\nconst vec4 posRange = vec4(-1.0, -1.0, 1.0, 1.0);\n\nvec2 uvToPos(vec2 uv) {\n    return map(uv, uvRange.xy, uvRange.zw, posRange.xy, posRange.zw);\n}\n\nfloat transform(mat2 m, float v) {\n    return (m*vec2(v, 1.0)).x;\n}\n\nvec2 transform(mat3 m, vec2 v) {\n    return (m*vec3(v, 1.0)).xy;\n}\n\nvec3 transform(mat4 m, vec3 v) {\n    return (m*vec4(v, 1.0)).xyz;\n}\n\nconst vec2 flipUV = vec2(1.0, -1.0);\n\nvec2 spawnToPos(vec2 uv) {\n    // Jittering around a UV cell to get rid of boxy scaled sampling artefacts\n    vec2 offset = vec2(mix(-jitter.x, jitter.x, random(uv-1.2345+(time*0.001))),\n            mix(-jitter.y, jitter.y, random(uv+1.2345+(time*0.001))));\n\n    return transform(spawnMatrix, uvToPos(uv+offset)*flipUV*spawnSize);\n}\n\n/**\n * Directly uses a normal image - brightness being speed in a random direction.\n */\n\nfloat luma(vec3 color) {\n  return dot(color, vec3(0.299, 0.587, 0.114));\n}\n\nfloat luma(vec4 color) {\n  return dot(color.rgb, vec3(0.299, 0.587, 0.114));\n}\n\nconst float tau = 6.28318530717958647692;\n\nvec2 angleToVec(float rad) {\n    return vec2(cos(rad), sin(rad));\n}\n\nvec4 apply(vec2 uv, vec2 pos, vec4 pixel) {\n    return vec4(pos,\n        angleToVec(mod(random(uv*dot(pixel.rg, pixel.ba)), 1.0)*tau)*\n            luma(pixel)*pixel.a);\n}\n\n/**\n * Pick the Highest velocity.\n * Uses the same data structure as the particles.\n */\n\nfloat length2(vec2 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec3 vec) {\n    return dot(vec, vec);\n}\n\nfloat length2(vec4 vec) {\n    return dot(vec, vec);\n}\n\nfloat test(vec4 data) {\n    return length2(data.zw);\n}\n\nconst float samples = 6.0;\n\n/**\n * Tries a number of times to randomly select a pixel scored highest by a given\n * function.\n *\n * @requires {function} apply A function that transforms a `vec4` of data into a\n *                            valid `vec4` state.\n * @requires {function} test A function that returns a float value for a given\n *                           `vec4` state; greater values win the comparison.\n */\n\n// Over 1 favours changing to new data; under 1 favours current data.\nuniform float bias;\n\n/**\n * @todo Some bug with `glslify-import` & sons breaks `node_modules` aliased\n *       `require`s in `import`ed files, so we need to do it the looooooong way.\n */\n// #pragma glslify: random = require(glsl-random)\n\nvec4 pick(vec4 current, vec4 next) {\n    return ((test(current) > bias*test(next))? current : next);\n}\n\nvoid main() {\n    /**\n     * @todo This was needed in `./direct-main.frag` - is it needed here too?\n     */\n    vec2 uv = gl_FragCoord.xy/dataRes;\n    // vec2 uv = (gl_FragCoord.xy/dataRes)*(geomRes/dataRes);\n    \n    vec4 state = texture2D(particles, uv);\n\n    vec4 baseSeed = state+vec4(uv, uv)+vec4(1.2345+(time*0.001));\n\n    for(float n = 0.0; n < samples; n += 1.0) {\n        vec4 seed = baseSeed+vec4(n);\n        vec2 spawnUV = mod(vec2(random(seed.xy), random(seed.zw)), 1.0);\n        vec4 other = apply(spawnUV, spawnToPos(spawnUV),\n                texture2D(spawnData, spawnUV));\n\n        state = pick(state, vec4(other.xy, other.zw*speed));\n    }\n\n    gl_FragColor = state;\n}\n\n"

/***/ },
/* 146 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nattribute vec2 position;\n\nuniform vec2 viewSize;\n\nvoid main() {\n    gl_Position = vec4(position*viewSize, 0.0, 1.0);\n}\n"

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform vec4 color;\n\nvoid main() {\n    gl_FragColor = color;\n}\n"

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AudioTrigger = exports.defaultTest = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global Uint8Array, Float32Array */
	
	/**
	 * High level audio analyser - a way to interpret inputs from audio samples over
	 * time, to trigger outputs.
	 */
	
	var _utils = __webpack_require__(121);
	
	var _each = __webpack_require__(149);
	
	var _each2 = _interopRequireDefault(_each);
	
	var _data = __webpack_require__(151);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _dataLog = __webpack_require__(152);
	
	var _analyse = __webpack_require__(159);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var defaultTest = exports.defaultTest = function defaultTest(trigger) {
	    return (0, _analyse.peak)(trigger.dataOrder(-1)) > trigger.limit;
	};
	
	var AudioTrigger = exports.AudioTrigger = function () {
	    function AudioTrigger(analyser, orders) {
	        var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
	
	        var _this = this;
	
	        var test = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	        var react = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	
	        _classCallCheck(this, AudioTrigger);
	
	        this.analyser = analyser;
	
	        this.orderLog = (0, _dataLog.makeOrderLog)(orders, function (size) {
	            return (0, _dataLog.makeLog)(size, function () {
	                return (0, _data2.default)(_this.analyser, size === orders ? Uint8Array : Float32Array);
	            });
	        });
	
	        // Not really needed
	        this.limit = limit;
	        this.test = test;
	        this.react = react;
	    }
	
	    // Update the sample logs from the analyser.
	
	
	    _createClass(AudioTrigger, [{
	        key: 'sample',
	        value: function sample() {
	            var dt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	            var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'frequencies';
	
	            this.analyser[method]((0, _utils.step)(this.orderLog[0]));
	            (0, _analyse.orderLogRates)(this.orderLog, dt);
	
	            return this;
	        }
	
	        // The most recent sample at the nth-order log. Negative `nth` indexes in
	        // reverse (highest-lowest).
	
	    }, {
	        key: 'dataOrder',
	        value: function dataOrder(nth) {
	            return (0, _utils.wrapIndex)(nth, this.orderLog)[0];
	        }
	
	        // Not relly needed - more a demo than anything.
	        // Test if the latest sample breaks the limit to trigger a response.
	
	    }, {
	        key: 'fire',
	        value: function fire() {
	            var react = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.react;
	            var test = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.test || defaultTest;
	
	            var triggered = !!test(this);
	
	            if (triggered) {
	                react(this);
	            }
	
	            return triggered;
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            (0, _each2.default)(function (log) {
	                return (0, _each2.default)(function (data) {
	                    return (0, _each2.default)(function (v, i) {
	                        return data[i] = 0;
	                    }, data);
	                }, log);
	            }, this.orderLog);
	        }
	    }]);
	
	    return AudioTrigger;
	}();
	
	exports.default = AudioTrigger;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.each = exports.eachList = undefined;
	
	var _iterable = __webpack_require__(150);
	
	var _iterable2 = _interopRequireDefault(_iterable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Iterate an array-like object.
	 * Similar to native, but with iteratee-first arguments.
	 */
	var eachList = exports.eachList = function eachList(f, x) {
	  Array.prototype.forEach.call(x, f);
	  // @todo
	  // Array.prototype.some.call(x, f);
	
	  return x;
	};
	
	/**
	 * Iterate any type of object.
	 * Same as above signature, but iterates over all the given object's own
	 * properties.
	 */
	var each = exports.each = function each(f, any) {
	  eachList(function (k, i, keys) {
	    return f(any[k], k, any, i, keys);
	  }, (0, _iterable2.default)(any));
	
	  return any;
	};
	
	exports.default = each;

/***/ },
/* 150 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var iterable = exports.iterable = function iterable(any) {
	  return any ? Object.keys(any) : [];
	};
	
	exports.default = iterable;

/***/ },
/* 151 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Data for working with `web-audio-analyser` and other parts of this module.
	 */
	
	/* global Uint8Array */
	
	/**
	 * Make a typed array the corect size for a given audio analyser, for logging
	 * state.
	 *
	 * @param {*} aa A web audio analyser, or its analyser node/s.
	 * @param {TypedArray?} Data An optional typed array class to instantiate.
	 * @return {TypedArray} The data array instance.
	 */
	var makeData = exports.makeData = function makeData(aa) {
	  var Data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Uint8Array;
	  return new Data((aa.analyser ? aa.analyser[0] || aa.analyser : aa[0] || aa).frequencyBinCount);
	};
	
	exports.default = makeData;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.makeOrderLog = exports.makeLog = undefined;
	
	var _times = __webpack_require__(153);
	
	var _times2 = _interopRequireDefault(_times);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Make an array of data bins, for logging.
	 *
	 * (3) => [*, *, *]
	 *
	 * @param {Number} size The size of the data log.
	 * @param {Function} dataMaker Creates new data storage instances, given an
	 *                             index.
	 * @return {Array} An array of data bins.
	 */
	var makeLog = exports.makeLog = function makeLog(size) {
	  var dataMaker = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
	    return [];
	  };
	  return (0, _times2.default)(size, dataMaker);
	};
	
	/**
	 * Make a 2D array of the above, for logging higher-order data (calculus slope:
	 * as in integration, differentiation) of base data.
	 *
	 * (3) => [
	 *     [*, *, *],
	 *     [*, *],
	 *     [*]
	 * ]
	 *
	 * @param {Number} order The order of the slope log - the total number of logs
	 *                       will be a factorial of this value (`order!`),
	 *                       descending in length at each level from `order` to 1.
	 * @param {Function} logMaker Creates new data storage log instances, given a
	 *                            size.
	 * @return {Array} A 2D array, of logs of logs of data.
	 */
	var makeOrderLog = exports.makeOrderLog = function makeOrderLog(order) {
	  var logMaker = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : makeLog;
	  return (0, _times2.default)(order, function (i) {
	    return logMaker(order - i);
	  });
	};
	
	exports.default = makeOrderLog;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(154),
	    castFunction = __webpack_require__(155),
	    toInteger = __webpack_require__(157);
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used as references for the maximum length and index of an array. */
	var MAX_ARRAY_LENGTH = 4294967295;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;
	
	/**
	 * Invokes the iteratee `n` times, returning an array of the results of
	 * each invocation. The iteratee is invoked with one argument; (index).
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 * @example
	 *
	 * _.times(3, String);
	 * // => ['0', '1', '2']
	 *
	 *  _.times(4, _.constant(0));
	 * // => [0, 0, 0, 0]
	 */
	function times(n, iteratee) {
	  n = toInteger(n);
	  if (n < 1 || n > MAX_SAFE_INTEGER) {
	    return [];
	  }
	  var index = MAX_ARRAY_LENGTH,
	      length = nativeMin(n, MAX_ARRAY_LENGTH);
	
	  iteratee = castFunction(iteratee);
	  n -= MAX_ARRAY_LENGTH;
	
	  var result = baseTimes(length, iteratee);
	  while (++index < n) {
	    iteratee(index);
	  }
	  return result;
	}
	
	module.exports = times;


/***/ },
/* 154 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(156);
	
	/**
	 * Casts `value` to `identity` if it's not a function.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Function} Returns cast function.
	 */
	function castFunction(value) {
	  return typeof value == 'function' ? value : identity;
	}
	
	module.exports = castFunction;


/***/ },
/* 156 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(158);
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? (remainder ? result - remainder : result) : 0;
	}
	
	module.exports = toInteger;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(38);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	module.exports = toFinite;


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.meanWeight = exports.mean = exports.sumWeight = exports.sum = exports.peakPos = exports.peak = exports.logRates = undefined;
	exports.orderLogRates = orderLogRates;
	
	var _euler = __webpack_require__(160);
	
	var _map = __webpack_require__(161);
	
	var _reduce = __webpack_require__(162);
	
	var _utils = __webpack_require__(121);
	
	// Use them to derive higher-order info (velocity, acceleration, force, jerk...)
	
	/**
	 * Interpret useful info (velocity, higher order) from an array of data (for
	 * example, a `web-audio-analyser` audio analysis).
	 */
	
	/* global Uint8Array */
	
	var logRates = exports.logRates = function logRates(last, current, dt) {
	    var out = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Uint8Array(last.length);
	    return (0, _map.mapList)(function (v, i) {
	        return (0, _euler.eulerDyDt)(v, current[i], dt);
	    }, last, out);
	};
	
	/**
	 * Put the rates of change of the previous (lower) order of data into the next
	 * (higher) order of data, for each order.
	 *
	 * @see `makeOrderLog` in `../data-log/`.
	 */
	function orderLogRates(orderLog) {
	    var dt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	
	    for (var o = 1, oL = orderLog.length; o < oL; ++o) {
	        logRates(orderLog[o - 1][1], orderLog[o - 1][0], dt, (0, _utils.step)(orderLog[o]));
	    }
	
	    return orderLog;
	}
	
	// Interpret from that info.
	
	var peak = exports.peak = function peak(data) {
	    return (0, _reduce.reduceList)(function (max, v) {
	        return Math.abs(v) > Math.abs(max) ? v : max;
	    }, data, 0);
	};
	
	var peakPos = exports.peakPos = function peakPos(data) {
	    return (0, _reduce.reduceList)(function (max, v, i) {
	        if (Math.abs(v) > Math.abs(max.peak)) {
	            max.peak = v;
	            max.pos = i;
	        }
	
	        return max;
	    }, data, {
	        peak: 0,
	        pos: -1
	    });
	};
	
	var sum = exports.sum = function sum(data) {
	    return (0, _reduce.reduceList)(function (sum, v) {
	        return sum + Math.abs(v);
	    }, data, 0);
	};
	
	var sumWeight = exports.sumWeight = function sumWeight(data) {
	    var fulcrum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
	    return (0, _reduce.reduceList)(function (sum, v, i) {
	        return sum + Math.abs(v * (1 - Math.abs(i / (data.length - 1) - fulcrum)));
	    }, data, 0);
	};
	
	var mean = exports.mean = function mean(data) {
	    return sum(data) / data.length;
	};
	
	var meanWeight = exports.meanWeight = function meanWeight(data) {
	    var fulcrum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
	    return sumWeight(data, fulcrum) / data.length;
	};

/***/ },
/* 160 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Forward euler integration.
	 *
	 * @param {Number} vel Velocity.
	 * @param {Number} pos Current position.
	 * @param {Number} dt Time elapsed.
	 * @return The new position (`pos1`).
	 */
	var euler = exports.euler = function euler(vel, pos, dt) {
	  return pos + vel * dt;
	};
	
	/**
	 * The inverse (differentiation) of the above (integration) - find velocity from
	 * positions and time.
	 *
	 * @param {Number} pos1 Last position.
	 * @param {Number} pos2 Current position.
	 * @param {Number} dt Time elapsed.
	 * @return {Number} The velocity.
	 */
	var eulerDyDt = exports.eulerDyDt = function eulerDyDt(pos0, pos1, dt) {
	  return (pos1 - pos0) / dt;
	};
	
	exports.default = euler;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.map = exports.mapList = undefined;
	
	var _reduce = __webpack_require__(162);
	
	var _iterable = __webpack_require__(150);
	
	var _iterable2 = _interopRequireDefault(_iterable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Map an array-like object.
	 * Similar to native, but with iteratee-first arguments; and allows the object
	 * into which properties will be mapped to be defined (a new array, by default).
	 */
	var mapList = exports.mapList = function mapList(f, x) {
	  var out = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	  return (0, _reduce.reduceList)(function (acc, v, i) {
	    acc[i] = f(v, i, x);
	
	    return acc;
	  }, x, out);
	};
	
	/**
	 * Map any type of object.
	 * Same as above signature, but iterates over all the given object's own
	 * properties.
	 */
	var map = exports.map = function map(f, any) {
	  var out = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	  return (0, _reduce.reduceList)(function (acc, k, i, keys) {
	    acc[k] = f(any[k], k, any, i, keys);
	
	    return acc;
	  }, (0, _iterable2.default)(any), out);
	};
	
	exports.default = map;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reduce = exports.reduceList = undefined;
	
	var _iterable = __webpack_require__(150);
	
	var _iterable2 = _interopRequireDefault(_iterable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Reduce an array-like object.
	 * Similar to native, but with iteratee-first arguments.
	 * Supports the native one-value behaviour.
	 */
	var reduceList = exports.reduceList = function reduceList(f, list, out) {
	  return out === undefined ? Array.prototype.reduce.call(list, f) : Array.prototype.reduce.call(list, f, out);
	};
	
	/**
	 * Reduce any type of object.
	 * Same as above signature, but iterates over all the given object's own
	 * properties.
	 * Supports the native one-value behaviour.
	 */
	var reduce = exports.reduce = function reduce(f, any, out) {
	  return reduceList(out === undefined ? function (acc, k, i, keys) {
	    return f(i ? acc : any[acc], any[k], k, any, i, keys);
	  } : function (acc, k, i, keys) {
	    return f(acc, any[k], k, any, i, keys);
	  }, (0, _iterable2.default)(any), out);
	};
	
	exports.default = reduce;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AudioTexture = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Bind `web-audio-analyser` data to WebGL data textures, transform audio values
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * into texture range.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @see  https://github.com/stackgl/gl-audio-analyser/blob/master/index.js
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	/* global Float32Array */
	
	var _glTexture2d = __webpack_require__(90);
	
	var _glTexture2d2 = _interopRequireDefault(_glTexture2d);
	
	var _ndarray = __webpack_require__(91);
	
	var _ndarray2 = _interopRequireDefault(_ndarray);
	
	var _isNumber = __webpack_require__(164);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	var _map = __webpack_require__(161);
	
	var _utils = __webpack_require__(165);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var assignMap = function assignMap(v) {
	    return v;
	};
	
	var AudioTexture = exports.AudioTexture = function () {
	    function AudioTexture(gl, array, texture) {
	        _classCallCheck(this, AudioTexture);
	
	        this.gl = gl;
	
	        this.array = array && array.length ? (0, _ndarray2.default)(array, [array.length, 1]) : (0, _isNumber2.default)(array) ? (0, _ndarray2.default)(new Float32Array(array), [array, 1]) : array;
	
	        this.texture = texture || (0, _glTexture2d2.default)(gl, this.array, { float: true });
	    }
	
	    _createClass(AudioTexture, [{
	        key: 'apply',
	        value: function apply() {
	            this.texture.setPixels(this.array);
	
	            return this;
	        }
	
	        /**
	         * Transform `web-audio-analyser` data values into a WebGL data texture range.
	         */
	
	    }, {
	        key: 'assign',
	        value: function assign() {
	            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.array.data;
	
	            (0, _map.mapList)(assignMap, data, this.array.data);
	
	            return this;
	        }
	    }, {
	        key: 'waveform',
	        value: function waveform() {
	            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.array.data;
	
	            (0, _map.mapList)(_utils.waveformMap, data, this.array.data);
	
	            return this;
	        }
	    }, {
	        key: 'frequencies',
	        value: function frequencies() {
	            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.array.data;
	
	            (0, _map.mapList)(_utils.frequencyMap, data, this.array.data);
	
	            return this;
	        }
	    }]);
	
	    return AudioTexture;
	}();
	
	exports.default = AudioTexture;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(40),
	    isObjectLike = __webpack_require__(44);
	
	/** `Object#toString` result references. */
	var numberTag = '[object Number]';
	
	/**
	 * Checks if `value` is classified as a `Number` primitive or object.
	 *
	 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	 * classified as numbers, use the `_.isFinite` method.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	 * @example
	 *
	 * _.isNumber(3);
	 * // => true
	 *
	 * _.isNumber(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isNumber(Infinity);
	 * // => true
	 *
	 * _.isNumber('3');
	 * // => false
	 */
	function isNumber(value) {
	  return typeof value == 'number' ||
	    (isObjectLike(value) && baseGetTag(value) == numberTag);
	}
	
	module.exports = isNumber;


/***/ },
/* 165 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var waveformScale = exports.waveformScale = 1 / 128;
	var waveformMap = exports.waveformMap = function waveformMap(v) {
	  return (v - 128) * waveformScale;
	};
	
	var frequencyScale = exports.frequencyScale = 1 / 256;
	var frequencyMap = exports.frequencyMap = function frequencyMap(v) {
	  return v * frequencyScale;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FlowLines = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Convenience wrapper for a collection of flow lines.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _ = __webpack_require__(167);
	
	var _2 = _interopRequireDefault(_);
	
	var _reduce = __webpack_require__(162);
	
	var _reduce2 = _interopRequireDefault(_reduce);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FlowLines = exports.FlowLines = function () {
	    function FlowLines(gl) {
	        _classCallCheck(this, FlowLines);
	
	        this.gl = gl;
	        this.active = {};
	    }
	
	    _createClass(FlowLines, [{
	        key: 'get',
	        value: function get(id, options) {
	            return this.active[id] || (this.active[id] = new _2.default(this.gl, options));
	        }
	    }, {
	        key: 'trim',
	        value: function trim() {
	            for (var _len = arguments.length, times = Array(_len), _key = 0; _key < _len; _key++) {
	                times[_key] = arguments[_key];
	            }
	
	            return (0, _reduce2.default)(function (remaining, flowLine, id, active) {
	                return flowLine.trim.apply(flowLine, times) === 0 && delete active[id] ? remaining : remaining + 1;
	            }, this.active, 0);
	        }
	    }]);
	
	    return FlowLines;
	}();
	
	exports.default = FlowLines;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FlowLine = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Draw forms into a tendrils flow FBO.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @todo Improve the smoothness of this - currently very uneven and jagged,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *       especially over short gaps.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _line2 = __webpack_require__(168);
	
	var _line3 = _interopRequireDefault(_line2);
	
	var _index = __webpack_require__(178);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(179);
	
	var _index4 = _interopRequireDefault(_index3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var wrapIndex = function wrapIndex(i, l) {
	    return i < 0 ? l + i : i % l;
	};
	
	var FlowLine = exports.FlowLine = function () {
	    function FlowLine(gl) {
	        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	        _classCallCheck(this, FlowLine);
	
	        this.line = new _line3.default(gl, _extends({
	            shader: [_index2.default, _index4.default],
	            uniforms: _extends({}, (0, _line2.defaults)().uniforms, {
	                speed: 3,
	                speedLimit: 0.01,
	                rad: 0.1,
	                crestShape: 0.6
	            }),
	            attributes: _extends({}, (0, _line2.defaults)().attributes, {
	                previous: { getSize: function getSize(line) {
	                        return line.vertSize;
	                    } },
	                time: { size: 1 },
	                dt: { size: 1 }
	            })
	        }, options));
	
	        /**
	         * An array of times matching each point in the line path.
	         * @type {Array}
	         */
	        this.times = options.times || [];
	    }
	
	    _createClass(FlowLine, [{
	        key: 'update',
	        value: function update() {
	            var setAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.setAttributes;
	
	            // @todo Unsure if this makes sense - reconsider closed loop times.
	            var drawnTimes = this.line.closed && this.line.path.length ? this.times.concat(this.times[0]) : this.times;
	
	            this.line.update(function () {
	                for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	                    rest[_key] = arguments[_key];
	                }
	
	                return setAttributes.apply(undefined, [drawnTimes].concat(rest));
	            });
	
	            return this;
	        }
	    }, {
	        key: 'draw',
	        value: function draw() {
	            var _line;
	
	            (_line = this.line).draw.apply(_line, arguments);
	
	            return this;
	        }
	    }, {
	        key: 'setAttributes',
	        value: function setAttributes(times, values, index, attributes, line) {
	            line.setAttributes(values, index, attributes, line);
	
	            var prev = line.closed ? wrapIndex(index.path - 1, line.path.length) : Math.max(0, index.path - 1);
	
	            attributes.previous.data.set(line.path[prev], index.data * attributes.previous.size);
	
	            var time = times[index.path];
	
	            attributes.time.data[index.data] = time;
	            attributes.dt.data[index.data] = time - times[prev];
	        }
	    }, {
	        key: 'add',
	        value: function add(time, point) {
	            this.times.push(time);
	            this.line.path.push(point);
	
	            return this;
	        }
	    }, {
	        key: 'insert',
	        value: function insert(time, point) {
	            var index = this.findIndex(time);
	
	            this.times.splice(index, 0, time);
	            this.line.path.splice(index, 0, point);
	
	            return this;
	        }
	    }, {
	        key: 'at',
	        value: function at(index) {
	            var out = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	            out.time = this.times[index];
	            out.point = this.line.path[index];
	
	            return out;
	        }
	    }, {
	        key: 'findIndex',
	        value: function findIndex(time) {
	            var next = this.times.findIndex(function (other) {
	                return other > time;
	            });
	
	            return next < 0 ? this.times.length : next;
	        }
	
	        /**
	         * Remove any path segments older than the given amunt of time ago.
	         * Oldest times start at the back (from 0 up) of the path.
	         *
	         * @param  {Number} ago The amount of time ago (in ms) before which to trim.
	         * @param  {Number} now The current time.
	         */
	
	    }, {
	        key: 'trim',
	        value: function trim(ago) {
	            var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
	
	            var times = this.times;
	            var path = this.line.path;
	
	            var oldest = now - ago;
	
	            while (times[0] < oldest) {
	                times.shift();
	                path.shift();
	            }
	
	            return this.length;
	        }
	    }, {
	        key: 'length',
	        get: function get() {
	            return this.times.length;
	        }
	    }]);
	
	    return FlowLine;
	}();
	
	exports.default = FlowLine;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Line = exports.defaults = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Draw a line.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	/* global Float32Array */
	
	var _glGeometry = __webpack_require__(107);
	
	var _glGeometry2 = _interopRequireDefault(_glGeometry);
	
	var _polylineNormals = __webpack_require__(169);
	
	var _polylineNormals2 = _interopRequireDefault(_polylineNormals);
	
	var _glShader = __webpack_require__(56);
	
	var _glShader2 = _interopRequireDefault(_glShader);
	
	var _each = __webpack_require__(149);
	
	var _each2 = _interopRequireDefault(_each);
	
	var _index = __webpack_require__(176);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(177);
	
	var _index4 = _interopRequireDefault(_index3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var defaults = exports.defaults = function defaults() {
	    return {
	        shader: [_index2.default, _index4.default],
	        uniforms: {
	            color: [1, 1, 1, 1],
	            rad: 0.1,
	            viewSize: [1, 1]
	        },
	        attributes: null,
	        vertNum: 2,
	        vertSize: 2,
	        path: [],
	        closed: false
	    };
	};
	
	var Line = exports.Line = function () {
	    function Line(gl, options) {
	        var _this = this;
	
	        _classCallCheck(this, Line);
	
	        var params = _extends({}, defaults(), options);
	
	        this.gl = gl;
	        this.uniforms = params.uniforms;
	
	        this.shader = Array.isArray(params.shader) ? _glShader2.default.apply(undefined, [gl].concat(_toConsumableArray(params.shader))) : params.shader;
	
	        this.vertNum = params.vertNum;
	        this.vertSize = params.vertSize;
	
	        this.path = params.path || [];
	        this.closed = params.closed;
	
	        // Add any new attributes you like according to this structure.
	        // See `update`, `initAttributes`, `setAttributes`.
	        this.attributes = _extends({
	            position: {
	                data: null,
	                getSize: function getSize() {
	                    return _this.vertSize;
	                }
	            },
	            normal: {
	                data: null,
	                getSize: function getSize() {
	                    return _this.vertSize;
	                }
	            },
	            miter: {
	                data: null,
	                size: 1
	            }
	        }, params.attributes);
	
	        // Drawn properties, derived from the above on `update`.
	        this.drawnPath = this.drawnNormals = null;
	
	        this.geometry = (0, _glGeometry2.default)(gl);
	    }
	
	    _createClass(Line, [{
	        key: 'update',
	        value: function update() {
	            var _this2 = this;
	
	            var setAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.setAttributes;
	
	            this.drawnPath = this.path;
	            this.drawnNormals = (0, _polylineNormals2.default)(this.drawnPath, this.closed);
	
	            if (this.closed && this.path.length) {
	                this.drawnPath = this.drawnPath.concat(this.drawnPath[0]);
	                this.drawnNormals.push(this.drawnNormals[0]);
	            }
	
	            this.initAttributes();
	
	            // Caches
	            var drawnPath = this.drawnPath;
	            var drawnNormals = this.drawnNormals;
	            var attributes = this.attributes;
	            var vertNum = this.vertNum;
	            var values = {};
	            var index = {};
	
	            // Set up attribute data
	            for (var p = 0, pL = drawnNormals.length; p < pL; ++p) {
	                var pointNormal = drawnNormals[p];
	
	                values.point = drawnPath[p];
	                values.normal = pointNormal[0];
	                values.miter = pointNormal[1];
	
	                index.path = p;
	                index.point = p * vertNum;
	
	                for (var v = 0; v < vertNum; ++v) {
	                    index.vert = v;
	                    index.data = index.point + v;
	
	                    setAttributes(values, index, attributes, this);
	                }
	            }
	
	            // Bind to geometry attributes
	            (0, _each2.default)(function (attribute, name) {
	                return _this2.geometry.attr(name, attribute.data, { size: attribute.size });
	            }, attributes);
	
	            return this;
	        }
	    }, {
	        key: 'draw',
	        value: function draw() {
	            var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.gl.TRIANGLE_STRIP;
	
	            if (this.path.length > 0) {
	                var _geometry;
	
	                this.geometry.bind(this.shader);
	                Object.assign(this.shader.uniforms, this.uniforms);
	
	                for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                    rest[_key - 1] = arguments[_key];
	                }
	
	                (_geometry = this.geometry).draw.apply(_geometry, [mode].concat(rest));
	            }
	
	            return this;
	        }
	    }, {
	        key: 'initAttributes',
	        value: function initAttributes() {
	            var _this3 = this;
	
	            var num = this.drawnPath.length * this.vertNum;
	
	            (0, _each2.default)(function (attribute) {
	                // Cache any computed sizes.
	                if (attribute.getSize) {
	                    attribute.size = attribute.getSize(_this3);
	                }
	
	                // Initialise new data if needed.
	                var length = num * attribute.size;
	
	                if (!attribute.data || attribute.data.length !== length) {
	                    attribute.data = new Float32Array(length);
	                }
	            }, this.attributes);
	
	            return this;
	        }
	    }, {
	        key: 'setAttributes',
	        value: function setAttributes(values, index, attributes) {
	            attributes.position.data.set(values.point, index.data * attributes.position.size);
	
	            attributes.normal.data.set(values.normal, index.data * attributes.normal.size);
	
	            // Flip odd miters
	            attributes.miter.data[index.data] = values.miter * (index.data % 2 * 2 - 1);
	        }
	    }]);
	
	    return Line;
	}();
	
	exports.default = Line;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(170)
	
	var lineA = [0, 0]
	var lineB = [0, 0]
	var tangent = [0, 0]
	var miter = [0, 0]
	
	module.exports = function(points, closed) {
	    var curNormal = null
	    var out = []
	    if (closed) {
	        points = points.slice()
	        points.push(points[0])
	    }
	
	    var total = points.length
	    for (var i=1; i<total; i++) {
	        var last = points[i-1]
	        var cur = points[i]
	        var next = i<points.length-1 ? points[i+1] : null
	
	        util.direction(lineA, cur, last)
	        if (!curNormal)  {
	            curNormal = [0, 0]
	            util.normal(curNormal, lineA)
	        }
	
	        if (i === 1) //add initial normals
	            addNext(out, curNormal, 1)
	
	        if (!next) { //no miter, simple segment
	            util.normal(curNormal, lineA) //reset normal
	            addNext(out, curNormal, 1)
	        } else { //miter with last
	            //get unit dir of next line
	            util.direction(lineB, next, cur)
	
	            //stores tangent & miter
	            var miterLen = util.computeMiter(tangent, miter, lineA, lineB, 1)
	            addNext(out, miter, miterLen)
	        }
	    }
	
	    //if the polyline is a closed loop, clean up the last normal
	    if (points.length > 2 && closed) {
	        var last2 = points[total-2]
	        var cur2 = points[0]
	        var next2 = points[1]
	
	        util.direction(lineA, cur2, last2)
	        util.direction(lineB, next2, cur2)
	        util.normal(curNormal, lineA)
	        
	        var miterLen2 = util.computeMiter(tangent, miter, lineA, lineB, 1)
	        out[0][0] = miter.slice()
	        out[total-1][0] = miter.slice()
	        out[0][1] = miterLen2
	        out[total-1][1] = miterLen2
	        out.pop()
	    }
	
	    return out
	}
	
	function addNext(out, normal, length) {
	    out.push([[normal[0], normal[1]], length])
	}

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var add = __webpack_require__(171)
	var set = __webpack_require__(172)
	var normalize = __webpack_require__(173)
	var subtract = __webpack_require__(174)
	var dot = __webpack_require__(175)
	
	var tmp = [0, 0]
	
	module.exports.computeMiter = function computeMiter(tangent, miter, lineA, lineB, halfThick) {
	    //get tangent line
	    add(tangent, lineA, lineB)
	    normalize(tangent, tangent)
	
	    //get miter as a unit vector
	    set(miter, -tangent[1], tangent[0])
	    set(tmp, -lineA[1], lineA[0])
	
	    //get the necessary length of our miter
	    return halfThick / dot(miter, tmp)
	}
	
	module.exports.normal = function normal(out, dir) {
	    //get perpendicular
	    set(out, -dir[1], dir[0])
	    return out
	}
	
	module.exports.direction = function direction(out, a, b) {
	    //get unit dir of two lines
	    subtract(out, a, b)
	    normalize(out, out)
	    return out
	}

/***/ },
/* 171 */
/***/ function(module, exports) {

	module.exports = add
	
	/**
	 * Adds two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	function add(out, a, b) {
	    out[0] = a[0] + b[0]
	    out[1] = a[1] + b[1]
	    return out
	}

/***/ },
/* 172 */
/***/ function(module, exports) {

	module.exports = set
	
	/**
	 * Set the components of a vec2 to the given values
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} out
	 */
	function set(out, x, y) {
	    out[0] = x
	    out[1] = y
	    return out
	}

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = normalize
	
	/**
	 * Normalize a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to normalize
	 * @returns {vec2} out
	 */
	function normalize(out, a) {
	    var x = a[0],
	        y = a[1]
	    var len = x*x + y*y
	    if (len > 0) {
	        //TODO: evaluate use of glm_invsqrt here?
	        len = 1 / Math.sqrt(len)
	        out[0] = a[0] * len
	        out[1] = a[1] * len
	    }
	    return out
	}

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = subtract
	
	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	function subtract(out, a, b) {
	    out[0] = a[0] - b[0]
	    out[1] = a[1] - b[1]
	    return out
	}

/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = dot
	
	/**
	 * Calculates the dot product of two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	function dot(a, b) {
	    return a[0] * b[0] + a[1] * b[1]
	}

/***/ },
/* 176 */
/***/ function(module, exports) {

	module.exports = "/**\n * Drawing lines in a vertex shader, from https://mattdesl.svbtle.com/drawing-lines-is-hard#expanding-in-a-vertex-shader_2\n * Pushes a point along its normal by its radius.\n */\n\nprecision highp float;\n#define GLSLIFY 1\n\nattribute vec2 position;\n\nuniform vec2 viewSize;\n\nattribute vec2 normal;\nattribute float miter;\n\nuniform float rad;\n\nvarying float sdf;\n\n/**\n * Drawing lines, from https://mattdesl.svbtle.com/drawing-lines-is-hard#expanding-in-a-vertex-shader_2\n * Pushes a point along its normal by its radius, in the direction of miter.\n */\n\nvec2 expand(vec2 position, vec2 normal, float rad, float miter) {\n    return position+(normal*rad*miter);\n}\n\nvoid main() {\n    vec2 pos = expand(position, normal, rad, miter);\n\n    sdf = sign(miter);\n\n    gl_Position = vec4(pos*viewSize, 0.0, 1.0);\n}\n"

/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports = "/**\n * For a smooth line, check distance from line per-fragment.\n */\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform vec4 color;\n\nvarying float sdf;\n\nvoid main() {\n    gl_FragColor = vec4(color.rgb, color.a-abs(sdf));\n}\n"

/***/ },
/* 178 */
/***/ function(module, exports) {

	module.exports = "/**\n * Drawing lines in a vertex shader, from https://mattdesl.svbtle.com/drawing-lines-is-hard#expanding-in-a-vertex-shader_2\n * Pushes a point along its normal by its radius.\n */\n\nprecision highp float;\n#define GLSLIFY 1\n\nattribute vec2 position;\n\nuniform vec2 viewSize;\n\nattribute vec2 normal;\nattribute float miter;\n\nuniform float rad;\n\nuniform float speed;\nuniform float speedLimit;\n// uniform float time;\n\nattribute vec2 previous;\nattribute float time;\nattribute float dt;\n\nvarying vec4 values;\nvarying vec2 crest;\nvarying float sdf;\n\n/**\n * @requires {float} time The current time in ms\n */\n\nvec4 flow(vec2 vel) {\n    // Faster particles leave a greater influence (opacity).\n    // Linear interpolation - inaccurate for vectors, will it be OK without\n    // sudden turns, or do we need a per-fragment lookup?\n    return vec4(vel, time, length(vel));\n}\n\nvec4 flow(vec2 vel, float speedLimit) {\n    vec4 values = flow(vel);\n\n    return vec4(values.xyz, min(values.a/speedLimit, 1.0));\n}\n\n// #pragma glslify: flow = require(../flow/apply/screen, time = time, flowDecay = 0.001)\n\nvec2 perp(vec2 vec) {\n    return vec2(-vec.y, vec.x);\n}\n\nvec2 perp(vec2 vec, bool anti) {\n    return ((anti)? vec2(vec.y, -vec.x) : perp(vec));\n}\n\n/**\n * Drawing lines, from https://mattdesl.svbtle.com/drawing-lines-is-hard#expanding-in-a-vertex-shader_2\n * Pushes a point along its normal by its radius, in the direction of miter.\n */\n\nvec2 expand(vec2 position, vec2 normal, float rad, float miter) {\n    return position+(normal*rad*miter);\n}\n\nvoid main() {\n    sdf = sign(miter);\n\n    float rate = speed/max(dt, 1.0);\n\n    // @note For some reason, using these have different effects.\n    vec2 vel = (position-previous)*rate;\n    // vec2 vel = perp(normal, true)*length(position-previous)*rate;\n\n    values = flow(vel, speedLimit);\n\n    crest = normal*miter;\n\n    vec2 vert = expand(position, normal, rad*values.a, miter);\n\n    gl_Position = vec4(vert*viewSize, 0.0, 1.0);\n}\n"

/***/ },
/* 179 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\n// Where the crest limit is (0 is the path direction, 1 is perpendicular/away).\nuniform float crestShape;\n\nvarying vec4 values;\nvarying vec2 crest;\nvarying float sdf;\n\nvoid main() {\n    float d = abs(sdf);\n    float speed = length(values.rg)*(1.0-d);\n\n    vec2 vel = normalize(mix(values.rg, crest, d*crestShape))*speed;\n\n    gl_FragColor = vec4(vel, values.b, values.a-d);\n}\n"

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Player = exports.apply = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * A convenience class that wraps the timeline and tween utilities.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Players and timelines can be combined, nested, and played in parallel.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _timeline = __webpack_require__(181);
	
	var _timeline2 = _interopRequireDefault(_timeline);
	
	var _tween = __webpack_require__(186);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	var _each2 = __webpack_require__(149);
	
	var _each3 = _interopRequireDefault(_each2);
	
	var _reduce = __webpack_require__(162);
	
	var _reduce2 = _interopRequireDefault(_reduce);
	
	var _map = __webpack_require__(161);
	
	var _map2 = _interopRequireDefault(_map);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _apply(span) {
	    var out = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    if (span) {
	        Object.assign(out, span.apply);
	        (0, _tween2.default)(span, out);
	        (0, _each3.default)(function (f) {
	            return f(out, span);
	        }, span.call);
	    }
	
	    return out;
	}
	
	exports.apply = _apply;
	
	var Player = exports.Player = function () {
	    function Player(tracks) {
	        var outputs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	        _classCallCheck(this, Player);
	
	        // Allow the collection type to be defined elsewhere - any iterable.
	        this.tracks = tracks;
	
	        // These may be defined to receive the outputs of each corresponding
	        // track - also any iterable.
	        this.outputs = outputs;
	
	        // Convert them in-place into timelines.
	        this.add(this.tracks);
	    }
	
	    _createClass(Player, [{
	        key: 'add',
	        value: function add(tracks) {
	            (0, _map2.default)(function (track) {
	                return track instanceof _timeline2.default ? track : new _timeline2.default(track);
	            }, tracks, this.tracks);
	
	            return this;
	        }
	    }, {
	        key: 'import',
	        value: function _import(players) {
	            var _this = this;
	
	            (0, _each3.default)(function (player) {
	                return (0, _each3.default)(function (track) {
	                    return _this.add(track);
	                }, player.tracks);
	            }, players);
	
	            return this;
	        }
	    }, {
	        key: 'each',
	        value: function each(f) {
	            (0, _each3.default)(f, this.tracks);
	
	            return this;
	        }
	
	        // Apply the outputs of calling the given function on each track - into the
	        // `out` object if given, or the object in `outputs` corresponding to the
	        // track's key otherwise.
	
	    }, {
	        key: 'apply',
	        value: function apply(f, out) {
	            var _this2 = this;
	
	            this.each(function (track, key) {
	                for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	                    rest[_key - 2] = arguments[_key];
	                }
	
	                var trackOut = out || _this2.outputs[key] || (_this2.outputs[key] = {});
	
	                return _apply(f.apply(undefined, [track, key].concat(rest, [trackOut])), trackOut);
	            });
	
	            return this;
	        }
	    }, {
	        key: 'seek',
	        value: function seek(time, out) {
	            return this.apply(function (track) {
	                return track.seek(time);
	            }, out);
	        }
	    }, {
	        key: 'play',
	        value: function play(time, out) {
	            return this.apply(function (track) {
	                return track.play(time);
	            }, out);
	        }
	    }, {
	        key: 'playFrom',
	        value: function playFrom(time, start, out) {
	            return this.apply(function (track) {
	                return track.playFrom(time, start);
	            }, out);
	        }
	    }, {
	        key: 'frames',
	        value: function frames() {
	            var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	            return (0, _map2.default)(function (track) {
	                return track.frames;
	            }, this.tracks, out);
	        }
	
	        // @todo Finding a timelines, spans, frames by time
	
	        // Find a timeline by the frame closest to a given time
	        // trackAt(time, adjacent = -1) {
	        // }
	
	        // Find the frame closest to a given time
	        // frameAt(time, adjacent = -1) {
	        // }
	
	        // Find the frames within the time span of `start` till `duration`
	        // spanAt(duration, start = 0) {
	        // }
	
	
	        // Time
	
	    }, {
	        key: 'start',
	        value: function start() {
	            return (0, _reduce2.default)(function (start, track) {
	                return Math.min(track.start(), start);
	            }, this.tracks, null);
	        }
	    }, {
	        key: 'end',
	        value: function end() {
	            return (0, _reduce2.default)(function (end, track) {
	                return Math.min(track.end(), end);
	            }, this.tracks, null);
	        }
	    }, {
	        key: 'duration',
	        value: function duration() {
	            return (this.end() || 0) - (this.start() || 0);
	        }
	    }]);
	
	    return Player;
	}();
	
	exports.default = Player;

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Timeline = exports.changed = exports.within = exports.offset = exports.sort = exports.order = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _clamp = __webpack_require__(182);
	
	var _clamp2 = _interopRequireDefault(_clamp);
	
	var _frame2 = __webpack_require__(183);
	
	var _frame3 = _interopRequireDefault(_frame2);
	
	var _joinCurve = __webpack_require__(184);
	
	var _joinCurve2 = _interopRequireDefault(_joinCurve);
	
	var _each = __webpack_require__(149);
	
	var _each2 = _interopRequireDefault(_each);
	
	var _filter = __webpack_require__(185);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _iterable = __webpack_require__(150);
	
	var _iterable2 = _interopRequireDefault(_iterable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * A timeline, time-sorted keyframes compatible with (but not dependent on)
	                                                                                                                                                                                                     * `./tween`.
	                                                                                                                                                                                                     * Also uses ease-joining from `./join-curve`.
	                                                                                                                                                                                                     */
	
	var order = exports.order = function order(a, b) {
	    return a.time > b.time ? 1 : -1;
	};
	var sort = exports.sort = function sort(frames) {
	    return frames.sort(order);
	};
	
	var offset = exports.offset = function offset(a, b, time) {
	    var min = Math.min(a.time, b.time);
	
	    return (0, _clamp2.default)((time - min) / (Math.max(a.time, b.time) - min) || 0, 0, 1);
	};
	
	var within = exports.within = function within(a, b, time) {
	    return Math.min(a.time, b.time) < time && time <= Math.max(a.time, b.time);
	};
	
	var changed = exports.changed = function changed(past, next) {
	    return past === next ? null : (0, _iterable2.default)(past).length && (0, _iterable2.default)(next).length ? (0, _filter2.default)(function (v, k) {
	        return v !== past[k];
	    }, next) : next;
	};
	
	var accumulate = function accumulate(frame) {
	    var out = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    out.apply = Object.assign(out.apply || {}, frame.to);
	
	    if (frame.call && frame.call.length) {
	        var _ref;
	
	        (_ref = out.call || (out.call = [])).push.apply(_ref, _toConsumableArray(frame.call));
	    }
	
	    return out;
	};
	
	/**
	 * An always time-sorted array of frames.
	 */
	
	var Timeline = exports.Timeline = function () {
	    function Timeline(frames) {
	        var infinite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	        var rewind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	        var symmetric = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	
	        _classCallCheck(this, Timeline);
	
	        this.frames = this.setup(frames, infinite);
	
	        // The playhead: time, current in-between position, and pair of frames
	        // on the timeline (if valid).
	        this.time = 0;
	        this.gap = -1;
	        this.span = undefined;
	
	        /**
	         * If symmetric, the eases play the same forwards as backwards; the
	         * later frame's ease is used.
	         * If not, frames are reached by the same ease, forwards or backwards;
	         * the destination frame's ease is used.
	         */
	        this.symmetric = symmetric;
	
	        this.infinite = infinite;
	        this.rewind = rewind;
	    }
	
	    // Keyframes - changing and ordering
	
	    _createClass(Timeline, [{
	        key: 'setup',
	        value: function setup() {
	            var frames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var infinite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	            // Sandwich between Infinite end frames if needed, to make the timeline
	            // always playable
	            return this.frames = sort(infinite ? [{ time: -Infinity }].concat(_toConsumableArray(frames), [{ time: Infinity }]) : [].concat(_toConsumableArray(frames)));
	        }
	    }, {
	        key: 'merge',
	        value: function merge(frames) {
	            var _this = this;
	
	            return (0, _each2.default)(function (frame) {
	                return _this.add(frame);
	            }, frames);
	        }
	    }, {
	        key: 'insertFrame',
	        value: function insertFrame(f, frame) {
	            this.frames.splice(f, 0, frame);
	
	            return this;
	        }
	
	        // Adding frames (and creating, if needed)
	
	    }, {
	        key: 'add',
	        value: function add() {
	            var adding = _frame3.default.apply(undefined, arguments);
	            var f = this.indexOf(adding);
	
	            this.insertFrame(f, adding);
	
	            return f;
	        }
	
	        // Adds a null frame before the added frame, to define the start point of
	        // its transition.
	        // Note that this will only be correct if the position of this frame or any
	        // within `duration` time before don't change.
	
	    }, {
	        key: 'addSpan',
	        value: function addSpan(duration) {
	            for (var _len = arguments.length, frame = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                frame[_key - 1] = arguments[_key];
	            }
	
	            var f = this.add.apply(this, frame);
	            var t0 = this.frames[f].time - duration;
	            var past = this.frames[f - 1];
	
	            if (duration && (!past || past.time < t0)) {
	                this.add(null, t0);
	            }
	
	            return f;
	        }
	
	        // Playback - changing state
	
	    }, {
	        key: 'seek',
	        value: function seek(time) {
	            if (this.valid() && within(this.span.past, this.span.next, time)) {
	                this.span.t = offset(this.span.past, this.span.next, time);
	            } else {
	                this.setTime(time);
	            }
	
	            return this.span;
	        }
	
	        // Same as above, but accumulates any skipped frames into the `span`'s `b`,
	        // if we're dealing with an animation of multiple properties.
	
	    }, {
	        key: 'play',
	        value: function play(time) {
	            var gap0 = Math.max(this.gap, 0.5);
	
	            var span = this.seek(time);
	
	            if (this.valid()) {
	                var accumulated = {};
	
	                var passed = this.gap - gap0;
	                var skipped = Math.abs(passed);
	                var dir = Math.sign(passed);
	                var onwards = (this.reverse ? -dir : dir) > 0;
	
	                // Accumulate properties of any skipped frames
	                if (skipped > 0 && onwards) {
	                    var side = dir < 0 ? Math.floor : Math.ceil;
	
	                    for (var f = 0; f < skipped; ++f) {
	                        accumulate(this.frames[side(gap0 + f * dir)], accumulated);
	                    }
	                }
	
	                span = _extends({}, span, accumulated);
	            }
	
	            return span;
	        }
	    }, {
	        key: 'playFrom',
	        value: function playFrom() {
	            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.time;
	            var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	            this.seek(start);
	
	            return this.play(time);
	        }
	    }, {
	        key: 'setTime',
	        value: function setTime(time) {
	            var gap = this.gapAt(time);
	
	            this.span = this.spanGapAt(time, gap, this.span);
	            this.gap = gap;
	            this.time = time;
	
	            return this;
	        }
	
	        // Querying state, retrieving frames
	
	    }, {
	        key: 'indexOf',
	        value: function indexOf(frame) {
	            var next = this.frames.findIndex(function (other) {
	                return order(other, frame) > 0;
	            });
	
	            return next < 0 ? this.frames.length : next;
	        }
	    }, {
	        key: 'gapAt',
	        value: function gapAt(time) {
	            if (this.frames.length < 2) {
	                return -1;
	            } else {
	                var next = this.frames.findIndex(function (frame) {
	                    return frame.time >= time;
	                });
	
	                // Always constrain the gap within the timeline, if the timeline is
	                // valid (has 2 or more frames).
	                return (next < 0 ? this.frames.length - 1 : Math.max(next, 1)) - 0.5;
	            }
	        }
	    }, {
	        key: 'spanGapAt',
	        value: function spanGapAt(time) {
	            var gap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.gapAt(time);
	            var out = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	            if (gap >= 0) {
	                var past = this.frames[Math.floor(gap)];
	                var next = this.frames[Math.ceil(gap)];
	                var ease = next.ease;
	
	                // Swap if we're going in reverse
	                if (this.rewind) {
	                    if (!this.symmetric) {
	                        ease = past.ease;
	                    }
	
	                    var swap = past;
	
	                    past = next;
	                    next = swap;
	                }
	
	                out.past = past;
	                out.next = next;
	                out.a = past.to;
	                out.b = next.to;
	                out.t = offset(past, next, time);
	                out.ease = ease;
	            } else {
	                out = undefined;
	            }
	
	            return out;
	        }
	
	        // Removing frames
	
	    }, {
	        key: 'splice',
	        value: function splice() {
	            var _frames;
	
	            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	            var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	            var start = index;
	            var remove = num;
	
	            if (this.infinite) {
	                // Clamp `start` *between* the 2 Infinite end frames
	                var length = Math.max(0, this.frames.length - 2);
	                var i = index < 0 ? length + index : index;
	
	                start = Math.min(length, Math.max(1, i));
	
	                // Clamp `remove` below the last Infinite end frame, accommodating
	                // any shift in the index clamping above
	                remove = Math.min(num - Math.max(start - i, 0), length - start);
	            }
	
	            for (var _len2 = arguments.length, adding = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	                adding[_key2 - 2] = arguments[_key2];
	            }
	
	            return (_frames = this.frames).splice.apply(_frames, [start, remove].concat(adding));
	        }
	
	        // Remove the frame at the given index
	
	    }, {
	        key: 'spliceIndex',
	        value: function spliceIndex(index) {
	            for (var _len3 = arguments.length, adding = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	                adding[_key3 - 1] = arguments[_key3];
	            }
	
	            return this.splice.apply(this, [index, 1].concat(adding))[0];
	        }
	
	        // Remove a frame adjacent to the given time (this accounts for `reverse` in
	        // getting the adjacent side, so `-1` is always `previous` to the time)
	
	    }, {
	        key: 'spliceAt',
	        value: function spliceAt(time) {
	            var adjacent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
	
	            var gap = this.gapAt(time);
	            var direction = (this.reverse ? -1 : 1) * adjacent;
	            var index = (direction > 0 ? Math.ceil : Math.floor)(gap);
	
	            for (var _len4 = arguments.length, adding = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
	                adding[_key4 - 2] = arguments[_key4];
	            }
	
	            return this.splice.apply(this, [index, 1].concat(adding))[0];
	        }
	
	        // Remove the frames within the time span of `start` till `duration`
	
	    }, {
	        key: 'spliceSpan',
	        value: function spliceSpan(duration) {
	            var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	            var a = this.gapAt(start);
	            var b = this.gapAt(start + duration);
	            var i = Math.min(a, b);
	
	            for (var _len5 = arguments.length, adding = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
	                adding[_key5 - 2] = arguments[_key5];
	            }
	
	            return this.splice.apply(this, [Math.ceil(i), Math.floor(Math.max(a, b) - i)].concat(adding));
	        }
	
	        // Joining new frames to those before
	
	    }, {
	        key: 'to',
	        value: function to() {
	            this.add.apply(this, arguments);
	
	            return this;
	        }
	    }, {
	        key: 'easeTo',
	        value: function easeTo(align) {
	            for (var _len6 = arguments.length, frame = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
	                frame[_key6 - 1] = arguments[_key6];
	            }
	
	            this.easeJoin(this.add.apply(this, frame), align);
	
	            return this;
	        }
	    }, {
	        key: 'smoothTo',
	        value: function smoothTo() {
	            for (var _len7 = arguments.length, frame = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	                frame[_key7] = arguments[_key7];
	            }
	
	            return this.easeTo.apply(this, [1].concat(frame));
	        }
	    }, {
	        key: 'flipTo',
	        value: function flipTo() {
	            for (var _len8 = arguments.length, frame = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	                frame[_key8] = arguments[_key8];
	            }
	
	            return this.easeTo.apply(this, [-1].concat(frame));
	        }
	    }, {
	        key: 'over',
	        value: function over(duration) {
	            for (var _len9 = arguments.length, frame = Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
	                frame[_key9 - 1] = arguments[_key9];
	            }
	
	            this.addSpan.apply(this, [duration].concat(frame));
	
	            return this;
	        }
	    }, {
	        key: 'easeOver',
	        value: function easeOver(duration, align) {
	            for (var _len10 = arguments.length, frame = Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
	                frame[_key10 - 2] = arguments[_key10];
	            }
	
	            this.easeJoin(this.addSpan.apply(this, [duration].concat(frame)), align);
	
	            return this;
	        }
	    }, {
	        key: 'smoothOver',
	        value: function smoothOver(duration) {
	            for (var _len11 = arguments.length, frame = Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
	                frame[_key11 - 1] = arguments[_key11];
	            }
	
	            return this.easeOver.apply(this, [duration, 1].concat(frame));
	        }
	    }, {
	        key: 'flipOver',
	        value: function flipOver(duration) {
	            for (var _len12 = arguments.length, frame = Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
	                frame[_key12 - 1] = arguments[_key12];
	            }
	
	            return this.easeOver.apply(this, [duration, -1].concat(frame));
	        }
	
	        // If there's a previous frame, ease smoothly from it.
	
	    }, {
	        key: 'easeJoin',
	        value: function easeJoin(f, align) {
	            var ease = null;
	
	            if (f > 0) {
	                var _frame = this.frames[f];
	
	                ease = _frame.ease && _frame.ease.length ? _frame.ease : [0, 1];
	
	                ease.splice(1, 0, (0, _joinCurve2.default)(this.frames[f - 1].ease, align));
	                _frame.ease = ease;
	            }
	
	            return ease;
	        }
	
	        // Etc
	
	    }, {
	        key: 'valid',
	        value: function valid() {
	            var gap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.gap;
	            var span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.span;
	
	            return gap > 0 && span;
	        }
	
	        // Returns the minimum amount of changed data for a given frame, by diffing
	        // the frame with the ones adjacent.
	        // Note that this will only be correct if the adjacent frames don't change
	        // later.
	        // @todo Split this out to minimise all the frames.
	
	    }, {
	        key: 'minFrame',
	        value: function minFrame() {
	            var full = _frame3.default.apply(undefined, arguments);
	            var f = this.indexOf(full);
	
	            var past = this.frames[f - 1];
	            var diffPast = past && past.to ? changed(past, full.to) : null;
	
	            var next = this.frames[f + 1];
	            var diffNext = next && next.to ? changed(next, full.to) : null;
	
	            var diff = (0, _iterable2.default)(diffPast).length || (0, _iterable2.default)(diffNext).length ? _extends({}, diffPast, diffNext) : diffPast;
	
	            return _extends({}, full, {
	                to: diff
	            });
	        }
	
	        // Time
	
	    }, {
	        key: 'start',
	        value: function start() {
	            return this.frames.length ? this.frames[0].time : null;
	        }
	    }, {
	        key: 'end',
	        value: function end() {
	            return this.frames.length ? this.frames[this.frames.length - 1].time : null;
	        }
	    }, {
	        key: 'duration',
	        value: function duration() {
	            return (this.end() || 0) - (this.start() || 0);
	        }
	    }]);
	
	    return Timeline;
	}();
	
	exports.default = Timeline;

/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports = clamp
	
	function clamp(value, min, max) {
	  return min < max
	    ? (value < min ? min : value > max ? max : value)
	    : (value < max ? max : value > min ? min : value)
	}


/***/ },
/* 183 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.frame = frame;
	// Can't access `arguments` if using arrow function.
	function frame(to, time, ease, call) {
	    return arguments.length > 1 ? { to: to, time: time, ease: ease, call: call } : to;
	}
	
	exports.default = frame;

/***/ },
/* 184 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Reflect transitions between curves.
	 * Set the first control point of the next curve to be the colinear reflection
	 * of the last control point of the last curve in its final point.
	 */
	var join = exports.join = function join(curve) {
	  var align = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	  return !curve || curve.length === 0 ? 0 : curve.length === 1 ? curve[0] : (curve[curve.length - 1] - curve[curve.length - 2]) * align;
	};
	
	exports.default = join;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.filter = exports.filterList = undefined;
	
	var _reduce = __webpack_require__(162);
	
	var _iterable = __webpack_require__(150);
	
	var _iterable2 = _interopRequireDefault(_iterable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var filterList = exports.filterList = function filterList(f, x) {
	    var out = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	    return (0, _reduce.reduceList)(function (acc, v, i) {
	        if (f(v, i, x)) {
	            acc.push(v);
	        }
	
	        return acc;
	    }, x, out);
	};
	
	/**
	 * Map any type of object.
	 * Same as above signature, but iterates over all the given object's own
	 * properties.
	 */
	var filter = exports.filter = function filter(f, any) {
	    var out = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	    return (0, _reduce.reduceList)(function (acc, k, i, keys) {
	        var v = any[k];
	
	        if (f(v, k, any, i, keys)) {
	            (acc || (acc = {}))[k] = v;
	        }
	
	        return acc;
	    }, (0, _iterable2.default)(any), out);
	};
	
	exports.default = filter;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.tween = exports.tweenProps = exports.tweenValue = undefined;
	
	var _lerp = __webpack_require__(187);
	
	var _lerp2 = _interopRequireDefault(_lerp);
	
	var _bezier = __webpack_require__(188);
	
	var _bezier2 = _interopRequireDefault(_bezier);
	
	var _isNumber = __webpack_require__(164);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	var _map = __webpack_require__(161);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tweenable = function tweenable(k, values, defaults) {
	    var v = values && values[k];
	
	    return (0, _isNumber2.default)(v) ? v : defaults && defaults[k];
	};
	
	/**
	 * Animating between 2 given numbers is just lerping, using `bezier.curve` with
	 * the ease curve if given.
	 */
	var tweenValue = exports.tweenValue = function tweenValue(a, b, t, ease) {
	    return a === b || !(0, _isNumber2.default)(a) ? b : (0, _lerp2.default)(a, b, ease ? (0, _bezier2.default)(ease, t) : t);
	};
	
	/**
	 * A wrapper for the above that maps number properties from 2 objects into
	 * tweened numbers in a given output object.
	 */
	var tweenProps = exports.tweenProps = function tweenProps(a, b, t, ease) {
	    var out = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	    return b ? (0, _map.map)(function (v, k) {
	        var va = tweenable(k, a, out);
	        var vb = tweenable(k, b, out);
	
	        return (0, _isNumber2.default)(va) && (0, _isNumber2.default)(vb) ? tweenValue(va, vb, t, ease) : t < 1 ? va : vb;
	    }, b, out) : out;
	};
	
	/**
	 * Generic wrapper of the above, handling the cases for both numbers and objects
	 * of numbers, to pass to the above tweens.
	 * Also handles an object syntax, where the first argument is an object of the
	 * named arguments for the above functions, and the (optional) second argument
	 * is the output object.
	 */
	var tween = exports.tween = function tween(a, b) {
	    for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        rest[_key - 2] = arguments[_key];
	    }
	
	    return rest.length ? ((0, _isNumber2.default)(b) ? tweenValue : tweenProps).apply(undefined, [a, b].concat(rest)) : tween(a.a, a.b, a.t, a.ease, b);
	};
	
	exports.default = tween;

/***/ },
/* 187 */
/***/ function(module, exports) {

	function lerp(v0, v1, t) {
	    return v0*(1-t)+v1*t
	}
	module.exports = lerp

/***/ },
/* 188 */
/***/ function(module, exports) {

	var cache = {
	    '1': bezier1
	  , '2': bezier2
	  , '3': bezier3
	  , '4': bezier4
	}
	
	module.exports = neat
	module.exports.prepare = prepare
	
	function neat(arr, t) {
	  return prepare(arr.length)(arr, t)
	}
	
	function prepare(pieces) {
	  pieces = +pieces|0
	  if (!pieces) throw new Error('Cannot create a interpolator with no elements')
	  if (cache[pieces]) return cache[pieces]
	
	  var fn = ['var ut = 1 - t', '']
	
	  var n = pieces
	  while (n--) {
	    for (var j = 0; j < n; j += 1) {
	      if (n+1 === pieces) {
	        fn.push('var p'+j+' = arr['+j+'] * ut + arr['+(j+1)+'] * t')
	      } else
	      if (n > 1) {
	        fn.push('p'+j+' = p'+j+' * ut + p'+(j+1)+' * t')
	      } else {
	        fn.push('return p'+j+' * ut + p'+(j+1)+' * t')
	      }
	    }
	    if (n > 1) fn.push('')
	  }
	
	  fn = [
	    'return function bezier'+pieces+'(arr, t) {'
	    , fn.map(function(s) { return '  ' + s }).join('\n')
	    , '}'
	  ].join('\n')
	
	  return Function(fn)()
	}
	
	//
	// Including the first four degrees
	// manually - there's a slight performance penalty
	// to generated code. It's outweighed by
	// the gains of the optimisations, but always
	// helps to cover the most common cases :)
	//
	
	function bezier1(arr) {
	  return arr[0]
	}
	
	function bezier2(arr, t) {
	  return arr[0] + (arr[1] - arr[0]) * t
	}
	
	function bezier3(arr, t) {
	  var ut = 1 - t
	  return (arr[0] * ut + arr[1] * t) * ut + (arr[1] * ut + arr[2] * t) * t
	}
	
	function bezier4(arr, t) {
	  var ut = 1 - t
	  var a1 = arr[1] * ut + arr[2] * t
	  return ((arr[0] * ut + arr[1] * t) * ut + a1 * t) * ut + (a1 * ut + (arr[2] * ut + arr[3] * t) * t) * t
	}


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Blend = exports.defaults = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Blend textures into a target
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _glShader = __webpack_require__(56);
	
	var _glShader2 = _interopRequireDefault(_glShader);
	
	var _map = __webpack_require__(161);
	
	var _ = __webpack_require__(122);
	
	var _2 = _interopRequireDefault(_);
	
	var _index = __webpack_require__(124);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(190);
	
	var _index4 = _interopRequireDefault(_index3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var defaults = exports.defaults = function defaults() {
	    return {
	        shader: [_index2.default, _index4.default],
	        views: [],
	        alphas: [],
	        resolution: [1, 1]
	    };
	};
	
	var Blend = exports.Blend = function () {
	    function Blend(gl, options) {
	        _classCallCheck(this, Blend);
	
	        this.gl = gl;
	
	        var params = Object.assign(defaults(), options);
	
	        this.shader = Array.isArray(params.shader) ? _glShader2.default.apply(undefined, [this.gl].concat(_toConsumableArray(params.shader))) : params.shader;
	
	        this.screen = new _2.default(gl);
	
	        this.views = params.views;
	        this.alphas = params.alphas;
	        this.resolution = params.resolution;
	
	        this.uniforms = {};
	    }
	
	    _createClass(Blend, [{
	        key: 'draw',
	        value: function draw(target) {
	            var resolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : target && target.shape;
	            var clear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	            if (target) {
	                target.bind();
	            }
	
	            if (resolution) {
	                this.gl.viewport(0, 0, resolution[0], resolution[1]);
	                this.resolution = resolution;
	            }
	
	            if (clear) {
	                this.gl.clear(this.gl.COLOR_BUFFER_BIT);
	            }
	
	            this.shader.bind();
	
	            Object.assign(this.shader.uniforms, this.uniforms, {
	                views: (0, _map.mapList)(function (view, v) {
	                    return (view.color ? view.color[0] : view).bind(v);
	                }, this.views, this.uniforms.views),
	                alphas: this.alphas,
	                resolution: this.resolution
	            });
	
	            this.screen.render();
	
	            if (target) {
	                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
	            }
	        }
	    }]);
	
	    return Blend;
	}();
	
	exports.default = Blend;

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nconst int numViews = 2;\n\nvec4 preAlpha(vec3 color, float alpha) {\n    return vec4(color.rgb*alpha, alpha);\n}\n\nvec4 preAlpha(vec4 color) {\n    return preAlpha(color.rgb, color.a);\n}\n\nvec4 blend(vec4 sum, vec4 color, float alpha) {\n    return sum+preAlpha(color.rgb, color.a*alpha);\n}\n\n/**\n * Color summation from multiple views, each blending with a global alpha.\n *\n * @requires {float} numViews The number of source views to blend together\n * @requires {function} blend A function blending a source buffer into a sum\n */\n\nuniform sampler2D views[numViews];\nuniform float alphas[numViews];\nuniform vec2 resolution;\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy/resolution;\n\n    // Accumulate colors\n    \n    vec4 sum = vec4(0.0);\n\n    for(int i = 0; i < numViews; ++i) {\n        vec4 color = texture2D(views[i], uv);\n\n        // Pre-multiplied alpha so they don't cross over\n        sum = blend(sum, color, alphas[i]);\n    }\n\n    gl_FragColor = sum;\n}\n\n"

/***/ },
/* 191 */
/***/ function(module, exports) {

	module.exports = "/**\n * A vignette hash blur\n * @todo Make the `const`s here into `uniform`s.\n */\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D view;\nuniform vec2 resolution;\nuniform float time;\n\nvec3 sampler(vec2 uv) {\n    return texture2D(view, uv).rgb;\n}\n\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\n#ifndef TAU\n  #define TAU 6.28318530718\n#endif\n\n//Use last part of hash function to generate new random radius and angle\nvec2 mult(inout vec2 r) {\n  r = fract(r * vec2(12.9898,78.233));\n  return sqrt(r.x + .001) * vec2(sin(r.y * TAU), cos(r.y * TAU));\n}\n\nvec3 blur(vec2 uv, float radius, float aspect, float offset) {\n  vec2 circle = vec2(radius);\n  circle.x *= aspect;\n  vec2 rnd = vec2(random(vec2(uv + offset)));\n\n  vec3 acc = vec3(0.0);\n  for (int i = 0; i < 20; i++) {\n    acc += sampler(uv + circle * mult(rnd)).xyz;\n  }\n  return acc / float(20);\n}\n\nvec3 blur(vec2 uv, float radius, float aspect) {\n  return blur(uv, radius, aspect, 0.0);\n}\n\nvec3 blur(vec2 uv, float radius) {\n  return blur(uv, radius, 1.0);\n}\n\n/**\n * Adapted from `bezier`.\n */\n\nfloat bezier(vec2 cp, float t) {\n    return cp.x+(cp.y-cp.x)*t;\n}\n\nfloat bezier(vec3 cp, float t) {\n    float ut = 1.0-t;\n\n    return (cp.x*ut+cp.y*t)*ut+(cp.y*ut+cp.z*t)*t;\n}\n\nfloat bezier(vec4 cp, float t) {\n    float ut = 1.0-t;\n    float a1 = cp.y*ut+cp.z*t;\n\n    return ((cp.x*ut+cp.y*t)*ut+a1*t)*ut+(a1*ut+(cp.z*ut+cp.w*t)*t)*t;\n}\n\n// @todo Remove the `1.0-` here?\nfloat amount_0(vec2 point, vec2 mid, float limit) {\n    return min(1.0-(length(point-mid)/limit), 1.0);\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit) {\n    return max(0.0, amount_0(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, float curve) {\n    return max(0.0, curve*amount_0(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec2 curve) {\n    return max(0.0, bezier(curve, amount_0(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec3 curve) {\n    return max(0.0, bezier(curve, amount_0(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec4 curve) {\n    return max(0.0, bezier(curve, amount_0(point, mid, limit)));\n}\n\nconst vec3 falloff = vec3(0.0, 1.0, 1.0);\nconst vec2 mid = vec2(0.5);\nconst float limit = 0.5;\n\nconst float radius = 3.0;\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy/resolution;\n    float texel = 1.0/min(resolution.x, resolution.y);\n    float amount = (1.0-vignette(uv, mid, limit, falloff))*texel;\n    float aspect = resolution.x/resolution.y;\n    float jitter = mod(time, 20.0);\n\n    gl_FragColor = vec4(blur(uv, radius*amount, aspect, jitter),\n            texture2D(view, uv).a);\n}\n"

/***/ },
/* 192 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Returns a wrap of the function `f`, which accumulates the arguments of each
	 * time it's called; if called with no arguments, it returns `f` called with all
	 * the previously accumulated arguments.
	 */
	var part = exports.part = function part(f) {
	    return function () {
	        for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	            rest[_key] = arguments[_key];
	        }
	
	        return rest.length ? part(function () {
	            for (var _len2 = arguments.length, next = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                next[_key2] = arguments[_key2];
	            }
	
	            return f.apply(undefined, rest.concat(next));
	        }) : f();
	    };
	};
	
	/**
	 * Returns a wrap of the function `f`, which accumulates the arguments of each
	 * time it's called, until the total number of arguments meets the length
	 * `arity`.
	 */
	var curry = exports.curry = function curry(f) {
	    var arity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : f.length;
	    return function () {
	        for (var _len3 = arguments.length, rest = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	            rest[_key3] = arguments[_key3];
	        }
	
	        return arity > rest.length ? curry(function () {
	            for (var _len4 = arguments.length, next = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	                next[_key4] = arguments[_key4];
	            }
	
	            return f.apply(undefined, rest.concat(next));
	        }, arity - rest.length) : f.apply(undefined, rest);
	    };
	};
	
	exports.default = part;

/***/ }
/******/ ]);
//# sourceMappingURL=tendrils.js.map