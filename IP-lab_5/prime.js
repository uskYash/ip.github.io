function* generatePrimes(limit) {
    if (limit >= 2) {
      yield 2;
    }
  
    for (let number = 3; number <= limit; number += 2) {
      let isPrime = true;
  
      for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        yield number;
      }
    }
  }
  
  // Usage example
  const limit = 50;
  const primeGenerator = generatePrimes(limit);
  
  for (const prime of primeGenerator) {
    console.log(prime);
  }  