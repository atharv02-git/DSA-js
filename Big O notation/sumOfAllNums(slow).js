// function to add nums upto (including) n
const {performance} = require('perf_hooks');

function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// performance fntn
const t1 = performance.now();
console.log(addUpTo(45000000))
const t2 = performance.now();
console.log(`Time elapsed: ${(t2-t1)/1000} seconds`)