const _ = require('lodash');
const underscore = require('underscore');

console.time('for loop');
let sum = 0;
for (let i = 0; i < 1e7; i++) {
    sum += i;
}
console.timeEnd('for loop');

console.time('map loop');
const arr = Array.from({ length: 1e7 }, (_, i) => i);
let sumMap = 0;
arr.map((num) => {
    sumMap += num;
});
console.timeEnd('map loop');

// Lodash sum
console.time('Lodash sum');
let sumLodash = _.sum(arr);
console.timeEnd('Lodash sum');

// Underscore sum
console.time('Underscore sum');
let sumUnderscore = underscore.reduce(arr, (sum, num) => sum + num, 0);
console.timeEnd('Underscore sum');
