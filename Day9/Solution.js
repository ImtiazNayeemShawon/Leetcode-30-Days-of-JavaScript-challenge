/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
// main function
var argumentsLength = function (...args) {
  return args.length;
};
// function parameter
argumentsLength(1, 2, 3);
