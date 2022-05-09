//Given an array of integers arr, return true if and only if it is a valid 
//mountain array. 
//
// Recall that arr is a mountain array if and only if: 
//
// 
// arr.length >= 3 
// There exists some i with 0 < i < arr.length - 1 such that:
// 
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 
// 
// 
// 
//
// 
// Example 1: 
// Input: arr = [2,1]
//Output: false
// Example 2: 
// Input: arr = [3,5,5]
//Output: false
// Example 3: 
// Input: arr = [0,3,2,1]
//Output: true
// 
// 
// Constraints: 
//
// 
// 1 <= arr.length <= 10⁴ 
// 0 <= arr[i] <= 10⁴ 
// 
// Related Topics 数组 👍 175 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let status = 0;
    if(arr.length <=2 || arr[0]>arr[1]|| arr[arr.length-2] < arr[arr.length-1])
    {
        return false;
    }
    for(let i=1 ; i< arr.length ; i++)
    {
        if(arr[i-1] == arr[i])
        {
            return false;
        }
        if(arr[i-1] > arr[i])
        {
            if(status == 0)
            {
                status = 1;
            }
        }
        if(arr[i-1] < arr[i] && status == 1)
        {
            return false;
        }

    }
    return true;

};
//leetcode submit region end(Prohibit modification and deletion)
