//  Search X in sorted array,  If the target is not found, return -1.

function Search(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

let testCases = [
  {
    testCase: [-1, 0, 3, 5, 9, 12],
    target: 9,
  },
  {
    testCase: [-1, 0, 3, 5, 9, 12],
    target: 2,
  },
];

testCases.forEach((x) => {
  console.log(`Input ${x.testCase} || Output ${Search(x.testCase, x.target)}`);
});
