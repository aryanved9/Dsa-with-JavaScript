const fn = function (arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let minVal = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minVal]) {
        minVal = j;
      }
    }
    [arr[minVal], arr[i]] = [arr[i], arr[minVal]];
  }
  return arr;
};

testCases = [
  [13, 46, 24, 52, 20, 9],
  [45, 78, 2, 1, 56, 45, 3],
  [45, 35, 25, 20, 15, 10],
];

testCases.forEach((arr) => {
  console.log(`Input array ${arr}, Sorted array ${fn(arr)}`);
});
