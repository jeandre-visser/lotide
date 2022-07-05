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

module.exports = findKey;


