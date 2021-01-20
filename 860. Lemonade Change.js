/**
 * link:https://leetcode-cn.com/problems/lemonade-change/
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let pocket = new Map();
    pocket.set(5,0);
    pocket.set(10,0);
    pocket.set(20,0);
    if(bills[0] != 5)
    {
        return false;
    }
    for(let i=0; i< bills.length; i++)
    {
        if(bills[i]==5)
        {
            pocket.set(5,pocket.get(5)+1);
        }
        if(bills[i]==10)
        {
            if(pocket.get(5) == 0 )
            {
                return false;
            }
            else
            {
                pocket.set(5,pocket.get(5)-1);
                pocket.set(10,pocket.get(10)+1);
            }
        }
        if(bills[i] ==20)
        {
            if(pocket.get(5) == 0 )
            {
                return false;
            }
            else
            {
                if(pocket.get(10)== 0 && pocket.get(5) < 3)
                {
                    return false;
                }
                else if(pocket.get(10)!= 0 && pocket.get(5) !=0 )
                {
                    pocket.set(5,pocket.get(5)-1);
                    pocket.set(10,pocket.get(10)-1);
                    pocket.set(20,pocket.get(20)+1);
                }
                else if(pocket.get(10)== 0 && pocket.get(5) >= 3)
                {
                    pocket.set(5,pocket.get(5)-3);
                    pocket.set(20,pocket.get(20)+1);
                }
            }
        }
    }
    return true;
};