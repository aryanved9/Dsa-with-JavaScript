const fn = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
       [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];

        j--;
    }
  }
  return arr
};
const arr = [13, 46, 24, 52, 20, 9];
console.log(fn(arr));
