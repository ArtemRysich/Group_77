// https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii
// https://www.jscamp.app/ru/docs/javascript25/
// https://uk.wikipedia.org/wiki/%D0%A7%D0%B0%D1%81_Unix

// console.log('start');
// setTimeout(()=>{console.log('setTimeout');},0)
// console.log('finish');
// console.time('test async')

// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// for (let i = 0; i < 100000; i += 1) {
//     console.log('value', i);
// }

// console.timeEnd('test async')

// const date = new Date();
// console.log(date);

// const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

// const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
// console.log(namesOfMonth[date.getMonth()]);

// console.log(arrDay[date.getDay()]);
// console.log('new Date()',date);
// const currentDate = Date.now()

// console.log('Date.now()',currentDate);

// const box = document.querySelector(".js-box");
// const titleTimer = document.querySelector(".js-timer");
// let counter = 11;
// setTimeout(() => {
//   box.style.display = "block";

//   const id = setInterval(() => {
//     counter -= 1;
//     titleTimer.textContent = counter;

//     if (!counter) {
//       //!counter counter === 0
//       clearInterval(id);
//       titleTimer.textContent = "X";
//       titleTimer.addEventListener("click", onClick);
//       // box.style.display = "none";
//     }
//   }, 1000);

// }, 5000);

// function onClick() {
//   box.style.display = "none";
// }

const day = document.querySelector(".date-day");
const date = document.querySelector(".date");
const month = document.querySelector(".date-month");
const year = document.querySelector(".date-year");
const digitalClock = document.querySelector(".digital-clock");
const arrowSecond = document.querySelector(".clock-seconds__arrow");
const arrowMinutes = document.querySelector(".clock-minutes__arrow");
const arrowHours = document.querySelector(".clock-hours__arrow");

const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

const arrDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
];

setInterval(() => {
  const currentTime = new Date();
  const currentDay = arrDay[currentTime.getDay()];
  const currentDate = currentTime.getDate();
  const currentMonth = namesOfMonth[currentTime.getMonth()];
  const currentYear = currentTime.getFullYear();
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();

  const changeSeconds = (360 / 60) * currentSeconds;
  const changeMinutes = (360 / 60) * currentMinutes;
  const changeHours =(360 / 12) * currentHour + (360 / 12 / 60) * currentMinutes;

  console.log(changeSeconds);
  const formatTime = `${currentHour
    .toString()
    .padStart(2, "0")} : ${currentMinutes
    .toString()
    .padStart(2, "0")} : ${currentSeconds.toString().padStart(2, "0")}`;

  day.textContent = currentDay;
  date.textContent = currentDate;
  month.textContent = currentMonth;
  year.textContent = currentYear;

  digitalClock.textContent = `Поточний час: ${formatTime}`;

  arrowSecond.style.transform = `rotate(${changeSeconds}deg)`;
  arrowMinutes.style.transform = `rotate(${changeMinutes}deg)`;
  arrowHours.style.transform = `rotate(${changeHours}deg)`;
}, 1000);

// // console.log(currentYear);

// const currentTime = new Date();


// const targetDate = new Date('4/11/2023')

// setInterval(()=>{
//     const currentDate = new Date();

//     console.log(convertMs(targetDate - currentDate));
// },1000)


// function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
  
//     // Remaining days
//     const days = Math.floor(ms / day);
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
//     return { days, hours, minutes, seconds };
//   }