//Given an integer columnNumber, return its corresponding column title as it 
//appears in an Excel sheet. 
//
// For example: 
//
// 
//A -> 1
//B -> 2
//C -> 3
//...
//Z -> 26
//AA -> 27
//AB -> 28 
//...
// 
//
// 
// Example 1: 
//
// 
//Input: columnNumber = 1
//Output: "A"
// 
//
// Example 2: 
//
// 
//Input: columnNumber = 28
//Output: "AB"
// 
//
// Example 3: 
//
// 
//Input: columnNumber = 701
//Output: "ZY"
// 
//
// Example 4: 
//
// 
//Input: columnNumber = 2147483647
//Output: "FXSHRXW"
// 
//
// 
// Constraints: 
//
// 
// 1 <= columnNumber <= 2³¹ - 1 
// 
// Related Topics 数学 字符串 👍 459 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const letters = [   'Z','A','B','C','D','E','F','G','H','I',
                        'J','K','L','M','N','O','P','Q','R',
                        'S','T','U','V','W','X','Y'];
    let ans ="";
    while (columnNumber > 0)
    {
        ans =  letters[columnNumber % 26] + ans;
        //columnNumber -1 /26 prevent no adds
        columnNumber = Math.floor((columnNumber-1)/26);
        //console.log(columnNumber + "```` " + ans);
    }

    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
//console.log(convertToTitle(701))