// WEEKDAY AND DATE:
// Variables:
var weekdays = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat']; // in JS .getDay() Sunday is 0
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// Variables for Additional Information for current Day Weather:
var currentTimestamp;
var currentDateTime;
var currentWeekdayId;
var currentDate;
var currentMonthId;

var currentWeekday;
var currentMonth;

var currentHigh;
var currentLow;

// Variables for Forecast:
var numberOfDays;
var forecastTimestamp;
var forecastStatus;
var forecastId;
var forecastTemp;

var forecastDateTime;
var forecastWeekdayId;
var forecastDate;
var forecastMonthId;

var forecastWeekday;
var forecastMonth;

function getForecast( position ) {
  var forecastURL = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lon + '&units=' + unit + '&cnt=8&APPID=ae44e8d67a569c6b8064d639567e8cec';

  $.getJSON(forecastURL, function( forecast ) {
    // ADDITIONAL INFORMATION FOR CURRENT DAY:
    // Current Weekday and Date:
    currentTimestamp = forecast.list[0].dt;
    currentDateTime = new Date(currentTimestamp * 1000);
    currentWeekdayId = currentDateTime.getDay();
    currentDate = currentDateTime.getDate();
    currentMonthId = currentDateTime.getMonth();

    currentWeekday = weekdays[currentWeekdayId];
    currentMonth = months[currentMonthId];
    $('.day-date').html('<h2>' + currentWeekday + '</h2><span>' + currentDate + ' ' + currentMonth + '</span>');

    // Temperature Min and Max of current Day:
    currentHigh = Math.floor(forecast.list[0].temp.max);
    currentLow = Math.floor(forecast.list[0].temp.min);

    $('.high-low').html('<span class="high">H ' + currentHigh + '&#176;</span><span class="low">L ' + currentLow + '&#176;</span>');


    // FORECAST:
    // Write Array of Forecast Days to number of Days:
    numberOfDays = forecast.list;

    screenSizeDetection(numberOfDays);
  });
};

// Check Screen Size and call appropriate function:
function screenSizeDetection(numberOfDays) {
  var windowWith = $(window).width();;
  if (windowWith < 768) {
    forecastSmallScreen(numberOfDays);
  } else {
    forecastLargeScreen(numberOfDays);
  }
};

// Number of Days on Small Screens:
function forecastSmallScreen(numberOfDays) {
  emptyContainers();
  for (var i = 1; i < 5; i++) {
    forecastInfos(i);
    showForecast();
  }
};
// Number of Days on Large Screens:
function forecastLargeScreen(numberOfDays) {
  emptyContainers();
  for (var i = 1; i < numberOfDays.length; i++) {
    forecastInfos(i);
    showForecast();
  }
};

// Empty Forecast Containers (before writing in new values)
function emptyContainers() {
  $('.forecast-day').empty();
  $('.forecast-icon').empty();
  $('.forecast-temp').empty();
}



// Calculate Forecast Information:
function forecastInfos(i) {
  // FORECAST WEEKDAY
  // Get Timestamp for Day:
  forecastTimestamp = numberOfDays[i].dt;
  // Convert Timestamp to Date and Time:
  forecastDateTime = new Date(forecastTimestamp * 1000); // * 1000 for Date() only takes milliseconds
  // Get Weekday Number:
  forecastWeekdayId = forecastDateTime.getDay();
  // Get Weekday Name with weekdayId
  forecastWeekday = weekdays[forecastWeekdayId];

  // FORECAST WEATHER CONDITIONS AND TEMPERATURE:
  // Get Weather Id for Day:
  forecastId = numberOfDays[i].weather[0].id;
  // Get Day Temperature for Day:
  forecastTemp = Math.floor(numberOfDays[i].temp.day);
}

// Show Forecast Information in Forecast Containers:
function showForecast() {
  // Show Weekday
  $('.forecast-day').append('<th>' + forecastWeekday + '</th>');

  // Show Icon
  var forecastIcon;
  var forecastPrefix = 'wi wi-owm-'
  forecastIcon = forecastPrefix + forecastId;

  var forecastIconCell = '<td><i class="' + forecastIcon + '"></i></td>'
  $('.forecast-icon').append(forecastIconCell);
  // Show Temperature

  var forecastTempCell = '<td><span>' + forecastTemp +'&#176;</span></td>';
  $('.forecast-temp').append(forecastTempCell);
};
