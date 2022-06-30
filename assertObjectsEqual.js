const eqObjects = function(obj1, obj2) {
  let keyArr1 = Object.keys(obj1);
  let keyArr2 = Object.keys(obj2);
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(`Example label: ${inspect(actual)}`);