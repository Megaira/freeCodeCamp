// Global Variables:
// CANVAS:
// var canvas = document.getElementById('clock-canvas');
// var ctx = canvas.getContext('2d');
//
// var x;
// var y;
// var r;
// // Size canvas according to screen size:
// if(matchMedia) {
//   var mq = window.matchMedia("(max-width: 600px)");
//   mq.addListener(widthChange);
//   widthChange(mq);
// }
// function widthChange(mq) {
//   if (mq.matches) {
//     canvas.width = 240;
//     canvas.height = 240;
//   } else {
//     canvas.width = 400;
//     canvas.height = 400;
//   }
//
//   x = canvas.width / 2;
//   y = canvas.height / 2;
//   r = x - 5;
//
//   initCanvas();
// }
// function initCanvas() {
//   // Draw underlying circle:
//   ctx.beginPath();
//   ctx.arc(x, y, r, 0, 2 * Math.PI);
//   ctx.lineWidth = 4;
//   ctx.strokeStyle = 'rgba(0, 0, 0, .1)';
//   ctx.stroke();
// }

// TIMER:
// Initial timer settings on page load (default):
function initialTime() {
  $('.session-minutes').text(Clock.workInterval);
  // $('.minutes').text(Clock.workInterval);
  $('.shortbreak-minutes').text(Clock.shortBreak);
  $('.longbreak-minutes').text(Clock.longBreak);
  $('.num-sessions').text(Clock.intervalNum);
};
// DOCUMENT READY:
$(document).ready(function() {
  initialTime();
})
