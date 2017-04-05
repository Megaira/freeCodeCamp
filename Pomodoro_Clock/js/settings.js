// Setting buttons for user input:
var sessionPlus = $('.session-plus');
var sessionMinus = $('.session-minus');
var shortBreakPlus = $('.shortbreak-plus');
var shortBreakMinus = $('.shortbreak-minus');
var longBreakPlus = $('.longbreak-plus');
var longBreakMinus = $('.longbreak-minus');
var intervalNumPlus = $('.num-sessions-plus');
var intervalNumMinus = $('.num-sessions-minus');
// Containers for user input and timer:
var sessionInput = $('.session-minutes');
var shortBreakInput = $('.shortbreak-minutes');
var longBreakInput = $('.longbreak-minutes');
var intervalNumInput = $('.num-sessions');

// Canvas (needs function to write on canvas - later):
var clockTimer = $('.timer');

// Set Timer:
// Write initial values in containers #timer, sessionInput, shortBreakInput
function setTimer(container, timerSetting) {
  container.text(timerSetting);
  console.log(container.selector + ':' + timerSetting);
  return timerSetting;
}

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
customSettings(sessionPlus, sessionMinus, workInterval, sessionInput);
customSettings(shortBreakPlus, shortBreakMinus, shortBreak, shortBreakInput);
customSettings(longBreakPlus, longBreakMinus, longBreak, longBreakInput);
customSettings(intervalNumPlus, intervalNumMinus, intervalNum, intervalNumInput);
console.log(workInterval, shortBreak, longBreak, intervalNum);
