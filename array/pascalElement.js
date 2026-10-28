// Given two integers r and c, return the value at the rth row and cth column (1-indexed) in a Pascal's Triangle.

// In Pascal's triangle:

// The first row contains a single element 1.
// Each row has one more element than the previous row.
// Every row starts and ends with 1.
// For all interior elements (i.e., not at the ends), the value at position (r, c) is computed as the sum of the two elements directly above it from the previous row:

// Example 1:
// Input: r = 4, c = 2
// Output: 3
// Explanation:
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// Thus, value at row 4 and column 2 = 3

// Example 2:
// Input: r = 5, c = 3
// Output: 6
// Explanation:
// The Pascal's Triangle is as follows:
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1
// Thus, value at row 5 and column 3 = 6

function pascalTriangle(r,c){
    let row = r-1
    let col = c-1

    let res  =  1

    for(i = 0; i<col; i++){
        res = res * (row - i)
        res = res/ (i+1)
    }
    return res
}
console.log(pascalTriangle(4,2))
console.log(pascalTriangle(5,3))