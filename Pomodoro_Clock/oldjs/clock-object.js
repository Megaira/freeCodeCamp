var Clock = {
  workInterval: 1,
  shortBreak: 5,
  longBreak: 15,
  intervalCount: 4,
  running: false,
  // intervalCount: 0,
  status: 'ready', // 'pomodoro', 'coffee', 'book', 'pause'
  // Properties for updateClock:
  startTime: 0,
  duration: 0,
  minutes: 0,
  seconds: 0,

  setClock: function(timerSetting){
    Clock.minutes = Clock.workInterval;
    Clock.seconds;
    Clock.minutes = Clock.logFormat(Clock.minutes);
    Clock.seconds = Clock.logFormat(Clock.seconds);
    $('.minutes').text(Clock.minutes);
    $('.seconds').text(Clock.seconds);
    console.log(Clock.workInterval, Clock.shortBreak, Clock.longBreak, Clock.intervalCount);
  },
  startClock: function() {
    Clock['running'] = true;
    Clock['intervalCount'] -= 1;
    Clock['status'] = 'pomodoro';

    // Hide .start button
    $('.start').removeClass('show').addClass('hide');
    // Show .pause and .stop button
    $('.pause').removeClass('hide').addClass('show');
    $('.stop').removeClass('hide').addClass('show');
    // Get start time for calculation
    Clock.startTime = Date.now();

    Clock.updateClock();
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
    // Conditionnals and status cases:

    // Calculate:
    var interval = setInterval(function () {
      var currentTime = Date.now();
      var passedTime = currentTime - Clock.startTime; // dt
      var remainingTime = Clock.duration * 60 * 1000;
      remainingTime -= passedTime;
      // time left?
      if (remainingTime <= 0) { // no:
        console.log(remainingTime);
        remainingTime = 0;
        console.log("time's up!");
        // Check status and intervalCount: switch(Clock.status)
        Clock.status = 'coffee';
        Clock.duration = Clock.shortBreak;

      }

      Clock.minutes = Math.floor((remainingTime / 1000 / 60) % 60);
      Clock.seconds = Math.round(remainingTime / 1000) % 60;

      Clock.minutes = Clock.logFormat(Clock.minutes);
      Clock.seconds = Clock.logFormat(Clock.seconds);

      console.log(Clock.minutes + ':' + Clock.seconds);
      console.log(Clock.duration);
      console.log(remainingTime);
      console.log(Clock.status);
      // console.log(Clock.intervalCount);

      $('.minutes').text(Clock.minutes);
      $('.seconds').text(Clock.seconds);
    }, 1000);
  },
  logFormat: function(val) {
    return ('0' + val).slice(- 2);
  }
}
// switch (Clock.status) {
//   case 'pomodoro':
//     if (Clock.intervalCount > 0) {
//       Clock.status = 'coffee';
//       Clock.duration = Clock.shortBreak;
//     } else {
//       Clock.status = 'book';
//       Clock.duration = Clock.longBreak;
//     }
//     break;
//   case 'coffee':
//     Clock.status = 'pomodoro';
//     Clock.duration = Clock.workInterval
//     break;
//   case 'book':
//     Clock.status = 'pomodoro';
//     Clock.duration = Clock.workInterval
//     break;
//   // default:
// }

// case 'pomodoro': (default? mit > 0)
  // if intervalCount > 0: change status = coffee, duration = shortBreak, remainingTime -= passedTime
  // if intervalCount == 0: change status = book, duration = longBreak, remainingTime -= passedTime
// case 'coffee': change status = pomodoro, duration = workInterval, intervalCount -=1, remainingTime -= passedTime
// case 'book': change status = pomodoro, duration = workInterval, intervalCount = Clock.intervalCount, remainingTime -= passedTime



console.log(Clock);
Clock.setClock();
$('.start').on('click', function() { Clock.startClock() });
$('.pause').on('click', function() { Clock.pauseClock() });
$('.resume').on('click', function() { Clock.resumeClock() });
$('.stop').on('click', function() { Clock.stopClock() });
