/**
 * link:https://leetcode-cn.com/problems/rotate-string/
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if(A.length != B.length)
    {
        return false;
    }
    if(A==B)
    {
        return true;
    }
    for (let i=0; i< A.length; i++)
    {
        for(let j=0; j< B.length ; j++)
        {
            if(A.charAt(i) == B.charAt(j) && check(A,B,i,j) == true)
            {
                return true;
            }
        }
    }
    return false;
};
/**
 * @param {string} A
 * @param {string} B
 * @param {number} posa
 * @param {number} posb
 * @return {boolean}
 */
var check = function (A, B, posa, posb)
{
    let counter =0;
    while (A.charAt( posa ) == B.charAt( posb ) && counter < A.length)
    {
        posa++;
        posb++;
        counter++;
        if(posa == A.length){
            posa = posa - A.length;
        }
        if(posb == B.length){
            posb = posb - B.length;
        }
    }
    if(counter == A.length){
        return true;
    }
    else{
        return false;
    }
}