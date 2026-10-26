function rotateArrayByOne(nums){
  let temp = nums[0]
  for(let i = 1; i < nums.length; i++){
    nums[i-1] = nums[i]
  }
  nums[nums.length-1] = temp
  return nums;
}

const testCases = [
  [1,2,3,4,5],
  [-1, 0, 3, 6],
];

testCases.forEach((x) => {
  console.log(`input ${x}, output ${rotateArrayByOne(x)}`);
});