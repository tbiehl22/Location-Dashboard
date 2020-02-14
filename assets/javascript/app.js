$(document).ready(function () {


  var degreeSymbol = String.fromCharCode(176)
  // var city = ""
  
  console.log(city);
  
  $('#submitBtn').click(function(){
    event.preventDefault()
    var city = $('#city-input').val();
    console.log(city);
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c2fa28678b1d4b3ad38208513c930f6b";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
  
      var condition = response.weather[0].main;
      var city = response.name;
      var temp = response.main.temp;
      var feelsLike = response.main.feels_like;
      var windSpeed = response.wind.speed * 2.237;
  
      function fahrenheitConverter(something) {
        return Math.floor((something - 273.15) * 1.80 + 32)
      };
  
      $("#city").html(city)
      $(".weather").html("<div class=\"degrees\">Temp: " + fahrenheitConverter(temp) + degreeSymbol + "f</div>")
      $(".weather").append("<div class=\"feels-like\">Feels Like: " + fahrenheitConverter(feelsLike) + degreeSymbol + "</div>")
      $(".weather").append("<div class=\"condition\">Condition: " + condition + "</div>")
      $(".weather").append("<div class=\"wind-speed\"> Wind Speed: " + Math.round(windSpeed) + "mph</div>")
    });
  });


  // Time Updater
  var currentTime = Date.now();
  setInterval(function () {
    var formattedTime = moment.unix(currentTime / 1000).format('LT');
    currentTime = currentTime + 1000;
    $('#time').text(formattedTime)
  }, 1000);

});