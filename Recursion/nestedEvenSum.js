//returns the sum of all even numbers inside object
function nestedEvenSum(obj, result = 0) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      result += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      result += obj[key];
    }
  }
  return result;
}
var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }

console.log(nestedEvenSum(obj1));