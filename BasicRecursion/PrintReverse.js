// print in terms of n to 1, n -> 1; if n = 5 then 5 -> 1

function fn(n) {
  if (n <= 0) return;

  console.log(n);
  fn(n - 1);
}

fn(5)
