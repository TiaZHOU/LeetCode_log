/**
 * link: https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let arr = [];
    let pos = m-1;
    let len = n;
    for (let i=0; i<= n ; i++)
    {
        arr[i] = i;
    }
    while(len > 1)
    {
        if(pos >= len)
        {
            pos = pos - len;
        }
        else
        {
            arr.splice(pos,1);
            len--;
            pos = pos +m-1;
        }


    }
    return arr[0];
};