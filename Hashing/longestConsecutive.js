
function longestConsecutive(nums) {
     let n = nums.length
     if(n === 0) return 0;

  let longest = 0
  let numsSet =  new Set(nums)
  
  for(const num of numsSet){
    if(!numsSet.has(num -1)){
       let currentNum = num
       let streak = 1

      while(numsSet.has(currentNum + 1)){
        currentNum += 1
        streak += 1
      }

      longest = Math.max(longest, streak)
    }
  }
  return longest
  
};

const testCases = [
    [100,4,200,1,3,2],
    [0,3,7,2,5,8,4,6,0,1],
    [1,0,1,2],
    [2,1,6,7,8]
]

testCases.forEach((x) => {
    console.log(`Input ${x} || Output ${longestConsecutive(x)}`)
})