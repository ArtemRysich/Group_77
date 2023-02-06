// https://github.com/ArtemRysich/Group_77


// https://developer.mozilla.org/en-US/
// https://uk.javascript.info/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing


// console.log('Hello world');
// let value;
// console.log(value);
// value = 1;
// console.log(value);

// console.log(3 === "3"); // Number vs String
// console.log(3 == "3");  // Number vs Number

//  
// 1 undefined => false
// 2 null      => false
// 3 0         => false
// 4 NaN       => false
// 5 clg       => false
// 6 false     => false

// console.log(Boolean("false")); => 
// console.log(!!"false");

// var


// const a = 10;
// // a = 15
// let b; // undefined
// b = 15;
// b = '15';
// console.log(b);
// console.log(a);
// var a = 10;
// console.log(a);



// Примітивні типи даних - імутабельні типи даних
// 1 Number
// 2 String
// 3 Boolean
// 4 Undefined
// 5 Null


// const a = 10;

// a = a + 2;
// a = 12;
// a += 2





// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = grapes - apples;
// console.log(diff)



// Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students = students + 50;
// students += 50;
// console.log(students);


// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);


// Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.5;

// console.log(Math.ceil(value)); // Округлить завжди в сторону більшого значення
// console.log(Math.floor(value)); // Округлить завжди в сторону меньшого значення
// console.log(Math.round(value)); // Округлить завжди по математичному принципу

// Example 5 - Шаблонні рядки
// Склади речення за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const name = "Artem"
// const age = 28;

// const result = name + ' years ' + age;
// console.log(result);

//  String являється домінуючим типом даних
// const c = 10 + 22 + "11" + 44;
// console.log(typeof c);

// const a = 2 * "3";
// console.log(typeof a);


// const b = 6 - '3';
// console.log(typeof b);


// const value = 10;
// const value_2 = '15';

// const result = value - Number(value_2);


















// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = companyName + " " + 'has' + " " + (repairBots + defenceBots) + " bots in stock ";
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"




// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';
// weight = Number(weight.replace(',','.'));
// // weight = Number(weight)

// height = Number(height);
// // height = +height;
// // Boolean
// // !!

// // console.log(typeof height);

// // const bmi = weight / Math.pow(height, 2);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// const bmi = Number((weight / height ** 2).toFixed(1));
// console.log(bmi); // 28.8


// Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4);  //true

// console.log(10 >= '7'); // true
// // https://unicode-table.com/en/#0031
// // console.log('2' >= '2');  

// console.log('2' < '12'); '2' < '1' 32 < 31

// console.log('4' == 4); 4 == 4 // true

// console.log('6' === 6); // false

// console.log('false' === false); //false

// true => 1
// false => 0
// console.log(1 == true);//true

// console.log(1 === true); // false

// console.log('0' == false); // true

// console.log('0' === false); // false

// console.log('Papaya' < 'papaya'); // true "P" < 'p' 50 < 70

// console.log('Papaya' === 'papaya'); 50 === 70


// console.log('papaya' < 'papaub'); //false
// p 70
// a 61
// p 70
// a 61
// y  79      u 75

// console.log(undefined == null); 0 0

// console.log(undefined === null);


// Example 8 - Логічні оператори
// Яким буде результат виразів?
// && І
// Повертає перший false або останій true
// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && 'kiwi');//kiwi
// true   true   true
// console.log(true && 0 && 'kiwi'); // 0


// || АБО 
// Або повертає перше значення яке приведеться до true або останій false

// console.log(true || 3); //true

// console.log( 3 ||true || 4); 3
// true
// console.log('sdafgh' || false || 7); //'sdafgh'

// console.log(null || 2 || undefined); //2
// false   true
// console.log((1 && null && 2) > 0);
// // 1 && null && 2 => null
// // 1 => true
// // null  => false

// // 2
// // console.log((null) > 0);
// // console.log(Number(null)); => 0
// // 0 > 0 false

// console.log(null || (2 && 3) || 4);

// 1 null => false 
// 2 || АБО ШУКАЄ ПЕРШИЙ TRUE
// 3 2 && 3
// 4 2 => true
// 5 3 => true
// 3 || 4 => 3



// Example 9 - Значення за замовчуванням та оператор нульового злиття (??)


//  || АБО він працює на 6 значень які повертають false
// 1 undefined => false
// 2 null      => false
// 3 0         => false
// 4 NaN       => false
// 5 ''       => false
// 6 false     => false


// ?? він працює на 2 значення null undefined

// const incomingValue = 5;
// // const result = incomingValue + Number('a11')// 16
// let test = 0;
// console.log(test);
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
// const value = test ?? 'some value';
// console.log(value);
// console.log(result);
// const defaultValue = 10;
// const value = result || defaultValue;
// console.log(value);