
  var lat;
  var lon;
  var weatherURL;

  function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    $('#location').html('lat: ' + position.coords.latitude + '<br>lon: ' + position.coords.longitude);
    console.log(lat, lon);
    weatherURL = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&APPID=ae44e8d67a569c6b8064d639567e8cec';

    $.getJSON(weatherURL, function(result) {
      var city = result.city.name;
      $('#location').append('<br>' + city);
      $("#weather").html(JSON.stringify(result));
      console.log(result);
    });
  }


$(document).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
});
