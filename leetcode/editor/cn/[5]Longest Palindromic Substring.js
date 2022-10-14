//Given a string s, return the longest palindromic substring in s. 
//
// A string is called a palindrome string if the reverse of that string is the 
//same as the original string. 
//
// 
// Example 1: 
//
// 
//Input: s = "babad"
//Output: "bab"
//Explanation: "aba" is also a valid answer.
// 
//
// Example 2: 
//
// 
//Input: s = "cbbd"
//Output: "bb"
// 
//
// 
// Constraints: 
//
// 
// 1 <= s.length <= 1000 
// s consist of only digits and English letters. 
// 
//
// Related Topics 字符串 动态规划 👍 5807 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let ans = s.charAt(0);
    let max_length = 1;
    for(let i=1/2; i<s.length; i=i+1/2)
    {
        let head = i-1/2;
        let tail = i+1/2;
        let temp="";
        let size = 0;

        if(i%1 === 0) {
            head = i - 1;
            tail = i + 1;
            temp = s.charAt(i);
            size = 1;
        }
        while ( head>=0 && tail < s.length)
        {
            if(s.charAt(head) === s.charAt(tail))
            {
                temp = s.charAt(head) + temp + s.charAt(tail);
                size = size+2;
                head--;
                tail++;
            }
            else
            {
                break;
            }
        }
        if(size >= max_length)
        {
            ans = temp;
            max_length = size;
        }

    }
    return ans;
};

console.log(longestPalindrome("ccc"));
//leetcode submit region end(Prohibit modification and deletion)
