/**
 * link: https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/submissions/
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    if (n == 0 || n== 1)
    {
        return 1;
    }
    let a = 1 ,b = 1;
    for (let i = 2; i <= n; i++)
    {
        b += a;
        a = b - a;
        b %= 1e9 + 7;
        a %= 1e9 + 7;
    }
    return b;
};