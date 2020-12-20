/**
 * link: https://leetcode-cn.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * method 1 : rotate one by one
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

/**
 * link: https://leetcode-cn.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * method 2 : turn upside down then diagonal mirror swap whole image
 */
var rotate = function(matrix) {
    let temp;
    //loops for mirro swap
    for(let i = 0; i < matrix.length/2; i++)
    {
        for(let j =0 ; j< matrix.length; j++)
        {
            temp = matrix[i][j];
            matrix[i][j] = matrix[matrix.length-1-i][j];
            matrix[matrix.length-1-i][j] = temp;
        }
    }
    //loops for Diagonal mirror swap
    for(let i=0; i < matrix.length; i++)
    {
        for (let j =0; j<= i; j++)
        {
            temp = matrix[i][j];
            matrix[i][j]= matrix[j][i];
            matrix[j][i] = temp;
        }
    }

};
