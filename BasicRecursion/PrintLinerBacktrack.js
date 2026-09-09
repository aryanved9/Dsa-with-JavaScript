function fn(i, n) {
  if (i < 1) return;

  fn(i - 1, n);
  console.log(i);
}

fn(3,3)