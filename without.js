const without = function(src, itemsToRemove) {
  let newArr = [];
  // loop through each item of array
  for (let srcItem of src) {
    // if items to remove does not include a src item in the original array, push those src items to the new arr
    if (!itemsToRemove.includes(srcItem)) {
      newArr.push(srcItem);
    }
  }
  return newArr;
};

module.exports = without;



