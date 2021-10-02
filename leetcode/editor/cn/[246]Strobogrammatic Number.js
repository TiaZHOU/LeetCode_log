//Given a string num which represents an integer, return true if num is a 
//strobogrammatic number. 
//
// A strobogrammatic number is a number that looks the same when rotated 180 
//degrees (looked at upside down). 
//
// 
// Example 1: 
// Input: num = "69"
//Output: true
// Example 2: 
// Input: num = "88"
//Output: true
// Example 3: 
// Input: num = "962"
//Output: false
// Example 4: 
// Input: num = "1"
//Output: true
// 
// 
// Constraints: 
//
// 
// 1 <= num.length <= 50 
// num consists of only digits. 
// num does not contain any leading zeros except for zero itself. 
// 
// Related Topics 哈希表 双指针 字符串 👍 33 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    let map = new Map(
        [
            ["9","6"],
            ["6","9"],
            ["8","8"],
            ["1","1"],
            ["0","0"],
        ]
    );
    let len = num.length;
    for(let i=0; i<len/2; i++)
    {
        if(map.get(num[i]) !== num[len-1-i])
        {
            return false;
        }
    }
    return true;
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(isStrobogrammatic("101"));