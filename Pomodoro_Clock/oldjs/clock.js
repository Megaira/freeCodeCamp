// Input for timer:
var time = .2;

// Timer Object:
var Timer = {
  duration: time * 60 * 1000,

  setTimer: function() {
    var set = this;
    set.duration = time * 60 * 1000;
  },

  startTimer: function() {
    var running = true;
    var start = this;
    var startTime = Date.now();
  },
  pauseTimer: function() {
    running = false;
    // clearInterval(updateClock);
    // delete this.updateClock;
  },
  resumeTimer: function() {
    if (running == false) {
      running = true;
      this.startTimer();
    }
  },
  resetTimer: function() {
    this.setTimer();
  }
};
console.log(Timer);


var running = true;
var duration = time * 60 * 1000;
var startTime = Date.now();
var updateClock = setInterval(function() {
  // var update = this;
  var currentTime = Date.now();
  var passedTime = currentTime - startTime;
  var remainingTime = duration - passedTime;

  if (running) {
    if (remainingTime <= 0) {
      remainingTime = time * 60 * 1000;
      return;
    } else {
      remainingTime -= passedTime;
      var minutes = Math.floor((remainingTime / 1000 / 60) % 60);
      var seconds = Math.floor(remainingTime / 1000) % 60;
    }

  }
}, 900);


$('.start').on('click', function() { Timer.startTimer() }); // context wrong!!!
$('.pause').on('click', function() { Timer.pauseTimer() });
$('.resume').on('click', function() { Timer.resumeTimer() });
$('.reset').on('click', function() { Timer.resetTimer() });
