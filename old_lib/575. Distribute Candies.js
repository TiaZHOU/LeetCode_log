/**
 * link: https://leetcode-cn.com/problems/distribute-candies/submissions/
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let temp = new Set;
    for(let i=0; i< candyType.length; i++)
    {
        if(!temp.has(candyType[i]))
        {
            temp.add(candyType[i]);
        }
        if(temp.size >= candyType.length/2)
        {
            break;
        }
    }
    return temp.size;
};