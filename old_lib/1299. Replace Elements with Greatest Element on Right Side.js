/**
 * link:https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side/
 * @return {number[]}
 */
var replaceElements = function(arr) {
    var temp=0;
    var temps =[];
    for (i= arr.length-1;i>0;i--)
    {
        if(arr[i]> temp)
        {
            temp = arr[i];
        }
        temps[i-1]=temp;
    }
    temps[arr.length-1]  = -1;
    return temps;
};