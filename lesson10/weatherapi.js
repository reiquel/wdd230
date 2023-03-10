// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// create API URL
const url = 'https://api.openweathermap.org/data/2.5/weather?q=fairbanks&appid=635f3a0057194cd58e3cf90f3df44bb7&units=imperial';

// fetch API data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

// display API results
function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  // set weather icon
  const iconCode = weatherData.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
  weatherIcon.src = iconSrc;
  weatherIcon.alt = weatherData.weather[0].description;
  captionDesc.textContent = weatherData.weather[0].description;
}

apiFetch();