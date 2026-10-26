// Given an integer array nums, move all the 0's to the end of the array. The relative order of the other elements must remain the same.

// This must be done in place, without making a copy of the array.

function moveZeroes(nums) {
  let j = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      j = i;
      break;
    }
  }

  if (j === -1) return;

  for (let i = j + 1; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      j++;
    }
  }
  return nums;
}

const testCases = [
  [0, 1, 4, 0, 5, 2],
  [0, 0, 0, 1, 3, -2],
];

testCases.forEach((x) => {
  console.log(`input ${x}, output ${moveZeroes(x)}`);
});
