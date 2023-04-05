// // Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// // Not found
// const people1 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Jhon',
//         know: ['Alex']
//     },
// ]
// //Not found
// const people2 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: []
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];

// // jhon
// const people3 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];


// --------------------------------------------------------------------------------------------------------//

// // Представлений масив фільмів (films) кожен елемент масиву являється об'єктом в якого є назва фільму та масив з жанрами до яких він відноситься, але в масиві (genreIDs) тільки ID цих фільмів.
// // Потрібно в кожен об'єкт додати ключ genreNames який буде масивом з назвами жанрів до яких цей фільм відноситься. Після чого відрендерити список фільмів як наведено в прикладі нижче (Expected result), якщо в списку жанрів більш ніж 2 фільми тоді рендеримо назву перших двох жанрів, а всі інші замінюємо на "Others".
// // Співвідношення ID жанру та назви жанру знаходиться в об'єкті genresInfo.

// // //Object example
// // {
// //     title: "Interceptor",
// //     genreIDs: [
// //         28,
// //         53,
// //         12,
// //     ],
// //     genreNames: [
// //         "Action",
// //         "Thriller",
// //         "Adventure"
// //     ]
// // }


// ////  Expected result
// // Films list:
// // 1. 'Interceptor: Action, Thriller, Others.'
// // 2. 'Fantastic Beasts: The Secrets of Dumbledore: Fantasy, Adventure, Others.'
// // 3. 'Last Seen Alive: Action, Thriller.'
// // 4. 'Jurassic World Dominion: Science Fiction, Action, Others.'

// const films = [{
//         title: "Interceptor",
//         genreIDs: [
//             28,
//             53,
//             12,
//         ],
//     },
//     {
//         title: "Fantastic Beasts: The Secrets of Dumbledore",
//         genreIDs: [
//             14,
//             12,
//             28
//         ],
//     },
//     {
//         title: "Last Seen Alive",
//         genreIDs: [
//             28,
//             53
//         ],
//     },
//     {
//         title: "Jurassic World Dominion",
//         genreIDs: [
//             878,
//             28,
//             12,
//             53
//         ],
//     },
// ];



// const genresInfo = {
//     genres: [{
//         id: 28,
//         name: "Action"
//     }, {
//         id: 12,
//         name: "Adventure"
//     }, {
//         id: 14,
//         name: "Fantasy"
//     }, {
//         id: 878,
//         name: "Science Fiction"
//     }, {
//         id: 53,
//         name: "Thriller"
//     }, {
//         id: 10752,
//         name: "War"
//     }, {
//         id: 37,
//         name: "Western"
//     }]
// }

// //     .




// --------------------------------------------------------------------------------------------------------//


// // Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// // name приватна властивість (ім'я, успадковується від User),
// // surname приватна властивість (прізвище, успадковується від User),
// // year (рік вступу до вузу).
// // Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// // Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// // Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// // Приклад ініціалізації екземпляру класа:
// // const student = new Student('Петрик', 'Пяточкин', 2019);

// // student.getFullName(); //поверне 'Петрик Пяточкин'
// // student.getCourse();   //поверне 3 (третій курс)