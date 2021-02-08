/**
 * link:https://leetcode-cn.com/problems/longest-turbulent-subarray/
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    if(arr.length == 1 ) return 1;
    if(arr.length == 2 && arr[0] != arr[1]) return 2;
    let ans  = 1;
    let temp = 1;
    for(let i=1; i< arr.length; i++)
    {
        if( (arr[i-1] < arr[i] && arr[i] > arr[i+1]) || (arr[i-1] > arr[i] && arr[i] < arr[i+1]) )
        {
            temp++;
        }
        else
        {
            if(arr[i] != arr[i-1])
            {
                temp++;
            }
            ans = Math.max(ans,temp);
            temp = 1;
        }
    }
    return Math.max(ans,temp);
};