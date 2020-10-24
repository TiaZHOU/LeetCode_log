/**
 * link: https://leetcode-cn.com/problems/find-majority-element-lcci/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    if (nums.length === 1) return nums[0];
    let map = new Map(), max = -Infinity, len = nums.length / 2;
    for (let i = 0; i < nums.length; i++)
    {
        const curr = nums[i];
        map.set(curr, map.has(curr) ? map.get(curr) + 1 : 1);
        max = Math.max(max, map.get(curr));
        if(max>len)
        {
            console.log(curr)
            return curr
        }
    }
    return -1;

};