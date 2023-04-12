// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

// Мікро процеси мають більший пріорітет ніж макро

// Мікро процеси
// 1 Promise
// 2 Observer

// Макро процеси
// 1 setTimeout
// 2 setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
// 3 setImmediate
//https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// 4 requestAnimationFrame

// console.log("1");

// setTimeout(() => console.log("2"), 10);

// Promise.resolve("3").then((value) => console.log(value));
// Promise.reject("4").then((value) => console.log(value)).catch(err=>console.log(err));
// Promise.resolve("5").then((value) => console.log(value));
// setTimeout(() => console.log("6"), 0);
// console.log("7");

// console.log("1");
// setTimeout(() => {
//   console.log("2");
//   Promise.resolve('3').then(value => console.log(value))
// }, 10);

// console.log("4");

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     const val = Math.random();
//     if (val > 0.2) {
//       res("Yeeees");
//     } else {
//       rej("Noooo");
//     }
//   }, 3000);
// });
// console.log(promise);

// promise
//   .then((value) => {
//     return value + " 😎";
//   })
//   .then((value) => {
//     console.log(value, qwerty);
//   })
//   .then(()=>{console.log('last then')})
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("after");
//   });

// const promise = fetch("https://pokeapi.co/api/v2/pokemon/ditto");

// console.log(promise);

// promise
// .then((resp) => resp.json())
// .then(data => console.log(data))
// .catch((err) => console.log(err));

const start = document.querySelector(".js-start");
const container = document.querySelector(".js-container");

start.addEventListener("click", onStart);

// function onStart() {
//   const result = [];
//   [...container.children].forEach((box) => (box.textContent = ""));
//   [...container.children].forEach((box, i) => {
//     createPromise(i)
//       .then((smile) => {
//         box.textContent = smile;
//         result.push("1");
//       })
//       .catch((smile) => (box.textContent = smile))
//       .finally(() => {
//         setTimeout(() => {
//           if (i === container.children.length - 1) {
//             if (!result.length || result.length === 3) {
//               alert("Winner");
//             } else {
//               alert("Lost money");
//             }
//           }
//         },500);
//       });
//   });
// }

// function createPromise(delay) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const random = Math.random();
//       if (random > 0.1) {
//         res("🤑");
//       } else {
//         rej("😈");
//       }
//     }, 1000 * delay);
//   });
// }

function onStart() {
  let counter = 0;

  [...container.children].forEach((box) => (box.textContent = ""));

  const promises = [...container.children].map(( _, i) => createPromise(i));

  Promise.allSettled(promises).then((items) => {
    console.log(items);
    items.forEach((item, i) => {
      setTimeout(() => {
        if (item.status === "fulfilled") {
          counter += 1;
        }
        console.log(item);
        container.children[i].textContent = item.value || item.reason;

        if (container.children.length - 1 === i) {
          setTimeout(() => {
            if (counter === container.children.length || !counter) {
              alert("Winner");
            } else {
              alert("Lost money");
            }
          }, 500);
        }
      }, i * 1000);
    });
  });
}

function createPromise() {
  return new Promise((res, rej) => {
    const random = Math.random();
    if (random > 0.5) {
      res("🤑");
    } else {
      rej("😈");
    }
  });
}
