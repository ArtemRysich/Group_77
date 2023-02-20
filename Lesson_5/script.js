// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze


// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     }
// }

// console.log(user.languages.React_Native);
// console.log(user['languages']["React Native"]);

// for (const key in user){
// console.log(user.key);
//     console.log(key);
//     console.log(user[key]);
//     // console.log(user[key]);
// }
// const test = 3;
// const test2 = 45;
// const value = 'start'
// const value2 = 'End'
// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     },
//     // [value + value2] : 'some value',
//     result : test + test2,

// };
// console.log(user.result);

// user.age = 29;
// user.age += 1

// user.city = 'VN';
// console.log(user);
// // console.log(user.age);


// delete user.city
// console.log(user);




// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     }
// };


// Object.freeze(user);
// user.asdfwesgfasdfasz = 'dasdgvsdfdafsed';
// user.age = 100;
// console.log(user);





// const user = {
//     name: 'Artem',
//     age: 28,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         "React Native": false
//     }
// };
// // Object.freeze(user);

// const user2 = Object.create(user);
// user2.age = 33
// console.log(user2);
// console.log(user);




// for (const key in user2) {
//     if (user2.hasOwnProperty(key)) {
//         console.log('Own', user2[key]);
//     } else {
//         console.log('All', user2[key]);
//     }
// }

// console.log('All', user2[key]);
// const user = {
//     score: false
// }

// if (user.hasOwnProperty('score')) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// if ('score' in user) {
//     console.log('yes');
// } else {
//     console.log('no');
// }


// if (user.score) {
//     console.log('yes');
// } else {
//     console.log('no');
// }


const user = {
    name: 'Artem',
    age: 28,
    languages: {
        html: false,
        css: false,
        js: true,
        ReactNative: false,
    },
    sayHello() {
        console.log(`My name ${this.name}`);
    },
    iKnow() {
        // const keys = Object.keys(this.languages);
        // const values = Object.values(this.languages);
        // const entries = Object.entries(this.languages);
        const keys = Object.keys(this);
        for(const key of keys){
            if(typeof this[key] === 'function'){
                continue;
            }else{
                console.log(key);
            }
        }
        console.log(keys);
        // console.log(values);
        // console.log(entries);
        // for (const key of keys) {
        //     console.log(key);
        //     if (this.languages[key]) {
        //         // console.log(key);
        //     }
        // }
        // console.log(keys);
        // for(const key in this.languages){
        //     if(this.languages[key])
        //     console.log(key);
        // }
    }
}
user.iKnow()
// const user2 = Object.create(user);
// user2.name = 'Den';
// console.log(user2);
// user2.sayHello()
// user.sayHello()







// Example 1 - Основи об 'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об 'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.skills = {
//     run: true
// }

// user.mood = 'happy';
// user.hobby = 'skydiving';
// // user['premium'] = false;
// const key = 'premium';
// user[key] = false;
// console.log(user);
// for (const key in user) {
//     console.log(user[key]);
// }
// const keys = Object.keys(user);
// for(const key of keys){
//     console.log(user[key]);
// }
// console.log(keys);


// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// let sum = 0;
// const values = Object.values(salaries);
// console.log(values);
// for(const value of values){
//     sum += value
//     // console.log(value);
// }
// console.log(sum);
// for (const key in salaries) {
//     console.log(key);
//     sum += salaries[key]
//     console.log(salaries[key]);
// }
// console.log(sum);





// Example 3 - Масив об 'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об 'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта


// const stones = [{
//         name: 'Смарагд',
//         price: 1300,
//         quantity: 4
//     },
//     {
//         name: 'Діамант',
//         price: 2700,
//         quantity: 3
//     },
//     {
//         name: 'Сапфір',
//         price: 400,
//         quantity: 7
//     },
//     {
//         name: 'Щебінь',
//         price: 200,
//         quantity: 2
//     },
// ];

// function calcTotalPrice(stones, stoneName) {

//     for (const stone of stones) {
//         // if (stone.name === stoneName) {
//         //     result = stone.price * stone.quantity;
//         //     break;
//         // }
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity;
//         }
//         console.log(stone.name);
//     }
//     return 'Empty';
//     // return result;
// }
// console.log(calcTotalPrice(stones, 'asdas'));

// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
// Object.freeze(Transaction)
// // Transaction.DEPOSIT = 'asdnasjkdnjasdjn'
// // console.log(Transaction);
// // /*
// //  * Кожна транзакція це об'єкт із властивостями: id, type та amount
// //  */

// const account = {
//     // Поточний баланс рахунку
//     balance: 0,

//     // Історія транзакцій
//     transactions: [{
//         id: 16,
//         amount: 145,
//         type: 'deposit'
//     }, ],

//     /*
//      * Метод створює та повертає об'єкт транзакції.
//      * Приймає суму та тип транзакції.
//      */
//     createTransaction(amount, type) {
//         return {
//             id: Date.now(),
//             amount,
//             type
//         }
//     },

//     /*
//      * Метод, що відповідає за додавання суми до балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій
//      */
//     deposit(amount) {
//         if (amount <= 0) {
//             return 'Error'
//         }
//         const item = this.createTransaction(amount, Transaction.DEPOSIT)
//         this.balance += amount
//         this.transactions.push(item)
//     },

//     /*
//      * Метод, що відповідає за зняття суми з балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій.
//      *
//      * Якщо amount більше ніж поточний баланс, виводь повідомлення
//      * про те, що зняття такої суми не можливе, недостатньо коштів.
//      */
//     withdraw(amount) {
//         if (amount > this.balance || amount <= 0) {
//             return 'недостатньо коштів';
//         }
//         const item = this.createTransaction(amount, Transaction.WITHDRAW)
//         this.transactions.push(item);
//         this.balance -= amount;

//     },

//     /*
//      * Метод повертає поточний баланс
//      */
//     getBalance() {
//         return this.balance
//     },

//     /*
//      * Метод шукає та повертає об'єкт транзакції по id
//      */
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
//                 return transaction
//             }
//         }
//         return 'Empty';
//     },

//     /*
//      * Метод повертає кількість коштів
//      * певного типу транзакції з усієї історії транзакцій
//      */
//     getTransactionTotal(type) {
//         let sum = 0;
//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 sum += transaction.amount
//             }
//         }

//         return sum;
//     },
// };
// account.deposit(1);
// account.deposit(1231);
// account.deposit(1431);
// account.withdraw(123);
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account);
// // Перерва до 21:15


// const arr = ['a', 'b', 'c']
// const idx = arr.indexOf('asdas');

// function foo() {
//     if (idx === -1) {
//         console.log("немає");
//         return;
//     }
//     arr.splice(idx, 1)
// }
// foo()

// console.log(idx);
// console.log(arr);


// function countup(n) {
//     if (n < 1) {
//       return [];
//     } else {
//   const countArray = countup(n - 1);
//       countArray.push(n);
//       return countArray;
//     }
//   }
//   console.log(countup(5));