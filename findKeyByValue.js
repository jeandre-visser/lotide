const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement the function findKeyByValue which takes in an object and a value
// It should scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.


const findKeyByValue = function(object, value) {
  for (let key in object) {
  return Object.keys(object).find(key => object[key] === value);
  }
};


// TEST CASES

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestTeamsBySport = {
  hockey: "Colorado Avalanche",
  basketball: "LA Lakers",
  rugby: "South African Springboks"
};

assertEqual(findKeyByValue(bestTeamsBySport, "Edmonton Oilers"), undefined);
assertEqual(findKeyByValue(bestTeamsBySport, "Colorado Avalanche"), "hockey");
assertEqual(findKeyByValue(bestTeamsBySport, "South African Springboks"), "rugby");



