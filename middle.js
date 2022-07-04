const middle = function(arr) {
  // determine middle of array, rounding down to nearest integer
  const midNum = Math.floor(arr.length / 2);
  // return nothing if array has two or less numbers in it
  if (arr.length <= 2) {
    return [];
  }
  // return the middle two numbers if the array is even
  if (arr.length % 2 === 0) {
    return [arr[midNum - 1], arr[midNum]]
  }
  // otherwise return the middle number if array is odd
    return [arr[midNum]];
}

module.exports = middle;



