/**https://leetcode-cn.com/problems/count-numbers-with-unique-digits/
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if(n == 0) return 1;
    let temp = 9;
    let ans = 9;
    for(let i=0; i<n-1; i++)
    {
        temp = temp*(9-i);
        ans = ans + temp;
    }
    return ans+1;
};