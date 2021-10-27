//Given a pattern and a string s, find if s follows the same pattern. 
//
// Here follow means a full match, such that there is a bijection between a 
//letter in pattern and a non-empty word in s. 
//
// 
// Example 1: 
//
// 
//Input: pattern = "abba", s = "dog cat cat dog"
//Output: true
// 
//
// Example 2: 
//
// 
//Input: pattern = "abba", s = "dog cat cat fish"
//Output: false
// 
//
// Example 3: 
//
// 
//Input: pattern = "aaaa", s = "dog cat cat dog"
//Output: false
// 
//
// Example 4: 
//
// 
//Input: pattern = "abba", s = "dog dog dog dog"
//Output: false
// 
//
// 
// Constraints: 
//
// 
// 1 <= pattern.length <= 300 
// pattern contains only lower-case English letters. 
// 1 <= s.length <= 3000 
// s contains only lower-case English letters and spaces ' '. 
// s does not contain any leading or trailing spaces. 
// All the words in s are separated by a single space. 
// 
// Related Topics 哈希表 字符串 👍 392 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let temp = s.split(" ");
    if(temp.length !== pattern.length)
    {
        return false;
    }
    let map = new Map();
    let re_map = new Map();
    for(let i =0; i<pattern.length; i++)
    {
        if(!map.has(pattern.charAt(i))  && !re_map.has(temp[i]))
        {
            map.set(pattern.charAt(i),temp[i]);
            re_map.set(temp[i],pattern.charAt(i));
        }
        else
        {
            if(map.get(pattern.charAt(i)) !== temp[i] || re_map.get(temp[i]) !== pattern.charAt(i))
            {
                return false;
            }
        }
    }
    return true;

};
//leetcode submit region end(Prohibit modification and deletion)
