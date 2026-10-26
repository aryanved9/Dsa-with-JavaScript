// Given an integer array nums and a non-negative integer k, rotate the array to the left by k steps.
function rotateArray(nums, k) {
  k = k % nums.length;

  reverse(nums, 0 , k-1 )
  reverse(nums, k, nums.length-1 )
  reverse(nums, 0 , nums.length-1)
  
  return nums
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

const testCases = [
  {
    testCase: [1, 2, 3, 4, 5, 6],
    k: 2,
  },
  {
    testCase: [3, 4, 1, 5, 3, -5],
    k: 8,
  },
];

testCases.forEach((item) => {
  console.log(
    `input ${item.testCase}, output ${rotateArray(item.testCase, item.k)}`,
  );
});
