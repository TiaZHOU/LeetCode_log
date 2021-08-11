/**
 * link: https://leetcode-cn.com/problems/check-array-formation-through-concatenation/
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    for(let i=0 ; i< pieces.length; i++)
    {
        if(arr.indexOf(pieces[i][0])<0)
        {
            return false;
        }
        for(let j = 1; j < pieces[i].length; j++)
        {
            if( arr.indexOf(pieces[i][j])<0 || arr.indexOf(pieces[i][j]) != arr.indexOf(pieces[i][j-1])+1 )
            {
                return false;
            }
        }
    }
    return true;
};