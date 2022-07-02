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

const middle = function(arr) {
  // determine middle of array, rounding down to nearest integer
  const midNum = Math.floor(arr.length / 2);
  // return nothing if array has two or less numbers in it
  if (arr.length <= 2) {
    return [];
  }
  // return the middle two numbers if the array is even
  if (arr.length % 2 === 0) {
    return [arr[midNum - 1], arr[midNum]]
  }
  // otherwise return the middle number if array is odd
    return [arr[midNum]];
}


// TEST CASES
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])

