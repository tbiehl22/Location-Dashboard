$(document).ready(function () {

    var city = $("#city-input").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" +
        "&api_key=c2fa28678b1d4b3ad38208513c930f6b";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (data) {
        console.log(data);
    })
        var time
        setInterval(function () {
            time = moment().format('LTS');
        }, 1000)
        console.log(time);



    });