const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.length > 2 ? arr.slice(1) : [];
};


// TEST CASE 1
const testOne = ["Yo Yo", "Lighthouse", "Labs"];
tail(testOne);
assertEqual(testOne.length, 3);
assertEqual(tail(testOne).length, 2);

// TEST CASE 2
let testTwo = ["Lighthouse"];
tail(testTwo);
assertEqual(testTwo.length, 1);
assertEqual(tail(testTwo).length, 0);


// TEST CASE 3
let testThree = [ ];
tail(testThree);
assertEqual(testThree.length, 0);
assertEqual(tail(testThree).length, 0);