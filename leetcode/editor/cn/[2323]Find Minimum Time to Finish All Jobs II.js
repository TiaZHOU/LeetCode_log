//You are given two 0-indexed integer arrays jobs and workers of equal length, 
//where jobs[i] is the amount of time needed to complete the iᵗʰ job, and workers[
//j] is the amount of time the jᵗʰ worker can work each day. 
//
// Each job should be assigned to exactly one worker, such that each worker 
//completes exactly one job. 
//
// Return the minimum number of days needed to complete all the jobs after 
//assignment. 
//
// 
// Example 1: 
//
// 
//Input: jobs = [5,2,4], workers = [1,7,5]
//Output: 2
//Explanation:
//- Assign the 2ⁿᵈ worker to the 0ᵗʰ job. It takes them 1 day to finish the job.
//
//- Assign the 0ᵗʰ worker to the 1ˢᵗ job. It takes them 2 days to finish the 
//job.
//- Assign the 1ˢᵗ worker to the 2ⁿᵈ job. It takes them 1 day to finish the job.
//
//It takes 2 days for all the jobs to be completed, so return 2.
//It can be proven that 2 days is the minimum number of days needed.
// 
//
// Example 2: 
//
// 
//Input: jobs = [3,18,15,9], workers = [6,5,1,3]
//Output: 3
//Explanation:
//- Assign the 2ⁿᵈ worker to the 0ᵗʰ job. It takes them 3 days to finish the 
//job.
//- Assign the 0ᵗʰ worker to the 1ˢᵗ job. It takes them 3 days to finish the 
//job.
//- Assign the 1ˢᵗ worker to the 2ⁿᵈ job. It takes them 3 days to finish the 
//job.
//- Assign the 3ʳᵈ worker to the 3ʳᵈ job. It takes them 3 days to finish the 
//job.
//It takes 3 days for all the jobs to be completed, so return 3.
//It can be proven that 3 days is the minimum number of days needed.
// 
//
// 
// Constraints: 
//
// 
// n == jobs.length == workers.length 
// 1 <= n <= 10⁵ 
// 1 <= jobs[i], workers[i] <= 10⁵ 
// 
//
// Related Topics 贪心 数组 排序 👍 0 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} jobs
 * @param {number[]} workers
 * @return {number}
 */
var minimumTime = function(jobs, workers) {
    jobs.sort((a, b) => a-b);
    workers.sort((a, b) => a-b);
    let ans =0;
    for(let i=0; i<jobs.length; i++)
    {
        if(ans < jobs[i]/workers[i])
        {
            ans = jobs[i]/workers[i];
        }
    }

    if(ans % 1 !==0)
    {
        ans = Math.floor(ans) +1;
    }
    return ans;
};
//leetcode submit region end(Prohibit modification and deletion)
