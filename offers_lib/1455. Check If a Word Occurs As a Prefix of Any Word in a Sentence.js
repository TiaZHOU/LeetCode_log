/**
 * link:https://leetcode-cn.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    const words = sentence.split(' ');
    let ans = -1;
    for(let i=0; i<words.length; i++)
    {
        for(let j=0; j<= searchWord.length; j++)
        {
            if (searchWord.length>words[i].length||words[i].charAt(j) != searchWord.charAt(j))
            {
                break;
            }
            else
            {
                if(j == (searchWord.length-1))
                {
                    ans = i+1;
                }
            }

        }
        if(ans != -1)
        {
            return ans;
        }
    }
    return ans;
};