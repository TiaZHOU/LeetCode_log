/**
 * link:https://leetcode-cn.com/problems/largest-unique-number/
 * @param {number[]} A
 * @return {number}
 */

var largestUniqueNumber = function(A) {
    let map = new Map;
    let ans =-1;
    for (let i=0; i<A.length; i++)
    {
        if (!map.has(A[i]))
        {
            map.set(A[i],1);
        }
        else
        {
            map.set(A[i],map.get(A[i])+1);
        }
    }
    for(let[key,value] of map)
    {
        if(value === 1 && key > ans)
        {
            ans = key;
        }
    }
    return ans;
};