// function declaration or function statement

// function Example() {
//
//   console.log("Ramya Rachana");
// }

// Example();

// function expression

// let a = function xyz() {
//   console.log("hiii");
// };
// a();

// let b = function () {
//   console.log("hello");
// };
// b();

// (function () {
//   var a = 10;
//   console.log("hello world", a);
// })();

// function sum(a, b) {
//   return a + b;
// }
// let res = sum(10, 5);
// console.log(res);

// function Example(a, ...rest) {
//   console.log(...rest);
// }
// Example(1, 2, 3, 6, 7, 8, 9);

// arrow function
// let a = () => {
//   console.log("hiiiiiiiiii");
// };
// a();

// call-back function

function rachana() {
  console.log("rachana");
}

function ramya(msg, rachana) {
  console.log(msg, "ramya");
  rachana();
}

ramya("hi", rachana);
