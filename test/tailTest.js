const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [6, 7, 8] for [5, 6, 7, 8]", () => {
    assert.deepEqual(tail([5, 6, 7, 8]), [6, 7, 8]); 
  });

});






// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// // TEST CASE 1
// const testOne = ["Hello", "Lighthouse", "Labs"];
// console.log(tail(testOne));
// assertEqual(testOne.length, 3);
// assertEqual(tail(testOne).length, 2);

// // TEST CASE 2
// let testTwo = ["Lighthouse"];
// console.log(tail(testTwo));
// assertEqual(testTwo.length, 1);
// assertEqual(tail(testTwo).length, 0);


// // TEST CASE 3
// let testThree = [ ];
// console.log(tail(testThree));
// assertEqual(testThree.length, 0);
// assertEqual(tail(testThree).length, 0);