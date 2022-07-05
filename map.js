
const map = function(array, callback) {
  const results = [];
  // loops through each item of given array
  for(let item of array) {
    // pushes output of callback into results array 
    results.push(callback(item))
  }
  return results;
}

module.exports = map;


