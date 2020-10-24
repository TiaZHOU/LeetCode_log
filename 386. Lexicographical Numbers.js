/**
 * links: https://leetcode-cn.com/problems/lexicographical-numbers/
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let ans=[];
    for(let i=1; i< n+1; i++)
    {
        ans[i-1] =i.toString();
    }
    ans.sort();
    return ans;
};