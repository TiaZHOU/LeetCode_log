/**
 * link:https://leetcode-cn.com/problems/max-area-of-island/
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0;
    const rows = grid.length;
    if (rows === 0) return 0;
    const cols = grid[0].length;
    const size = [];


    function helper(grid, i, j, rows, cols) {
        if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === 0) return;
        size[res] ++;
        grid[i][j] = 0;
        helper(grid, i + 1, j, rows, cols);
        helper(grid, i, j + 1, rows, cols);
        helper(grid, i - 1, j, rows, cols);
        helper(grid, i, j - 1, rows, cols);
    }

    for (let i = 0; i < rows; i++)
    {
        for (let j = 0; j < cols; j++)
        {
            size[res] =0;
            if (grid[i][j] === 1)
            {
                helper(grid, i, j, rows, cols);
                res++;
            }
        }
    }
    return Math.max(...size);
};
