/**
 * link:https://leetcode-cn.com/problems/count-number-of-nice-subarrays/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let odds = [];
    let ans =0;
    // count how many odd nums
    for(let i=0; i< nums.length ; i++)
    {
        if(nums[i]% 2 ==1)
        {
            odds.push(i);
        }
    }
    // odd nums are not enough
    if(odds.length < k)
    {
        return ans;
    }
    if(odds.length == k)
    {
        ans = (odds[0]+1) * (nums.length -odds[1]);
        return ans;
    }
    // have more than k odd numbs
    //dfs to search how many sub strings
    ans = ans + (odds[0]+1)*(odds[k] - odds[k-1]);
    for(let i=1; i< odds.length-k; i++)
    {
        ans = ans + (odds[i]-odds[i-1]) * (odds[i+k]-odds[i+k-1]);
    }
    ans = ans + (odds[odds.length-k]-odds[odds.length-1-k]) * (nums.length-odds[odds.length-1]);
    return ans;
};