const apiKey = "3d934b26d5baaaf81935507d22d53d8c";
const units = "metric";
let cityInput = document.getElementById("search");
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=${units}&appid=${apiKey}`;

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkWeather(city) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});

checkWeather(cityInput.value);
