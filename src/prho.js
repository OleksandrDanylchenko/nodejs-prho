const getPrimeFactorization = n => {
  let initN = BigInt(n);
  let N = BigInt(initN);

  const primeFactors = [];

  let divisor = null;
  while (true) {
    divisor = calculateDivisor(N);
    if (isPrime(divisor)) {
      primeFactors.push(divisor);
      const sum = primeFactors.reduce((num, val) => num * val);
      if (sum === initN) {
        break;
      } else {
        N = N / divisor;
      }
    } else {
      N = N / divisor;
    }
  }

  return primeFactors.sort((a, b) => a > b || -(a < b));

  function calculateDivisor (N) {
    if (N === 1n) return N;
    if (N % 2n === 0n) return 2n;
    if (isPrime(N)) return N;

    let x = 2n;
    let y = 2n;
    let divisor = 1n;

    while (divisor === 1n) {
      x = f(x, N);
      y = f(f(y, N), N);
      divisor = gcd(abs(x, y), N);
    }

    return divisor === N ? N : divisor;

    function f (x, n) {
      return (x ** 2n + 1n) % n;
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

  function isPrime (p) {
    for (let i = 2n; i * i <= p; i++) {
      if (p % i === 0n) return false;
    }
    return true;
  }
};

console.time("Factor");
console.log(getPrimeFactorization(9569565));
console.timeEnd("Factor");

module.exports = getPrimeFactorization;
