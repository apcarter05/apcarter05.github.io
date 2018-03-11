var high = parseFloat(document.getElementById('highT').innerHTML);
var low = parseFloat(document.getElementById('lowT').innerHTML);
var averageT = (high + low) / 2;
var windspeed = parseFloat(document.getElementById('speed').innerHTML);

var w = Math.pow(windspeed,0.16);

var windchill =  35.74 + (0.6215 * averageT) - (35.75 * w) + (0.4275 * averageT * w);

windchill = windchill.toFixed(2);

document.getElementById('wind-chill').innerHTML = windchill;