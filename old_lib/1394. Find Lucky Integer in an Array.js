/**
 * https://leetcode-cn.com/problems/find-lucky-integer-in-an-array/
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let ans =-1;
    let temp = new Map;
    for(let i=0; i< arr.length; i++)
    {
        if(temp.has(arr[i]))
        {
            temp.set (arr[i], temp.get(arr[i]) +1);
        }
        else
        {
            temp.set(arr[i], 1);
        }
    }
    for (let [key, value] of temp)
    {
        if(key == value)
        {
            ans = Math.max(ans, key);
        }
    }
    return ans;
};