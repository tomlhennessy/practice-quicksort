function quicksort(arr) {
  // base case: if the array has 1 or fewer elements, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // pick the first value as the pivot
  let pivot = arr[0];

  // partition the array into two halves
  let left = [];
  let right = [];

  // orient the pivot so that...
  // every number smaller than the pivot is to the left
  // every number larger (or equal) than the pivot is to the right
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // recursively sort the left and right sub-arrays
  let sortedLeft = quicksort(left);
  let sortedRight = quicksort(right);

  // return the concatenated result: left + pivot + right
  return sortedLeft.concat(pivot, sortedRight);
}


module.exports = [quicksort];
