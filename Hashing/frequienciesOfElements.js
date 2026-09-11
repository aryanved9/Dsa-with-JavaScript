function fn(x, arr) {
  let hasharr = new Array(13).fill(0);

  for (let i = 0; i < arr.length; i++) {
    hasharr[arr[i]] += 1;
  }

  if (x < hasharr.length) return hasharr[x];
  else return "Input is greater than max of array"
}

const arr = [2, 4, 5, 8, 12, 7, 3, 5, 2, 7, 6];
// given max of array is 12. means array have max value till 12.

const testCases = [2, 5, 4, 3, 6, 78, 45, 10];
testCases.forEach((x) => {
  console.log(`Input: ${x} → Output: ${fn(x, arr)}`);
});
