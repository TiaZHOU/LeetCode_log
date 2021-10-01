//Given an integer n, return true if it is a power of two. Otherwise, return 
//false. 
//
// An integer n is a power of two, if there exists an integer x such that n == 2
//ˣ. 
//
// 
// Example 1: 
//
// 
//Input: n = 1
//Output: true
//Explanation: 2⁰ = 1
// 
//
// Example 2: 
//
// 
//Input: n = 16
//Output: true
//Explanation: 2⁴ = 16
// 
//
// Example 3: 
//
// 
//Input: n = 3
//Output: false
// 
//
// Example 4: 
//
// 
//Input: n = 4
//Output: true
// 
//
// Example 5: 
//
// 
//Input: n = 5
//Output: false
// 
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
//学 👍 409 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    const ans = [
            1,          2,         4,
            8,          16,        32,
            64,         128,       256,
            512,        1024,      2048,
            4096,       8192,      16384,
            32768,      65536,     131072,
            262144,     524288,    1048576,
            2097152,    4194304,   8388608,
            16777216,   33554432,  67108864,
            134217728,  268435456, 536870912,
            1073741824
                ]
    ;
/*
    ans[0] = 1;
    for(let i=1; i<32 ; i++)
    {
        ans[i] = ans[i-1] *2;
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
console.log(isPowerOfTwo(415436));