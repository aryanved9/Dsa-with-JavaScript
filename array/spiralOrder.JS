// Print the matrix in spiral manner

// Given an M * N matrix, print the elements in a clockwise spiral manner.
// Return an array with the elements in the order of their appearance when printed in a spiral manner.

// Example 1:
// Input: matrix = [[1, 2, 3], [4 ,5 ,6], [7, 8, 9]]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Explanation:
// The elements in the spiral order are 1, 2, 3 -> 6, 9 -> 8, 7 -> 4, 5

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function spiralOrder(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  let top = 0;
  let left = 0;
  let right = m - 1;
  let bottom = n - 1;

  let result = [];

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
}

console.log(spiralOrder(matrix));
