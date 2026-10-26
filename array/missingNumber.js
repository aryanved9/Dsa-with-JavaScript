function missingNumber(nums) {
  let newArray = new Array(nums.length + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    newArray[nums[i]]++;
  }

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === 0) {
      return i;
    }
  }
}

const testCases = [
  [0, 2, 3, 1, 4],
  [0, 1, 2, 4, 5, 6],
];

testCases.forEach((x) => {
  console.log(`input ${x}, output ${missingNumber(x)}`);
});
