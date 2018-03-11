var weatherObject = new XMLHttpRequest();

weatherObject.open('Get', 'http://api.wunderground.com/api/513d054c14b4164e/conditions/q/MN/Franklin.json', 'true');

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('current').innerHTML = weatherInfo.current_observation.temp_f;
}