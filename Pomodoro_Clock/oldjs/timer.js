var sessionLength = 0.5;
var shortBreakLength = 5;
var longBreakLength = 15;

var time = sessionLength * 60 * 1000;

// var diffTime = timeInit * 60 * 1000;

// var startTime = (new Date()).getTime(); // when timer starts running
// var endTime = startTime + diffTime;
// var t = endTime - startTime;
var startTime;
// Start Pomodoro Timer:
function startTimer() {
  startTime = Date.now(); // Time when timer starts running
  // console.log(startTime);
}
startTimer();
// Stop Pomodoro Timer:
function stopTimer() {
  clearInterval(updateClock);
  return;
}
// Set format for timer output:
function timerLogFormat(x) {
  if (x < 10) {
    return '0' + x.toString();
  } else {
    return x.toString();
  }
}
// Display clock while running:
var pomodoroDisplay = document.getElementById('pomodoroDisplay');
var text; // Canvas text vaiable
// Update Clock display every second:
var pomodoroClock = setInterval(updateClock, 900);


// console.log(time);
function updateClock() {
  var currentTime = Date.now();
  var passedTime = currentTime - startTime;
  // console.log();
  // console.log(passedTime);
  var remainingTime = time - passedTime;
  console.log(remainingTime);
  // if (remainingTime == 0) {
  //   clearInterval(pomodoroClock);
  //   // time = sessionLength;
  // }

  var minutes = Math.floor((remainingTime / 1000 / 60) % 60);
  var seconds = Math.floor(remainingTime / 1000) % 60;
  console.log(seconds);
  text = timerLogFormat(minutes) + ':' + timerLogFormat(seconds);
  $('#pomodoroDisplay').text(text);
}
updateClock();

// CANVAS:
var canvas = document.getElementById('pomodoro-canvas');
var context = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height / 2;
// Write on canvas:

context.font = '48px sans-serif';
context.fillStyle = '#000';
context.textAlign = 'center';
context.textBaseline = 'middle';
context.fillText(text, x, y);
// Draw underlying circle on canvas:
context.beginPath();
context.arc(x, y, 115, 0, 2 * Math.PI);
context.lineWidth = 6;
context.strokeStyle = 'rgba(0,0,0,.4)';
context.stroke();
// Draw timer circle on canvas: 2 * Math.PI = full time







// StackOverflow Trick for font-family on canvas:
// var link = document.createElement('link');
// link.rel = 'stylesheet';
// link.type = 'text/css';
// link.href = 'https://fonts.googleapis.com/css?family=Lobster';
// document.getElementsByTagName('head')[0].appendChild(link);
//
// var image = new Image();
// image.src = link.href;
// image.onerror = function() {
//   context.font = '28px "Lobster"';
//   context.fillText(text, x, y);
// }



//pomodoroClock Object: reusable for Sessions and Breaks
// var pomodoroClock = {
//   // Properties:
//   startTime: (new Date()).getTime(),
//   // endTime: timeInit,
//   endTime: timeInit,
//
//   t: 30,
//
//   // Methods:
//   startTimer: function () {
//     console.log(pomodoroClock.startTime);
//     console.log(pomodoroClock.endTime);
//     console.log(typeof(pomodoroClock.endTime));
//     console.log(pomodoroClock.t);
//   },
//
//   // Start Timer when .start is clicked:
//   play: function(start) {
//     start.on('click', this.startTimer);
//   }
// };

// Selector variables:
// Timer settings:

// Controls:
var start = $('.start');
var pause = $('.pause');
var reset = $('.reset');

// DOCUMENT READY:
// $(document).ready(function () {});
