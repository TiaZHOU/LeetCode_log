//Given an array of strings wordsDict and two strings that already exist in the 
//array word1 and word2, return the shortest distance between these two words in 
//the list. 
//
// Note that word1 and word2 may be the same. It is guaranteed that they 
//represent two individual words in the list. 
//
// 
// Example 1: 
// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1
// = "makes", word2 = "coding"
//Output: 1
// Example 2: 
// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1
// = "makes", word2 = "makes"
//Output: 3
// 
// 
// Constraints: 
//
// 
// 1 <= wordsDict.length <= 10⁵ 
// 1 <= wordsDict[i].length <= 10 
// wordsDict[i] consists of lowercase English letters. 
// word1 and word2 are in wordsDict. 
// 
// Related Topics 数组 字符串 👍 37 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(wordsDict, word1, word2) {
    if(word1 !== word2)
    {
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
    }
    else
    {
        let ans = wordsDict.length;
        let pos = wordsDict.indexOf(word1);
        for(let i = pos+1; i<wordsDict.length; i++)
        {
            if(wordsDict[i] === word1)
            {
                ans = ans>Math.abs(pos-i)?Math.abs(pos-i):ans;
                pos = i;
            }
        }
        return ans;
    }

};
//leetcode submit region end(Prohibit modification and deletion)
console.log(shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"],"makes","makes"));