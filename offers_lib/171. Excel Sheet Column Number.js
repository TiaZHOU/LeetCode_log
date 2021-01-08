/**
 * link :https://leetcode-cn.com/problems/excel-sheet-column-number/
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let temp = 0;
    let ans =0;
    let counter = 1;
    for(let i=s.length-1; i >= 0; i--)
    {
        //turn Letter into ASCII code
        temp = s.charAt(i).charCodeAt()-64;
        ans = ans + counter * temp;
        counter = counter *26;
    }
    return ans;
};