$(document).ready(function () {
    
    // var city = $("#city-input").val();
    var degreeSymbol = String.fromCharCode(176)
    var city = "farmington, utah";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c2fa28678b1d4b3ad38208513c930f6b";
   
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      
      var city = response.name
      var temp = response.main.temp
      var fahrenheitDec = (temp - 273.15) * 1.80 + 32;
      var fahrenheit = Math.floor(fahrenheitDec)
      var icon = response.weather.icon
      console.log(icon);
      
      $(".weather").text(fahrenheit + degreeSymbol)
      $(".weather").text(fahrenheit + degreeSymbol)
      $(".weather").text(fahrenheit + degreeSymbol)
      $(".weather").text(fahrenheit + degreeSymbol)
      });

        // var time
        // setInterval(function () {
        //     time = moment().format('LTS');
        // }, 1000)
        // console.log(time);



    });