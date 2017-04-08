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
var clockTimer = $('.minutes');

// Take user input and update timer lengths in Settings:
function customSettings(button1, button2, key, timerSetting, container) {
  button1.on('click', function() {
    timerSetting += 1;
    container.text(timerSetting);
    Clock[key] = timerSetting;
    Clock.setClock(timerSetting);

  })
  button2.on('click', function() {
    timerSetting -= 1;
    if (timerSetting <= 0) {
      timerSetting = 0;
    }
    container.text(timerSetting);
    Clock[key] = timerSetting;
    Clock.setClock(timerSetting);
  });
}
// Call Setting function with variables:
customSettings(sessionPlus, sessionMinus, 'workInterval', Clock.workInterval, sessionInput);
customSettings(sessionPlus, sessionMinus, 'workInterval', Clock.workInterval, clockTimer);
customSettings(shortBreakPlus, shortBreakMinus, 'shortBreak', Clock.shortBreak, shortBreakInput);
customSettings(longBreakPlus, longBreakMinus, 'longBreak', Clock.longBreak, longBreakInput);
customSettings(intervalNumPlus, intervalNumMinus, 'intervalNum', Clock.intervalNum, intervalNumInput);
