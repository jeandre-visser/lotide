// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  // loop through each item in allItems
  for (let item of allItems) {
    if (itemsToCount[item]) {
      // increase count of each instance of item
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }

  }
  return results;
};


module.exports = countOnly;






