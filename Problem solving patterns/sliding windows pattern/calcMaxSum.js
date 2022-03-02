// Sliding window pattern: function should calculate max sum of elements in in the array

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
        console.log(`TempSum is: ${tempSum}, MaxSum is : ${maxSum}`);
    }
    tempSum = maxSum;
    for(let i=num; i< arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i]; //removing the first element and adding the new element
        maxSum = Math.max(maxSum, tempSum);
        console.log(`TempSum is: ${tempSum}, MaxSum is : ${maxSum}`);
    }
    console.log(maxSum);
    return maxSum;
}
maxSubarraySum([1,2,5,2,8,1,5],3)