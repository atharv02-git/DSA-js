function insertionSort(arr){
    // outer loop uisng i variable to compare from first element
    for(let i = 1; i < arr.length; i++){
        // iterationg backwards because i was the one we are comparing it with
        for(let j = i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                // swap
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            }else{
                break;
            }
        }
    }
    return arr;
}
console.log(insertionSort([100,1,54,15,23,10023]))