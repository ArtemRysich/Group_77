// if(){

// }else{

// }

// if(4>5){ //4>5 => false
//     console.log('true');
// }else{
//     console.log('false');
// }
// const value = 7

// if (value > 5) { // 7> 5 => true
//     console.log('4>5');
// } else if (value > 6) {
//     console.log('4>6');
// } else if (value > 3) {
//     console.log('4>3');
// } else {
//     console.log('else');
// }

// const value = '';
// if (value) { //0 => false
//     console.log('if');
// } else {
//     console.log('else');
// }


// condition ? exmple 1 : example 2


// const result = 7 > 6 ? 'більше' : 'меньше';

// let result;

// if (7 > 6) {
//     result = 'більше';
// } else {
//     result = 'меньше';
// }

// console.log(result);



// const result = 10 + 5;
// console.log(result);
// console.log(testValue);
// const value = 5;
// if (value === 1) {
//     console.log('one');
// } else if (value === 2) {
//     console.log('two');
// } else if (value === 5) {
//     console.log('Good result');
// } else {
//     console.log("default")
// }

// switch (value) {
//     case 1:
//         console.log('one');
//         break
//     case 2:
//         console.log('two');
//         break
//     case 5:
//         console.log('Good result');
//         break
//     default:
//         console.log("default")
// }

// const a = 'name';
// switch (a) {
//     case 'age':
//         console.log('one');
//         break;
//     case 'name':
//         console.log('two');
//         break;
//     case 'city':
//         console.log('Good result');
//         break;
//     default:
//         console.log("default")
// }


// const let

// var

// 1 Глобальна
// 2 Блочна
// 3 Функціональна


// 
// Блочна
// {

// }


// Функціональна
// function(){

// }



// const a = 15;

// if (true) {
//     console.log(a);
// }

// if(true){
//     var b = 22;
// }
// console.log(b);

// function foo() {
//     console.log(a);
//     var b = 22;
// }
// console.log(b);


// в глобальні
// let a = 15;

// if (true) {
//     // Блочна
//     let a = 1;
//     a = 25;
// }

// console.log(a);

// глобальна
// let a = 15;

// if (true) {
//     // звернення до ініціалізації
//     a = 25;
//     let a = 1;
// }

// console.log(a);

// глобальна
// let a = 10;


// if (true) {
//     // блочна
//     a = 15;
//     if (true) {
//         a = 25
//     }
// }
// console.log(a);

// if(true){
//     // блочна
//     let a = 15;
//     if(true){
//         a = 25
//     }
// }
// console.log(a);

// if(true){
//     // блочна
//     let a = 15;
//     if(true){
//         a = 25
//     }
//     console.log(a);
// }


// let a = 15;


// if (true) {
//     // блочна
//     a = 15;
//     if (true) {
//         let a = 25
//     }
// }
// console.log(a);

// let b = 25;

// if (true) {
//     // блочна
//     let a = 15;
//     b = 44;
//     if (true) {
//         a = 25
//         b = 31
//     }
//     a = 44
//     console.log(b);
// }
// console.log(a);





// for (let i = 0; i < 5; i+=1){
//     console.log(i);
// }
//  12345
// const str = 'hello world';
//          //  01234
// for(let i = 0; i < str.length; i+=1){
//     console.log(str[i]); //0,1,2,3,4,5,6
// }



// while(true){
//     console.log('hello world');
// }


// const str = 'hello world';


// let i = 0;
// while (i < str.length) {
//     if(str[i] === 'w'){
//         console.log('yes');
//         break;
//     }
//     console.log('no', str[i]);
//     i += 1;
// }

// const str = 'hello world';
// let i = 15;
// do {
//     if (str[i] === 'w') {
//         console.log('yes');
//         break;
//     }
//     console.log('no');
//     i += 1;
// } while (i < str.length)





// Example 1 - Введення користувача та розгалуження

// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const value = prompt("Яка офіційна назва JavaScript?");
// if (value === 'ECMAScript') {
//     alert("Правильно!")
// } else {
//     alert("Не знаєте? ECMAScript!")
// }


// Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 1;
// let timestring;

// if (minutes) {
//     console.log(`${hours} г. ${minutes}хв.`);
// } else {
//     console.log(`${hours} г.`);
// }



// Example 3 - Розгалуження
// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь в консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

