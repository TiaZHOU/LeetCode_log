/**
 * link:https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 1)
    {
        return nums.length;
    }
    let i = 1;
    while (nums[i] != null)
    {
        if(nums[i] == nums[i-1])
        {
            nums.splice(i,1);
        }
        else
        {
            i++;
        }
    }
    return nums.length;
};