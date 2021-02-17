/**
 * link:https://leetcode-cn.com/problems/jian-sheng-zi-lcof/
 * @param {number} n
 * @return {number}
 */
var cuttingRope2 = function(n) {
    if(n == 2 || n==3) return n-1;
    let ans = 1;
    while(n>4)
    {
        n = n-3;
        ans = ans *3;
    }
    return ans*n;
};


var cuttingRope = function(n) {
    if(n == 2) return 1;
    let ans = 1;
    let dp =[1,1];
    for(let i=3; i <= n ; i++)
    {
        let min = Math.min(...dp);
        let max = Math.max(...dp);
        let add = (min+1)*(ans/min);
        let apart = (ans/max)*largestmulti(max+1);
        if(add >= apart)
        {
            ans = add;
            dp[dp.indexOf(min)] ++;
        }
        else
        {
            ans = apart;
            dp.splice(dp.indexOf(max),1);
            dp=dp.concat(twosub(max+1));
        }
    }
    return ans;
// min+1 or max+1 apart into 2 nums
};

var largestmulti = function(n){
    if(n%2 ==0) return (n/2)*(n/2);
    if(n%2 ==1) return (n-1)*(n+1)/4;
};

var twosub = function(max){
    if(max%2 ==0) return [max/2,max/2];
    if(max%2 ==1) return [(max-1)/2,(max+1)/2];
};