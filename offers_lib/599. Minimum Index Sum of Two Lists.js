/**
 * link:https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let ans = [];
    let temp_list = new Set(list1);
    let count = list1.length + list2.length;
    for(let i =0; i< list2.length; i++)
    {
        if (temp_list.has(list2[i]))
        {
            if(list1.indexOf(list2[i]) + i == count)
            {
                ans.push(list2[i]);
            }
            if(list1.indexOf(list2[i]) + i < count)
            {
                ans =[];
                ans[0] = list2[i];
                count = list1.indexOf(list2[i]) + i;
            }

        }
    }
    return ans;
};
