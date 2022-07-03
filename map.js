const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  // loops through each item of given array
  for(let item of array) {
    // pushes output of callback into results array 
    results.push(callback(item))
  }
  return results;
}

// calls upon our map function
const results1 = map(words, word => word[0]);
console.log(results1);

// eqArrays function
const eqArrays = require("./eqArrays");

// assertArraysEqual function
const assertArraysEqual = require("./assertArraysEqual");
// TEST CODE
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // PASS

// New test array
const sports = ['hockey', 'golf', 'rugby', 'tennis'];

// Tests on sports array
const test1 = map(sports, sport => sport[1]);
const test2 = map(sports, sport => sport[2]);

assertArraysEqual(test1, [ "o", "o", "u", "e" ]); // PASS
assertArraysEqual(test2, [ "c", "l", "g", "n" ]); // PASS
