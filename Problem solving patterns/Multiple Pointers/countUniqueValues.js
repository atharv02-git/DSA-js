function countUniqueValues(arr){
    //assigning position
    let i = 0;
    if(arr.length === 0){
        return 0;
    }
    for(let j = 0; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++; //incremening position of i
            arr[i] = arr[j] //and swapping the element present at index j with the element present at index i
        }
        // console.log(i,j)
    }
    return i+1;
}

countUniqueValues([1,1,2,3,3,4,5,6,6,7])
