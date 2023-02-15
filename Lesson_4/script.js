// https://codeguida.com/post/199
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from?retiredLocale=uk





const arr = [1, 2, 3, 4];
const arr1 = [5, 6, 7, 8];
const arr2 = [8, 9, 10, 11]

// sum(arr)
// sum(arr1)
// sum(arr2)

// function sum(item){
//     for (let i = 0; i < item.length; i += 1) {
//         item[i] = item[i] * 2;
//     }
//     console.log(item);
// }


// declaration
// function name(){

// }

// expression
// sum(arr)
// sum(arr1)
// sum(arr2)
// const sum = function (item) {
//     for (let i = 0; i < item.length; i += 1) {
//         item[i] = item[i] * 2;
//     }
//     console.log(item);
// }



// function add() {
//     let sum = 0;
//     // const arr = Array.from(arguments);
//     const arr = [...arguments]

//     console.log(arguments);
//     console.log(arr);
//     // for (let i = 0; i < arguments.length; i += 1) {
//     //     sum += arguments[i]
//     // }
//     for(const value of arguments){
//         sum +=value
//     }
//     console.log(sum);
//     // console.log(val + val1 + val2 + val3 + val4 + val5);
// }
// add(1, 2, 3, 4, 5, 6)
// add(1, 2, 3, 4)
// add(1, 2, 3, 4, 5);







// function add() {
//     let sum = 0;
//     for (const value of arguments) {
//         sum += value;

//     }
//     return sum;

// }
// const response = add(1, 2, 3, 4, 5, 6);
// console.log(response);
// // add(1, 2, 3, 4)
// // add(1, 2, 3, 4, 5);




// function largeNumber() {
//     let sum = 0;
//     for (const value of arguments) {
//         sum += value;
//         if (sum > 10) {
//             return true;
//         }
//     }
//     return false;

// }
// const response = largeNumber(1, 2, 3);
// console.log(response); //6 false
// console.log(largeNumber(1, 2, 3, 4)); //10 false
// console.log(largeNumber(1, 2, 3, 4, 5, 6)); // 15 true



// function add(val, val1 = 0) {
//     console.log("val", val);
//     console.log("val1", val1);
//     return val + val1

// }
// console.log(add(3, 4));
// console.log(add(5, 12));
// console.log(add(11));

// let a = 10

// function foo() {
//     a = 15
// }
// foo()
// console.log(a);



// let a = 10

// function foo() {
//     let a = 15;
//     a = 45;
// }
// foo()
// console.log(a);


// let a = 10

// function foo() {
//     a = 45;
//     let a = 15;
// }
// foo()
// console.log(a);



// let a = 10

// function foo(a) {
//     a = 45
// }
// foo(a)
// console.log(a);

// const test = [1, 2, 3];

// function foo(arr) {
//     arr.splice(0, 1)
// }

// foo(test)
// console.log(test);


// function createString(name, year) {
//     // const result = add(year);
//     return `${name} years ${add(year)}`
// }
// console.log(createString('Mango', [1, 2, 3]));

// function add(arr) {
//     let sum = 0;
//     for (const num of arr) {
//         sum += num;
//     }
//     return sum;
// }


// function foo() {
//     boo()
// }
// foo()

// function boo() {
//     foo()
// }


// Перерва до 21.05





















// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після крапки;

// function calcBMI(weight, height) {
//     weight = Number(weight.replace(',', '.'));
//     height = Number(height.replace(',', '.'));

//     // return Number((weight / Math.pow(height, 2)).toFixed(1));
//     return Number((weight / height ** 2).toFixed(1))
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// const num = 2.56
// console.log(num.toFixed(1));


// Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// function min(a, b) {
//     // if (a > b) {
//     //     return b;
//     // }

//     // return a;

//     return a > b ? b : a
// }




// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1






// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//     dimensions = dimensions.split(' ');

//     // const first = Number(dimensions[0])
//     // const second = Number(dimensions[1])

//     // return first * second;

//     return Number(dimensions[0]) * Number(dimensions[1])
//     // console.log(second);
// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('46 11'));
// console.log(getRectArea('8 112'));

// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 - "Poly" виведе 3 - Ajax.

// function logItems(items) {
//     for (let i = 0, num = 1; i< items.length; i+=1, num+=1){
//         console.log(`${num} - ${items[i]}`);
//     }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Example 5 - Логування контактів
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {
//     names = names.split(',')
//     phones = phones.split(',')
//     console.log(phones);
//     for (let i = 0; i < names.length, i < phones.length; i += 1) {
//         console.log(`${names[i]} - ${phones[i]}`);
//     }
// }



const arr11 = ['a','b','c'];
const idx = arr11.indexOf('a');
if(!!~idx){
    console.log('YES');
}else{
    console.log('NO');
}
console.log(idx);
console.log(!!-(idx + 1));
console.log(!!~idx);
console.log(Boolean(~idx));


// printContactsInfo(
//     'Jacob,William,Solomon,Artem',
//     '89001234567,89001112233,890055566377,890055566300'
// );


// Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

// function findLargestNumber() {
//     // const arr = Array.from(arguments)
//     const arr = [...arguments];
//     let max = arr[0];

//     for (const num of arr) {
//         if (num > max) {
//             max = num
//         }
//     }

//     return max
// }

// console.log(findLargestNumber(2, 17, 94, 1, 23, 37)); // 94
// console.log(findLargestNumber(49, 4, 7, 83, 12)); // 83



// function findLargestNumber() {
//     let max;
//     for (const num of arguments) {
//         if (typeof num === 'number') {
//             max = num;
//             break;
//         }
//     }
//     for (const num of arguments) {
//         if (typeof num === 'number') {
//             if (num > max) {
//                 max = num
//             }
//         } else {
//             max = findLargestNumber(...num)
//             //[1, 143], 5, 7
//             max = findLargestNumber(...num)// 143
//             //[1, 143] => 1,143
//             max = findLargestNumber(...num)
//         }
//     }
//     return max
// }
// console.log(findLargestNumber([[1, 143], 5, 7], 6, 7, 899, 88, 123))



// Example 7 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage() {
//     let total = 0;
//     for (const num of arguments) {
//         total += num;
//     }

//     return total / arguments.length
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2


// Example 8 - Форматування часу
// Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.


// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     minutes = minutes % 60;
//   return `${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')}`
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"




// Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(course) {
    if (courses.includes(course)) {
        return 'Ви вже маєте такий курс';
    }

    courses.push(course)
}



// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse('CSS')); // 'Ви вже маєте такий курс'

// function removeCourse(course) {
//     if (courses.includes(course)) {
//         const idx = courses.indexOf(course)
//         courses.splice(idx, 1);

//         return
//     }

//     return "Курс із таким ім'ям не знайдено"
// }
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
// !!~courses.indexOf(course); 0 => false
//        -1 => true
// -(0 + 1) -1 => true
//  -(-1 + 1) -0 => false
//    courses.includes(course)
// !!  === Boolean()
// console.log(!!~1);

// function removeCourse(course) {
//     const idx = courses.indexOf(course);
//     if (!!~idx) {
//         courses.splice(idx, 1);
//         return;
//     }
//     return "Курс із таким ім'ям не знайдено"
// }


// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse('Vue'));; // 'Курс із таким ім'ям не знайдено'




// function updateCourse(oldCourse, newCourse) {
//     const idx = courses.indexOf(oldCourse);
//     if (!!~idx) {
//         courses.splice(idx, 1, newCourse);
//         return;
//     }

//     return "Курс із таким ім'ям не знайдено";

// }




// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(updateCourse('Express', 'NestJS'));


