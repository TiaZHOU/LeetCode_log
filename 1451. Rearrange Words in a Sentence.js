/**
 * link:https://leetcode-cn.com/problems/rearrange-words-in-a-sentence/submissions/
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    var word = text.split(" ");
    var max_length = 1;
    var ans = "";
    for(let i =0; i< word.length;i++)
    {
        if (word[i].length>max_length)
        {
            max_length=word[i].length;
        }
    }
    for(let j = 0;j<=max_length;j++)
    {
        for(w in word)
        {
            if (word[w].length==j)
            {
                ans= ans.concat(word[w].toString().toLowerCase());
                ans= ans.concat(" ");
            }
        }
    }
    ans = ans.charAt(0).toString().toUpperCase() + ans.substr(1,ans.length-2);
    return ans;
};