// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed
// 32-bit integer range [-231, 231 - 1], then return 0.

//Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

var reverse = function (x) {
  let revNum = 0;
  while (x !== 0) {
    let ld = x % 10;
    revNum = revNum * 10 + ld;
    x = Math.trunc(x / 10);
  }
  if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) {
    return 0;
  }
  return revNum;
};

const testCases = [123, -123, 120, 0, 1534236469, -2147483648, 1463847412];

testCases.forEach((x) => {
  console.log(`Input: ${x} → Output: ${reverse(x)}`);
});
