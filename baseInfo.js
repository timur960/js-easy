'use strict'
// baseInfo.js
// Вступ до JavaScript
// JS — це мова програмування, яка використовується в основному у вебі.
// Дає можливість "оживляти" сторінки, працювати з даними, писати логіку для користувача.

// ----------------------
// Типи даних у JavaScript
// ----------------------
// Примітивні типи: string, number, boolean, null, undefined, bigint, symbol
// Складні типи: object, array, function

// ----------------------
// Змінні (let / const)
// ----------------------

// var myOldVar = "Стара змінна"; // var — стара форма оголошення змінних (уникати використання)
let myAge = 25;          // let — можна перевизначити
const myName = "Roman";  // const — не можна перевизначити

// console.log("Моє імʼя:", myName);
// console.log("Мій вік:", myAge);

// Перевизначимо myAge
// myAge = 26;
// console.log("name:", myName.length);

// ----------------------
// if / else
// ----------------------

// let myAge = 25; 1 дорівнює це присвоєння
// 2 дорівнює це порівняння. myAge == "25"
// 3 дорівнює це суворе порівняння (різні типи даних не рівні) myAge === "25"

// if (myAge === 25) {
//   console.log("Вам 25 років.");
// } else {
//   console.log("Вам не 25 років.");
// }

// if (myAge > 18) {
//   console.log("Ви повнолітній.");
// } else {
//   console.log("Ви неповнолітній.");
// }

// ----------------------
// Цикл for
// ----------------------

// Виведемо числа від 1 до 5
// for (let i = 1; i <= 5; i++) {
//   console.log("Число:", i);
// }

// for (let i = 0; i < myName.length; i++) {
//   console.log("Число:", i);
// }

// const arrayOfStrings = ["apple", "banana", "orange"];

// for (let i = 0; i < arrayOfNumbers.length; i++) {
//   console.log("Number:", arrayOfNumbers[i]);
// }

const arrayOfNumbers = [10, 20, 30, 40, 50];

function add(arrayOfNumbers) {
  let sum = 0

  return sum
}

// add(arrayOfNumbers)


console.log(add(arrayOfNumbers)); // Виведе: 150
// console.log(add(10, 20)); // Виведе: 30