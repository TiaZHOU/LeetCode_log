/**
 * link: https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/submissions/
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    for(let i=0;i< nums.length;i++)
    {
        for(let j=1;j<nums.length-i;j++)
        {
            if(nums[i]== nums[i+j])
            {
                return nums[i];
            }
        }
    }
}