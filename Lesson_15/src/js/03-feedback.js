// // // // потрібно створити функцію яка буде формувати чергу в магазині
// // // // 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// // // // 2 параметр це кількість кас
// // // // Повертає обєкт де ключ це номер касси, значення це час черги на касі
// // // // 12 + 2 + 15 = 29
// // // // 3 + 5 + 6 + 7 = 21
// // // // { 1 : 29, 2 : 21}

function fn(arr, cash) {
  const obj = {};

  for (let i = 1; i <= cash; i += 1) {
    obj[i] = 0;
  }
  console.log(obj);
  arr.forEach(buyer => {
    const values = Object.values(obj);
    const minValue = Math.min(...values);
    const currentCase = values.indexOf(minValue) + 1;
    obj[currentCase] += buyer;
  });

  return obj
}

console.log(fn([12, 3, 5, 6, 2, 15, 7], 3));
