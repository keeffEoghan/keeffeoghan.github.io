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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(536);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * PEP v0.4.3 | https://github.com/jquery/PEP
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
	    e.twist = inDict.twist || 0;
	    e.tangentialPressure = inDict.tangentialPressure || 0;
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
	
	      // Order of conditions due to document.contains() missing in IE.
	      while (target !== document && !target.contains(event.relatedTarget)) {
	        targets.push(target);
	        target = target.parentNode;
	
	        // Touch: Do not propagate if node is detached.
	        if (!target) {
	          return;
	        }
	      }
	      if (propagateDown) {
	        targets.reverse();
	      }
	      targets.forEach(function(target) {
	        event.target = target;
	        fn.call(this, event);
	      }, this);
	    },
	    setCapture: function(inPointerId, inTarget, skipDispatch) {
	      if (this.captureInfo[inPointerId]) {
	        this.releaseCapture(inPointerId, skipDispatch);
	      }
	
	      this.captureInfo[inPointerId] = inTarget;
	      this.implicitRelease = this.releaseCapture.bind(this, inPointerId, skipDispatch);
	      document.addEventListener('pointerup', this.implicitRelease);
	      document.addEventListener('pointercancel', this.implicitRelease);
	
	      var e = new PointerEvent('gotpointercapture');
	      e.pointerId = inPointerId;
	      e._target = inTarget;
	
	      if (!skipDispatch) {
	        this.asyncDispatchEvent(e);
	      }
	    },
	    releaseCapture: function(inPointerId, skipDispatch) {
	      var t = this.captureInfo[inPointerId];
	      if (!t) {
	        return;
	      }
	
	      this.captureInfo[inPointerId] = undefined;
	      document.removeEventListener('pointerup', this.implicitRelease);
	      document.removeEventListener('pointercancel', this.implicitRelease);
	
	      var e = new PointerEvent('lostpointercapture');
	      e.pointerId = inPointerId;
	      e._target = t;
	
	      if (!skipDispatch) {
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
	      e.width = (inTouch.radiusX || inTouch.webkitRadiusX || 0) * 2;
	      e.height = (inTouch.radiusY || inTouch.webkitRadiusY || 0) * 2;
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
	        Object.defineProperty(window.navigator, 'maxTouchPoints', {
	          value: 0,
	          enumerable: true
	        });
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
	  var h;
	  function assertActive(id) {
	    if (!dispatcher.pointermap.has(id)) {
	      var error = new Error('InvalidPointerId');
	      error.name = 'InvalidPointerId';
	      throw error;
	    }
	  }
	  function assertConnected(elem) {
	    var parent = elem.parentNode;
	    while (parent && parent !== elem.ownerDocument) {
	      parent = parent.parentNode;
	    }
	    if (!parent) {
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
	        dispatcher.setCapture(pointerId, this, true);
	        this.msSetPointerCapture(pointerId);
	      }
	    };
	    r = function(pointerId) {
	      assertActive(pointerId);
	      dispatcher.releaseCapture(pointerId, true);
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
	      dispatcher.releaseCapture(pointerId);
	    };
	  }
	  h = function hasPointerCapture(pointerId) {
	    return !!dispatcher.captureInfo[pointerId];
	  };
	
	  function applyPolyfill$1() {
	    if (window.Element && !Element.prototype.setPointerCapture) {
	      Object.defineProperties(Element.prototype, {
	        'setPointerCapture': {
	          value: s
	        },
	        'releasePointerCapture': {
	          value: r
	        },
	        'hasPointerCapture': {
	          value: h
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

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

	var raf = __webpack_require__(337)
	
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


/***/ }),
/* 337 */
/***/ (function(module, exports) {

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


/***/ }),
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */
/***/ (function(module, exports) {

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


/***/ }),
/* 351 */,
/* 352 */,
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(354);
	exports.encode = exports.stringify = __webpack_require__(355);


/***/ }),
/* 354 */
/***/ (function(module, exports) {

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


/***/ }),
/* 355 */
/***/ (function(module, exports) {

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
	    }).filter(Boolean).join(sep);
	
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ }),
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */
/***/ (function(module, exports) {

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


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

	var debounce = __webpack_require__(365),
	    isObject = __webpack_require__(366);
	
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


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(366),
	    now = __webpack_require__(367),
	    toNumber = __webpack_require__(370);
	
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
	        timeWaiting = wait - timeSinceLastCall;
	
	    return maxing
	      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
	      : timeWaiting;
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
	        clearTimeout(timerId);
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


/***/ }),
/* 366 */
/***/ (function(module, exports) {

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


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(368);
	
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


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(369);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ }),
/* 369 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTrim = __webpack_require__(371),
	    isObject = __webpack_require__(366),
	    isSymbol = __webpack_require__(373);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
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
	  value = baseTrim(value);
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

	var trimmedEndIndex = __webpack_require__(372);
	
	/** Used to match leading whitespace. */
	var reTrimStart = /^\s+/;
	
	/**
	 * The base implementation of `_.trim`.
	 *
	 * @private
	 * @param {string} string The string to trim.
	 * @returns {string} Returns the trimmed string.
	 */
	function baseTrim(string) {
	  return string
	    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
	    : string;
	}
	
	module.exports = baseTrim;


