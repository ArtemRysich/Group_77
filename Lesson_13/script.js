// const container = document.querySelector(".js-container");

// container.addEventListener("click", onClick);
// function onClick(evt) {
//   // console.log(evt.currentTarget.dataset.color);
//   if (!evt.target.classList.contains("js-box")) {
//     return;
//   }
//   console.log(evt.target.dataset.color);
//   console.log(evt.currentTarget);
// }

// const container = document.querySelector(".js-content");
// const nameWinner = document.querySelector(".js-winner");
// let player = "X";
// let historyX = [];
// let historyO = [];
// const wins = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];

// function createMarkup() {
//   let markup = "";
//   for (let i = 1; i < 10; i += 1) {
//     markup += `<div class="item js-item" data-id="${i}"></div>`;
//   }
//   container.innerHTML = markup;
// }
// createMarkup();

// container.addEventListener("click", onClick);

// function onClick(evt) {
//   const { target } = evt;
//   if (!target.classList.contains("js-item") || target.textContent) {
//     return;
//   }

//   const isEndGame = historyO.length + historyX.length === 9;
//   const id = Number(target.dataset.id);
//   let result = false;

//   if (player === "X") {
//     historyX.push(id);
//     result = isWinner(historyX);
//   } else {
//     historyO.push(id);
//     result = isWinner(historyO);
//   }

//   target.textContent = player;

//   if (result) {
//     nameWinner.textContent = `Winner ${player} 😎`;
//     resetGame();
//     return;
//   } else if (isEndGame) {
//     console.log(`Try again 😱`);
//     resetGame();
//     return;
//   }
//   player = player === "X" ? "O" : "X";
// }

// function isWinner(arr) {
//   return wins.some((item) => item.every((id) => arr.includes(id)));
// }

// function resetGame() {
//   createMarkup();
//   historyX = [];
//   historyO = [];
//   player = "X";
// }

// Перерва до 21.20

// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `);
// console.log(instance);
// instance.show()

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
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 4,
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//     number: "+380000000000",
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 5,
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// const container = document.querySelector(".js-container");

// const markup = cars.map(
//   ({ img, car, id }) =>
//     `<li data-car-id="${id}" class="js-target js-card">
//     <img class="js-target" src="${img}" alt="${car}" width="200">
//     <h2 class="js-target">${car}</h2>
//     </li>`
// );

// container.insertAdjacentHTML("beforeend", markup.join(""));
// container.addEventListener("click", onClick);

// function onClick(evt) {
//   const { target } = evt;
//   if (!target.classList.contains("js-target")) {
//     return;
//   }
//   // ?? null undefined
//   // || '' 0 null false undefined NaN
//   const carId =
//     target.dataset.carId ?? target.closest(".js-card").dataset.carId;
//   const currentItem = cars.find(({ id }) => id === Number(carId));

//   if (!currentItem) {
//     const instance = basicLightbox.create(`
//     <div class="bg">
//     <img src="https://www.shutterstock.com/image-vector/no-image-available-icon-ui-600w-1458092489.jpg" width="300" alt="placeholder">

//   </div>
//   `);
//     instance.show();
//     return;
//   }else{
//     const instance = basicLightbox.create(`
//     <div class="bg">
//     <img src="${currentItem.img}" width="300" alt="${currentItem.car}">
//     <h2>${currentItem.car}</h2>
//     <h3>${currentItem.type}</h3>
//     <p>${currentItem.price}</p>
//   </div>
//   `);
//   instance.show();
//   }

// }
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// child.addEventListener("click", (event) => {
//     event.stopPropagation();
//   alert(
//     "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// descendant.addEventListener("click", (event) => {

//   alert("Descendant click handler");
// });

// const form = document.querySelector('form')
// form

const emmetConfig = {
  "editor.matchBrackets": "never",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features",
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features",
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "[html]": {
    "editor.defaultFormatter": "HookyQR.beautify",
  },
  "editor.renderWhitespace": "all",
  "[scss]": {
    "editor.defaultFormatter": "HookyQR.beautify",
  },
  "[css]": {
    "editor.defaultFormatter": "HookyQR.beautify",
  },
  "editor.detectIndentation": false,
  "liveServer.settings.donotVerifyTags": true,
  "redhat.telemetry.enabled": true,
  "workbench.editor.enablePreview": false,
  "explorer.confirmDelete": false,
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "window.zoomLevel": 4,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[markdown]": {
    "editor.wordWrap": "wordWrapColumn",
  },
  "emmet.preferences": {},
};



// refs.createBtn.addEventListener("click", () => createBoxes(onInputValue()));
// refs.createBtn.addEventListener("click", createBoxes(onInputValue()));
//  в чому різниця запису колбеку, один з них працює не правильно