// const userInput = Number(prompt('Введіть число'));
// console.log( typeof userInput);
// if (!userInput) { // 0 =>! + false => true
//     console.log("Це нуль");
// } else if (userInput > 0) {
//     console.log("Це позитивне число");
// } else {
//     console.log("Це негативне число");
// }

// const userInput = Number(prompt('Введіть число'));
// if (userInput % 2) {
//     console.log("Не парне");
// } else {
//     console.log('Парне');
// }


// console.log(userInput % 2 ? "Не парне" : 'Парне');

// if (0) { //=> false

// } else {
//     console.log('в мене нуль');
// }

// if (!0) { //=> false
//     console.log('в мене нуль');
// }


// Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.

const a = 120;
const b = 180;
// if (a > 100 && b > 100) {
//     if (a > b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// } else {
//     console.log(b + 512);
// }
// if (a > 100 && b > 100) {
//     console.log(a > b ? a : b);
// } else {
//     console.log(b + 512);
// }

// Example 5 - Форматування посилання (endsWith)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';
// // // Пиши код нижче за цей рядок
// if(!link.endsWith('/')){
//     link +='/';
// }
// // // Пиши код вище за цей рядок
// console.log(link);



// Example 6 - Форматування посилання (includes та логічне «І»)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". Використовуй конструкцію if...else.

// let link = 'https://somesite.com/about';
// // // Пиши код нижче за цей рядок
// if(!link.endsWith('/') && link.includes("my-site")){
//     link +='/';
// }
// // // Пиши код вище за цей рядок
// console.log(link);



// Example 7 - Форматування посилання (тернарний оператор)
// Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

// let link = 'https://my-site.com/about';
// // if (link.includes('my-site') && !link.endsWith('/')) {
// //     link += '/';
// // }
// console.log(link.includes('my-site') && !link.endsWith('/') ? link += '/' : link);



// Example 8 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.

// Якщо значення змінної hours:

// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"
// const hours = 19;

// if (hours < 17) {
//     console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//     console.log("Expires");
// } else {
//     console.log('Overdue');
// }


// Example 9 - Дедлайн здачі проекту (if...else)
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"
// const daysUntilDeadline = 2;
// // // Пиши код нижче за цей рядок
// if (!daysUntilDeadline) {
//     console.log("Сьогодні");
// } else if (daysUntilDeadline === 1) {
//     console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//     console.log("Післязавтра");
// } else {
//     console.log("Дата у майбутньому");
// }



// Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи switch.

// const daysUntilDeadline = -1;

// // if (daysUntilDeadline === 0) {
// //   console.log('Сьогодні');
// // } else if (daysUntilDeadline === 1) {
// //   console.log('Завтра');
// // } else if (daysUntilDeadline === 2) {
// //   console.log('Післязавтра');
// // } else {
// //   console.log('Дата у майбутньому');
// // }

// if (daysUntilDeadline >= 0) {
//     switch (daysUntilDeadline) {
//         case 0:
//             console.log('Сьогодні');
//             break;
//         case 1:
//             console.log('Завтра');
//             break;
//         case 2:
//             console.log('Післязавтра');
//             break;
//         default:
//             console.log('Дата у майбутньому');
//     }
// } else {
//     console.log("Друже ти проспав");
// }



// Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 20;
// !min => 20 => true => !true=> false
// // 1 ''
// // 2 0
// // 3 null
// // 4 undefined
// // 5 NaN
// // 6 false


// const max = 100;
// const min = 20;

// for (let i = min; i >= min && i <= max; i += 1) {
//     if (!(25 % 5)) { //25 % 5 => 0 => false => !false => true
//         console.log(i);
//     }
// }






// Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:
// Якщо введено пароль "Я адмін", то вивести рядок "Доброго дня!"
// Інакше виводити рядок "Невірний пароль"

// const login = prompt("Тут має бути ЛОГІН");
// if(!login){
//   console.log("Скасовано");  
// }else if(login === "Адмін"){
//     const password = prompt("Тут має бути ПАРОЛЬ")
//     console.log(password === "Я адмін" ? "Доброго дня!" : "Невірний пароль");
// }else{
//     console.log("Я вас не знаю");
// }
// console.log(login);
// const password = prompt()


// function add(a, b) {
//     const result = a + b;
//     return result;
// }

// console.log(add(2, 4));

// const str = 'М\'який'
// console.log(str);