export const jsArraySnippets = [
  { method: 'new Array()', example: `const arr = new Array(3); // [ <3 empty items> ]` },
  { method: 'at()', example: `const arr = [10, 20, 30];
arr.at(-1); // 30` },
  { method: 'concat()', example: `const a = [1];
const b = [2];
const result = a.concat(b); // [1, 2]` },
  { method: 'constructor', example: `const arr = [];
console.log(arr.constructor === Array); // true` },
  { method: 'copyWithin()', example: `const arr = [1, 2, 3, 4];
arr.copyWithin(1, 2); // [1, 3, 4, 4]` },
  { method: 'entries()', example: `const arr = ['a', 'b'];
for (let [index, val] of arr.entries()) {
  console.log(index, val);
}` },
  { method: 'every()', example: `const arr = [2, 4, 6];
arr.every(n => n % 2 === 0); // true` },
  { method: 'fill()', example: `const arr = [1, 2, 3];
arr.fill(0); // [0, 0, 0]` },
  { method: 'filter()', example: `const arr = [1, 2, 3];
arr.filter(n => n > 1); // [2, 3]` },
  { method: 'find()', example: `const arr = [1, 2, 3];
arr.find(n => n > 1); // 2` },
  { method: 'findIndex()', example: `const arr = [1, 2, 3];
arr.findIndex(n => n > 1); // 1` },
  { method: 'findLast()', example: `const arr = [1, 2, 3];
arr.findLast(n => n > 1); // 3` },
  { method: 'findLastIndex()', example: `const arr = [1, 2, 3];
arr.findLastIndex(n => n > 1); // 2` },
  { method: 'flat()', example: `const arr = [1, [2, [3]]];
arr.flat(2); // [1, 2, 3]` },
  { method: 'flatMap()', example: `const arr = [1, 2];
arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4]` },
  { method: 'forEach()', example: `const arr = [1, 2];
arr.forEach(x => console.log(x));` },
  { method: 'from()', example: `Array.from('abc'); // ['a', 'b', 'c']` },
  { method: 'includes()', example: `const arr = [1, 2];
arr.includes(2); // true` },
  { method: 'indexOf()', example: `const arr = [1, 2];
arr.indexOf(2); // 1` },
  { method: 'isArray()', example: `Array.isArray([1, 2]); // true` },
  { method: 'join()', example: `const arr = ["a", "b"];
arr.join("-"); // "a-b"` },
  { method: 'keys()', example: `const arr = ['a', 'b'];
const keys = [...arr.keys()]; // [0, 1]` },
  { method: 'lastIndexOf()', example: `const arr = [1, 2, 1];
arr.lastIndexOf(1); // 2` },
  { method: 'length', example: `const arr = [1, 2, 3];
arr.length; // 3` },
  { method: 'map()', example: `const arr = [1, 2];
arr.map(x => x * 2); // [2, 4]` },
  { method: 'of()', example: `Array.of(1, 2); // [1, 2]` },
  { method: 'pop()', example: `const arr = [1, 2];
arr.pop(); // returns 2` },
  { method: 'prototype', example: `Array.prototype.push.call({}, 1); // works on array-like objects` },
  { method: 'push()', example: `const arr = [1];
arr.push(2); // [1, 2]` },
  { method: 'reduce()', example: `const arr = [1, 2];
arr.reduce((acc, cur) => acc + cur, 0); // 3` },
  { method: 'reduceRight()', example: `const arr = [1, 2];
arr.reduceRight((acc, cur) => acc + cur, 0); // 3` },
  { method: 'reverse()', example: `const arr = [1, 2];
arr.reverse(); // [2, 1]` },
  { method: 'shift()', example: `const arr = [1, 2];
arr.shift(); // 1` },
  { method: 'slice()', example: `const arr = [1, 2, 3];
arr.slice(1); // [2, 3]` },
  { method: 'some()', example: `const arr = [1, 2];
arr.some(n => n > 1); // true` },
  { method: 'sort()', example: `const arr = [2, 1];
arr.sort(); // [1, 2]` },
  { method: 'splice()', example: `const arr = [1, 2, 3];
arr.splice(1, 1); // [1, 3]` },
  { method: 'toReversed()', example: `const arr = [1, 2];
arr.toReversed(); // [2, 1]` },
  { method: 'toSorted()', example: `const arr = [2, 1];
arr.toSorted(); // [1, 2]` },
  { method: 'toSpliced()', example: `const arr = [1, 2, 3];
arr.toSpliced(1, 1); // [1, 3]` },
  { method: 'toString()', example: `[1, 2].toString(); // "1,2"` },
  { method: 'unshift()', example: `const arr = [2];
arr.unshift(1); // [1, 2]` },
  { method: 'valueOf()', example: `const arr = [1, 2];
arr.valueOf(); // [1, 2]` },
  { method: 'with()', example: `const arr = [1, 2, 3];
arr.with(1, 9); // [1, 9, 3]` },
];
