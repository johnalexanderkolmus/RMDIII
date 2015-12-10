'use strict';

// some features need the be polyfilled..
// https://babeljs.io/docs/usage/polyfill/

// import 'babel-core/polyfill';
// or import specific polyfills
// import {$} from './helpers/util';

  javascript:(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();stats.domElement.style.cssText='position:fixed;left:0;top:0;z-index:10000';document.body.appendChild(stats.domElement);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})()


    var recta;


    var scene, camera, renderer;
    var controls, guiControls, datGUI;
    var stats;
    var dae, spotLight;
    var SPEED = 0.04;
    var daePos = 0;


window.onload = function() {
    var loader = new THREE.ColladaLoader();
    loader.options.convertUpAxis = true;
    loader.load('models/meatball_01.dae', function (collada){
        dae = collada.scene;
        dae.scale.x = dae.scale.y = dae.scale.z = 50;
        dae.position.x = daePos;
        console.log('model.x = ' + daePos);
        dae.traverse(function (child){
            if (child.colladaId === "Cube"){
                child.traverse(function(e){
                    e.castShadow = true;
                    e.receiveShadow = true;
                    if (e.material instanceof THREE.MeshPhongMaterial){
                        e.material.needsUpdate = true;
                    }

                });
            }
        });

        dae.updateMatrix();
        init();
        animate();
        console.log(scene);
    });




var context = canvas.getContext('2d');
var colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);
tracking.track('#video', colors, {camera: true});

colors.on('track', function(event) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            console.log('detecting colors');

  if (event.data.length === 0) {
    // No colors were detected in this frame.
    console.log('no colors detected');

  } else {




    event.data.forEach(function(rect) {
      console.log('color detected');
      // rect.x, rect.y, rect.height, rect.width, rect.color


          recta = rect.color;


          if(rect.color = "magenta"){
            console.log('woehhoahohahaohhoahoah');
            console.log('rect.x == ' + rect.x);
            console.log('rect.y == ' + rect.y);
            console.log('rect.z == ' + rect.z);

            console.log('innerwidth ' + window.innerWidth/2);

            dae.position.x = -rect.x + (window.innerWidth/4) -90;
            dae.position.y = -rect.y + (window.innerHeight/4);
            //dae.position.z = -rect.z + (window.innerHeight/4);
            //console.log('daepos magenta = ' + daePos);
          }

          context.strokeStyle = rect.color;
          context.strokeRect(-1*rect.x + canvas.width - rect.width, rect.y, rect.width, rect.height);
          context.fillText('x: ' + (-1*rect.x + canvas.width - rect.width) + 'px', -1*rect.x + canvas.width + 5, rect.y + 11);
                     context.fillStyle = "#fff";


    });




  }
});




    function init(){
        /*creates empty scene object and renderer*/
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, .1, 500);
        renderer = new THREE.WebGLRenderer({ antialias: true });


        renderer.setClearColor(0x000000);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled= true;
        renderer.shadowMapSoft = true;

        /*add controls*/

        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 200;
        //camera.lookAt(scene.position);
        camera.lookAt (new THREE.Vector3 (0.0, 0.0, 0.0));

        scene.add(dae);
        /*datGUI controls object*/
        guiControls = new function(){
            this.rotationX = 0.0;
            this.rotationY = 0.0;
            this.rotationZ = 0.0;

            this.lightX = 59;
            this.lightY = 127;
            this.lightZ = 609;
            this.intensity = 9.0;
            this.distance = 873;
            this.angle = 7.6;
            this.exponent = 8;
            this.shadowCameraNear = 34;
            this.shadowCameraFar = 2635;
            this.shadowCameraFov = 68;
            this.shadowCameraVisible = false;
            this.shadowMapWidth = 512;
            this.shadowMapHeight = 512;
            this.shadowBias = 0.00;
            this.shadowDarkness = 0.11;

        };
        /*adds spot light with starting parameters*/
        spotLight = new THREE.SpotLight(0xffffff);
        spotLight.castShadow = true;
        spotLight.position.set(20, 35, 40);
        spotLight.intensity = guiControls.intensity;
        spotLight.distance = guiControls.distance;
        spotLight.angle = guiControls.angle;
        spotLight.exponent = guiControls.exponent;
        spotLight.shadowCameraNear = guiControls.shadowCameraNear;
        spotLight.shadowCameraFar = guiControls.shadowCameraFar;
        spotLight.shadowCameraFov = guiControls.shadowCameraFov;
        spotLight.shadowCameraVisible = guiControls.shadowCameraVisible;
        spotLight.shadowBias = guiControls.shadowBias;
        spotLight.shadowDarkness = guiControls.shadowDarkness;
        scene.add(spotLight);

        /*adds controls to scene*/
        /*datGUI = new dat.GUI();

        datGUI.add(guiControls, 'lightX',-60,180);
        datGUI.add(guiControls, 'lightY',0,180);
        datGUI.add(guiControls, 'lightZ',-60,180);

        datGUI.add(guiControls, 'intensity',0.01, 5).onChange(function(value){
            spotLight.intensity = value;
        });
        datGUI.add(guiControls, 'distance',0, 1000).onChange(function(value){
            spotLight.distance = value;
        });
        datGUI.add(guiControls, 'angle',0.001, 1.570).onChange(function(value){
            spotLight.angle = value;
        });
        datGUI.add(guiControls, 'exponent',0 ,50 ).onChange(function(value){
            spotLight.exponent = value;
        });
        datGUI.add(guiControls, 'shadowCameraNear',0,100).name("Near").onChange(function(value){
            spotLight.shadowCamera.near = value;
            spotLight.shadowCamera.updateProjectionMatrix();
        });
        datGUI.add(guiControls, 'shadowCameraFar',0,5000).name("Far").onChange(function(value){
            spotLight.shadowCamera.far = value;
            spotLight.shadowCamera.updateProjectionMatrix();
        });
        datGUI.add(guiControls, 'shadowCameraFov',1,180).name("Fov").onChange(function(value){
            spotLight.shadowCamera.fov = value;
            spotLight.shadowCamera.updateProjectionMatrix();
        });
        datGUI.add(guiControls, 'shadowCameraVisible').onChange(function(value){
            spotLight.shadowCameraVisible = value;
            spotLight.shadowCamera.updateProjectionMatrix();
        });
        datGUI.add(guiControls, 'shadowBias',0,1).onChange(function(value){
            spotLight.shadowBias = value;
            spotLight.shadowCamera.updateProjectionMatrix();
        });
        datGUI.add(guiControls, 'shadowDarkness',0,1).onChange(function(value){
            spotLight.shadowDarkness = value;
            spotLight.shadowCamera.updateProjectionMatrix();
        });
        datGUI.close();*/
        $("#webGL-container").append(renderer.domElement);
        /*stats*/
        /*stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        $("#webGL-container").append( stats.domElement );*/
    }




    function render() {
        dae.traverse(function (child){
            /*if (child.colladaId === "Cube"){
                child.rotation.x += SPEED * 2;
                child.rotation.y += SPEED;
                child.rotation.z += SPEED * 3;
            }*/
        });

        spotLight.position.x = guiControls.lightX;
        spotLight.position.y = guiControls.lightY;
        spotLight.position.z = guiControls.lightZ;

    }

    function animate(){
        requestAnimationFrame(animate);
        render();
        //stats.update();
        renderer.render(scene, camera);
    }







};







