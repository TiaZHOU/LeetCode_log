/**
 * link:https://leetcode-cn.com/problems/perform-string-shifts/
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    let move =0;
    for (let i=0; i<shift.length; i++)
    {
        if(shift[i][0] == 0)
        {
            move = move - shift[i][1];
        }
        if(shift[i][0] == 1)
        {
            move = move + shift[i][1];
        }
    }
    if(move == 0 )
    {
        return s;
    }
    let pos =0;
    if(move > 0)
    {
        pos = s.length - move%s.length;
    }
    if(move < 0)
    {
        pos = move%s.length * (-1);
    }

    let ans = "";
    for(let i=0; i< s.length; i++)
    {
        if(pos > s.length-1)
        {
            pos = pos%s.length;
        }
        ans = ans.concat(s.charAt(pos));
        pos++;
    }
    return ans;
};