
  var lat;
  var lon;
  var weatherURL;
  var unit = 'metric';

  function showWeather(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    // lat = 51.509865;
    // lon = -0.118092;
    console.log(lat, lon);
    weatherURL = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&units=' + unit + '&APPID=ae44e8d67a569c6b8064d639567e8cec';

    $.getJSON(weatherURL, function(result) {
      var city = result.name;
      var tempCelsius = Math.floor(result.main.temp);
      var weatherId = result.weather[0].id;
      var weatherStatus = result.weather[0].description;

      var prefix = 'wi wi-owm-';
      var code = weatherId;
      var icon = '';

      // if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
      //   // icon = 'day-' + icon;
      // }
      icon = prefix + code;

      $('.location p').text(city);
      $('.weather-icon i').attr('class', icon);
      $('.weather-status p').text(weatherStatus);
      $('.temperature').html('<span class="degrees">' + tempCelsius + '&#176;C</span>');

      // console.log(city);
      // console.log(icon);
      // console.log(tempCelsius);
      // console.log(tempFahrenheit);
      // console.log(tempHigh);
      // console.log(tempLow);

      console.log(result);

      // console.log(weatherId);
      // console.log(weatherStatus);
    });
  }


$(document).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeather);
  }
});
