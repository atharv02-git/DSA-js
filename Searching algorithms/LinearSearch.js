// Complexity: O(N)
function linearSearch(arr, targetValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetValue) {
      return i; //returning index
    }
  }
  return -1;
}
console.log(linearSearch([5,4,3,2,1], 1))