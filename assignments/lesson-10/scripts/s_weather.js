var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.wunderground.com/api/513d054c14b4164e/conditions/q/OR/Springfield.json', true);
weatherObject.send();
weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('img').src = weatherInfo.current_observation.icon_url;
    document.getElementById('current').innerHTML = weatherInfo.current_observation.icon;
    document.getElementById('temp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('feels').innerHTML = weatherInfo.current_observation.feelslike_f;
    document.getElementById('precipitation').innerHTML = weatherInfo.current_observation.precip_today_in;
    document.getElementById('speed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('windChill').innerHTML = weatherInfo.current_observation.windchill_f;
}

var forecastObject = new XMLHttpRequest();
forecastObject.open('GET', 'https://api.wunderground.com/api/513d054c14b4164e/forecast10day/q/OR/Springfield.json', true);
forecastObject.send();
forecastObject.onload = function () {
    var forecastInfo = JSON.parse(forecastObject.responseText);
    document.getElementById('forecast').innerHTML = forecastInfo.forecast.txt_forecast.forecastday["0"].fcttext;
}
