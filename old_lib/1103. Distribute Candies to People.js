/**
 * /link:https://leetcode-cn.com/problems/distribute-candies-to-people/
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let sum = num_people*(num_people+1)/2;
    let round = 0;
    // figure out how many full rounds.
    while(candies > 0)
    {
        candies = candies - sum - num_people*num_people*round;
        round++;
    }
    round--;
    candies = candies + sum + num_people*num_people*(round);
    //ans arrary
    let ans = new Array(num_people).fill(0);

    //for loop for results
    for(let i=0; i<num_people; i++)
    {
        // sum all full rounds first
        ans[i] = num_people*round*(round-1)/2 + (i+1)*(round);
        // check if rest of candies can fill i-th pos in the last round
        if( round*num_people + (i+1) <= candies )
        {
            ans[i] =  ans[i]+ round*num_people + (i+1);
            candies = candies - round*num_people - (i+1);
        }
        // if not, fill all rest of candies to i-th pos
        else
        {
            ans[i] += candies;
            candies = 0;
        }
    }
    return ans;
};