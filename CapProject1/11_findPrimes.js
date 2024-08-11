/*  function checkPrime(n) {
  if (n <= 1) {
    return false;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
} 

function findPrimes(n) {
  let primes = [];
  for (let i = 0; i <= n; i++) {
    if (checkPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}
 */

function findPrimes(n) {
  //n=4
  let primes = [];
  for (let num = 2; num <= n; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
        primes.push(num);
      }
  }
  return primes;
}

console.log(findPrimes(101));
