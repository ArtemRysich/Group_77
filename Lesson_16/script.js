// const instruments = [
//   {
//     id: 1,
//     img: "https://static.dnipro-m.ua/cache/products/4878/catalog_origin_269592.jpg",
//     name: "Шуруповерт",
//     price: 150,
//     description:
//       "Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями.",
//   },
//   {
//     id: 2,
//     img: "https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg",
//     name: "Перфоратор",
//     price: 3948,
//     description:
//       "Перфоратор бочковий Dnipro-M ВН-20 використовується для виконання широкого спектру будівельних і ремонтних робіт: буріння та свердління отворів, розмішування будівельних сумішей, демонтажу і т.д.",
//   },
//   {
//     id: 3,
//     img: "https://static.dnipro-m.ua/cache/products/1248/catalog_origin_257336.jpg",
//     name: "Шліфмашина",
//     price: 1299,
//     description:
//       "Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування.",
//   },
//   {
//     id: 4,
//     img: "https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",
//     name: "Пила",
//     price: 11049,
//     description:
//       "Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі.",
//   },
//   {
//     id: 5,
//     img: "https://static.dnipro-m.ua/cache/products/2300/catalog_origin_261037.jpg",
//     name: "Рівень",
//     price: 897,
//     description:
//       "Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації.",
//   },
//   {
//     id: 6,
//     img: "https://static.dnipro-m.ua/cache/products/6566/catalog_origin_270253.jpg",
//     name: "Тример",
//     price: 3699,
//     description:
//       "Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм.",
//   },
//   {
//     id: 7,
//     img: "https://static.dnipro-m.ua/cache/products/6483/catalog_origin_270227.jpg",
//     name: "Мотокоса",
//     price: 11049,
//     description:
//       "Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2.",
//   },
//   {
//     id: 8,
//     img: "https://static.dnipro-m.ua/cache/products/2741/catalog_origin_271775.jpg",
//     name: "Генератор",
//     price: 10890,
//     description:
//       "Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос.",
//   },
// ];

// setItem - додати значення
// getItem
// removeItem
// clear
// localStorage.setItem('TEST_KEY',JSON.stringify([1,2,3,4]))

// localStorage.setItem('TEST_KEY_1',JSON.stringify({name: 'hello'}))
// console.log(JSON.parse(localStorage.getItem('TEST_KEY_1')));
// // localStorage.removeItem('TEST_KEY_1')
// localStorage.clear()

const local = document.querySelector(".js-local");
const session = document.querySelector(".js-session");

local.addEventListener("click", () => {
  localStorage.setItem("local", "test local");
});

session.addEventListener("click", () => {
  sessionStorage.setItem("session", "test session");
});
