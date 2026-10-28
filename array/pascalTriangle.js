// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

function pascal(numRows) {
  let resultTriangle = [];
  for (let i = 1; i <= numRows; i++) {
    resultTriangle.push(rowElements(i));
  }
  return resultTriangle;
}

function rowElements(row) {
  let element = 1;
  let rowAns = [];
  rowAns.push(element);

  for (let col = 1; col < row; col++) {
    element = element * (row - col);
    element = element / col;
    rowAns.push(element);
  }
  return rowAns;
}

console.log(pascal(5));
