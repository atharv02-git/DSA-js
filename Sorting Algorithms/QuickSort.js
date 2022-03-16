function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let pivotValue = arr[start];
  let pivotIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivotValue > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    } 
  }
  swap(arr, start, pivotIndex); /*swapping the starting element(the pivot) with the pivot index*/
  return pivotIndex;
}

function quickSort(arr, left=0, right=arr.length-1){
    //base Case
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //returns the pivot index
        //for sorting left part of the array from pivot value
        quickSort(arr, left, pivotIndex-1); 
        //for sorting right part of the array from pivot value
        quickSort(arr, pivotIndex+1, right); 
    }
    return arr;
}

console.log(quickSort([100,12,1,5,88,191]));
