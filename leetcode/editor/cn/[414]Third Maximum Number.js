//Given an integer array nums, return the third distinct maximum number in this 
//array. If the third maximum does not exist, return the maximum number. 
//
// 
// Example 1: 
//
// 
//Input: nums = [3,2,1]
//Output: 1
//Explanation:
//The first distinct maximum is 3.
//The second distinct maximum is 2.
//The third distinct maximum is 1.
// 
//
// Example 2: 
//
// 
//Input: nums = [1,2]
//Output: 2
//Explanation:
//The first distinct maximum is 2.
//The second distinct maximum is 1.
//The third distinct maximum does not exist, so the maximum (2) is returned 
//instead.
// 
//
// Example 3: 
//
// 
//Input: nums = [2,2,3,1]
//Output: 1
//Explanation:
//The first distinct maximum is 3.
//The second distinct maximum is 2 (both 2's are counted together since they 
//have the same value).
//The third distinct maximum is 1.
// 
//
// 
// Constraints: 
//
// 
// 1 <= nums.length <= 10⁴ 
// -2³¹ <= nums[i] <= 2³¹ - 1 
// 
//
// 
//Follow up: Can you find an O(n) solution? Related Topics 数组 排序 👍 307 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max_1 = nums[0];
    let max_2 = -Infinity;
    let max_3 = -Infinity;
    for(let i=1; i<nums.length; i++)
    {
        if(nums[i] > max_1)
        {
            max_3 = max_2;
            max_2 = max_1;
            max_1 = nums[i];
        }
        else if(nums[i] > max_2 && nums[i] <max_1 )
        {
            max_3 = max_2;
            max_2 = nums[i];
        }
        else if(nums[i] > max_3 && nums[i] <max_2 )
        {
            max_3 = nums[i];
        }
    }
    if(max_3 === -Infinity)
    {
        return max_1;
    }
    else
    {
        return max_3;
    }

};
//leetcode submit region end(Prohibit modification and deletion)
console.log(thirdMax([2,2,3,1]));