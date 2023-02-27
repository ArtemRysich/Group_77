// http://xn--80adth0aefm3i.xn--j1amh/%D0%BF%D1%83%D0%B1%D0%BB%D1%96%D0%BA%D0%B0%D1%86%D1%96%D1%8F/21


// function foo(a, b) {
//     console.log(a, b);
// }

// console.log(foo);

// foo(5, 10)


// function foo(callback){
//     console.log("callback",callback);
//     callback(10)
// }

// function logger(value){
//     console.log(value);
// }

// // const numb = 10;
// // console.log(numb);
// console.log('logger',logger);
// foo(logger)

// const arr = [2, 6, 1, 7, 3]

function add(arr) {
    let total = arr[0];

    for (let i = 1; i < arr.length; i += 1) {
        total += arr[i]
    }

    return total
}

// console.log(add(arr));


// function sum(arr) {
//     let total = arr[0];

//     for (let i = 1; i < arr.length; i += 1) {
//         total *= arr[i]
//     }

//     return total
// }

// console.log(sum(arr));

// function division(arr) {
//     let total = arr[0];

//     for (let i = 1; i < arr.length; i += 1) {
//         total /= arr[i]
//     }

//     return total
// }


// function each(arr, callback) {
//     let total = arr[0]
//     for (let i = 1; i < arr.length; i += 1) {
//         total = callback(total, arr[i])
//     }

//     return total
// }
// console.log(each(arr, add));
// console.log(each(arr, sum));
// console.log(each(arr, division));

// function add(first, second) {
//     return first + second
// }

// function sum(first, second) {
//     return first * second
// }

// function division(first, second) {
//     return first / second
// }



// const arr = [2, 6, 1, 7, 3];


// arr.forEach(function (_, idx) {
//     console.log(idx);
// })



// console.log(arr);
//item -ітеруємий елемент
//idx -індекс поточного елемента
//arr - масив який ітеруємо

// arr.forEach(function (item) {
//     // console.log(`work witn number ${item}`);
//     // arr[i] = item * 2
//     // item *= 2
//     // console.log(item);
// })

// console.log(arr);


// const Array = {
//     forEach(){

//     }

// }
// console.log(arr);


// function each(arr, callback) {
//     let total = arr[0];
//     for (let i = 1; i < arr.length; i += 1) {
//         total = callback(total, arr[i])
//     }
//     return total
// }

// console.log(each(arr, add));

// console.log(each(arr, sum));

// console.log(each(arr, division));


// function add(first, second) {
//     return first + second
// }

// function sum(first, second) {
//     return first * second
// }

// function division(first, second) {
//     return first / second
// }

// declaration
// foo()
// function foo(){

// }


// expression
// const boo = function(){

// }
// boo()

// arrow
// arguments - відсутній
// const foo = (...rest) => {
// console.log(rest);

// };
// foo(1, 2, 3, 4, 5)
// foo(1, 2, 3, 4, 21, 532, 5324, 5)





// const arr = [2, 6, 1, 7, 3]
// const add = (first, second) => first + second;
// const multiply = (first, second) => first * second;
// const multiply = (first, second) => {
//     return first * second
// };
// const division = (first, second) => first / second;

// function each(arr, callback) {
//     let total = arr[0];
//     for (let i = 1; i < arr.length; i += 1) {
//         total = callback(total, arr[i])
//     }
//     return total
// }

// console.log(each(arr, add));
// console.log(each(arr, multiply));
// console.log(each(arr, division));

function foo() {

}
const boo = () => {}
const user = {
    userName: 'Test user',
    say() {
        console.log(`Hello ${this.userName}`);
    },
    sayHello: () => {
        console.log(`Hello ${this.userName}`);
    }
}
user.say();
user.sayHello()

// Перерва до 21.20



// Example 1 - Коллбек функції
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
// // Рішення

// function createProduct(obj, callback){
//     const product = {
//         id: Date.now(),
//         ...obj
//     }
//     callback(product)
//     console.log(product);
// }

// function logProduct(obj){
// console.log(`Product ${obj.name}`);
// }

// function logTotalPrice({price, quantity}){
// console.log(`Total price ${price * quantity}`);
// }
// createProduct({
//     name: '🍎',
//     price: 30,
//     quantity: 3
// }, logProduct);
// createProduct({
//     name: '🍋',
//     price: 20,
//     quantity: 5
// }, logTotalPrice);



// Example 2 - Коллбек функції
// Додайте в об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// // Рішення
// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,

//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`TRANSACTION LIMIT ${TRANSACTION_LIMIT}`)
//             return
      
//         } else if (this.balance < amount) {
//             onError('Not enough in the account');
//             return
//       }

//         this.balance -= amount;
//         onSuccess(`Transaction complete ${amount}, balance ${this.balance}.`)
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`TRANSACTION LIMIT ${TRANSACTION_LIMIT}`);
//             return;
//         } else if (amount <= 0) {
//             onError(`Nice try Bro 😂`);
//             return;
//         }

//         this.balance += amount;
//         onSuccess(`Added ${amount}, balance ${this.balance}`)

//     }
// };

// function handleSuccess(message) {
//     console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
//     console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);



// Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

// // Рішення
// function each(array, callback) {
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );


// Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const createProduct = (partialProduct, callback) => {
//     const product = {
//         id: Date.now(),
//         ...partialProduct
//     };
//     callback(product);
// }

// const createProduct = (partialProduct, callback) => callback({
//     id: Date.now(),
//     ...partialProduct
// });


// const logProduct = product => console.log(product.name);
// const logTotalPrice = ({
//     price,
//     quantity
// }) => console.log(price * quantity);

// createProduct({
//     name: '🍎',
//     price: 30,
//     quantity: 3
// }, logProduct);
// createProduct({
//     name: '🍋',
//     price: 20,
//     quantity: 5
// }, logTotalPrice);


// Example 5 - Стрілочні функції
// Виконайте рефакторинг колбеків за допомогою стрілочних функцій.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//         } else if (amount > this.balance) {
//             onError(`Amount can't exceed account balance of ${this.balance} credits`);
//         } else {
//             this.balance -= amount;
//             onSuccess(`Account balance: ${this.balance}`);
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//         } else if (amount <= 0) {
//             onError(`Amount must be more than 0 credits`);
//         } else {
//             this.balance += amount;
//             onSuccess(`Account balance: ${this.balance}`);
//         }
//     },
// };

// const handleSuccess = message => console.log(`✅ Success! ${message}`);


// const handleError = message => console.log(`❌ Error! ${message}`);


// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);



// Example 6 - Інлайн стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

function each(array, callback) {
    const newArr = [];
    for (const el of array) {
        newArr.push(callback(el));
    }
    return newArr;
}

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([64, 49, 36, 25, 16], value =>Math.sqr(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));



// Example 7 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// const logItems = arr => arr.forEach((item, idx) => console.log(`${idx + 1} - ${item}`))
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);


// Example 8 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

const calсulateAverage = (...arr) => {
    let total = 0;
    arr.forEach(value => total += value)

    return total / arr.length
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2