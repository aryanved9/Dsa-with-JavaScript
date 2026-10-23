function twoSum(nums, target) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let secondVal = target - nums[i];

    if (hashMap.has(secondVal)) {
      return [hashMap.get(secondVal), i];
    }
    hashMap.set(nums[i], i);
  }
}

const testCases = [
  {
    arr: [1, 6, 2, 10, 3],
    target: 7,
  },
  {
    arr: [1, 3, 5, -7, 6, -3],
    target: 0,
  },
];

for (const item of testCases) {
  console.log(twoSum(item.arr, item.target));
}
