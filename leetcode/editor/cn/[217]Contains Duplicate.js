//Given an integer array nums, return true if any value appears at least twice 
//in the array, and return false if every element is distinct. 
//
// 
// Example 1: 
// Input: nums = [1,2,3,1]
//Output: true
// Example 2: 
// Input: nums = [1,2,3,4]
//Output: false
// Example 3: 
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
//Output: true
// 
// 
// Constraints: 
//
// 
// 1 <= nums.length <= 10⁵ 
// -10⁹ <= nums[i] <= 10⁹ 
// 
// Related Topics 数组 哈希表 排序 👍 487 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    for(let i=0; i<nums.length; i++)
    {
        if(set.has(nums[i]))
        {
            return true;
        }
        else
        {
            set.add(nums[i]);
        }
    }
    return false;
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(containsDuplicate([1,1,1,3,45,6]));