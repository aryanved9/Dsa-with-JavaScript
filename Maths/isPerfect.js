function isPerfect(x) {
  if (x <= 1) return false;

  let sum = 1;
  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) {
      sum += i;
      if (x / i !== i) {
        sum += x / i;
      }
    }
  }
  if (sum === x) return true;
  else return false;
}

const testCases = [6, 4];
testCases.forEach((x) => {
  console.log(`Input ${x}, output ${isPerfect(x)}`);
});
