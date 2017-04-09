var workInterval = 2;
var shortBreak = 5;
var longBreak = 15;
var intervalCount = 4;

var time = 2;
// Set time according to status:
var duration = time * 60 * 1000;

var Clock = {
  remainingTime: duration,
  intervalCount: intervalCount,
  running: false,

  setClock: function() {
    Clock.displayClock();
    console.log(Clock.intervalCount);
    console.log(Clock.running);
  },
  timeIsUp: function() {},
  timer: function() {
    Clock.interval = setInterval(Clock.updateClock, 1000);
    console.log(Clock.intervalCount);
  },
  updateClock: function() {
    if (Clock.remainingTime <= 0) {
      return;
    }
    Clock.currentTime = Date.now();
    var passedTime = Clock.currentTime - Clock.startTime;
    Clock.startTime = Clock.currentTime;
    Clock.remainingTime -= passedTime;

    Clock.displayClock();
  },
  displayClock: function() {
    Clock.minutes = Math.floor((Clock.remainingTime / 1000 / 60) % 60);
    Clock.seconds = Math.round(Clock.remainingTime / 1000) % 60;

    // Format with leading zeros:
    function displayFormat(val) {
      return ('0' + val).slice(- 2);
    }
    $('.minutes').text(displayFormat(Clock.minutes));
    $('.seconds').text(displayFormat(Clock.seconds));
  },
  // Clock controls:
  startClock: function() {
    Clock.startTime = Date.now();
    Clock.intervalCount -= 1;
    Clock.running = true;
    Clock.timer();
  },
  pauseClock: function() {
    clearInterval(Clock.interval);
    delete Clock.interval;
    console.log(Clock.remainingTime);
    console.log(Clock.intervalCount);
    Clock.running = false;
    Clock.displayClock();
  },
  stopClock: function() {
    clearInterval(Clock.interval);
    delete Clock.interval;
    Clock.remainingTime = duration;
    Clock.intervalCount = intervalCount;
    Clock.running = false;

    Clock.setClock();
    Clock.time();
  },
  time: function() {
    console.log(Clock.remainingTime);
  }
}
console.log(Clock.remainingTime);

$(document).ready(function() {
  Clock.setClock();
  $('.start').on('click', function() { Clock.startClock() });
  $('.pause').on('click', function() { Clock.pauseClock() });
  $('.stop').on('click', function() { Clock.stopClock() });
});
