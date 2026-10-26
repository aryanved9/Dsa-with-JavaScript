// Given a binary array nums, return the maximum number of consecutive 1s in the array.
// A binary array is an array that contains only 0s and 1s.

function findMaxConsecutiveOnes(nums){
  let count = 0 
  let maxFrequency = 0

  for(let i = 0; i< nums.length; i++){
    if(nums[i] === 1){
        count++
        maxFrequency = Math.max(count, maxFrequency)
    }else{
        count = 0
    }
  }
  return maxFrequency
}

const testCases = [
  [1, 1, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

testCases.forEach((x) => {
  console.log(`input ${x}, output ${findMaxConsecutiveOnes(x)}`);
});