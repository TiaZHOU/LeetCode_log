//Given an integer n, return true if it is a power of three. Otherwise, return 
//false. 
//
// An integer n is a power of three, if there exists an integer x such that n ==
// 3ˣ. 
//
// 
// Example 1: 
// Input: n = 27
//Output: true
// Example 2: 
// Input: n = 0
//Output: false
// Example 3: 
// Input: n = 9
//Output: true
// Example 4: 
// Input: n = 45
//Output: false
// 
// 
// Constraints: 
//
// 
// -2³¹ <= n <= 2³¹ - 1 
// 
//
// 
//Follow up: Could you solve it without loops/recursion? Related Topics 递归 数学 👍
// 223 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    const ans = [ 1,           3,          9,
        27,          81,        243,
        729,        2187,       6561,
        19683,       59049,     177147,
        531441,     1594323,    4782969,
        14348907,    43046721,  129140163,
        387420489,  1162261467, 3486784401];
    /*
    ans[0] = 1;
    for(let i=1; i<23 ; i++)
    {
        ans[i] = ans[i-1] *3;
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
//console.log(isPowerOfThree(154484848754654864863512));