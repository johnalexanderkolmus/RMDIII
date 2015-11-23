'use strict';

// some features need the be polyfilled..
// https://babeljs.io/docs/usage/polyfill/

// import 'babel-core/polyfill';
// or import specific polyfills
// import {$} from './helpers/util';

const init = () => {
  console.log('Hello World John-Alexander Kolmus');

};


window.onload = function() {

var context = canvas.getContext('2d');
var colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);
tracking.track('#video', colors, {camera: true});

colors.on('track', function(event) {
            context.clearRect(0, 0, canvas.width, canvas.height);

  if (event.data.length === 0) {
    // No colors were detected in this frame.

  } else {
    event.data.forEach(function(rect) {
      // rect.x, rect.y, rect.height, rect.width, rect.color
          context.strokeStyle = rect.color;
          console.log(canvas.width);
          context.strokeRect(-1*rect.x + canvas.width - rect.width, rect.y, rect.width, rect.height);
           context.fillText('x: ' + (-1*rect.x + canvas.width - rect.width) + 'px', -1*rect.x + canvas.width + 5, rect.y + 11);
                     context.fillStyle = "#fff";


    });

  }
});


};


init();
