/**
 * link:https://leetcode-cn.com/problems/grumpy-bookstore-owner/
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    //X greater than length(good temper Owner)
    if(X >= grumpy.length)
    {
        return customers.reduce((a,b)=> a +b,0);
    }
    //X less than length
    let temp =0;
    let max = 0;
    for(let i=0; i< customers.length; i++)
    {
        if(grumpy[i] === 1) grumpy[i] = customers[i];
        if(i<X)
        {
            temp = temp + grumpy[i];
        }
        else
        {
            temp = temp - grumpy[i-X] + grumpy[i];
        }
        if(temp > max)
        {
            max = temp;
        }

    }
    let cus_max = customers.reduce((a,b) => a+b,0);
    let grumpy_max = grumpy.reduce((a,b) => a+b,0);
    return cus_max - grumpy_max  + max;
};