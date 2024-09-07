// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
// const apiKey = "7c4eb8e2b9c69bcc8b9436472d1c9898";
// const input = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

// async function checkWeather(DynamicCityName) {
//   try {
//     const response = await fetch(apiUrl + DynamicCityName + `&appid=${apiKey}`);

//     // Check if the city name is invalid (status 404)
//     if (response.status == 404 || response.status == 400) {
//       let error = document.querySelector(".error");
//       error.style.display = "block";
//       document.querySelector(".weather").style.display = "none"; // Hide weather info when there's an error
//     } else {
//       let data = await response.json();
//       console.log(data);

//       let city = document.querySelector(".city");
//       let temp = document.querySelector(".temp");
//       let humidity = document.querySelector(".humidity");
//       let wind = document.querySelector(".wind");
//       let weatherimage = document.querySelector(".weather-icon");
//       let error = document.querySelector(".error"); // Reference error element

//       city.innerHTML = data.name;
//       temp.innerHTML = Math.round(data.main.temp) + "°C";
//       humidity.innerHTML = data.main.humidity + "%";
//       wind.innerHTML = data.wind.speed + " km/h";

//       // Update the weather image based on the weather condition
//       if (data.weather[0].main == "Clouds") {
//         weatherimage.src = "images/weather-app-img/images/clouds.png";
//       } else if (data.weather[0].main == "Clear") {
//         weatherimage.src = "images/weather-app-img/images/clear.png";
//       } else if (data.weather[0].main == "Rain") {
//         weatherimage.src = "images/weather-app-img/images/rain.png";
//       } else if (data.weather[0].main == "Drizzle") {
//         weatherimage.src = "images/weather-app-img/images/drizzle.png";
//       } else if (data.weather[0].main == "Mist") {
//         weatherimage.src = "images/weather-app-img/images/mist.png";
//       }

//       document.querySelector(".weather").style.display = "block"; // Show weather info
//       error.style.display = "none"; // Hide error message when data is valid
//     }
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//   }
// }

// searchBtn.addEventListener("click", () => {
//   checkWeather(input.value);
// });


const apiurl = "https://www.omdbapi.com/?t=Leo"
const apititle = "?t=Leo"
const apikey = "fe906b16"


const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey = "7c4eb8e2b9c69bcc8b9436472d1c9898";
let input = document.querySelector("input")
const searchBtn = document.querySelector(".search button");
let error = document.querySelector(".error");
let weather = document.querySelector(".weather")

async function fetchWeather(city) {
  const repsonse = await fetch(apiUrl + city + `&appid=${apiKey}`)
  try {
    if (repsonse.status == 400 || repsonse.status == 404) {
      error.style.display = "block";
      weather.style.display = "none"
    } else {
      let data = await repsonse.json()
      console.log(data)
      let city = document.querySelector(".city")
      let temp = document.querySelector(".temp")
      let humidity = document.querySelector(".humidity")
      let wind = document.querySelector(".wind")
      let description = document.querySelector(".description")
      // displaying the value of response 
      city.innerHTML = data.name
      temp.innerHTML = data.main.temp + "°C";
      humidity.innerHTML = data.main.humidity + "%";
      wind.innerHTML = data.wind.speed + " Km/h";
      description.innerHTML = data.weather[0].description
      weather.style.display = "block"

      //  weather updation 
      let weatherimage = document.querySelector(".weather-icon");
      let currentweather = data.weather[0].main
      if (currentweather == "Clouds") {
        weatherimage.src = "./images/weather-app-img/images/clouds.png"
      } else if (data.weather[0].main == "Clear") {
        weatherimage.src = "./images/weather-app-img/images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherimage.src = "./images/weather-app-img/images/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherimage.src = "./images/weather-app-img/images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherimage.src = "./images/weather-app-img/images/mist.png";
      }
      error.style.display = "none"
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

searchBtn.addEventListener("click", () => {
  fetchWeather(input.value)
})