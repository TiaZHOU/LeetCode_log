//Given an integer num, repeatedly add all its digits until the result has only 
//one digit, and return it. 
//
// 
// Example 1: 
//
// 
//Input: num = 38
//Output: 2
//Explanation: The process is
//38 --> 3 + 8 --> 11
//11 --> 1 + 1 --> 2 
//Since 2 has only one digit, return it.
// 
//
// Example 2: 
//
// 
//Input: num = 0
//Output: 0
// 
//
// 
// Constraints: 
//
// 
// 0 <= num <= 2³¹ - 1 
// 
//
// 
// Follow up: Could you do it without any loop/recursion in O(1) runtime? 
// Related Topics 数学 数论 模拟 👍 385 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10)
    {
        return num;
    }
    else
    {
        while(num > 9)
        {
            let temp=0;
            let len = num.toString().length;
            for(let i=0; i<len; i++)
            {
                temp = temp + num%10;
                num = (num-(num%10))/10;
                //console.log(temp+"  "+ num);
            }
            num = temp;
        }
        return num;
    }
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(addDigits(38));