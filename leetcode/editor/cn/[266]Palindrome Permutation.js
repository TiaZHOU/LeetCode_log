//Given a string s, return true if a permutation of the string could form a 
//palindrome. 
//
// 
// Example 1: 
//
// 
//Input: s = "code"
//Output: false
// 
//
// Example 2: 
//
// 
//Input: s = "aab"
//Output: true
// 
//
// Example 3: 
//
// 
//Input: s = "carerac"
//Output: true
// 
//
// 
// Constraints: 
//
// 
// 1 <= s.length <= 5000 
// s consists of only lowercase English letters. 
// 
// Related Topics 位运算 哈希表 字符串 👍 52 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    if(s.length ===1)
    {
        return true;
    }
    let map = new Map();
    for(let i =0; i<s.length; i++)
    {
        if(map.has(s.charAt(i)))
        {
            map.set(s.charAt(i),map.get(s.charAt(i)) +1);
        }
        else
        {
            map.set(s.charAt(i),1);
        }
    }
    let inter = map.values();
    let temp = 0;
    for(let i=0; i< map.size; i++)
    {
        if(inter.next().value%2 ===1)
        {
            temp++;
        }
    }

    if((s.length%2 ===0 && temp===0)||(s.length%2 ===1 && temp === 1))
    {
        return true;
    }
    else
    {
        return false;
    }
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(canPermutePalindrome("aab"))