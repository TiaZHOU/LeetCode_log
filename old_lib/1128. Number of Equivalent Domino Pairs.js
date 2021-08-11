/**
 * link: https://leetcode-cn.com/problems/number-of-equivalent-domino-pairs/
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let temp = new Map();
    let ans = 0;
    let mix = 0;
    for(let i=0; i< dominoes.length; i++)
    {
        //set the pair to numbers
        if(dominoes[i][0] > dominoes[i][1])
        {
            let mid = dominoes[i][0];
            dominoes[i][0] = dominoes[i][1];
            dominoes[i][1] = mid;
        }
        mix = dominoes[i][0] *10 + dominoes[i][1];
        //use map to detect pairs
        if(temp.has(mix))
        {
            ans = ans + temp.get(mix);
            temp.set(mix,temp.get(mix)+1);
        }
        else
        {
            temp.set(mix,1);
        }
    }
    return ans;
};