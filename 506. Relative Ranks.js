/**
 * link: https://leetcode-cn.com/problems/relative-ranks/
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var temp = Array.from(nums);
    temp.sort((a, b) => b - a);
    for (let i=0; i< nums.length;i++)
    {
        if(nums[i] == temp[0])
        {
            nums[i] = "Gold Medal";
            continue;
        }
        if(nums[i] == temp[1])
        {
            nums[i] = "Silver Medal";
            continue;
        }
        if(nums[i] == temp[2])
        {
            nums[i] = "Bronze Medal";
            continue;
        }
        nums[i] = temp.indexOf(nums[i])+1;
        nums[i] =  nums[i].toString();
    }

    return nums;

};