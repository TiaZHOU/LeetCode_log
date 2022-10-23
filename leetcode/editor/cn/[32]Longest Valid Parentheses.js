//Given a string containing just the characters '(' and ')', find the length of 
//the longest valid (well-formed) parentheses substring. 
//
// 
// Example 1: 
//
// 
//Input: s = "(()"
//Output: 2
//Explanation: The longest valid parentheses substring is "()".
// 
//
// Example 2: 
//
// 
//Input: s = ")()())"
//Output: 4
//Explanation: The longest valid parentheses substring is "()()".
// 
//
// Example 3: 
//
// 
//Input: s = ""
//Output: 0
// 
//
// 
// Constraints: 
//
// 
// 0 <= s.length <= 3 * 10⁴ 
// s[i] is '(', or ')'. 
// 
//
// Related Topics 栈 字符串 动态规划 👍 2049 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = (s) => {
    let maxLen = 0;
    const stack = [];
    stack.push(-1);
    for (let i = 0; i < s.length; i++)
    {
        const c = s[i];
        if (c === '(')
        {
            stack.push(i);
        }
        else
        {
            stack.pop();
            if (stack.length)
            {
                const curMaxLen = i - stack[stack.length - 1];
                maxLen = Math.max(maxLen, curMaxLen);
            } else {
                stack.push(i);
            }
        }
    }
    return maxLen;
};

//leetcode submit region end(Prohibit modification and deletion)
