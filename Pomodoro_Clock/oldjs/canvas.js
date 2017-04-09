var canvas = document.getElementById('timerCanvas');
var ctx = canvas.getContext('2d');

// Define Canvas center:
var cw = canvas.width;
var ch = canvas.height;
var x = cw / 2;
var y = ch / 2;
// // circle radius:
var r = x - 5;

var canvasText;

function initCanvas() {
  canvas.width =
  // Draw underlying circle:
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.lineWidth = 6;
  ctx.strokeStyle = 'rgba(0,0,0,.3)';
  ctx.stroke();
  console.log(cw, ch, x, y, r);
}
initCanvas();

function drawTimer(canvasAngle){
  ctx.beginPath();
  ctx.arc(x, y, r, 1.5 * Math.PI, canvasAngle);
  ctx.lineWidth = 6;
  ctx.strokeStyle = '#ef5350';
  ctx.stroke();
}
var rw = canvas.width * .75;
var rh = canvas.height * .5;
var rx = x - rw / 2;
var ry = y - rh / 2;

// drawTimer();
function writeTimer(){
  ctx.font = '400 48px "Roboto"';
  ctx.fillStyle = '#ef5350';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  // ctx.clearRect(rx, ry, rw, rh);
  // ctx.fillStyle = 'red';
  // ctx.fillRect(rx, ry, rw, rh);
  ctx.fillText(canvasText, x, y);
}
function rect() {
  ctx.clearRect(rx, ry, rw, rh);
  ctx.fillStyle = '#fff';
  ctx.fillRect(rx, ry, rw, rh);
}

// Set format for timer output:
function timerLogFormat(x) {
  if (x < 10) {
    return '0' + x.toString();
  } else {
    return x.toString();
  }
}
