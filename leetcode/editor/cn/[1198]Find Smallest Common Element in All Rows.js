//Given an m x n matrix mat where every row is sorted in strictly increasing 
//order, return the smallest common element in all rows. 
//
// If there is no common element, return -1. 
//
// 
// Example 1: 
//
// 
//Input: mat = [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]
//Output: 5
// 
//
// Example 2: 
//
// 
//Input: mat = [[1,2,3],[2,3,4],[2,3,5]]
//Output: 2
// 
//
// 
// Constraints: 
//
// 
// m == mat.length 
// n == mat[i].length 
// 1 <= m, n <= 500 
// 1 <= mat[i][j] <= 10⁴ 
// mat[i] is sorted in strictly increasing order. 
// 
//
// Related Topics 数组 哈希表 二分查找 计数 矩阵 👍 25 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
    let ans =[];
    for(let i =mat.length-1; i>=0; i--)
    {
        ans =[];
        for(let j=0; j<mat[mat.length-1].length; j++)
        {
            if(mat[i].includes(mat[mat.length-1][j]))
            {
                ans.push(mat[mat.length-1][j]);
            }
        }
        mat[mat.length-1] = ans;
    }
    if(ans.length>=1)
    {
        return ans[0];
    }
    return -1;
};
//leetcode submit region end(Prohibit modification and deletion)
