// Variables:
// Variables for break-, session-length (default or user input):
var breakLength;
var sessionLength;
// Functions:

// Variables for Timer:
var minutesInit = 1;
// var secondsInit = 0;
// Counting variable for time:
var time = minutesInit * 60 * 1000;
// var time = minutesInit * 60 * 1000;
// console.log(time);
var mode; // state of timer (none, pomodoro, break)

var minutes;
var seconds;
// var seconds;

var minLog;
var secLog;

function setTimer() {
  // if (pomodoroOn) {
  //   time = sessionLength * 60 * 1000;
  // } else if (breakOn) {
  //   time = breakLength * 60 * 1000;
  // } else {
  //   time = minutesInit * 60 * 1000;
  // }
}

// Start Pomodoro Timer:
function startTimer() {
  mode = 'pomodoro';

  var c = setInterval( countdown, 1000)
  // console.log(time);
  function countdown(){
    if (time <= 0) {
      clearInterval( countdown );
      // Play sound
      return;
    }
    time -= 1000;
    minutes = Math.floor((time / 1000 / 60) % 60);
    seconds = (time / 1000) % 60;
    console.log(minutes + ':' + seconds);
    timerLogFormat();
  }
};
function stopTimer() {
  clearInterval( countdown );
}
// Set initial values for break- and session-length:
breakLength = 5;
sessionLength = 25;
// User input for break and session length:
function customBreakTime(){
  $('.break-plus').on('click', function(){
    breakLength += 1;
    $('.break-minutes').text(breakLength);
    setTimer();
  });
  $('.break-minus').on('click', function(){
    breakLength -= 1;
    if (breakLength <= 0) {
      breakLength = 0;
    };
    $('.break-minutes').text(breakLength);
    setTimer();
  });
};

function customSessionTime(){
  $('.session-plus').on('click', function(){
    sessionLength += 1;
    $('.session-minutes').text(sessionLength);
    $('.timer-minutes').text(sessionLength);
  });
  $('.session-minus').on('click', function(){
    sessionLength -= 1;
    if (sessionLength <= 0) {
      sessionLength = 0;
    };
    $('.session-minutes').text(sessionLength);
    $('.timer-minutes').text(sessionLength);
  });
};

// Set format for timer output:
function timerLogFormat() {
  if (minutes < 10) {
    minLog = '0' + minutes.toString();
  } else {
    minLog = minutes.toString();
  }
  if (seconds < 10) {
    secLog = '0' + seconds.toString();
  } else {
    secLog = seconds.toString();
  }
  $('.timer-minutes').text(minLog);
  $('.timer-seconds').text(secLog);
};

// Initialize clock:
function initialTime() {
  $('.break-minutes').text(breakLength);
  $('.session-minutes').text(sessionLength);
  $('.timer-minutes').text(sessionLength);
  $('.timer-seconds').text('00');

  customBreakTime();
  customSessionTime();
};




$(document).ready(function() {
  initialTime();
  setTimer();
  $('.start').on('click', startTimer);
  $('.reset').on('click', stopTimer);
});
