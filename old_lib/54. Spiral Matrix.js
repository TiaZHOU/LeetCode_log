/**
 * link:https://leetcode-cn.com/problems/spiral-matrix/
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix.length || !matrix[0].length)
    {
        return [];
    }
    let row = matrix.length, column = matrix[0].length;
    let ans =[];
    let left = 0, right = column-1; top =0; bottom = row -1;
    while(left <=right && top <= bottom)
    {
        for(let c =left; c<=right; c++)
        {
            ans.push(matrix[top][c]);
        }
        for(let r = top +1; r<= bottom; r++)
        {
            ans.push(matrix[r][right]);
        }
        if(left <right && top < bottom)
        {
            for(let c = right-1; c > left; c--)
            {
                ans.push(matrix[bottom][c]);
            }
            for(let r = bottom; r > top; r--)
            {
                ans.push(matrix[r][left]);
            }
        }
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return ans;
};
