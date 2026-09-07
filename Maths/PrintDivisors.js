var printDivisors = function (x) {
  let result = [];
  for (let i = 1; i * i <= x; i++) {
    if (x % i === 0) {
      result.push(i);
      if (x / i != i) {
        result.push(x / i);
      }
    }
  }
  return result.sort((a, b) => a - b);
};

const testCases = [36, 25, 10];
testCases.forEach((x) => {
  console.log(`Input: ${x} → Output: ${printDivisors(x)}`);
});
