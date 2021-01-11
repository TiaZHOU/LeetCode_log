/**
 * link: https://leetcode-cn.com/problems/create-target-array-in-the-given-order/
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let ans = [];
    for(let i=0; i< nums.length; i++)
    {
        if(ans[index[i]] == undefined)
        {
            ans[index[i]] = nums[i];
        }
        else
        {
            ans.splice(index[i],0,nums[i]);
        }
    }
    return ans;
};