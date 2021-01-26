/**
 * link:https://leetcode-cn.com/problems/k-concatenation-maximum-sum/
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function(arr, k) {

    let sum = arr.reduce((a,b)=> a+b ,0);
    // all inter
    if(arr.every(x => x >= 0))
    {
        return sum*k% 1000000007;
    }

    if(k ==1)
    {
        return max_sub(arr);
    }
    else
    {
        if(sum <= 0)
        {
            return max_sub(arr.concat(arr));
        }
        else
        {
            let max_pre = 0;
            let max_post =0;
            let temp=0;
            for(let i=0; i< arr.length; i++)
            {
                temp = temp + arr[i];
                if(temp > max_pre)
                {
                    max_pre =temp;
                }
            }

            temp=0;
            for(let i=arr.length-1; i>=0; i--)
            {
                temp = temp + arr[i];
                if(temp > max_post)
                {
                    max_post =temp;
                }
            }
            let sub =  max_sub(arr.concat(arr));
            let sums = sum*(k-2);
            if(max_pre >= sum)
            {
                sums = sums + max_pre;
            }
            else
            {
                sums = sums +sum;
            }
            if( max_post >= sum)
            {
                sums = sums + max_post;
            }
            else
            {
                sums = sums +sum;
            }
            if(sums >= sub) return sums% 1000000007;
            if(sum < sub) return sub% 1000000007;


        }
    }

};

/**
 * @param {number[]} arr
 * @return {number}
 */
var max_sub = function(arr){
    let pre  = [];
    pre[0]= arr[0];
    for(let i=1; i< arr.length; i++)
    {
        pre[i] =  pre[i-1] + arr[i];
    }
    let max = pre[0];
    let min = pre[0];
    //largest pre_sub pos
    let max_pos = 0;
    //largest post_sub pos
    let min_pos = 0;
    let max_sub =pre[0];
    for (let i=1; i< arr.length; i++)
    {
        if(pre[i] - min > max_sub)
        {
            max_sub = pre[i]-min;
        }
        if(pre[i] < min)
        {
            min_pos = i;
            min = pre[i];
        }
    }
    if(max_sub <0) return 0;
    return max_sub;
};