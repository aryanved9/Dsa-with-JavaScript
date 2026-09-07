var isArmstrong = function (x) {
  let sum = 0;
  let original = x;

  if (x < 0) return false;
  if (original === 0 || original === 1) {
    return true;
  }

  let xLength = x.toString().length;

  while (x > 0) {
    let ld = x % 10;
    sum = sum + Math.pow(ld, xLength);
    x = Math.floor(x / 10);
  }
  console.log("sum", sum);
  console.log("original", original);
  return sum === original;
};

const testCases = [153, 1634, 456, 2354, 0, 1, 2, -54];

testCases.forEach((x) => {
  console.log(`Input: ${x} → Output: ${isArmstrong(x)}`);
});
