$(document).ready(function () {
    
    // var city = $("#city-input").val();
    var city = "farmington";
    var queryURL = "https://www.api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c2fa28678b1d4b3ad38208513c930f6b";
   
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(queryURL);
      console.log("this is working");
        
      });

        // var time
        // setInterval(function () {
        //     time = moment().format('LTS');
        // }, 1000)
        // console.log(time);



    });