const tail = function(arr) {
  // if array length is greater than 2, slice off the first item and return the "tail" of the array, otherwise return an empty array
  return arr.length > 2 ? arr.slice(1) : [];
};


module.exports = tail;