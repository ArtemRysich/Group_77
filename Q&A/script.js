// https://javascriptpatterns.vercel.app/patterns/design-patterns/factory-pattern

// console.log(typeof NaN); //number
// Number.isNaN()
// console.log(typeof null); //object

// console.log(null > 0); //false
// console.log(Number(null));
// console.log(null < 0); //false
// console.log(Number(null));
// console.log(null == 0); //false
// console.log(null >= 0); //true
// console.log(Number(null));
// console.log(Math.min() > Math.max()); //true
// console.log((!+[] + [] + ![]).length); //9
// Самостійне опрацювання
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

// class Toggle {
//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }
//   toggle(){
//     this.on = !this.on;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");

// const arr = [1, 1, 1, [1, 1, [1, 1]]];

// function sum(arr) {
//   let total = 0;
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       total += sum(item);
//     } else {
//       total += item;
//     }
//   }
//   return total
// }
// console.log(sum(arr));

// const arr = [
//   1,
//   1,
//   1,
//   [
//     1,
//     1,
//     [
//       1,
//       1,
//       [
//         1,
//         1,
//         1,
//         [1, 1, [1, 1, [1, 1, 1, [1, 1, [1, 1, [1, 1, 1, [1, 1, [1, 1]]]]]]]],
//       ],
//     ],
//   ],
// ];

// function sumArray(arr) {
//   let sum = 0;
//   arr.forEach((elem) => {
//     if (typeof elem === "number") {
//       sum += elem;
//     } else if (Array.isArray(elem)) {
//       sum += sumArray(elem);
//     }
//   });
//   return sum;
// }

// console.log(sumArray(arr));

// function foo(item) {
//   const test = 10;
//   const userName = "Artem";
//   const value = item > test;
// const fn = function (age) {
//     const str = `Hello my name ${userName} I\`m ${age} yers old`;
//     console.log(test);
//     console.log(value);
//     return str;
//   }
//   const fn2 = function (age) {
//     const str = `Привіт мене звати ${userName} мені ${age} років`;
//     console.log(test);
//     console.log(value);
//     return str;
//   };
//   return value
//     ? fn
//     : fn2
// }

// const result = foo(11);
// const example = result(28)
// console.log(example);
// const arr = [1,2,3,4];
// arr.forEach(item => {
//     if(item > 0){
//     //    continue;
//     }
//     console.log('After if');
// })

// function padEnd(str) {
//     console.log(this);
//     console.log(str);
//     // return this.value + str
//     return this.value.padEnd(this.value.length + str.length, str)
//   }

//   console.log(padEnd.call({value: '^.'}, '^'));

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//     console.log(initialValue);
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     // this.value += str;
//     this.value = this.value.padEnd(this.value.length + str.length, str);
//   }
//   padStart(str) {
//     // console.log(typeof this.value, typeof str);
//     // this.value = str + this.value;
//     this.value = this.value.padStart(this.value.length + str.length, str);
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// function foo(a,b) {
//     console.log(this); // window
//     return a * b;
// }

// const result = foo.bind(null, 2);
// console.log(result(2));
// Можемо розібрати ? Яким буде результат виконання (2,4,NaN, помилка ?)

// const arr = [14, 45, 13, 55, 213, 11];

// for(const num of arr){
//     // if(num < 50){
//     //     // continue;
//     //     // break;
//     //     console.log(num);
//     // }
//     console.log(num);
// }

// const foo = function(){
//     console.log('expression');
// }
// foo()
// boo()
// function boo(){
//     console.log('declaration');
// }
console.log(Math.min() > Math.max())