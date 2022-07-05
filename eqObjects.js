const eqArrays = require('./eqArrays');

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




module.exports = eqObjects;



