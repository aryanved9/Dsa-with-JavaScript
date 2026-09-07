var isPrime = function (x) {
  if (x <= 1) return false;

  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

const testCases = [11, 13, 36, 5 , 7];
testCases.forEach((x) => {
  console.log(`Input: ${x} → Output: ${isPrime(x)}`);
});
