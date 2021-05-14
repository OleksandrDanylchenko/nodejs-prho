const phro = require('../src/index.js');

test('420 factors are [2, 2, 3, 5, 7]', () => {
  const calculatedFactors = phro(420);
  expect(calculatedFactors).toEqual([2n, 2n, 3n, 5n, 7n]);
});
