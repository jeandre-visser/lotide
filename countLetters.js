const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let letterCounter = {};

  for (let letter of str) {
    if (letter !== " ") {
      letterCounter[letter] = letterCounter[letter] + 1;
    } else if (letter === " ") {
      letterCounter[letter] = letterCounter[letter] = 1;
    }
  }
  return letterCounter;
};


// TEST CASES
console.log(countLetters("LHL"));
console.log(countLetters("Bitcoin"));