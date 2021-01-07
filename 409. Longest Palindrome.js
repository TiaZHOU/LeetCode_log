/**
 * link: https://leetcode-cn.com/problems/longest-palindrome/
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let temp = new Map();
    let ans = 0;
    //check pairs
    for(let i=0; i< s.length; i++)
    {
        if(temp.has(s.charAt(i)))
        {
            temp.set(s.charAt(i),temp.get(s.charAt(i))+1);
            if(temp.get(s.charAt(i))%2==0)
            {
                ans =ans+2;
            }
        }
        else
        {
            temp.set(s.charAt(i),1) ;
        }

    }
    // check the middle one if the ans size small than string
    if(ans < s.length)
    {
        ans ++;
    }
    return ans;
};