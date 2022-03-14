function merge(arr1, arr2){
    let results = []
    let i = 0;
    let j = 0;
    // while there is still data to look at in both
   while(i < arr1.length && j < arr1.length){
       if(arr1[i] < arr2[j]){
           results.push(arr1[i])
           i++;
       }
       else{
           results.push(arr2[j])
           j++
       }
    }
    // code: when exhausting of any1 length of an array
    while(i < arr1.length){
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j])
        j++;
    }
    return results;
}
console.log(merge([1,10,50], [2,14,99,100]))