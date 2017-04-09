var sessionLength = 2;

var duration = sessionLength * 60 * 1000; // sessionLength in ms
var s = 1; // counting variable for angle, start with 1 as it's logged after one sec for the first time

function updateTimer(startTime, interval) {
  var currentTime = Date.now();

  var cumulativeTime = 0;
  var dt = currentTime - startTime;
  cumulativeTime += dt;
  var timerValue = duration - cumulativeTime;

  if (timerValue <= 0) {
    clearInterval(interval);
    return;
  }

  var minutes = Math.floor((timerValue / 1000 / 60) % 60);
  var seconds = Math.floor(timerValue / 1000) % 60;

  timerLogFormat(minutes);
  timerLogFormat(seconds);
  var text = timerLogFormat(minutes) + ':' + timerLogFormat(seconds);

  $('.timer').text(text) // call writeToCanvas()
  canvasText = text;

  // Calculate circle segment for canvas:
  var ds = s / (sessionLength * 60);
  var canvasAngle = (ds * 2 + 1.5) * Math.PI;
  rect();
  writeTimer();
  drawTimer(canvasAngle);
}

function startTimer() {
  var startTime = Date.now();

  var interval = setInterval(function() {
    s += 1;
    updateTimer(startTime, interval);
  }, 1000)
}
startTimer();
