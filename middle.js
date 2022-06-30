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

  const midNum = Math.floor(arr.length / 2);

  if (arr.length <= 2) {
    return [];

  } else if (arr.length % 2 === 0) {
    return [arr[midNum - 1], arr[midNum]]

  } else {
      return [arr[midNum]];
  }
}



