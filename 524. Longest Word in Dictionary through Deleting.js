/**
 * link: https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    let ans = "";
    for(let i=0; i< d.length; i++)
    {
        if(check(s,d[i]) )
        {
            if(d[i].length>ans.length)
            {
                ans = d[i];
            }
            if(d[i].length == ans.length)
            {
                for(let k=0; k< ans.length ; k++)
                {
                    if(d[i].charAt(k) < ans.charAt(k))
                    {
                        ans = d[i];
                        break;
                    }
                    else if(d[i].charAt(k) == ans.charAt(k))
                    {
                        continue;
                    }
                    else if(d[i].charAt(k) > ans.charAt(k))
                    {
                        break;
                    }
                }
            }

        }
    }
    return ans;
};

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var check = function(a,b)
{
    let pos =0;
    for(let j=0; j< a.length; j++)
    {
        if(a.charAt(j) == b.charAt(pos))
        {
            pos++;
        }
        if(pos == b.length)
        {
            return true;
        }
    }
    return false;

};