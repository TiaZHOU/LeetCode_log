/**
 * link: https://leetcode-cn.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let temp =0, counter=0;
    for(let i=0; i< nums.length;i++)
    {
        if (nums[i] == 0 )
        {
            counter++ ;
        }
    }
    for(let j=0; j< counter; j++)
    {
        for(let i=0; i< nums.length-1;i++)
        {
            if (nums[i] == 0 )
            {
                nums[i] = nums[i+1];
                nums[i+1] = 0;
            }
        }
    }
};