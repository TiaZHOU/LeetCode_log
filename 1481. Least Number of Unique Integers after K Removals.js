/**
 * link:https://leetcode-cn.com/problems/least-number-of-unique-integers-after-k-removals/
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let map = new Map();
    for(let i =0;i<arr.length;i++)
    {
        map.set(arr[i], map.has(arr[i])? map.get(arr[i])+1 : 1);
    }
    let temp = Array.from(map.values());
    temp.sort((a,b)=> b-a);
    for (let j=0; j< k; j++)
    {
        temp[temp.length-1]--;
        if(temp[temp.length-1]==0)
        {
            temp.pop();
        }
    }
    return temp.length;
};