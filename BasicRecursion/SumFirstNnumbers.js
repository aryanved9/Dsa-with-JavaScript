// sum of first n number

// Parameterised approach
function fn(n, sum) {
  if (n < 1) {
    console.log(sum);
    return sum;
  }

  fn(n - 1, sum + n);
}
fn(5, 0);

//Functional approach

function fn2(n) {
  if (n == 0) return 0;

  return n + fn2(n - 1);
}

console.log(fn2(3));
