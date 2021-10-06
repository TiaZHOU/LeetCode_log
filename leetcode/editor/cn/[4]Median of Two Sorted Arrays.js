//Given two sorted arrays nums1 and nums2 of size m and n respectively, return 
//the median of the two sorted arrays. 
//
// The overall run time complexity should be O(log (m+n)). 
//
// 
// Example 1: 
//
// 
//Input: nums1 = [1,3], nums2 = [2]
//Output: 2.00000
//Explanation: merged array = [1,2,3] and median is 2.
// 
//
// Example 2: 
//
// 
//Input: nums1 = [1,2], nums2 = [3,4]
//Output: 2.50000
//Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
// 
//
// Example 3: 
//
// 
//Input: nums1 = [0,0], nums2 = [0,0]
//Output: 0.00000
// 
//
// Example 4: 
//
// 
//Input: nums1 = [], nums2 = [1]
//Output: 1.00000
// 
//
// Example 5: 
//
// 
//Input: nums1 = [2], nums2 = []
//Output: 2.00000
// 
//
// 
// Constraints: 
//
// 
// nums1.length == m 
// nums2.length == n 
// 0 <= m <= 1000 
// 0 <= n <= 1000 
// 1 <= m + n <= 2000 
// -10⁶ <= nums1[i], nums2[i] <= 10⁶ 
// 
// Related Topics 数组 二分查找 分治 👍 4542 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // nums1长度比nums2小
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let m = nums1.length;
    let n = nums2.length;
    // 在0～m中查找
    let left = 0;
    let right = m;

    // median1：前一部分的最大值
    // median2：后一部分的最小值
    let median1 = 0;
    let median2 = 0;

    while(left <= right) {
        // 前一部分包含 nums1[0 .. i-1] 和 nums2[0 .. j-1]
        // 后一部分包含 nums1[i .. m-1] 和 nums2[j .. n-1]
        const i = left + Math.floor((right - left) / 2);
        const j = Math.floor((m + n + 1) / 2) - i;

        const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
        const minRight1 = i === m ? Infinity : nums1[i];

        const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
        const minRight2 = j === n ? Infinity : nums2[j];

        if (maxLeft1 <= minRight2) {
            median1 = Math.max(maxLeft1, maxLeft2);
            median2 = Math.min(minRight1, minRight2);
            left = i + 1;
        } else{
            right = i - 1;
        }
    }
    return (m + n) % 2 == 0 ? (median1 + median2) / 2 : median1;
};

//leetcode submit region end(Prohibit modification and deletion)
console.log(findMedianSortedArrays([1,3],[2]));