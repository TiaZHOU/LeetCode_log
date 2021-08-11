/**
 * link:https://leetcode-cn.com/problems/count-negative-numbers-in-a-sorted-matrix/
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let ans = 0;
    let last_index = grid[0].length-1;
    for(let i=0; i<grid.length; i++)
    {
        if(grid[i][last_index] >=0)
        {
            continue;
        }
        for(let j=last_index; j>=0; j--)
        {
            if(grid[i][j] < 0)
            {
                ans = ans + grid.length-i;
                last_index--;
            }
        }
    }
    return ans;
};