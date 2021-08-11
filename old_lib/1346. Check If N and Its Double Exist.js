/**
 * link: https://leetcode-cn.com/problems/check-if-n-and-its-double-exist/
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let temp = new Set();
    for(let i=0; i< arr.length; i++)
    {
        if(temp.has(arr[i]*2) || temp.has(arr[i]/2 ))
        {
            return true;
        }
        temp.add(arr[i]);
    }
    return false;
};

var checkIfExist2 = function(arr) {
    return arr.some((e,i)=> arr.indexOf(e * 2) !== -1 && arr.indexOf(e * 2) !==i )
};