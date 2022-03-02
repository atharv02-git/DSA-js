function areThereDuplicates(...args) {
  // sorting 
  args.sort((a, b) => a > b);

  // assgining pointers
  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) { //checking if the value of pointer at one position is equal to the value of pointer at other position
      return true;
    }
    start++;
    next++;
  }
  return false;
}
areThereDuplicates(5,2,1)