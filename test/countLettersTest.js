const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');


// TEST CASES
console.log(countLetters("Lighthouse Labs Rocks"));
console.log(countLetters("Bitcoin"));

const wolf = "Jordan Belfort";
let result1 = countLetters(wolf);
assertEqual(result1["J"], 1);
assertEqual(result1["o"], 2);
assertEqual(result1["y"], undefined);
assertEqual(result1["t"], 1);

