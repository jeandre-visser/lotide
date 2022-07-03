const assertEqual = require("./assertEqual");
// Implement the function findKeyByValue which takes in an object and a value
// It should scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.


const findKeyByValue = function(object, value) {
  // // Use Object.keys to search through all object keys, and the for..of to loop over all those object keys
  for (let key of Object.keys(object)) {
    // if statment determines if the key of the object contains the value
  if (object[key] === value){
    return key;
    }
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



