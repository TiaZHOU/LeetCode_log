/**
 * link: https://leetcode-cn.com/problems/four-divisors/
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let ans =0;
    let div = 0;
    let temp =0;
    for(let i=0;i< nums.length;i++)
    {
        div =0;
        temp = 0;
        for(let j=1;j<=Math.sqrt(nums[i]);j++)
        {
            if(nums[i]%j ==0 || nums[i/j !=  j])
            {
                temp = temp+ j + nums[i]/j;
                div += 2;
            }
            if(div>4)
            {
                temp = 0;
                break;
            }
        }
        if(div == 4)
        {
            ans=ans +temp;
        }
    }
    return ans;
};