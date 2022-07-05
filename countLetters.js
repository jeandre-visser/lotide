const assertEqual = require('./assertEqual');

const countLetters = function(str) {
  let letterCounter = {};
  //Take out all spaces from our string
  let newStr = str.replace(/\s/g, '');
  for (let letter of newStr) {
    // Add letter into letterCounter
    if (letterCounter[letter]) {
      // Increase count of each occurence of letter
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

module.exports = countLetters;

