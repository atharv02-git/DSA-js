function same(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //code for how many times key is present in object { '1': 1, '4': 2, '5': 1 } { '1': 1, '16': 2, '25': 1 }
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0)+1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0)+1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    //code to check the availability of key^2 in frequencyCounter1 present in frequencyCounter2
    for(let key in frequencyCounter1){
        if(!(key **2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key **2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}
same([1,4,5,4], [16,1,25,16]) 
/** The Time complexity forthis function is O(N)*/