function naiveStringSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(short[j], long[i + j]);
      if (short[j] !== long[i + j]) {
        console.log("Break!!!");
        break;
      }
    //   code to know if checking is finished
      if (j === short.length - 1) {
        console.log("FOUND ONE!");
        count++;
      }
    }
  }
  return count;
}
console.log(naiveStringSearch("fuckoff", "off"));
