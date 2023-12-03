// solution for vs code runner
var compose = function (functions, x) {
  return functions.reverse().forEach((fn) => console.log((x = fn(x))));
};
const result = compose((functions = [x => 10 * x, x => 10 * x, x => 10 * x]), (x = 1));

// solution for submitting in leetcode
var compose = function (functions) {
    return function (x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};