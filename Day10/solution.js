/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn, calls) {
const result = calls[0].forEach(element => {
    console.log(element+element)
});
};

const result = once(
  (fn = (a, b, c) => a + b + c),
  (calls = [
    [1, 2, 3],
    [2, 3, 6],
  ])
);