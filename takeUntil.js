const takeUntil = function(array, callback) {
  const results = [];
  // loop through the array
  for (let item of array){
    // if callback(item) is truthy, stop looping and return our results array
    if (callback(item)) {
      return results;
    }
    // if callback(item) is falsy, push item into results array
    results.push(item)
  } 
  return results;
};

module.exports = takeUntil;


;
