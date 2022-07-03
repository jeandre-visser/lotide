const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");


const letterPositions = function(sentence) {
  const results = {};
  // splits up sentence into letters and each letter is input into an array
  sentence.split("").forEach(letter => {
    results[letter] = []
  });
  // for loop that determines at which index each letter occurs, and pushes that index position into array
  for (let i = 0; i < sentence.length; i++) {
    results[sentence[i]].push(i);
  }

  return results;
};


// TEST CODES
console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);