// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function (x) {
  let revNum = 0;
  let original = x;

  if (x < 0) {
    return false;
  }

  while (x !== 0) {
    let ld = x % 10;
    revNum = revNum * 10 + ld;
    x = Math.floor(x / 10);
  }

  if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) {
    return false;
  }

  return revNum === original;
};

const testCases = [121, -121, 10];

testCases.forEach((x) => {
  console.log(`Input: ${x} → Output: ${isPalindrome(x)}`);
});
