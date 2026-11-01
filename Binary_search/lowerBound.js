// Given a sorted array of nums and an integer x, write a program to find the lower bound of x.

// The lower bound algorithm finds the first and smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x.

// If no such index is found, return the size of the array.

// Example 1:
// Input : nums= [1,2,2,3], x = 2
// Output:1
// Explanation:
// Index 1 is the smallest index such that arr[1] >= x.

// Example 2:
// Input : nums= [3,5,8,15,19], x = 9
// Output: 3
// Explanation:
// Index 3 is the smallest index such that arr[3] >= x.

function lowerBound(nums, x) {
  let n = nums.length;
  let ans = n;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] >= x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

const testCases = [
  {
    nums: [1, 2, 2, 3],
    x: 2,
  },
  {
    nums: [3, 5, 8, 15, 19],
    x: 9,
  },
];

testCases.forEach((item) => {
  console.log(
    `Input array = ${item.nums} and X = ${item.x} || Output ${lowerBound(item.nums, item.x)} `,
  );
});
