// XJlq9OFMcHAy8pAQK7xj
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// const BASE_URL = "https://the-one-api.dev/v2/";
// const END_POINT = "character";
// const KEY = 'YZ3dzviq1QC3f0oHGhfv';
// function getCharacter() {
//   const param = new URLSearchParams({
//     limit: 30,
//     page: 1,
//   });

// const option = {
//     method: 'GET',
//     headers:{
//         Authorization: `Bearer ${KEY}`
//     }
// }

//   fetch(`${BASE_URL}${END_POINT}?${param}`,option).then(resp => console.log(resp))
// }
// getCharacter()
// const target = document.querySelector(".js-guard");
// let options = {
//   root: null,
//   rootMargin: "200px",
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(callback, options);
// function callback(evt){
// console.log(evt);
// }
// const BASE_URL = "https://api.themoviedb.org/3/";
// const ENDPOINT = "trending/movie/day";
// const API_KEY = "345007f9ab440e5b86cef51be6397df1";
// const list = document.querySelector(".js-list");
// const loadMore = document.querySelector(".js-load");
// let currentPage = 1;

// loadMore.addEventListener("click", onLoad);

// function onLoad() {
//   currentPage += 1;
//   getTrending(currentPage)
//     .then((data) => {
//       list.insertAdjacentHTML("beforeend", createMarkup(data.results));

//       if (data.page === data.total_pages) {
//         loadMore.hidden = true;
//       }
//     })
//     .catch((err) => console.log(err));
// }

// function getTrending(page = 1) {
//   return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`).then(
//     (resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }

//       return resp.json();
//     }
//   );
// }
// getTrending()
//   .then((data) => {
//     list.insertAdjacentHTML("beforeend", createMarkup(data.results));
//     observer.observe(target)
//     if (data.page !== data.total_pages) {
//       loadMore.hidden = false;
//     }
//   })
//   .catch((err) => console.log(err));

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, title }) => `<li>
//     <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}">
//     <h2>${title}</h2>
// </li>`
//     )
//     .join("");
// }

// // ПЕРЕРВА ДО 22.00

// let counter = 0;
// document.addEventListener("scroll", onScroll);

// function onScroll() {
//   counter += 1;
//   console.log(counter);
// }

const target = document.querySelector(".js-guard");
const BASE_URL = "https://api.themoviedb.org/3/";
const ENDPOINT = "trending/movie/day";
const API_KEY = "345007f9ab440e5b86cef51be6397df1";
const list = document.querySelector(".js-list");

let currentPage = 1;
let options = {
  root: null,
  rootMargin: "300px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(onLoad, options);
function onLoad(entries, observer) {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      currentPage += 1;
      getTrending(currentPage)
        .then((data) => {
          list.insertAdjacentHTML("beforeend", createMarkup(data.results));
          if (data.page === data.total_pages) {
            observer.unobserve(target);
          }
        })
        .catch((err) => console.log(err));
    }
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title }) => `<li>
    <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}">
    <h2>${title}</h2>
</li>`
    )
    .join("");
}

function getTrending(page = 1) {
  return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`).then(
    (resp) => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp.json();
    }
  );
}
getTrending()
  .then((data) => {
    list.insertAdjacentHTML("beforeend", createMarkup(data.results));
    observer.observe(target);
  })
  .catch((err) => console.log(err));
