/**
 * link:https://leetcode-cn.com/problems/count-negative-numbers-in-a-sorted-matrix/
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let ans = 0;
    for(let i=0; i<grid.length; i++)
    {
        if(grid[i][grid[i].length-1] >=0)
        {
            continue;
        }
        for(let j=grid[i].length-1; j>=0; j--)
        {
            if(grid[i][j] < 0)
            {
                ans ++;
            }
        }
    }
    return ans;
};