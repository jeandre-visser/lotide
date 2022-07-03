const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");

const without = function(src, itemsToRemove) {
  let newArr = [];
  // loop through each item of array
  for (let srcItem of src) {
    // if items to remove does not include a src item in the original array, push those src items to the new arr
    if (!itemsToRemove.includes(srcItem)) {
      newArr.push(srcItem);
    }
  }
  return newArr;
};


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

