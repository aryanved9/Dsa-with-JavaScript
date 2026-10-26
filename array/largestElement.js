// Given an array of integers nums, return the value of the largest element in the array

function largestElement(nums) {
  let largest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (largest < nums[i]) {
      largest = nums[i];
    }
  }
  return largest;
}

const testCases = [
  [3, 3, 6, 1],
  [3, 3, 0, 99, -40],
];

testCases.forEach((x) => {
  console.log(`input ${x}, output ${largestElement(x)}`);
});
