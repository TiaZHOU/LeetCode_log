/**
 * link:https://leetcode-cn.com/problems/goat-latin/
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    let temp = S.split(' ');
    for(let i=0; i< temp.length; i++)
    {
        let head = temp[i].charAt(0);
        if(head == 'a'||head == 'e'||head == 'i'||head == 'o'||head == 'u'||head == 'A'||head == 'E'||head == 'I'||head == 'O'||head == 'U')
        {
            temp[i] = temp[i] +"ma";
        }
        else
        {
            temp[i] =temp[i].substring(1) + head + "ma";
        }
        for(let j=0; j<= i; j++)
        {
            temp[i] = temp[i] + "a";
        }
    }
    let ans = temp.join(' ');
    return ans;
};