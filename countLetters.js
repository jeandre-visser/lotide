const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let letterCounter = {};

  let newStr = str.replace(/\s+/g, '');
  for (let letter of newStr) {
    if (letterCounter[letter]) {
      letterCounter[letter]++;
    } else {
      letterCounter[letter] = 1;
    }
  }
  return letterCounter;
};

// TEST CASES
console.log(countLetters("LHL"));
console.log(countLetters("Bitcoin"));