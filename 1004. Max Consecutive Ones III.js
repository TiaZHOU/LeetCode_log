/**
 * link : https://leetcode-cn.com/problems/max-consecutive-ones-iii/
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    //return if K is greater than num of 0 in the arr
    if( sum = A.reduce((a,b)=> a+b, 0) + K >= A.length )
    {
        return A.length;
    }
    let ans= 0;
    let head =0;
    for(let i=0; i< A.length; i++)
    {
        if(K >0)
        {
            if(A[i] == 0)
            {
                K--;
            }
        }
        // size >=K
        else
        {
            if(A[i] == 0)
            {
                while(A[head] != 0)
                {
                    head++;
                }
                head++;
            }
        }
        ans =Math.max(ans,i - head +1);
    }
    return ans;

};