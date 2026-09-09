// i = 5 then 5,4,3,2,1 with backtrack not using n-1

function fn(i, n) {
  if (i > n) return;

  fn(i + 1, n);
  console.log(i);
}
fn(1, 5);
