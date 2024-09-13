const nj = require('numjs');
const crypto = require('crypto');


console.time('String concatenation in JS');
let s = '';
for (let i = 0; i < 100000; i++) {
    s += 'a';
}
console.timeEnd('String concatenation in JS');

const fs = require('fs');

console.time('File reading in JS');
const text = fs.readFileSync('large_file.txt', 'utf-8');
const wordCount = text.split(/\s+/).length;
console.timeEnd('File reading in JS');




console.time('Matrix multiplication in JS');
const A = nj.random([500, 500]);
const B = nj.random([500, 500]);
const C = nj.dot(A, B);
console.timeEnd('Matrix multiplication in JS');



console.time('JSON serialization in JS');
const data = Array.from({length: 100000}, (_, i) => ({id: i, name: `name_${i}`}));
const jsonStr = JSON.stringify(data);
console.timeEnd('JSON serialization in JS');

console.time('JSON deserialization in JS');
const dataLoaded = JSON.parse(jsonStr);
console.timeEnd('JSON deserialization in JS');


console.time('Element search in JS');
const arr = Array.from({length: 1_000_000}, () => Math.floor(Math.random() * 1e7));
const target = arr[arr.length - 1];
const found = arr.includes(target);
console.timeEnd('Element search in JS');

console.time('Sorting in JS');
const arr2 = Array.from({length: 1_000_000}, () => Math.random());
arr2.sort();
console.timeEnd('Sorting in JS');

console.time('Hash generation in JS');
const data2 = 'a'.repeat(1000000);
const hashResult = crypto.createHash('sha256').update(data2).digest('hex');
console.timeEnd('Hash generation in JS');

console.time('Date manipulation in JS');
let date = new Date();
for (let i = 0; i < 1_000_000; i++) {
    date.setDate(date.getDate() + 1);
}
console.timeEnd('Date manipulation in JS');




