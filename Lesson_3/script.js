//             0    1       2      3        4
// const array = [1, 'Hello', null, true, [1, 2, 3]];
//             1    2       3      4        5
// console.log(typeof array);
// console.log(Array.isArray(array));
// Array.isArray(array) - повертає true/false в залежності від того чи ми працюємо з масивом чи ні
// console.log(array[3]);
// const first = array[0];
// console.log(first);
// const last = array[array.length - 1];
// console.log(array.length);
// console.log(last);

// for (let i = 0; i < array.length; i += 1) {
//     const item = array[i];
//     if (Array.isArray(item)) {
//         for (let j = 0; j < item.length; j+=1){
//             console.log(item[j]);
//         }
//         continue;
//     }
//     console.log(array[i]);
// }
// const array = [1, 'Hello', null, true, [1, 2, 3]];

// for(let item of array){
//     // console.log(item);
//     if(typeof item === 'string'){
//         item = false
//     }
// }
// console.log('for of',array);

// for(let i = 0; i< array.length; i+=1){
//     if(typeof array[i] === 'string'){
//         array[i] =false;
//     }
// }
// console.log('for',array);



// const array = [1, 'Hello', null, true, [1, 2, 3]];

// let i = 0;
// while (i < array.length) {
//     if (typeof array[i] === 'string') {
//         array[i] = false;
//     }
//     i += 1;
// }

// console.log(array);


// 

// let value = 1;
// let test = value;
// value='hello';

// console.log('value',value);
// console.log('test',test);



// const array = [1, 2, 3, 4, 5];
// const copy = array;
// array.push(6, 7);
// copy.push(8,9)
// console.log(array === copy);
// console.log(array);
// console.log(copy);


// console.log(1 === 1);
// console.log('hello' === 'hello');
// console.log([1, 2, 3] === [1, 2, 3]);


// let number = 1;
// number +=15;
// console.log(number);


// let array = [1, 2, 3];
// // array ='string';

// array.push(4)
// // array.pop();
// // array.length = 10;
// console.log(array);

// Перерва до 21.00


// 
// const str = 'Hello world I`m learning JS';
// const arr = str.split('-');
// console.log(arr);

// // const result = arr.reverse().join(' ')


// const result = str.split(' ').reverse().join(' ')
// console.log(str);
// // console.log(arr);
// console.log(result);





// const arr = ['hello', 'wolrd'];
// const idx = arr.indexOf('wolrd');

// if (arr.indexOf('wolrd') === -1) {
//     console.log("NO");
// } else {
//     console.log('yes');
// }
// console.log(idx);
// console.log(arr.includes('wolrd'));

// if (arr.includes('wolrd')) {
//     console.log('YES');
// } else {
//     console.log('NO');
// }
//      3           4
// const arr = ['hello', 'wolrd'];
// push pop
// arr.push(1, 'a',[1,2])
// arr.pop()
// arr.pop()
// arr.pop()
// console.log(arr);

// shift unshift

//      0   1      2
// arr.unshift(1, 'a', [1, 2])
// // arr.shift();
// // arr.shift();
// // arr.shift();
// // console.log(arr);

// // slice
// const result = arr.slice(1,3);
// console.log('result',result);
// console.log('arr',arr);

// const arr = ['hello', 'world', 'js'];
// // splice

// // arr.splice(1, 1, 'from', 'react', 'node')
// // console.log(arr);
// const idx = arr.indexOf('world');
// const result = arr.splice(idx, 1, 'from')
// console.log(arr);
// console.log('result',result);


// concat

// const arr = [1, 2, 3];
// const arr1 = [4, 5];
// const arr2 = [6, 7];
// const result = arr2.concat(arr, arr1)
// console.log(arr);
// console.log(result);


// -----------------------------------//

// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.
// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-рол');
// console.log(genres.shift());
// genres.unshift('Country', 'Reggae')
// console.log(genres);
// console.log(genres[genres.length - 1]);
// const genres = ['Jazz', 'Blues'];
// genres.splice(genres.length, 0, 'Рок-н-рол');
// console.log(genres.splice(0, 1, 'Country', 'Reggae'));
// console.log(genres);

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = '8 11';
// const arr = values.split(' ');
// const first = Number(arr[0]);
// const last = Number(arr[arr.length - 1]);
// const result = first * last;
// console.log(result);


// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//     console.log(`${i + 1} - ${fruits[i]}`);
// }

// for (let i = 0, n = 1; i < fruits.length; i += 1, n+=1) {
//     console.log(`${n} - ${fruits[i]}`);
// }


// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// let names = 'Jacob,William,Solomon,Artem';
// let phones = '89001234567,89001112233,890055566377';
// names = names.split(',');
// phones = phones.split(',');
// for (let i = 0; i < names.length, i < phones.length; i += 1){
//     console.log(`${names[i]} - ${phones[i]}`);
// }


// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future';

// arr.pop();
// arr.shift();

// const result = arr.join(' ');
// console.log(result);

// const result = string.split(' ').slice(1, -1).join(' ');

// console.log(result);

// const arr = string.split(' ');
// const test = arr.push('1234')
// console.log(test);
// console.log(arr);

// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future';
// const result = string.split('').reverse().join('');
// console.log(result);


// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// langs.sort((a,b) => a.localeCompare(b));
// ['c++', 'haskel', 'javascript', 'php', 'python', 'ruby']
// console.log(langs);

// нажаль наш варіант був не вірний 😥😥😥

// for (let i = 0; i < langs.length; i += 1) {
//     if (langs[0] > langs[i]) {
//         const result = langs.splice(i,1)[0];
//         langs.unshift(result)
//     }
// }
// console.log(langs);


// Вірні варіанти
// 1 метод бульбашка 
// https://www.youtube.com/watch?v=-_0dD2shabQ
// http://xn--80adth0aefm3i.xn--j1amh/%D0%BF%D1%83%D0%B1%D0%BB%D1%96%D0%BA%D0%B0%D1%86%D1%96%D1%8F/21
// for (let i = 0; i < langs.length; i++) {
//     for (let j = 0; j < langs.length; j++) {
//         if (langs[j] > langs[j + 1]) {
//             const item = langs[j];
//             langs[j] = langs[j + 1];
//             langs[j + 1] = item;
//         }
//     }
// }
// console.log(langs);


// Сучасний варіант
// langs.sort((a,b) => a.localeCompare(b))
// console.log(langs);







// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [94, 2, 17, 94, 1, 23, 37];
// let min = numbers[0]; // undefined
// for (const value of numbers) {
//     if (value < min) {
//         min = value;
//     }
// }
// console.log(min); // 1

// const arr = [1, 2, 3] + [4, 5];
// console.log(arr);
// let x = 7;
// let y = null;
// let a = 9;

// console.log(a || x && y);