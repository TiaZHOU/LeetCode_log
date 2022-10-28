//Given a rows x cols screen and a sentence represented as a list of strings, 
//return the number of times the given sentence can be fitted on the screen. 
//
// The order of words in the sentence must remain unchanged, and a word cannot 
//be split into two lines. A single space must separate two consecutive words in a 
//line. 
//
// 
// Example 1: 
//
// 
//Input: sentence = ["hello","world"], rows = 2, cols = 8
//Output: 1
//Explanation:
//hello---
//world---
//The character '-' signifies an empty space on the screen.
// 
//
// Example 2: 
//
// 
//Input: sentence = ["a", "bcd", "e"], rows = 3, cols = 6
//Output: 2
//Explanation:
//a-bcd- 
//e-a---
//bcd-e-
//The character '-' signifies an empty space on the screen.
// 
//
// Example 3: 
//
// 
//Input: sentence = ["i","had","apple","pie"], rows = 4, cols = 5
//Output: 1
//Explanation:
//i-had
//apple
//pie-i
//had--
//The character '-' signifies an empty space on the screen.
// 
//
// 
// Constraints: 
//
// 
// 1 <= sentence.length <= 100 
// 1 <= sentence[i].length <= 10 
// sentence[i] consists of lowercase English letters. 
// 1 <= rows, cols <= 2 * 10⁴ 
// 
//
// Related Topics 字符串 动态规划 模拟 👍 95 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function(sentence, rows, cols) {
    let str = sentence.map(w => w + " ").join("");
    let len = str.length;
    let index = 0;
    for (let i = 0; i < rows; i += 1)
    {
        index += cols;
        if (str[index % len] == " ")
        {
            index ++;
        } else {
            while (index && str[(index-1) % len] != " ")
            {
                index --;
            }
        }
    }
    return Math.floor(index / len);
};
//leetcode submit region end(Prohibit modification and deletion)
