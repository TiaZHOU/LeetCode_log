/**
 * link:https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let index =0;
    let temp = [];
    for (let i=0; i<S.length; i++)
    {
        temp[i] = S.charAt(i);
    }
    for (let i=0; i<S.length; i++)
    {
        if(temp[index] == temp[index+1])
        {
            temp.splice(index,2);
            index--;
        }
        else
        {
            index++;
        }
    }
    let ans = temp.join('');
    return ans;
};