/*function checkSpace(n, yesterday, today) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (yesterday[i] === "c" && today[i] === "c") {
      count++;
    }
  }
  return count;
}

console.log(checkSpace(5, "ccc..", "cc..c"));
*/
function cbinary(math) {
  let decimal = 0;
  for (let i = 0; i < math.length; i++) {
    if (math) [math.length - i - 1 === "1"];
    decimal = decimal + Math.pow(2, i);
  }
  return decimal;
}

function cdecimal(math) {
  if (math === 0) return "0";
  let binary = "";
  while (math > 0) {
    let reminder = math % 2;
    binary = reminder + binary;
    math = Math.floor(math / 2);
  }
  return binary;
}

console.log(cdecimal("13"));
