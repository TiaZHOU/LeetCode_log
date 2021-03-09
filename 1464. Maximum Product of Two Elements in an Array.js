/**
 * link:https://leetcode-cn.com/problems/maximum-product-of-two-elements-in-an-array/
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let temp1 = 0;
    let temp2 = 0;
    for(let i=0; i<nums.length; i++)
    {
        if(nums[i] > temp2)
        {
            temp1 = temp2;
            temp2 = nums[i];

        }
        else
        {
            if(nums[i] >= temp1)
            {
                temp1 = nums[i];
            }
        }
    }
    return (temp2-1)*(temp1 - 1);
};