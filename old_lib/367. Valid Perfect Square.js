/**
 * link:https://leetcode-cn.com/problems/valid-perfect-square/
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var num1 = 1;
    while(num > 0)
    {
        num -= num1;
        num1 += 2;
    }
    return num == 0;

};