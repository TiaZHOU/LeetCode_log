/**
 * link :https://leetcode-cn.com/problems/count-of-matches-in-tournament/
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let ans =0;
    while(n > 1)
    {
        if(n% 2 ==0)
        {
            n = n / 2;
            ans = ans + n;
        }
        else
        {
            n = (n+1)/2 ;
            ans = ans + n -1;
        }
    }
    return ans;
};

var numberOfMatches2 = function(n) {
    return n-1;
};