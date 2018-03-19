var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var townInfo = request.response;
    populateTownInfo(townInfo);
}


function populateTownInfo(jsonObj) {
    var towns = jsonObj['towns'];
    
    for (var i = 0; i < towns.length; i++) {
        if (towns[i].name == 'Franklin' || towns[i].name == 'Springfield' || towns[i].name == 'Greenville') {
            var myArticle = document.getElementById(towns[i].name);
            var myH3 = document.createElement('h3');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myList = document.createElement('ul');
        
            myH3.textContent = towns[i].name;
            myPara1.textContent = towns[i].motto;
            myPara2.textContent = 'Founded: ' + towns[i].yearFounded;
            myPara3.textContent = 'Current Population: ' + towns[i].currentPopulation;
            myPara4.text.Content = 'Average Rainfall: ' + towns[i].averageRainfall;

            myArticle.appendChild(myH3);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myList);
        }
    }
     
}