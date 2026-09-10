// To find nth fibbonacci number genral rule f(n) = f(n-1)+ f(n-2)
// eg: f(3) = f(2) + f(1) => 1 + 1 result 2.

function fn(n) {
  if (n <= 1) return n;

  let last = fn(n - 1);
  let slast = fn(n - 2);

  return last + slast;
}

const testCases = [2, 3, 8, 5];
testCases.forEach((n) => {
  console.log(`Input: ${n} → Output: ${fn(n)}`);
});
