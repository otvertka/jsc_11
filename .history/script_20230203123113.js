'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// // 1
// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE . Метод slice() возвращает новый массив, содержащий копию части исходного массива.
// //// SYNTAX  arr.slice([begin[, end]])

// console.log(arr.slice(2)); // c, d, e
// console.log(arr);
// console.log(arr.slice(2, 4)); // c, d
// console.log(arr.slice(-2)); // d, e
// console.log(arr.slice(-1)); // LAST ELEM e
// console.log(arr.slice(1, -2)); // b, c

// console.log(arr.slice()); //  ['a', 'b', 'c', 'd', 'e']  Копирует весь массив
// console.log([...arr]); //  ['a', 'b', 'c', 'd', 'e']  Копирует весь массив SPREAD

// // SPLICE Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
// // // SYNTAX  array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// // console.log(arr.splice(2)); // c, d, e
// arr.splice(-1); // удаляет последний элемент в массиве
// console.log(arr); //  ['a', 'b', 'c', 'd']
// arr.splice(1, 2); // удаляет 2 элемента , начиная с 1
// console.log(arr); // [a, d]

// // REVERSE  . Метод reverse() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.
// ///// SYNTAX  array.reverse()

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); //['f', 'g', 'h', 'i', 'j']
// console.log(arr2); // Изменяет основной массив ['f', 'g', 'h', 'i', 'j']

// // CONCAT / Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван,
// //             соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
// // SYNTAX   var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])

// const letters = arr.concat(arr2);
// console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// console.log([...arr, ...arr2]); //  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// // JOIN  Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
// // SYNTAX
// console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

// // LECtion 2 . at
// const arr = [23, 11, 64];
// console.log(arr[0]); // 23
// console.log(arr.at(0)); // 23 at position 0

// // получаем последний элем в массиве
// console.log(arr[arr.length - 1]); // 64
// console.log(arr.slice(-1)[0]); // получаем последний элем в массиве

// console.log(arr.at(-1)); // 64
// console.log('jonas'.at(0)); // j Также работает со строками

// LECT 3. Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
// SYNTAX .arr.forEach(function callback(currentValue, index, array) {
//your iterator
// }[, thisArg]);
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); // Math.abs - удалит знак МИНУС
//   }
// }
// console.log('----FOREACH-----');
// // callback Функция, которая будет вызвана для каждого элемента массива.
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`); // Math.abs - удалит знак МИНУС
//   }
// });
// // 0: function(200)
// // 1: function(450)
// // 2: function(400)
// // ....

// LECT 4 . forEach with Map and Set

// const currencies = new Map([
//   ['USD', 'United States dollar'], // 'key', 'value'
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique); // {'USD', 'GBP', 'EUR'}

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`); // USD: USD ,GBP: GBP ,EUR: EUR
// });
//////////////////////////////////////////////////////////////////////////////////////////////

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // очищаем поля Расходы Прибыль

  movements.forEach(function (mov, i) {
    // Заполняем данные из массива Movements
    // аналог .....  .textContent = 0;
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
    </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

// LECT 10 REDUCE
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((accum, mov) => accum + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

// LECT 8. Computing user names
//  добавляем новое свойство username ='stw' -сокращенные имена в объекты
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    // используем FOREACH,а не Map,
    acc.username = acc.owner // т.к не хотим создавать новый массив, а добавляем новое свойство username ='stw' -сокращенные имена
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

// console.log(accounts);

// console.log(containerMovements.innerHTML);

// LECT5.
//  CHALANGE #1
// [3,5,2,12,7] , [4,1, 15,8,3]
// [9,16, 6, 8,3], [10,5,6,1,4]

// const checkDogs = function (dogsJulia, dogsKate) {
//   // Jonas version:
//   // const dogsJuliaCorrected = dogsJulia.slice();
//   // dogsJuliaCorrected.splice(0,1);
//   // dogsJuliaCorrected.splice(-2);
//   // console.log(dogsJuliaCorrected);

//   const juliaCopy = dogsJulia.slice();
//   const juliaCorrecteded = juliaCopy.splice(1, `${juliaCopy.length}` - 3, -1); // удаляем Первый и Последний элем (средний параметр это длина всей строки - 3 элеммента)

//   const allDogs = juliaCorrecteded.concat(dogsKate); // Объединили 2 массива
//   allDogs.forEach(function (dog, index) {
//     //  callback Функция, которая будет вызвана для каждого элемента массива.
//     if (dog >= 3) {
//       console.log(
//         `Dog number ${index + 1} is an adult and is ${dog} years old`
//       );
//     } else {
//       console.log(
//         `Dog number ${index + 1} is still a puppy 🐶 and is ${dog} years old`
//       );
//     }
//   });
//   console.log(allDogs);
// };
// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

////////////////////////////
// CHALANGE #2
const ages = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = ages.map(age => age * 2);
// console.log(age);
console.log(calcAverageHumanAge(ages));
////////////////////////////

// LECT 7. MAP method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * eurToUsd); // аналог через СТРЕЛОЧНУЮ ф-ю
// // movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });
// console.log(movements);
// console.log(movementsUSD); // 220 , 495, -440, 3300...

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor); // 220 , 495, 440, 3300...

// const movementsDescriptions = movements.map(
//   (mov, index) =>
//     `Movement ${index + 1}: You ${
//       mov > 0 ? 'deposited' : 'withdrew'
//     } ${Math.abs(mov)}`
// );
// // if (mov > 0) {
// //   return `Movement ${index + 1}: You deposited ${mov}`;
// // } else {
// //   return `Movement ${index + 1}: You withdrew ${Math.abs(mov)}`; // Math.abs - удалит знак МИНУС
// // }

// console.log(movementsDescriptions);

// LECT 9 FILTER method
// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
// SYNTAX
// Стрелочная функция
// filter((element) => { ... } )
// filter((element, index) => { ... } )
// filter((element, index, array) => { ... } )

// // Колбэк-функция
// filter(callbackFn)
// filter(callbackFn, thisArg)

// // Встроенная колбэк-функция
// filter(function callbackFn(element) { ... })
// filter(function callbackFn(element, index) { ... })
// filter(function callbackFn(element, index, array){ ... })
// filter(function callbackFn(element, index, array) { ... }, thisArg)

/// ПРИМЕР
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits); // [200, 450, 3000, 70, 1300]

// //аналогично с FOR
// const depositsFOR = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositsFOR.push(mov);
//   }
// }
// console.log(depositsFOR); // [200, 450, 3000, 70, 1300]

// // FILTER method
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals); // [-400, -650, -130]

// LECT 10 . REDUCE method . Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
// SYNTAX  array.reduce(callback[, initialValue])

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (accum, cur, i, arr) {
//   console.log(`Iteration ${i}: ${accum}`);
//   return accum + cur; // callback функция - это 1 параметр, Аккумулируется значение
// }, 0); // 0 -initialValue стартовое значение

// Через СТРЕЛОЧНУЮ ФУНКЦИЮ
const balance = movements.reduce((accum, cur) => accum + cur, 0);
console.log(balance); // 3840

// аналог с FOR
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2); // 3840

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
