// GLOBAL VARIABLES:
// sessionLength: 25 (default) or or user input
var sessionLength = 25;
var sessionText; // Initial text displayed in clock for canvas
// shortBreakLength: 5 (default) or or user input
var shortBreakLength = 5;
// longBreakLength: 15 (default) or or user input
var longBreakLength = 15;

// Setting buttons for user input:
var sessionPlus = $('.session-plus');
var sessionMinus = $('.session-minus');
var shortBreakPlus = $('.shortbreak-plus');
var shortBreakMinus = $('.shortbreak-minus');
// Containers for user input and timer:
var sessionInput = $('.session-minutes');
var shortBreakInput = $('.shortbreak-minutes');
// Canvas (needs function to write on canvas - later):
var clockTimer = $('.timer');

// Pomodoro Object:
var timer = {
  // Properties:
  time: sessionLength,
  // Methods:
  // Test: call global function from object
  callFun: function() {
    logTime();
  },
  // Start Pomodoro Timer (when '.start' is clicked):
  startTimer: function() {
    console.log('Timer is on!');
    console.log(sessionLength);
    logTime();
  },
  // Start Pomodoro Timer (when '.start' is clicked):
   pauseTimer: function() {
    console.log('Timer is hold!');
  },
  // Stop Pomodoro Timer (when '.reset' is clicked):
   stopTimer: function() {
    console.log('Timer is stopped and reset!');
  }
};
console.log(timer);
// Pomodoro.startTimer();
function logTime() {
  console.log(Date.now());
}
timer.callFun();
timer.startTimer();

// Set Timer:
// Write initial values in containers #timer, sessionInput, shortBreakInput
function setTimer(container, timerSetting) {
  container.text(timerSetting);
  console.log(container.selector + ':' + timerSetting);
  return timerSetting;
}
// Call initial settings for all timer containers:
setTimer(clockTimer, sessionLength);
setTimer(sessionInput, sessionLength);
setTimer(shortBreakInput, shortBreakLength);

// Take user input and update timer lengths in Settings:
function customSettings(button1, button2, timerSetting, container) {
  button1.on('click', function() {
    timerSetting += 1;
    container.text(timerSetting);
    setTimer(container, timerSetting);
  })
  button2.on('click', function() {
    timerSetting -= 1;
    if (timerSetting <= 0) {
      timerSetting = 0;
    }
    container.text(timerSetting);
    setTimer(container, timerSetting);
  });
}
// Call Setting function with variables:
// customSettings(sessionPlus, sessionMinus, sessionLength, clockTimer);
customSettings(sessionPlus, sessionMinus, sessionLength, sessionInput);
customSettings(shortBreakPlus, shortBreakMinus, shortBreakLength, shortBreakInput);


// Get current Time
// Every 1/4 second: calculate remaining time and update #pomodoroDisplay



// DOCUMENT READY
$(document).ready(function(){
  // $('.start').on('click', Pomodoro.startTimer);
  // $('.pause').on('click', Pomodoro.pauseTimer);
  // $('.reset').on('click', Pomodoro.stopTimer);
});
