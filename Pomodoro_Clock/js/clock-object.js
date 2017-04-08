var Clock = {
  workInterval: 25,
  shortBreak: 5,
  longBreak: 15,
  intervalCount: 4,
  running: false,
  // intervalCount: 0,
  status: 'ready', // 'pomodoro', 'coffee', 'book', 'pause'
  // Properties for updateClock:
  startTime: 0,
  duration: 0,

  setClock: function(timerSetting){
    console.log(Clock.workInterval, Clock.shortBreak, Clock.longBreak, Clock.intervalCount);
  },
  startClock: function() {
    Clock['running'] = true;
    Clock['intervalCount'] -= 1;
    Clock['status'] = 'pomodoro';
    // Get start time for calculation

    // Hide .start button
    $('.start').removeClass('show').addClass('hide');
    // Show .pause and .stop button
    $('.pause').removeClass('hide').addClass('show');
    $('.stop').removeClass('hide').addClass('show');

    Clock.startTime = Date.now();
    // console.log(Clock.startTime);
    Clock.updateClock();
    // console.log(Clock);

  },
  pauseClock: function() {
    Clock['running'] = false;
    Clock['status'] = 'pause';
    // Hide .pause button
    $('.pause').removeClass('show').addClass('hide');
    // Show .resume button
    $('.resume').removeClass('hide').addClass('show');
    console.log(Clock);
  },
  resumeClock: function() {
    Clock['running'] = true;
    Clock['status'] = 'pomodoro'; //??? Was ist mit breaks? Wenn t < workInterval = pomodoro, sonst noch status festlegen
    // Hide .resume button
    $('.resume').removeClass('show').addClass('hide');
    // Show .pause button
    $('.pause').removeClass('hide').addClass('show');

    Clock.startTime = Date.now();
    console.log(Clock);
    console.log(Clock.startTime);
    Clock.updateClock();
  },
  stopClock: function() {
    Clock['running'] = false;
    Clock['intervalCount'] = 0;
    Clock['status'] = 'ready';
    // Hide .pause, .resume and .stop button
    $('.pause').removeClass('show').addClass('hide');
    $('.resume').removeClass('show').addClass('hide');
    $('.stop').removeClass('show').addClass('hide');
    // Show .start button
    $('.start').removeClass('hide').addClass('show');
    console.log(Clock);
  },
  updateClock: function() {
    Clock.duration = Clock.workInterval; // festlegen durch 'status'
    // Clock.duration = Clock.duration * 60 * 1000;
    // Conditionnals and status cases:

    // Calculate:
    var interval = setInterval(function () {
      var currentTime = Date.now();
      var passedTime = currentTime - Clock.startTime; // dt
      var remainingTime = Clock.duration * 60 * 1000;

      // time left?
      if (remainingTime > 0) {
        // yes: reduce by dt
        remainingTime -= passedTime;
      } else { // no:
        // Check status and intervalCount: switch(Clock.status)
        // case 'pomodoro': (default? mit > 0)
          // if intervalCount > 0: change status = coffee, duration = shortBreak, remainingTime -= passedTime
          // if intervalCount == 0: change status = book, duration = longBreak, remainingTime -= passedTime
        // case 'coffee': change status = pomodoro, duration = workInterval, intervalCount -=1, remainingTime -= passedTime
        // case 'book': change status = pomodoro, duration = workInterval, intervalCount = Clock.intervalCount, remainingTime -= passedTime
      }

      var minutes = Math.floor((remainingTime / 1000 / 60) % 60);
      var seconds = Math.round(remainingTime / 1000) % 60;

      console.log(minutes + ':' + seconds);
      console.log(Clock.status);
      console.log(Clock.intervalCount);

      $('.minutes').text(minutes);
      $('.seconds').text(seconds);
    }, 1000);


  }
}
console.log(Clock);
$('.start').on('click', function() { Clock.startClock() });
$('.pause').on('click', function() { Clock.pauseClock() });
$('.resume').on('click', function() { Clock.resumeClock() });
$('.stop').on('click', function() { Clock.stopClock() });
