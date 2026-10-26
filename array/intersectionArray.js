const num1 = [1, 2, 2, 3, 3, 3];
const num2 = [2, 3, 3, 4, 5, 7];

function intersectionArray(nums1, nums2) {
  let newArray = [];
  let left = 0;
  let right = 0;

  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] < nums2[right]) {
      left++;
    } else if (nums1[left] === nums2[right]) {
      newArray.push(nums1[left]);
      left++;
      right++;
    } else {
      right++;
    }
  }
  return newArray
}

console.log(intersectionArray(num1,num2))