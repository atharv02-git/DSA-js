//writing factorial Iteratively
/*function fact(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i;
    }
    return total;
}
console.log(fact(4));*/

// Writing function for factorial recursiely
function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(4));
