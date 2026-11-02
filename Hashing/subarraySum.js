// Count subarrays with given sum
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// Example 1:
// Input: nums = [1, 1, 1], k = 2
// Output: 2

// Explanation: In the given array [1, 1, 1], there are two subarrays that sum up to 2: [1, 1] and [1, 1]. Hence, the output is 2.
// Example 2:
// Input: nums = [1, 2, 3], k = 3
// Output: 2
// Explanation: In the given array [1, 2, 3], there are two subarrays that sum up to 3: [1, 2] and [3]. Hence, the output is 2.

function subarraysSum(nums, k) {
  let preSum = 0;
  let count = 0;
  let hashMap = new Map();
  hashMap.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];
    let remove = preSum - k;

    if (hashMap.has(remove)) {
      count += hashMap.get(remove);
    }

    hashMap.set(preSum, (hashMap.get(preSum) || 0) + 1);
  }
  return count;
}

const testCases = [
  {
    nums: [1, 1, 1],
    k: 2,
  },
  {
    nums: [1, 2, 3],
    k: 3,
  },
];

testCases.forEach((item) => {
  console.log(
    `Input nums array ${item.nums} and ${item.k} || output ${subarraysSum(item.nums, item.k)} `,
  );
});
