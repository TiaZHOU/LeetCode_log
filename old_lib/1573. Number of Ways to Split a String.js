/**
 * link:https://leetcode-cn.com/problems/number-of-ways-to-split-a-string/
 * @param {string} s
 * @return {number}
 */
var numWays = function(s) {
    const pos = [];
    let ans=0;
    let nums = s.split('');
    let counter=0;
    for(let i=0; i<nums.length;i++)
    {
        if(nums[i]=='1')
        {
            pos[counter] = i+1;
            counter += 1;
        }
    }
    if(counter%3 != 0)
    {
        return 0;
    }
    // TO DO : fix all 0 case
    if(counter == 0)
    {
        ans = ((nums.length-1)*(nums.length-2)/2)%(1e9+7);
        return ans;
    }
    let po = counter/3;
    ans = ((pos[po]-pos[po-1])*(pos[2*po]-pos[2*po-1]))%(1e9+7);
    return ans;
};