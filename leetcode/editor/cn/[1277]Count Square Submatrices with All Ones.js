//Given a m * n matrix of ones and zeros, return how many square submatrices 
//have all ones. 
//
// 
// Example 1: 
//
// 
//Input: matrix =
//[
//  [0,1,1,1],
//  [1,1,1,1],
//  [0,1,1,1]
//]
//Output: 15
//Explanation: 
//There are 10 squares of side 1.
//There are 4 squares of side 2.
//There is  1 square of side 3.
//Total number of squares = 10 + 4 + 1 = 15.
// 
//
// Example 2: 
//
// 
//Input: matrix = 
//[
//  [1,0,1],
//  [1,1,0],
//  [1,1,0]
//]
//Output: 7
//Explanation: 
//There are 6 squares of side 1.  
//There is 1 square of side 2. 
//Total number of squares = 6 + 1 = 7.
// 
//
// 
// Constraints: 
//
// 
// 1 <= arr.length <= 300 
// 1 <= arr[0].length <= 300 
// 0 <= arr[i][j] <= 1 
// 
// Related Topics 数组 动态规划 矩阵 👍 177 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    const m=matrix.length,n=matrix[0].length;
    const dp=new Array(m);
    for(let i=0;i<m;i++)
    {
        dp[i]=new Array(n);
    }
    let ans=0;
    for(let i=0;i<m;i++)
    {
        for(let j=0;j<n;j++)
        {
            if(matrix[i][j]=== 1)
            {
                if (i === 0 || j === 0)
                {
                    dp[i][j] = 1;
                }
                else
                {
                    dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
                }
                ans+=dp[i][j];
            }
            else
            {
                dp[i][j]=0;
            }
        }
    }
    return ans;
};

//leetcode submit region end(Prohibit modification and deletion)
console.log(countSquares([ [0,1,1,1], [1,1,1,1], [0,1,1,1] ]));