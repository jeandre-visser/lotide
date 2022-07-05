const takeUntil = require('../takeUntil');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


const evenNumbers = [2, 4, 6, 8, 10, 12, 14];
const test1 = takeUntil(evenNumbers, num => num > 10);

assertArraysEqual(test1, [2, 4, 6, 8, 10]);

const queenLyric = ['we', 'will', 'we', 'we', 'will', 'rock', 'you'];
const test2 = takeUntil(queenLyric, lyric => lyric === 'you');

assertArraysEqual(test2, ['we', 'will', 'we', 'we', 'will', 'rock'])