function binarySearch(array, targetValue) {
  // assiging indexes
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (array[middle] !== targetValue && start <= end) {
    if (targetValue < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (array[middle] === targetValue) {
    return middle;
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 5));
