const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

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
