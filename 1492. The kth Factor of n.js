/**
 * link: https://leetcode-cn.com/problems/the-kth-factor-of-n/
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    var list = [];
    for(let i =1; i< n+1; i++)
    {
        if(n%i==0)
        {
            list.push(i);
        }
    }
    if(list.length<k)
    {
        return -1;
    }
    else
    {
        return list[k-1];
    }

};