/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  try {
    const result1 = await promise1;
    const result2 = await promise2;
    return result1 + result2;
  } catch (error) {
    console.error(error);
    throw error; // Propagate the error
  }
};

// Example usage:
const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2)
  .then((sum) => console.log(sum)) // Output: 7
  .catch((error) => console.error(error));
