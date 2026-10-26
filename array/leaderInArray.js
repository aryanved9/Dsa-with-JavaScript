// Given an integer array nums, return a list of all the leaders in the array.
// A leader in an array is an element whose value is strictly greater than all elements to its right in the given array. The rightmost element is always a leader. The elements in the leader array must appear in the order they appear in the nums array.

// Example 1:
// Input: nums = [1, 2, 5, 3, 1, 2]
// Output: [5, 3, 2]

function leader(nums) {
  let leaders = [];
  let max = Number.MIN_SAFE_INTEGER;
  let n = nums.length;

  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] > max) {
      leaders.push(nums[i]);
    }
    max = Math.max(max, nums[i]);
  }

  return leaders.reverse();
}

const testCases = [
  [1, 2, 5, 3, 1, 2],
  [-3, 4, 5, 1, -4, -5],
];

testCases.forEach((x) => {
  console.log(`input ${x}, output ${leader(x)}`);
});
