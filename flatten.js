const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");

const flatten = function(arr) {
  let flattenedArr = [];
  for (let element of arr) {
    // Determine if the element is an array
    if (Array.isArray(element)) {
      // if it is an array, then loop through each nestedElement in the array element and push it into our flattenedArr
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