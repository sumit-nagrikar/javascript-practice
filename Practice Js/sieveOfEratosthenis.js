function sieveOfEratosthenes(n) {
  // create array
  let isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime

  // loop through every element and make non-prime false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  //collect all prime numbers
  let primes = [];
  for (let i = 0; i < isPrime.length; i++) {
    if (isPrime[i]) primes.push(i);
  }
  return primes;
}

sieveOfEratosthenes(12);
