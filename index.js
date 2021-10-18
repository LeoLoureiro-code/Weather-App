const apiKey = "681487c04faf808d7fd9446d204afde5";


document.getElementById("btn").addEventListener("click", getWeather);

function getWeather(){
    const inputVal = document.getElementById("input").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    fetch(url).then(
        (response) => response.json()
    ).then(
        function(data){
            const {name: location, weather,main:{temp:temp }, sys:{country:country}} = data;
            /*console.log(location);
            console.log(weather);
            console.log(icon);
            console.log(temp);
            console.log(country);*/
            displayData(location, weather, temp, country);
        }
    );
}

function displayData(location, weather, temp, country){
    //Access the DOM elements to be updated
    let grades = document.getElementsByClassName("grades");
    let city = document.getElementsByClassName("location");
    let place = document.getElementsByClassName("country");
    let icon = document.getElementsByClassName("weatherIcon");
    let conditions = document.getElementsByClassName("weatherConditions");

    city[0].innerHTML = location;
    console.log(weather[2], weather[3]);
    conditions[0].innerHTML = weather[2];
    icon.src = "http://openweathermap.org/img/wn/"+weather[3]+ "@2x.png"
    grades[0].innerHTML = Math.floor(temp)  + "&#176;";
    place[0].innerHTML = country;
}