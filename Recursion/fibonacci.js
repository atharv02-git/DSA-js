// fib(4) // 3 => 1,1,2,3
function fib(num){
    if(num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}
console.log(fib(4))