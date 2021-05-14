const phro = require('../src');
const testCases = require('./testCases.js');

testCases.forEach(({ n, factors }) => {
  const calculatedFactors = phro(n);
  console.log(`Calculated factors of ${n} are ${calculatedFactors}`);

  const areFactorsEqual = equalsArrays(calculatedFactors, factors);
  console.assert(areFactorsEqual, `Calculated factors ${calculatedFactors} are not matching with ${factors}`);
});

function equalsArrays(a, b) {
  if (a.length !== b.length) { return false; }
  const uniqueValues = new Set([...a, ...b]);
  for (const uniqueValue of uniqueValues) {
    const aValueAmount = a.filter((value) => value === uniqueValue).length;
    const bValueAmount = b.filter((value) => value === uniqueValue).length;
    if (aValueAmount !== bValueAmount) {
      return false;
    }
  }
  return true;
}
