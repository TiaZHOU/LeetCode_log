/**
 * link:https://leetcode-cn.com/problems/minimum-increment-to-make-array-unique/
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    A= A.sort((a,b)=> a-b);
    let ans =0;
    for(let i=1; i< A.length; i++)
    {
        if(A[i-1]>= A[i])
        {
            ans  = ans+ A[i-1] - A[i] + 1;
            A[i] =  A[i-1] + 1;
        }
    }
    return ans;
};