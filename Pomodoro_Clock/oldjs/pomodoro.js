// Variables:
// Variables for break-, session-length (default or user input):
var breakLength;
var sessionLength;
// Functions:

// Variables for Timer:
var minutesInit = 1;
// var secondsInit = 0;
// Counting variable for time:
// var time = minutesInit * 60 * 1000;
var time = sessionLength * 60 * 1000;

var mode; // state of timer (none, pomodoro, break)

var minutes;
var seconds;

var logMinutes;
var logSeconds;
var timerLog;
// console.log(timerLog);

// var canvas = document.getElementById('pomodoro-canvas');
// var ctx = canvas.getContext('2d');

function setTimer() {}

// var countdown;
var c;
// Start Pomodoro Timer:
function startTimer() {
  mode = 'pomodoro';
  console.log(sessionLength);
  // Assign sessionLength * 60 * 1000 to time
  time = sessionLength * 60 * 1000;

  // Do I need minutesInit?
  // How do I get sessionLength after user input?

  c = setInterval( countdown, 1000)
  console.log(time);
  function countdown(){
    if (time <= 0) {
      clearInterval( countdown );
      mode = 'none';
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
// Stop Timer when Button clicked:
function stopTimer() {
  clearInterval( c );
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
    logMinutes = '0' + minutes.toString();
  } else {
    logMinutes = minutes.toString();
  }
  if (seconds < 10) {
    logSeconds = '0' + seconds.toString();
  } else {
    logSeconds = seconds.toString();
  }
  timerLog = logMinutes + ':' + logSeconds;
  $('#timer p').text(timerLog);
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
  mode = 'none';
  initialTime();
  setTimer();
  $('.start').on('click', startTimer);
  $('.pause').on('click', stopTimer);
});
