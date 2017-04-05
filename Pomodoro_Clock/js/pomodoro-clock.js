// Global Variables:
// Length of work interval, sessions and number of intervals before long break (default or user input):
var workInterval = 25;
var shortBreak = 5;
var longBreak = 15;
var intervalNum = 4;
var clockRunning = false; // initial state of timer

// CANVAS:
var canvas = document.getElementById('clock-canvas');
var ctx = canvas.getContext('2d');

var x;
var y;
var r;
// Size canvas according to screen size:
if(matchMedia) {
  var mq = window.matchMedia("(max-width: 600px)");
  mq.addListener(widthChange);
  widthChange(mq);
}
function widthChange(mq) {
  if (mq.matches) {
    canvas.width = 240;
    canvas.height = 240;
  } else {
    canvas.width = 400;
    canvas.height = 400;
  }

  x = canvas.width / 2;
  y = canvas.height / 2;
  r = x - 5;

  initCanvas();
}
function initCanvas() {
  // Draw underlying circle:
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'rgba(0, 0, 0, .1)';
  ctx.stroke();
}
// TIMER:
// Initial timer settings on page load (default):
function initialTime() {
  $('.session-minutes').text(workInterval);
  $('.shortbreak-minutes').text(shortBreak);
  $('.longbreak-minutes').text(longBreak);
  $('.num-sessions').text(intervalNum);

  // customBreakTime();
  // customSessionTime();
};
// DOCUMENT READY:
$(document).ready(function() {
  initialTime();
})
