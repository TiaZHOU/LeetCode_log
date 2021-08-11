/**
 * link: https://leetcode-cn.com/problems/four-divisors/
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let ans = 0;
    for(let i=0; i< nums.length;i++)
    {
        let counter =0, temp =0;
        for(let j=1; j<= nums[i]; j++)
        {
            if(nums[i]%j == 0)
            {
                counter++;
                temp += j;
            }
            if(counter >4)
            {
                break;
            }
        }
        if(counter == 4)
        {
            ans += temp;
        }
    }
    return ans;
};