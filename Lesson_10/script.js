// const user = {
//     name: "test user a",
//     age: 18,
//     sayHello() {
//         console.log(this.name);
//     },
//     showAge() {
//         console.log(` My age ${this.age}`);
//     }
// }


// const user1 = Object.create(user);
// user1.name = 'test user 1'
// user1.sayHello();
// console.log('user1',user1);
// const user2 = Object.create(user);
// user2.showAge();
// console.log('user2',user2);






// const user = {
//     name: "test user a",
//     age: 33,
//     sayHello() {
//         console.log(this.name);
//     },
// }


// const admin = Object.create(user)
// admin.showAge = function(){
//     console.log(this.age);
// }


// const practiceOwner = Object.create(admin);

// practiceOwner.name = 'Owner';
// // practiceOwner.showAge()

// // practiceOwner.sayHello()
// console.log(practiceOwner);
// user.showAge()




class User {
    static counter = 0;
    static addUser() {
        // User.counter +=1;
        this.counter += 1;
        console.log(`Number of users ${this.counter}`);
    }
    #location
    constructor({
        name,
        email,
        age = 18,
        location = 'World',
        password
    } = {}) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.#location = location;
        this.password = password;
        User.addUser()
    }
    sayHello() {
        console.log(this.name);
    }

    #getEmail() {
        console.log(this.email);
    }
    get locale() {
        return this.#location
    }
    set locale(city) {
        const value = prompt('Enter password');
        this.#getEmail()
        if (value === this.password) {
            this.#location = city
            console.log(this.#location);
        } else {
            console.log('Хацкер ? 😱');
        }
    }

}


class Avatar extends User {
    // constructor({
    //     name,
    //     email,
    //     location,
    //     password,
    //     age,
    //     damage
    // }) {
    //     super({
    //         name,
    //         email,
    //         location,
    //         password,
    //         age
    //     })
    //     this.damage = damage;
    // }
    constructor({damage, ...args}) {
        super(args)
        this.damage = damage;
    }

    attack() {
        console.log(`Attack with damage ${this.damage}`);
    }
}

class Zombi extends User {
    constructor({
        name,
        email,
        location,
        password,
        age,
        poison
    }) {
        super({
            name,
            email,
            location,
            password,
            age
        })
        this.poison = poison
    }

    toBite(){
        console.log(`Bite with ${this.poison}`);
    }
}


class Dog extends Zombi {
    constructor(){
        super()
    }
}

const test = new Avatar({
    name: 'User A',
    email: 'test@gmail.com',
    location: 'Lviv',
    password: "qwerty111",
    damage: 700
});
const test1 = new Zombi({
    name: 'User B',
    email: 'gmail@gmail.com',
    age: 99,
    poison: 500
});
console.log(test);
console.log(test1);
// // test.#getEmail()
// // test.sayHello()

// // console.log(test.locale);
// // test.locale = 'Dnipro';

// const test2 = new User({
//     name: 'User C',
//     email: 'gmail1@gmail.com',
//     age: 92
// });



// Перерва до 21.35

// Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
// class Blogger {
//     constructor({
//         name,
//         age,
//         numberOfPosts,
//         topics
//     }) {
//         this.email = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }
//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`
//     }
//     updatePostCount(value){
//         this.numberOfPosts +=value
//     }
// }


// const mango = new Blogger({
//     name: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//     name: 'poly@mail.com',
//     age: 19,
//     numberOfPosts: 17,
//     topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts



// Example 2 - Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// Додай методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
// -(x + 1)
// 0 => false
// -1 => true
// -(0 + 1) => -1 => true
// -(-1 + 1) => -0 => false
// console.log(!!0); Boolean(0)
// class Storage {
//     constructor(items) {
//         this.items = items
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(item) {
//         if (!this.items.includes(item)) {
//             this.items.push(item)
//             return
//         }

//         console.log('Такий товар вже є');
//     }
//     removeItem(item) {
//         const idx = this.items.indexOf(item);
//         if (this.items.includes(item)) { //!!~idx
//             this.items.splice(idx, 1);
//         }

//     }
// }
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// class User {
//     #login;
//     #email;
//     constructor({
//         login,
//         email
//     }) {
//         this.#login = login;
//         this.#email = email;
//     }
//     get login() {
//         return this.#login;
//     }
//     set login(newLogin) {
//         if(this.#login !== newLogin){
//             this.#login = newLogin;
//         }
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         if(this.#email !== newEmail){
//             this.#email = newEmail;
//         }
//     }
// }


// const mango = new User({
//     #login: 'Mango',
//     email: 'mango@dog.woof',
// });
// mongo.login = 'a'
// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//     login: 'Poly',
//     email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie



// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updateNote(text, newPriority).

class Notes {
    static Priority = {
        LOW: 'low',
        NORMAL: 'normal',
        HIGH: 'high'
    }
    constructor(note) {
        this.items = note;
    }
    addNote(note) {
        const inArr = this.items.some(({
            text
        }) => text === note.text)
        if (!inArr) {
            this.items.push(note)
        }
    }
    removeNote(text) {
        const idx = this.items.findIndex(({
            text: noteText
        }) => noteText === text);
        if (!!~idx) { //idx !== -1  idx > -1
            this.items.splice(idx, 1)
        }
    }
    updateNote(text, newPriority) {
        const idx = this.items.findIndex(({
            text: noteText
        }) => noteText === text);
        if (!!~idx) { //idx !== -1  idx > -1
            this.items[idx].priority = newPriority
        }
    }
}

const myNotes = new Notes([]);

myNotes.addNote({
    text: 'Моя перша замітка',
    priority: Notes.Priority.LOW
});
myNotes.addNote({
    text: ['Моя перша замітка'],
    priority: Notes.Priority.LOW
});
myNotes.addNote({
    text: 'Моя перша замітка',
    priority: Notes.Priority.LOW
});
console.log(myNotes.items);

myNotes.addNote({
    text: 'Моя друга замітка',
    priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote('Моя перша замітка');
console.log(myNotes.items);

myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
console.log(myNotes.items);




// Самостійне опрацювання
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');