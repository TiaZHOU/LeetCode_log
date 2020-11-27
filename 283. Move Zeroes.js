/**
 * link: https://leetcode-cn.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let counter=0;
    for(let i=0; i< nums.length;i++)
    {
        if (nums[i] != 0 )
        {
            nums[counter++] = nums[i];
        }
    }
    for(let i = counter; i< nums.length; i++)
    {
        nums[i] = 0;
    }
};