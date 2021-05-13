const phro = require("../src/phro");

const tests = [
  {
    n: 420,
    factors: [2, 2, 3, 5, 7]
  },
  {
    n: 1337,
    factors: [7, 191]
  },
  {
    n: 9999,
    factors: [3, 3, 11, 101]
  },
  {
    n: 999999999,
    factors: [3, 3, 3, 3, 37, 333667]
  }
];

tests.forEach(({ n, factors }) => {
  const calculatedFactors = phro(n);
  console.log(`Calculated factors of ${n} are ${calculatedFactors}`);

  const areFactorsEqual = equalsArrays(calculatedFactors, factors);
  console.assert(!areFactorsEqual, {
    errorMsg: `Calculated factors ${calculatedFactors} are not matching with ${factors}`
  });
});

function equalsArrays (a, b) {
  if (a.length !== b.length) { return false; }
  const uniqueValues = new Set([...a, ...b]);
  for (const uniqueValue of uniqueValues) {
    const aValueAmount = a.filter(value => value === uniqueValue).length;
    const bValueAmount = b.filter(value => value === uniqueValue).length;
    if (aValueAmount !== bValueAmount) {
      return false;
    }
  }
  return true;
}
