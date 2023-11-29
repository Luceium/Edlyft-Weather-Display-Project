const longInputElem = document.getElementById("long")
const latInputElem = document.getElementById("lat")
const containerElem = document.getElementById("weather-data-container");
let tempElem;
let unitsElem;
let unit = "k";
let apiData;

navigator.geolocation.getCurrentPosition(position => {
  getWeather({
    lon: position.coords.longitude,
    lat: position.coords.latitude
  })
})

async function getWeather(location) {
  const API = "a5f1e89f40e75e656ca3f922a938fc32"
  const locationData = location ?? getLocation()
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.lon}&appid=${API}`
  apiData = await fetch(apiCall)
    .then(resp => resp.json()).then(resp => {
      return {
        weather: resp.weather[0].main,
        temperature: resp.main.temp,
        humidity: resp.main.humidity
      };
    })

  const weatherDisplayElem = createWeatherDashboard(apiData);
  if (containerElem.childElementCount === 0) {
    containerElem.appendChild(weatherDisplayElem);
  } else {
    containerElem.children[0].replaceWith(weatherDisplayElem);
  }

  tempElem = document.getElementById("temp");
  unitsElem = document.getElementById("units");
  unitsElem.addEventListener('change', recalcTemp);
}

function createWeatherDashboard(data) {
  const weatherDisplayElem = document.createElement("div");
  weatherDisplayElem.classList.add("weather-display");
  weatherDisplayElem.innerHTML = `
    <div class="weather-data">
      <h2>${data.weather}</h2>
      <p id="temp" >Temperature: ${standardToUnit(unit, data.temperature)}° ${unit}</p>
      <select id="units">
        <option value="k" ${unit == "k" ? "selected" : ""} > Kelvin </option>
        <option value="c" ${unit == "c" ? "selected" : ""} > Celcius </option> </option>
        <option value="f" ${unit == "f" ? "selected" : ""} > Fahrenheit </option>
      </select>
      <p>Humidity: ${data.humidity}%</p>
    </div>
  `;
  return weatherDisplayElem;
}

function standardToUnit(unit, temp) {
  if ("f" == unit) {
    return Math.round((temp - 273.15) * 1.8 + 32);
  } else if ("c" == unit) {
    273.15
    return Math.round(temp - 273.15);
  } else {
    return temp;
  }
}

function recalcTemp() {
  unit = unitsElem.value;
  console.log(`recalcTemp; new unit: "${unit}"`)
  tempElem.innerHTML = `Temperature: ${standardToUnit(unit, apiData.temperature)}° ${unit}`;
}

function getLocation() {
  return {
    lon: longInputElem.value,
    lat: latInputElem.value
  }
}