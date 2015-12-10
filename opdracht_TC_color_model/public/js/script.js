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

	eval("'use strict';\n\n// some features need the be polyfilled..\n// https://babeljs.io/docs/usage/polyfill/\n\n// import 'babel-core/polyfill';\n// or import specific polyfills\n// import {$} from './helpers/util';\n\njavascript: (function () {\n    var script = document.createElement('script');script.onload = function () {\n        var stats = new Stats();stats.domElement.style.cssText = 'position:fixed;left:0;top:0;z-index:10000';document.body.appendChild(stats.domElement);requestAnimationFrame(function loop() {\n            stats.update();requestAnimationFrame(loop);\n        });\n    };script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);\n})();\n\nvar recta;\n\nvar scene, camera, renderer;\nvar controls, guiControls, datGUI;\nvar stats;\nvar dae, spotLight;\nvar SPEED = 0.04;\nvar daePos = 0;\n\nwindow.onload = function () {\n    var loader = new THREE.ColladaLoader();\n    loader.options.convertUpAxis = true;\n    loader.load('models/meatball_01.dae', function (collada) {\n        dae = collada.scene;\n        dae.scale.x = dae.scale.y = dae.scale.z = 50;\n        dae.position.x = daePos;\n        console.log('model.x = ' + daePos);\n        dae.traverse(function (child) {\n            if (child.colladaId === \"Cube\") {\n                child.traverse(function (e) {\n                    e.castShadow = true;\n                    e.receiveShadow = true;\n                    if (e.material instanceof THREE.MeshPhongMaterial) {\n                        e.material.needsUpdate = true;\n                    }\n                });\n            }\n        });\n\n        dae.updateMatrix();\n        init();\n        animate();\n        console.log(scene);\n    });\n\n    var context = canvas.getContext('2d');\n    var colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);\n    tracking.track('#video', colors, { camera: true });\n\n    colors.on('track', function (event) {\n        context.clearRect(0, 0, canvas.width, canvas.height);\n        console.log('detecting colors');\n\n        if (event.data.length === 0) {\n            // No colors were detected in this frame.\n            console.log('no colors detected');\n        } else {\n\n            event.data.forEach(function (rect) {\n                console.log('color detected');\n                // rect.x, rect.y, rect.height, rect.width, rect.color\n\n                recta = rect.color;\n\n                if (rect.color = \"magenta\") {\n                    console.log('woehhoahohahaohhoahoah');\n                    console.log('rect.x == ' + rect.x);\n                    console.log('rect.y == ' + rect.y);\n                    console.log('rect.z == ' + rect.z);\n\n                    console.log('innerwidth ' + window.innerWidth / 2);\n\n                    dae.position.x = -rect.x + window.innerWidth / 4 - 90;\n                    dae.position.y = -rect.y + window.innerHeight / 4;\n                    //dae.position.z = -rect.z + (window.innerHeight/4);\n                    //console.log('daepos magenta = ' + daePos);\n                }\n\n                context.strokeStyle = rect.color;\n                context.strokeRect(-1 * rect.x + canvas.width - rect.width, rect.y, rect.width, rect.height);\n                context.fillText('x: ' + (-1 * rect.x + canvas.width - rect.width) + 'px', -1 * rect.x + canvas.width + 5, rect.y + 11);\n                context.fillStyle = \"#fff\";\n            });\n        }\n    });\n\n    function init() {\n        /*creates empty scene object and renderer*/\n        scene = new THREE.Scene();\n        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 500);\n        renderer = new THREE.WebGLRenderer({ antialias: true });\n\n        renderer.setClearColor(0x000000);\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        renderer.shadowMapEnabled = true;\n        renderer.shadowMapSoft = true;\n\n        /*add controls*/\n\n        camera.position.x = 0;\n        camera.position.y = 0;\n        camera.position.z = 200;\n        //camera.lookAt(scene.position);\n        camera.lookAt(new THREE.Vector3(0.0, 0.0, 0.0));\n\n        scene.add(dae);\n        /*datGUI controls object*/\n        guiControls = new function () {\n            this.rotationX = 0.0;\n            this.rotationY = 0.0;\n            this.rotationZ = 0.0;\n\n            this.lightX = 59;\n            this.lightY = 127;\n            this.lightZ = 609;\n            this.intensity = 9.0;\n            this.distance = 873;\n            this.angle = 7.6;\n            this.exponent = 8;\n            this.shadowCameraNear = 34;\n            this.shadowCameraFar = 2635;\n            this.shadowCameraFov = 68;\n            this.shadowCameraVisible = false;\n            this.shadowMapWidth = 512;\n            this.shadowMapHeight = 512;\n            this.shadowBias = 0.00;\n            this.shadowDarkness = 0.11;\n        }();\n        /*adds spot light with starting parameters*/\n        spotLight = new THREE.SpotLight(0xffffff);\n        spotLight.castShadow = true;\n        spotLight.position.set(20, 35, 40);\n        spotLight.intensity = guiControls.intensity;\n        spotLight.distance = guiControls.distance;\n        spotLight.angle = guiControls.angle;\n        spotLight.exponent = guiControls.exponent;\n        spotLight.shadowCameraNear = guiControls.shadowCameraNear;\n        spotLight.shadowCameraFar = guiControls.shadowCameraFar;\n        spotLight.shadowCameraFov = guiControls.shadowCameraFov;\n        spotLight.shadowCameraVisible = guiControls.shadowCameraVisible;\n        spotLight.shadowBias = guiControls.shadowBias;\n        spotLight.shadowDarkness = guiControls.shadowDarkness;\n        scene.add(spotLight);\n\n        /*adds controls to scene*/\n        /*datGUI = new dat.GUI();\n         datGUI.add(guiControls, 'lightX',-60,180);\n        datGUI.add(guiControls, 'lightY',0,180);\n        datGUI.add(guiControls, 'lightZ',-60,180);\n         datGUI.add(guiControls, 'intensity',0.01, 5).onChange(function(value){\n            spotLight.intensity = value;\n        });\n        datGUI.add(guiControls, 'distance',0, 1000).onChange(function(value){\n            spotLight.distance = value;\n        });\n        datGUI.add(guiControls, 'angle',0.001, 1.570).onChange(function(value){\n            spotLight.angle = value;\n        });\n        datGUI.add(guiControls, 'exponent',0 ,50 ).onChange(function(value){\n            spotLight.exponent = value;\n        });\n        datGUI.add(guiControls, 'shadowCameraNear',0,100).name(\"Near\").onChange(function(value){\n            spotLight.shadowCamera.near = value;\n            spotLight.shadowCamera.updateProjectionMatrix();\n        });\n        datGUI.add(guiControls, 'shadowCameraFar',0,5000).name(\"Far\").onChange(function(value){\n            spotLight.shadowCamera.far = value;\n            spotLight.shadowCamera.updateProjectionMatrix();\n        });\n        datGUI.add(guiControls, 'shadowCameraFov',1,180).name(\"Fov\").onChange(function(value){\n            spotLight.shadowCamera.fov = value;\n            spotLight.shadowCamera.updateProjectionMatrix();\n        });\n        datGUI.add(guiControls, 'shadowCameraVisible').onChange(function(value){\n            spotLight.shadowCameraVisible = value;\n            spotLight.shadowCamera.updateProjectionMatrix();\n        });\n        datGUI.add(guiControls, 'shadowBias',0,1).onChange(function(value){\n            spotLight.shadowBias = value;\n            spotLight.shadowCamera.updateProjectionMatrix();\n        });\n        datGUI.add(guiControls, 'shadowDarkness',0,1).onChange(function(value){\n            spotLight.shadowDarkness = value;\n            spotLight.shadowCamera.updateProjectionMatrix();\n        });\n        datGUI.close();*/\n        $(\"#webGL-container\").append(renderer.domElement);\n        /*stats*/\n        /*stats = new Stats();\n        stats.domElement.style.position = 'absolute';\n        stats.domElement.style.left = '0px';\n        stats.domElement.style.top = '0px';\n        $(\"#webGL-container\").append( stats.domElement );*/\n    }\n\n    function render() {\n        dae.traverse(function (child) {\n            /*if (child.colladaId === \"Cube\"){\n                child.rotation.x += SPEED * 2;\n                child.rotation.y += SPEED;\n                child.rotation.z += SPEED * 3;\n            }*/\n        });\n\n        spotLight.position.x = guiControls.lightX;\n        spotLight.position.y = guiControls.lightY;\n        spotLight.position.z = guiControls.lightZ;\n    }\n\n    function animate() {\n        requestAnimationFrame(animate);\n        render();\n        //stats.update();\n        renderer.render(scene, camera);\n    }\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/script.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/script.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_scss/style.scss\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_scss/style.scss?");

/***/ }
/******/ ]);