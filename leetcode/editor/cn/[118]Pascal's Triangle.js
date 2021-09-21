//Given an integer numRows, return the first numRows of Pascal's triangle. 
//
// In Pascal's triangle, each number is the sum of the two numbers directly abov
//e it as shown: 
//
// 
// Example 1: 
// Input: numRows = 5
//Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2: 
// Input: numRows = 1
//Output: [[1]]
// 
// 
// Constraints: 
//
// 
// 1 <= numRows <= 30 
// 
// Related Topics 数组 动态规划 
// 👍 581 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans = [];
    for(let i= 0; i< numRows;i++)
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
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(generate(5));