/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(1);\nmodule.exports = __webpack_require__(2);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\n// some features need the be polyfilled..\n// https://babeljs.io/docs/usage/polyfill/\n\n// import 'babel-core/polyfill';\n// or import specific polyfills\n// import {$} from './helpers/util';\n\nvar init = function init() {\n  console.log('Hello World John-Alexander Kolmus');\n};\n\nwindow.onload = function () {\n\n  var context = canvas.getContext('2d');\n  var colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);\n  tracking.track('#video', colors, { camera: true });\n\n  colors.on('track', function (event) {\n    context.clearRect(0, 0, canvas.width, canvas.height);\n\n    if (event.data.length === 0) {\n      // No colors were detected in this frame.\n\n    } else {\n        event.data.forEach(function (rect) {\n          // rect.x, rect.y, rect.height, rect.width, rect.color\n          context.strokeStyle = rect.color;\n          console.log(canvas.width);\n          context.strokeRect(-1 * rect.x + canvas.width - rect.width, rect.y, rect.width, rect.height);\n          context.fillText('x: ' + (-1 * rect.x + canvas.width - rect.width) + 'px', -1 * rect.x + canvas.width + 5, rect.y + 11);\n          context.fillStyle = \"#fff\";\n        });\n      }\n  });\n};\n\ninit();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/script.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/script.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_scss/style.scss\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_scss/style.scss?");

/***/ }
/******/ ]);