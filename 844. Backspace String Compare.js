/**
 * link :https://leetcode-cn.com/problems/backspace-string-compare/
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let slist = [];
    let tlist = [];
    for(let i=0; i< S.length; i++)
    {
        if(S.charAt(i) != '#')
        {
            slist.push(S.charAt(i));
        }
        else
        {
            slist.pop();
        }
    }
    for(let i=0; i< T.length; i++)
    {
        if(T.charAt(i) != '#')
        {
            tlist.push(T.charAt(i));
        }
        else
        {
            tlist.pop();
        }
    }
    if(slist.toString() == tlist.toString())
    {
        return true;
    }
    else
    {
        return false;
    }
};