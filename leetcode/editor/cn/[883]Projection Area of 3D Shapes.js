//You are given an n x n grid where we place some 1 x 1 x 1 cubes that are axis-
//aligned with the x, y, and z axes. 
//
// Each value v = grid[i][j] represents a tower of v cubes placed on top of the 
//cell (i, j). 
//
// We view the projection of these cubes onto the xy, yz, and zx planes. 
//
// A projection is like a shadow, that maps our 3-dimensional figure to a 2-dime
//nsional plane. We are viewing the "shadow" when looking at the cubes from the to
//p, the front, and the side. 
//
// Return the total area of all three projections. 
//
// 
// Example 1: 
//
// 
//Input: grid = [[1,2],[3,4]]
//Output: 17
//Explanation: Here are the three projections ("shadows") of the shape made with
// each axis-aligned plane.
// 
//
// Example 2: 
//
// 
//Input: grid = [[2]]
//Output: 5
// 
//
// Example 3: 
//
// 
//Input: grid = [[1,0],[0,2]]
//Output: 8
// 
//
// Example 4: 
//
// 
//Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
//Output: 14
// 
//
// Example 5: 
//
// 
//Input: grid = [[2,2,2],[2,1,2],[2,2,2]]
//Output: 21
// 
//
// 
// Constraints: 
//
// 
// n == grid.length 
// n == grid[i].length 
// 1 <= n <= 50 
// 0 <= grid[i][j] <= 50 
// 
// Related Topics 几何 数组 数学 矩阵 
// 👍 57 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let n = grid.length;
    //projection on xy layer
    let xy=0;
    //projections on xz layer, the largest num within same i order
    let xz = new Array(n);
    //projections on yz layer, the largest num within same j order
    let yz = new Array(n);

    for(let i=0; i<n;i++)
    {
        xz[i] = grid[i][0];
        for(let j = 0; j<n; j++ )
        {


            if(grid[i][j] !=0 )xy++;
            if( i==0 ) yz[j] = grid[i][j];
            if(grid[i][j] >= xz[i]) xz[i]=grid[i][j];
            if(grid[i][j] >= yz[j]) yz[j]=grid[i][j];

        }

    }
    for(let k=0; k<n; k++)
    {
        xy= xy + xz[k] + yz[k];
    }

    return xy;

};
//leetcode submit region end(Prohibit modification and deletion)

let ans = projectionArea( [[1,2],[3,4]]);
console.log(ans);