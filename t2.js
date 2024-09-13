
const fs = require('fs');

// Генератор
function* generator(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

console.time('Generator');
let sumGen = 0;
for (let value of generator(1e7)) {
    sumGen += value;
}
console.timeEnd('Generator');

// Множення матриць
console.time('Matrix multiplication');
let arr1 = Array.from({ length: 1000 }, () => Array.from({ length: 1000 }, () => Math.random()));
let arr2 = Array.from({ length: 1000 }, () => Array.from({ length: 1000 }, () => Math.random()));
let result = Array.from({ length: 1000 }, () => Array(1000).fill(0));

for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
        for (let k = 0; k < 1000; k++) {
            result[i][j] += arr1[i][k] * arr2[k][j];
        }
    }
}
console.timeEnd('Matrix multiplication');

// Сортування
console.time('Array sort');
const arr = Array.from({ length: 1e7 }, () => Math.random());
arr.sort((a, b) => a - b);
console.timeEnd('Array sort');

// Читання великого файлу
console.time('File read');
const data = fs.readFileSync('large_file.txt', 'utf8');
console.timeEnd('File read');
