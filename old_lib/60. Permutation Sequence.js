/**
 * link: https://leetcode-cn.com/problems/permutation-sequence/
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    if(n ==1) return "1";
    // filled by 1-n, evertime a number is used, delete it and move else forward
    let nums =[];
    //n! for each loop
    let digit = 1;
    // current number in the array
    let order;
    let ans ="";
    //fill 1-n in to array
    for(let i=0; i< n; i++)
    {
        nums[i] = i+1;
        digit = digit*(i+1);
    }
    //loops for each digit of the ans
    for(let i=n; i> 0; i--)
    {
        digit = digit/i;
        order = (k-k%digit)/digit;
        if(k%digit !=0)
        {
            k = k%digit;
        }
        if(k%digit ==0)
        {
            k = digit;
            order--;
        }
        ans = ans.concat(nums[order]+"");
        nums.splice(order,1);
    }
    return ans;
};