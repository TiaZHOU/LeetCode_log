/**
 * link:https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    return nums.sort((a,b)=>b%2-a%2)
};
