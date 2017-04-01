// Variables:
// Variables for break-, session-length (default or user input):
var breakLength;
var sessionLength;
// Functions:

// Variables for Timer:
var minutesInit = 2;
var secondsInit = 0;
// Counting variable for time:
var time = minutesInit * 60 * 1000;
// console.log(time);

var minutes;
var seconds;

var minLog;
var secLog;
// console.log(minutes, seconds);

// Start Pomodoro Timer:
function startTimer() {
  var countdownSession = setInterval(function() {
    minutes = Math.floor((time / 1000 / 60) % 60);
    seconds = (time / 1000) % 60;

    if (time <= 0) {
      clearInterval(countdownSession);
    }
    console.log(time);
    console.log(minutes + ':' + seconds);
    timerLogFormat(minutes,seconds);
    time -= 1000;
  }, 1000);
};

// Set initial values for break- and session-length:
breakLength = 5;
sessionLength = 25;
// User input for break and session length:
function customBreakTime(){
  $('.break-plus').on('click', function(){
    breakLength += 1;
    $('.break-minutes').text(breakLength);
  });
  $('.break-minus').on('click', function(){
    breakLength -= 1;
    if (breakLength <= 0) {
      breakLength = 0;
    };
    $('.break-minutes').text(breakLength);
  });
};

function customSessionTime(){
  $('.session-plus').on('click', function(){
    sessionLength += 1;
    $('.session-minutes').text(sessionLength);
  });
  $('.session-minus').on('click', function(){
    sessionLength -= 1;
    if (sessionLength <= 0) {
      sessionLength = 0;
    };
    $('.session-minutes').text(sessionLength);
  });
};

// Set format for timer output:
function timerLogFormat() {
  // minutes = minutesInit;
  // seconds = secondsInit;

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
  // timerLogFormat();
  customBreakTime();
  customSessionTime();
};




$(document).ready(function() {
  initialTime();
  $('.start').on('click', startTimer);
});
