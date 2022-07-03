const assertEqual = require("./assertArraysEqual");

const tail = function(arr) {
  // if array length is greater than 2, slice off the first item and return the "tail" of the array, otherwise return an empty array
  return arr.length > 2 ? arr.slice(1) : [];
};


// TEST CASE 1
const testOne = ["Hello", "Lighthouse", "Labs"];
console.log(tail(testOne));
assertEqual(testOne.length, 3);
assertEqual(tail(testOne).length, 2);

// TEST CASE 2
let testTwo = ["Lighthouse"];
console.log(tail(testTwo));
assertEqual(testTwo.length, 1);
assertEqual(tail(testTwo).length, 0);


// TEST CASE 3
let testThree = [ ];
console.log(tail(testThree));
assertEqual(testThree.length, 0);
assertEqual(tail(testThree).length, 0);