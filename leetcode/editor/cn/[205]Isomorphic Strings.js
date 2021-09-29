//Given two strings s and t, determine if they are isomorphic. 
//
// Two strings s and t are isomorphic if the characters in s can be replaced to 
//get t. 
//
// All occurrences of a character must be replaced with another character while 
//preserving the order of characters. No two characters may map to the same 
//character, but a character may map to itself. 
//
// 
// Example 1: 
// Input: s = "egg", t = "add"
//Output: true
// Example 2: 
// Input: s = "foo", t = "bar"
//Output: false
// Example 3: 
// Input: s = "paper", t = "title"
//Output: true
// 
// 
// Constraints: 
//
// 
// 1 <= s.length <= 5 * 10⁴ 
// t.length == s.length 
// s and t consist of any valid ascii character. 
// 
// Related Topics 哈希表 字符串 👍 387 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = new Map();
    let rev_map = new Map();
    for(let i=0; i<s.length; i++)
    {
        if(map.has(s.charAt(i)))
        {
            if(map.get(s.charAt(i)) !== t.charAt(i) || rev_map.get(t.charAt(i)) !== s.charAt(i))
            {
                return false;
            }
            //console.log(s.charAt(i) + " and " + t.charAt(i));
        }
        else
        {
            if(rev_map.has(t.charAt(i)))
            {
                return false;
            }
            map.set(s.charAt(i),t.charAt(i));
            rev_map.set(t.charAt(i),s.charAt(i));
            //console.log(s.charAt(i) + " and " + t.charAt(i));
        }
    }
    //console.log(map);
    //console.log(rev_map);
    return true;
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(isIsomorphic("badc","baba"));