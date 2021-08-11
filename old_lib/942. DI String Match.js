/**
 * link:https://leetcode-cn.com/problems/di-string-match/
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    var number = [];
    var temp;
    number[S.length] = S.length;
    for (let i=0;i< S.length;i++)
    {
        if(S.charAt(i)=='D')
        {
            number[S.length]=number[S.length]-1;
        }
    }
    let pos = number[S.length];
    let neg = number[S.length];
    for (let j= S.length-1; j>=0; j--)
    {
        if(S.charAt(j)=='D')
        {
            pos = pos +1;
            number[j]= pos;
        }
        if(S.charAt(j)=='I')
        {
            neg=neg -1;
            number[j]=neg;
        }
    }
    return number;
};