// const arr = [1, 2, 3];
// const [, _, third] = arr;

// console.log(_);
// console.log(third);


// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// };
// const name = 'value';
// const userName = 'Some name'
// const {age: userAge , name : nameUser} = user;

// console.log('age',userAge);
// console.log(name);
// console.log(userName);
// console.log(nameUser);
// const age = user.age;
// const html = user.skills.html;


// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false,
//         cars: {
//             audi: 'A6',
//             bmw: 'x5'
//         }
//     },
//     languages : [{html : true}, {css: false}]
// };

// const {languages : [skillHtml, css]} = user
// const {html} = skillHtml
// console.log(html);
// console.log(css);



// const skills = 123
// const {
//     name,
//     skills: {
//         js,
//         css : sass,
//         cars: {
//             audi
//         }
//     }
// } = user;

// console.log(sass);


// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false,
//         cars: {
//             audi: 'A6',
//             bmw: 'x5'
//         }
//     },
//     languages: [{
//         html: true
//     }, {
//         css: false
//     }]
// };
// for(const {html} of user.languages){
//     console.log(html);
// }



// const users = [{
//     name: 'User1',
//     language: 'html',
//     car: {
//         audi: 'A6',
//         bmw: 'X5'
//     }
// }, {
//     name: 'User2',
//     language: 'css',
//     car: {
//         audi: 'A8',
//         bmw: 'X6'
//     }
// }, {
//     name: 'User3',
//     language: 'js',
//     car: {
//         audi: 'A7'
//     }
// }]
// а чому на кар нема конфлікту?



// for(const {name, car : {audi : car}} of users){
//     console.log(car);
// }
// for (const {
//         name,
//         cars: {
//             audi = "None",
//             bmw = 'None'
//         }
//     } of users) {
//     console.log(audi, bmw);
// }



// function foo({name = "No name", car: {bmw = 'None'} = {}} = {}) {
//     console.log(name,bmw);
//     ///
// }
// foo({
//     name: 'User1',
//     language: 'html',
//     car: {
//         audi: 'A6',
//         bmw: 'X5'
//     }

// })
// foo({
//     name: 'User2',
//     language: 'html',
// })
// foo()


// const arr1 = [12, 22, 3, 14, 45, 16, 57];
// // // spread
// // const min = Math.min(...arr1)
// // console.log(min);
// //    12, 22, 3, 14, 45, 16, 57
// const arr2 = [...arr1];
// // arr2.splice(0, 1)
// console.log(arr1 === arr2);

// // // rest
// const [first, second, ...props] = arr1;
// console.log('props', props);
// console.log(first);
// // for(let prop of props){
// //     prop *= first
// // }
// for (let i = 0; i < props.length; i += 1) {
//     props[i] *= first
// }
// console.log(props);



// function foo(first, second, ...args) {
//     console.log(args);
// }

// foo(1, 2, 3, 4, 5, 6)
// const arr1 = [12, 22, 3, 14, 45, 16, 57];

// function foo(first, second, ...rest) {
//     console.log(arguments);
//     console.log(first, second,rest);
// }
// foo(...arr1)






// Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.


// JS Doc /** */
/**
 * Розраховуємо індекс маси тіла людини
 * @param {Object} obj
 * @returns {Number} BMI
 */
// function calcBMI({
//     weight,
//     height
// }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // // Було
// // console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI({
//     weight: '88,3',
//     height: '1.75'
// }));
// console.log(calcBMI({
//     weight: '68,3',
//     height: '1.65'
// }));
// console.log(calcBMI({
//     weight: '118,3',
//     height: '1.95'
// }));


// Example 2 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.


// /**
//  * 
//  * @param {Object} obj 
//  */
// function printContactsInfo({names, phones}) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }


// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artemis',
//     phones: '89001234567,89001112233,890055566377,890055566300'
// }, );


// Example 3 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({
//     companyName,
//     repairBots,
//     defenceBots
// }) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Було
// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     repairBots: 150,
//     defenceBots: 50
// }));


// Example 4 - Деструктуризація
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.


// function getStockReport({companyName, stock}) {
//     // let total = repairBots + defenceBots;
//     let total = 0
//     for (const value of Object.values(stock)) {
//         total += value;
//     }
//     return `${companyName} has ${total} items in stock`;
// }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         }
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         }
//     })); // "Belacci has 35 item in stock"
// Example 5 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// function createContact(partialContact) {
//     return {
//         id: generateId(),
//         createdAt: new Date(),
//         list :"default",
//         ...partialContact,
//     }
// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// Example 6 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю De, замість firstName та lastName.

// function transformUsername({firstName, lastName, ...props}) {
// return {
//     fullName: `${firstName} ${lastName}`,
//     ...props
// }
// }

// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );
// // {
// //     id: 1,
// //     fullName: 'Jacob Mercer',
// //     email: 'j.mercer@mail.com',
// //     friendCount: 40,
// // }
// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );

// const products = [{
//     name: 'apple',
//     qty: 4,
//     key : "Test"
// }]

// function getAllPropValues(propName) {
//     // Change code below this line
//     let valuesPropName = [];

//     for (const product of products) {
//         for (const key in product) {
//             // console.log(key);
//             if (key === propName) {      //name
//                 console.log(product[key]);
//                 console.log(product.key);
//                 valuesPropName.push();
//                 valuesPropName.push();
//             }
//         }
//     }
//     return valuesPropName;
// }
// getAllPropValues('name')



// const firstBook = {
//     title: "The Last Kingdom",
//     coverImage: "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//     title: firstTitle,
//     coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// const secondBook = {
//     title: "Сон смішної людини",
//     coverImage: "https://via.placeholder.com/640/480",
// };

// const {
//     title: secondTitle,
//     coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480


// const products = [{
//         name: 'Radar',
//         price: 1300,
//         quantity: 4
//     },
//     {
//         name: 'Scanner',
//         price: 2700,
//         quantity: 3
//     },
//     {
//         name: 'Droid',
//         price: 400,
//         quantity: 7
//     },
//     {
//         name: 'Grip',
//         price: 1200,
//         quantity: 9
//     },
// ];


// function getAllPropValues(propName) {
//     const newArr = [];

//     for (const product of products) {
//         propName in product ? newArr.push(product[propName]) : null;

//     }
//     return newArr;
// }
// console.log(getAllPropValues('price'));


// console.log(typeof name);
// const subStr = 1234;
// console.log(subStr);
// console.log(subStr);
let test;
console.log(test);