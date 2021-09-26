//Given an integer n, return true if it is a power of four. Otherwise, return 
//false. 
//
// An integer n is a power of four, if there exists an integer x such that n == 
//4ˣ. 
//
// 
// Example 1: 
// Input: n = 16
//Output: true
// Example 2: 
// Input: n = 5
//Output: false
// Example 3: 
// Input: n = 1
//Output: true
// 
// 
// Constraints: 
//
// 
// -2³¹ <= n <= 2³¹ - 1 
// 
//
// 
//Follow up: Could you solve it without loops/recursion? Related Topics 位运算 递归 数
//学 👍 267 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    const ans = [
        1,             4,
        16,            64,
        256,          1024,
        4096,         16384,
        65536,        262144,
        1048576,       4194304,
        16777216,      67108864,
        268435456,    1073741824,];
    /*
    ans[0] = 1;
    for(let i=1; i<23 ; i++)
    {
        ans[i] = ans[i-1] *4;
    }
    console.log(ans);
    */
    if(ans.includes(n))

    {
        return true;
    }
    else
    {
        return false;
    }

};
//leetcode submit region end(Prohibit modification and deletion)
//console.log(isPowerOfFour(1254231541235));
