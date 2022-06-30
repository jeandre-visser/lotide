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

const flatten = function(arr) {
  let flattenedArr = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let nestedElement of element) {
        flattenedArr.push(nestedElement);
      }
    } else {
      flattenedArr.push(element);
    }
  }
  return flattenedArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));