// assertEqual function
const assertEqual = require("./assertEqual");
// findKey function
const findKey = (object, callback) => {
  let results;
// Loop over the object key using Object.keys()
  for (let key of Object.keys(object)) {
    // return first key if callback returns truthy 
    if (callback(object[key])) {
      return results = key; 
    }
  }
  return results;
}

// TEST CASES
let test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(test1, 'noma')

let test2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 0) // => "undefined"

assertEqual(test2, undefined)

let test3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3) // => "Akaleri"

assertEqual(test3, 'Akaleri')

