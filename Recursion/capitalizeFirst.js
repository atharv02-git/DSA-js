function capitalizeFirst (arr) {
    let newArr = []
    if(arr.length === 0) return newArr;
    newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1)); //apple => Apple
    newArr = [...newArr, ...capitalizeFirst(arr.slice(1))];
    return newArr;
}
console.log(capitalizeFirst(['car','taco','banana']))