/***/ }),
/* 372 */
/***/ (function(module, exports) {

	/** Used to match a single whitespace character. */
	var reWhitespace = /\s/;
	
	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
	 * character of `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the index of the last non-whitespace character.
	 */
	function trimmedEndIndex(string) {
	  var index = string.length;
	
	  while (index-- && reWhitespace.test(string.charAt(index))) {}
	  return index;
	}
	
	module.exports = trimmedEndIndex;


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(374),
	    isObjectLike = __webpack_require__(378);
	
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


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(375),
	    getRawTag = __webpack_require__(376),
	    objectToString = __webpack_require__(377);
	
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
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(368);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(375);
	
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


/***/ }),
/* 377 */
/***/ (function(module, exports) {

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


/***/ }),
/* 378 */
/***/ (function(module, exports) {

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


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(380);
	
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

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var objectAssign = __webpack_require__(381);
	
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
	// NB: The URL to the CommonJS spec is kept just for tradition.
	//     node-assert has evolved a lot since then, both in API and behavior.
	
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
	
	var util = __webpack_require__(382);
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
	
	// Expose a strict only variant of assert
	function strict(value, message) {
	  if (!value) fail(value, true, message, '==', strict);
	}
	assert.strict = objectAssign(strict, assert, {
	  equal: assert.strictEqual,
	  deepEqual: assert.deepStrictEqual,
	  notEqual: assert.notStrictEqual,
	  notDeepEqual: assert.notDeepStrictEqual
	});
	assert.strict.strict = assert.strict;
	
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    if (hasOwn.call(obj, key)) keys.push(key);
	  }
	  return keys;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 381 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

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
	
	exports.isBuffer = __webpack_require__(384);
	
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
	exports.inherits = __webpack_require__(385);
	
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(383)))

/***/ }),
/* 383 */
/***/ (function(module, exports) {

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
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 384 */
/***/ (function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ }),
/* 385 */
/***/ (function(module, exports) {

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


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	@fileoverview gl-matrix - High performance matrix and vector operations
	@author Brandon Jones
	@author Colin MacKenzie IV
	@version 2.7.0
	
	Copyright (c) 2015-2018, Brandon Jones, Colin MacKenzie IV.
	
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
	THE SOFTWARE.
	
	*/
	!function(t,n){if(true)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var r=n();for(var a in r)("object"==typeof exports?exports:t)[a]=r[a]}}("undefined"!=typeof self?self:this,function(){return function(t){var n={};function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=t,r.c=n,r.d=function(t,n,a){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)r.d(a,e,function(n){return t[n]}.bind(null,e));return a},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=10)}([function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.setMatrixArrayType=function(t){n.ARRAY_TYPE=t},n.toRadian=function(t){return t*e},n.equals=function(t,n){return Math.abs(t-n)<=a*Math.max(1,Math.abs(t),Math.abs(n))};var a=n.EPSILON=1e-6;n.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array,n.RANDOM=Math.random;var e=Math.PI/180},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.forEach=n.sqrLen=n.len=n.sqrDist=n.dist=n.div=n.mul=n.sub=void 0,n.create=e,n.clone=function(t){var n=new a.ARRAY_TYPE(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n},n.fromValues=function(t,n,r,e){var u=new a.ARRAY_TYPE(4);return u[0]=t,u[1]=n,u[2]=r,u[3]=e,u},n.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t},n.set=function(t,n,r,a,e){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t},n.add=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t},n.subtract=u,n.multiply=o,n.divide=i,n.ceil=function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},n.floor=function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},n.min=function(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t[3]=Math.min(n[3],r[3]),t},n.max=function(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t[3]=Math.max(n[3],r[3]),t},n.round=function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},n.scale=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t},n.scaleAndAdd=function(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t},n.distance=s,n.squaredDistance=c,n.length=f,n.squaredLength=M,n.negate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},n.inverse=function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},n.normalize=function(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=r*r+a*a+e*e+u*u;o>0&&(o=1/Math.sqrt(o),t[0]=r*o,t[1]=a*o,t[2]=e*o,t[3]=u*o);return t},n.dot=function(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]},n.lerp=function(t,n,r,a){var e=n[0],u=n[1],o=n[2],i=n[3];return t[0]=e+a*(r[0]-e),t[1]=u+a*(r[1]-u),t[2]=o+a*(r[2]-o),t[3]=i+a*(r[3]-i),t},n.random=function(t,n){var r,e,u,o,i,s;n=n||1;do{r=2*a.RANDOM()-1,e=2*a.RANDOM()-1,i=r*r+e*e}while(i>=1);do{u=2*a.RANDOM()-1,o=2*a.RANDOM()-1,s=u*u+o*o}while(s>=1);var c=Math.sqrt((1-i)/s);return t[0]=n*r,t[1]=n*e,t[2]=n*u*c,t[3]=n*o*c,t},n.transformMat4=function(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3];return t[0]=r[0]*a+r[4]*e+r[8]*u+r[12]*o,t[1]=r[1]*a+r[5]*e+r[9]*u+r[13]*o,t[2]=r[2]*a+r[6]*e+r[10]*u+r[14]*o,t[3]=r[3]*a+r[7]*e+r[11]*u+r[15]*o,t},n.transformQuat=function(t,n,r){var a=n[0],e=n[1],u=n[2],o=r[0],i=r[1],s=r[2],c=r[3],f=c*a+i*u-s*e,M=c*e+s*a-o*u,h=c*u+o*e-i*a,l=-o*a-i*e-s*u;return t[0]=f*c+l*-o+M*-s-h*-i,t[1]=M*c+l*-i+h*-o-f*-s,t[2]=h*c+l*-s+f*-i-M*-o,t[3]=n[3],t},n.str=function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},n.exactEquals=function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]},n.equals=function(t,n){var r=t[0],e=t[1],u=t[2],o=t[3],i=n[0],s=n[1],c=n[2],f=n[3];return Math.abs(r-i)<=a.EPSILON*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(e-s)<=a.EPSILON*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(u-c)<=a.EPSILON*Math.max(1,Math.abs(u),Math.abs(c))&&Math.abs(o-f)<=a.EPSILON*Math.max(1,Math.abs(o),Math.abs(f))};var a=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(r(0));function e(){var t=new a.ARRAY_TYPE(4);return a.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function u(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t}function o(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t[3]=n[3]*r[3],t}function i(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t[3]=n[3]/r[3],t}function s(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2],u=n[3]-t[3];return Math.sqrt(r*r+a*a+e*e+u*u)}function c(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2],u=n[3]-t[3];return r*r+a*a+e*e+u*u}function f(t){var n=t[0],r=t[1],a=t[2],e=t[3];return Math.sqrt(n*n+r*r+a*a+e*e)}function M(t){var n=t[0],r=t[1],a=t[2],e=t[3];return n*n+r*r+a*a+e*e}n.sub=u,n.mul=o,n.div=i,n.dist=s,n.sqrDist=c,n.len=f,n.sqrLen=M,n.forEach=function(){var t=e();return function(n,r,a,e,u,o){var i=void 0,s=void 0;for(r||(r=4),a||(a=0),s=e?Math.min(e*r+a,n.length):n.length,i=a;i<s;i+=r)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],t[3]=n[i+3],u(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2],n[i+3]=t[3];return n}}()},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.forEach=n.sqrLen=n.len=n.sqrDist=n.dist=n.div=n.mul=n.sub=void 0,n.create=e,n.clone=function(t){var n=new a.ARRAY_TYPE(3);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n},n.length=u,n.fromValues=o,n.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t},n.set=function(t,n,r,a){return t[0]=n,t[1]=r,t[2]=a,t},n.add=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t},n.subtract=i,n.multiply=s,n.divide=c,n.ceil=function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},n.floor=function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},n.min=function(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t[2]=Math.min(n[2],r[2]),t},n.max=function(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t[2]=Math.max(n[2],r[2]),t},n.round=function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},n.scale=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t},n.scaleAndAdd=function(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t},n.distance=f,n.squaredDistance=M,n.squaredLength=h,n.negate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},n.inverse=function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},n.normalize=l,n.dot=v,n.cross=function(t,n,r){var a=n[0],e=n[1],u=n[2],o=r[0],i=r[1],s=r[2];return t[0]=e*s-u*i,t[1]=u*o-a*s,t[2]=a*i-e*o,t},n.lerp=function(t,n,r,a){var e=n[0],u=n[1],o=n[2];return t[0]=e+a*(r[0]-e),t[1]=u+a*(r[1]-u),t[2]=o+a*(r[2]-o),t},n.hermite=function(t,n,r,a,e,u){var o=u*u,i=o*(2*u-3)+1,s=o*(u-2)+u,c=o*(u-1),f=o*(3-2*u);return t[0]=n[0]*i+r[0]*s+a[0]*c+e[0]*f,t[1]=n[1]*i+r[1]*s+a[1]*c+e[1]*f,t[2]=n[2]*i+r[2]*s+a[2]*c+e[2]*f,t},n.bezier=function(t,n,r,a,e,u){var o=1-u,i=o*o,s=u*u,c=i*o,f=3*u*i,M=3*s*o,h=s*u;return t[0]=n[0]*c+r[0]*f+a[0]*M+e[0]*h,t[1]=n[1]*c+r[1]*f+a[1]*M+e[1]*h,t[2]=n[2]*c+r[2]*f+a[2]*M+e[2]*h,t},n.random=function(t,n){n=n||1;var r=2*a.RANDOM()*Math.PI,e=2*a.RANDOM()-1,u=Math.sqrt(1-e*e)*n;return t[0]=Math.cos(r)*u,t[1]=Math.sin(r)*u,t[2]=e*n,t},n.transformMat4=function(t,n,r){var a=n[0],e=n[1],u=n[2],o=r[3]*a+r[7]*e+r[11]*u+r[15];return o=o||1,t[0]=(r[0]*a+r[4]*e+r[8]*u+r[12])/o,t[1]=(r[1]*a+r[5]*e+r[9]*u+r[13])/o,t[2]=(r[2]*a+r[6]*e+r[10]*u+r[14])/o,t},n.transformMat3=function(t,n,r){var a=n[0],e=n[1],u=n[2];return t[0]=a*r[0]+e*r[3]+u*r[6],t[1]=a*r[1]+e*r[4]+u*r[7],t[2]=a*r[2]+e*r[5]+u*r[8],t},n.transformQuat=function(t,n,r){var a=r[0],e=r[1],u=r[2],o=r[3],i=n[0],s=n[1],c=n[2],f=e*c-u*s,M=u*i-a*c,h=a*s-e*i,l=e*h-u*M,v=u*f-a*h,d=a*M-e*f,b=2*o;return f*=b,M*=b,h*=b,l*=2,v*=2,d*=2,t[0]=i+f+l,t[1]=s+M+v,t[2]=c+h+d,t},n.rotateX=function(t,n,r,a){var e=[],u=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],u[0]=e[0],u[1]=e[1]*Math.cos(a)-e[2]*Math.sin(a),u[2]=e[1]*Math.sin(a)+e[2]*Math.cos(a),t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t},n.rotateY=function(t,n,r,a){var e=[],u=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],u[0]=e[2]*Math.sin(a)+e[0]*Math.cos(a),u[1]=e[1],u[2]=e[2]*Math.cos(a)-e[0]*Math.sin(a),t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t},n.rotateZ=function(t,n,r,a){var e=[],u=[];return e[0]=n[0]-r[0],e[1]=n[1]-r[1],e[2]=n[2]-r[2],u[0]=e[0]*Math.cos(a)-e[1]*Math.sin(a),u[1]=e[0]*Math.sin(a)+e[1]*Math.cos(a),u[2]=e[2],t[0]=u[0]+r[0],t[1]=u[1]+r[1],t[2]=u[2]+r[2],t},n.angle=function(t,n){var r=o(t[0],t[1],t[2]),a=o(n[0],n[1],n[2]);l(r,r),l(a,a);var e=v(r,a);return e>1?0:e<-1?Math.PI:Math.acos(e)},n.str=function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},n.exactEquals=function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]},n.equals=function(t,n){var r=t[0],e=t[1],u=t[2],o=n[0],i=n[1],s=n[2];return Math.abs(r-o)<=a.EPSILON*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(e-i)<=a.EPSILON*Math.max(1,Math.abs(e),Math.abs(i))&&Math.abs(u-s)<=a.EPSILON*Math.max(1,Math.abs(u),Math.abs(s))};var a=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(r(0));function e(){var t=new a.ARRAY_TYPE(3);return a.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function u(t){var n=t[0],r=t[1],a=t[2];return Math.sqrt(n*n+r*r+a*a)}function o(t,n,r){var e=new a.ARRAY_TYPE(3);return e[0]=t,e[1]=n,e[2]=r,e}function i(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t}function s(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t[2]=n[2]*r[2],t}function c(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t[2]=n[2]/r[2],t}function f(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2];return Math.sqrt(r*r+a*a+e*e)}function M(t,n){var r=n[0]-t[0],a=n[1]-t[1],e=n[2]-t[2];return r*r+a*a+e*e}function h(t){var n=t[0],r=t[1],a=t[2];return n*n+r*r+a*a}function l(t,n){var r=n[0],a=n[1],e=n[2],u=r*r+a*a+e*e;return u>0&&(u=1/Math.sqrt(u),t[0]=n[0]*u,t[1]=n[1]*u,t[2]=n[2]*u),t}function v(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}n.sub=i,n.mul=s,n.div=c,n.dist=f,n.sqrDist=M,n.len=u,n.sqrLen=h,n.forEach=function(){var t=e();return function(n,r,a,e,u,o){var i=void 0,s=void 0;for(r||(r=3),a||(a=0),s=e?Math.min(e*r+a,n.length):n.length,i=a;i<s;i+=r)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],u(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2];return n}}()},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.setAxes=n.sqlerp=n.rotationTo=n.equals=n.exactEquals=n.normalize=n.sqrLen=n.squaredLength=n.len=n.length=n.lerp=n.dot=n.scale=n.mul=n.add=n.set=n.copy=n.fromValues=n.clone=void 0,n.create=s,n.identity=function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},n.setAxisAngle=c,n.getAxisAngle=function(t,n){var r=2*Math.acos(n[3]),e=Math.sin(r/2);e>a.EPSILON?(t[0]=n[0]/e,t[1]=n[1]/e,t[2]=n[2]/e):(t[0]=1,t[1]=0,t[2]=0);return r},n.multiply=f,n.rotateX=function(t,n,r){r*=.5;var a=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(r),s=Math.cos(r);return t[0]=a*s+o*i,t[1]=e*s+u*i,t[2]=u*s-e*i,t[3]=o*s-a*i,t},n.rotateY=function(t,n,r){r*=.5;var a=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(r),s=Math.cos(r);return t[0]=a*s-u*i,t[1]=e*s+o*i,t[2]=u*s+a*i,t[3]=o*s-e*i,t},n.rotateZ=function(t,n,r){r*=.5;var a=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(r),s=Math.cos(r);return t[0]=a*s+e*i,t[1]=e*s-a*i,t[2]=u*s+o*i,t[3]=o*s-u*i,t},n.calculateW=function(t,n){var r=n[0],a=n[1],e=n[2];return t[0]=r,t[1]=a,t[2]=e,t[3]=Math.sqrt(Math.abs(1-r*r-a*a-e*e)),t},n.slerp=M,n.random=function(t){var n=a.RANDOM(),r=a.RANDOM(),e=a.RANDOM(),u=Math.sqrt(1-n),o=Math.sqrt(n);return t[0]=u*Math.sin(2*Math.PI*r),t[1]=u*Math.cos(2*Math.PI*r),t[2]=o*Math.sin(2*Math.PI*e),t[3]=o*Math.cos(2*Math.PI*e),t},n.invert=function(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=r*r+a*a+e*e+u*u,i=o?1/o:0;return t[0]=-r*i,t[1]=-a*i,t[2]=-e*i,t[3]=u*i,t},n.conjugate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t},n.fromMat3=h,n.fromEuler=function(t,n,r,a){var e=.5*Math.PI/180;n*=e,r*=e,a*=e;var u=Math.sin(n),o=Math.cos(n),i=Math.sin(r),s=Math.cos(r),c=Math.sin(a),f=Math.cos(a);return t[0]=u*s*f-o*i*c,t[1]=o*i*f+u*s*c,t[2]=o*s*c-u*i*f,t[3]=o*s*f+u*i*c,t},n.str=function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"};var a=i(r(0)),e=i(r(5)),u=i(r(2)),o=i(r(1));function i(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}function s(){var t=new a.ARRAY_TYPE(4);return a.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function c(t,n,r){r*=.5;var a=Math.sin(r);return t[0]=a*n[0],t[1]=a*n[1],t[2]=a*n[2],t[3]=Math.cos(r),t}function f(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=r[0],s=r[1],c=r[2],f=r[3];return t[0]=a*f+o*i+e*c-u*s,t[1]=e*f+o*s+u*i-a*c,t[2]=u*f+o*c+a*s-e*i,t[3]=o*f-a*i-e*s-u*c,t}function M(t,n,r,e){var u=n[0],o=n[1],i=n[2],s=n[3],c=r[0],f=r[1],M=r[2],h=r[3],l=void 0,v=void 0,d=void 0,b=void 0,m=void 0;return(v=u*c+o*f+i*M+s*h)<0&&(v=-v,c=-c,f=-f,M=-M,h=-h),1-v>a.EPSILON?(l=Math.acos(v),d=Math.sin(l),b=Math.sin((1-e)*l)/d,m=Math.sin(e*l)/d):(b=1-e,m=e),t[0]=b*u+m*c,t[1]=b*o+m*f,t[2]=b*i+m*M,t[3]=b*s+m*h,t}function h(t,n){var r=n[0]+n[4]+n[8],a=void 0;if(r>0)a=Math.sqrt(r+1),t[3]=.5*a,a=.5/a,t[0]=(n[5]-n[7])*a,t[1]=(n[6]-n[2])*a,t[2]=(n[1]-n[3])*a;else{var e=0;n[4]>n[0]&&(e=1),n[8]>n[3*e+e]&&(e=2);var u=(e+1)%3,o=(e+2)%3;a=Math.sqrt(n[3*e+e]-n[3*u+u]-n[3*o+o]+1),t[e]=.5*a,a=.5/a,t[3]=(n[3*u+o]-n[3*o+u])*a,t[u]=(n[3*u+e]+n[3*e+u])*a,t[o]=(n[3*o+e]+n[3*e+o])*a}return t}n.clone=o.clone,n.fromValues=o.fromValues,n.copy=o.copy,n.set=o.set,n.add=o.add,n.mul=f,n.scale=o.scale,n.dot=o.dot,n.lerp=o.lerp;var l=n.length=o.length,v=(n.len=l,n.squaredLength=o.squaredLength),d=(n.sqrLen=v,n.normalize=o.normalize);n.exactEquals=o.exactEquals,n.equals=o.equals,n.rotationTo=function(){var t=u.create(),n=u.fromValues(1,0,0),r=u.fromValues(0,1,0);return function(a,e,o){var i=u.dot(e,o);return i<-.999999?(u.cross(t,n,e),u.len(t)<1e-6&&u.cross(t,r,e),u.normalize(t,t),c(a,t,Math.PI),a):i>.999999?(a[0]=0,a[1]=0,a[2]=0,a[3]=1,a):(u.cross(t,e,o),a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=1+i,d(a,a))}}(),n.sqlerp=function(){var t=s(),n=s();return function(r,a,e,u,o,i){return M(t,a,o,i),M(n,e,u,i),M(r,t,n,2*i*(1-i)),r}}(),n.setAxes=function(){var t=e.create();return function(n,r,a,e){return t[0]=a[0],t[3]=a[1],t[6]=a[2],t[1]=e[0],t[4]=e[1],t[7]=e[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],d(n,h(n,t))}}()},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.sub=n.mul=void 0,n.create=function(){var t=new a.ARRAY_TYPE(16);a.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0);return t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},n.clone=function(t){var n=new a.ARRAY_TYPE(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n},n.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t},n.fromValues=function(t,n,r,e,u,o,i,s,c,f,M,h,l,v,d,b){var m=new a.ARRAY_TYPE(16);return m[0]=t,m[1]=n,m[2]=r,m[3]=e,m[4]=u,m[5]=o,m[6]=i,m[7]=s,m[8]=c,m[9]=f,m[10]=M,m[11]=h,m[12]=l,m[13]=v,m[14]=d,m[15]=b,m},n.set=function(t,n,r,a,e,u,o,i,s,c,f,M,h,l,v,d,b){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t[4]=u,t[5]=o,t[6]=i,t[7]=s,t[8]=c,t[9]=f,t[10]=M,t[11]=h,t[12]=l,t[13]=v,t[14]=d,t[15]=b,t},n.identity=e,n.transpose=function(t,n){if(t===n){var r=n[1],a=n[2],e=n[3],u=n[6],o=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=r,t[6]=n[9],t[7]=n[13],t[8]=a,t[9]=u,t[11]=n[14],t[12]=e,t[13]=o,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t},n.invert=function(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=n[6],c=n[7],f=n[8],M=n[9],h=n[10],l=n[11],v=n[12],d=n[13],b=n[14],m=n[15],p=r*i-a*o,P=r*s-e*o,A=r*c-u*o,E=a*s-e*i,O=a*c-u*i,R=e*c-u*s,y=f*d-M*v,q=f*b-h*v,x=f*m-l*v,_=M*b-h*d,Y=M*m-l*d,L=h*m-l*b,S=p*L-P*Y+A*_+E*x-O*q+R*y;if(!S)return null;return S=1/S,t[0]=(i*L-s*Y+c*_)*S,t[1]=(e*Y-a*L-u*_)*S,t[2]=(d*R-b*O+m*E)*S,t[3]=(h*O-M*R-l*E)*S,t[4]=(s*x-o*L-c*q)*S,t[5]=(r*L-e*x+u*q)*S,t[6]=(b*A-v*R-m*P)*S,t[7]=(f*R-h*A+l*P)*S,t[8]=(o*Y-i*x+c*y)*S,t[9]=(a*x-r*Y-u*y)*S,t[10]=(v*O-d*A+m*p)*S,t[11]=(M*A-f*O-l*p)*S,t[12]=(i*q-o*_-s*y)*S,t[13]=(r*_-a*q+e*y)*S,t[14]=(d*P-v*E-b*p)*S,t[15]=(f*E-M*P+h*p)*S,t},n.adjoint=function(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=n[6],c=n[7],f=n[8],M=n[9],h=n[10],l=n[11],v=n[12],d=n[13],b=n[14],m=n[15];return t[0]=i*(h*m-l*b)-M*(s*m-c*b)+d*(s*l-c*h),t[1]=-(a*(h*m-l*b)-M*(e*m-u*b)+d*(e*l-u*h)),t[2]=a*(s*m-c*b)-i*(e*m-u*b)+d*(e*c-u*s),t[3]=-(a*(s*l-c*h)-i*(e*l-u*h)+M*(e*c-u*s)),t[4]=-(o*(h*m-l*b)-f*(s*m-c*b)+v*(s*l-c*h)),t[5]=r*(h*m-l*b)-f*(e*m-u*b)+v*(e*l-u*h),t[6]=-(r*(s*m-c*b)-o*(e*m-u*b)+v*(e*c-u*s)),t[7]=r*(s*l-c*h)-o*(e*l-u*h)+f*(e*c-u*s),t[8]=o*(M*m-l*d)-f*(i*m-c*d)+v*(i*l-c*M),t[9]=-(r*(M*m-l*d)-f*(a*m-u*d)+v*(a*l-u*M)),t[10]=r*(i*m-c*d)-o*(a*m-u*d)+v*(a*c-u*i),t[11]=-(r*(i*l-c*M)-o*(a*l-u*M)+f*(a*c-u*i)),t[12]=-(o*(M*b-h*d)-f*(i*b-s*d)+v*(i*h-s*M)),t[13]=r*(M*b-h*d)-f*(a*b-e*d)+v*(a*h-e*M),t[14]=-(r*(i*b-s*d)-o*(a*b-e*d)+v*(a*s-e*i)),t[15]=r*(i*h-s*M)-o*(a*h-e*M)+f*(a*s-e*i),t},n.determinant=function(t){var n=t[0],r=t[1],a=t[2],e=t[3],u=t[4],o=t[5],i=t[6],s=t[7],c=t[8],f=t[9],M=t[10],h=t[11],l=t[12],v=t[13],d=t[14],b=t[15];return(n*o-r*u)*(M*b-h*d)-(n*i-a*u)*(f*b-h*v)+(n*s-e*u)*(f*d-M*v)+(r*i-a*o)*(c*b-h*l)-(r*s-e*o)*(c*d-M*l)+(a*s-e*i)*(c*v-f*l)},n.multiply=u,n.translate=function(t,n,r){var a=r[0],e=r[1],u=r[2],o=void 0,i=void 0,s=void 0,c=void 0,f=void 0,M=void 0,h=void 0,l=void 0,v=void 0,d=void 0,b=void 0,m=void 0;n===t?(t[12]=n[0]*a+n[4]*e+n[8]*u+n[12],t[13]=n[1]*a+n[5]*e+n[9]*u+n[13],t[14]=n[2]*a+n[6]*e+n[10]*u+n[14],t[15]=n[3]*a+n[7]*e+n[11]*u+n[15]):(o=n[0],i=n[1],s=n[2],c=n[3],f=n[4],M=n[5],h=n[6],l=n[7],v=n[8],d=n[9],b=n[10],m=n[11],t[0]=o,t[1]=i,t[2]=s,t[3]=c,t[4]=f,t[5]=M,t[6]=h,t[7]=l,t[8]=v,t[9]=d,t[10]=b,t[11]=m,t[12]=o*a+f*e+v*u+n[12],t[13]=i*a+M*e+d*u+n[13],t[14]=s*a+h*e+b*u+n[14],t[15]=c*a+l*e+m*u+n[15]);return t},n.scale=function(t,n,r){var a=r[0],e=r[1],u=r[2];return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*e,t[5]=n[5]*e,t[6]=n[6]*e,t[7]=n[7]*e,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=n[11]*u,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t},n.rotate=function(t,n,r,e){var u=e[0],o=e[1],i=e[2],s=Math.sqrt(u*u+o*o+i*i),c=void 0,f=void 0,M=void 0,h=void 0,l=void 0,v=void 0,d=void 0,b=void 0,m=void 0,p=void 0,P=void 0,A=void 0,E=void 0,O=void 0,R=void 0,y=void 0,q=void 0,x=void 0,_=void 0,Y=void 0,L=void 0,S=void 0,w=void 0,I=void 0;if(s<a.EPSILON)return null;u*=s=1/s,o*=s,i*=s,c=Math.sin(r),f=Math.cos(r),M=1-f,h=n[0],l=n[1],v=n[2],d=n[3],b=n[4],m=n[5],p=n[6],P=n[7],A=n[8],E=n[9],O=n[10],R=n[11],y=u*u*M+f,q=o*u*M+i*c,x=i*u*M-o*c,_=u*o*M-i*c,Y=o*o*M+f,L=i*o*M+u*c,S=u*i*M+o*c,w=o*i*M-u*c,I=i*i*M+f,t[0]=h*y+b*q+A*x,t[1]=l*y+m*q+E*x,t[2]=v*y+p*q+O*x,t[3]=d*y+P*q+R*x,t[4]=h*_+b*Y+A*L,t[5]=l*_+m*Y+E*L,t[6]=v*_+p*Y+O*L,t[7]=d*_+P*Y+R*L,t[8]=h*S+b*w+A*I,t[9]=l*S+m*w+E*I,t[10]=v*S+p*w+O*I,t[11]=d*S+P*w+R*I,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]);return t},n.rotateX=function(t,n,r){var a=Math.sin(r),e=Math.cos(r),u=n[4],o=n[5],i=n[6],s=n[7],c=n[8],f=n[9],M=n[10],h=n[11];n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]);return t[4]=u*e+c*a,t[5]=o*e+f*a,t[6]=i*e+M*a,t[7]=s*e+h*a,t[8]=c*e-u*a,t[9]=f*e-o*a,t[10]=M*e-i*a,t[11]=h*e-s*a,t},n.rotateY=function(t,n,r){var a=Math.sin(r),e=Math.cos(r),u=n[0],o=n[1],i=n[2],s=n[3],c=n[8],f=n[9],M=n[10],h=n[11];n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]);return t[0]=u*e-c*a,t[1]=o*e-f*a,t[2]=i*e-M*a,t[3]=s*e-h*a,t[8]=u*a+c*e,t[9]=o*a+f*e,t[10]=i*a+M*e,t[11]=s*a+h*e,t},n.rotateZ=function(t,n,r){var a=Math.sin(r),e=Math.cos(r),u=n[0],o=n[1],i=n[2],s=n[3],c=n[4],f=n[5],M=n[6],h=n[7];n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]);return t[0]=u*e+c*a,t[1]=o*e+f*a,t[2]=i*e+M*a,t[3]=s*e+h*a,t[4]=c*e-u*a,t[5]=f*e-o*a,t[6]=M*e-i*a,t[7]=h*e-s*a,t},n.fromTranslation=function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t},n.fromScaling=function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},n.fromRotation=function(t,n,r){var e=r[0],u=r[1],o=r[2],i=Math.sqrt(e*e+u*u+o*o),s=void 0,c=void 0,f=void 0;if(i<a.EPSILON)return null;return e*=i=1/i,u*=i,o*=i,s=Math.sin(n),c=Math.cos(n),f=1-c,t[0]=e*e*f+c,t[1]=u*e*f+o*s,t[2]=o*e*f-u*s,t[3]=0,t[4]=e*u*f-o*s,t[5]=u*u*f+c,t[6]=o*u*f+e*s,t[7]=0,t[8]=e*o*f+u*s,t[9]=u*o*f-e*s,t[10]=o*o*f+c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},n.fromXRotation=function(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},n.fromYRotation=function(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},n.fromZRotation=function(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},n.fromRotationTranslation=o,n.fromQuat2=function(t,n){var r=new a.ARRAY_TYPE(3),e=-n[0],u=-n[1],i=-n[2],s=n[3],c=n[4],f=n[5],M=n[6],h=n[7],l=e*e+u*u+i*i+s*s;l>0?(r[0]=2*(c*s+h*e+f*i-M*u)/l,r[1]=2*(f*s+h*u+M*e-c*i)/l,r[2]=2*(M*s+h*i+c*u-f*e)/l):(r[0]=2*(c*s+h*e+f*i-M*u),r[1]=2*(f*s+h*u+M*e-c*i),r[2]=2*(M*s+h*i+c*u-f*e));return o(t,n,r),t},n.getTranslation=function(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t},n.getScaling=function(t,n){var r=n[0],a=n[1],e=n[2],u=n[4],o=n[5],i=n[6],s=n[8],c=n[9],f=n[10];return t[0]=Math.sqrt(r*r+a*a+e*e),t[1]=Math.sqrt(u*u+o*o+i*i),t[2]=Math.sqrt(s*s+c*c+f*f),t},n.getRotation=function(t,n){var r=n[0]+n[5]+n[10],a=0;r>0?(a=2*Math.sqrt(r+1),t[3]=.25*a,t[0]=(n[6]-n[9])/a,t[1]=(n[8]-n[2])/a,t[2]=(n[1]-n[4])/a):n[0]>n[5]&&n[0]>n[10]?(a=2*Math.sqrt(1+n[0]-n[5]-n[10]),t[3]=(n[6]-n[9])/a,t[0]=.25*a,t[1]=(n[1]+n[4])/a,t[2]=(n[8]+n[2])/a):n[5]>n[10]?(a=2*Math.sqrt(1+n[5]-n[0]-n[10]),t[3]=(n[8]-n[2])/a,t[0]=(n[1]+n[4])/a,t[1]=.25*a,t[2]=(n[6]+n[9])/a):(a=2*Math.sqrt(1+n[10]-n[0]-n[5]),t[3]=(n[1]-n[4])/a,t[0]=(n[8]+n[2])/a,t[1]=(n[6]+n[9])/a,t[2]=.25*a);return t},n.fromRotationTranslationScale=function(t,n,r,a){var e=n[0],u=n[1],o=n[2],i=n[3],s=e+e,c=u+u,f=o+o,M=e*s,h=e*c,l=e*f,v=u*c,d=u*f,b=o*f,m=i*s,p=i*c,P=i*f,A=a[0],E=a[1],O=a[2];return t[0]=(1-(v+b))*A,t[1]=(h+P)*A,t[2]=(l-p)*A,t[3]=0,t[4]=(h-P)*E,t[5]=(1-(M+b))*E,t[6]=(d+m)*E,t[7]=0,t[8]=(l+p)*O,t[9]=(d-m)*O,t[10]=(1-(M+v))*O,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t},n.fromRotationTranslationScaleOrigin=function(t,n,r,a,e){var u=n[0],o=n[1],i=n[2],s=n[3],c=u+u,f=o+o,M=i+i,h=u*c,l=u*f,v=u*M,d=o*f,b=o*M,m=i*M,p=s*c,P=s*f,A=s*M,E=a[0],O=a[1],R=a[2],y=e[0],q=e[1],x=e[2],_=(1-(d+m))*E,Y=(l+A)*E,L=(v-P)*E,S=(l-A)*O,w=(1-(h+m))*O,I=(b+p)*O,N=(v+P)*R,g=(b-p)*R,T=(1-(h+d))*R;return t[0]=_,t[1]=Y,t[2]=L,t[3]=0,t[4]=S,t[5]=w,t[6]=I,t[7]=0,t[8]=N,t[9]=g,t[10]=T,t[11]=0,t[12]=r[0]+y-(_*y+S*q+N*x),t[13]=r[1]+q-(Y*y+w*q+g*x),t[14]=r[2]+x-(L*y+I*q+T*x),t[15]=1,t},n.fromQuat=function(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=r+r,i=a+a,s=e+e,c=r*o,f=a*o,M=a*i,h=e*o,l=e*i,v=e*s,d=u*o,b=u*i,m=u*s;return t[0]=1-M-v,t[1]=f+m,t[2]=h-b,t[3]=0,t[4]=f-m,t[5]=1-c-v,t[6]=l+d,t[7]=0,t[8]=h+b,t[9]=l-d,t[10]=1-c-M,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},n.frustum=function(t,n,r,a,e,u,o){var i=1/(r-n),s=1/(e-a),c=1/(u-o);return t[0]=2*u*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*u*s,t[6]=0,t[7]=0,t[8]=(r+n)*i,t[9]=(e+a)*s,t[10]=(o+u)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*u*2*c,t[15]=0,t},n.perspective=function(t,n,r,a,e){var u=1/Math.tan(n/2),o=void 0;t[0]=u/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=e&&e!==1/0?(o=1/(a-e),t[10]=(e+a)*o,t[14]=2*e*a*o):(t[10]=-1,t[14]=-2*a);return t},n.perspectiveFromFieldOfView=function(t,n,r,a){var e=Math.tan(n.upDegrees*Math.PI/180),u=Math.tan(n.downDegrees*Math.PI/180),o=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),s=2/(o+i),c=2/(e+u);return t[0]=s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(o-i)*s*.5,t[9]=(e-u)*c*.5,t[10]=a/(r-a),t[11]=-1,t[12]=0,t[13]=0,t[14]=a*r/(r-a),t[15]=0,t},n.ortho=function(t,n,r,a,e,u,o){var i=1/(n-r),s=1/(a-e),c=1/(u-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(n+r)*i,t[13]=(e+a)*s,t[14]=(o+u)*c,t[15]=1,t},n.lookAt=function(t,n,r,u){var o=void 0,i=void 0,s=void 0,c=void 0,f=void 0,M=void 0,h=void 0,l=void 0,v=void 0,d=void 0,b=n[0],m=n[1],p=n[2],P=u[0],A=u[1],E=u[2],O=r[0],R=r[1],y=r[2];if(Math.abs(b-O)<a.EPSILON&&Math.abs(m-R)<a.EPSILON&&Math.abs(p-y)<a.EPSILON)return e(t);h=b-O,l=m-R,v=p-y,d=1/Math.sqrt(h*h+l*l+v*v),o=A*(v*=d)-E*(l*=d),i=E*(h*=d)-P*v,s=P*l-A*h,(d=Math.sqrt(o*o+i*i+s*s))?(o*=d=1/d,i*=d,s*=d):(o=0,i=0,s=0);c=l*s-v*i,f=v*o-h*s,M=h*i-l*o,(d=Math.sqrt(c*c+f*f+M*M))?(c*=d=1/d,f*=d,M*=d):(c=0,f=0,M=0);return t[0]=o,t[1]=c,t[2]=h,t[3]=0,t[4]=i,t[5]=f,t[6]=l,t[7]=0,t[8]=s,t[9]=M,t[10]=v,t[11]=0,t[12]=-(o*b+i*m+s*p),t[13]=-(c*b+f*m+M*p),t[14]=-(h*b+l*m+v*p),t[15]=1,t},n.targetTo=function(t,n,r,a){var e=n[0],u=n[1],o=n[2],i=a[0],s=a[1],c=a[2],f=e-r[0],M=u-r[1],h=o-r[2],l=f*f+M*M+h*h;l>0&&(l=1/Math.sqrt(l),f*=l,M*=l,h*=l);var v=s*h-c*M,d=c*f-i*h,b=i*M-s*f;(l=v*v+d*d+b*b)>0&&(l=1/Math.sqrt(l),v*=l,d*=l,b*=l);return t[0]=v,t[1]=d,t[2]=b,t[3]=0,t[4]=M*b-h*d,t[5]=h*v-f*b,t[6]=f*d-M*v,t[7]=0,t[8]=f,t[9]=M,t[10]=h,t[11]=0,t[12]=e,t[13]=u,t[14]=o,t[15]=1,t},n.str=function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},n.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))},n.add=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t[9]=n[9]+r[9],t[10]=n[10]+r[10],t[11]=n[11]+r[11],t[12]=n[12]+r[12],t[13]=n[13]+r[13],t[14]=n[14]+r[14],t[15]=n[15]+r[15],t},n.subtract=i,n.multiplyScalar=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=n[11]*r,t[12]=n[12]*r,t[13]=n[13]*r,t[14]=n[14]*r,t[15]=n[15]*r,t},n.multiplyScalarAndAdd=function(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t[4]=n[4]+r[4]*a,t[5]=n[5]+r[5]*a,t[6]=n[6]+r[6]*a,t[7]=n[7]+r[7]*a,t[8]=n[8]+r[8]*a,t[9]=n[9]+r[9]*a,t[10]=n[10]+r[10]*a,t[11]=n[11]+r[11]*a,t[12]=n[12]+r[12]*a,t[13]=n[13]+r[13]*a,t[14]=n[14]+r[14]*a,t[15]=n[15]+r[15]*a,t},n.exactEquals=function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]},n.equals=function(t,n){var r=t[0],e=t[1],u=t[2],o=t[3],i=t[4],s=t[5],c=t[6],f=t[7],M=t[8],h=t[9],l=t[10],v=t[11],d=t[12],b=t[13],m=t[14],p=t[15],P=n[0],A=n[1],E=n[2],O=n[3],R=n[4],y=n[5],q=n[6],x=n[7],_=n[8],Y=n[9],L=n[10],S=n[11],w=n[12],I=n[13],N=n[14],g=n[15];return Math.abs(r-P)<=a.EPSILON*Math.max(1,Math.abs(r),Math.abs(P))&&Math.abs(e-A)<=a.EPSILON*Math.max(1,Math.abs(e),Math.abs(A))&&Math.abs(u-E)<=a.EPSILON*Math.max(1,Math.abs(u),Math.abs(E))&&Math.abs(o-O)<=a.EPSILON*Math.max(1,Math.abs(o),Math.abs(O))&&Math.abs(i-R)<=a.EPSILON*Math.max(1,Math.abs(i),Math.abs(R))&&Math.abs(s-y)<=a.EPSILON*Math.max(1,Math.abs(s),Math.abs(y))&&Math.abs(c-q)<=a.EPSILON*Math.max(1,Math.abs(c),Math.abs(q))&&Math.abs(f-x)<=a.EPSILON*Math.max(1,Math.abs(f),Math.abs(x))&&Math.abs(M-_)<=a.EPSILON*Math.max(1,Math.abs(M),Math.abs(_))&&Math.abs(h-Y)<=a.EPSILON*Math.max(1,Math.abs(h),Math.abs(Y))&&Math.abs(l-L)<=a.EPSILON*Math.max(1,Math.abs(l),Math.abs(L))&&Math.abs(v-S)<=a.EPSILON*Math.max(1,Math.abs(v),Math.abs(S))&&Math.abs(d-w)<=a.EPSILON*Math.max(1,Math.abs(d),Math.abs(w))&&Math.abs(b-I)<=a.EPSILON*Math.max(1,Math.abs(b),Math.abs(I))&&Math.abs(m-N)<=a.EPSILON*Math.max(1,Math.abs(m),Math.abs(N))&&Math.abs(p-g)<=a.EPSILON*Math.max(1,Math.abs(p),Math.abs(g))};var a=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(r(0));function e(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function u(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=n[6],f=n[7],M=n[8],h=n[9],l=n[10],v=n[11],d=n[12],b=n[13],m=n[14],p=n[15],P=r[0],A=r[1],E=r[2],O=r[3];return t[0]=P*a+A*i+E*M+O*d,t[1]=P*e+A*s+E*h+O*b,t[2]=P*u+A*c+E*l+O*m,t[3]=P*o+A*f+E*v+O*p,P=r[4],A=r[5],E=r[6],O=r[7],t[4]=P*a+A*i+E*M+O*d,t[5]=P*e+A*s+E*h+O*b,t[6]=P*u+A*c+E*l+O*m,t[7]=P*o+A*f+E*v+O*p,P=r[8],A=r[9],E=r[10],O=r[11],t[8]=P*a+A*i+E*M+O*d,t[9]=P*e+A*s+E*h+O*b,t[10]=P*u+A*c+E*l+O*m,t[11]=P*o+A*f+E*v+O*p,P=r[12],A=r[13],E=r[14],O=r[15],t[12]=P*a+A*i+E*M+O*d,t[13]=P*e+A*s+E*h+O*b,t[14]=P*u+A*c+E*l+O*m,t[15]=P*o+A*f+E*v+O*p,t}function o(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=a+a,s=e+e,c=u+u,f=a*i,M=a*s,h=a*c,l=e*s,v=e*c,d=u*c,b=o*i,m=o*s,p=o*c;return t[0]=1-(l+d),t[1]=M+p,t[2]=h-m,t[3]=0,t[4]=M-p,t[5]=1-(f+d),t[6]=v+b,t[7]=0,t[8]=h+m,t[9]=v-b,t[10]=1-(f+l),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function i(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t[9]=n[9]-r[9],t[10]=n[10]-r[10],t[11]=n[11]-r[11],t[12]=n[12]-r[12],t[13]=n[13]-r[13],t[14]=n[14]-r[14],t[15]=n[15]-r[15],t}n.mul=u,n.sub=i},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.sub=n.mul=void 0,n.create=function(){var t=new a.ARRAY_TYPE(9);a.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0);return t[0]=1,t[4]=1,t[8]=1,t},n.fromMat4=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t},n.clone=function(t){var n=new a.ARRAY_TYPE(9);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n},n.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},n.fromValues=function(t,n,r,e,u,o,i,s,c){var f=new a.ARRAY_TYPE(9);return f[0]=t,f[1]=n,f[2]=r,f[3]=e,f[4]=u,f[5]=o,f[6]=i,f[7]=s,f[8]=c,f},n.set=function(t,n,r,a,e,u,o,i,s,c){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t[4]=u,t[5]=o,t[6]=i,t[7]=s,t[8]=c,t},n.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},n.transpose=function(t,n){if(t===n){var r=n[1],a=n[2],e=n[5];t[1]=n[3],t[2]=n[6],t[3]=r,t[5]=n[7],t[6]=a,t[7]=e}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t},n.invert=function(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=n[6],c=n[7],f=n[8],M=f*o-i*c,h=-f*u+i*s,l=c*u-o*s,v=r*M+a*h+e*l;if(!v)return null;return v=1/v,t[0]=M*v,t[1]=(-f*a+e*c)*v,t[2]=(i*a-e*o)*v,t[3]=h*v,t[4]=(f*r-e*s)*v,t[5]=(-i*r+e*u)*v,t[6]=l*v,t[7]=(-c*r+a*s)*v,t[8]=(o*r-a*u)*v,t},n.adjoint=function(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=n[6],c=n[7],f=n[8];return t[0]=o*f-i*c,t[1]=e*c-a*f,t[2]=a*i-e*o,t[3]=i*s-u*f,t[4]=r*f-e*s,t[5]=e*u-r*i,t[6]=u*c-o*s,t[7]=a*s-r*c,t[8]=r*o-a*u,t},n.determinant=function(t){var n=t[0],r=t[1],a=t[2],e=t[3],u=t[4],o=t[5],i=t[6],s=t[7],c=t[8];return n*(c*u-o*s)+r*(-c*e+o*i)+a*(s*e-u*i)},n.multiply=e,n.translate=function(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=n[6],f=n[7],M=n[8],h=r[0],l=r[1];return t[0]=a,t[1]=e,t[2]=u,t[3]=o,t[4]=i,t[5]=s,t[6]=h*a+l*o+c,t[7]=h*e+l*i+f,t[8]=h*u+l*s+M,t},n.rotate=function(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=n[6],f=n[7],M=n[8],h=Math.sin(r),l=Math.cos(r);return t[0]=l*a+h*o,t[1]=l*e+h*i,t[2]=l*u+h*s,t[3]=l*o-h*a,t[4]=l*i-h*e,t[5]=l*s-h*u,t[6]=c,t[7]=f,t[8]=M,t},n.scale=function(t,n,r){var a=r[0],e=r[1];return t[0]=a*n[0],t[1]=a*n[1],t[2]=a*n[2],t[3]=e*n[3],t[4]=e*n[4],t[5]=e*n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t},n.fromTranslation=function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t},n.fromRotation=function(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=0,t[3]=-r,t[4]=a,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},n.fromScaling=function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},n.fromMat2d=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t},n.fromQuat=function(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=r+r,i=a+a,s=e+e,c=r*o,f=a*o,M=a*i,h=e*o,l=e*i,v=e*s,d=u*o,b=u*i,m=u*s;return t[0]=1-M-v,t[3]=f-m,t[6]=h+b,t[1]=f+m,t[4]=1-c-v,t[7]=l-d,t[2]=h-b,t[5]=l+d,t[8]=1-c-M,t},n.normalFromMat4=function(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=n[6],c=n[7],f=n[8],M=n[9],h=n[10],l=n[11],v=n[12],d=n[13],b=n[14],m=n[15],p=r*i-a*o,P=r*s-e*o,A=r*c-u*o,E=a*s-e*i,O=a*c-u*i,R=e*c-u*s,y=f*d-M*v,q=f*b-h*v,x=f*m-l*v,_=M*b-h*d,Y=M*m-l*d,L=h*m-l*b,S=p*L-P*Y+A*_+E*x-O*q+R*y;if(!S)return null;return S=1/S,t[0]=(i*L-s*Y+c*_)*S,t[1]=(s*x-o*L-c*q)*S,t[2]=(o*Y-i*x+c*y)*S,t[3]=(e*Y-a*L-u*_)*S,t[4]=(r*L-e*x+u*q)*S,t[5]=(a*x-r*Y-u*y)*S,t[6]=(d*R-b*O+m*E)*S,t[7]=(b*A-v*R-m*P)*S,t[8]=(v*O-d*A+m*p)*S,t},n.projection=function(t,n,r){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t},n.str=function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},n.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))},n.add=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t[8]=n[8]+r[8],t},n.subtract=u,n.multiplyScalar=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t[8]=n[8]*r,t},n.multiplyScalarAndAdd=function(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t[4]=n[4]+r[4]*a,t[5]=n[5]+r[5]*a,t[6]=n[6]+r[6]*a,t[7]=n[7]+r[7]*a,t[8]=n[8]+r[8]*a,t},n.exactEquals=function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]},n.equals=function(t,n){var r=t[0],e=t[1],u=t[2],o=t[3],i=t[4],s=t[5],c=t[6],f=t[7],M=t[8],h=n[0],l=n[1],v=n[2],d=n[3],b=n[4],m=n[5],p=n[6],P=n[7],A=n[8];return Math.abs(r-h)<=a.EPSILON*Math.max(1,Math.abs(r),Math.abs(h))&&Math.abs(e-l)<=a.EPSILON*Math.max(1,Math.abs(e),Math.abs(l))&&Math.abs(u-v)<=a.EPSILON*Math.max(1,Math.abs(u),Math.abs(v))&&Math.abs(o-d)<=a.EPSILON*Math.max(1,Math.abs(o),Math.abs(d))&&Math.abs(i-b)<=a.EPSILON*Math.max(1,Math.abs(i),Math.abs(b))&&Math.abs(s-m)<=a.EPSILON*Math.max(1,Math.abs(s),Math.abs(m))&&Math.abs(c-p)<=a.EPSILON*Math.max(1,Math.abs(c),Math.abs(p))&&Math.abs(f-P)<=a.EPSILON*Math.max(1,Math.abs(f),Math.abs(P))&&Math.abs(M-A)<=a.EPSILON*Math.max(1,Math.abs(M),Math.abs(A))};var a=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(r(0));function e(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=n[6],f=n[7],M=n[8],h=r[0],l=r[1],v=r[2],d=r[3],b=r[4],m=r[5],p=r[6],P=r[7],A=r[8];return t[0]=h*a+l*o+v*c,t[1]=h*e+l*i+v*f,t[2]=h*u+l*s+v*M,t[3]=d*a+b*o+m*c,t[4]=d*e+b*i+m*f,t[5]=d*u+b*s+m*M,t[6]=p*a+P*o+A*c,t[7]=p*e+P*i+A*f,t[8]=p*u+P*s+A*M,t}function u(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t[6]=n[6]-r[6],t[7]=n[7]-r[7],t[8]=n[8]-r[8],t}n.mul=e,n.sub=u},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.forEach=n.sqrLen=n.sqrDist=n.dist=n.div=n.mul=n.sub=n.len=void 0,n.create=e,n.clone=function(t){var n=new a.ARRAY_TYPE(2);return n[0]=t[0],n[1]=t[1],n},n.fromValues=function(t,n){var r=new a.ARRAY_TYPE(2);return r[0]=t,r[1]=n,r},n.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t},n.set=function(t,n,r){return t[0]=n,t[1]=r,t},n.add=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t},n.subtract=u,n.multiply=o,n.divide=i,n.ceil=function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t},n.floor=function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t},n.min=function(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t},n.max=function(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t},n.round=function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t},n.scale=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t},n.scaleAndAdd=function(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t},n.distance=s,n.squaredDistance=c,n.length=f,n.squaredLength=M,n.negate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t},n.inverse=function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t},n.normalize=function(t,n){var r=n[0],a=n[1],e=r*r+a*a;e>0&&(e=1/Math.sqrt(e),t[0]=n[0]*e,t[1]=n[1]*e);return t},n.dot=function(t,n){return t[0]*n[0]+t[1]*n[1]},n.cross=function(t,n,r){var a=n[0]*r[1]-n[1]*r[0];return t[0]=t[1]=0,t[2]=a,t},n.lerp=function(t,n,r,a){var e=n[0],u=n[1];return t[0]=e+a*(r[0]-e),t[1]=u+a*(r[1]-u),t},n.random=function(t,n){n=n||1;var r=2*a.RANDOM()*Math.PI;return t[0]=Math.cos(r)*n,t[1]=Math.sin(r)*n,t},n.transformMat2=function(t,n,r){var a=n[0],e=n[1];return t[0]=r[0]*a+r[2]*e,t[1]=r[1]*a+r[3]*e,t},n.transformMat2d=function(t,n,r){var a=n[0],e=n[1];return t[0]=r[0]*a+r[2]*e+r[4],t[1]=r[1]*a+r[3]*e+r[5],t},n.transformMat3=function(t,n,r){var a=n[0],e=n[1];return t[0]=r[0]*a+r[3]*e+r[6],t[1]=r[1]*a+r[4]*e+r[7],t},n.transformMat4=function(t,n,r){var a=n[0],e=n[1];return t[0]=r[0]*a+r[4]*e+r[12],t[1]=r[1]*a+r[5]*e+r[13],t},n.rotate=function(t,n,r,a){var e=n[0]-r[0],u=n[1]-r[1],o=Math.sin(a),i=Math.cos(a);return t[0]=e*i-u*o+r[0],t[1]=e*o+u*i+r[1],t},n.angle=function(t,n){var r=t[0],a=t[1],e=n[0],u=n[1],o=r*r+a*a;o>0&&(o=1/Math.sqrt(o));var i=e*e+u*u;i>0&&(i=1/Math.sqrt(i));var s=(r*e+a*u)*o*i;return s>1?0:s<-1?Math.PI:Math.acos(s)},n.str=function(t){return"vec2("+t[0]+", "+t[1]+")"},n.exactEquals=function(t,n){return t[0]===n[0]&&t[1]===n[1]},n.equals=function(t,n){var r=t[0],e=t[1],u=n[0],o=n[1];return Math.abs(r-u)<=a.EPSILON*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(e-o)<=a.EPSILON*Math.max(1,Math.abs(e),Math.abs(o))};var a=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(r(0));function e(){var t=new a.ARRAY_TYPE(2);return a.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0),t}function u(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t}function o(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t}function i(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t}function s(t,n){var r=n[0]-t[0],a=n[1]-t[1];return Math.sqrt(r*r+a*a)}function c(t,n){var r=n[0]-t[0],a=n[1]-t[1];return r*r+a*a}function f(t){var n=t[0],r=t[1];return Math.sqrt(n*n+r*r)}function M(t){var n=t[0],r=t[1];return n*n+r*r}n.len=f,n.sub=u,n.mul=o,n.div=i,n.dist=s,n.sqrDist=c,n.sqrLen=M,n.forEach=function(){var t=e();return function(n,r,a,e,u,o){var i=void 0,s=void 0;for(r||(r=2),a||(a=0),s=e?Math.min(e*r+a,n.length):n.length,i=a;i<s;i+=r)t[0]=n[i],t[1]=n[i+1],u(t,t,o),n[i]=t[0],n[i+1]=t[1];return n}}()},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.sqrLen=n.squaredLength=n.len=n.length=n.dot=n.mul=n.setReal=n.getReal=void 0,n.create=function(){var t=new a.ARRAY_TYPE(8);a.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0);return t[3]=1,t},n.clone=function(t){var n=new a.ARRAY_TYPE(8);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n},n.fromValues=function(t,n,r,e,u,o,i,s){var c=new a.ARRAY_TYPE(8);return c[0]=t,c[1]=n,c[2]=r,c[3]=e,c[4]=u,c[5]=o,c[6]=i,c[7]=s,c},n.fromRotationTranslationValues=function(t,n,r,e,u,o,i){var s=new a.ARRAY_TYPE(8);s[0]=t,s[1]=n,s[2]=r,s[3]=e;var c=.5*u,f=.5*o,M=.5*i;return s[4]=c*e+f*r-M*n,s[5]=f*e+M*t-c*r,s[6]=M*e+c*n-f*t,s[7]=-c*t-f*n-M*r,s},n.fromRotationTranslation=i,n.fromTranslation=function(t,n){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=.5*n[0],t[5]=.5*n[1],t[6]=.5*n[2],t[7]=0,t},n.fromRotation=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=0,t[5]=0,t[6]=0,t[7]=0,t},n.fromMat4=function(t,n){var r=e.create();u.getRotation(r,n);var o=new a.ARRAY_TYPE(3);return u.getTranslation(o,n),i(t,r,o),t},n.copy=s,n.identity=function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t},n.set=function(t,n,r,a,e,u,o,i,s){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t[4]=u,t[5]=o,t[6]=i,t[7]=s,t},n.getDual=function(t,n){return t[0]=n[4],t[1]=n[5],t[2]=n[6],t[3]=n[7],t},n.setDual=function(t,n){return t[4]=n[0],t[5]=n[1],t[6]=n[2],t[7]=n[3],t},n.getTranslation=function(t,n){var r=n[4],a=n[5],e=n[6],u=n[7],o=-n[0],i=-n[1],s=-n[2],c=n[3];return t[0]=2*(r*c+u*o+a*s-e*i),t[1]=2*(a*c+u*i+e*o-r*s),t[2]=2*(e*c+u*s+r*i-a*o),t},n.translate=function(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=.5*r[0],s=.5*r[1],c=.5*r[2],f=n[4],M=n[5],h=n[6],l=n[7];return t[0]=a,t[1]=e,t[2]=u,t[3]=o,t[4]=o*i+e*c-u*s+f,t[5]=o*s+u*i-a*c+M,t[6]=o*c+a*s-e*i+h,t[7]=-a*i-e*s-u*c+l,t},n.rotateX=function(t,n,r){var a=-n[0],u=-n[1],o=-n[2],i=n[3],s=n[4],c=n[5],f=n[6],M=n[7],h=s*i+M*a+c*o-f*u,l=c*i+M*u+f*a-s*o,v=f*i+M*o+s*u-c*a,d=M*i-s*a-c*u-f*o;return e.rotateX(t,n,r),a=t[0],u=t[1],o=t[2],i=t[3],t[4]=h*i+d*a+l*o-v*u,t[5]=l*i+d*u+v*a-h*o,t[6]=v*i+d*o+h*u-l*a,t[7]=d*i-h*a-l*u-v*o,t},n.rotateY=function(t,n,r){var a=-n[0],u=-n[1],o=-n[2],i=n[3],s=n[4],c=n[5],f=n[6],M=n[7],h=s*i+M*a+c*o-f*u,l=c*i+M*u+f*a-s*o,v=f*i+M*o+s*u-c*a,d=M*i-s*a-c*u-f*o;return e.rotateY(t,n,r),a=t[0],u=t[1],o=t[2],i=t[3],t[4]=h*i+d*a+l*o-v*u,t[5]=l*i+d*u+v*a-h*o,t[6]=v*i+d*o+h*u-l*a,t[7]=d*i-h*a-l*u-v*o,t},n.rotateZ=function(t,n,r){var a=-n[0],u=-n[1],o=-n[2],i=n[3],s=n[4],c=n[5],f=n[6],M=n[7],h=s*i+M*a+c*o-f*u,l=c*i+M*u+f*a-s*o,v=f*i+M*o+s*u-c*a,d=M*i-s*a-c*u-f*o;return e.rotateZ(t,n,r),a=t[0],u=t[1],o=t[2],i=t[3],t[4]=h*i+d*a+l*o-v*u,t[5]=l*i+d*u+v*a-h*o,t[6]=v*i+d*o+h*u-l*a,t[7]=d*i-h*a-l*u-v*o,t},n.rotateByQuatAppend=function(t,n,r){var a=r[0],e=r[1],u=r[2],o=r[3],i=n[0],s=n[1],c=n[2],f=n[3];return t[0]=i*o+f*a+s*u-c*e,t[1]=s*o+f*e+c*a-i*u,t[2]=c*o+f*u+i*e-s*a,t[3]=f*o-i*a-s*e-c*u,i=n[4],s=n[5],c=n[6],f=n[7],t[4]=i*o+f*a+s*u-c*e,t[5]=s*o+f*e+c*a-i*u,t[6]=c*o+f*u+i*e-s*a,t[7]=f*o-i*a-s*e-c*u,t},n.rotateByQuatPrepend=function(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=r[0],s=r[1],c=r[2],f=r[3];return t[0]=a*f+o*i+e*c-u*s,t[1]=e*f+o*s+u*i-a*c,t[2]=u*f+o*c+a*s-e*i,t[3]=o*f-a*i-e*s-u*c,i=r[4],s=r[5],c=r[6],f=r[7],t[4]=a*f+o*i+e*c-u*s,t[5]=e*f+o*s+u*i-a*c,t[6]=u*f+o*c+a*s-e*i,t[7]=o*f-a*i-e*s-u*c,t},n.rotateAroundAxis=function(t,n,r,e){if(Math.abs(e)<a.EPSILON)return s(t,n);var u=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);e*=.5;var o=Math.sin(e),i=o*r[0]/u,c=o*r[1]/u,f=o*r[2]/u,M=Math.cos(e),h=n[0],l=n[1],v=n[2],d=n[3];t[0]=h*M+d*i+l*f-v*c,t[1]=l*M+d*c+v*i-h*f,t[2]=v*M+d*f+h*c-l*i,t[3]=d*M-h*i-l*c-v*f;var b=n[4],m=n[5],p=n[6],P=n[7];return t[4]=b*M+P*i+m*f-p*c,t[5]=m*M+P*c+p*i-b*f,t[6]=p*M+P*f+b*c-m*i,t[7]=P*M-b*i-m*c-p*f,t},n.add=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t[6]=n[6]+r[6],t[7]=n[7]+r[7],t},n.multiply=c,n.scale=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=n[7]*r,t},n.lerp=function(t,n,r,a){var e=1-a;f(n,r)<0&&(a=-a);return t[0]=n[0]*e+r[0]*a,t[1]=n[1]*e+r[1]*a,t[2]=n[2]*e+r[2]*a,t[3]=n[3]*e+r[3]*a,t[4]=n[4]*e+r[4]*a,t[5]=n[5]*e+r[5]*a,t[6]=n[6]*e+r[6]*a,t[7]=n[7]*e+r[7]*a,t},n.invert=function(t,n){var r=h(n);return t[0]=-n[0]/r,t[1]=-n[1]/r,t[2]=-n[2]/r,t[3]=n[3]/r,t[4]=-n[4]/r,t[5]=-n[5]/r,t[6]=-n[6]/r,t[7]=n[7]/r,t},n.conjugate=function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t[4]=-n[4],t[5]=-n[5],t[6]=-n[6],t[7]=n[7],t},n.normalize=function(t,n){var r=h(n);if(r>0){r=Math.sqrt(r);var a=n[0]/r,e=n[1]/r,u=n[2]/r,o=n[3]/r,i=n[4],s=n[5],c=n[6],f=n[7],M=a*i+e*s+u*c+o*f;t[0]=a,t[1]=e,t[2]=u,t[3]=o,t[4]=(i-a*M)/r,t[5]=(s-e*M)/r,t[6]=(c-u*M)/r,t[7]=(f-o*M)/r}return t},n.str=function(t){return"quat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+")"},n.exactEquals=function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]},n.equals=function(t,n){var r=t[0],e=t[1],u=t[2],o=t[3],i=t[4],s=t[5],c=t[6],f=t[7],M=n[0],h=n[1],l=n[2],v=n[3],d=n[4],b=n[5],m=n[6],p=n[7];return Math.abs(r-M)<=a.EPSILON*Math.max(1,Math.abs(r),Math.abs(M))&&Math.abs(e-h)<=a.EPSILON*Math.max(1,Math.abs(e),Math.abs(h))&&Math.abs(u-l)<=a.EPSILON*Math.max(1,Math.abs(u),Math.abs(l))&&Math.abs(o-v)<=a.EPSILON*Math.max(1,Math.abs(o),Math.abs(v))&&Math.abs(i-d)<=a.EPSILON*Math.max(1,Math.abs(i),Math.abs(d))&&Math.abs(s-b)<=a.EPSILON*Math.max(1,Math.abs(s),Math.abs(b))&&Math.abs(c-m)<=a.EPSILON*Math.max(1,Math.abs(c),Math.abs(m))&&Math.abs(f-p)<=a.EPSILON*Math.max(1,Math.abs(f),Math.abs(p))};var a=o(r(0)),e=o(r(3)),u=o(r(4));function o(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}function i(t,n,r){var a=.5*r[0],e=.5*r[1],u=.5*r[2],o=n[0],i=n[1],s=n[2],c=n[3];return t[0]=o,t[1]=i,t[2]=s,t[3]=c,t[4]=a*c+e*s-u*i,t[5]=e*c+u*o-a*s,t[6]=u*c+a*i-e*o,t[7]=-a*o-e*i-u*s,t}function s(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t}n.getReal=e.copy;n.setReal=e.copy;function c(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=r[4],s=r[5],c=r[6],f=r[7],M=n[4],h=n[5],l=n[6],v=n[7],d=r[0],b=r[1],m=r[2],p=r[3];return t[0]=a*p+o*d+e*m-u*b,t[1]=e*p+o*b+u*d-a*m,t[2]=u*p+o*m+a*b-e*d,t[3]=o*p-a*d-e*b-u*m,t[4]=a*f+o*i+e*c-u*s+M*p+v*d+h*m-l*b,t[5]=e*f+o*s+u*i-a*c+h*p+v*b+l*d-M*m,t[6]=u*f+o*c+a*s-e*i+l*p+v*m+M*b-h*d,t[7]=o*f-a*i-e*s-u*c+v*p-M*d-h*b-l*m,t}n.mul=c;var f=n.dot=e.dot;var M=n.length=e.length,h=(n.len=M,n.squaredLength=e.squaredLength);n.sqrLen=h},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.sub=n.mul=void 0,n.create=function(){var t=new a.ARRAY_TYPE(6);a.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0,t[4]=0,t[5]=0);return t[0]=1,t[3]=1,t},n.clone=function(t){var n=new a.ARRAY_TYPE(6);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n},n.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t},n.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},n.fromValues=function(t,n,r,e,u,o){var i=new a.ARRAY_TYPE(6);return i[0]=t,i[1]=n,i[2]=r,i[3]=e,i[4]=u,i[5]=o,i},n.set=function(t,n,r,a,e,u,o){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t[4]=u,t[5]=o,t},n.invert=function(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=n[4],i=n[5],s=r*u-a*e;if(!s)return null;return s=1/s,t[0]=u*s,t[1]=-a*s,t[2]=-e*s,t[3]=r*s,t[4]=(e*i-u*o)*s,t[5]=(a*o-r*i)*s,t},n.determinant=function(t){return t[0]*t[3]-t[1]*t[2]},n.multiply=e,n.rotate=function(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=Math.sin(r),f=Math.cos(r);return t[0]=a*f+u*c,t[1]=e*f+o*c,t[2]=a*-c+u*f,t[3]=e*-c+o*f,t[4]=i,t[5]=s,t},n.scale=function(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=r[0],f=r[1];return t[0]=a*c,t[1]=e*c,t[2]=u*f,t[3]=o*f,t[4]=i,t[5]=s,t},n.translate=function(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=r[0],f=r[1];return t[0]=a,t[1]=e,t[2]=u,t[3]=o,t[4]=a*c+u*f+i,t[5]=e*c+o*f+s,t},n.fromRotation=function(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=-r,t[3]=a,t[4]=0,t[5]=0,t},n.fromScaling=function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t[4]=0,t[5]=0,t},n.fromTranslation=function(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=n[0],t[5]=n[1],t},n.str=function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},n.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)},n.add=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t[4]=n[4]+r[4],t[5]=n[5]+r[5],t},n.subtract=u,n.multiplyScalar=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*r,t[5]=n[5]*r,t},n.multiplyScalarAndAdd=function(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t[4]=n[4]+r[4]*a,t[5]=n[5]+r[5]*a,t},n.exactEquals=function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]},n.equals=function(t,n){var r=t[0],e=t[1],u=t[2],o=t[3],i=t[4],s=t[5],c=n[0],f=n[1],M=n[2],h=n[3],l=n[4],v=n[5];return Math.abs(r-c)<=a.EPSILON*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(e-f)<=a.EPSILON*Math.max(1,Math.abs(e),Math.abs(f))&&Math.abs(u-M)<=a.EPSILON*Math.max(1,Math.abs(u),Math.abs(M))&&Math.abs(o-h)<=a.EPSILON*Math.max(1,Math.abs(o),Math.abs(h))&&Math.abs(i-l)<=a.EPSILON*Math.max(1,Math.abs(i),Math.abs(l))&&Math.abs(s-v)<=a.EPSILON*Math.max(1,Math.abs(s),Math.abs(v))};var a=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(r(0));function e(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=n[4],s=n[5],c=r[0],f=r[1],M=r[2],h=r[3],l=r[4],v=r[5];return t[0]=a*c+u*f,t[1]=e*c+o*f,t[2]=a*M+u*h,t[3]=e*M+o*h,t[4]=a*l+u*v+i,t[5]=e*l+o*v+s,t}function u(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t[4]=n[4]-r[4],t[5]=n[5]-r[5],t}n.mul=e,n.sub=u},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.sub=n.mul=void 0,n.create=function(){var t=new a.ARRAY_TYPE(4);a.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0);return t[0]=1,t[3]=1,t},n.clone=function(t){var n=new a.ARRAY_TYPE(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n},n.copy=function(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t},n.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},n.fromValues=function(t,n,r,e){var u=new a.ARRAY_TYPE(4);return u[0]=t,u[1]=n,u[2]=r,u[3]=e,u},n.set=function(t,n,r,a,e){return t[0]=n,t[1]=r,t[2]=a,t[3]=e,t},n.transpose=function(t,n){if(t===n){var r=n[1];t[1]=n[2],t[2]=r}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t},n.invert=function(t,n){var r=n[0],a=n[1],e=n[2],u=n[3],o=r*u-e*a;if(!o)return null;return o=1/o,t[0]=u*o,t[1]=-a*o,t[2]=-e*o,t[3]=r*o,t},n.adjoint=function(t,n){var r=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=r,t},n.determinant=function(t){return t[0]*t[3]-t[2]*t[1]},n.multiply=e,n.rotate=function(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=Math.sin(r),s=Math.cos(r);return t[0]=a*s+u*i,t[1]=e*s+o*i,t[2]=a*-i+u*s,t[3]=e*-i+o*s,t},n.scale=function(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=r[0],s=r[1];return t[0]=a*i,t[1]=e*i,t[2]=u*s,t[3]=o*s,t},n.fromRotation=function(t,n){var r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=-r,t[3]=a,t},n.fromScaling=function(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t},n.str=function(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},n.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))},n.LDU=function(t,n,r,a){return t[2]=a[2]/a[0],r[0]=a[0],r[1]=a[1],r[3]=a[3]-t[2]*r[1],[t,n,r]},n.add=function(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t},n.subtract=u,n.exactEquals=function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]},n.equals=function(t,n){var r=t[0],e=t[1],u=t[2],o=t[3],i=n[0],s=n[1],c=n[2],f=n[3];return Math.abs(r-i)<=a.EPSILON*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(e-s)<=a.EPSILON*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(u-c)<=a.EPSILON*Math.max(1,Math.abs(u),Math.abs(c))&&Math.abs(o-f)<=a.EPSILON*Math.max(1,Math.abs(o),Math.abs(f))},n.multiplyScalar=function(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t},n.multiplyScalarAndAdd=function(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t};var a=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(r(0));function e(t,n,r){var a=n[0],e=n[1],u=n[2],o=n[3],i=r[0],s=r[1],c=r[2],f=r[3];return t[0]=a*i+u*s,t[1]=e*i+o*s,t[2]=a*c+u*f,t[3]=e*c+o*f,t}function u(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t}n.mul=e,n.sub=u},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.vec4=n.vec3=n.vec2=n.quat2=n.quat=n.mat4=n.mat3=n.mat2d=n.mat2=n.glMatrix=void 0;var a=l(r(0)),e=l(r(9)),u=l(r(8)),o=l(r(5)),i=l(r(4)),s=l(r(3)),c=l(r(7)),f=l(r(6)),M=l(r(2)),h=l(r(1));function l(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}n.glMatrix=a,n.mat2=e,n.mat2d=u,n.mat3=o,n.mat4=i,n.quat=s,n.quat2=c,n.vec2=f,n.vec3=M,n.vec4=h}])});

/***/ }),
/* 387 */,
/* 388 */,
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	var createUniformWrapper   = __webpack_require__(390)
	var createAttributeWrapper = __webpack_require__(393)
	var makeReflect            = __webpack_require__(391)
	var shaderCache            = __webpack_require__(394)
	var runtime                = __webpack_require__(415)
	var GLError                = __webpack_require__(392)
	
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


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	var coallesceUniforms = __webpack_require__(391)
	var GLError = __webpack_require__(392)
	
	module.exports = createUniformWrapper
	
	//Binds a function and returns a value
	function identity(x) {
	  return function() {
	    return x
	  }
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
	
	  function makeGetter(idx) {
	    return function(gl, wrapper, locations) {
	      return gl.getUniform(wrapper.program, locations[idx])
	    }
	  }
	
	  function makeSetter(type) {
	    return function updateProperty(obj){
	      var indices = enumerateIndices('', type)
	      for(var i=0; i<indices.length; ++i) {
	        var item = indices[i]
	        var path = item[0]
	        var idx  = item[1]
	        if(locations[idx]) {
	          var objPath =  obj
	          if(typeof path === 'string' && (
	            path.indexOf('.') === 0 ||
	            path.indexOf('[') === 0
	          )) {
	            var key = path
	            if(path.indexOf('.') === 0) {
	              key = path.slice(1)
	            }
	
	            if(key.indexOf(']') === key.length - 1) {
	              var j = key.indexOf('[')
	              var k1 = key.slice(0, j)
	              var k2 = key.slice(j + 1, key.length - 1)
	              objPath = k1? obj[k1][k2] : obj[k2]
	            } else {
	              objPath = obj[key]
	            }
	          }
	
	          var t = uniforms[idx].type
	          var d
	          switch(t) {
	            case 'bool':
	            case 'int':
	            case 'sampler2D':
	            case 'samplerCube':
	              gl.uniform1i(locations[idx], objPath)
	              break
	            case 'float':
	              gl.uniform1f(locations[idx], objPath)
	              break
	            default:
	              var vidx = t.indexOf('vec')
	              if(0 <= vidx && vidx <= 1 && t.length === 4 + vidx) {
	                d = t.charCodeAt(t.length-1) - 48
	                if(d < 2 || d > 4) {
	                  throw new GLError('', 'Invalid data type')
	                }
	                switch(t.charAt(0)) {
	                  case 'b':
	                  case 'i':
	                    gl['uniform' + d + 'iv'](locations[idx], objPath)
	                    break
	                  case 'v':
	                    gl['uniform' + d + 'fv'](locations[idx], objPath)
	                    break
	                  default:
	                    throw new GLError('', 'Unrecognized data type for vector ' + name + ': ' + t)
	                }
	              } else if(t.indexOf('mat') === 0 && t.length === 4) {
	                d = t.charCodeAt(t.length-1) - 48
	                if(d < 2 || d > 4) {
	                  throw new GLError('', 'Invalid uniform dimension type for matrix ' + name + ': ' + t)
	                }
	                gl['uniformMatrix' + d + 'fv'](locations[idx], false, objPath)
	                break
	              } else {
	                throw new GLError('', 'Unknown uniform data type for ' + name + ': ' + t)
	              }
	          }
	        }
	      }
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


/***/ }),
/* 391 */
/***/ (function(module, exports) {

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

/***/ }),
/* 392 */
/***/ (function(module, exports) {

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


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	module.exports = createAttributeWrapper
	
	var GLError = __webpack_require__(392)
	
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
	
	var allFns = [
	  function (gl, v, x0) {
	    if (x0.length === undefined) {
	      return gl.vertexAttrib1f(v, x0)
	    } else {
	      return gl.vertexAttrib1fv(v, x0)
	    }
	  },
	
	  function (gl, v, x0, x1) {
	    if (x0.length === undefined) {
	      return gl.vertexAttrib2f(v, x0, x1)
	    } else {
	      return gl.vertexAttrib2fv(v, x0)
	    }
	  },
	
	  function (gl, v, x0, x1, x2) {
	    if (x0.length === undefined) {
	      return gl.vertexAttrib3f(v, x0, x1, x2)
	    } else {
	      return gl.vertexAttrib3fv(v, x0)
	    }
	  },
	
	  function (gl, v, x0, x1, x2, x3) {
	    if (x0.length === undefined) {
	      return gl.vertexAttrib4f(v, x0, x1, x2, x3)
	    } else {
	      return gl.vertexAttrib4fv(v, x0)
	    }
	  }
	]
	
	//Adds a vector attribute to obj
	function addVectorAttribute(
	    gl
	  , wrapper
	  , index
	  , locations
	  , dimension
	  , obj
	  , name) {
	
	  var constFunc = allFns[dimension]
	
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


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	exports.shader   = getShaderReference
	exports.program  = createProgram
	
	var GLError = __webpack_require__(392)
	var formatCompilerError = __webpack_require__(395);
	
	var weakMap = typeof WeakMap === 'undefined' ? __webpack_require__(412) : WeakMap
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


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

	
	var sprintf = __webpack_require__(396).sprintf;
	var glConstants = __webpack_require__(398);
	var shaderName = __webpack_require__(400);
	var addLineNumbers = __webpack_require__(409);
	
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
	        if (errorString === '' || errorString === "\0") continue;
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
	


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* global window, exports, define */
	
	!function() {
	    'use strict'
	
	    var re = {
	        not_string: /[^s]/,
	        not_bool: /[^t]/,
	        not_type: /[^T]/,
	        not_primitive: /[^v]/,
	        number: /[diefg]/,
	        numeric_arg: /[bcdiefguxX]/,
	        json: /[j]/,
	        not_json: /[^j]/,
	        text: /^[^\x25]+/,
	        modulo: /^\x25{2}/,
	        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
	        key: /^([a-z_][a-z_\d]*)/i,
	        key_access: /^\.([a-z_][a-z_\d]*)/i,
	        index_access: /^\[(\d+)\]/,
	        sign: /^[+-]/
	    }
	
	    function sprintf(key) {
	        // `arguments` is not an array, but should be fine for this call
	        return sprintf_format(sprintf_parse(key), arguments)
	    }
	
	    function vsprintf(fmt, argv) {
	        return sprintf.apply(null, [fmt].concat(argv || []))
	    }
	
	    function sprintf_format(parse_tree, argv) {
	        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, ph, pad, pad_character, pad_length, is_positive, sign
	        for (i = 0; i < tree_length; i++) {
	            if (typeof parse_tree[i] === 'string') {
	                output += parse_tree[i]
	            }
	            else if (typeof parse_tree[i] === 'object') {
	                ph = parse_tree[i] // convenience purposes only
	                if (ph.keys) { // keyword argument
	                    arg = argv[cursor]
	                    for (k = 0; k < ph.keys.length; k++) {
	                        if (arg == undefined) {
	                            throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k-1]))
	                        }
	                        arg = arg[ph.keys[k]]
	                    }
	                }
	                else if (ph.param_no) { // positional argument (explicit)
	                    arg = argv[ph.param_no]
	                }
	                else { // positional argument (implicit)
	                    arg = argv[cursor++]
	                }
	
	                if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
	                    arg = arg()
	                }
	
	                if (re.numeric_arg.test(ph.type) && (typeof arg !== 'number' && isNaN(arg))) {
	                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
	                }
	
	                if (re.number.test(ph.type)) {
	                    is_positive = arg >= 0
	                }
	
	                switch (ph.type) {
	                    case 'b':
	                        arg = parseInt(arg, 10).toString(2)
	                        break
	                    case 'c':
	                        arg = String.fromCharCode(parseInt(arg, 10))
	                        break
	                    case 'd':
	                    case 'i':
	                        arg = parseInt(arg, 10)
	                        break
	                    case 'j':
	                        arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0)
	                        break
	                    case 'e':
	                        arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential()
	                        break
	                    case 'f':
	                        arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg)
	                        break
	                    case 'g':
	                        arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg)
	                        break
	                    case 'o':
	                        arg = (parseInt(arg, 10) >>> 0).toString(8)
	                        break
	                    case 's':
	                        arg = String(arg)
	                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
	                        break
	                    case 't':
	                        arg = String(!!arg)
	                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
	                        break
	                    case 'T':
	                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
	                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
	                        break
	                    case 'u':
	                        arg = parseInt(arg, 10) >>> 0
	                        break
	                    case 'v':
	                        arg = arg.valueOf()
	                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
	                        break
	                    case 'x':
	                        arg = (parseInt(arg, 10) >>> 0).toString(16)
	                        break
	                    case 'X':
	                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase()
	                        break
	                }
	                if (re.json.test(ph.type)) {
	                    output += arg
	                }
	                else {
	                    if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
	                        sign = is_positive ? '+' : '-'
	                        arg = arg.toString().replace(re.sign, '')
	                    }
	                    else {
	                        sign = ''
	                    }
	                    pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' '
	                    pad_length = ph.width - (sign + arg).length
	                    pad = ph.width ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : ''
	                    output += ph.align ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg)
	                }
	            }
	        }
	        return output
	    }
	
	    var sprintf_cache = Object.create(null)
	
	    function sprintf_parse(fmt) {
	        if (sprintf_cache[fmt]) {
	            return sprintf_cache[fmt]
	        }
	
	        var _fmt = fmt, match, parse_tree = [], arg_names = 0
	        while (_fmt) {
	            if ((match = re.text.exec(_fmt)) !== null) {
	                parse_tree.push(match[0])
	            }
	            else if ((match = re.modulo.exec(_fmt)) !== null) {
	                parse_tree.push('%')
	            }
	            else if ((match = re.placeholder.exec(_fmt)) !== null) {
	                if (match[2]) {
	                    arg_names |= 1
	                    var field_list = [], replacement_field = match[2], field_match = []
	                    if ((field_match = re.key.exec(replacement_field)) !== null) {
	                        field_list.push(field_match[1])
	                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
	                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
	                                field_list.push(field_match[1])
	                            }
	                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
	                                field_list.push(field_match[1])
	                            }
	                            else {
	                                throw new SyntaxError('[sprintf] failed to parse named argument key')
	                            }
	                        }
	                    }
	                    else {
	                        throw new SyntaxError('[sprintf] failed to parse named argument key')
	                    }
	                    match[2] = field_list
	                }
	                else {
	                    arg_names |= 2
	                }
	                if (arg_names === 3) {
	                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
	                }
	
	                parse_tree.push(
	                    {
	                        placeholder: match[0],
	                        param_no:    match[1],
	                        keys:        match[2],
	                        sign:        match[3],
	                        pad_char:    match[4],
	                        align:       match[5],
	                        width:       match[6],
	                        precision:   match[7],
	                        type:        match[8]
	                    }
	                )
	            }
	            else {
	                throw new SyntaxError('[sprintf] unexpected placeholder')
	            }
	            _fmt = _fmt.substring(match[0].length)
	        }
	        return sprintf_cache[fmt] = parse_tree
	    }
	
	    /**
	     * export to either browser or node.js
	     */
	    /* eslint-disable quote-props */
	    if (true) {
	        exports['sprintf'] = sprintf
	        exports['vsprintf'] = vsprintf
	    }
	    if (typeof window !== 'undefined') {
	        window['sprintf'] = sprintf
	        window['vsprintf'] = vsprintf
	
	        if ("function" === 'function' && __webpack_require__(397)['amd']) {
	            !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	                return {
	                    'sprintf': sprintf,
	                    'vsprintf': vsprintf
	                }
	            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	        }
	    }
	    /* eslint-enable quote-props */
	}(); // eslint-disable-line


/***/ }),
/* 397 */
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

	var gl10 = __webpack_require__(399)
	
	module.exports = function lookupConstant (number) {
	  return gl10[number]
	}


/***/ }),
/* 399 */
/***/ (function(module, exports) {

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


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

	var tokenize = __webpack_require__(401)
	var atob     = __webpack_require__(408)
	
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


/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

	var tokenize = __webpack_require__(402)
	
	module.exports = tokenizeString
	
	function tokenizeString(str, opt) {
	  var generator = tokenize(opt)
	  var tokens = []
	
	  tokens = tokens.concat(generator(str))
	  tokens = tokens.concat(generator(null))
	
	  return tokens
	}


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = tokenize
	
	var literals100 = __webpack_require__(403)
	  , operators = __webpack_require__(404)
	  , builtins100 = __webpack_require__(405)
	  , literals300es = __webpack_require__(406)
	  , builtins300es = __webpack_require__(407)
	
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
	
	  // cache by name
	  var builtinsDict = {}, literalsDict = {}
	  for (var i = 0; i < allBuiltins.length; i++) {
	    builtinsDict[allBuiltins[i]] = true
	  }
	  for (var i = 0; i < allLiterals.length; i++) {
	    literalsDict[allLiterals[i]] = true
	  }
	
	  return function(data) {
	    tokens = []
	    if (data !== null) return write(data)
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
	
	    if (chunk.toString) chunk = chunk.toString()
	
	    input += chunk.replace(/\r\n/g, '\n')
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
	
	    if ((c === '-' || c === '+') && /[eE]/.test(last)) {
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
	      if(literalsDict[contentstr]) {
	        mode = KEYWORD
	      } else if(builtinsDict[contentstr]) {
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


/***/ }),
/* 403 */
/***/ (function(module, exports) {

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
	  , 'uint'
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


/***/ }),
/* 404 */
/***/ (function(module, exports) {

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


/***/ }),
/* 405 */
/***/ (function(module, exports) {

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


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

	var v100 = __webpack_require__(403)
	
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


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

	// 300es builtins/reserved words that were previously valid in v100
	var v100 = __webpack_require__(405)
	
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


/***/ }),
/* 408 */
/***/ (function(module, exports) {

	module.exports = function _atob(str) {
	  return atob(str)
	}


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

	var padLeft = __webpack_require__(410)
	
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


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * pad-left <https://github.com/jonschlinkert/pad-left>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT license.
	 */
	
	'use strict';
	
	var repeat = __webpack_require__(411);
	
	module.exports = function padLeft(str, num, ch) {
	  ch = typeof ch !== 'undefined' ? (ch + '') : ' ';
	  return repeat(ch, num) + str;
	};

/***/ }),
/* 411 */
/***/ (function(module, exports) {

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


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

	// Original - @Gozola.
	// https://gist.github.com/Gozala/1269991
	// This is a reimplemented version (with a few bug fixes).
	
	var createStore = __webpack_require__(413);
	
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
	            return this;
	        },
	        'has': function(key) {
	            return 'value' in privates(key);
	        },
	        'delete': function (key) {
	            return delete privates(key).value;
	        }
	    }
	}


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

	var hiddenStore = __webpack_require__(414);
	
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


/***/ }),
/* 414 */
/***/ (function(module, exports) {

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


/***/ }),
/* 415 */
/***/ (function(module, exports) {

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


/***/ }),
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */
/***/ (function(module, exports) {

	'use strict';
	
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
	  return array[(array.length + Math.round(index)) % array.length];
	};
	
	var invLog2 = 1 / Math.log(2);
	
	var nextPow2 = exports.nextPow2 = function nextPow2(x) {
	  return Math.pow(2, Math.ceil(Math.log(x) * invLog2));
	};
	
	// Handle paths on different hosts
	var rootPath = exports.rootPath = location.href.match('://keeffeoghan.github.io/portfolio/') ? '/portfolio/' : '/';

/***/ }),
/* 425 */,
/* 426 */
/***/ (function(module, exports) {

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

/***/ }),
/* 427 */,
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	var createTexture = __webpack_require__(429)
	
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


/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict'
	
	var ndarray = __webpack_require__(430)
	var ops     = __webpack_require__(433)
	var pool    = __webpack_require__(438)
	
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
	  var directData = acceptTextureDOM(data) ? data : data.raw
	  if(directData) {
	    var needsMip = this._mipLevels.indexOf(mip_level) < 0
	    if(needsMip) {
	      gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.format, this.type, directData)
	      this._mipLevels.push(mip_level)
	    } else {
	      gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, this.format, this.type, directData)
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
	
	function createTextureDOM(gl, directData, width, height, format, type) {
	  var tex = initTexture(gl)
	  gl.texImage2D(gl.TEXTURE_2D, 0, format, format, type, directData)
	  return new Texture2D(gl, tex, width, height, format, type)
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
	    var directData = acceptTextureDOM(obj) ? obj : obj.raw
	    if (directData) {
	      return createTextureDOM(gl, directData, obj.width|0, obj.height|0, arguments[2]||gl.RGBA, arguments[3]||gl.UNSIGNED_BYTE)
	    } else if(obj.shape && obj.data && obj.stride) {
	      return createTextureArray(gl, obj)
	    }
	  }
	  throw new Error('gl-texture2d: Invalid arguments for texture2d constructor')
	}


/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

	var iota = __webpack_require__(431)
	var isBuffer = __webpack_require__(432)
	
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
	      case "[object BigInt64Array]":
	        return "bigint64"
	      case "[object BigUint64Array]":
	        return "biguint64"
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
	  "bigint64": [],
	  "biguint64": [],
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


/***/ }),
/* 431 */
/***/ (function(module, exports) {

	"use strict"
	
	function iota(n) {
	  var result = new Array(n)
	  for(var i=0; i<n; ++i) {
	    result[i] = i
	  }
	  return result
	}
	
	module.exports = iota

/***/ }),
/* 432 */
/***/ (function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
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


/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict"
	
	var compile = __webpack_require__(434)
	
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
	
	


/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict"
	
	var createThunk = __webpack_require__(435)
	
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


/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

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
	
	var compile = __webpack_require__(436)
	
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


/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict"
	
	var uniq = __webpack_require__(437)
	
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
	  if (vars.length > 0) {
	    code.push("var " + vars.join(","))
	  }  
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
	  if (vars.length > 0) {
	    code.push("var " + vars.join(","))
	  }
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


/***/ }),
/* 437 */
/***/ (function(module, exports) {

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


/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict'
	
	var bits = __webpack_require__(439)
	var dup = __webpack_require__(440)
	var Buffer = __webpack_require__(441).Buffer
	
	//Legacy pool support
	if(!global.__TYPEDARRAY_POOL) {
	  global.__TYPEDARRAY_POOL = {
	      UINT8     : dup([32, 0])
	    , UINT16    : dup([32, 0])
	    , UINT32    : dup([32, 0])
	    , BIGUINT64 : dup([32, 0])
	    , INT8      : dup([32, 0])
	    , INT16     : dup([32, 0])
	    , INT32     : dup([32, 0])
	    , BIGINT64  : dup([32, 0])
	    , FLOAT     : dup([32, 0])
	    , DOUBLE    : dup([32, 0])
	    , DATA      : dup([32, 0])
	    , UINT8C    : dup([32, 0])
	    , BUFFER    : dup([32, 0])
	  }
	}
	
	var hasUint8C = (typeof Uint8ClampedArray) !== 'undefined'
	var hasBigUint64 = (typeof BigUint64Array) !== 'undefined'
	var hasBigInt64 = (typeof BigInt64Array) !== 'undefined'
	var POOL = global.__TYPEDARRAY_POOL
	
	//Upgrade pool
	if(!POOL.UINT8C) {
	  POOL.UINT8C = dup([32, 0])
	}
	if(!POOL.BIGUINT64) {
	  POOL.BIGUINT64 = dup([32, 0])
	}
	if(!POOL.BIGINT64) {
	  POOL.BIGINT64 = dup([32, 0])
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
	exports.freeBigUint64 =
	exports.freeInt8 =
	exports.freeInt16 =
	exports.freeInt32 =
	exports.freeBigInt64 =
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
	      case 'bigint64':
	        return mallocBigInt64(n)
	      case 'biguint64':
	        return mallocBigUint64(n)
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
	
	function mallocBigUint64(n) {
	  if(hasBigUint64) {
	    return new BigUint64Array(mallocArrayBuffer(8*n), 0, n)
	  } else {
	    return null;
	  }
	}
	exports.mallocBigUint64 = mallocBigUint64
	
	function mallocBigInt64(n) {
	  if (hasBigInt64) {
	    return new BigInt64Array(mallocArrayBuffer(8*n), 0, n)
	  } else {
	    return null;
	  }
	}
	exports.mallocBigInt64 = mallocBigInt64
	
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
	    POOL.BIGUINT64[i].length = 0
	    POOL.BIGINT64[i].length = 0
	    POOL.UINT8C[i].length = 0
	    DATA[i].length = 0
	    BUFFER[i].length = 0
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 439 */
/***/ (function(module, exports) {

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
	


/***/ }),
/* 440 */
/***/ (function(module, exports) {

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

/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(442)
	var ieee754 = __webpack_require__(443)
	var isArray = __webpack_require__(444)
	
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 442 */
/***/ (function(module, exports) {

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
	
	// Support decoding URL-safe base64 strings, as Node.js does.
	// See: https://en.wikipedia.org/wiki/Base64#URL_applications
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63
	
	function getLens (b64) {
	  var len = b64.length
	
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // Trim off extra bytes after placeholder bytes are found
	  // See: https://github.com/beatgammit/base64-js/issues/42
	  var validLen = b64.indexOf('=')
	  if (validLen === -1) validLen = len
	
	  var placeHoldersLen = validLen === len
	    ? 0
	    : 4 - (validLen % 4)
	
	  return [validLen, placeHoldersLen]
	}
	
	// base64 is 4/3 + up to two characters of the original data
	function byteLength (b64) {
	  var lens = getLens(b64)
	  var validLen = lens[0]
	  var placeHoldersLen = lens[1]
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}
	
	function _byteLength (b64, validLen, placeHoldersLen) {
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}
	
	function toByteArray (b64) {
	  var tmp
	  var lens = getLens(b64)
	  var validLen = lens[0]
	  var placeHoldersLen = lens[1]
	
	  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))
	
	  var curByte = 0
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  var len = placeHoldersLen > 0
	    ? validLen - 4
	    : validLen
	
	  var i
	  for (i = 0; i < len; i += 4) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 18) |
	      (revLookup[b64.charCodeAt(i + 1)] << 12) |
	      (revLookup[b64.charCodeAt(i + 2)] << 6) |
	      revLookup[b64.charCodeAt(i + 3)]
	    arr[curByte++] = (tmp >> 16) & 0xFF
	    arr[curByte++] = (tmp >> 8) & 0xFF
	    arr[curByte++] = tmp & 0xFF
	  }
	
	  if (placeHoldersLen === 2) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 2) |
	      (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[curByte++] = tmp & 0xFF
	  }
	
	  if (placeHoldersLen === 1) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 10) |
	      (revLookup[b64.charCodeAt(i + 1)] << 4) |
	      (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[curByte++] = (tmp >> 8) & 0xFF
	    arr[curByte++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] +
	    lookup[num >> 12 & 0x3F] +
	    lookup[num >> 6 & 0x3F] +
	    lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp =
	      ((uint8[i] << 16) & 0xFF0000) +
	      ((uint8[i + 1] << 8) & 0xFF00) +
	      (uint8[i + 2] & 0xFF)
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    parts.push(
	      lookup[tmp >> 2] +
	      lookup[(tmp << 4) & 0x3F] +
	      '=='
	    )
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
	    parts.push(
	      lookup[tmp >> 10] +
	      lookup[(tmp >> 4) & 0x3F] +
	      lookup[(tmp << 2) & 0x3F] +
	      '='
	    )
	  }
	
	  return parts.join('')
	}


/***/ }),
/* 443 */
/***/ (function(module, exports) {

	/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = (nBytes * 8) - mLen - 1
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
	  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}
	
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
	  var eLen = (nBytes * 8) - mLen - 1
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
	      m = ((value * c) - 1) * Math.pow(2, mLen)
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


/***/ }),
/* 444 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict"
	
	var pool = __webpack_require__(438)
	var ops = __webpack_require__(433)
	var ndarray = __webpack_require__(430)
	
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


/***/ }),
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict"
	
	var createVAONative = __webpack_require__(456)
	var createVAOEmulated = __webpack_require__(458)
	
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


/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict"
	
	var bindAttribs = __webpack_require__(457)
	
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

/***/ }),
/* 457 */
/***/ (function(module, exports) {

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

/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict"
	
	var bindAttribs = __webpack_require__(457)
	
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

/***/ }),
/* 459 */,
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Screen = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _glBigTriangle = __webpack_require__(461);
	
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

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

	var createBuffer = __webpack_require__(451)
	var createVAO = __webpack_require__(455)
	
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


/***/ }),
/* 462 */
/***/ (function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nattribute vec2 position;\nvarying vec2 uv;\n\nvoid main() {\n  uv = position.xy;\n\n  gl_Position = vec4(position, 1.0, 1.0);\n}\n"

/***/ }),
/* 463 */,
/* 464 */,
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.coverAspect = exports.containAspect = exports.aspect = undefined;
	
	var _glMatrix = __webpack_require__(386);
	
	var aspect = exports.aspect = function aspect(out, size, scale) {
	  return _glMatrix.vec2.scale(out, _glMatrix.vec2.inverse(out, size), scale);
	};
	
	var containAspect = exports.containAspect = function containAspect(out, size) {
	  return aspect(out, size, Math.min(size[0], size[1]));
	};
	
	var coverAspect = exports.coverAspect = function coverAspect(out, size) {
	  return aspect(out, size, Math.max(size[0], size[1]));
	};
	
	exports.default = aspect;

/***/ }),
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

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
	
	var _utils = __webpack_require__(424);
	
	var _each = __webpack_require__(487);
	
	var _each2 = _interopRequireDefault(_each);
	
	var _data = __webpack_require__(489);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _dataLog = __webpack_require__(490);
	
	var _analyse = __webpack_require__(497);
	
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

/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.each = exports.eachList = undefined;
	
	var _iterable = __webpack_require__(488);
	
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

/***/ }),
/* 488 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var iterable = exports.iterable = function iterable(any) {
	  return any ? Object.keys(any) : [];
	};
	
	exports.default = iterable;

/***/ }),
/* 489 */
/***/ (function(module, exports) {

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

/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.makeOrderLog = exports.makeLog = undefined;
	
	var _times = __webpack_require__(491);
	
	var _times2 = _interopRequireDefault(_times);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Make an array of data bins, for logging.
	 *
	 * (3) => [*, *, *]
	 *
	 * @param {Number} size The size of the data log.
	 * @param {Function} dataMaker Creates new data storage instances, given an
	 *               index.
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
	 *   [*, *, *],
	 *   [*, *],
	 *   [*]
	 * ]
	 *
	 * @param {Number} order The order of the slope log - the total number of logs
	 *             will be a factorial of this value (`order!`),
	 *             descending in length at each level from `order` to 1.
	 * @param {Function} logMaker Creates new data storage log instances, given a
	 *              size.
	 * @return {Array} A 2D array, of logs of logs of data.
	 */
	var makeOrderLog = exports.makeOrderLog = function makeOrderLog(order) {
	  var logMaker = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : makeLog;
	  return (0, _times2.default)(order, function (i) {
	    return logMaker(order - i);
	  });
	};
	
	exports.default = makeOrderLog;

/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(492),
	    castFunction = __webpack_require__(493),
	    toInteger = __webpack_require__(495);
	
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


/***/ }),
/* 492 */
/***/ (function(module, exports) {

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


/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(494);
	
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


/***/ }),
/* 494 */
/***/ (function(module, exports) {

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


/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(496);
	
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


/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(370);
	
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


/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.meanWeight = exports.mean = exports.sumWeight = exports.sum = exports.peakPos = exports.peak = exports.logRates = undefined;
	exports.orderLogRates = orderLogRates;
	
	var _euler = __webpack_require__(498);
	
	var _map = __webpack_require__(499);
	
	var _reduce = __webpack_require__(500);
	
	var _utils = __webpack_require__(424);
	
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

/***/ }),
/* 498 */
/***/ (function(module, exports) {

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

/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.map = exports.mapList = undefined;
	
	var _reduce = __webpack_require__(500);
	
	var _iterable = __webpack_require__(488);
	
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

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reduce = exports.reduceList = undefined;
	
	var _iterable = __webpack_require__(488);
	
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

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

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
	
	var _glTexture2d = __webpack_require__(429);
	
	var _glTexture2d2 = _interopRequireDefault(_glTexture2d);
	
	var _ndarray = __webpack_require__(430);
	
	var _ndarray2 = _interopRequireDefault(_ndarray);
	
	var _isNumber = __webpack_require__(502);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	var _map = __webpack_require__(499);
	
	var _utils = __webpack_require__(503);
	
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
	      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.array;
	
	      this.texture.setPixels(array);
	
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

/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(374),
	    isObjectLike = __webpack_require__(378);
	
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


/***/ }),
/* 503 */
/***/ (function(module, exports) {

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

/***/ }),
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Player = exports.apply = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * A convenience class that wraps the timeline and tween utilities.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Players and timelines can be combined, nested, and played in parallel.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _timeline = __webpack_require__(519);
	
	var _timeline2 = _interopRequireDefault(_timeline);
	
	var _tween = __webpack_require__(524);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	var _each2 = __webpack_require__(487);
	
	var _each3 = _interopRequireDefault(_each2);
	
	var _reduce = __webpack_require__(500);
	
	var _reduce2 = _interopRequireDefault(_reduce);
	
	var _map = __webpack_require__(499);
	
	var _map2 = _interopRequireDefault(_map);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _apply(span) {
	    var out = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    if (span) {
	        Object.assign(out, span.apply);
	        (0, _tween2.default)(span, out);
	        // @todo No need for iteration here, just use one `call` function
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
	        /**
	         * @todo The accumulation needs to be over a flattened list ordered by time
	         *       across *all* tracks, in order for the functions to be called in
	         *       order. In fact, so should the values, to avoid the thing of
	         *       ensuring they don't clash just by convention of separating them.
	         *       So, we should either:
	         *           - Separate the value curves from time somehow, at the point of
	         *           addition; or
	         *           - Iterate over all tracks according to time somehow, using an
	         *           array of iterators, one for each track?
	         */
	
	    }, {
	        key: 'apply',
	        value: function apply(f) {
	            var out = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.outputs;
	
	            this.each(function (track, key) {
	                for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	                    rest[_key - 2] = arguments[_key];
	                }
	
	                var trackOut = out[key] || (out[key] = {});
	
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

/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Timeline = exports.changed = exports.within = exports.offset = exports.sort = exports.order = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _clamp = __webpack_require__(520);
	
	var _clamp2 = _interopRequireDefault(_clamp);
	
	var _frame2 = __webpack_require__(521);
	
	var _frame3 = _interopRequireDefault(_frame2);
	
	var _joinCurve = __webpack_require__(522);
	
	var _joinCurve2 = _interopRequireDefault(_joinCurve);
	
	var _each = __webpack_require__(487);
	
	var _each2 = _interopRequireDefault(_each);
	
	var _filter = __webpack_require__(523);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _iterable = __webpack_require__(488);
	
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

/***/ }),
/* 520 */
/***/ (function(module, exports) {

	module.exports = clamp
	
	function clamp(value, min, max) {
	  return min < max
	    ? (value < min ? min : value > max ? max : value)
	    : (value < max ? max : value > min ? min : value)
	}


/***/ }),
/* 521 */
/***/ (function(module, exports) {

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

/***/ }),
/* 522 */
/***/ (function(module, exports) {

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

/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.filter = exports.filterList = undefined;
	
	var _reduce = __webpack_require__(500);
	
	var _iterable = __webpack_require__(488);
	
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

/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.tween = exports.tweenProps = exports.tweenValue = undefined;
	
	var _lerp = __webpack_require__(525);
	
	var _lerp2 = _interopRequireDefault(_lerp);
	
	var _bezier = __webpack_require__(526);
	
	var _bezier2 = _interopRequireDefault(_bezier);
	
	var _isNumber = __webpack_require__(502);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	var _map = __webpack_require__(499);
	
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

/***/ }),
/* 525 */
/***/ (function(module, exports) {

	function lerp(v0, v1, t) {
	    return v0*(1-t)+v1*t
	}
	module.exports = lerp

/***/ }),
/* 526 */
/***/ (function(module, exports) {

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


/***/ }),
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _torch = __webpack_require__(537);
	
	var _torch2 = _interopRequireDefault(_torch);
	
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
	    (0, _torch2.default)(document.querySelector('canvas'), null, true);
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

/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	__webpack_require__(335);
	
	var _glContext = __webpack_require__(336);
	
	var _glContext2 = _interopRequireDefault(_glContext);
	
	var _glFbo = __webpack_require__(428);
	
	var _glFbo2 = _interopRequireDefault(_glFbo);
	
	var _webAudioAnalyser = __webpack_require__(350);
	
	var _webAudioAnalyser2 = _interopRequireDefault(_webAudioAnalyser);
	
	var _throttle = __webpack_require__(364);
	
	var _throttle2 = _interopRequireDefault(_throttle);
	
	var _glShader = __webpack_require__(389);
	
	var _glShader2 = _interopRequireDefault(_glShader);
	
	var _querystring = __webpack_require__(353);
	
	var _querystring2 = _interopRequireDefault(_querystring);
	
	var _mouseEventOffset = __webpack_require__(363);
	
	var _mouseEventOffset2 = _interopRequireDefault(_mouseEventOffset);
	
	var _lookatCamera = __webpack_require__(538);
	
	var _lookatCamera2 = _interopRequireDefault(_lookatCamera);
	
	var _rangeFit = __webpack_require__(379);
	
	var _rangeFit2 = _interopRequireDefault(_rangeFit);
	
	var _glMatrix = __webpack_require__(386);
	
	var _datGui = __webpack_require__(541);
	
	var _datGui2 = _interopRequireDefault(_datGui);
	
	var _timer = __webpack_require__(426);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _screen = __webpack_require__(460);
	
	var _screen2 = _interopRequireDefault(_screen);
	
	var _index = __webpack_require__(462);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _light = __webpack_require__(544);
	
	var _light2 = _interopRequireDefault(_light);
	
	var _fade = __webpack_require__(545);
	
	var _fade2 = _interopRequireDefault(_fade);
	
	var _draw = __webpack_require__(546);
	
	var _draw2 = _interopRequireDefault(_draw);
	
	var _audio = __webpack_require__(486);
	
	var _audio2 = _interopRequireDefault(_audio);
	
	var _dataTexture = __webpack_require__(501);
	
	var _dataTexture2 = _interopRequireDefault(_dataTexture);
	
	var _analyse = __webpack_require__(497);
	
	var _animate = __webpack_require__(518);
	
	var _animate2 = _interopRequireDefault(_animate);
	
	var _aspect = __webpack_require__(465);
	
	var _map = __webpack_require__(499);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _reduce = __webpack_require__(500);
	
	var _reduce2 = _interopRequireDefault(_reduce);
	
	var _each = __webpack_require__(487);
	
	var _each2 = _interopRequireDefault(_each);
	
	var _utils = __webpack_require__(424);
	
	var _colors = __webpack_require__(547);
	
	var colors = _interopRequireWildcard(_colors);
	
	var _animations = __webpack_require__(548);
	
	var _animations2 = _interopRequireDefault(_animations);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var deClass = function deClass(className) {
	  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    rest[_key - 1] = arguments[_key];
	  }
	
	  return (0, _reduce2.default)(function (name, remove) {
	    return name.replace(remove, '');
	  }, rest, className).replace(/\s\s/gi, ' ');
	};
	
	exports.default = function (canvas) {
	  var queries = _querystring2.default.parse(location.search.slice(1));
	
	  var gl = (0, _glContext2.default)(canvas, { preserveDrawingBuffer: true }, render);
	
	  var timers = {
	    main: Object(new _timer2.default(), { step: 1000 / 60 }),
	    player: new _timer2.default(0)
	  };
	
	  var viewRes = [0, 0];
	  var viewSize = [0, 0];
	
	  var buffers = {
	    light: (0, _glFbo2.default)(gl, [1, 1]),
	    // @todo
	    // flash: FBO(gl, [1, 1]),
	    fade: [(0, _glFbo2.default)(gl, [1, 1]), (0, _glFbo2.default)(gl, [1, 1])]
	  };
	
	  var shaders = {
	    light: (0, _glShader2.default)(gl, _index2.default, _light2.default),
	    fade: (0, _glShader2.default)(gl, _index2.default, _fade2.default),
	    draw: (0, _glShader2.default)(gl, _index2.default, _draw2.default)
	  };
	
	  var screen = new _screen2.default(gl);
	
	  // Parameters...
	
	  // Configuration, setup
	  var config = self.config = {
	    edit: queries.edit === 'true',
	
	    showTrack: queries.showTrack === 'true',
	
	    interact: parseFloat(queries.interact, 10) || 1,
	
	    showEndVideos: queries.showEndVideos === 'true' || queries.showTros === 'true', // Legacy
	
	    intro: decodeURIComponent(queries.intro || 'https://www.youtube.com/embed/7mT4vCdZY9w'),
	
	    outro: decodeURIComponent(queries.outro || 'https://www.youtube.com/embed/Xr1vohT1yG4'),
	
	    showInfo: queries.showInfo === 'true',
	
	    name: decodeURIComponent(queries.name || ''),
	    songName: decodeURIComponent(queries.songName || ''),
	    byName: decodeURIComponent(queries.byName || ''),
	
	    fallback: decodeURIComponent(queries.fallback || ''),
	
	    track: decodeURIComponent(queries.track || '') || prompt('Enter a track URL:', '../../build/audio/Trust feat. Kathrin deBoer & Tom Hodge - Max Cooper.mp3'),
	
	    audioOrders: queries.audioOrders ? parseInt(queries.audioOrders, 10) : 3,
	
	    animation: queries.animation || ''
	  };
	
	  // Animation, running
	  var state = self.state = {
	    /**
	     * @note `waveform` seems to make everything about an order of magnitude
	     *     more sensitive than `frequencies`.
	     */
	    audioMode: queries.audioMode || 'frequencies',
	
	    /**
	     * @note Each higher order seems to make everything aboutan order of
	     *     magnitude more sensitive.
	     */
	    audioOrder: queries.audioOrder ? parseInt(queries.audioOrder, 10) : 1,
	
	    // audioScale: 1, // audioOrder = 0
	    audioScale: 0.008, // audioOrder = 1
	
	    // @todo Not actually meaningful for waveforms - check for this case
	    meanFulcrum: queries.meanFulcrum ? parseFloat(queries.meanFulcrum, 10) : 0.4,
	
	    harmonies: queries.harmonies ? parseFloat(queries.harmonies, 10) : 1,
	
	    silent: queries.silent ? parseFloat(queries.silent, 10) : 0.000001,
	
	    soundSmooth: queries.soundSmooth ? parseFloat(queries.soundSmooth, 10) : 0.3,
	
	    soundWarp: queries.soundWarp ? parseFloat(queries.soundWarp, 10) : 0.006,
	
	    noiseWarp: queries.noiseWarp ? parseFloat(queries.noiseWarp, 10)
	    // : 0.04),
	    : 0,
	
	    noiseSpeed: queries.noiseSpeed ? parseFloat(queries.noiseSpeed, 10) : 0.0005,
	
	    noiseScale: queries.noiseScale ? parseFloat(queries.noiseScale, 10) : 0.05,
	
	    spin: queries.spin ? parseFloat(queries.spin, 10) : 0.0001,
	
	    ringRadius: queries.ringRadius ? parseFloat(queries.ringRadius, 10) : 0.95,
	
	    ringThick: queries.ringThick ? parseFloat(queries.ringThick, 10) : 0.01,
	
	    ringAlpha: queries.ringAlpha ? parseFloat(queries.ringAlpha, 10) : 10,
	
	    otherRadius: queries.otherRadius ? parseFloat(queries.otherRadius, 10) : 100,
	
	    otherThick: queries.otherThick ? parseFloat(queries.otherThick, 10) : 0.000001,
	
	    otherEdge: queries.otherEdge ? parseFloat(queries.otherEdge, 10) : 250,
	
	    otherAlpha: queries.otherAlpha ? parseFloat(queries.otherAlpha, 10) : 0.0001,
	
	    triangleRadius: queries.triangleRadius ? parseFloat(queries.triangleRadius, 10) : 0.1,
	
	    triangleFat: queries.triangleFat ? parseFloat(queries.triangleFat, 10) : 0.2,
	
	    triangleEdge: queries.triangleEdge ? parseFloat(queries.triangleEdge, 10) : 255,
	
	    triangleAlpha: queries.triangleAlpha ? parseFloat(queries.triangleAlpha, 10) : 0.000001,
	
	    staticScale: queries.staticScale ? parseFloat(queries.staticScale, 10) : 150,
	
	    staticSpeed: queries.staticSpeed ? parseFloat(queries.staticSpeed, 10) : 1,
	
	    staticShift: queries.staticShift ? parseFloat(queries.staticShift, 10) : 0.3,
	
	    staticAlpha: queries.staticAlpha ? parseFloat(queries.staticAlpha, 10) : 0.03,
	
	    grow: queries.grow ? parseFloat(queries.grow, 10) : 0.0005,
	
	    growLimit: queries.growLimit ? parseFloat(queries.growLimit, 10) : 1.6,
	
	    jitter: queries.jitter ? parseFloat(queries.jitter, 10) : 0.002,
	
	    fadeAlpha: queries.fadeAlpha ? parseFloat(queries.fadeAlpha, 10)
	    // : 0.99),
	    : 0,
	
	    lightColor: queries.lightColor || [].concat(_toConsumableArray(colors.white)),
	
	    fadeColor: queries.fadeColor || [].concat(_toConsumableArray(colors.white)),
	
	    bokehRadius: queries.bokehRadius ? parseFloat(queries.bokehRadius, 10) : 8,
	
	    bokehAmount: queries.bokehAmount ? parseFloat(queries.bokehAmount, 10) : 60
	  };
	
	  // Editor
	
	
	  var gui = new _datGui2.default.GUI();
	
	  gui.domElement.parentNode.style.zIndex = 10000;
	
	  var proxyURL = {
	    URL: location.href,
	    'GO!': function GO() {
	      return location.href = proxyURL.URL;
	    }
	  };
	
	  gui.add(proxyURL, 'GO!');
	  gui.add(proxyURL, 'URL');
	
	  var urlCtrl = gui.__controllers[gui.__controllers.length - 1];
	
	  function updateURL() {
	    proxyURL.URL = location.href.replace(location.search, '?') + _querystring2.default.stringify(_extends({}, config, state));
	
	    urlCtrl.updateDisplay();
	  }
	
	  var configGUI = gui.addFolder('Config: main settings');
	
	  // This is an exception... need a multi-select
	
	  var animation = config.animation;
	
	  delete config.animation;
	
	  (0, _each2.default)(function (value, name) {
	    return configGUI[(typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? 'addColor' : 'add'](config, name).onFinishChange(updateURL);
	  }, config);
	
	  config.animation = animation;
	
	  configGUI.add(config, 'animation', [''].concat(_toConsumableArray(Object.keys(_animations2.default)))).onFinishChange(updateURL);
	
	  configGUI.open();
	
	  var stateGUI = gui.addFolder('State: animated settings');
	
	  (0, _each2.default)(function (value, name) {
	    return stateGUI[(typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? 'addColor' : 'add'](state, name).onFinishChange(updateURL);
	  }, state);
	
	  stateGUI.close();
	
	  if (!config.edit) {
	    _datGui2.default.GUI.toggleHide();
	  }
	
	  setTimeout(function () {
	    return gui.domElement.style.display = 'block';
	  }, 0);
	
	  var pointer = [0, 0];
	  var cameraView = _glMatrix.mat4.create();
	  var cameraProjection = _glMatrix.mat4.create();
	  var camera = (0, _lookatCamera2.default)();
	
	  var bump = 0;
	
	  var ytPlayerVars = {
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
	
	  var ytPlayerParams = function ytPlayerParams(vars) {
	    return (0, _reduce2.default)(function (out, v, k) {
	      return out + (out ? '&' : '?') + k + '=' + v;
	    }, vars, '');
	  };
	
	  // Info
	
	  if (config.showInfo) {
	    var introInfo = document.querySelector('.intro-info');
	
	    introInfo.querySelector('.name').innerText = config.name || '';
	    introInfo.querySelector('.song-name').innerText = config.songName || '';
	    introInfo.querySelector('.by-name').innerText = config.byName || '';
	
	    introInfo.className = deClass(introInfo.className, 'hide');
	  }
	
	  // Fallback
	
	  if (config.fallback) {
	    var fallbackInfo = document.querySelector('.fallback-info');
	    var href = config.fallback + ytPlayerParams(ytPlayerVars);
	
	    fallbackInfo.querySelector('.name').innerText = config.name ? ' ' + config.name : '';
	
	    fallbackInfo.querySelector('.fallback').href = href;
	  }
	
	  // Track
	
	  var audio = Object.assign(new Audio(), {
	    crossOrigin: 'anonymous',
	    controls: true,
	    autoplay: false,
	    muted: 'muted' in queries,
	    className: 'track',
	    src: config.track.match(/^(https)?(:\/\/)?(www\.)?dropbox\.com\/s\//gi) ? config.track.replace(/^((https)?(:\/\/)?(www\.)?)dropbox\.com\/s\/(.*)\?dl=(0)$/gi, 'https://dl.dropboxusercontent.com/s/$5?dl=1&raw=1') : config.track
	  });
	
	  document.body.appendChild(audio);
	
	  // Progress
	
	  if (config.showTrack) {
	    document.documentElement.className += ' show-track';
	  }
	
	  var progress = document.getElementsByClassName('progress')[0];
	
	  // Intro and outro
	
	  var videos = void 0;
	
	  var visuals = document.querySelector('.visuals');
	
	  function startInfo() {
	    if (config.showInfo) {
	      visuals.className = deClass(visuals.className, 'hide');
	
	      var _introInfo = document.querySelector('.intro-info');
	
	      (0, _each2.default)(function (_ref) {
	        var _ref2 = _slicedToArray(_ref, 2),
	            el = _ref2[0],
	            t = _ref2[1];
	
	        return setTimeout(function () {
	          return el.className = deClass(el.className, 'hide');
	        }, t);
	      }, [[_introInfo.querySelector('.torch-song'), 0], [_introInfo.querySelector('.name'), 1000], [_introInfo.querySelector('.song-name'), 3000], [_introInfo.querySelector('.by-name'), 4000]]);
	
	      setTimeout(function () {
	        return _introInfo.className += ' hide';
	      }, 15000);
	    }
	  }
	
	  function startSequence() {
	    if (videos) {
	      videos.intro.el.className += ' hide';
	    }
	
	    if (config.fallback) {
	      var _fallbackInfo = document.querySelector('.fallback-info');
	
	      _fallbackInfo.className = deClass(_fallbackInfo.className, 'hide');
	    }
	
	    // Deal with Chrome's need for user interaction before playing audio...
	    // @see https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
	    audio.play().catch(function () {
	      return document.addEventListener('click', function () {
	        return audio.paused && audio.play();
	      });
	    });
	
	    canvas.className = deClass(canvas.className, 'hide');
	  }
	
	  function endSequence() {
	    if (videos) {
	      videos.outro.player.playVideo();
	      videos.outro.el.className = deClass(videos.outro.el.className, 'hide');
	    }
	
	    canvas.className += ' hide';
	  }
	
	  if (config.showEndVideos) {
	    var ytIframeVars = {
	      width: ytPlayerVars.width,
	      height: ytPlayerVars.height,
	      frameborder: 0,
	      allowfullscreen: true,
	      className: 'video fade',
	      src: ytPlayerParams(ytPlayerVars)
	    };
	
	    videos = {
	      intro: {
	        iframeOptions: _extends({}, ytIframeVars, {
	          src: config.intro + ytIframeVars.src,
	          className: 'intro ' + ytIframeVars.className
	        }),
	        playerOptions: {
	          ytPlayerVars: ytPlayerVars,
	          events: {
	            onReady: function onReady() {
	              setTimeout(startSequence, 15000);
	            },
	            onStateChange: function onStateChange(e) {
	              if (e.data === self.YT.PlayerState.PLAYING) {
	                startInfo();
	              } else if (e.data === self.YT.PlayerState.ENDED) {
	                // startSequence();
	                videos.intro.el.className += ' hide';
	              }
	            }
	          }
	        }
	      },
	      outro: {
	        iframeOptions: _extends({}, ytIframeVars, {
	          src: config.outro + ytIframeVars.src,
	          className: 'outro hide ' + ytIframeVars.className
	        }),
	        playerOptions: {
	          ytPlayerVars: ytPlayerVars,
	          events: {
	            onStateChange: function onStateChange(e) {
	              if (!videos.outro.buffering && e.data === self.YT.PlayerState.PLAYING) {
	                videos.outro.buffering = true;
	                videos.outro.player.pauseVideo();
	              }
	              if (e.data === self.YT.PlayerState.ENDED) {
	                videos.outro.el.className += ' hide';
	              }
	            }
	          }
	        }
	      }
	    };
	
	    (0, _each2.default)(function (config) {
	      config.el = Object.assign(document.createElement('iframe'), config.iframeOptions);
	
	      document.body.appendChild(config.el);
	    }, videos);
	
	    // Load the IFrame Player API code asynchronously.
	
	    var youTubeAPITag = document.createElement('script');
	
	    youTubeAPITag.src = 'https://www.youtube.com/player_api';
	
	    var firstScriptTag = document.getElementsByTagName('script')[0];
	
	    firstScriptTag.parentNode.insertBefore(youTubeAPITag, firstScriptTag);
	
	    // self.onYouTubePlayerAPIReady = () => {
	    self.onYouTubeIframeAPIReady = function () {
	      (0, _each2.default)(function (video) {
	        return video.player = new self.YT.Player(video.el, video.playerOptions);
	      }, videos);
	    };
	  } else {
	    startSequence();
	  }
	
	  // Audio analysis
	
	  var audioContext = new (self.AudioContext || self.webkitAudioContext)();
	
	  // Deal with Chrome's need for user interaction before playing audio...
	  // @see https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
	  document.addEventListener('click', function () {
	    return audioContext.state === 'suspended' && audioContext.resume();
	  });
	
	  var audioAnalyser = (0, _webAudioAnalyser2.default)(audio, audioContext);
	
	  audioAnalyser.analyser.fftSize = Math.pow(2, 11);
	
	  var audioTrigger = new _audio2.default(audioAnalyser, config.audioOrders);
	
	  var audioTexture = new _dataTexture2.default(gl, audioTrigger.dataOrder(state.audioOrder));
	
	  // Animation setup
	
	  var tracks = {
	    main: state,
	    lightColor: state.lightColor,
	    fadeColor: state.fadeColor
	  };
	
	  var tracksStart = {
	    main: _extends({}, state),
	    lightColor: state.lightColor.slice(0),
	    fadeColor: state.fadeColor.slice(0)
	  };
	
	  var player = new _animate2.default((0, _map2.default)(function () {
	    return [];
	  }, tracks, {}), tracks);
	
	  // Set up the start/reset frame
	  player.apply(function (track, key) {
	    var start = tracksStart[key];
	
	    track.to({
	      to: start,
	      time: 200
	    });
	
	    return { apply: start };
	  });
	
	  // Hand over the rest to the param-defined animation
	  if (config.animation) {
	    audio.addEventListener('durationchange', function () {
	      return _animations2.default[config.animation](player, endSequence, audio);
	    }, false);
	  }
	
	  self.t = function () {
	    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : audio.currentTime;
	    return time / audio.duration;
	  };
	
	  var scrub = function scrub() {
	    if (audio.currentTime >= 0 && !audio.paused && config.animation) {
	      player.playFrom(audio.currentTime * 1000, 0);
	    }
	  };
	
	  // audio.addEventListener('seeked', scrub);
	  audio.addEventListener('play', scrub);
	
	  // Interaction
	  document.body.addEventListener('pointermove', function (e) {
	    if (e.isPrimary) {
	      (0, _mouseEventOffset2.default)(e, document.body, pointer);
	
	      var l = config.interact - 1;
	
	      pointer[0] = (0, _rangeFit2.default)(pointer[0], 0, viewRes[0], -l, l);
	      pointer[1] = (0, _rangeFit2.default)(pointer[1], 0, viewRes[1], l, -l);
	    }
	  }, false);
	
	  document.body.addEventListener('pointerdown', function (e) {
	    return bump = config.interact * 0.1;
	  }, false);
	
	  // The main loop
	  function render() {
	    var dt = timers.main.tick().dt;
	
	    // Animate
	
	    if (audio.currentTime >= 0 && !audio.paused && config.animation) {
	      timers.player.tick(audio.currentTime * 1000);
	      player.play(timers.player.time);
	    }
	
	    // For guaging time accurately by looking at the video recording
	    progress.style.width = audio.currentTime / audio.duration * 100 + '%';
	
	    // Sample audio
	
	    audioTrigger.sample(dt, state.audioMode);
	    // @todo Hack, remove
	    audioTexture.array.data = audioTrigger.dataOrder(state.audioOrder);
	    audioTexture.apply();
	
	    var audioPeak = (0, _analyse.peakPos)(audioTexture.array.data);
	
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
	
	      viewSize: viewSize,
	      viewRes: viewRes,
	
	      audio: audioTexture.texture.bind(0),
	      audioScale: state.audioScale,
	
	      peak: audioPeak.peak,
	      peakPos: audioPeak.pos / audioTexture.array.data.length,
	      mean: (0, _analyse.meanWeight)(audioTexture.array.data, state.meanFulcrum),
	
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
	
	      cameraView: cameraView,
	      cameraProjection: cameraProjection,
	
	      bump: bump
	    });
	
	    screen.draw();
	
	    // Fade pass
	
	    buffers.fade[0].bind();
	    // gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	    shaders.fade.bind();
	
	    Object.assign(shaders.fade.uniforms, {
	      time: timers.main.time,
	      dt: timers.main.dt,
	
	      viewSize: viewSize,
	      viewRes: viewRes,
	
	      next: buffers.light.color[0].bind(0),
	      past: buffers.fade[1].color[0].bind(1),
	      // @todo Bring audio stuff here as well?
	
	      grow: state.grow,
	      growLimit: state.growLimit,
	
	      // @todo Spin this too?
	      // spinPast: state.spinPast,
	
	      jitter: state.jitter,
	
	      fadeAlpha: state.fadeAlpha,
	
	      cameraView: cameraView,
	      cameraProjection: cameraProjection
	    });
	
	    screen.draw();
	
	    // Draw pass
	
	    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	    shaders.draw.bind();
	
	    Object.assign(shaders.draw.uniforms, {
	      viewRes: viewRes,
	
	      light: buffers.light.color[0].bind(0),
	      fade: buffers.fade[0].color[0].bind(1),
	
	      lightColor: state.lightColor,
	      fadeColor: state.fadeColor,
	
	      bokehRadius: state.bokehRadius,
	      bokehAmount: state.bokehAmount
	    });
	
	    screen.draw();
	
	    // Step the fade
	    (0, _utils.step)(buffers.fade);
	
	    // Finish up
	    screen.unbind();
	
	    var damping = 0.99;
	
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
	
	    (0, _aspect.containAspect)(viewSize, viewRes);
	
	    buffers.light.shape = viewRes;
	    buffers.fade[0].shape = buffers.fade[1].shape = viewRes;
	
	    var aspect = viewRes[0] / viewRes[1];
	    var fov = Math.PI / 2.5;
	    var near = 0;
	    var far = 1;
	
	    _glMatrix.mat4.perspective(cameraProjection, fov, aspect, near, far);
	  }
	
	  // Go
	
	  self.addEventListener('resize', (0, _throttle2.default)(resize, 200), false);
	
	  resize();
	};

/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

	var lookAt = __webpack_require__(539)
	
	module.exports = Camera
	
	function Camera() {
	  if (!(this instanceof Camera))
	    return new Camera
	
	  this.target   = new Float32Array([0,  0,  0])
	  this.position = new Float32Array([0,  5, 10])
	  this.up       = new Float32Array([0,  1,  0])
	}
	
	var scratch = new Float32Array(16)
	
	Camera.prototype.view = function(view) {
	  view = view || scratch
	
	  lookAt(view, this.position, this.target, this.up)
	
	  return view
	}


/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(540);
	
	module.exports = lookAt;
	
	/**
	 * Generates a look-at matrix with the given eye position, focal point, and up axis
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {vec3} eye Position of the viewer
	 * @param {vec3} center Point the viewer is looking at
	 * @param {vec3} up vec3 pointing up
	 * @returns {mat4} out
	 */
	function lookAt(out, eye, center, up) {
	    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
	        eyex = eye[0],
	        eyey = eye[1],
	        eyez = eye[2],
	        upx = up[0],
	        upy = up[1],
	        upz = up[2],
	        centerx = center[0],
	        centery = center[1],
	        centerz = center[2];
	
	    if (Math.abs(eyex - centerx) < 0.000001 &&
	        Math.abs(eyey - centery) < 0.000001 &&
	        Math.abs(eyez - centerz) < 0.000001) {
	        return identity(out);
	    }
	
	    z0 = eyex - centerx;
	    z1 = eyey - centery;
	    z2 = eyez - centerz;
	
	    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	    z0 *= len;
	    z1 *= len;
	    z2 *= len;
	
	    x0 = upy * z2 - upz * z1;
	    x1 = upz * z0 - upx * z2;
	    x2 = upx * z1 - upy * z0;
	    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	    if (!len) {
	        x0 = 0;
	        x1 = 0;
	        x2 = 0;
	    } else {
	        len = 1 / len;
	        x0 *= len;
	        x1 *= len;
	        x2 *= len;
	    }
	
	    y0 = z1 * x2 - z2 * x1;
	    y1 = z2 * x0 - z0 * x2;
	    y2 = z0 * x1 - z1 * x0;
	
	    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	    if (!len) {
	        y0 = 0;
	        y1 = 0;
	        y2 = 0;
	    } else {
	        len = 1 / len;
	        y0 *= len;
	        y1 *= len;
	        y2 *= len;
	    }
	
	    out[0] = x0;
	    out[1] = y0;
	    out[2] = z0;
	    out[3] = 0;
	    out[4] = x1;
	    out[5] = y1;
	    out[6] = z1;
	    out[7] = 0;
	    out[8] = x2;
	    out[9] = y2;
	    out[10] = z2;
	    out[11] = 0;
	    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	    out[15] = 1;
	
	    return out;
	};

/***/ }),
/* 540 */
/***/ (function(module, exports) {

	module.exports = identity;
	
	/**
	 * Set a mat4 to the identity matrix
	 *
	 * @param {mat4} out the receiving matrix
	 * @returns {mat4} out
	 */
	function identity(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};

/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(542)
	module.exports.color = __webpack_require__(543)

/***/ }),
/* 542 */
/***/ (function(module, exports) {

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

/***/ }),
/* 543 */
/***/ (function(module, exports) {

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

/***/ }),
/* 544 */
/***/ (function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform float time;\n// @todo Use dt against audio rates?\nuniform float dt;\n\nuniform vec2 viewSize;\nuniform vec2 viewRes;\n\nuniform sampler2D audio;\n\nuniform float audioScale;\n\nuniform float peak;\nuniform float peakPos;\nuniform float mean;\n\nuniform float frequencies;\nuniform float harmonies;\nuniform float silent;\nuniform float soundSmooth;\nuniform float soundWarp;\n\nuniform float noiseWarp;\nuniform float noiseSpeed;\nuniform float noiseScale;\n\nuniform float spin;\n\nuniform float ringRadius;\nuniform float ringThick;\nuniform float ringAlpha;\n\nuniform float otherRadius;\nuniform float otherThick;\nuniform float otherEdge;\nuniform float otherAlpha;\n\nuniform float triangleRadius;\nuniform float triangleFat;\nuniform float triangleEdge;\nuniform float triangleAlpha;\n\nuniform float staticScale;\nuniform float staticSpeed;\nuniform float staticShift;\nuniform float staticAlpha;\n\nuniform float bump;\n\nuniform mat4 cameraView;\nuniform mat4 cameraProjection;\n\n// @todo Noise in form as well?\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nconst vec4 k = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);\n\nvec3 hsv2rgb(vec3 c) {\n  vec3 p = abs(fract(c.xxx+k.xyz)*6.0-k.www);\n  return c.z*mix(k.xxx, clamp(p-k.xxx, 0.0, 1.0), c.y);\n}\n\nfloat map_1(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map_1(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map_1(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map_1(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec4 uvRange = vec4(0.0, 0.0, 1.0, 1.0);\n\nconst vec4 posRange = vec4(-1.0, -1.0, 1.0, 1.0);\n\nvec2 uvToPos(vec2 uv) {\n  return map_1(uv, uvRange.xy, uvRange.zw, posRange.xy, posRange.zw);\n}\n\nconst float pi = 3.14159265358979323846;\n\nconst float tau = 6.28318530717958647692;\n\nfloat map_0(vec2 pos) {\n  // return (atan(pos.y, pos.x)+pi)/tau;\n  return atan(pos.y, pos.x)/pi;\n}\n\nvec4 sound_0(sampler2D audio, float at) {\n  return texture2D(audio, vec2(mod(at, 1.0), 0.0));\n}\n\nvec4 sound_0(sampler2D audio, vec2 pos, float harmonies) {\n  return sound_0(audio, map_0(pos)/harmonies);\n}\n\nfloat sdf_1(vec2 pos, vec2 center, float radius) {\n  return length(pos-center)-radius;\n}\n\nfloat sdf_1(vec3 pos, vec3 center, float radius) {\n  return length(pos-center)-radius;\n}\n\n// @todo Use 2D SDF instead of 3D with a fake z\n\nfloat dot2(in vec3 v) {\n  return dot(v, v);\n}\n\nfloat sdf_0(vec3 pos, vec3 a, vec3 b, vec3 c) {\n  vec3 ba = b-a;\n  vec3 pa = pos-a;\n  vec3 cb = c-b;\n  vec3 pb = pos-b;\n  vec3 ac = a-c;\n  vec3 pc = pos-c;\n\n  vec3 nor = cross(ba, ac);\n\n  return sqrt(\n    (sign(dot(cross(ba, nor), pa))+\n    sign(dot(cross(cb, nor), pb))+\n    sign(dot(cross(ac, nor), pc)) < 2.0)?\n      min(min(dot2(ba*clamp(dot(ba, pa)/dot2(ba), 0.0, 1.0)-pa),\n          dot2(cb*clamp(dot(cb, pb)/dot2(cb), 0.0, 1.0)-pb)),\n        dot2(ac*clamp(dot(ac, pc)/dot2(ac), 0.0, 1.0)-pc))\n    : dot(nor, pa)*dot(nor, pa)/dot2(nor));\n}\n\nconst vec3 mid = vec3(0.0);\n\nfloat attenuate(float sdf) {\n  // @see Attenuation: http://gamedev.stackexchange.com/questions/56897/glsl-light-attenuation-color-and-intensity-formula\n  // return clamp(1.0/sdf/sdf, 0.0, 1.0);\n  return max(0.0, 1.0/sdf/sdf);\n}\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy/viewRes;\n\n  vec4 projected = (cameraProjection*cameraView*vec4(uvToPos(uv), 1.0, 1.0));\n  vec2 pos = projected.xy/viewSize/viewSize;\n\n  float dist = length(pos);\n  float angle = abs(mod(map_0(pos)+(spin*time), 1.0)/harmonies);\n\n  float frequencyOffset = 1.0/frequencies;\n\n  float soundKernel = sound_0(audio, angle).x+\n    (sound_0(audio, angle-frequencyOffset).x*soundSmooth)+\n    (sound_0(audio, angle+frequencyOffset).x*soundSmooth);\n\n  float sound = soundWarp*max(abs(soundKernel/(1.0+(2.0*soundSmooth))), silent);\n\n  float noiseTime = time*noiseSpeed;\n\n  // The light ring\n\n  float warp = (mean*sound/audioScale)+\n    (snoise(vec3(pos*(1.0+noiseScale*(1.0+(0.5*soundWarp*mean/audioScale))),\n        noiseTime))*\n      noiseWarp*(1.0+(0.5*soundWarp*peak/audioScale)));\n\n  float ringSDF = clamp(abs(dist-ringRadius-warp+bump)-ringThick, 0.0, 1.0)/sound;\n\n  // Other circle\n\n  vec2 otherPos = vec2(snoise(vec3(peakPos, peak+noiseTime, mean)),\n      snoise(vec3(peakPos+0.972, peak+noiseTime+0.234, mean+0.3785)));\n\n  float otherRad = otherRadius*length(otherPos)*peakPos;\n\n  float otherSDF = clamp(abs(sdf_1(pos, otherPos, otherRad))-\n        abs((otherThick+bump)*mean*audioScale),\n      0.0, 1.0)/\n    step(otherEdge, abs(peak/audioScale));\n\n  // Triangle\n\n  vec3 tri1 = vec3(snoise(vec3(peak+dt+0.879, peakPos-noiseTime+0.822,\n        peak-peakPos+0.545)),\n      snoise(vec3(peak+0.882, peakPos+noiseTime+0.354,\n        peak+peakPos+0.455)),\n      0.0);\n\n  vec3 tri2 = vec3(snoise(vec3(peak+dt+10.227, peakPos+noiseTime+10.822,\n        peak+peakPos+10.092)),\n      snoise(vec3(peak-dt+10.192, peakPos-noiseTime+10.277,\n        peak-peakPos+10.304)),\n      0.0);\n\n  float triRad = mean*triangleRadius;\n\n  float triangleSDF = sdf_0(vec3(pos, 0.0), mid, tri1*triRad,\n      mix(tri1, tri2*triRad, (triangleFat+bump)*(1.0-peakPos)))/\n    step(triangleEdge, abs(peak));\n\n  // \"TV static\" background\n  float background = snoise(vec3(uv*staticScale,\n      (mean*(staticShift+bump)/audioScale)+(time*staticSpeed)));\n\n  // Accumulate\n  gl_FragColor = vec4((attenuate(ringSDF)*ringAlpha)+\n      (attenuate(otherSDF)*otherAlpha)+\n      (attenuate(triangleSDF)*triangleAlpha)+\n      max(0.0, background*staticAlpha));\n}\n"

/***/ }),
/* 545 */
/***/ (function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform float time;\nuniform float dt;\n\nuniform vec2 viewSize;\nuniform vec2 viewRes;\n\nuniform sampler2D next;\nuniform sampler2D past;\n\nuniform float grow;\nuniform float growLimit;\n\n// @todo Spin this as well?\n// uniform float spinPast;\n\nuniform float jitter;\n\nuniform float fadeAlpha;\n\nvec4 color(vec2 uv) {\n  return ((texture2D(past, uv)*fadeAlpha)+texture2D(next, uv));\n}\n\nvec3 sampler(vec2 uv) {\n  return color(uv).rgb;\n}\n\n// @todo Noise in form as well?\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\n#ifndef TAU\n  #define TAU 6.28318530718\n#endif\n\n//Use last part of hash function to generate new random radius and angle\nvec2 mult(inout vec2 r) {\n  r = fract(r * vec2(12.9898,78.233));\n  return sqrt(r.x + .001) * vec2(sin(r.y * TAU), cos(r.y * TAU));\n}\n\nvec3 blur(vec2 uv, float radius, float aspect, float offset) {\n  vec2 circle = vec2(radius);\n  circle.x *= aspect;\n  vec2 rnd = vec2(random(vec2(uv + offset)));\n\n  vec3 acc = vec3(0.0);\n  for (int i = 0; i < 3; i++) {\n    acc += sampler(uv + circle * mult(rnd)).xyz;\n  }\n  return acc / float(3);\n}\n\nvec3 blur(vec2 uv, float radius, float aspect) {\n  return blur(uv, radius, aspect, 0.0);\n}\n\nvec3 blur(vec2 uv, float radius) {\n  return blur(uv, radius, 1.0);\n}\n\nfloat map(float value, float inMin, float inMax, float outMin, float outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec2 map(vec2 value, vec2 inMin, vec2 inMax, vec2 outMin, vec2 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec3 map(vec3 value, vec3 inMin, vec3 inMax, vec3 outMin, vec3 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nvec4 map(vec4 value, vec4 inMin, vec4 inMax, vec4 outMin, vec4 outMax) {\n  return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n\nconst vec4 uvRange = vec4(0.0, 0.0, 1.0, 1.0);\n\nconst vec4 posRange = vec4(-1.0, -1.0, 1.0, 1.0);\n\nvec2 uvToPos(vec2 uv) {\n  return map(uv, uvRange.xy, uvRange.zw, posRange.xy, posRange.zw);\n}\n\n/**\n * Adapted from `bezier`.\n */\n\nfloat bezier(vec2 cp, float t) {\n  return cp.x+(cp.y-cp.x)*t;\n}\n\nfloat bezier(vec3 cp, float t) {\n  float ut = 1.0-t;\n\n  return (cp.x*ut+cp.y*t)*ut+(cp.y*ut+cp.z*t)*t;\n}\n\nfloat bezier(vec4 cp, float t) {\n  float ut = 1.0-t;\n  float a1 = cp.y*ut+cp.z*t;\n\n  return ((cp.x*ut+cp.y*t)*ut+a1*t)*ut+(a1*ut+(cp.z*ut+cp.w*t)*t)*t;\n}\n\nconst vec2 mid = vec2(0.5);\nconst vec3 curve = vec3(0.0, 1.0, 1.0);\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy/viewRes;\n  vec2 pos = uvToPos(uv)/viewSize;\n\n  float dist = length(pos);\n\n  // Sample and grow\n\n  float growRate = clamp(bezier(curve, dist/growLimit), 0.0, 1.0);\n  vec2 st = uv+((mid-uv)*grow*dt*(1.0-growRate));\n\n  vec4 fade = color(st);\n\n  fade.rgb = blur(st, jitter*growRate, viewRes.x/viewRes.y,\n    mod(time, 20.0));\n\n  gl_FragColor = vec4(clamp(fade, 0.0, 1.0));\n}\n"

/***/ }),
/* 546 */
/***/ (function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 viewRes;\n\nuniform sampler2D light;\nuniform sampler2D fade;\n\nuniform vec4 lightColor;\nuniform vec4 fadeColor;\n\nuniform float bokehRadius;\nuniform float bokehAmount;\n\nvec4 color(vec2 uv) {\n  return (texture2D(light, uv)*lightColor)+\n    (texture2D(fade, uv)*fadeColor);\n}\n\n/**\n * Adapted from https://www.shadertoy.com/view/4d2Xzw\n * Bokeh disc.\n * by David Hoskins.\n * License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.\n *\n * @requires {const int} iterations The number of iterations to run.\n * @requires {function} sample A function taking a `vec2` uv and returning a\n *         `vec3` (for example, sampling a texture).\n */\n\n// The Golden Angle is (3.0-sqrt(5.0))*PI radians, which doesn't precompiled for\n// some reason. The compiler is a dunce I tells-ya!!\nconst float goldenAngle = 2.39996323;\n\nconst mat2 rot = mat2(cos(goldenAngle), sin(goldenAngle),\n  -sin(goldenAngle), cos(goldenAngle));\n\n// Doesn't use mipmaps\nvec3 bokeh(vec2 texel, vec2 uv, float radius, float amount) {vec3 acc = vec3(0.0);\n  vec3 div = vec3(0.0);\n  float r = 1.0;\n  vec2 angle = vec2(0.0, radius);\n\n  amount += radius*500.0;\n\n  for(int j = 0; j < 20; j++) {\n  r += 1.0/r;\n  angle = rot*angle;\n\n  // (r-1.0) here is the equivalent to sqrt(0, 1, 2, 3...)\n  vec3 col = color(uv+(texel*(r-1.0)*angle)).xyz;\n\n  // ...contrast it for better highlights - leave this out elsewhere.\n  col = col*col*1.5;\n\n  vec3 blur = (pow(col, vec3(9.0))*amount)+0.4;\n\n  acc += col*blur;\n  div += blur;\n  }\n\n  return acc/div;\n}\n\n/**\n * Adapted from `bezier`.\n */\n\nfloat bezier(vec2 cp, float t) {\n  return cp.x+(cp.y-cp.x)*t;\n}\n\nfloat bezier(vec3 cp, float t) {\n  float ut = 1.0-t;\n\n  return (cp.x*ut+cp.y*t)*ut+(cp.y*ut+cp.z*t)*t;\n}\n\nfloat bezier(vec4 cp, float t) {\n  float ut = 1.0-t;\n  float a1 = cp.y*ut+cp.z*t;\n\n  return ((cp.x*ut+cp.y*t)*ut+a1*t)*ut+(a1*ut+(cp.z*ut+cp.w*t)*t)*t;\n}\n\n// @todo Remove the `1.0-` here?\nfloat amount_0(vec2 point, vec2 mid, float limit) {\n  return min(1.0-(length(point-mid)/limit), 1.0);\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit) {\n  return max(0.0, amount_0(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, float curve) {\n  return max(0.0, curve*amount_0(point, mid, limit));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec2 curve) {\n  return max(0.0, bezier(curve, amount_0(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec3 curve) {\n  return max(0.0, bezier(curve, amount_0(point, mid, limit)));\n}\n\nfloat vignette(vec2 point, vec2 mid, float limit, vec4 curve) {\n  return max(0.0, bezier(curve, amount_0(point, mid, limit)));\n}\n\nconst vec4 falloff = vec4(0.0, 1.0, 1.0, 1.0);\nconst vec2 mid = vec2(0.5);\nconst float limit = 0.6;\n\nconst vec4 black = vec4(vec3(0.0), 1.0);\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy/viewRes;\n\n  vec2 texel = 1.0/viewRes;\n  float edge = 1.0-vignette(uv, mid, limit, falloff);\n\n  gl_FragColor = black+\n    vec4(bokeh(texel, uv, bokehRadius*edge, bokehAmount*edge), color(uv).a);\n}\n"

/***/ }),
/* 547 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var orange = exports.orange = [255 / 255, 103 / 255, 0 / 255, 1];
	
	var yellow = exports.yellow = [250 / 255, 234 / 255, 39 / 255, 1];
	
	var pink = exports.pink = [230 / 255, 0 / 255, 126 / 255, 1];
	
	// A-C, from darkest to lightest
	var lightBlueA = exports.lightBlueA = [0 / 255, 100 / 255, 158 / 255, 1];
	var lightBlueB = exports.lightBlueB = [0 / 255, 161 / 255, 210 / 255, 1];
	var lightBlueC = exports.lightBlueC = [105 / 255, 198 / 255, 221 / 255, 1];
	
	var darkBlue = exports.darkBlue = [0 / 255, 46 / 255, 98 / 255, 1];
	
	var none = exports.none = [0, 0, 0, 0];
	
	var black = exports.black = [0, 0, 0, 1];
	
	var white = exports.white = [1, 1, 1, 1];

/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vaccines = __webpack_require__(549);
	
	var _vaccines2 = _interopRequireDefault(_vaccines);
	
	var _yearsAndYears = __webpack_require__(550);
	
	var _yearsAndYears2 = _interopRequireDefault(_yearsAndYears);
	
	var _blaenavon = __webpack_require__(551);
	
	var _blaenavon2 = _interopRequireDefault(_blaenavon);
	
	var _frankTurner = __webpack_require__(552);
	
	var _frankTurner2 = _interopRequireDefault(_frankTurner);
	
	var _tomTheLion = __webpack_require__(553);
	
	var _tomTheLion2 = _interopRequireDefault(_tomTheLion);
	
	var _tallChildren = __webpack_require__(554);
	
	var _tallChildren2 = _interopRequireDefault(_tallChildren);
	
	var _lewisFieldhouse = __webpack_require__(555);
	
	var _lewisFieldhouse2 = _interopRequireDefault(_lewisFieldhouse);
	
	var _twinAtlantic = __webpack_require__(556);
	
	var _twinAtlantic2 = _interopRequireDefault(_twinAtlantic);
	
	var _lowerThanAtlantis = __webpack_require__(557);
	
	var _lowerThanAtlantis2 = _interopRequireDefault(_lowerThanAtlantis);
	
	var _francisLung = __webpack_require__(558);
	
	var _francisLung2 = _interopRequireDefault(_francisLung);
	
	var _retroKid = __webpack_require__(559);
	
	var _retroKid2 = _interopRequireDefault(_retroKid);
	
	var _sattelites = __webpack_require__(560);
	
	var _sattelites2 = _interopRequireDefault(_sattelites);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  vaccines: _vaccines2.default,
	  yearsAndYears: _yearsAndYears2.default,
	  blaenavon: _blaenavon2.default,
	  frankTurner: _frankTurner2.default,
	  tomTheLion: _tomTheLion2.default,
	  tallChildren: _tallChildren2.default,
	  lewisFieldhouse: _lewisFieldhouse2.default,
	  twinAtlantic: _twinAtlantic2.default,
	  lowerThanAtlantis: _lowerThanAtlantis2.default,
	  francisLung: _francisLung2.default,
	  retroKid: _retroKid2.default,
	  sattelites: _sattelites2.default
	};

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(547);
	
	var colors = _interopRequireWildcard(_colors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = function (player, end, audio) {
	  var t = audio.duration * 1000;
	
	  player.tracks.main.to({
	    to: {
	      staticAlpha: 0,
	      fadeAlpha: 0,
	      noiseSpeed: 0.002
	    },
	    time: 1000
	  }).smoothTo({
	    to: {
	      ringRadius: 0.2,
	      noiseWarp: 0.1,
	      soundWarp: 0.01,
	      otherEdge: 150,
	      otherRadius: 1
	    },
	    time: 0.06050420168067227 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      silent: 0
	    },
	    time: 0.1092436974789916 * t,
	    ease: [0, 0.95, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 0.5,
	      otherEdge: 250,
	      staticAlpha: 0.02,
	      fadeAlpha: 0.96,
	      grow: 0.005
	    },
	    time: 0.12605042016806722 * t,
	    ease: [0, 0.95, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 0.7,
	      otherEdge: 254,
	      staticAlpha: 0.03,
	      fadeAlpha: 0.99
	    },
	    time: 0.20588235294117646 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherRadius: 0.1,
	      otherThick: 100,
	      ringAlpha: 100
	    },
	    time: 0.2605042016806723 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.04201680672268908 * t, {
	    to: {
	      ringRadius: 0.95
	    },
	    time: 0.3697478991596639 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.04201680672268908 * t, {
	    to: {
	      noiseWarp: 0.55,
	      noiseScale: 0.1
	    },
	    time: 0.4117647058823529 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.04201680672268908 * t, {
	    to: {
	      otherRadius: 0.1,
	      otherThick: 100
	    },
	    time: 0.46218487394957986 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      fadeAlpha: 0,
	      otherThick: 500,
	      otherEdge: 154
	    },
	    time: 0.5042016806722689 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(100, {
	    to: {
	      otherThick: 0.00001,
	      otherRadius: 0.8
	    },
	    time: 0.6386554621848739 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.025210084033613446 * t, {
	    to: {
	      noiseWarp: 0.2
	    },
	    time: 0.6722689075630253 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.025210084033613446 * t, {
	    to: {
	      noiseWarp: 0.35
	    },
	    time: 0.7226890756302521 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      fadeAlpha: 0.99
	    },
	    time: 0.7647058823529411 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.04201680672268908 * t, {
	    to: {
	      ringRadius: 0,
	      ringAlpha: 0,
	      staticAlpha: 3
	    },
	    time: 0.9957983193277311 * t,
	    ease: [0, 0, 1],
	    call: [end]
	  });
	
	  player.tracks.lightColor.smoothOver(0.025210084033613446 * t, {
	    to: colors.orange,
	    time: 0.12605042016806722 * t,
	    ease: [0, 0.95, 1]
	  }).smoothOver(0.008403361344537815 * t, {
	    to: colors.white,
	    time: 0.9159663865546218 * t,
	    ease: [0, 0, 1]
	  });
	
	  player.tracks.fadeColor.smoothOver(0.04201680672268908 * t, {
	    to: colors.lightBlueC,
	    time: 0.23529411764705882 * t,
	    ease: [0, 0.95, 1]
	  }).smoothOver(0.01680672268907563 * t, {
	    to: colors.lightBlueB,
	    time: 0.37815126050420167 * t,
	    ease: [0, 0.95, 1]
	  }).smoothOver(0.08403361344537816 * t, {
	    to: colors.darkBlue,
	    time: 0.5042016806722689 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(100, {
	    to: colors.white,
	    time: 0.7647058823529411 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: colors.lightBlueB,
	    time: 0.9159663865546218 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.08403361344537816 * t, {
	    to: colors.white,
	    time: 0.9831932773109243 * t,
	    ease: [0, 0, 1]
	  });
	};

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(547);
	
	var colors = _interopRequireWildcard(_colors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = function (player, end, audio) {
	  var t = audio.duration * 1000;
	
	  player.tracks.main.to({
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
	  }).smoothTo({
	    to: {
	      otherRadius: 0.8,
	      otherThick: -0.01,
	      otherEdge: 5
	    },
	    time: 0.017064846416382253 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
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
	    time: 0.051194539249146756 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      fadeAlpha: 0.99
	    },
	    time: 0.06484641638225255 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.013651877133105802 * t, {
	    to: {
	      soundWarp: 0.07,
	      noiseWarp: 0.2
	    },
	    time: 0.14675767918088736 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.027303754266211604 * t, {
	    to: {
	      noiseWarp: 0.04,
	      otherAlpha: 0.0001,
	      otherEdge: 3.5
	    },
	    time: 0.32081911262798635 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.013651877133105802 * t, {
	    to: {
	      noiseWarp: 0.08,
	      soundWarp: 0.025,
	      otherRadius: 0,
	      otherThick: 10,
	      otherEdge: 3
	    },
	    time: 0.40955631399317405 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.034129692832764506 * t, {
	    to: {
	      otherRadius: 2,
	      otherThick: 0.00000001,
	      otherEdge: 6
	    },
	    time: 0.6143344709897611 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.027303754266211604 * t, {
	    to: {
	      staticScale: 60,
	      staticShift: 0.9
	    },
	    time: 0.6825938566552902 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
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
	    time: 0.7849829351535836 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      grow: -0.0001,
	      noiseWarp: 0.8,
	      noiseScale: 3,
	      ringRadius: 1,
	      ringThick: 0.005,
	      ringAlpha: 0.01
	    },
	    time: 0.8532423208191127 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.025597269624573378 * t, {
	    to: {
	      noiseScale: 0.2,
	      ringThick: 1.5,
	      ringAlpha: 3
	    },
	    time: 0.9692832764505119 * t,
	    ease: [0, 0, 0, 1],
	    call: [end]
	  });
	
	  player.tracks.lightColor.smoothTo({
	    to: colors.white,
	    time: 0.017064846416382253 * t,
	    ease: [0, 0.95, 1]
	  });
	
	  player.tracks.fadeColor.smoothTo({
	    to: colors.orange,
	    time: 0.017064846416382253 * t,
	    ease: [0, 0.95, 1]
	  }).smoothOver(0.027303754266211604 * t, {
	    to: colors.yellow,
	    time: 0.32081911262798635 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.10238907849829351 * t, {
	    to: colors.white,
	    time: 0.8532423208191127 * t,
	    ease: [0, 0, 1]
	  });
	};

/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(547);
	
	var colors = _interopRequireWildcard(_colors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = function (player, end, audio) {
	  var t = audio.duration * 1000;
	
	  player.tracks.main.to({
	    to: {
	      audioMode: 'waveform',
	      audioScale: 1,
	      audioOrder: 1,
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
	      bokehRadius: 7,
	      bokehAmount: 40
	    },
	    time: 500
	  }).smoothOver(0.006734006734006734 * t, {
	    to: {
	      soundWarp: 1.7
	    },
	    time: 0.02356902356902357 * t,
	    ease: [0, 1, 1]
	  }).smoothTo({
	    to: {
	      silent: 0,
	      spin: 0.001,
	      ringRadius: 0.35,
	      ringThick: 0.001,
	      soundWarp: 8
	    },
	    time: 0.07407407407407407 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      noiseSpeed: 0.0001,
	      noiseWarp: 0.03
	    },
	    time: 0.13468013468013468 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 1.1,
	      ringThick: 0.0001,
	      soundWarp: 4,
	      fadeAlpha: 0.5
	    },
	    time: 0.16161616161616163 * t,
	    ease: [0, 1, 1]
	  }).smoothTo({
	    to: {
	      grow: -0.0006,
	      silent: 0.01,
	      triangleAlpha: 0.0001,
	      triangleEdge: 10,
	      triangleRadius: 10
	    },
	    time: 0.20202020202020202 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      grow: 0.0006,
	      silent: 1,
	      triangleAlpha: 0.0001,
	      triangleEdge: 10,
	      triangleRadius: 10,
	      triangleFat: 0.1,
	      fadeAlpha: 0.92
	    },
	    time: 0.2154882154882155 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.06734006734006734 * t, {
	    to: {
	      otherAlpha: 0.00001,
	      otherEdge: 3,
	      otherRadius: 0.7,
	      otherThick: 0.00000001
	    },
	    time: 0.3501683501683502 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.06734006734006734 * t, {
	    to: {
	      ringRadius: 2,
	      otherEdge: 2,
	      otherThick: 0.000001
	    },
	    time: 0.4713804713804714 * t,
	    ease: [0, 0, 1]
	  }).over(0.003367003367003367 * t, {
	    to: {
	      ringRadius: 0.1,
	      ringThick: 0,
	      ringAlpha: 0,
	      soundWarp: 0
	    },
	    time: 0.5622895622895623 * t
	  }).smoothTo({
	    to: {
	      ringRadius: 0.25,
	      ringAlpha: 0.0005,
	      soundWarp: 0.1
	    },
	    time: 0.6195286195286196 * t,
	    ease: [0, 1, 1]
	  }).smoothTo({
	    to: {
	      ringThick: 0.005,
	      ringRadius: 0.33
	    },
	    time: 0.6397306397306397 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      noiseWarp: 0.1
	    },
	    time: 0.6734006734006734 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      noiseWarp: 0.16,
	      otherThick: 0.0001
	    },
	    time: 0.7070707070707071 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      soundWarp: 0.02,
	      noiseWarp: 0.4,
	      noiseScale: 0.25,
	      noiseSpeed: 0.001,
	      otherRadius: 0.3,
	      otherThick: 0.1,
	      grow: -0.002
	    },
	    time: 0.8080808080808081 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringAlpha: 0.001,
	      fadeAlpha: 0.99,
	      otherAlpha: -0.00001,
	      staticAlpha: 0.05,
	      staticScale: 60,
	      staticShift: 1
	    },
	    time: 0.8148148148148149 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.06734006734006734 * t, {
	    to: {
	      ringRadius: 0.4,
	      ringAlpha: 0.005,
	      ringThick: 0.01,
	      noiseWarp: 0.05,
	      noiseSpeed: 0.0003,
	      staticAlpha: 0.5
	    },
	    time: 0.9966329966329966 * t,
	    ease: [0, 0, 1],
	    call: [end]
	  });
	
	  player.tracks.lightColor.smoothTo({
	    to: colors.white,
	    time: 0.03367003367003367 * t,
	    ease: [0, 0.95, 1]
	  }).smoothOver(0.026936026936026935 * t, {
	    to: colors.lightBlueA,
	    time: 0.11447811447811448 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.06734006734006734 * t, {
	    to: colors.white,
	    time: 0.9966329966329966 * t,
	    ease: [0, 0, 1]
	  });
	
	  player.tracks.fadeColor.smoothTo({
	    to: colors.lightBlueA,
	    time: 0.03367003367003367 * t,
	    ease: [0, 0.95, 1]
	  }).smoothOver(0.026936026936026935 * t, {
	    to: colors.darkBlue,
	    time: 0.11447811447811448 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.06734006734006734 * t, {
	    to: colors.white,
	    time: 0.9966329966329966 * t,
	    ease: [0, 0, 1]
	  });
	};

/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(547);
	
	var colors = _interopRequireWildcard(_colors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = function (player, end, audio) {
	  var t = audio.duration * 1000;
	
	  player.tracks.main.smoothTo({
	    to: {
	      audioMode: 'waveform',
	      audioScale: 1000,
	      audioOrder: 0,
	      silent: 0.0000001,
	      soundWarp: 0.005,
	      soundSmooth: 0.3,
	      meanFulcrum: 0.6,
	      ringRadius: 0,
	      ringAlpha: 0.5,
	      ringThick: 0.1,
	      noiseSpeed: 0.0001,
	      noiseWarp: 0,
	      otherRadius: 3,
	      otherThick: -0.0000001,
	      otherAlpha: -0.00001,
	      otherEdge: 500,
	      triangleAlpha: 0,
	      triangleEdge: 500,
	      staticScale: 100,
	      staticSpeed: 0.5,
	      staticShift: 0.5,
	      staticAlpha: 0.05,
	      grow: 0,
	      fadeAlpha: 0.9,
	      bokehRadius: 7,
	      bokehAmount: 40
	    },
	    time: 1800,
	    ease: [0, 0, 1]
	  }).smoothOver(0.004901960784313725 * t, {
	    to: {
	      noiseWarp: 0.06,
	      grow: 1
	    },
	    time: 0.0784313725490196 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.004901960784313725 * t, {
	    to: {
	      ringAlpha: 0.02,
	      noiseWarp: 0.1,
	      ringRadius: -0.2
	    },
	    time: 0.1568627450980392 * t,
	    ease: [0, -0.3, 1.3, 1]
	  }).smoothOver(0.004901960784313725 * t, {
	    to: {
	      ringAlpha: 0.25
	    },
	    time: 0.22549019607843138 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.004901960784313725 * t, {
	    to: {
	      ringAlpha: 0.1,
	      soundWarp: 0.012
	    },
	    time: 0.29901960784313725 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.00980392156862745 * t, {
	    to: {
	      ringAlpha: 0.01,
	      soundWarp: 0.01
	    },
	    time: 0.37745098039215685 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      triangleEdge: 200,
	      triangleAlpha: -0.001,
	      triangleRadius: -1,
	      fadeAlpha: 0.93
	    },
	    time: 0.47549019607843135 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: -0.1,
	      fadeAlpha: 0.99
	    },
	    time: 0.5049019607843137 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: -0.1,
	      fadeAlpha: 0.99
	    },
	    time: 0.5147058823529411 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 0,
	      ringThick: 0.15,
	      triangleEdge: 500,
	      otherEdge: 0.22,
	      staticScale: 40
	    },
	    time: 0.5343137254901961 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 0.5,
	      ringThick: 0.03
	    },
	    time: 0.5784313725490197 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringThick: 0.1,
	      noiseWarp: 0.2,
	      noiseSpeed: 0.001,
	      fadeAlpha: 0.9
	    },
	    time: 0.5882352941176471 * t,
	    ease: [0, 1, 1]
	  }).smoothOver(0.0196078431372549 * t, {
	    to: {
	      ringRadius: 0,
	      ringThick: 0.7,
	      staticAlpha: 0.3
	    },
	    time: 0.6715686274509803 * t,
	    ease: [0, 1, 1]
	  }).smoothOver(0.0196078431372549 * t, {
	    to: {
	      ringThick: 0.95,
	      triangleEdge: 210,
	      triangleFat: 0.01,
	      triangleRadius: -5,
	      otherThick: -0.000001
	    },
	    time: 0.7401960784313726 * t,
	    ease: [0, 1, 1]
	  }).smoothTo({
	    to: {
	      ringThick: 1.8
	    },
	    time: 0.8823529411764706 * t,
	    ease: [0, 1, 1]
	  }).smoothOver(0.06372549019607843 * t, {
	    to: {
	      triangleRadius: -10,
	      otherEdge: 0
	    },
	    time: 0.9852941176470589 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherEdge: 1
	    },
	    time: 0.9950980392156863 * t,
	    ease: [0, 0, 1],
	    call: [end]
	  });
	
	  player.tracks.lightColor.smoothTo({
	    to: colors.white,
	    time: 1000,
	    ease: [0, 0.95, 1]
	  });
	
	  player.tracks.fadeColor.smoothTo({
	    to: colors.darkBlue,
	    time: 1000,
	    ease: [0, 0.95, 1]
	  }).smoothOver(0.049019607843137254 * t, {
	    to: colors.lightBlueA,
	    time: 0.5343137254901961 * t,
	    ease: [0, 0.95, 1]
	  }).smoothOver(0.004901960784313725 * t, {
	    to: colors.darkBlue,
	    time: 0.5784313725490197 * t,
	    ease: [0, 0.95, 1]
	  });
	};

/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(547);
	
	var colors = _interopRequireWildcard(_colors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = function (player, end, audio) {
	  var t = audio.duration * 1000;
	
	  player.tracks.main.to({
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
	      grow: -0.003,
	      fadeAlpha: 0.91,
	      bokehRadius: 3,
	      bokehAmount: 40
	    },
	    time: 210
	  }).smoothTo({
	    to: {
	      ringRadius: 0.5
	    },
	    time: 0.024271844660194174 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.08737864077669903 * t, {
	    to: {
	      soundWarp: 0.00004,
	      staticAlpha: 0.08
	    },
	    time: 0.1262135922330097 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringThick: 0.01
	    },
	    time: 0.1941747572815534 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 0.6,
	      ringThick: 0.001
	    },
	    time: 0.3106796116504854 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherEdge: 250,
	      otherRadius: 0.2,
	      otherThick: 0.000000001
	    },
	    time: 0.3592233009708738 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.0970873786407767 * t, {
	    to: {
	      otherRadius: 15,
	      otherThick: 0.0000001
	    },
	    time: 0.5533980582524272 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherRadius: 60,
	      ringRadius: 0.92,
	      soundWarp: -0.00002
	    },
	    time: 0.6116504854368932 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.038834951456310676 * t, {
	    to: {
	      grow: 0.003,
	      soundWarp: -0.00005
	    },
	    time: 0.7766990291262136 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherRadius: 1
	    },
	    time: 0.8252427184466019 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherRadius: 1,
	      soundWarp: -0.00008
	    },
	    time: 0.8640776699029126 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.05825242718446602 * t, {
	    to: {
	      soundWarp: -0.001,
	      ringAlpha: 50,
	      silent: 1,
	      fadeAlpha: 1
	    },
	    time: 0.9999 * t,
	    ease: [0, 0, 1],
	    call: [end]
	  });
	
	  player.tracks.lightColor.smoothTo({
	    to: colors.white,
	    time: 1000,
	    ease: [0, 0.95, 1]
	  });
	
	  player.tracks.fadeColor.smoothTo({
	    to: colors.white,
	    time: 1000,
	    ease: [0, 0.95, 1]
	  });
	};

/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(547);
	
	var colors = _interopRequireWildcard(_colors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = function (player, end, audio) {
	  var t = audio.duration * 1000;
	
	  player.tracks.main.to({
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
	  }).smoothOver(0.0311284046692607 * t, {
	    to: {
	      soundWarp: 0.00002,
	      silent: 0.0000002
	    },
	    time: 0.07392996108949416 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.01556420233463035 * t, {
	    to: {
	      fadeAlpha: 0.98
	    },
	    time: 0.09727626459143969 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.011673151750972763 * t, {
	    to: {
	      noiseWarp: 0.2,
	      noiseSpeed: 0.001
	    },
	    time: 0.1556420233463035 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.023346303501945526 * t, {
	    to: {
	      otherEdge: 210
	    },
	    time: 0.23346303501945526 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherThick: 0.0025
	    },
	    time: 0.2607003891050584 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.019455252918287938 * t, {
	    to: {
	      otherThick: 0.0008,
	      otherEdge: 254
	    },
	    time: 0.2723735408560311 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.038910505836575876 * t, {
	    to: {
	      ringRadius: 0.7,
	      otherThick: 0.00001,
	      otherRadius: 200
	    },
	    time: 0.35019455252918286 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.019455252918287938 * t, {
	    to: {
	      staticAlpha: 0
	    },
	    time: 0.3852140077821012 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.011673151750972763 * t, {
	    to: {
	      grow: 0.1
	    },
	    time: 0.47470817120622566 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.011673151750972763 * t, {
	    to: {
	      grow: 0.3
	    },
	    time: 0.5525291828793775 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.023346303501945526 * t, {
	    to: {
	      soundWarp: 0.000001,
	      noiseWarp: 0.001
	    },
	    time: 0.6964980544747081 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      grow: 0.4,
	      ringAlpha: 0,
	      noiseWarp: 0.00001
	    },
	    time: 0.7159533073929961 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(500, {
	    to: {
	      ringAlpha: 5,
	      noiseWarp: 0.0001,
	      spin: 0.0002
	    },
	    time: 0.7295719844357976 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.023346303501945526 * t, {
	    to: {
	      ringThick: 0.1,
	      noiseWarp: 0.0003,
	      soundWarp: 0.00003,
	      otherThick: 0.003,
	      otherRadius: 0.0000001
	    },
	    time: 0.7821011673151751 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      noiseWarp: 0.002,
	      spin: -0.0002
	    },
	    time: 0.8054474708171206 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      noiseWarp: 0.1
	    },
	    time: 0.8443579766536965 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      soundWarp: 0.00005,
	      grow: 0.2,
	      growLimit: 1.2,
	      ringThick: 0.03,
	      fadeAlpha: 0.93,
	      jitter: 0
	    },
	    time: 0.8560311284046692 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      grow: 0.5,
	      growLimit: 1.8
	    },
	    time: 0.9182879377431906 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.011673151750972763 * t, {
	    to: {
	      grow: 1,
	      growLimit: 3,
	      ringThick: 2
	    },
	    time: 0.9999 * t,
	    ease: [0, 0, 1],
	    call: [end]
	  });
	
	  player.tracks.lightColor.smoothTo({
	    to: colors.pink,
	    time: 0.07392996108949416 * t,
	    ease: [0, 0.95, 1]
	  }).smoothOver(0.011673151750972763 * t, {
	    to: colors.lightBlueA,
	    time: 0.2178988326848249 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.011673151750972763 * t, {
	    to: colors.yellow,
	    time: 0.35019455252918286 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.019455252918287938 * t, {
	    to: colors.orange,
	    time: 0.5525291828793775 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.0311284046692607 * t, {
	    to: colors.white,
	    time: 0.9999 * t,
	    ease: [0, 0, 1]
	  });
	
	  player.tracks.fadeColor.smoothTo({
	    to: colors.orange,
	    time: 0.07392996108949416 * t,
	    ease: [0, 0.95, 1]
	  }).smoothOver(0.019455252918287938 * t, {
	    to: colors.white,
	    time: 0.5525291828793775 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(500, {
	    to: colors.lightBlueC,
	    time: 0.7295719844357976 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: colors.lightBlueB,
	    time: 0.8054474708171206 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: colors.lightBlueA,
	    time: 0.8521400778210116 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: colors.orange,
	    time: 0.8560311284046692 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.0311284046692607 * t, {
	    to: colors.white,
	    time: 0.9999 * t,
	    ease: [0, 0, 1]
	  });
	};

/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(547);
	
	var colors = _interopRequireWildcard(_colors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = function (player, end, audio) {
	  var t = audio.duration * 1000;
	
	  player.tracks.main.to({
	    to: {
	      audioMode: 'waveform',
	      audioOrder: 0,
	      audioScale: 1,
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
	  }).smoothOver(0.01567398119122257 * t, {
	    to: {
	      ringRadius: 0.35,
	      ringThick: 0,
	      ringAlpha: 0.01,
	      grow: 0.003
	    },
	    time: 0.02664576802507837 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      soundWarp: 0.00004,
	      ringRadius: 0.1
	    },
	    time: 0.09404388714733543 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      soundWarp: 0.000055,
	      fadeAlpha: 0.93
	    },
	    time: 0.12539184952978055 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      soundWarp: 0.000075,
	      ringRadius: 0,
	      ringThick: 0.001,
	      fadeAlpha: 0.94
	    },
	    time: 0.1724137931034483 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringAlpha: 0.1
	    },
	    time: 0.1974921630094044 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.03134796238244514 * t, {
	    to: {
	      grow: 0.01
	    },
	    time: 0.28213166144200624 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.01567398119122257 * t, {
	    to: {
	      otherEdge: 0.01
	    },
	    time: 0.3573667711598746 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherRadius: 0.3
	    },
	    time: 0.39184952978056425 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherRadius: 0.3,
	      otherThick: 0.0001,
	      otherEdge: 200
	    },
	    time: 0.40752351097178685 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.018808777429467086 * t, {
	    to: {
	      grow: 0.005,
	      growLimit: 1.4
	    },
	    time: 0.45141065830721006 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.018808777429467086 * t, {
	    to: {
	      otherThick: 0.0001
	    },
	    time: 0.5172413793103449 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherThick: -0.001,
	      grow: -0.003,
	      growLimit: -0.3,
	      ringRadius: 0.6
	    },
	    time: 0.5360501567398119 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherThick: -0.01,
	      otherRadius: 0.1
	    },
	    time: 0.567398119122257 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherAlpha: 0.00005,
	      otherThick: 0.0001,
	      otherRadius: 0.7
	    },
	    time: 0.5736677115987461 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.018808777429467086 * t, {
	    to: {
	      otherAlpha: 0.0005
	    },
	    time: 0.6363636363636364 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.009404388714733543 * t, {
	    to: {
	      otherAlpha: 0.00001,
	      grow: 0.002,
	      growLimit: 0,
	      ringRadius: 0.3
	    },
	    time: 0.658307210031348 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.07523510971786834 * t, {
	    to: {
	      otherRadius: 1.4,
	      soundWarp: 0.0001
	    },
	    time: 0.7962382445141066 * t,
	    ease: [0, -0.1, 1.3, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 0.6,
	      ringThick: 0.05,
	      otherRadius: 0.01,
	      otherThick: 0.003
	    },
	    time: 0.8087774294670846 * t,
	    ease: [0, 1, 0.3, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 0.4,
	      otherThick: -0.0006
	    },
	    time: 0.8620689655172413 * t,
	    ease: [0, 0, 1.6, 1]
	  }).smoothOver(0.018808777429467086 * t, {
	    to: {
	      ringRadius: 0.3,
	      noiseWarp: 0.08,
	      grow: 0.0008
	    },
	    time: 0.8871473354231975 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 0.6,
	      soundWarp: 0.00006,
	      meanFulcrum: 0.1
	    },
	    time: 0.9404388714733543 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.03542319749216301 * t, {
	    to: {
	      ringRadius: 0.3,
	      soundWarp: 0.00001
	    },
	    time: 0.9884012539184953 * t,
	    ease: [0, 0.8, 0, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 0,
	      ringThick: 2
	    },
	    time: 0.9968652037617555 * t,
	    ease: [0, 0.8, 0, 1],
	    call: [end]
	  });
	
	  player.tracks.lightColor.smoothTo({
	    to: colors.lightBlueC,
	    time: 0.09090909090909091 * t,
	    ease: [0, 0.95, 1]
	  }).over(0.009404388714733543 * t, {
	    to: colors.yellow,
	    time: 0.658307210031348 * t
	  }).over(0.025078369905956112 * t, {
	    to: colors.white,
	    time: 0.8181818181818182 * t
	  });
	
	  player.tracks.fadeColor.smoothTo({
	    to: colors.yellow,
	    time: 0.09090909090909091 * t,
	    ease: [0, 0.95, 1]
	  }).over(0.03761755485893417 * t, {
	    to: colors.orange,
	    time: 0.5172413793103449 * t
	  }).over(0.03761755485893417 * t, {
	    to: colors.yellow,
	    time: 0.8181818181818182 * t
	  });
	};

/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(547);
	
	var colors = _interopRequireWildcard(_colors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = function (player, end, audio) {
	  var t = audio.duration * 1000;
	
	  player.tracks.main.to({
	    to: {
	      audioMode: 'frequencies',
	      audioScale: 1,
	      audioOrder: 1,
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
	  }).smoothTo({
	    to: {
	      noiseWarp: 0.06
	    },
	    time: 0.025806451612903226 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      noiseWarp: 0.15
	    },
	    time: 0.05806451612903226 * t,
	    ease: [0, 0.3, 1]
	  }).smoothOver(0.016129032258064516 * t, {
	    to: {
	      ringRadius: 0.6,
	      triangleAlpha: 0.0001
	    },
	    time: 0.11290322580645161 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 0,
	      ringAlpha: 0.015,
	      soundWarp: 1.6,
	      noiseWarp: 0,
	      fadeAlpha: 0.95,
	      grow: 0.003,
	      spin: 0.002
	    },
	    time: 0.16129032258064516 * t,
	    ease: [0, 0.8, 1]
	  }).smoothTo({
	    to: {
	      otherAlpha: 0.00001
	    },
	    time: 0.2 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.02903225806451613 * t, {
	    to: {
	      otherAlpha: 0.001,
	      otherThick: 0.000007
	    },
	    time: 0.25806451612903225 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.05161290322580645 * t, {
	    to: {
	      otherEdge: 1.5,
	      triangleEdge: 1.5
	    },
	    time: 0.3387096774193548 * t,
	    ease: [0, 1, 1]
	  }).smoothTo({
	    to: {
	      grow: 0.02,
	      otherThick: 0.00001
	    },
	    time: 0.3709677419354839 * t,
	    ease: [0, 0.5, 0, 1]
	  }).smoothTo({
	    to: {
	      grow: 0.01,
	      ringThick: 0.07,
	      otherThick: 1,
	      otherRadius: 0.6
	    },
	    time: 0.3935483870967742 * t,
	    ease: [0, 1, 1]
	  }).smoothTo({
	    to: {
	      ringAlpha: 0.05,
	      grow: 0.01,
	      otherThick: 0.0001,
	      otherRadius: 1,
	      otherAlpha: 0.00004,
	      otherEdge: 3,
	      spin: 0.0008
	    },
	    time: 0.4483870967741935 * t,
	    ease: [0, 1, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 0.3,
	      noiseWarp: 0.25,
	      spin: 0.0004
	    },
	    time: 0.5096774193548387 * t,
	    ease: [0, 0.3, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 0.8,
	      ringThick: 0,
	      noiseWarp: 0.05,
	      triangleAlpha: 0
	    },
	    time: 0.535483870967742 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.05806451612903226 * t, {
	    to: {
	      ringRadius: 1,
	      grow: -0.002,
	      otherThick: 0.1,
	      otherAlpha: 0.01,
	      otherRadius: 2,
	      fadeAlpha: 0.98
	    },
	    time: 0.6774193548387096 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.054838709677419356 * t, {
	    to: {
	      ringRadius: 1.6,
	      noiseWarp: 0.1,
	      spin: -0.00004,
	      otherRadius: 0.5,
	      otherEdge: 1,
	      triangleEdge: 1.5
	    },
	    time: 0.7935483870967742 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherRadius: 1,
	      otherThick: 0.00001,
	      otherAlpha: 0.00001,
	      triangleAlpha: 0.00001,
	      grow: -0.004
	    },
	    time: 0.8 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.03870967741935484 * t, {
	    to: {
	      ringRadius: 0,
	      triangleAlpha: 0,
	      grow: -0.001
	    },
	    time: 0.9516129032258065 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.024193548387096774 * t, {
	    to: {
	      ringAlpha: 20
	    },
	    time: 0.9919354838709677 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringThick: 5
	    },
	    time: 0.9951612903225806 * t,
	    ease: [0, 0, 1],
	    call: [end]
	  });
	
	  player.tracks.lightColor.smoothTo({
	    to: colors.yellow,
	    time: 0.025806451612903226 * t,
	    ease: [0, 0.95, 1]
	  }).over(0.7387096774193549 * t - 192000, {
	    to: colors.white,
	    time: 0.7387096774193549 * t
	  });
	
	  player.tracks.fadeColor.smoothTo({
	    to: colors.white,
	    time: 0.025806451612903226 * t,
	    ease: [0, 0.95, 1]
	  }).over(0.05161290322580645 * t, {
	    to: colors.pink,
	    time: 0.3935483870967742 * t
	  }).to({
	    to: colors.orange,
	    time: 0.41935483870967744 * t
	  });
	};

/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(547);
	
	var colors = _interopRequireWildcard(_colors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = function (player, end, audio) {
	  var t = audio.duration * 1000;
	
	  player.tracks.main.to({
	    to: {
	      audioMode: 'waveform',
	      audioScale: 1,
	      audioOrder: 1,
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
	  }).smoothTo({
	    to: {
	      ringRadius: 0.25,
	      noiseWarp: 0.3
	    },
	    time: 0.04198473282442748 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringThick: 0.2,
	      soundWarp: 0.003
	    },
	    time: 0.08396946564885496 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      bokehRadius: 12,
	      ringAlpha: 100
	    },
	    time: 0.1717557251908397 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherAlpha: 0.01
	    },
	    time: 0.2099236641221374 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      noiseSpeed: 0.001
	    },
	    time: 0.22900763358778625 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.007633587786259542 * t, {
	    to: {
	      ringRadius: 0.5,
	      soundWarp: 0.0005,
	      otherEdge: 20,
	      otherRadius: 10
	    },
	    time: 0.3053435114503817 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.007633587786259542 * t, {
	    to: {
	      noiseWarp: 0.6,
	      otherEdge: 10,
	      otherThick: 0.0000002
	    },
	    time: 0.4312977099236641 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.015267175572519083 * t, {
	    to: {
	      ringRadius: 0.8,
	      noiseWarp: 1,
	      otherThick: 0.000001,
	      otherAlpha: 0.00001
	    },
	    time: 0.5267175572519084 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.022900763358778626 * t, {
	    to: {
	      ringThick: 0.000001
	    },
	    time: 0.5954198473282443 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.019083969465648856 * t, {
	    to: {
	      ringRadius: 1,
	      noiseWarp: 10
	    },
	    time: 0.6793893129770993 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      noiseScale: 1
	    },
	    time: 0.7137404580152672 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      noiseScale: 10
	    },
	    time: 0.7519083969465649 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      noiseScale: 0.01,
	      noiseWarp: 30
	    },
	    time: 0.9541984732824428 * t,
	    ease: [0, 0.3, 1]
	  }).smoothTo({
	    to: {
	      ringThick: 1
	    },
	    time: 0.9770992366412213 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringThick: 60
	    },
	    time: 0.9961832061068703 * t,
	    ease: [0, 0, 1],
	    call: [end]
	  });
	
	  player.tracks.lightColor.smoothTo({
	    to: colors.white,
	    time: 0.019083969465648856 * t,
	    ease: [0, 0.95, 1]
	  });
	
	  player.tracks.fadeColor.smoothTo({
	    to: colors.lightBlueA,
	    time: 0.019083969465648856 * t,
	    ease: [0, 0.95, 1]
	  });
	};

/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(547);
	
	var colors = _interopRequireWildcard(_colors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = function (player, end, audio) {
	  var t = audio.duration * 1000;
	
	  player.tracks.main.to({
	    to: {
	      audioMode: 'waveform',
	      audioOrder: 3,
	      audioScale: 1,
	      silent: 0.00001,
	      soundWarp: 0.000003,
	      meanFulcrum: 0.7,
	      ringAlpha: 0.01,
	      noiseSpeed: 0.0001,
	      noiseWarp: 0,
	      otherAlpha: 0,
	      otherEdge: 0.01,
	      triangleAlpha: 0,
	      triangleFat: 0.01,
	      triangleEdge: 0.01,
	      grow: -2,
	      jitter: 0,
	      fadeAlpha: 0,
	      bokehRadius: 7,
	      bokehAmount: 40
	    },
	    time: 500
	  }).smoothTo({
	    to: {
	      soundWarp: 0.00002,
	      ringRadius: 0.7,
	      fadeAlpha: 0.95,
	      grow: -0.1
	    },
	    time: 0.07692307692307693 * t,
	    ease: [0, 0.4, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 0.4,
	      grow: 0.1
	    },
	    time: 0.1623931623931624 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 0.1
	    },
	    time: 0.23504273504273504 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      grow: 0.3
	    },
	    time: 0.29914529914529914 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.07264957264957266 * t, {
	    to: {
	      ringRadius: 0.4,
	      ringThick: 0.04,
	      soundWarp: 0.00004,
	      grow: 0.08,
	      triangleEdge: 230,
	      triangleAlpha: 0.0001
	    },
	    time: 0.405982905982906 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.01282051282051282 * t, {
	    to: {
	      grow: 0.04,
	      growLimit: 1
	    },
	    time: 0.4444444444444444 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.1111111111111111 * t, {
	    to: {
	      ringRadius: 0.6,
	      ringThick: 0.01,
	      soundWarp: 0.00001,
	      growLimit: 0.4
	    },
	    time: 0.6068376068376068 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.03418803418803419 * t, {
	    to: {
	      ringThick: 0.05,
	      triangleFat: 1,
	      triangleEdge: 200,
	      grow: -0.003
	    },
	    time: 0.6794871794871795 * t,
	    ease: [0, 1, 1]
	  }).smoothOver(0.02564102564102564 * t, {
	    to: {
	      ringThick: 0.15,
	      growLimit: 2
	    },
	    time: 0.8632478632478633 * t,
	    ease: [0, 1, 1]
	  }).smoothOver(0.08547008547008547 * t, {
	    to: {
	      grow: 0.1,
	      triangleAlpha: 0
	    },
	    time: 0.9829059829059829 * t,
	    ease: [0, 1, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 0.1,
	      ringThick: 2.5
	    },
	    time: 0.9978632478632479 * t,
	    ease: [0, 0.2, 1],
	    call: [end]
	  });
	
	  player.tracks.lightColor.to({
	    to: colors.white,
	    time: 500
	  });
	
	  player.tracks.fadeColor.to({
	    to: colors.none,
	    time: 500
	  }).smoothTo({
	    to: colors.lightBlueC,
	    time: 0.017094017094017096 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.017094017094017096 * t, {
	    to: colors.lightBlueB,
	    time: 0.3418803418803419 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.042735042735042736 * t, {
	    to: colors.lightBlueA,
	    time: 0.6794871794871795 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.05982905982905983 * t, {
	    to: colors.white,
	    time: 0.9978632478632479 * t,
	    ease: [0, 0, 1]
	  });
	};

/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(547);
	
	var colors = _interopRequireWildcard(_colors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = function (player, end, audio) {
	  var t = audio.duration * 1000;
	
	  player.tracks.main.to({
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
	  }).smoothTo({
	    to: {
	      ringRadius: 0.5,
	      noiseWarp: 0.1
	    },
	    time: 0.056 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.0475 * t, {
	    to: {
	      soundWarp: 0.00004,
	      staticAlpha: 0.01
	    },
	    time: 0.094 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringThick: 0.01
	    },
	    time: 0.145 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 0.6,
	      ringThick: 0.001
	    },
	    time: 0.1888 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherEdge: 250,
	      otherRadius: 20,
	      otherThick: 0.0000001
	    },
	    time: 0.1592 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.052789 * t, {
	    to: {
	      otherRadius: 15,
	      otherThick: 0.0000001
	    },
	    time: 0.2748 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherRadius: 60,
	      ringRadius: 1,
	      soundWarp: -0.00002
	    },
	    time: 0.33257 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.0211 * t, {
	    to: {
	      grow: 0.003,
	      soundWarp: -0.00005
	    },
	    time: 0.4223 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherRadius: 1
	    },
	    time: 0.51777 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherRadius: 1,
	      soundWarp: -0.00008
	    },
	    time: 0.53623 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      otherRadius: 10,
	      soundWarp: 0.00008
	    },
	    time: 0.6305468 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.81143 * t - 0.722088 * t, {
	    to: {
	      fadeAlpha: 0.99
	    },
	    time: 0.81143 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.960922 * t - 0.90467 * t, {
	    to: {
	      ringThick: 0.1
	    },
	    time: 0.960922 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(6000, {
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
	
	  player.tracks.lightColor.smoothTo({
	    to: colors.white,
	    time: 0.0052789 * t,
	    ease: [0, 0.95, 1]
	  }).smoothTo({
	    to: colors.lightBlueC,
	    time: 0.02639 * t,
	    ease: [0, 0.95, 1]
	  }).smoothOver(0.0422 * t, {
	    to: colors.white,
	    time: t,
	    ease: [0, 0.95, 1]
	  });
	
	  player.tracks.fadeColor.smoothTo({
	    to: colors.white,
	    time: 0.0052789 * t,
	    ease: [0, 0.95, 1]
	  }).smoothTo({
	    to: colors.lightBlueA,
	    time: 0.02639 * t,
	    ease: [0, 0.95, 1]
	  }).smoothOver(0.0211 * t, {
	    to: colors.white,
	    time: t,
	    ease: [0, 0.95, 1]
	  });
	};

/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(547);
	
	var colors = _interopRequireWildcard(_colors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = function (player, end, audio) {
	  var t = audio.duration * 1000;
	
	  player.tracks.main.to({
	    to: {
	      audioMode: 'waveform',
	      audioScale: 1,
	      audioOrder: 1,
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
	  }).smoothOver(0.003365976 * t, {
	    to: {
	      soundWarp: 0.1
	    },
	    time: 0.01178 * t,
	    ease: [0, 1, 1]
	  }).smoothTo({
	    to: {
	      silent: 0,
	      spin: 0.001,
	      ringRadius: 0.35,
	      ringThick: 0.001,
	      soundWarp: 0.5
	    },
	    time: 0.0370 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      noiseSpeed: 0.0001,
	      noiseWarp: 0.03
	    },
	    time: 0.080866 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringRadius: 1.1,
	      ringThick: 0.0001,
	      soundWarp: 1,
	      fadeAlpha: 0.5
	    },
	    time: 0.1098 * t,
	    ease: [0, 1, 1]
	  }).smoothTo({
	    to: {
	      grow: -0.0006,
	      silent: 0.01,
	      triangleAlpha: 0.0001,
	      triangleEdge: 10,
	      triangleRadius: 10
	    },
	    time: 0.127956 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      grow: 0.0006,
	      silent: 1,
	      triangleAlpha: 0.0001,
	      triangleEdge: 10,
	      triangleRadius: 10,
	      triangleFat: 0.1,
	      fadeAlpha: 0.9
	    },
	    time: 0.1494855 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.03365976 * t, {
	    to: {
	      otherAlpha: 0.00001,
	      otherEdge: 3,
	      otherRadius: 0.7,
	      otherThick: 0.00001
	    },
	    time: 0.24475 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.03366 * t, {
	    to: {
	      ringRadius: 2,
	      otherEdge: 4,
	      otherThick: 0.000001
	    },
	    time: 0.2704 * t,
	    ease: [0, 0, 1]
	  }).over(0.00673 * t, {
	    to: {
	      ringRadius: 0.1,
	      ringThick: 0,
	      ringAlpha: 0,
	      soundWarp: 0
	    },
	    time: 0.31116 * t
	  }).smoothTo({
	    to: {
	      ringRadius: 0.25,
	      ringAlpha: 0.0005,
	      soundWarp: 0.1
	    },
	    time: 0.3096698 * t,
	    ease: [0, 1, 1]
	  }).smoothTo({
	    to: {
	      ringThick: 0.005,
	      ringRadius: 0.33
	    },
	    time: 0.31976776 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      noiseWarp: 0.1
	    },
	    time: 0.3365976 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      noiseWarp: 0.16,
	      otherThick: 0.0001
	    },
	    time: 0.3534275 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      soundWarp: 0.02,
	      noiseWarp: 0.4,
	      noiseScale: 0.25,
	      noiseSpeed: 0.001,
	      otherRadius: 0.3,
	      otherThick: 0.1,
	      grow: -0.002
	    },
	    time: 0.4039 * t,
	    ease: [0, 0, 1]
	  }).smoothTo({
	    to: {
	      ringAlpha: 0.001,
	      fadeAlpha: 0.99,
	      otherAlpha: -0.00001,
	      staticAlpha: 0.05,
	      staticScale: 60,
	      staticShift: 1
	    },
	    time: 0.407283 * t,
	    ease: [0, 0, 1]
	  }).smoothOver(0.03365976 * t, {
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
	
	  player.tracks.lightColor.smoothTo({
	    to: colors.white,
	    time: 0.0168 * t,
	    ease: [0, 0.95, 1]
	  });
	
	  player.tracks.fadeColor.smoothTo({
	    to: colors.yellow,
	    time: 0.0168 * t,
	    ease: [0, 0.95, 1]
	  }).over(0.03365976 * t, {
	    to: colors.white,
	    time: t
	  });
	};

/***/ })
/******/ ]);
//# sourceMappingURL=torch.js.map