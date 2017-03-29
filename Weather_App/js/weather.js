
  var lat;
  var lon;
  var weatherURL;
  var unit = 'metric';

  function switchUnit(position) {
    if ($(this).is(':checked')) {
        unit = 'imperial';
    } else {
        unit = 'metric';
    }
    showWeather();
  }

  function returnPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    showWeather();
  }


  function showWeather() {
    // lat = 51.509865;
    // lon = -0.118092;
    console.log(lat, lon);
    weatherURL = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&units=' + unit + '&APPID=ae44e8d67a569c6b8064d639567e8cec';

    $.getJSON(weatherURL, function(result) {
      var city = result.name;
      var temp = Math.floor(result.main.temp);
      var weatherId = result.weather[0].id;
      var weatherStatus = result.weather[0].description;

      var prefix = 'wi wi-owm-';
      var code = weatherId;
      var icon = '';
      // Sunrise and Sunset
      var sunrise = result.sys.sunrise;
      var sunset = result.sys.sunset;
      var time = Date.now();


      if (sunrise < time && sunset > time) {
        prefix = prefix + 'day-';
      }else {
        prefix = prefix + 'night-'
      }
      icon = prefix + code;
      console.log(icon);
      console.log(unit);


      $('.location p').text(city);
      $('.weather-icon i').attr('class', icon);
      $('.weather-status p').text(weatherStatus);
      if (unit == 'metric') {
        $('.temperature').html('<span class="degrees">' + temp + '&#176;C</span>');
      } else {
        $('.temperature').html('<span class="degrees">' + temp + '&#176;F</span>');
      }

    });
  }
  console.log(lat, lon);

$(document).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(returnPosition);
    $('input[type=checkbox]').on('click', switchUnit);
  }
});
