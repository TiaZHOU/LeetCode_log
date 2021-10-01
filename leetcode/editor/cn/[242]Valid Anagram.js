//Given two strings s and t, return true if t is an anagram of s, and false 
//otherwise. 
//
// 
// Example 1: 
// Input: s = "anagram", t = "nagaram"
//Output: true
// Example 2: 
// Input: s = "rat", t = "car"
//Output: false
// 
// 
// Constraints: 
//
// 
// 1 <= s.length, t.length <= 5 * 10⁴ 
// s and t consist of lowercase English letters. 
// 
//
// 
// Follow up: What if the inputs contain Unicode characters? How would you 
//adapt your solution to such a case? 
// Related Topics 哈希表 字符串 排序 👍 435 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let map = new Map();
    for (let i=0; i< s.length; i++)
    {
        if(map.has(s.charAt(i)))
        {
            map.set(s.charAt(i),map.get(s.charAt(i))+1);
        }
        else
        {
            map.set((s.charAt(i)),1);
        }
    }
    for(let j=0; j<s.length; j++)
    {
        if(!map.has(t.charAt(j)))
        {
            return false;
        }
        else
        {
            map.set(t.charAt(j),map.get(t.charAt(j))-1);
            if(map.get(t.charAt(j)) < 0 )
            {
                return false;
            }
        }
    }
    return true;
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(isAnagram("aabbc","cbaba"));