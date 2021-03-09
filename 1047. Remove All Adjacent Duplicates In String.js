/**
 * link:https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let index =0;
    let temp = [];
    temp[0] =  S.charAt(0);
    for (let i=1; i<S.length; i++)
    {
        if(S.charAt(i) == temp[index])
        {
            temp.splice(index,1);
            index--;
        }
        else
        {
            temp.push(S.charAt(i));
            index++;
        }
    }
    let ans = temp.join('');
    return ans;
};