/**
 * link: https://leetcode-cn.com/problems/sum-of-digits-in-the-minimum-number/submissions/
 * @param {number[]} A
 * @return {number}
 */
var sumOfDigits = function(A) {
    let ans = A[0];
    for(i =0; i< A.length; i++)
    {
        if(A[i] < ans)
        {
            ans = A[i];
        }
    }
    if(ans == 100)
    {
        return 0;
    }
    ans = ans%10 + (ans - ans%10)/10;
    if(ans%2 == 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }

};