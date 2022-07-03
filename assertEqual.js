const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`❌Assertion Failed: ${actual} !== ${expected}`); 
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('My name is Jeandre', 'My name is Jeandre');
assertEqual('It is a nice day', 'It is a Nice day');
assertEqual(42, 42);
assertEqual(1, 10);

module.exports = assertEqual;