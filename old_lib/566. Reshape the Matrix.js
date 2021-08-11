/**
 * link:https://leetcode-cn.com/problems/reshape-the-matrix/
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let size = nums.length*nums[0].length;
    if(size != r*c) return nums;
    var ans = Array.from(Array(r), () => new Array(c));
    let row =0, column = 0;
    for(let i=0; i<nums.length; i++)
    {
        for(let j=0; j< nums[0].length; j++)
        {
            if(column < c)
            {
                ans[row][column++] =  nums[i][j];
            }
            else
            {
                ans[++row][0] =  nums[i][j];
                column = 1;
            }
        }
    }
    return ans;
};