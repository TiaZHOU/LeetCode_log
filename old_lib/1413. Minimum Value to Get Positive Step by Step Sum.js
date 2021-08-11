/**
 * link : https://leetcode-cn.com/problems/minimum-value-to-get-positive-step-by-step-sum/
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let ans = 1; temp = 1;
    for(let i= 0; i< nums.length; i++)
    {
        ans = ans + nums[i];
        if(ans < temp)
        {
            temp = ans;
        }
    }
    return 2-temp;
};