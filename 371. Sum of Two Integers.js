/**
 * link:https://leetcode-cn.com/problems/sum-of-two-integers/
 * @param {number} a
 * @param {number} b
 * @return {number}
 * not allowed to use + and -
 */
var getSum = function(a, b) {
    let temp =0;
    while(b !=0 )
    {
        temp = a^b;
        b = (a&b) << 1;
        a = temp;
    }
    return a;
};
