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
console.log(countLetters("Lighthouse Labs Rocks"));
console.log(countLetters("Bitcoin"));

const wolf = "Jordan Belfort";
let result1 = countLetters(wolf);
assertEqual(result1["J"], 1);
assertEqual(result1["o"], 2);
assertEqual(result1["y"], undefined);
assertEqual(result1["t"], 1);