//A permutation perm of n + 1 integers of all the integers in the range [0, n] 
//can be represented as a string s of length n where: 
//
// 
// s[i] == 'I' if perm[i] < perm[i + 1], and 
// s[i] == 'D' if perm[i] > perm[i + 1]. 
// 
//
// Given a string s, reconstruct the permutation perm and return it. If there 
//are multiple valid permutations perm, return any of them. 
//
// 
// Example 1: 
// Input: s = "IDID"
//Output: [0,4,1,3,2]
// Example 2: 
// Input: s = "III"
//Output: [0,1,2,3]
// Example 3: 
// Input: s = "DDI"
//Output: [3,2,0,1]
// 
// 
// Constraints: 
//
// 
// 1 <= s.length <= 10⁵ 
// s[i] is either 'I' or 'D'. 
// 
// Related Topics 贪心 数组 数学 双指针 字符串 👍 343 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let min = 0;
    let max = s.length;
    let ans = [];
    if(s.charAt(0) == "D")
    {
        ans[0] = max;
        max--;
    }
    else
    {
        ans[0] = min;
        min ++;
    }
    for(let i=1; i<=s.length; i++)
    {
        if(s.charAt(i-1) == "I")
        {
            if(s.charAt(i) == "I")//ii
            {
                ans[i] = min;
                min ++;
            }
            else//id
            {
                ans[i] = max;
                max --;
            }

        }
        else//d
        {
            if(s.charAt(i) == "I")//di
            {
                ans[i] = min;
                min ++;
            }
            else//dd
            {
                ans[i] = max;
                max --;
            }

        }
    }
    return ans;

};
//leetcode submit region end(Prohibit modification and deletion)
