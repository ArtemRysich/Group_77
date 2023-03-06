// declaration expression
// function foo(){

// }

// const foo = function () {}



// arrow function

// const foo = () => {}

// 'use strict'
// function foo(){
//     console.log(this);
// }

// foo();

// const boo = function (){
//     console.log(this);
// }

// boo()


// const arrow = () => {
//     console.log(this);
// }
// arrow()


// const objA ={
//     name : 'User name',
//     nickName(){
//         console.log(this);
//     }
// }

// objA.nickName()

// const objB ={
//     name : 'User name',
//     nickName: () => {
//         console.log(this);
//     }
// }

// objB.nickName()



// const objA ={
//     name : 'User name',
//     skills:{
//         mySkill : 'html',
//         nickName(){
//             console.log(this);
//         }
//     }

// }

// objA.skills.nickName()


// const objA = {
//     name: 'User name',
//     skills: {
//         mySkill: 'html',
//         someValue: {
//             value: 10,
//             nickName() {
//                 console.log(this);
//             }
//         }
//     }
// }

// objA.skills.someValue.nickName()

// 'use strict'
// const objB = {
//     name: 'User name',
//     skills: {
//         mySkill: 'html',
//         someValue: {
//             value: 10,
//             foo() {
//                 console.log('foo', this);

//                 function nickName() {
//                     console.log('nickName', this);
//                 }
//                 nickName()
//             }
//         }
//     }
// }

// objB.skills.someValue.foo()


// const objA ={
//     age: 22,
//     myAge(){
//         console.log(this);
//     }
// }
// objA.myAge()


// const objA ={
//     age: 22,
//     myAge: () => {
//         const test = ()=> {
//             console.log(this);
//             test()
//         }
//     }
// }
// objA.myAge()


// const objA = {
//     age: 22,
//     myAge() {
//         const test = () => {
//             console.log(this);
//             test()
//         }
//     }
// }
// objA.myAge()

// 'use strict'
// const objA = {
//     age: 22,
//     myAge() {
//         function test() {
//             console.log(this);

//         }
//         test()
//     }
// }
// objA.myAge()



// const objA = {
//     age: 22,
//     skilss: {
//         skill: ['html', "css"],
//         foo() {
//             const boo = () => {
//                 console.log(this);
//             }
//             boo()
//         }
//     }
// }
// objA.skilss.foo()








// const objA = {
//     age: 22,
//     myAge() {
//         const test = () => {
//             console.log(this);
//         }
//         test()
//     }
// }


// const objB = {
//     age:12,
//     someFunction: objA.myAge
// }
// objB.someFunction()




// const objA = {
//     age: 22,
//     myAge() {
//         const test = () => {
//             console.log(this);
//         }
//         test()
//     }
// }

// const objB = {
//     age:12,
//     someFunction: objA.myAge
// }



// const objc = {
//     age:13,
//     somecrazy: objB.someFunction
// }
// objc.somecrazy()


// 'use strict'
// const objA = {
//     name: "A",
//     foo:()=>{
//         console.log(this);
//     }
// }
// objA.foo()
// const win = {

// }

// function foo(){
//     const a = this.test;
// }

// foo();



// call
// apply
// bind




// const objA = {
//     name: 'A',
//     //   10, 20 30 40
//     myAge(a, b, c, d) {
//         console.log(this, a, b, c, d);
//         return 'Some value'
//     }
// }

// // objA.myAge(22, 44)

// const objB = {
//     name: 'B',
//     // myAge: objA.myAge
// }
// const objC = {
//     name: 'C',
//     // myAge: objA.myAge
// }
// objA.myAge.call(objB, 1, 2)
// objA.myAge.call(objC, 10, 20)
// objA.myAge.apply(objB, [1, 2])
// const fromBackEnd = [10, 20, 30, 40];
// const str1 = objA.myAge.call(objC, 10, 20, 30, 40);
// const str = objA.myAge.call(objC, ...fromBackEnd);
// console.log(str);
// objA.myAge.apply(objC, fromBackEnd);





// const objA = {
//     name: 'A',
//     myAge(a, b, c, d) {
//         // console.log(arguments);
//         console.log(this, a, b, c, d);
//         return 'Some value'
//     }
// }

// const objB = {
//     name: 'B'
// }

// const objC = {
//     name: 'C'
// }

// const result = objA.myAge.bind(objB);
// const result2 = objA.myAge.bind(objC);
// objA.myAge()
// result(999, 888)
// result2(111, 222, 333, 444)
// result2(111, 222, 333, 444)
// result2(111, 222, 333, 444)

// result()
// result()





// ПЕРЕРВА ДО 21-27






// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//     stones: [{
//             name: 'Emerald',
//             price: 1300,
//             quantity: 4
//         },
//         {
//             name: 'Diamond',
//             price: 2700,
//             quantity: 3
//         },
//         {
//             name: 'Sapphire',
//             price: 1400,
//             quantity: 7
//         },
//         {
//             name: 'Ruby',
//             price: 800,
//             quantity: 2
//         },
//     ],
//     calcTotalPrice(stoneName) {
//         const {
//             price,
//             quantity
//         } = this.stones.find(({
//             name
//         }) => name === stoneName)
//         return price * quantity;
//     },
// };
// const shop2 = {
//     stones: [{
//             name: 'Щебінь',
//             price: 1300,
//             quantity: 4
//         },
//         {
//             name: 'Пісок',
//             price: 2700,
//             quantity: 3
//         },
//     ],
// }
// console.log(chopShop.calcTotalPrice.call(shop2, 'Щебінь'));
// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600


// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//     return this.contacts
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );



// Example 3 - Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
// const calculator = {
//     read(a, b) {
//         this.a = a;
//         this.b = b ?? 0;
//     },
//     add() {
//         return (this.a ?? 0) + (this.b ?? 0);
//     },
//     mult() {
//         return (this.a ?? 1) * (this.b ?? 1);
//     }
// };
// calculator.read(3)
// console.log(calculator.mult());
// // console.log(calculator.add());

// console.log(calculator);


