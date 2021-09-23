//Given an integer rowIndex, return the rowIndexᵗʰ (0-indexed) row of the 
//Pascal's triangle. 
//
// In Pascal's triangle, each number is the sum of the two numbers directly 
//above it as shown: 
//
// 
// Example 1: 
// Input: rowIndex = 3
//Output: [1,3,3,1]
// Example 2: 
// Input: rowIndex = 0
//Output: [1]
// Example 3: 
// Input: rowIndex = 1
//Output: [1,1]
// 
// 
// Constraints: 
//
// 
// 0 <= rowIndex <= 33 
// 
//
// 
// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra 
//space? 
// Related Topics 数组 动态规划 👍 322 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let ans = [];
    for(let i= 0; i<= rowIndex;i++)
    {
        ans[i] =[];
        ans[i][0] = 1;
        for(let j=1; j<i; j++)
        {
            ans[i][j] = ans[i-1][j] + ans[i-1][j-1];
        }
        ans[i].push(1);

    }
    ans[0].pop();
    return ans[rowIndex];
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(getRow(3))