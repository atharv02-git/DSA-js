// Radix sort helper functions
/** getDigit returns the digit in num at the given place value(i)
 * getDigit(12345,1) => 4, getDigit(12345,0) => 5
 */
function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

/**  digitCount returns the number of digits in the number */
function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/** mostDigits:- Given an array of nos, returns the number of digits in the largest numbers in the list */
function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}
//Radix Sort function
function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length : 10}, () => []); /**This line will help to create empty subArrays in a single Array */
        for(let i = 0; i < nums.length; i++){
            //using getDigit helper function to get digits
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]) // and placing each number in the corresponding bucket based on its 'k'th digit 
        }
        //concatenating multiple arrays into single array to reassign nums to generate the sorted list of single array and not multiple arrays
        nums = [].concat(...digitBuckets)
    }
    return nums;
}
console.log(radixSort([23,345,5467,12,2345,9852]))