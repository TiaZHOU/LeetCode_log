//Given a string s, find the length of the longest substring without repeating 
//characters. 
//
// 
// Example 1: 
//
// 
//Input: s = "abcabcbb"
//Output: 3
//Explanation: The answer is "abc", with the length of 3.
// 
//
// Example 2: 
//
// 
//Input: s = "bbbbb"
//Output: 1
//Explanation: The answer is "b", with the length of 1.
// 
//
// Example 3: 
//
// 
//Input: s = "pwwkew"
//Output: 3
//Explanation: The answer is "wke", with the length of 3.
//Notice that the answer must be a substring, "pwke" is a subsequence and not a 
//substring.
// 
//
// Example 4: 
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
// 0 <= s.length <= 5 * 10⁴ 
// s consists of English letters, digits, symbols and spaces. 
// 
// Related Topics 哈希表 字符串 滑动窗口 👍 6090 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let temp =[];
    let ans =1;
    if( s.length == 0) {
        ans = 0;
    }
    temp[0] = s.charAt(0);
    for(let i=1; i<s.length; i++) {
        if(temp.includes(s.charAt(i))) {
            if (s.charAt(i) == temp[0]) {
                temp.splice(0, 1);
            } else {
                temp.splice(0, temp.indexOf(s.charAt(i)) + 1);
            }
        }
        temp.push(s.charAt(i));

        if(temp.length > ans) {
            ans = temp.length;
        }
    }
    return  ans;
};
//leetcode submit region end(Prohibit modification and deletion)
