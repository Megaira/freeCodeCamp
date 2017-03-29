// Variables:
var lat;
var lon;
var unit = 'metric'; // default unit

// Functions:
// Get Coordinates and call showWeather()
function returnPosition( position ) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  showWeather();
}
function returnPositionVaiIp( coords ) {
  lat = coords.latitude;
  lon = coords.longitude;
  showWeather();
}

// Assign value to unit according to state of input-checkbox and call showWeather():
function switchUnit() {
  if ($(this).is(':checked')) {
    unit = 'imperial';
  } else {
    unit = 'metric';
  }
  showWeather();
}

// Show local weather:
function showWeather( position ) {
  var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&units=' + unit + '&APPID=ae44e8d67a569c6b8064d639567e8cec';

  $.getJSON(weatherURL, function( result ) {

    // LOCATION NAME:
    // Get location name and write to '.location'
    var city = result.name;
    $('.location p').text(city);

    // SHOW WEATHER ICON & CHANGE BACKGROUND COLOUR:
    // Get weather condition id, sunrise time, sunset time, current time
    var weatherId = result.weather[0].id;
    var sunrise = result.sys.sunrise; // in seconds
    var sunset = result.sys.sunset; // in seconds
    var time = Date.now() / 1000; // in milliseconds -> /1000

    // Weather icon:
    var icon; // icon = prefix + weatherId
    var prefix = 'wi wi-owm-';
    // Change icon prefix according to daytime:
    if (sunrise < time && sunset > time) {
      prefix = prefix + 'day-';
    } else {
      prefix = prefix + 'night-';
    }
    icon = prefix + weatherId;
    // Add icon class to <i>:
    $('.weather-icon i').attr('class', icon);

    // Change background-color:
    // Get colour code with one digit from weatherId
    var weatherColourCode = Math.floor(weatherId/100);
    var weatherColour; // HEX colour
    // 8 weather condition groups - 8 cases:
    switch (weatherColourCode) {
      case 2:
        weatherColour = '#512DA8';
        break;
      case 3:
        weatherColour = '#E91E63';
        break;
      case 5:
        weatherColour = '#00BCD4';
        break;
      case 6:
        weatherColour = '#8e44ad';
        break;
      case 7:
        weatherColour = '#607D8B';
        break;
      case 8:
        weatherColour = '#FFD54F';
        break;
      case 9:
        weatherColour = '#00E676';
        break;
      default:
        weatherColour = '#CDDC39';
    }
    // Change background-color on .current container:
    $('.current').css('background-color', weatherColour);

    // SHOW WEATHER CONDITIONS:
    // Get weather condition description & write it to .weather-status
    var weatherStatus = result.weather[0].description;
    $('.weather-status p').text(weatherStatus);

    // SHOW TEMPERATURE WITH UNIT:
    // Get current temperature without decimals
    var temp = Math.floor(result.main.temp);
    // Generate temperature unit HTML code according to user choice
    var tempUnit;
    if (unit == 'metric') {
      tempUnit = '&#176;C';
    } else {
      tempUnit = '&#176;F';
    }
    // Write temp & tempUnit to .temperature:
    $('.degrees').text(temp);
    $('.temp-unit').html(tempUnit);

  });
}

$(document).ready(function(){
  navigator.geolocation.getCurrentPosition(function( position ) {
    returnPosition( position );
  },
  function(failure) {
    $.getJSON('http://ipinfo.io', function( response ) {
      var loc = response.loc.split(',');
      var coords = {
        latitude: loc[0],
        longitude: loc[1]
      };
      console.log(coords);
      returnPositionVaiIp( coords );
    })
  });


  $('input[type=checkbox]').on('click', switchUnit);
});
