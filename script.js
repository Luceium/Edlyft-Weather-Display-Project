// Let's get references to the elements we need to interact with
// (and that already exits in the DOM)
// Note: this means we don't get references to the elements that we
// create because they don't exist when the page loads and the script first runs

// Get a reference to the input element with ID "long"
// const longInputElem = 

//Get a reference to the input element with ID "lat"
// const latInputElem = 

// Get a reference to the div with ID "weather-data-container"
// const containerElem = 

// Lets setup variables that will reference the elements we will create dynamically
// (and that don't exist in the DOM when the page loads)
let tempElem;
let unitsElem;
// Set the unit variable to your preferred default unit ("k", "f", "c")
let unit = "k";
// This variable will store our weather data extracted from the api response
let apiData;

async function getWeather(location) {
  // This is our API key and it gives us access to call the api
  const API = "a5f1e89f40e75e656ca3f922a938fc32"
  
  //gets the location if a location isn't passed in
  const locationData = location ?? getLocation()

  // look at the docs and format an API call
  // https://openweathermap.org/current#:~:text=current%20weather%20data-,How%20to%20make%20an%20API%20call,-API%20call
  // hint: use a template literall to insert the API, longitude, and latitude
  // const apiCall = 

  // Make a call to the api with fetch
  // get the result from the api call and create an object with:
  //   The weather ~ found at jsonResponse.weather[0].main
  //   The temperature ~ found at jsonResponse.main.temp
  //   And the humidity ~ found at jsonResponse.main.humidity
  // Store the object in apiData
  // apiData = 

  // Creates a new element with the api data using a method you will write!
  const weatherDisplayElem = createWeatherDashboard(apiData);

  // Adds the element if there aren't any elements in the div.
  // Otherwise it'll replace the existing dashboard
  if (containerElem.childElementCount === 0) {
    containerElem.appendChild(weatherDisplayElem);
  } else {
    containerElem.children[0].replaceWith(weatherDisplayElem);
  }

  
  // update the reference to the temperature <p> element
  // tempElem = 
  // update the reference to the units <selector> element
  // unitsElem = 
  // add an event listener to the unitsElem reference, to unitsElem
  unitsElem.addEventListener('change', recalcTemp);
}

function createWeatherDashboard(data) {
  // Create a div element to hold the dashboard
  // const weatherDisplayElem = 

  // apply the "weather-display" class for styling

  // Set the innerHTML of weatherDisplayElem to populate it with weather data
  // Hint: This looks like JSX if you've ever worked with React.js
  // We're going to use a template literal (like a python f string or a formatted string)
  // to dynamically set the values
  weatherDisplayElem.innerHTML = `
      ${/* I'll set the title of the display to the weather name as an example */''}
      <h2>${data.weather}</h2>

      ${/* dynamically set the temperature and unit. Hint: use standardToUnit
           to get the correct temperature*/''}
      <p id="temp" >Temperature: ${/* your code */''}° ${/* your code */''}</p>

      ${/* We want the option that matches our unit variable to be selected
           On each option use conditionals to return the string "selected"
           if it matches the current unit variable. Else return an empty
           string to add nothign */''}
      <select id="units">
        <option value="k" ${/* your code */''} > Kelvin </option>
        <option value="c" ${/* your code */''} > Celcius </option> </option>
        <option value="f" ${/* your code */''} > Fahrenheit </option>
      </select>

      ${/* Use what you've learned to add a <p> element that displays the humidity */''}
      
  `;  
  return weatherDisplayElem;
}

/** 
 * Finish the standardToUnit function such that it converts a Kelvin temperature to another unit
 * unit can be a string of "k", "c", or "f"
 * temp will be a number representing the temperature in Kelvin
 * Hint: Look up the conversion between Kelvin and other units
 */
function standardToUnit(unit, temp) {
  
  return temp;
}

function recalcTemp() {
  // Get the value in the selector and assign it to unit
  // unit = 

  // Replace the innerText of our tempElem with the new temperature and unit
  // ex. "Temperature: 100° F"
  
}

/** 
 * Finish getLocation such that it returns an object with a "lon" and "lat" attribute.
 * Each attribute should be obtained from the text inputs with id lon and lat respectivley
 */
function getLocation() {
  
}

// BONUS CHALLENGE
// Use the geolocation API to get the user's current location and pass in the data to getWeather to automatically render the weather data when the user first visits your page.
// Note: make sure to format the data the same way that it's formatted in getLocation
// Hint: Look up the geolocation API and how to use it