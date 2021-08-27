//Given an integer array nums, find the contiguous subarray (containing at least
// one number) which has the largest sum and return its sum. 
//
// A subarray is a contiguous part of an array. 
//
// 
// Example 1: 
//
// 
//Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
//Output: 6
//Explanation: [4,-1,2,1] has the largest sum = 6.
// 
//
// Example 2: 
//
// 
//Input: nums = [1]
//Output: 1
// 
//
// Example 3: 
//
// 
//Input: nums = [5,4,-1,7,8]
//Output: 23
// 
//
// 
// Constraints: 
//
// 
// 1 <= nums.length <= 3 * 104 
// -105 <= nums[i] <= 105 
// 
//
// 
// Follow up: If you have figured out the O(n) solution, try coding another solu
//tion using the divide and conquer approach, which is more subtle. 
// Related Topics 数组 分治 动态规划 
// 👍 3612 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans =nums[0];
    let temp_ans =nums[0];
    for(let i=1; i< nums.length; i++)
    {
        if(temp_ans + nums[i] >0)
        {
            if(temp_ans <0)
            {
                temp_ans = nums[i];
            }
            else
            {
                temp_ans  += nums[i];
            }

            if(temp_ans > ans)
            {
                ans = temp_ans;
            }
        }
        else
        {
                temp_ans = nums[i];
                if(temp_ans > ans)
                {
                    ans = temp_ans;
                }
        }
    }
    return  ans;


};
//leetcode submit region end(Prohibit modification and deletion)
