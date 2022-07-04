const assertEqual = require("./assertEqual");



const eqObjects = function(obj1, obj2) {
  // obtain key arrays using Object.keys
  let keyArr1 = Object.keys(obj1);
  let keyArr2 = Object.keys(obj2);
  // return false if the key arrays lengths don't match
  if (keyArr1.length !== keyArr2.length) {
    return false;
  }
  for (let key of keyArr1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      return eqArrays(obj1[key], obj2[key]);
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

// TEST CASES
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

module.exports = eqObjects;



