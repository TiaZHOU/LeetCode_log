//Given a string s, reverse only all the vowels in the string and return it. 
//
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both 
//cases. 
//
// 
// Example 1: 
// Input: s = "hello"
//Output: "holle"
// Example 2: 
// Input: s = "leetcode"
//Output: "leotcede"
// 
// 
// Constraints: 
//
// 
// 1 <= s.length <= 3 * 10⁵ 
// s consist of printable ASCII characters. 
// 
// Related Topics 双指针 字符串 👍 226 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if(s.length <= 1) return s;
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let temp = s.split('');
    //console.log(temp);
    let head = 0;
    let tail = temp.length-1;
    while(head <= tail)
    {
        while (!vowels.includes(temp[head]) && head < tail)
        {
            head++;
        }
        //console.log("head " + head);
        while (!vowels.includes(temp[tail]) && tail > head)
        {
            tail--;
        }
        //console.log("tail "+ tail);
        if(head >= tail)
        {
            break;
        }
        let vow = temp[head];
        temp.splice(head,1,temp[tail]);
        temp.splice(tail,1,vow);
        head++;
        tail--;
        //console.log(s);
    }
    return temp.join("");
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(reverseVowels("hello"));