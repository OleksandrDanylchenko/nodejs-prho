const phro = require('../src/index.js');

describe('matching numbers to their prime factors', () => {
  it('420 factors are [2, 2, 3, 5, 7]', () => {
    expect.assertions(1);
    const calculatedFactors = phro(420n);
    expect(calculatedFactors).toStrictEqual([2n, 2n, 3n, 5n, 7n]);
  });

  it('1337 factors are [7, 191]', () => {
    expect.assertions(1);
    const calculatedFactors = phro(1337n);
    expect(calculatedFactors).toStrictEqual([7n, 191n]);
  });

  it('9999 factors are [3, 3, 11, 101]', () => {
    expect.assertions(1);
    const calculatedFactors = phro(9999n);
    expect(calculatedFactors).toStrictEqual([3n, 3n, 11n, 101n]);
  });

  it('999999999 factors are [3, 3, 3, 3, 37, 333667]', () => {
    expect.assertions(1);
    const calculatedFactors = phro(999999999n);
    expect(calculatedFactors).toStrictEqual([3n, 3n, 3n, 3n, 37n, 333667n]);
  });

  it('999999999999999999999999999999 factors are [3, 3, 3, 7, 11, 13, 31, 37, 41, 211, 241, 271, 2161, 9091, 2906161]',
    () => {
      expect.assertions(1);
      const calculatedFactors = phro(999999999999999999999999999999n);
      expect(calculatedFactors)
        .toStrictEqual([
          3n, 3n, 3n, 7n, 11n, 13n, 31n, 37n, 41n, 211n, 241n, 271n, 2161n, 9091n, 2906161n
        ]);
    });
});
