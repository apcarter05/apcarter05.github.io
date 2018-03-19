var weatherObject = new XMLHttpRequest();

weatherObject.open('Get', 'http://api.wunderground.com/api/513d054c14b4164e/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('temp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('speed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('wind-chill').innerHTML = weatherInfo.current_observation.windchill_f;
}

var weatherPic = new XMLHttpRequest();
weatherPic.open('GET', 'http://api.wunderground.com/api/513d054c14b4164e/conditions/q/MN/Franklin.json', true);

weatherPic.send();

weatherPic.onload = function() {
    var weatherIcon = JSON.parse(weatherPic.responseText);
    document.getElementById('weatherIcon').src = weatherIcon.current_observation.icon_url;
}

var forecastObject - new XMLHttpRequest();
forecastObject.open('GET', 'https://api.wunderground.com/api/513d054c14b4164e/forecast/q/MN/Franklin.json', true);
forecastObject.send();
forecastObject.onload = function() {
    var forecastInfo - JSON.parse(forecastObject.responseText);
    document.getElementById('forecast').innerHTML = forecastInfo.forecast.text_forecast.forecastday["0"].fcttext;
}
}
}
}