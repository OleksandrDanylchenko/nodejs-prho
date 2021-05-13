# nodejs-prho
Pollard's rho algorithm implemented in Node.js

## Documentation
Wiki - https://en.wikipedia.org/wiki/Pollard%27s_rho_algorithm

## Inspiration
Codepen - https://codepen.io/michaelsknobloch/pen/Kzqeyb

## Reasoning
Solved infinite loops, which can happen on some numbers in https://www.npmjs.com/package/prho package, with recursive approach from https://codepen.io/michaelsknobloch/pen/Kzqeyb and usage of different functions to find factors to prevent stucking.

## Installation
```console
$ npm install prho
```
```console
$ yarn add nodejs-prho
```

## Usage
```js
const prho = require('nodejs-prho')
const factors = prho(420)
// => [2 , 2 , 3 , 5 , 7]
```
