/**
 * link:https://leetcode-cn.com/problems/maximum-score-after-splitting-a-string/
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let one = 0;
    let zero = 0;
    let ans = 0;
    for(let i=0; i< s.length ; i++)
    {
        if(s.charAt(i) == '1') one++;
    }

    for(let j=0; j< s.length-1; j++)
    {
        if(s.charAt(j) == '0')
        {
            zero++;
            ans = Math.max(ans, one + zero);
        }

        if(s.charAt(j) == '1')
        {
            one --;
            ans = Math.max(ans, one + zero);
        }
    }
    return ans;
};