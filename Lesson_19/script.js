// https://media.licdn.com/dms/image/C5112AQEr5Pvwftcnpw/article-cover_image-shrink_600_2000/0/1538241940135?e=1687392000&v=beta&t=nBUq1TFjTuJmww0wqfhnd8A8SI_Vnq4S0F-xk2GI3YM
// https://uk.wikipedia.org/wiki/SOAP
// https://swapi.dev/

// Перерва до  21.00
const search = document.querySelector(".js-search");
const list = document.querySelector(".js-list");
search.addEventListener("submit", onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const { query, days } = evt.currentTarget.elements;
  getWeather(query.value, days.value)
    .then((data) => (list.innerHTML = createMarkup(data.forecast.forecastday)))
    .catch((err) => console.log(err));
}

function getWeather(city, days) {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_KEY = "ce2cb9b2a3da414bb5b172546231704";
  const params = new URLSearchParams({
    key : API_KEY,
    q: city,
    days: days,
    lang: 'uk'
  });

  return fetch(
    `${BASE_URL}/forecast.json?${params}`
  ).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { text, icon },
        },
      }) => `<li>
    <img src="${icon}" alt="${text}">
    <p>${text}</p>
    <h2>${date}</h2>
    <h3>${avgtemp_c}</h3>
</li>`
    )
    .join("");
}
