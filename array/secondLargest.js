// Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.

function secondLargest(nums) {
  let largest = nums[0];
  let sLargest = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < nums.length; i++) {
    if (largest < nums[i]) {
      sLargest = largest;
      largest = nums[i];
    } else if (largest > nums[i] && nums[i] > sLargest) {
      sLargest = nums[i];
    }
  }

  return sLargest === Number.MIN_SAFE_INTEGER ? -1 : sLargest;
}

const testCases = [
  [8, 8, 7, 6, 5],
  [10, 10, 10, 10, 10],
];

testCases.forEach((x) => {
  console.log(`input ${x}, output ${secondLargest(x)}`);
});
