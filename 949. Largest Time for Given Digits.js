/**
 * link: https://leetcode-cn.com/problems/largest-time-for-given-digits/
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function(arr) {
    let ans =0;
    let temp =0;
    let res ="";
    for(let i=0; i< arr.length; i++)
    {
        for(let j=0; j< arr.length; j++)
        {
            for(let k=0; k< arr.length; k++)
            {
                for(let l=0; l< arr.length; l++)
                {
                    if(arr[i]>2 || (arr[i]==2&&arr[j]>3) ||arr[k]>5 || i==j ||i==k || i==l || j==k || j==l || k==l)
                    {
                        continue;
                    }
                    temp=arr[i]*1000 + arr[j]*100 + arr[k]*10 + arr[l];
                    if(temp >= ans)
                    {
                        ans = temp;
                        res = arr[i]+''+arr[j]+':'+arr[k]+''+arr[l]+'';
                    }

                }
            }
        }
    }
    return res;
};