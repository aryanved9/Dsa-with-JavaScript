//  Rearrange Array Elements by sign 
// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should return the array of nums such that the array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// Example 1:

// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]

// Example 2:

// Input: nums = [-1,1]
// Output: [1,-1]

function rearrange(nums){
  let result = []
  let positive = 0
  let negative = 1

  for(let i = 0; i<nums.length; i++){
    if(nums[i] < 0){
        result[negative] = nums[i]
        negative += 2
    }else{
        result[positive] = nums[i]
        positive += 2
    }
  }
  return result
}

const testCases = [
    [3,1,-2,-5,2,-4],
    [-1,1]
]

testCases.forEach((item) => {
    console.log(`Input ${item} --- Output ${rearrange(item)}`)
})