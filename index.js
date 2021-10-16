const apiKey = "681487c04faf808d7fd9446d204afde5";


document.getElementById("btn").addEventListener("click", getWeather);

function getWeather(){
    const inputVal = document.getElementById("input").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    fetch(url).then(
        (response) => response.json()
    ).then(
        (data) => console.log(data)
    );
}