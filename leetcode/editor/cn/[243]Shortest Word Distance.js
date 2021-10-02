//Given an array of strings wordsDict and two different strings that already 
//exist in the array word1 and word2, return the shortest distance between these two 
//words in the list. 
//
// 
// Example 1: 
//
// 
//Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 
//= "coding", word2 = "practice"
//Output: 3
// 
//
// Example 2: 
//
// 
//Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 
//= "makes", word2 = "coding"
//Output: 1
// 
//
// 
// Constraints: 
//
// 
// 1 <= wordsDict.length <= 3 * 10⁴ 
// 1 <= wordsDict[i].length <= 10 
// wordsDict[i] consists of lowercase English letters. 
// word1 and word2 are in wordsDict. 
// word1 != word2 
// 
// Related Topics 数组 字符串 👍 75 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let pos1 = wordsDict.indexOf(word1);
    let pos2 = wordsDict.indexOf(word2);
    let ans = Math.abs(pos1-pos2);
    for(let i=pos1>pos2?pos2:pos1; i< wordsDict.length; i++)
    {
        //console.log(wordsDict[i]);
        if(wordsDict[i] === word1)
        {
            pos1 = i;
            if(Math.abs(pos1-pos2) < ans)
            {
                ans = Math.abs(pos1-pos2);
            }
        }
        if(wordsDict[i] === word2)
        {
            pos2 = i;
            if(Math.abs(pos1-pos2) < ans)
            {
                ans = Math.abs(pos1-pos2);
            }
        }
        //console.log(ans);
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding",  "practice"));