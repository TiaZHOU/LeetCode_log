/**
 * link: https://leetcode-cn.com/problems/smallest-integer-divisible-by-k/
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function(K) {
    let pow=0, ans=0;
    if(K%2 ==0 || K% 5 ==0 )
    {
        return -1;
    }
    while(true)
    {
        ans = ans*10%K + 1;
        pow ++;
        if(ans % K == 0)
        {
            return pow;
        }
    }
};