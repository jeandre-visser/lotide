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
    console.log(`✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const letterPositions = sentence => {
  const results = {};
  // loop through string
  for (let i = 0; i < sentence.length; i++) {
    // if statement to skip spaces
    if (sentence[i] !== ' ') {
      // add key value to object
      if (results[sentence[i]]) {
        // find index in sentence and push to results arr
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};



// TEST CODES
console.log(letterPositions("hello"))

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);