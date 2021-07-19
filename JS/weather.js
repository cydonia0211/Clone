const API_KEY = "4d1d2a91ffc3e03fd43b30fb51e3e67a";

function getSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = document.querySelector(".weather span:first-child");
            const weather= document.querySelector(".weather span:last-child");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });
}

function getError() {
    alert("Sorry, We can't find your location.");
}

navigator.geolocation.getCurrentPosition(getSuccess,getError);
/*
    getCurrentPosition( success function, error function);
*/