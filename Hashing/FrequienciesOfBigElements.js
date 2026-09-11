// Before for small element numbers in Given array which was maxmium value in the given array eg 12, 100, 1000, we created hashArrays size of 13 which will have 0-12 index value intialised with value 0, later we increased the values of indexes by 1 for the element found by iterating over the given array.
// But catch is array can store a limited number of interger values which is around 10^7. then what if we have an element bigger than 10^7 in array we cannot exceed to indexes of 10^7.
// Now in that case Map comes in role were we can store elements in key values.

var fn = function (x, arr) {
  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    hashMap.set(arr[i], (hashMap.get(arr[i]) || 0) + 1);
  }
  return hashMap.get(x) || 0;
};

const arr = [2, 4, 5, 8, 100000000, 7, 3, 5, 2, 7, 6, 100000000];
// given max of array is 100000000.

const testCases = [2, 5, 4, 3, 6, 10, 100000000];
testCases.forEach((x) => {
  console.log(`Input: ${x} → Output: ${fn(x, arr)}`);
});
