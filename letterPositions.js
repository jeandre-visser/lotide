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

module.exports = letterPositions;

