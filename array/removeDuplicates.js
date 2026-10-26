// Given an integer array nums sorted in non-decreasing order, remove all duplicates in-place so that each unique element appears only once.

// Return the number of unique elements in the array.

function removeDuplicates(nums) {
  let j = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }

  return j + 1;
}

const testCases = [
  [0, 0, 3, 3, 5, 6],
  [-2, 2, 4, 4, 4, 4, 5, 5],
];

testCases.forEach((x) => {
  console.log(`input ${x}, output ${removeDuplicates(x)}`);
});
