//Given a string s, determine if it is a palindrome, considering only alphanumer
//ic characters and ignoring cases. 
//
// 
// Example 1: 
//
// 
//Input: s = "A man, a plan, a canal: Panama"
//Output: true
//Explanation: "amanaplanacanalpanama" is a palindrome.
// 
//
// Example 2: 
//
// 
//Input: s = "race a car"
//Output: false
//Explanation: "raceacar" is not a palindrome.
// 
//
// 
// Constraints: 
//
// 
// 1 <= s.length <= 2 * 105 
// s consists only of printable ASCII characters. 
// 
// Related Topics 双指针 字符串 
// 👍 417 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //A-Z 65-90, a-z 97-122;
    //if(s.length <=1) return true;
    s =s.toLowerCase();
    if(!s.match(/[a-z0-9]/)) return true;
    let char = s.match(/[a-z0-9]/g);
    //console.log(char);
    for(let i=0; i< char.length/2; i++)
    {
        if(char[i] != char[char.length-1-i])
        {
            return false;
        }
    }
    return  true;

};
//leetcode submit region end(Prohibit modification and deletion)
console.log(isPalindrome(",fff"));
