const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // PASS

// New test array
const sports = ['hockey', 'golf', 'rugby', 'tennis'];

// Tests on sports array
const test1 = map(sports, sport => sport[1]);
const test2 = map(sports, sport => sport[2]);

assertArraysEqual(test1, [ "o", "o", "u", "e" ]); // PASS
assertArraysEqual(test2, [ "c", "l", "g", "n" ]); // PASS