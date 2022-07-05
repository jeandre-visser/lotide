
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

module.exports = countLetters;