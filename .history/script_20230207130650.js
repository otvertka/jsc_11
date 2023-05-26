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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // очищаем поля Расходы Прибыль

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    // Заполняем данные из массива Movements
    // аналог .....  .textContent = 0;
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
    </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

// LECT 10 REDUCE
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};
// calcDisplayBalance(account1.movements);

// LECT 11 The Magic of Chaining Methods

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  // Проценты с депозита (Interest)
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1; // исключили , где процент меньше 1
    })
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

// const eurToUsd = 1.1;
// console.log(movements);
// // PIPELINE трубопровод
// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositUSD);

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

// Функция обновления страницы
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Dislpay balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// LOGIN
// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting .Предотвращаем перезагрузку страницы
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  ); // Проверяем Имя из созд. ранее свойства username (js, jd,...)
  console.log(currentAccount);

  // используем optional chaining для проверки наличия такого Аккаунта
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0] // вставляем первое слово от полного Имени (Jonas)
    }`;
    containerApp.style.opacity = 100; // открываем Видимость в styles, если пин подошёл

    // Очищаем поля ввода
    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur(); // заблюрить курсор

    // обновляем интерфейс страницы
    updateUI(currentAccount);
  }
});

// Перевод денег на другой счёт
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); // предотвращаем перезапуск страницы
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  // console.log(amount, receiverAcc);
  // проверяем переводимая сумма больше 0? проверяем хватает ли денег для перевода? проверяем, чтобы не перевести себе деньги
  // receiverAcc проверяем, есть ли пользователь с таким имененм, куда переводим деньги?
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    // Осуществляем перевод (отнимаем из текущего аккаунта , добавляем деньги для получателя)
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // обновляем интерфейс страницы
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  // если один из Депозитов больше 10% ,
  if (amount > 0 && currentAccount.movements.some(mov => amount * 0.1)) {
    // Добавляем в текущий аккаунт депозит
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  // очищаем поле ввода
  inputLoanAmount.value = '';
});

// LECT 13 . FindIndex. Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.
// SYNTAX arr.findIndex(callback[, thisArg])

// Удаление аккаунта.
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // если совпали вводимые логин и пароль,
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Удаляем аккаунт с подходящим индексом
    accounts.splice(index, 1);

    // Скрываем отображение информации
    containerApp.style.opacity = 0;
  }
  // очищаем поля ввода подтверждения Логина и Пароля
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false; // По умолчанию несортированный массив
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted); // true - Сортировка
  sorted = !sorted; // при нажатии сортируем\не сортируем
});
// console.log(accounts);

// console.log(containerMovements.innerHTML);

// LECT5.
//  CHALLENGE #1
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
// CHALANGE #2 Мой вариант
// const ages = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = ages.map(function (age) {
//   if (age <= 2) {
//     return age * 2;
//   } else {
//     return age * 4 + 16;
//   }
// });

// console.log(calcAverageHumanAge);
// const adultDogs = calcAverageHumanAge.filter(humanAge => humanAge > 18);

// console.log(adultDogs);
// const averageAge =
//   adultDogs.reduce((accum, cur) => accum + cur, 0) / adultDogs.length;
// console.log(averageAge);

// ///// ////////// ///////// //     CHALANGE # 2  JONAS VERS!!!!!
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   const average = adults.reduce((accum, age) => accum + age, 0) / adults.length;
//   // аналогично можно так сразу делить  2, 3 (2+3)/2 = 2.5 === 2/2 +3/2 = 2.5;
//   // const averag = adults.reduce((acc, age, i, arr) => acc +age/ arr.length, 0);
//   console.log(average);
//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(age);

// const calcAverageHumanAge = ages => {
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age, i, arr) => {
//       console.log(age);
//       return age >= 18;
//     })
//     .reduce(accum, age,i, arr ) => {
//       console.log(arr);
//       return accum + age, 0/ ages.length;
//     }
//   // console.log(ages);
// };

// CHALLENGE #3 . Цепочка методов. Переписали в виде стрелочной функции
// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((accum, age, i, arr) => accum + age / arr.length, 0); // сразу делим на длину строки

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// // accumulator -> SNOWBALL
// // const balance = movements.reduce(function (accum, cur, i, arr) {
// //   console.log(`Iteration ${i}: ${accum}`);
// //   return accum + cur; // callback функция - это 1 параметр, Аккумулируется значение
// // }, 0); // 0 -initialValue стартовое значение

// // Через СТРЕЛОЧНУЮ ФУНКЦИЮ
// const balance = movements.reduce((accum, cur) => accum + cur, 0);
// console.log(balance); // 3840

// // аналог с FOR
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2); // 3840

// // Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

// LECT 12 . FIND .Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается undefined.
// SYNTAX:  arr.find(callback[, thisArg])
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements); // -400
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account); // {owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222, username: 'jd'}

// Через FOR
// console.log(accounts);
// let arra = [];
// for (let account of accounts) {
//   if (account.owner === 'Jonas Schmedtmann') {
//     arra.push(account);
//   }
// }
// console.log(arra);

// LECT 14 .Some and every method. Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
// SYNTAX  arr.some(callback(element[, index[, array]])[, thisArg]).
// Примечание: Обратите внимание: метод возвращает false при любом условии для пустого массива.

// Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
// SYNTAX arr.every(callback(currentValue[, index[, array]])[, thisArg])

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// // equality (равенство)
// console.log(movements.includes(-130)); // true
// //SOME: CONDITION
// console.log(movements.some(mov => mov > 0)); // true
// const anyDeposits = movements.some(mov => mov > 1500);

// console.log(anyDeposits);

// // EVERY . Поиск аккаунта со ВСЕМИ положит. числами
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov >= 0)); // true, все положительные

// // separate (отдельная) функция callback для депозитов
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit)); // true
// console.log(movements.every(deposit)); // false
// console.log(movements.filter(deposit)); // [200, 450, 3000, 70, 1300]
// /////

// LECT 15 . flat(плоский) and flatMap . Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
// SYNTAX var newArray = arr.flat(depth); depth Необязательный .На сколько уровней вложенности уменьшается мерность исходного массива. По умолчанию 1.

// Метод flatMap() сначала применяет функцию к каждому элементу, а затем преобразует полученный результат в плоскую структуру и помещает в новый массив. Это идентично map функции, с последующим применением функции flat с параметром depth ( глубина ) равным 1, но flatMap часто бывает полезным, так как работает немного более эффективно.
// SYNTAX . var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
// возвращает элемент для new_array
// }[, thisArg])

// // const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

// const accauntMovements = accounts.map(acc => acc.movements);
// console.log(accauntMovements);
// const allMovements = accauntMovements.flat();
// console.log(allMovements); // (29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
// // Складываем все числа вместе
// const overalBalance = allMovements.reduce((acc, mov) => (acc += mov), 0);
// console.log(overalBalance); // 17840

// flat Аналогично одной цепочкой:
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => (acc += mov), 0);
console.log(overalBalance); // 17840

// flatMAp . Применяется только на 1 уровень вложенности
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => (acc += mov), 0);
console.log(overalBalance2);

// LECT 16. Sorting Arrays. Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив. Сортировка не обязательно устойчива (англ.). Порядок сортировки по умолчанию соответствует порядку кодовых точек Unicode.
// SYNTAX arr.sort([compareFunction]) .

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
// return < 0, A,B   (keep order) сохранить порядок
// return > 0, B, A  (switch order) поменять порядок

// ascending (по возрастанию)
// movements.sort((a, b) => {

//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// аналог
movements.sort((a, b) => a - b);
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]

// descending (по убыванию)
// movements.sort((a, b) => {
//   if (a < b) return 1;
//   if (b < a) return -1;
// });
// аналог
movements.sort((a, b) => b - a);
console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]

// LECT 17 . More Ways of Creating and Filling Arrays.
// Метод fill() заполняет все элементы массива от начального до конечного индексов одним значением.
// SYNTAX        arr.fill(value[, start = 0[, end = this.length]])

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Пустой массив + fill method
const x = new Array(7);
console.log(x);

x.fill(1, 3, 5);
x.fill(1);
console.log(x); // [empty × 3, 1, 1, empty × 2]

arr.fill(23, 4, 6);
console.log(arr); // [1, 2, 3, 4, 23, 23, 7]
