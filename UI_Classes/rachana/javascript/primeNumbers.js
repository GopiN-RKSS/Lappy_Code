// prime numbers
// function test_prime(n) {
//   if (n === 1) {
//     return false;
//   } else if (n === 2) {
//     return true;
//   } else {
//     for (var x = 2; x < n; x++) {
//       if (n % x === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// }
// console.log(test_prime(7));

function fibonacci(num) {
  var num1 = 0;
  var num2 = 1;
  var sum;
  var i = 0;
  for (i = 0; i < num; i++) {
    sum = num1 + num + 2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
}
console.log(fibonacci(5));

// let arrayList = [1, 2, 3, 4, 3, 21, 0];
// let max = arrayList[0];
// for (let i = 1; i < arrayList.length; i++) {
//   if (arrayList[i] > max) {
//     max = arrayList[i];
//   }
// }
// console.log(max);

// let arrayList = [1, 2, 3, 4, 3, 21];
// let min = arrayList[0];
// for (let i = 1; i < arrayList.length; i++) {
//   if (arrayList[i] < min) {
//     min = arrayList[i];
//   }
// }
// console.log(min);
