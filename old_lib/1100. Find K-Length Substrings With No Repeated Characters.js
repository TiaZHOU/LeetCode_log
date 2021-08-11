/**
 * link: https://leetcode-cn.com/problems/find-k-length-substrings-with-no-repeated-characters/
 * @param {string} S
 * @param {number} K
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(S, K) {
    if(K > S.length)
    {
        return 0;
    }
    if( K ==1)
    {
        return S.length;
    }
    let set = new Set, ans =0;
    for(let i=0; i< S.length-K+1; i++)
    {
        set.add(S.charAt(i))
        for (let j=1; j< K;j++)
        {
            if(set.has(S.charAt(i+j)))
            {
                break;
            }
            set.add(S.charAt(i+j));
            if(set.size == K)
            {
                ans++;
            }
        }
        set.clear();
    }
    return ans;
};