function createCounter(initialValue) {
    let counter = initialValue;
  
    function increment() {
      return counter++;
    }
  
    return increment;
  }
  
  // Example usage:
  const myCounter = createCounter(10);
  
  console.log(myCounter()); 
  