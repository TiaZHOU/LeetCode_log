/**
 * link:https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences/
 * @param {number[]} nums
 * @return {boolean}
 */
const isPossible = function(nums) {
    let max = nums[nums.length - 1];
    let arr = new Array(max + 2).fill(0),
        tail = new Array(max + 2).fill(0);
    for(let num of nums)
    {
        arr[num] ++;
    }
    for(let num of nums)
    {
        if(arr[num] === 0)
        {
            continue;
        }
        else if(tail[num-1] > 0)
        {
            tail[num-1]--;
            tail[num]++;
        }
        else if(arr[num+1] > 0 && arr[num+2] > 0)
        {
            arr[num+1]--;
            arr[num+2]--;
            tail[num+2]++;
        }
        else
        {
            return false;
        }
        arr[num]--;
    }
    return true
}