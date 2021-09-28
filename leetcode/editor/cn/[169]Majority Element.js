//Given an array nums of size n, return the majority element. 
//
// The majority element is the element that appears more than ⌊n / 2⌋ times. You
// may assume that the majority element always exists in the array. 
//
// 
// Example 1: 
// Input: nums = [3,2,3]
//Output: 3
// Example 2: 
// Input: nums = [2,2,1,1,1,2,2]
//Output: 2
// 
// 
// Constraints: 
//
// 
// n == nums.length 
// 1 <= n <= 5 * 104 
// -231 <= nums[i] <= 231 - 1 
// 
//
// 
//Follow-up: Could you solve the problem in linear time and in O(1) space? Relat
//ed Topics 数组 哈希表 分治 计数 排序 
// 👍 1147 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let  map = new Map();
    for(let i=0; i< nums.length; i++)
    {
        if(map.has(nums[i]))
        {
            map.set(nums[i],map.get(nums[i])+1);
        }
        else
        {
            map.set(nums[i],1);
        }
        if(map.get(nums[i]) > nums.length/2)
        {
            return nums[i];
        }
    }
    return 0;
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(majorityElement([1,1,1,1,1,2,2,2,2,2,2,2,2,2]))