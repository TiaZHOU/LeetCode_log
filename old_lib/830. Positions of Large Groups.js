/**
 * link: https://leetcode-cn.com/problems/positions-of-large-groups/
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let temp = s.charAt(0);
    let pos = 0;
    let order =0;
    let ans = [];
    for(let i=0; i< s.length; i++)
    {
        if(s.charAt(i) != temp)
        {
            if(i-pos >=3)
            {
                order ++;
            }
            temp = s.charAt(i);
            pos = i;
        }
        if( (i-pos) >=2 && s.charAt(i+1) != temp)
        {
            ans[order] = [];
            ans[order][0] = pos;
            ans[order][1] = i;
        }
    }
    return ans;
};