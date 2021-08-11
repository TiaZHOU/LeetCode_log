/**
 * link:https://leetcode-cn.com/problems/range-addition-ii/
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    var x=m;
    var y=n;
    for (let i =0;i< ops.length ; i++)
    {
        if(ops[i][0]<=x)
        {
            x = ops[i][0];
        }
        if(ops[i][1]<=y)
        {
            y = ops[i][1];
        }
    }
    return x*y;
};