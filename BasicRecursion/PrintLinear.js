// Print Linearly from 1 to n

function fn(i, n) {
  if (i > n) return;

  console.log(i);

  fn(i + 1, n);
}
fn(1, 5);
