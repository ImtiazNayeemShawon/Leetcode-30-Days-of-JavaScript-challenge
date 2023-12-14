/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
  }
  
  // Example usage:
  let t = Date.now();
  sleep(100).then(() => {
    console.log(Date.now() - t); // Output: 100
  });
  