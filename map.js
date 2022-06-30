const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item))
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);


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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`✅Assertion Passed: ${arr1} === ${arr2}`);
  }
  return console.log(`❌Assertion Failed: ${arr1} !== ${arr2}`);
};

// TEST CODE
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // PASS

// New test array
const sports = ['hockey', 'golf', 'rugby', 'tennis'];

// Tests on sports array
const test1 = map(sports, sport => sport[1]);
const test2 = map(sports, sport => sport[2]);

assertArraysEqual(test1, [ "o", "o", "u", "e" ]); // PASS
assertArraysEqual(test2, [ "c", "l", "g", "n" ]); // PASS
