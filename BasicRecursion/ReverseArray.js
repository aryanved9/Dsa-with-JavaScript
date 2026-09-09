function reverseArray(i, arr, n) {
  if (i >= Math.floor(n / 2)) return;

  [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];

  reverseArray(i + 1, arr, n);
}

let n = 5;
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = i;
}

reverseArray(0, arr, n);
console.log(arr);
