var isPalindrome = function (s) {
  let newS = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (let i = 0; i < Math.floor(newS.length / 2); i++) {
    if (newS[i] != newS[newS.length - i - 1]) return false;
  }
  return true;
};

const testCases = ["A man, a plan, a canal: Panama", "race a car", " "];

testCases.forEach((s) => {
  console.log(`Input: ${s} → Output: ${isPalindrome(s)}`);
});