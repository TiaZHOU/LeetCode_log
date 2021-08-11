/**
 * link :https://leetcode-cn.com/problems/backspace-string-compare/
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let slist = [];
    let tlist = [];
    let counter = 0;
    for(let i=S.length-1; i>=0; i--)
    {
        if(S.charAt(i) != '#')
        {
            if(counter ==0) slist.push(S.charAt(i));
            if(counter !=0) counter--;
        }
        else
        {
            counter++;
        }
    }
    counter=0;
    for(let i=T.length-1; i>=0; i--)
    {
        if(T.charAt(i) != '#')
        {
            if(counter ==0) tlist.push(T.charAt(i));
            if(counter !=0) counter--;
        }
        else
        {
            counter++;
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