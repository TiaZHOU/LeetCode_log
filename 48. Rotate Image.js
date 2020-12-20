/**
 * link: https://leetcode-cn.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let size = matrix.length;
    let temp;
    //loops for layers
    for(let i = 0; i < size/2; i++)
    {
        //loops for pos
        for(let j = 0; j < size-1-2*i; j++)
        {
            temp = matrix[i][i+j];
            matrix[i][i+j] = matrix[size-1-i-j][i];
            matrix[size-1-i-j][i] = matrix[size-1-i][size-1-i-j];
            matrix[size-1-i][size-1-i-j] = matrix[i+j][size-1-i];
            matrix[i+j][size-1-i] = temp;
        }
    }

};