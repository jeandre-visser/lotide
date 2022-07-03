const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    return console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  }
  return console.log(`❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
};

// TEST CASES
// assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});
// assertObjectsEqual({a: 1, b: 2, c: 3}, {b: 2, a: 1, c: 3, d: 4});
// assertObjectsEqual({a: 'hi', b: 'why'}, {b: 'hi', a: 'why'});

module.exports = assertObjectsEqual;
