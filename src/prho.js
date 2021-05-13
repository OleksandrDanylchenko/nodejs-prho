function getPrimeFactorization(n) {
  const N = BigInt(n);
  const primeFactors = [];
  factorNumber(N);
  return primeFactors.sort((a, b) => a > b || -(a < b));

  function factorNumber(n) {
    if (n === 1n) {
      return;
    }
    if (isPrime(n)) {
      primeFactors.push(n);
      return;
    }

    const divisor = rho(n, f);
    factorNumber(divisor);
    factorNumber(n / divisor);

    function rho(n, func) {
      let x = 2n;
      let y = 2n;
      let divisor = 1n;

      if (n % 2n === 0n) {
        return 2n;
      }

      do {
        x = func(x) % n;
        y = func(func(y)) % n;
        divisor = gcd(abs(x, y), n);
      } while (divisor === 1n);

      if (divisor === n) {
        // Need to switch from f func to g func to avoid recursion stuck for some numbers
        return rho(n, g);
      }

      return divisor;
    }

    function isPrime(n) {
      for (let i = 2n; i * i <= n; i++) {
        if (n % i === 0n) return false;
      }
      return true;
    }

    function abs(a, b) {
      const A = typeof a === 'bigint' ? a : BigInt(a);
      const B = typeof b === 'bigint' ? b : BigInt(b);

      const diff = A - B;
      if (diff < 0n) {
        return diff * -1n;
      }
      return diff;
    }

    function gcd(a, b) {
      let A = typeof a === 'bigint' ? a : BigInt(a);
      let B = typeof b === 'bigint' ? b : BigInt(b);

      if (A === 0n) {
        return B;
      }
      if (B === 0n) {
        return A;
      }
      if (A === B) {
        return A;
      }
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

    function f(x) {
      return x ** 2n - 1n;
    }

    function g(x) {
      return x ** 2n + 1n;
    }
  }
}

module.exports = getPrimeFactorization;
