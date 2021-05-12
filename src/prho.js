const getPrimeFactorization = n => {
  let N = BigInt(n);

  const primeFactors = [];

  let divisor = calculateDivisor(N);
  if (!divisor) return [N];

  while (true) {
    primeFactors.push(divisor);
    N = N / divisor;
    divisor = calculateDivisor(N);
    if (!divisor) {
      primeFactors.push(N);
      break;
    }
  }

  return primeFactors.sort((a, b) => a > b || -(a < b));

  function calculateDivisor (N) {
    if (N === 1) return false;
    if (N % 2n === 0n) return N === 2n ? false : 2n;
    if (isPrime(N)) return false;

    let x = 2n;
    let y = 2n;
    let divisor = 1n;

    while (divisor === 1n) {
      x = g(x);
      y = g(g(x));
      divisor = gcd(abs(x, y), N);
    }

    return divisor === n ? false : divisor;

    function g (x) {
      return x ** 2n - 1n;
    }

    function isPrime (p) {
      for (let i = 2n; i * i <= p; i++) {
        if (p % i === 0n) return false;
      }
      return true;
    }

    function gcd (a, b) {
      let A = typeof a === "bigint" ? a : BigInt(a);
      let B = typeof b === "bigint" ? b : BigInt(b);

      if (A < B) {
        [A, B] = [B, A];
      }

      while (A % B !== 0n) {
        const r = A % B;
        A = B;
        B = r;
      }

      return B;
    }

    function abs (a, b) {
      let A = typeof a === "bigint" ? a : BigInt(a);
      let B = typeof b === "bigint" ? b : BigInt(b);

      const diff = A - B;
      if (diff < 0n) {
        return diff * -1n;
      }
      return diff;
    }
  }
};

console.log(getPrimeFactorization(3000));

module.exports = getPrimeFactorization;
