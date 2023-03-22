// const button = document.querySelector(".js-click");
// const container = document.querySelector(".js-container");
// container.addEventListener("click", onClick);

// let step = 0;

// function onClick(evt) {
//   step += 5;
//   container.style.marginLeft = `${step}px`;
//   container.style.marginTop = `${step}px`;
// //   console.log(evt.currentTarget);
// }
// const arr = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Non necessitatibus odit mollitia debitis tenetur, ratione, voluptatem facilis fugiat vero dicta illo assumenda et ', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non necessitatibus odit mollitia debitis tenetur, ratione, voluptatem facilis fugiat vero']
// const title = document.querySelector(".js-title");
// const title1 = document.querySelector(".js-title1");
// const title2 = document.querySelector(".js-title2");
// title.addEventListener("click", onClick);
// title1.addEventListener("click", onClick);
// title2.addEventListener("click", onClick);

// const maxLength = 13;
// const totalLength = maxLength + 3;

// function onClick(evt) {
//   const title = evt.currentTarget;
//   const str = title.textContent.slice(0, maxLength);

//   if (title.textContent.length > totalLength) {
//     const remainder = title.textContent.slice(maxLength);
//     title.setAttribute("data-title", remainder);
//     title.textContent = str + "...";
//   } else {
//     const remainder = title.dataset['title'];
//     console.log(title.dataset['title']);
//     console.log(title.dataset.title);
//     if (remainder) {
//       title.textContent = str + remainder;
//     }
//     // getAttribute
//   }
// }

// const userName = document.querySelector('.js-input');

// userName.addEventListener('change', onInput);
// //userName.addEventListener('input', onInput)

// function onInput(evt){
//     console.dir(evt.currentTarget.value);
// }

// const formEl = document.querySelector(".js-form");
// formEl.addEventListener("submit", onSubmit);

// function onSubmit(evt) {
//   evt.preventDefault();

//   const { userAge, userEmail, userName } = evt.currentTarget.elements;

//   const data = {
//     name: userName.value,
//     email: userEmail.value,
//     age: userAge.value,
//   };

//   console.log(data);
// }

// const container = document.querySelector(".js-container");
// window.addEventListener("keydown", onKey);

// function onKey(evt) {
//   console.log(evt);
//   // if(evt.code === 'Escape' || evt.code === 'Enter'){
//   //     container.classList.toggle('tog')
//   // }

//   if (evt.ctrlKey && (evt.code === "KeyC")) {
//     console.log('try copy');
//     evt.preventDefault()
//     // alert("Копіюєш?");
//     return;
//   }
// }

// Перерва до 22.10
// const cars = [
//   {
//     id: 1,
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 2,
//     car: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 33,
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 3,
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//     number: "+380000000000",
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 4,
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];
// const list = document.querySelector(".js-list");
// const favoriteList = document.querySelector(".js-favorite-list");
// const form = document.querySelector(".js-search-form");
// form.addEventListener("submit", onSearch);
// list.addEventListener("click", onClick);
// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ id, car, type, price, img }) => `
//   <li data-id="${id}">

//       <img src="${img}" alt="${car}" width="300">
//       <div class="js-favorite">★</div>
//       <h2>${car}</h2>
//       <h3>${type}</h3>
//       <p>${price}</p>
//   </li>`
//     )
//     .join("");
// }
// list.insertAdjacentHTML("beforeend", createMarkup(cars));

// function onSearch(evt) {
//   evt.preventDefault();

//   const form = evt.currentTarget;
//   const { query, select } = form.elements;
//   const selectValue = select.value;
//   const searchCars = cars.filter(
//     (
//       item //car || type
//     ) => item[selectValue].toLowerCase() === query.value.trim().toLowerCase()
//   );
//   list.innerHTML = createMarkup(searchCars);
// }

// function onClick(evt) {
//   if (evt.target.classList.contains("js-favorite")) {
//     evt.target.classList.add("js-favorite-active");

//     const { id } = evt.target.closest("li").dataset;

//     const {car, type} = cars.find(({ id: carId }) => carId === Number(id));
//     addFavorite(`${car} ${type}`)
//   }
// }

// function addFavorite(currentCar) {
//     favoriteList.insertAdjacentHTML('beforeend', `<li>${currentCar}</li>`)
// }

