const takeUntil = function(array, callback) {
  const results = [];
  // loop through the array
  for (let item of array){
    // if callback(item) is truthy, stop looping and return our results array
    if (callback(item)) {
      return results;
    }
    // if callback(item) is falsy, push item into results array
    results.push(item)
  } 
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// eqArrays function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// assertEqualsArray function
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`✅Assertion Passed: ${arr1} === ${arr2}`);
  }
  return console.log(`❌Assertion Failed: ${arr1} !== ${arr2}`);
};

// TEST CODE

// TEST CODE
const evenNumbers = [2, 4, 6, 8, 10, 12, 14];
const test1 = takeUntil(evenNumbers, num => num > 10);

assertArraysEqual(test1, [2, 4, 6, 8, 10]);

const queenLyric = ['we', 'will', 'we', 'we', 'will', 'rock', 'you'];
const test2 = takeUntil(queenLyric, lyric => lyric === 'you');

assertArraysEqual(test2, ['we', 'will', 'we', 'we', 'will', 'rock']);
