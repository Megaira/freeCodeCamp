// WEEKDAY AND DATE:
// console.log(time);
// var dateCurrent = new Date(time * 1000);
// console.log(dateCurrent);


function showForecast( position ) {
  var forecastURL = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lon + '&units=' + unit + '&cnt=8&APPID=ae44e8d67a569c6b8064d639567e8cec';

  $.getJSON(forecastURL, function( forecast ) {

    // Current Weekday and Date:
    var currentTimestamp = forecast.list[0].dt;
    var currentDateTime = new Date(currentTimestamp * 1000);
    var currentWeekdayId = currentDateTime.getDay();
    var currentDate = currentDateTime.getDate();
    var currentMonthId = currentDateTime.getMonth();

    var weekdays = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat']; // in JS .getDay() Sunday is 0
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    var currentWeekday = weekdays[currentWeekdayId];
    var currentMonth = months[currentMonthId];
    console.log(currentDateTime);
    console.log(currentWeekdayId);
    console.log(currentWeekday);
    console.log(currentDate);
    console.log(currentMonthId);
    console.log(currentMonth);
    $('.day-date').html('<h2>' + currentWeekday + ' <small>' + currentDate + '' + currentMonth + '</small></h2>');

    // Temperature Min and Max of current Day:
    var currentHigh = Math.floor(forecast.list[0].temp.max);
    var currentLow = Math.floor(forecast.list[0].temp.min);
    var highLowUnit;
    if (unit == 'metric') {
      highLowUnit = '&#176;C';
    } else {
      highLowUnit = '&#176;F';
    }
    $('.high-low').html('<span class="high">H ' + currentHigh + highLowUnit + '</span><span class="low">L ' + currentLow + highLowUnit + '</span>');


    // Large screen table:
    var numberOfDays = forecast.list;
    var forecastTimestamp;
    var forecastStatus;
    var forecastId;
    var forecastTemp;

    for (var i = 1; i < numberOfDays.length; i++) {
      // Weekday:
      forecastTimestamp = numberOfDays[i].dt;
      var dateForecast = new Date(forecastTimestamp * 1000);
      console.log(forecastTimestamp);
      console.log(dateForecast);


      forecastStatus = numberOfDays[i].weather[0].description;
      // console.log(forecastStatus);
      forecastId = numberOfDays[i].weather[0].id;
      // console.log(forecastId);
      forecastTemp = Math.floor(numberOfDays[i].temp.day);
      // console.log(forecastTemp);

      showForecast();
    }

    function showForecast() {
      // Show Weekday
      // Show Icon
      var forecastIcon;
      var forecastPrefix = 'wi wi-owm-'
      forecastIcon = forecastPrefix + forecastId;
      // console.log(forecastIcon);
      var forecastIconCell = '<td><i class="' + forecastIcon + '"></i></td>'
      $('.forecast-icon').append(forecastIconCell);
      // Show Temperature
      var forecastUnit;
      if (unit == 'metric') {
        forecastUnit = '&#176;C';
      } else {
        forecastUnit = '&#176;F';
      }
      var forecastTempCell = '<td><span>' + forecastTemp +'</span>' + forecastUnit + '</td>'
      $('.forecast-temp').append(forecastTempCell);
    }

    $('input[type=checkbox]').on('click', function() {
      $('.forecast-icon').empty();
      $('.forecast-temp').empty();
    });
  });
}
