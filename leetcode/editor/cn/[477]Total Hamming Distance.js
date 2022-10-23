//The Hamming distance between two integers is the number of positions at which 
//the corresponding bits are different. 
//
// Given an integer array nums, return the sum of Hamming distances between all 
//the pairs of the integers in nums. 
//
// 
// Example 1: 
//
// 
//Input: nums = [4,14,2]
//Output: 6
//Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 001
//0 (just
//showing the four bits relevant in this case).
//The answer will be:
//HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 
//2 + 2 = 6.
// 
//
// Example 2: 
//
// 
//Input: nums = [4,14,4]
//Output: 4
// 
//
// 
// Constraints: 
//
// 
// 1 <= nums.length <= 10⁴ 
// 0 <= nums[i] <= 10⁹ 
// The answer for the given input will fit in a 32-bit integer. 
// 
//
// Related Topics 位运算 数组 数学 👍 272 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let ans = 0;
    for(let n =0; n<30 ; n++)
    {
        let temp=0;
        for(let i=0; i<nums.length; i++)
        {
            temp += (nums[i]>>n) &1;
        }
        ans += temp*(nums.length - temp);
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
