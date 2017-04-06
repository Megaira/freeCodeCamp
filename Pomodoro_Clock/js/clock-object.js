var Clock = {
  workInterval: 25,
  shortBreak: 5,
  longBreak: 15,
  intervalNum: 4,
  running: false,
  intervalCount: 0,
  status: 'ready', // 'pomodoro', 'coffee', 'book', 'pause'
  
  setClock: function(timerSetting){
    console.log(Clock.workInterval, Clock.shortBreak, Clock.longBreak, Clock.intervalNum);
  },
  startClock: function() {
    Clock['running'] = true;
    Clock['intervalCount'] += 1;
    Clock['status'] = 'pomodoro';
    // Get start time for calculation

    // Hide .start button
    $('.start').removeClass('show').addClass('hide');
    // Show .pause and .stop button
    $('.pause').removeClass('hide').addClass('show');
    $('.stop').removeClass('hide').addClass('show');

    Clock.updateClock();
    console.log(Clock);
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
    console.log(Clock);
  },
  stopClock: function() {
    Clock['running'] = false;
    Clock['intervalCount'] = 0;
    Clock['status'] = 'ready';
    // Hide .pause and .stop button
    $('.pause').removeClass('show').addClass('hide');
    $('.stop').removeClass('show').addClass('hide');
    // Show .start button
    $('.start').removeClass('hide').addClass('show');
    console.log(Clock);
  },
  updateClock: function() {
    // Calculate:

  }
}
console.log(Clock);
$('.start').on('click', function() { Clock.startClock() });
$('.pause').on('click', function() { Clock.pauseClock() });
$('.resume').on('click', function() { Clock.resumeClock() });
$('.stop').on('click', function() { Clock.stopClock() });
