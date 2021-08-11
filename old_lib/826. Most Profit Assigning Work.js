/**
 * link:https://leetcode-cn.com/problems/most-profit-assigning-work/submissions/
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let total = 0;
    let highest = 0;
    for (let i =0; i < worker.length; i++)
    {
        for(let j=0;j<difficulty.length;j++)
        {
            if(worker[i]>= difficulty[j])
            {
                if(profit[j]>= highest)
                {
                    highest= profit[j];
                }
            }
        }
        total = total + highest;
        highest=0;
    }
    return total;
};