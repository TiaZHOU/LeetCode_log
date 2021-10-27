//You are playing a Flip Game with your friend. 
//
// You are given a string currentState that contains only '+' and '-'. You and 
//your friend take turns to flip two consecutive "++" into "--". The game ends 
//when a person can no longer make a move, and therefore the other person will be the 
//winner. 
//
// Return all possible states of the string currentState after one valid move. 
//You may return the answer in any order. If there is no valid move, return an 
//empty list []. 
//
// 
// Example 1: 
//
// 
//Input: currentState = "++++"
//Output: ["--++","+--+","++--"]
// 
//
// Example 2: 
//
// 
//Input: currentState = "+"
//Output: []
// 
//
// 
// Constraints: 
//
// 
// 1 <= currentState.length <= 500 
// currentState[i] is either '+' or '-'. 
// 
// Related Topics 字符串 👍 30 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} currentState
 * @return {string[]}
 */
var generatePossibleNextMoves = function(currentState) {
    let state = currentState.split("");
    let ans =[];
    for(let i=0; i<state.length; i++)
    {
        if(state[i] === "+" && state[i+1] ==="+")
        {
            state.splice(i,2,"-","-");
            ans.push(state.join(''));
            state.splice(i,2,"+","+");
        }
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
console.log(generatePossibleNextMoves("++++"));