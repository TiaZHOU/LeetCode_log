/**
 * link:https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let head =0;
    let foot = nums.length-1;
    let temp;

    while(head != foot && head <  foot)
    {
        while(head <  foot &&  nums[head]%2 == 1)
        {
            head ++;
        }
        while(head <  foot && nums[foot]%2 == 0)
        {
            foot--;
        }
        temp = nums[head];
        nums[head] = nums[foot];
        nums[foot] = temp;
        head++;
        foot--;
    }
    return nums;
};