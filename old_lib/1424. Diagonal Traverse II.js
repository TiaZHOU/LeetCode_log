/**
 * link:https://leetcode-cn.com/problems/diagonal-traverse-ii/
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    let res=[];
    for (let i=0;i<nums.length;i++){
        for (let j=0;j<nums[i].length;j++){
            // res首位追加，这样不需要再次操作数组
            res[i+j] ? res[i+j].unshift(nums[i][j]) : res[i+j]=[nums[i][j]];
        }
    }
    // 数组扁平化
    return res.flat(Infinity)
};