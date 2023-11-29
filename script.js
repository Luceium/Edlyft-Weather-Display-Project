// Let's get references to the elements we need to interact with
// (and that already exits in the DOM)
// Note: this means we don't get references to the elements that we
// create because they don't exist when the page loads and the script first runs

// Here's an example of me getting a reference to our container with ID "weather-data-container"
const containerElem = document.getElementById("weather-data-container");

// Get a reference to the input element with ID "long"
// const longInputElem = 

//Get a reference to the input element with ID "lat"
// const latInputElem = 

// Here we setup variables that will reference the elements we will create dynamically
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
  // hint: use a template literall to insert the API key, longitude, and latitude into one url
  // note: We can add more tags to specify what units we want (check the docs)
  // const apiCall = 

  // Make a call to the api with fetch
  // get the result from the api call and create an object with:
  //   weather ~ found at jsonResponse.weather[0].main
  //   temp ~ found at jsonResponse.main.temp
  //   humidity ~ found at jsonResponse.main.humidity
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
}

/** 
 * Finish getLocation such that it returns an object with a "lon" and "lat" attribute.
 * Each attribute should be obtained from the text inputs with id lon and lat respectivley
 * By doing elem.value we can get the user's input from the input element.
 */
function getLocation() {

}

function createWeatherDashboard(data) {
  // Create a div element to hold the dashboard
  // Use the document api
  // const weatherDisplayElem = 

  weatherDisplayElem.classList.add("weather-display");

  // Set the innerHTML of weatherDisplayElem to populate it with weather data
  // Hint: This looks like JSX if you've ever worked with React.js
  // We're going to use a template literal (like a python f string or a formatted string)
  // to dynamically set the values
  weatherDisplayElem.innerHTML = `
      ${/* I'll set the title of the display to the weather name as an example */''}
      <h2>${data.weather}</h2>
      
      ${/* Display the correct unit */''}
      <p id="temp" >Temperature: ${/* your code */''}° ${unit}</p>

      ${/* Use what you've learned to add a <p> element that displays the humidity */''}
      
  `;
  return weatherDisplayElem;
}

// BONUS CHALLENGE
// Use the geolocation API to get the user's current location and pass in
// the data to getWeather to automatically render the weather data when the
// user first visits your page.
// Note: make sure to format the data the same way that it's formatted in getLocation
// Hint: Look up the geolocation API and how to use it