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
console.log(mostDigits([10,11,459,12315,1432523513241]))