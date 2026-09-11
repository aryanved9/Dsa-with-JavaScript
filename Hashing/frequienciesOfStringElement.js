var fn = function (c, str) {
  let hasharr = new Array(26).fill(0);

  if (str.length <= 0) return false;

  for (let i = 0; i < str.length; i++) {
    hasharr[str.charCodeAt(i) - "a".charCodeAt(0)] += 1;
  }
  return hasharr[c.charCodeAt(0) - "a".charCodeAt(0)];
};

let str = "aabccdeffg";

const testCases = ["a", "c", "b", "e"];
testCases.forEach((c) => {
  console.log(`Input: ${c} → Output: ${fn(c, str)}`);
});
