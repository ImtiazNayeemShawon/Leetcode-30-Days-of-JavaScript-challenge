// /**
//  * @param {Function} fn
//  * @return {Function}
//  */
// var once = function (fn, calls) {
//  return calls[0].map((data) => {
//     fn(data)
//   });
// };

// const result = once(
//   (fn = (a, b, c) => a + b + c),
//   (calls = [
//     [1, 2, 3],
//     [2, 3, 6],
//   ])
// );

const number = [10, 20, 30];
let sum = 0;

number.map((data, index) => {
  sum = data + data;
});

console.log(sum);
