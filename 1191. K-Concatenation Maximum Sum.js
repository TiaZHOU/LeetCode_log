/**
 * link:https://leetcode-cn.com/problems/k-concatenation-maximum-sum/
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function(arr, k) {
    if(arr.every(x => x <= 0))
    {
        return 0;
    }
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
            let temp2=0;
            for(let i=0; i< arr.length; i++)
            {
                temp = temp + arr[i];
                if(temp > max_pre)
                {
                    max_pre =temp;
                }

                temp2 = temp2 + arr[arr.length-1-i];
                if(temp2 > max_post)
                {
                    max_post =temp2;
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
    let min = pre[0];
    let max_sub =pre[0];
    for(let i=1; i< arr.length; i++)
    {
        pre[i] =  pre[i-1] + arr[i];

        if(pre[i] - min > max_sub)
        {
            max_sub = pre[i]-min;
        }
        if(pre[i] < min)
        {
            min = pre[i];
        }
    }
    if(max_sub <0) return 0;
    return max_sub;
};

/**
 * link:https://leetcode-cn.com/problems/k-concatenation-maximum-sum/
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum2 = function (arr, k) {
    let right = 0;
    let left = 0;
    let toLeftSum = 0;
    let toRightSum = 0;
    let max = 0;
    for (let l = 0, len = arr.length - 1, curMax = 0, r = len; l <= len; ++l, --r) {
        toRightSum += arr[l]
        toLeftSum += arr[r]
        curMax = Math.max(0, curMax + arr[l])
        max = Math.max(max, curMax)
        left = Math.max(left, toLeftSum)
        right = Math.max(right, toRightSum)
    }
    if (k === 1) {
        return max % 1000000007;
    } else if (toRightSum <= 0) {
        return Math.max(left + right, max) % 1000000007
    } else {
        return Math.max(toRightSum * (k - 2) + left + right, max) % 1000000007
    }
};

