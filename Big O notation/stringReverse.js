//Function to reverse a string
function reverse(s) {
  let o = "";
  for (let i = s.length - 1; i >= 0; i--) {
    o += s[i];
  }
  return o;
}
console.log(reverse("Atharv"));
