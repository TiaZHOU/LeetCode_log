//We have an integer array nums, where all the integers in nums are 0 or 1. You 
//will not be given direct access to the array, instead, you will have an API 
//ArrayReader which have the following functions: 
//
// 
// int query(int a, int b, int c, int d): where 0 <= a < b < c < d < 
//ArrayReader.length(). The function returns the distribution of the value of the 4 elements 
//and returns:
//
// 
// 4 : if the values of the 4 elements are the same (0 or 1). 
// 2 : if three elements have a value equal to 0 and one element has value 
//equal to 1 or vice versa. 
// 0 : if two element have a value equal to 0 and two elements have a value 
//equal to 1. 
// 
// 
// int length(): Returns the size of the array. 
// 
//
// You are allowed to call query() 2 * n times at most where n is equal to 
//ArrayReader.length(). 
//
// Return any index of the most frequent value in nums, in case of tie, return -
//1. 
//
// 
// Example 1: 
//
// 
//Input: nums = [0,0,1,0,1,1,1,1]
//Output: 5
//Explanation: The following calls to the API
//reader.length() // returns 8 because there are 8 elements in the hidden array.
//
//reader.query(0,1,2,3) // returns 2 this is a query that compares the elements 
//nums[0], nums[1], nums[2], nums[3]
//// Three elements have a value equal to 0 and one element has value equal to 1
// or viceversa.
//reader.query(4,5,6,7) // returns 4 because nums[4], nums[5], nums[6], nums[7] 
//have the same value.
//we can infer that the most frequent value is found in the last 4 elements.
//Index 2, 4, 6, 7 is also a correct answer.
// 
//
// Example 2: 
//
// 
//Input: nums = [0,0,1,1,0]
//Output: 0
// 
//
// Example 3: 
//
// 
//Input: nums = [1,0,1,0,1,0,1,0]
//Output: -1
// 
//
// 
// Constraints: 
//
// 
// 5 <= nums.length <= 10⁵ 
// 0 <= nums[i] <= 1 
// 
//
// 
// Follow up: What is the minimum number of calls needed to find the majority 
//element? 
// Related Topics 数组 数学 交互 👍 4 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *     // Compares 4 different elements in the array
 *     // return 4 if the values of the 4 elements are the same (0 or 1).
 *     // return 2 if three elements have a value equal to 0 and one element has value equal to 1 or vice versa.
 *     // return 0 : if two element have a value equal to 0 and two elements have a value equal to 1.
 *     @param {number} a, b, c, d
 *     @return {number}
 *     this.query = function(a, b, c, d) {
 *         ...
 *     }; 
 *
 *     // Returns the length of the array
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @return {number}
 */
var guessMajority = function(reader) {
    let pos_0 = 0;
    let pos_1 = 0;
    let count_0 = 1;
    let count_1 = 0;
    if(reader.query(0,2,3,4) === reader.query(1,2,3,4))
    {
        pos_0 = 1;
        count_0++;
    }
    else
    {
        pos_1 = 1;
        count_1++;
    }
    if(reader.query(0,1,3,4) === reader.query(1,2,3,4))
    {
        pos_0 = 2;
        count_0++;
    }
    else
    {
        pos_1 = 2;
        count_1++;
    }
    if(reader.query(0,1,2,4) === reader.query(1,2,3,4))
    {
        pos_0 = 3;
        count_0++;
    }
    else
    {
        pos_1 = 3;
        count_1++;
    }
    if(reader.query(0,1,2,3) === reader.query(1,2,3,4))
    {
        pos_0 = 4;
        count_0++;
    }
    else
    {
        pos_1 = 4;
        count_1++;
    }
    let len = reader.length();

    for(let i=5; i<len; i++)
    {
        if(reader.query(0,1,2,3) === reader.query(1,2,3,i))
        {
            pos_0 = i;
            count_0++;
        }
        else
        {
            pos_1 = i;
            count_1++;
        }
    }
    if(count_0 === count_1)
    {
        return -1;
    }
    if(count_0 > count_1)
    {
        return pos_0;
    }
    if(count_0 < count_1)
    {
        return pos_1;
    }
};
//leetcode submit region end(Prohibit modification and deletion)
