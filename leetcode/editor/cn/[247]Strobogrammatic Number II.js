//Given an integer n, return all the strobogrammatic numbers that are of length 
//n. You may return the answer in any order. 
//
// A strobogrammatic number is a number that looks the same when rotated 180 
//degrees (looked at upside down). 
//
// 
// Example 1: 
// Input: n = 2
//Output: ["11","69","88","96"]
// Example 2: 
// Input: n = 1
//Output: ["0","1","8"]
// 
// 
// Constraints: 
//
// 
// 1 <= n <= 14 
// 
// Related Topics 递归 数组 字符串 👍 64 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
    let ans =[];
    if(n % 2  === 0)
    {
        ans = ["11","69","88","96"];
        if(n ===2) return  ans;
        if(n > 2) ans = ["00"].concat(ans);
    }

    else
    {
        ans = ["0","1","8"];
        if(n === 1) return ans;
    }
    let len = (n+(n%2))/2-1;
    //console.log("add " + len + " more round");
    let rotated_map =[
            ["9","6"],
            ["6","9"],
            ["8","8"],
            ["1","1"],
            ["0","0"]
        ];
    for(let i=0; i<len; i++)
    {
        let temp = ans;
        ans = [];
        for(let j =0; j<rotated_map.length;j++ )
        {
            //console.log("J = " + j);
            ans = ans.concat(addStrobogrammatic(temp,rotated_map[j][0],rotated_map[j][1]));
            //console.log("temp is " + temp);
        }
    }
        let k=0;
        while(k<ans.length)
        {
            if(ans[k].charAt(0) === "0")
            {
                ans.splice(k,1);
            }
            else
            {
                k++;
            }
        }
    return ans;
};
/**
 * @param {string []} str
 * @param {string} head
 * @param {string} tail
 * @return {string []}
 */
let addStrobogrammatic = function (str,head,tail)
{
   let nums = [];
   nums = Array.from(str);
    for(let i =0; i< str.length; i++)
   {
       nums[i] = head + str[i] + tail;
       //console.log("this is the " + i+ "th nubmer :"+nums[i]);
   }
   return nums;
}
//leetcode submit region end(Prohibit modification and deletion)
console.log(findStrobogrammatic(4));