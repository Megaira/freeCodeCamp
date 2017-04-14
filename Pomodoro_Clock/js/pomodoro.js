var workInterval = 25;
var shortBreak = 5;
var longBreak = 15;
var intervalCount = 4;

var time = .1;
// Set time according to status:
var duration = time * 60 * 1000;

var Clock = {
  remainingTime: duration,
  intervalCount: intervalCount,
  running: false,
  status: 'ready',

  setClock: function() {
    Clock.displayClock();
    console.log(Clock.intervalCount);
    console.log(Clock.running);
  },
  timeIsUp: function() {
    Clock.remainingTime = 0;
    Clock.status = 'break time';
    console.log(Clock.status);
    console.log(intervalCount);
    console.log('time is up!');
    Clock.displayClock();
  },
  timer: function() {
    Clock.interval = setInterval(Clock.updateClock, 1000);
    console.log(Clock.intervalCount);
  },
  updateClock: function() {
    if (Clock.remainingTime <= 0) {
      Clock.remainingTime = 0;
      console.log(Clock.remainingTime);

      clearInterval(Clock.interval);
      Clock.timeIsUp();
      console.log(Clock.remainingTime);
      return;
    } else {
      Clock.currentTime = Date.now();
      var passedTime = Clock.currentTime - Clock.startTime;
      Clock.startTime = Clock.currentTime;
      Clock.remainingTime -= passedTime;
      Clock.displayClock();
    }
    console.log(Clock.remainingTime);

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

    console.log(Clock.remainingTime);
    console.log(Clock.minutes + ':' + Clock.seconds);
    console.log(displayFormat(Clock.minutes) + ':' + displayFormat(Clock.seconds));
  },
  // Clock controls:
  startClock: function() {
    if (Clock.running === false) {
      Clock.status = 'pomodoro';
      Clock.startTime = Date.now();
      Clock.intervalCount -= 1;
      Clock.running = true;
      Clock.timer();
    }
  },
  pauseClock: function() {
    clearInterval(Clock.interval);
    delete Clock.interval;
    console.log(Clock.remainingTime);
    console.log(Clock.intervalCount);
    Clock.running = false;
    Clock.displayClock();
  },
  resumeClock: function() {
    Clock.startTime = Date.now();
    Clock.running = true;
    Clock.timer();
  },
  stopClock: function() {
    clearInterval(Clock.interval);
    delete Clock.interval;
    Clock.remainingTime = duration;
    console.log(Clock.intervalCount);
    console.log(intervalCount);
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
  $('.resume').on('click', function() { Clock.resumeClock() });
  $('.stop').on('click', function() { Clock.stopClock() });
});
