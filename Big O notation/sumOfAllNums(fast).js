const {performance} = require('perf_hooks');
function addUpTo(n){
    return n * (n+1) / 2;
}

const t1 = performance.now();
console.log(addUpTo(45000000))
const t2 = performance.now();
console.log(`Time elapsed: ${(t2-t1)/1000} seconds`)

/**This requires less time as it does not have any for loop inside it */