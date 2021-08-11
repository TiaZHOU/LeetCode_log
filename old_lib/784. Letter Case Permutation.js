/**
 * link:https://leetcode-cn.com/problems/letter-case-permutation/
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    const text = /[A-Za-z]/;

    function dfs(s,pos){
        if(pos>= s.length)return [s];
        const letter = s.charAt(pos);
        const next = pos+1;
        if(text.test(letter))
        {
            const r = s.slice(0,pos)+letter.toLowerCase()+ s.slice(pos+1);
            const arr = dfs(r,next);
            const l = s.slice(0,pos)+ letter.toUpperCase()+ s.slice(pos+1);
            return arr.concat(dfs(l,next));
        }
        else
        {
            return dfs(s,next);
        }
    }
    const ans = dfs(S,0);
    return ans;
};
