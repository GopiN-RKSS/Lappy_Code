// let promise = new Promise((resolve, reject) => {
//   let a = 10;
//   if (a % 2 === 0) {
//     resolve("success");
//   } else {
//     reject("failure");
//   }
// });

// promise
//   .then((value) => console.log(value))
//     .catch((error) => console.log(error));

// async function display() {
//   let promise = new Promise((resolve, reject) => {
//     let a = 10;
//     if (a % 2 === 0) {
//       resolve("success");
//     } else {
//       reject("failure");
//     }
//   });
//   let result = await promise;
//   console.log(result);
// }
// display();

// setTimeout(() => {
//   console.log("ramya");
// }, 3000);

// setInterval(() => {
//   console.log("ramya");
// }, 3000);

// let person = { name: "ramya" };
// Object.freeze(person);

// person.name = "rachana";
// console.log(person);

let person1 = { name: "ramya" };
Object.seal(person1);

person1.name = "rachana";
console.log(person1);
