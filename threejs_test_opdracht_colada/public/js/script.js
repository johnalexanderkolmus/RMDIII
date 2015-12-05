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

	eval("'use strict';\n\nvar scene, camera, renderer;\nvar controls, guiControls, datGUI;\nvar stats;\nvar dae, spotLight;\n\nvar loader = new THREE.ColladaLoader();\nloader.options.convertUpAxis = true;\nloader.load('dae/veelhoek.dae', function (collada) {\n    dae = collada.scene;\n    dae.scale.x = dae.scale.y = dae.scale.z = 3;\n    dae.traverse(function (child) {\n        if (child.colladaId === \"Icosphere\") {\n            child.traverse(function (e) {\n                e.castShadow = true;\n                e.receiveShadow = true;\n                if (e.material instanceof THREE.MeshPhongMaterial) {\n                    e.material.needsUpdate = true;\n                }\n            });\n        }\n    });\n    dae.updateMatrix();\n    init();\n    animate();\n    console.log(scene);\n});\nfunction init() {\n    /*creates empty scene object and renderer*/\n    scene = new THREE.Scene();\n    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 500);\n    renderer = new THREE.WebGLRenderer({ antialias: true });\n\n    renderer.setClearColor(0x000000);\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.shadowMapEnabled = true;\n    renderer.shadowMapSoft = true;\n\n    /*add controls*/\n\n    camera.position.x = 5;\n    camera.position.y = 9;\n    camera.position.z = 42;\n    camera.lookAt(scene.position);\n\n    scene.add(dae);\n    /*datGUI controls object*/\n    guiControls = new function () {\n        this.rotationX = 0.0;\n        this.rotationY = 0.0;\n        this.rotationZ = 0.0;\n\n        this.lightX = 59;\n        this.lightY = 27;\n        this.lightZ = -109;\n        this.intensity = 1.5;\n        this.distance = 373;\n        this.angle = 4.6;\n        this.exponent = 38;\n        this.shadowCameraNear = 34;\n        this.shadowCameraFar = 2635;\n        this.shadowCameraFov = 68;\n        this.shadowCameraVisible = false;\n        this.shadowMapWidth = 512;\n        this.shadowMapHeight = 512;\n        this.shadowBias = 0.00;\n        this.shadowDarkness = 0.11;\n    }();\n    /*adds spot light with starting parameters*/\n    spotLight = new THREE.SpotLight(0xffffff);\n    spotLight.castShadow = true;\n    spotLight.position.set(20, 35, 40);\n    spotLight.intensity = guiControls.intensity;\n    spotLight.distance = guiControls.distance;\n    spotLight.angle = guiControls.angle;\n    spotLight.exponent = guiControls.exponent;\n    spotLight.shadowCameraNear = guiControls.shadowCameraNear;\n    spotLight.shadowCameraFar = guiControls.shadowCameraFar;\n    spotLight.shadowCameraFov = guiControls.shadowCameraFov;\n    spotLight.shadowCameraVisible = guiControls.shadowCameraVisible;\n    spotLight.shadowBias = guiControls.shadowBias;\n    spotLight.shadowDarkness = guiControls.shadowDarkness;\n    scene.add(spotLight);\n\n    /*adds controls to scene*/\n    /*datGUI = new dat.GUI();\n     datGUI.add(guiControls, 'lightX',-60,180);\n    datGUI.add(guiControls, 'lightY',0,180);\n    datGUI.add(guiControls, 'lightZ',-60,180);\n     datGUI.add(guiControls, 'intensity',0.01, 5).onChange(function(value){\n        spotLight.intensity = value;\n    });\n    datGUI.add(guiControls, 'distance',0, 1000).onChange(function(value){\n        spotLight.distance = value;\n    });\n    datGUI.add(guiControls, 'angle',0.001, 1.570).onChange(function(value){\n        spotLight.angle = value;\n    });\n    datGUI.add(guiControls, 'exponent',0 ,50 ).onChange(function(value){\n        spotLight.exponent = value;\n    });\n    datGUI.add(guiControls, 'shadowCameraNear',0,100).name(\"Near\").onChange(function(value){\n        spotLight.shadowCamera.near = value;\n        spotLight.shadowCamera.updateProjectionMatrix();\n    });\n    datGUI.add(guiControls, 'shadowCameraFar',0,5000).name(\"Far\").onChange(function(value){\n        spotLight.shadowCamera.far = value;\n        spotLight.shadowCamera.updateProjectionMatrix();\n    });\n    datGUI.add(guiControls, 'shadowCameraFov',1,180).name(\"Fov\").onChange(function(value){\n        spotLight.shadowCamera.fov = value;\n        spotLight.shadowCamera.updateProjectionMatrix();\n    });\n    datGUI.add(guiControls, 'shadowCameraVisible').onChange(function(value){\n        spotLight.shadowCameraVisible = value;\n        spotLight.shadowCamera.updateProjectionMatrix();\n    });\n    datGUI.add(guiControls, 'shadowBias',0,1).onChange(function(value){\n        spotLight.shadowBias = value;\n        spotLight.shadowCamera.updateProjectionMatrix();\n    });\n    datGUI.add(guiControls, 'shadowDarkness',0,1).onChange(function(value){\n        spotLight.shadowDarkness = value;\n        spotLight.shadowCamera.updateProjectionMatrix();\n    });\n    datGUI.close();*/\n    $(\"#webGL-container\").append(renderer.domElement);\n    /*stats*/\n    /*stats = new Stats();\n    stats.domElement.style.position = 'absolute';\n    stats.domElement.style.left = '0px';\n    stats.domElement.style.top = '0px';\n    $(\"#webGL-container\").append( stats.domElement );*/\n}\n\nfunction render() {\n    dae.traverse(function (child) {\n        if (child.colladaId === \"Icosphere\") {\n            child.rotation.y += .01;\n        }\n    });\n\n    spotLight.position.x = guiControls.lightX;\n    spotLight.position.y = guiControls.lightY;\n    spotLight.position.z = guiControls.lightZ;\n}\n\nfunction animate() {\n    requestAnimationFrame(animate);\n    render();\n    //stats.update();\n    renderer.render(scene, camera);\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/script.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/script.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_scss/style.scss\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_scss/style.scss?");

/***/ }
/******/ ]);