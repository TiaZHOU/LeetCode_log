/**
 * link: https://leetcode-cn.com/problems/final-prices-with-a-special-discount-in-a-shop/
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let ans = [];
    for(let i=0; i< prices.length-1; i++)
    {
        for(let j=i+1; j< prices.length; j++)
        {
            if(prices[j]<=prices[i])
            {
                ans[i] = prices[i]-prices[j];
                break;
            }
            if(prices[j] > prices[i] && j == prices.length-1)
            {
                ans[i] =prices[i];
            }

        }
    }
    ans[prices.length-1] = prices[prices.length-1];
    return ans;
};