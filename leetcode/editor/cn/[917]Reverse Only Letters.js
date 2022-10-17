//Given a string s, reverse the string according to the following rules: 
//
// 
// All the characters that are not English letters remain in the same position. 
//
// All the English letters (lowercase or uppercase) should be reversed. 
// 
//
// Return s after reversing it. 
//
// 
// Example 1: 
// Input: s = "ab-cd"
//Output: "dc-ba"
// 
// Example 2: 
// Input: s = "a-bC-dEf-ghIj"
//Output: "j-Ih-gfE-dCba"
// 
// Example 3: 
// Input: s = "Test1ng-Leet=code-Q!"
//Output: "Qedo1ct-eeLg=ntse-T!"
// 
// 
// Constraints: 
//
// 
// 1 <= s.length <= 100 
// s consists of characters with ASCII values in the range [33, 122]. 
// s does not contain '\"' or '\\'. 
// 
//
// Related Topics 双指针 字符串 👍 182 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {

    let left = 0;
    let right = s.length-1;
    let temp = s.split("");
    while(left < right)
    {
        while(((s.charCodeAt(left) < 97 &&  s.charCodeAt(left) >90 ) || s.charCodeAt(left) <65) && left < right)
        {
            left++;
        }
        while(((s.charCodeAt(right) < 97 &&  s.charCodeAt(right) >90 ) || s.charCodeAt(right) <65)&& left < right)
        {
            right--;
        }

        let tempChar = temp[left];
        temp[left] = temp[right];
        temp[right] =  tempChar;
        left++;
        right--;
    }

    return temp.join("");

};
//leetcode submit region end(Prohibit modification and deletion)
